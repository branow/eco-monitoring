function EmergencyDamageContainer() {
    let taxesCon = document.createElement("div");
    taxesCon.className = 'damage-con';
    let controlTaxesDiv = document.createElement("div");
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
    div.innerHTML += PopulationDamagesFormulas() + PropertyDamagesFormulas() + AirDamagesFormulas();
    return div;
}

function PopulationDamagesFormulas() {
    return `
        <div><h2>Розрахунок збитків від втрати життя та здоров'я населення</h2></div>
        <div class="formula-container">
            <p class="param">
                Розмір збитків   від   втрати  життя  та  здоров'я  населення визначається за такою формулою:
            </p>
            <p class="formula">
                Нр = S<sub>Втрр</sub> + S<sub>Вдп</sub>  + S<sub>Ввтг</sub> 
            </p>
            <p class="param">
                S<sub>Втрр</sub> - втрати від вибуття трудових ресурсів з виробництва;
            </p>
            <p class="param">
                S<sub>Вдп</sub> - витрати на виплату допомоги на поховання;
            </p>
            <p class="param">
                S<sub>Ввтг</sub> - витрати на виплату пенсій у разі втрати годувальника.
            </p>
        </div>
        <br><br>
        <div class="formula-container">
            <p class="param">
                Втрати від вибуття трудових ресурсів з виробництва розраховуються за такою формулою:
            </p>
            <p class="formula">
                S<sub>Втрр</sub> = М<sub>л</sub>N + М<sub>т</sub>N + М<sub>і</sub>N + М<sub>з</sub>N
            </p>
            <p class="param">
                М<sub>л</sub> - втрати від легкого нещасного випадку;
            </p>
            <p class="param">
                М<sub>т</sub> - втрати від тяжкого нещасного випадку;
            </p>
            <p class="param">
                М<sub>і</sub> - втрати від отримання людиною інвалідності;
            </p>
            <p class="param">
                М<sub>з</sub> - втрати від загибелі людини;
            </p>
            <p class="param">
                N - кількість постраждалих від конкретного виду нещасного випадку.
            </p>
        </div>
        <br><br>
        <div class="formula-container">
            <p class="param">
                Витрати на виплату допомоги на поховання розраховуються за такою формулою:
            </p>
            <p class="formula">
                S<sub>Вдп</sub> = 12 * М<sub>дп</sub> * N<sub>з</sub>
            </p>
            <p class="param">
                М<sub>дп</sub> - 0,15*  тис.  гривень/людину - допомога на поховання (за даними органів соціального забезпечення);
            </p> 
            <p class="param">
                N<sub>з</sub> - кількість загиблих;
            </p>
            <p class="param">
                12 - кількість місяців у році.
            </p>
        </div>
        <br><br>
        <div class="formula-container">
            <p class="param">
                Витрати на  виплату  пенсій  у  разі  втрати  годувальника розраховуються на кожну дитину за такою формулою:
            </p>
            <p class="formula">
                S<sub>Ввтг</sub> = 12 * М<sub>втг</sub> * (18-Вд)
            </p>
            <p class="param">
                М<sub>втг</sub> - 0,037* тис. гривень - розмір щомісячної пенсії на дитину до досягнення  нею  повноліття  -  18  років  (за  даними  органів соціального забезпечення);
            </p>
            <p class="param">
                Вд - вік дитини;
            </p>
            <p class="param">
                12 - кількість місяців у році.
            </p>
        </div>
    `;
}

