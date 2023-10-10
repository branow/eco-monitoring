
function HealthRiskContainer() {
    return `
<div class="health-risk">
    <div>
        <div>${CompanySelect()}</div>
        <div>${YearSelect()}</div>
        <div>${HealthRiskCalculateButton()}</div>
    </div>
    <div>
        <div class="haz-rat-con">
            <h1>Hazard Ratio</h1>
            <div class="calc-res-container"></div>
        </div>
        <div class="carz-rat-con">
            <h1>Carcinogenic Risk</h1>
            <div class="calc-res-container"></div>
        </div>
    </div>
</div>`;
}

function HazardRatioResultContainer(result) {
    return `
<div class="calc-res">
<div>${HazardRatioTable(result.table)}<div/>
<div>Sum: ${result.hq}</div>
<div>Summary: ${getHazardRatioSummary(result.hq)}</div>
</div>`
}


function getHazardRatioSummary(hq) {
    if (hq < 0) {
        return "HQ < 1 -> Ризик виникнення шкідливих ефектів розглядають як зневажливо малий";
    } else if (result.sum === 0) {
        return "HQ = 1 -> Гранична величина, що не потребує термінових заходів, однак не може розглядатися як досить прийнятна";
    } else {
        return "HQ > 1 -> Імовірність розвитку шкідливих ефектів зростає пропорційно збільшенню HQ";
    }
}


function CarcinogenicRiskResultContainer(result) {
    return `
<div class="calc-res">
<div>${CarcinogenicRiskTable(result.table)}<div/>
<div>Sum: ${result.cr}</div>
<div>Summary: ${getCarcinogenicRiskSummary(result.cr)}</div>
<div>PCR = CR * POP = ${result.sum} * ${result.popul} = ${result.pcr}</div>
</div>`
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

