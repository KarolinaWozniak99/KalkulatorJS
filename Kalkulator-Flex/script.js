
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const operations = document.querySelectorAll('.operation');
const hist = document.querySelector('.hv');
const output = document.querySelector('.ov');
const deleteButton = document.getElementById("back")
const clearButton = document.getElementById("C")
const CEButton = document.getElementById("CE")
const changeButton = document.getElementById("+/-")
const equalButton = document.getElementById("=")


var num1="";
var num2="";
var operation="";

function deleteNumber(){
    if(operation==""){
        num1=num1.toString().slice(0,-1)
        output.innerText=num1
    }
    else{
        num2=num2.toString().slice(0,-1)
        output.innerText=num2
    }
}

function change(){
    if(operation==""){
        num1=-(num1)
        output.innerText=num1
    }
    else{
        num2=-(num2)
        output.innerText=num2
    }
}

function clearNumber(){
    if(operation==""){
        num1=""
        output.innerText=num1
    }
    else{
        num2=""
        output.innerText=num2
    }
}

function CE(){
    num1="";
    num2="";
    operation="";
    hist.innerText="";
    output.innerText=""
}

function clear(){
    num1="";
    num2="";
    operation="";
}

function roundTo(value, places){
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

function equal(){
    if(num1!=="" && operation!=""){
        hist.innerText=hist.innerText+" "+num2.toString()
        var result=calculate()
        output.innerText=roundTo(result,10)
        clear()

    }
}

function calculate(){
    var n1=parseFloat(num1)
    var n2=parseFloat(num2)
    
    if(operation=="+"){
        return (n1+n2)
    }
    else if(operation=="-"){
        return n1-n2
    }
    else if(operation=="x"){
        return n1*n2
    }
    else if(operation=="/"){
        return n1/n2
    }
    else if(operation=="%"){
        return n1/100
    }
    else if(operation=="1/x"){
        return 1/n1
    }
    else if(operation=="^2"){
        return n1*n1
    }
    else if(operation=="√"){
        return Math.sqrt(n1)
    }
}

function addOperator(operator){
    operation = operator;
    if(operation!=="" && num1!==""){
        hist.innerText=num1.toString()+" "+operation
        output.innerText=" ";
    }
}

function addNumber(number){
    if(operation==""){
        if(num1.toString().length!==9){
            if(num1.includes('.') && number===".")return
            if(number=="." && num1=="") return
            num1 = num1.toString()+number.toString();
        }
        hist.innerText=num2
        output.innerText=num1.toString()
    }
    else{
        if(num2.toString().length!==9){
            if(num2.includes('.') && number===".")return
            if(number=="." && num2=="") return
            num2 = num2.toString()+number.toString();
        }
        output.innerText=num2;
    }
    
}

CEButton.addEventListener('click',()=>{CE()})
clearButton.addEventListener('click',()=>{clearNumber()})
changeButton.addEventListener('click',()=>{change()})
equalButton.addEventListener('click',()=>{equal()})
deleteButton.addEventListener('click',()=>{deleteNumber()})


    numbers.forEach((num)=>{
        num.addEventListener('click',()=>{
            addNumber(num.id)
        })
    })


    operators.forEach((oper)=>{
        oper.addEventListener('click',()=>{
            addOperator(oper.id)
        })
    })

    operations.forEach((operN)=>{
        operN.addEventListener('click',()=>{
            if(num1!==""){
            addOperator(operN.id)
            var result=calculate()
            output.innerText=roundTo(result,10)
            clear()
            }

        })
    })



