
function DamagesContainer() {
    let damageCon = document.createElement("div");
    damageCon.className = 'damages-con';
    let controlDamagesDiv= document.createElement("div");
    controlDamagesDiv.append(ControlSelectContainer(DamagesCalculateButton()));

    let resultDiv = document.createElement("div");
    resultDiv.className = "result-div"
    let damCon = document.createElement('div');
    damCon.className = 'dam-con';


    let calcResContainer = document.createElement('div');
    calcResContainer.className = 'calc-res-container';
    damCon.appendChild(FormulasContainer());
    damCon.appendChild(calcResContainer);

    resultDiv.appendChild(damCon);

    damageCon.appendChild(controlDamagesDiv);
    damageCon.appendChild(resultDiv);
    return damageCon;
}

function FormulasContainer() {
    let div = document.createElement("div");
    div.innerHTML = `
        <div><h2>Розрахунок розміру відшкодування збитків</h2></div>
        <div class="formula-container">
            <p class="formula">
                m<sub>i</sub> = 3.6 * 10<sup>-3</sup> * 
                (q<sub>mi</sub> - q<sub>mn</sub>) ;
            </p>
            <p class="param">
                де m<sub>i</sub> - маса  наднормативного  викиду  i-тої   забруднюючої
                речовини в атмосферне повітря від джерела викиду цієї забруднюючої
                речовини, т;
            </p>
            <p class="param">
                q<sub>mi</sub> - середнє значення  масової  витрати  i-тої  забруднюючої
                речовини, г/с;
            </p>
            <p class="param">
                q<sub>mn</sub> - значення  затвердженого  нормативу  викиду  i-тої
                забруднюючої речовини, наведеного в дозволі на викид, г/с;
            </p>
        </div>
        <div class="formula-container">
            <p class="formula">
                З = m<sub>i</sub> * 1.1П * A<sub>i</sub> * K<sub>т</sub> 
                * K<sub>зі</sub> ;
            </p>
            <p class="param">
                де З - розмір збитків, грн;
            </p>
            <p class="param">
                m<sub>i</sub> - маса   i-тої  забруднюючої  речовини,  що  викинута  в
                атмосферне повітря наднормативно, т; 
            </p>
            <p class="param">
                1.1П -  розмір  мінімальної  заробітної  плати  (П)  на дату 
                виявлення  порушення  за одну тонну умовної забруднюючої речовини, 
                помноженої  на  коефіцієнт (1,1), грн;
            </p>
            <p class="param">
                A<sub>i</sub> - безрозмірний  показник  відносної  небезпечності  i-тої
                забруднюючої речовини; 
            </p>
            <p class="param">
                К<sub>т</sub> - коефіцієнт,      що      враховує      територіальні
                соціально-екологічні особливості; 
            </p>
            <p class="param">
                К<sub>зі</sub> - коефіцієнт,   що   залежить   від  рівня  забруднення
                атмосферного  повітря   населеного   пункту   i-тою   забруднюючою 
                речовиною.
            </p>
        </div>
        <div class="formula-container">
            <p class="formula">
                A<sub>i</sub> = 1/ГДК<sub>i</sub> ;
            </p>
            <p class="param">
                де ГДК<sub>i</sub> - середньодобова граничнодопустима концентрація або 
                орієнтовно  безпечний  рівень  впливу  (ОБРВ)  i-тої  забруднюючої 
                речовини, мг/куб.м.
            </p>
        </div>
        <div class="formula-container">
            <p class="formula">
                К<sub>т</sub> = К<sub>нас</sub> * К<sub>ф</sub> ;
            </p>
            <p class="param">
                де  К<sub>нас</sub> - коефіцієнт,  що залежить  від  чисельності  жителів  
                населеного пункту ;
            </p>
            <p class="param">
                К<sub>ф</sub> - коефіцієнт,  що  враховує  народногосподарське значення 
                населеного пункту ;
            </p>
        </div>
        <div class="formula-container">
            <p class="formula">
                К<sub>зі</sub> = (ро)<sub>Вi</sub> / ГДК<sub>СДi</sub> ;
            </p>
            <p class="param">
                де  (ро)<sub>Вi</sub> - середньорічна  концентрація  i-тої забруднюючої 
                речовини за даними прямих інструментальних вимірів на стаціонарних 
                постах за попередній рік, мг/куб.м ;
            </p>
            <p class="param">
                ГДК<sub>СДi</sub> - середньодобова гранична допустима концентрація i-тої 
                забруднюючої речовини, мг/куб.м. 
            </p>
        </div>
    `;
    return div;
}

function DamagesResultContainer(result) {
    let damCalcRest = document.createElement("div");
    damCalcRest.className = 'dam-calc-res';

    let salaryCon = MinSalaryContainer(result.minimumSalary, result.year);

    let tabDamages = document.createElement("div");
    tabDamages.appendChild(ObjectTable(damagesCalculationsTableSchema(), result.table));

    let sumDam = document.createElement("div");
    sumDam.innerText = `Загальний розмір відшкодування: ${result.fineSum} тис.грн`

    damCalcRest.appendChild(salaryCon);
    damCalcRest.appendChild(tabDamages);
    damCalcRest.appendChild(sumDam);
    return damCalcRest;
}

function MinSalaryContainer(minSalary, year) {
    let div = document.createElement('div');
    div.innerText = `Розмір мінімальної заробітної плати становить ${minSalary} грн. станом на ${year} рік`;
    return div;
}