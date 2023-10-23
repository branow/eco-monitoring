

function getPollutionsLosses(pollutionList){
    let objectList = [];
    let pollutantList = [...new Set(pollutionList.map(pollution => pollution.pollutant))];
    for (let i = 0; i < pollutantList.length; i++){
        if (pollutantList[i].sf !== 0 || pollutantList[i].rfc === 0) continue;
        let emissionAndConcentrationValues = getEmissionAndConcentration(pollutionList, pollutantList[i], pollutantList.length);
        let kValues = getKValues(pollutionList, pollutantList[i], pollutantList.length);
        let qmi = emissionAndConcentrationValues[0];
        let po = emissionAndConcentrationValues[1];
        let kNas = kValues[0];
        let kF = kValues[1];
        let qn = pollutantList[i].massConsumption;
        let mi = qmi - qn;
        let fineSumValues = calculateFineSum(qmi, mi, pollutantList[i], kNas, kF);
        let pollutionObj = createObjectLooseValues(pollutantList[i].pollutantName, qmi, qn, mi,
            pollutantList[i].gdk, po, fineSumValues[0], fineSumValues[1], fineSumValues[2]);
        objectList.push(pollutionObj);
    }
    console.log(objectList);
    return objectList;
}

function createObjectLooseValues(pollutantName, qmi, qn, mi, gdk, po, ai, kzi, fineSum){
    let pollutionObj = {};
    pollutionObj['pollutant'] = pollutantName;
    pollutionObj['qmi'] = round(qmi);
    pollutionObj['qn'] = round(qn);
    pollutionObj['mi'] = round(mi);
    pollutionObj['gdk'] = round(gdk);
    pollutionObj['po'] = round(po);
    pollutionObj['ai'] = round(ai);
    pollutionObj['kzi'] = round(kzi);
    pollutionObj['fineSum'] = round(fineSum);
    return pollutionObj;
}

function calculateFineSum(qmi, mi, currentPollutant, kNas, kF){
    let Ai = 1 / currentPollutant.gdk;
    let Kt = kNas * kF;
    let Kzi = qmi / currentPollutant.gdk;
    let fineSum = mi * 1.1 * 6700 * Ai * Kt * Kzi;
    return [Ai, Kzi, fineSum];
}

function getKValues(pollutionList, pollutant) {
    let pollutionsWithCurrentPollutant =
        pollutionList.filter(e => e.pollutant.pollutantId === pollutant.pollutantId);
    let kNas = pollutionsWithCurrentPollutant[0].company.settlement.factors.populationSizeFactor.factor;
    let kF = pollutionsWithCurrentPollutant[0].company.settlement.factors.settlementTypeFactor.factor;
    return [kNas, kF];
}