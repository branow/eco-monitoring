


function calcHazardRatio(pollutions) {
    let table = getNonCarcinogenicValues(pollutions);
    let sum = 0;
    for (let i in table) {
        sum += table.hg;
    }
    return {
        hq: sum,
        table: table,
    }
}


function calcCarcinogenicRisk(pollutions) {
    let table = getCarcinogenicValues(pollutions);
    let rc = 0;
    for (let i in table) {
        rc += table.rc;
    }
    let popul = 1_687_000;
    let prc = rc * popul;
    return {
        rc: rc,
        table: table,
        prc: prc,
        popul: popul,
    }
}


function getCarcinogenicValues(pollutionList){
    let objectList = [];
    let pollutantList = [...new Set(pollutionList.map(pollution => pollution.pollutant))];
    for (let i = 0; i < pollutantList.length; i++){
        if (pollutantList[i].sf === 0) continue;
        let crObj = {};
        let values = getEmissionAndConcentration(pollutionList, pollutantList[i], pollutantList.length);
        let emissionMass = values[0];
        let concentration = values[1];
        let urValue = calculateUrForPollution(pollutantList[i].sf)
        crObj['pollutant'] = pollutantList[i].pollutantName;
        crObj['emissionMass'] = emissionMass;
        crObj['concentration'] = concentration;
        crObj['sf'] = pollutantList[i].sf;
        crObj['ur'] = urValue;
        crObj['cr'] = concentration * urValue;
        objectList.push(crObj);
    }
    console.log(objectList);
    return objectList;
}



function getNonCarcinogenicValues(pollutionList){
    let objectList = [];
    let pollutantList = [...new Set(pollutionList.map(pollution => pollution.pollutant))];
    for (let i = 0; i < pollutantList.length; i++){
        if (pollutantList[i].sf !== 0 || pollutantList[i].rfc === 0) continue;
        let ncrObj = {};
        let values = getEmissionAndConcentration(pollutionList, pollutantList[i], pollutantList.length);
        let emissionMass = values[0];
        let concentration = values[1];
        ncrObj['pollutant'] = pollutantList[i].pollutantName;
        ncrObj['emissionMass'] = emissionMass;
        ncrObj['concentration'] = concentration;
        ncrObj['hq'] = concentration / pollutantList[i].rfc;
        objectList.push(ncrObj);
    }
    console.log(objectList);
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
    for ( ; pollutions.length; j++){
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