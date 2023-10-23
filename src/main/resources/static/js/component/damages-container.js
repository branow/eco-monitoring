
function DamagesContainer() {
    let damageCon = document.createElement("div");
    damageCon.className = 'damages-con';
    let controlDamagesDiv= document.createElement("div");
    controlDamagesDiv.append(ControlDamagesSelectContainer());

    let resultDiv = document.createElement("div");
    resultDiv.className = "result-div"
    resultDiv.innerHTML = `
        <div class="dam-con">
            <div class="res-table-name"><span>Damages</span></div>
            <div class="calc-res-container"></div>
        </div>`

    damageCon.appendChild(controlDamagesDiv);
    damageCon.appendChild(resultDiv);
    return damageCon;
}

function ControlDamagesSelectContainer(){
    let selectWrapper = document.createElement("div");
    selectWrapper.className = "selectors-section-div";
    let compSelectCon = document.createElement("div");
    compSelectCon.className = "company-select";
    compSelectCon.appendChild(CompanySelect());
    let yearSelectCon = document.createElement("div");
    yearSelectCon.appendChild(YearSelect());
    yearSelectCon.className = "year-select";
    let butSelectCon = document.createElement("div");
    butSelectCon.appendChild(DamagesCalculateButton());
    butSelectCon.className = "button-select";

    let controlDiv = document.createElement("div");
    controlDiv.className = 'cntrl';
    selectWrapper.append(compSelectCon);
    selectWrapper.append(yearSelectCon);
    selectWrapper.append(butSelectCon);
    controlDiv.append(selectWrapper);
    return controlDiv;
}

function DamagesResultContainer(result) {
    let damCalcRest = document.createElement("div");
    damCalcRest.className = 'dam-calc-res';

    let tabDamages = document.createElement("div");
    tabDamages.appendChild(ObjectTable(damagesCalculationsTableSchema(), result.table));

    let sumDam = document.createElement("div");
    sumDam.innerText = `Sum (HQ): ${result.hq}`


    damCalcRest.appendChild(tabDamages);
    damCalcRest.appendChild(sumDam);
    return damCalcRest;
}