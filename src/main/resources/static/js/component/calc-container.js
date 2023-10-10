
function HealthRiskContainer() {
    let healthCon = document.createElement("div");
    healthCon.className = 'health-risk';

    let compSelectCon = document.createElement("div");
    compSelectCon.appendChild(CompanySelect());
    let yearSelectCon = document.createElement("div");
    compSelectCon.appendChild(YearSelect());
    let butSelectCon = document.createElement("div");
    compSelectCon.appendChild(HealthRiskCalculateButton());

    let controlDiv = document.createElement("div");
    controlDiv.append(compSelectCon);
    controlDiv.append(yearSelectCon);
    controlDiv.append(butSelectCon);

    let resultDiv = document.createElement("div");
    resultDiv.innerHTML = `
        <div class="haz-rat-con">
            <h1>Hazard Ratio</h1>
            <div class="calc-res-container"></div>
        </div>
        <div class="car-risk-con">
            <h1>Carcinogenic Risk</h1>
            <div class="calc-res-container"></div>
        </div>`

    healthCon.appendChild(controlDiv);
    healthCon.appendChild(resultDiv);
    return healthCon;
}

function HazardRatioResultContainer(result) {
    let calcRest = document.createElement("div");
    calcRest.className = 'calc-res';

    let tabCon = document.createElement("div");
    tabCon.appendChild(HazardRatioTable(result.table));

    let sumCon = document.createElement("div");
    sumCon.innerText = `Sum: ${result.hq}`

    let summCon = document.createElement("div");
    summCon.innerText = `Summary: ${getHazardRatioSummary(result.hq)}`

    calcRest.appendChild(tabCon);
    calcRest.appendChild(sumCon);
    calcRest.appendChild(summCon);
    return calcRest;
}


function getHazardRatioSummary(hq) {
    if (hq < 0) {
        return "HQ < 1 -> Ризик виникнення шкідливих ефектів розглядають як зневажливо малий";
    } else if (hq === 0) {
        return "HQ = 1 -> Гранична величина, що не потребує термінових заходів, однак не може розглядатися як досить прийнятна";
    } else {
        return "HQ > 1 -> Імовірність розвитку шкідливих ефектів зростає пропорційно збільшенню HQ";
    }
}


function CarcinogenicRiskResultContainer(result) {
    let calcRest = document.createElement("div");
    calcRest.className = 'calc-res';

    if (result.cr) {
        let tabCon = document.createElement("div");
        tabCon.appendChild(CarcinogenicRiskTable(result.table));

        let sumCon = document.createElement("div");
        sumCon.innerText = `Sum: ${result.cr}`

        let summCon = document.createElement("div");
        summCon.innerText = `Summary: ${getCarcinogenicRiskSummary(result.cr)}`

        let prcCon = document.createElement("div");
        prcCon.innerText = `PCR = CR * POP = ${result.cr} * ${result.popul} = ${result.prc}`

        calcRest.appendChild(tabCon);
        calcRest.appendChild(sumCon);
        calcRest.appendChild(summCon);
        calcRest.appendChild(prcCon);
    } else {
        let mCon = document.createElement('div');
        mCon.className = 'mes-con';
        mCon.innerText = 'There are not Carcinogenic Pollution';
        calcRest.appendChild(mCon);
    }

    return calcRest;
}

function getCarcinogenicRiskSummary(cr) {
    if (cr > 10E-3) {
        return "CR > 10^-3 -> Високий (De Manifestis) - не прийнятний для виробничих умов і населення." +
        "Необхідне здійснення заходів з усунення або зниження ризику";
    } else if (cr > 10E-4) {
        return "CR (10^-4 - 10^-3) -> Середній - припустимий для виробничих умов; за впливу на все населення необхідний динамічний "+
        "контроль і поглиблене вивчення джерел і можливих наслідків шкідливих впливів для вирішення питання " +
        "про заходи з управління ризиком";
    } else if (cr > 10E-6) {
        return "CR (10^-6 - 10^-4) -> Низький - припустимий ризик (рівень, на якому, як правило, встановлюються " +
        "гігієнічні нормативи для населення) ";
    } else {
        return "CR < 10^-6 -> Мінімальний (De Minimis) - бажана (цільова) величина ризику при проведенні оздоровчих і " +
        "природоохоронних заходів";
    }
}

