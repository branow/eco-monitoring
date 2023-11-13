function TaxesContainer() {
    let taxesCon = document.createElement("div");
    taxesCon.className = 'taxes-con';
    let controlTaxesDiv= document.createElement("div");
    controlTaxesDiv.append(ControlSelectContainer(TaxCalculateButton()));

    let resultDiv = document.createElement("div");
    resultDiv.className = "result-div"
    let taxCon = document.createElement('div');
    taxCon.className = 'tax-con';


    let calcTaxesContainer = document.createElement('div');
    calcTaxesContainer.className = 'calc-res-container';
    taxCon.appendChild(TaxesFormulasContainer());
    taxCon.appendChild(calcTaxesContainer);

    resultDiv.appendChild(taxCon);

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

function TaxesResultContainer(result) {
    let taxCalcRes = document.createElement("div");
    taxCalcRes.className = 'tax-calc-res';

    let tabTaxes = document.createElement("div");
    tabTaxes.appendChild(ObjectTable(pollutantTaxTableSchema(), result.pollutantTaxes));

    let sumTax = document.createElement("div");
    sumTax.innerText = `Загальний розмір розрахованих податків: ${result.sumTax} тис.грн`

    taxCalcRes.appendChild(tabTaxes);
    taxCalcRes.appendChild(sumTax);
    return taxCalcRes;
}