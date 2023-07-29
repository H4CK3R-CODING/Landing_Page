// For moving of Blue Color across button

function btn_color_1(){
    document.getElementById("default").classList.toggle("default-1");
    document.getElementById("default").classList.remove("default-2");
    document.getElementById("default").classList.remove("default-3");
}
function btn_color_2(){
    document.getElementById("default").classList.remove("default-1");
    document.getElementById("default").classList.toggle("default-2");
    document.getElementById("default").classList.remove("default-3");
}
function btn_color_3(){
    document.getElementById("default").classList.remove("default-1");
    document.getElementById("default").classList.remove("default-2");
    document.getElementById("default").classList.toggle("default-3");
}



/* Starts :- For up_labal_on_input */

let up_input_1 = document.querySelector("#up_labal_on_input_1 input");    /* For 1st Input*/
let up_input_2 = document.querySelector("#up_labal_on_input_2 input");    /* For 2nd Input*/
let up_input_3 = document.querySelector("#up_labal_on_input_3 input");    /* For 3rd Input*/
let up_input_4 = document.querySelector("#up_labal_on_input_4 input");    /* For 4th Input*/


up_input_1.addEventListener('input', function(){
    document.getElementById("up_labal_on_input_1").classList.toggle("up_labal_on_input_1");
});


up_input_2.addEventListener('input', function(){
    document.getElementById("up_labal_on_input_2").classList.toggle("up_labal_on_input_2");
});


up_input_3.addEventListener('input', function(){
    document.getElementById("up_labal_on_input_3").classList.toggle("up_labal_on_input_3");
});


up_input_4.addEventListener('input', function(){
    document.getElementById("up_labal_on_input_4").classList.toggle("up_labal_on_input_4");
});