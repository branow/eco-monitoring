
function calcDamages(pollutions) {
    let sum = 0;
    let year = pollutions[0].year;
    let minimumSalary = getMinimumSalaryPerYear(year);
    let table = getPollutionsLosses(pollutions, minimumSalary);
    for (let i in table) {
        sum += table[i].fineSum;
    }
    return {
        year: year,
        minimumSalary:  minimumSalary,
        fineSum: sum,
        table: table,
    }
}
function getPollutionsLosses(pollutionList, minimumSalary){
    let objectList = [];
    for (let i = 0; i < pollutionList.length; i++){
        let kValues = getKValues(pollutionList[i].company.settlement);
        let qmi = pollutionList[i].emissionMass;
        let qn = pollutionList[i].pollutant.massConsumption;
        let po = pollutionList[i].concentration;
        let kNas = kValues[0];
        let kF = kValues[1];
        let mi = qmi - qn;
        let fineSumValues = calculateFineSum(qmi, mi, minimumSalary, pollutionList[i].pollutant, kNas, kF);
        let pollutionObj = createObjectLooseValues(pollutionList[i].pollutant.pollutantName, qmi, qn, mi,
            pollutionList[i].pollutant.gdk, po, fineSumValues[0], fineSumValues[1], fineSumValues[2]);
        objectList.push(pollutionObj);
    }
    return objectList;
}

function createObjectLooseValues(pollutantName, qmi, qn, mi, gdk, po, ai, kzi, fineSum){
    let pollutionObj = {};
    pollutionObj['pollutant'] = pollutantName;
    pollutionObj['qmi'] = roundScope(qmi, 0);
    pollutionObj['qn'] = round(qn);
    pollutionObj['mi'] = roundScope(mi, 0);
    pollutionObj['gdk'] = round(gdk);
    pollutionObj['po'] = roundScope(po, 2);
    pollutionObj['ai'] = round(ai);
    pollutionObj['kzi'] = roundScope(kzi, 2);
    pollutionObj['fineSum'] = roundScope(fineSum / 1000, 0);
    return pollutionObj;
}

function calculateFineSum(qmi, mi, salary, currentPollutant, kNas, kF){
    let Ai = 1 / currentPollutant.gdk;
    let Kt = kNas * kF;
    let Kzi = qmi / currentPollutant.gdk;
    if (Kzi < 1) kzi = 1;
    let fineSum = mi * 1.1 * salary * Ai * Kt * Kzi;
    return [Ai, Kzi, fineSum];
}

function getKValues(settlement) {
    let kNas = settlement.factors.populationSizeFactor.factor;
    let kF = settlement.factors.settlementTypeFactor.factor;
    return [kNas, kF];
}


function getMinimumSalaryPerYear(year) {
    switch (year) {
        case 2016:
            return 1600;
        case 2017:
            return 3200;
        case 2018:
            return 3723;
        case 2019:
            return 4173;
        case 2020:
            return 5000;
        case 2021:
            return 6250;
    }
}