function PropertyDamagesFormulas() {
    return `
        <br><br>
        <div><h2>Розрахунок збитків від руйнування та пошкодження основних фондів, знищення майна та продукції </h2></div>
        <div class="formula-container">
            <p class="param">
                Збитки від руйнування та пошкодження основних фондів, знищення майна та продукції розраховуються за такою формулою:
            </p>
            <p class="formula">
                М<sub>р</sub> = Ф<sub>в</sub> + Ф<sub>г</sub> + П<sub>р</sub> + П<sub>рс</sub> + С<sub>н</sub> + М<sub>дг</sub> 
            </p>
            <p class="param">
                Ф<sub>в</sub> - збитки від руйнування та пошкодження основних фондів виробничого призначення; 
            </p>
            <p class="param">
                Ф<sub>г</sub> - збитки від руйнування та пошкодження основних фондів невиробничого призначення;
            </p>
            <p class="param">
                П<sub>р</sub> - збитки від втрат готової промислової та сільськогосподарської продукції;
            </p>
            <p class="param">
                П<sub>рс</sub> - збитки від втрат незібраної сільськогосподарської продукції; 
            </p>
            <p class="param">
                С<sub>н</sub> - збитки від втрат запасів сировини, напівфабрикатів та проміжної продукції;
            </p>
            <p class="param">
                М<sub>дг</sub> - збитки від втрат майна громадян та організацій.
            </p>
        </div>
        
    `;
}

function AirDamagesFormulas() {
    return `
        <br><br>
        <div><h2>Розрахунок збитків від забруднення атмосферного повітря </h2></div>
        <div class="formula-container">
            <p class="param">
                Розрахунок збитків від забруднення атмосферного повітря провадиться за такою формулою:
            </p>
            <p class="formula">
                А<sub>ф</sub> = М<sub>і</sub> * П<sub>і</sub> * А<sub>і</sub> * К<sub>т</sub> * К<sub>зі</sub>,  
            </p>
            <p class="param">
                М<sub>і</sub> - маса i-ї забруднюючої речовини, що була викинута в повітря внаслідок НС, тонн. Розраховується експертним шляхом;
            </p>
            <p class="param">
                П<sub>і</sub> - базова ставка компенсації збитків у частках мінімальної заробітної плати за одну тонну умовної забруднюючої речовини, гривень/тонну;
            </p>
            <p class="param">
                А<sub>і</sub> - безрозмірний показник відносної небезпечності забруднюючої речовини (розраховується у порядку, визначеному Мінекоресурсів);
            </p>
            <p class="param">
                К<sub>т</sub> - коефіцієнт урахування територіальних соціально-екологічних особливостей;
            </p>
            <p class="param">
                К<sub>зі</sub> - коефіцієнт забруднення атмосферного повітря в населеному пункті.
            </p>
        </div>
        <br><br>
        <div class="formula-container">
            <p class="param">
                Безрозмірний показник відносної небезпечності забруднюючої речовини розраховується за такою формулою:
            </p>
            <p class="formula">
                А<sub>і</sub> = 1 / ГДК<sub>і</sub>
            </p>
            <p class="param">
                ГДК<sub>і</sub> - середньодобова гранично допустима концентрація (ГДК) або орієнтовно безпечний рівень впливу (ОБРВ) i-ї забруднюючої речовини, міліграм/куб. метр.
            </p>
            <p class="param">
                У чисельнику  вводиться коефіцієнт 10 для речовин з ГДК понад одиницю.
            </p>
        </div>
        <br><br>
        <div class="formula-container">
            <p class="param">
                Коефіцієнт урахування територіальних соціально-економічних особливостей залежить від чисельності жителів у населених пунктах зони НС, економічного, рекреаційного та природоохоронного значення території:
            </p>
            <p class="formula">
                К<sub>т</sub> = К<sub>нас</sub> * К<sub>ф</sub> 
            </p>
            <p class="param">
                К<sub>нас</sub> - коефіцієнт, що залежить від чисельності жителів населеного пункту. 
            </p>
            <p class="param">
                К<sub>ф</sub>  - коефіцієнт, що враховує господарське значення населеного пункту.
            </p>
        </div>
        <br><br>
        <div class="formula-container">
            <p class="param">
                Коефіцієнт забруднення атмосферного повітря в населеному пункті розраховується за такою формулою:
            </p>
            <p class="formula">
                К<sub>зі</sub> = q / ГДК<sub>і</sub>
            </p>
            <p class="param">
                q - середньорічна концентрація забруднюючої речовини за даними прямих інструментальних вимірів на стаціонарних постах за попередній рік, міліграм/куб. метр; 
            </p>
            <p class="param">
                ГДК<sub>і</sub> - середньодобова гранично допустима концентрація i-ої забруднюючої речовини, міліграм/куб. метр.
            </p>
        </div>        
    `;
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