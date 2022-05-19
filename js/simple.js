/*-------------ELEMENTS-------------*/

const value1 = document.getElementById("i_value-1");
const value2 = document.getElementById("i_value-2");
const i1 = document.querySelector(".i-1");
const i2 = document.querySelector(".i-2");
const i3 = document.querySelector(".i-3");
const i4 = document.querySelector(".i-4");
const resultElement = document.getElementById("result-i");

/*-------------FUNCTIONS-------------*/

const Sumar = (res1,res2) => {
    const sumaResult = Math.fround(Math.floor(res1 + res2));
    if (isNaN(sumaResult)) {
        resultElement.value = "ERROR";
    }
    resultElement.value = sumaResult;
}

const Restar = (res1,res2) => {
    const restaResult = Math.fround(Math.floor(res1 - res2));
    if (isNaN(restaResult)) {
        resultElement.value = `ERROR`;
    }
    resultElement.value = restaResult;
}

const Multiplicar = (res1,res2) => {
    const multiplicacionResult = Math.fround(Math.floor(res1 * res2));
    if (isNaN(multiplicacionResult)) {
        resultElement.value = `ERROR`;
    }
    resultElement.value = multiplicacionResult;
}

/*-------------OPERATORS-------------*/

i1.addEventListener("click",() => {
    let sum1 = value1.value;
    let sum2 = value2.value;
    const newSum1 = parseInt(sum1);
    const newSum2 = parseInt(sum2);
    resultElement.value = `${newSum1}+${newSum2}`;

    if (isNaN(newSum1) && isNaN(newSum2)) {
        resultElement.value = `+`;
    } else if (isNaN(newSum1)) {
        resultElement.value = `+${newSum2}`;
    } else if (isNaN(newSum2)) {
        resultElement.value = `${newSum1}+`;
    }

    i4.addEventListener("click",() => {
        Sumar(newSum1,newSum2);
    });
});

i2.addEventListener("click",() => {
    let res1 = value1.value;
    let res2 = value2.value;
    const newRes1 = parseInt(res1);
    const newRes2 = parseInt(res2);
    resultElement.value = `${newRes1}-${newRes2}`;
    if (isNaN(newRes1) && isNaN(newRes2)) {
        resultElement.value = `-`;
    } else if (isNaN(newRes1)) {
        resultElement.value = `-${newRes2}`;
    } else if (isNaN(newRes2)) {
        resultElement.value = `${newRes1}-`;
    }

    i4.addEventListener("click",() => {
        Restar(newRes1,newRes2)
    });
});

i3.addEventListener("click",() => {
    let mul1 = value1.value;
    let mul2 = value2.value;
    const newMul1 = parseInt(mul1);
    const newMul2 = parseInt(mul2);
    resultElement.value = `${newMul1}×${newMul2}`;
    if (isNaN(newMul1) && isNaN(newMul2)) {
        resultElement.value = `×`;
    } else if (isNaN(newMul1)) {
        resultElement.value = `×${newMul2}`;
    } else if (isNaN(newMul2)) {
        resultElement.value = `${newMul1}×`;
    }

    i4.addEventListener("click",() => {
        Multiplicar(newMul1,newMul2)
    });
});