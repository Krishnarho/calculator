const   prevEl = document.querySelector('.prev-equation'),
        currEl = document.querySelector('.curr-equation');

let equation=output=prev=''; 

let calcfunction = (number) => {
    if(output!=''){
        if(number==='/'||number==='*'||number==='+'||number==='-'){
             equation = output;
             output='';
        }else{
            clr();
        }
    }
    equation += number;    
    currEl.innerHTML = equation.replace("/","÷");
}

let clr = () => {
    prevEl.innerHTML = "";
    currEl.innerHTML = "";
    equation = output = '';
}

let del = () => {
    equation = equation.slice(0,-1);
    currEl.innerHTML = equation;
}

let result = () =>{
    try{
        prev = equation.replace("/","÷");
        prevEl.innerHTML = prev+'=';
        output = eval(equation);
        currEl.innerHTML = output;
    }
    catch(e){
        prevEl.innerHTML = equation.replace("/","÷");
        currEl.innerHTML = 'Incorrect equation';        
    }
}
