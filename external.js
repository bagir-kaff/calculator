const NumberButtons = document.querySelectorAll('.button.number');
const objectPanel = document.querySelector('.object');
const resultPanel = document.querySelector('.result');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const backspaceButton = document.querySelector('.backspace');
let objects = ["","",""];
let isFirst = true;

//Keyboard Supports :D
window.addEventListener('keydown',(e)=>{
  if(e.key ==='1'||e.key ==='2'||e.key ==='3'
  ||e.key ==='4'||e.key ==='5'||e.key ==='6'
  ||e.key ==='7'||e.key ==='8'||e.key ==='9'||e.key==='0'){
    AddNumbers(e.key);
  }
  else if(e.key === '+'||e.key === '-'||e.key === '*'
  ||e.key==='x'||e.key === '/'||e.key ==='X'){
    if(e.key==='/'){
      e.preventDefault();
    }
    AddOperators(e.key);
  }
  else if(e.key ==='.'){
    AddDecimal()
  }
  else if(e.key === 'c'||e.key === 'C'){
    Clear();
  }
  else if(e.key === '='){
    Equal()
  }
  else if(e.key === 'Backspace'){
    Backspace()
  }
})
NumberButtons.forEach(number => number.addEventListener('click', AddNumbers));
operatorButtons.forEach(operator =>operator.addEventListener('click', AddOperators))
backspaceButton.addEventListener('click',Backspace)
function Operate(first,second,oper){
  if(first===''){
    return '0';
  }
  else if(second === ''){
    return first;
  }
  switch (oper){
    case '+':
      return String(Add(+first,+second));
    case '-':
      return String(Substract(first,second));
    case 'x':
    case '*':
    case 'X':
      return String(Multiply(first,second));
    case '/':
      return String(Divide(first,second));
  }
}
equalButton.addEventListener('click',Equal)

clearButton.addEventListener('click' ,Clear)

decimalButton.addEventListener('click',AddDecimal)
function Add(x,y){
  return x+y;
}
function Substract(x,y){
  return x-y;
}
function Multiply(x,y){
  return x*y;
}
function Divide(x,y){
  if(x>0&&+y===0){
    Clear();
    return alert('why!! its infinity ');
  }
  else if (x<0&&+y===0){
    Clear();
    return alert('whyy! its negative infinity');
  }
  else if(+x===0 && +y===0){
    Clear();
    return alert('what is this? is it equal to one?');
  }
  return x/y;
}

function AddNumbers(number){
  if((number.type)==='click'){
    number=this.textContent }
  if(isFirst){
    objects[0] +=number;
  }
  else{
    objects[2] +=number;
  }
  objectPanel.textContent = objects[0]+objects[1]+objects[2];
  resultPanel.textContent = Operate(objects[0],objects[2],objects[1]);
}
function AddOperators(operator){
  if((operator.type)==='click'){
    operator=this.textContent }
  decimalButton.disabled = false;
  objects[0] = Operate(objects[0],objects[2],objects[1]);
  if(objects[2]===''){
    isFirst = false;
  }
  else{
    objects[2] = '';
  }
  objects[1] = operator;
  objectPanel.textContent = objects[0]+objects[1];
  resultPanel.textContent = objects[0];
}
function Equal(){
  if(objects[0]==='')
    alert('the first number is empty');
  else if(objects[1] ==='')
    alert('no operator is chosen');
  else if(objects[2]==='')
    alert('the second number is empty');
  else{
    objectPanel.textContent = '---';
    isFirst=true;
    objects[0] = '', objects[2] = '', objects[1]='';
    //if enabled, will reset objects
  }
}
function Clear(){
  isFirst=true;
  objectPanel.textContent = '---';
  resultPanel.textContent = '---';
  objects[0] = '', objects[2] = '', objects[1]='';
}
function Backspace(){
    if(objects[2]!==''){
      objects[2] = objects[2].slice(0,objects[2].length-1);
      }
    else if(objects[1]!==''){
      objects[1]='';
      isFirst=true;
    }
    else if(objects[0]!==''){
      objects[0] = objects[0].slice(0,objects[0].length-1);
    }
    resultPanel.textContent = Operate(objects[0],objects[2],objects[1]);
    objectPanel.textContent = objects[0]+objects[1]+objects[2];
    if(objects[0]==='')
      objectPanel.textContent='0'
  }
function AddDecimal(){
    decimalButton.disabled = true;
    if(objects[2].search(/\./)===-1&&objects[1]!==''){
      if(objects[2]==='')
        objects[2]+='0';
      objects[2]+='.';
    }
    else if (objects[0].search(/\./)===-1&&objects[1]===''){
      if(objects[0]==='')
        objects[0]+='0';
      objects[0]+='.';
    }
    resultPanel.textContent = Operate(objects[0],objects[2],objects[1]);
    objectPanel.textContent = objects[0]+objects[1]+objects[2];
  }

