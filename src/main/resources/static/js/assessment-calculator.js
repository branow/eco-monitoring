


function calcHazardRatio(pollutions) {
    let table = getNonCarcinogenicValues(pollutions);
    let sum = 0;
    for (let i in table) {
        sum += table[i].hq;
    }
    return {
        hq: round(sum),
        table: table,
    }
}


function calcCarcinogenicRisk(pollutions) {
    let table = getCarcinogenicValues(pollutions);
    let cr = 0;
    for (let i in table) {
        cr += table[i].cr;
    }
    let popul = 1_687_000;
    let prc = cr * popul;
    return {
        cr: cr,
        table: table,
        prc: round(prc),
        popul: popul,
    }
}


function getCarcinogenicValues(pollutionList){
    let objectList = [];
    let pollutants = pollutionList.map(pollution => pollution.pollutant);
    let pollutantList = distinct(pollutants, (p1, p2) => p1.pollutantId === p2.pollutantId);
    for (let i = 0; i < pollutantList.length; i++){
        if (pollutantList[i].sf === 0) continue;
        let crObj = {};
        let values = getEmissionAndConcentration(pollutionList, pollutantList[i], pollutantList.length);
        let emissionMass = values[0];
        let concentration = values[1];
        let urValue = calculateUrForPollution(pollutantList[i].sf)
        crObj['pollutant'] = pollutantList[i].pollutantName;
        crObj['emissionMass'] = round(emissionMass);
        crObj['concentration'] = round(concentration);
        crObj['sf'] = round(pollutantList[i].sf);
        crObj['ur'] = round(urValue);
        crObj['cr'] = round(concentration * urValue);
        objectList.push(crObj);
    }
    return objectList;
}



function getNonCarcinogenicValues(pollutionList){
    let objectList = [];
    let pollutants = pollutionList.map(pollution => pollution.pollutant);
    let pollutantList = distinct(pollutants, (p1, p2) => p1.pollutantId === p2.pollutantId);
    for (let i = 0; i < pollutantList.length; i++){
        if (pollutantList[i].sf !== 0 || pollutantList[i].rfc === 0) continue;
        let ncrObj = {};
        let values = getEmissionAndConcentration(pollutionList, pollutantList[i], pollutantList.length);
        let emissionMass = values[0];
        let concentration = values[1];
        ncrObj['pollutant'] = pollutantList[i].pollutantName;
        ncrObj['emissionMass'] = round(emissionMass);
        ncrObj['concentration'] = round(concentration);
        ncrObj['organ'] = pollutantList[i].impact.map(organ => organ.organName).join(', ');
        ncrObj['hq'] = round(concentration / pollutantList[i].rfc);
        objectList.push(ncrObj);
    }
    return objectList;
}

function getEmissionAndConcentration(pollutionList, pollutant, pollutantListLength){
    let emissionMass = 0;
    let concentration = 0;
    let pollutionsWithCurrentPollutant =
        pollutionList.filter(e => e.pollutant.pollutantId === pollutant.pollutantId);
    if (pollutionList.length !== pollutantListLength){
        let averageValues = getAverageValues(pollutionsWithCurrentPollutant);
        emissionMass = averageValues[0];
        concentration = averageValues[1];
    } else {
        emissionMass = pollutionsWithCurrentPollutant[0].emissionMass;
        concentration = pollutionsWithCurrentPollutant[0].concentration;
    }
    return [emissionMass, concentration];
}
function getAverageValues(pollutions){
    let emissionMassAvg = 0;
    let concentrationAvg = 0;
    let j = 0;
    for (j in pollutions) {
        emissionMassAvg += pollutions[j].emissionMass;
        concentrationAvg += pollutions[j].concentration;
    }
    emissionMassAvg /= j;
    concentrationAvg /= j;
    return [emissionMassAvg, concentrationAvg];
}


function calculateUrForPollution(pollutantSfValue){
    return Math.pow(pollutantSfValue, -1)/(70*20);
}

function round(num) {
    return Math.round(num * 100_000) / 100_000
}