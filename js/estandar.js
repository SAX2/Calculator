var operateA;
var operateB;
var operation;


const resultElement = document.getElementById("result-i");
const i1_g1 = document.querySelector(".i-1-g1"); /*¹/x*/
const i2_g1 = document.querySelector(".i-2-g1"); /*x²*/
const i3_g1 = document.querySelector(".i-3-g1"); /*√x*/
const i4_g1 = document.querySelector(".i-4-g1"); /*÷*/
const i1_g2 = document.querySelector(".i-1-g2"); /*7*/
const i2_g2 = document.querySelector(".i-2-g2"); /*8*/
const i3_g2 = document.querySelector(".i-3-g2"); /*9*/
const i4_g2 = document.querySelector(".i-4-g2"); /*x*/
const i1_g3 = document.querySelector(".i-1-g3"); /*4*/
const i2_g3 = document.querySelector(".i-2-g3"); /*5*/
const i3_g3 = document.querySelector(".i-3-g3"); /*6*/
const i4_g3 = document.querySelector(".i-4-g3"); /*-*/
const i1_g4 = document.querySelector(".i-1-g4"); /*3*/
const i2_g4 = document.querySelector(".i-2-g4"); /*2*/
const i3_g4 = document.querySelector(".i-3-g4"); /*1*/
const i4_g4 = document.querySelector(".i-4-g4"); /*+*/
const i1_g5 = document.querySelector(".i-1-g5"); /*0*/
const i2_g5 = document.querySelector(".i-2-g5"); /*C*/
const i3_g5 = document.querySelector(".i-3-g5"); /*=*/

/*-------------NUMBERS-------------*/

i1_g2.addEventListener("click",(e)=>{
    let ValueI = i1_g2.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i2_g2.addEventListener("click",(e)=>{
    let ValueI = i2_g2.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i3_g2.addEventListener("click",(e)=>{
    let ValueI = i3_g2.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i1_g3.addEventListener("click",(e)=>{
    let ValueI = i1_g3.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i2_g3.addEventListener("click",(e)=>{
    let ValueI = i2_g3.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i3_g3.addEventListener("click",(e)=>{
    let ValueI = i3_g3.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i1_g4.addEventListener("click",(e)=>{
    let ValueI = i1_g4.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i2_g4.addEventListener("click",(e)=>{
    let ValueI = i2_g4.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i3_g4.addEventListener("click",(e)=>{
    let ValueI = i3_g4.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

i1_g5.addEventListener("click",(e)=>{
    let ValueI = i1_g5.value;
    resultElement.textContent = resultElement.textContent + ValueI;
});

/*-------------FUNCTIONS-------------*/

const Clear = () => {
    resultElement.textContent = "";
}

const Reset = () => {
    resultElement.textContent = "";
    operateA = 0;
    operateB = 0;
    operation = "";
}

const Solve = () => {
    var res = "";
    var resF = 0;
    switch(operation) {
        case "÷":
            let r1_g1 = parseFloat(operateA);
            let r2_g1 = parseFloat(operateB);
            res = `${r1_g1}÷${r2_g1}=${Math.floor(r1_g1 / r2_g1)}`;
            break;
        case "×":
            let r1_g2 = parseFloat(operateA);
            let r2_g2 = parseFloat(operateB);
            res = `${r1_g2}×${r2_g2}=${r1_g2 * r2_g2}`;
            break;
        case "-":
            let r1_g3 = parseFloat(operateA);
            let r2_g3 = parseFloat(operateB);
            res = `${r1_g3}-${r2_g3}=${r1_g3 - r2_g3}`;
            break;
        case "+":
            let r1_g4 = parseFloat(operateA);
            let r2_g4 = parseFloat(operateB);
            res = `${r1_g4}+${r2_g4}=${r1_g4 + r2_g4}`;
            break;
        case "¹/x":
            let r1_g5 = parseFloat(operateA);
            res = `1/${r1_g5}=${Math.floor(1 / r1_g5)}`;
            break;
        case "x²":
            let r1_g6 = parseFloat(operateA);
            res = `${r1_g6}²=${r1_g6 * r1_g6}`;
            break;
        case "²√x":
            let r1_g7 = parseFloat(operateA);
            res = `²√${r1_g7}=${Math.floor(Math.sqrt(r1_g7))}`;
            break;
    }
    Reset();
    resultElement.textContent = res;
}

/*-------------OPERATORS-------------*/

i1_g1.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "¹/x";
    Clear();
});

i2_g1.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "x²";
    Clear();
});

i3_g1.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "²√x";
    Clear();
});

i4_g1.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "÷";
    Clear();
});

i4_g2.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "×";
    Clear();
});

i4_g3.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "-";
    Clear();
});

i4_g4.addEventListener("click",()=>{
    operateA = resultElement.textContent;
    operation = "+";
    Clear();
});

i2_g5.addEventListener("click",()=>{
    Reset();
});

i3_g5.addEventListener("click",()=>{
    operateB = resultElement.textContent;
    Solve();
});