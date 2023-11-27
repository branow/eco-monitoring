function EmergencyDamageContainer() {
    let taxesCon = document.createElement("div");
    taxesCon.className = 'damage-con';
    let controlTaxesDiv= document.createElement("div");
    controlTaxesDiv.append(ControlSelectContainer(EmergencyDamageCalculateButton()));

    let resultDiv = document.createElement("div");
    resultDiv.className = "result-div"
    let damCon = document.createElement('div');
    damCon.className = 'dam-con';


    let calcTaxesContainer = document.createElement('div');
    calcTaxesContainer.className = 'calc-res-container';
    damCon.appendChild(TaxesFormulasContainer());
    damCon.appendChild(calcTaxesContainer);

    resultDiv.appendChild(damCon);

    taxesCon.appendChild(controlTaxesDiv);
    taxesCon.appendChild(resultDiv);
    return taxesCon;
}

function TaxesFormulasContainer() {
    let div = document.createElement("div");
    div.innerHTML = `
        <div><h2>Розрахунок розміру податків</h2></div>
        <div class="formula-container">
            <p class="param">
                Розмір податку розраховується за наступною формулою:
            </p>
            <p class="formula">
                П<sub>р</sub> = В<sub>р</sub> * СП
            </p>
            <p class="param">
                В<sub>р</sub> - маса викидів речовини на рік, т/р;
            </p>
            <p class="param">
                де СП - ставка податку, гривень за 1 тонну, шукається у таблиці за найменуванням речовини,
                у разі відсутності, за класом небезпеки речовини, у разі відсутності занчення класу небезпеки,
                за гранично допустипою конценрацією (ГДК) речовини.
            </p>
            <p class="param">
                П<sub>р</sub> - сума податку в тис. грн на рік.
            </p>
        </div>
    `;
    return div;
}

function DamageResultContainer(result) {
    let damageCalcRes = document.createElement("div");
    damageCalcRes.className = 'dam-calc-res';

    let tabPeople = document.createElement("div");
    tabPeople.appendChild(ObjectTable(peopleDamageTableSchema(), result.pd));

    let tabProperty = document.createElement("div");
    tabProperty.appendChild(ObjectTable(propertyDamageTableSchema(), result.prd));

    let tabAtmospheric = document.createElement("div");
    tabAtmospheric.appendChild(ObjectTable(atmosphericDamageTableSchema(), result.ad));

    let tabEmergency = document.createElement("div");
    tabEmergency.appendChild(ObjectTable(emergencyDamageTableSchema(), result.ed));

    let sumDamage = document.createElement("div");
    sumDamage.innerText = `Загальний розмір збитків: ${result.sum} тис.грн`

    let labPeople = document.createElement("h2");
    labPeople.innerText = peopleDamageTableSchema().viewName

    let labProperty = document.createElement("h2");
    labProperty.innerText = propertyDamageTableSchema().viewName

    let labAtmospheric = document.createElement("h2");
    labAtmospheric.innerText = atmosphericDamageTableSchema().viewName

    let labEmergency = document.createElement("h2");
    labEmergency.innerText = emergencyDamageTableSchema().viewName

    damageCalcRes.appendChild(labPeople);
    damageCalcRes.appendChild(tabPeople);
    damageCalcRes.appendChild(labProperty);
    damageCalcRes.appendChild(tabProperty);
    damageCalcRes.appendChild(labAtmospheric);
    damageCalcRes.appendChild(tabAtmospheric);
    damageCalcRes.appendChild(labEmergency);
    damageCalcRes.appendChild(tabEmergency);
    damageCalcRes.appendChild(sumDamage);
    return damageCalcRes;
}