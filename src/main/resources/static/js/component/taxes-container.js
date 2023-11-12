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
    calcTaxesContainer.className = 'tax-res-container';
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
                Emission Mass (t/year) * Tax Rate (grn/t)
            </p>
            <p class="param">
                де Tax Rate (grn/t) - Ставка податку, гривень за 1 тонну, береться із таблиці Pollutant Tax Rate, 
                якщо в цій таблиці дані відсутні, то із таблиці Pollutant Class Tax Rate, якщо і в цій таблиці даних немає,
                то із таблиці Pollutant Gdk Tax Rate.
            </p>
            <p class="param">
                Результат отриманий в тис. грн.
            </p>
        </div>
    `;
    return div;
}

function TaxesResultContainer(result) {
    let taxCalcRes = document.createElement("div");
    taxCalcRes.className = 'tax-calc-res';

    let tabTaxes = document.createElement("div");
    tabTaxes.appendChild(ObjectTable(pollutantTaxTableSchema(), result.table));

    let sumTax = document.createElement("div");
    sumTax.innerText = `Загальний розмір розрахованих податків: ${result.sumTax} тис.грн`

    taxCalcRes.appendChild(tabTaxes);
    taxCalcRes.appendChild(sumTax);
    return taxCalcRes;
}