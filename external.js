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
NumberButtons.forEach(number => {
  number.addEventListener('click',()=>{
    if(isFirst){
      objects[0] +=number.textContent;
    }
    else{
      objects[2] +=number.textContent;
    }
    objectPanel.textContent = objects[0]+objects[1]+objects[2];
    resultPanel.textContent = Operate(objects[0],objects[2],objects[1]);
  })
});
operatorButtons.forEach(operator =>{
  operator.addEventListener('click',()=>{
    decimalButton.disabled = false;
    objects[0] = Operate(objects[0],objects[2],objects[1]);
    if(objects[2]===''){
      isFirst = false;
    }
    else{
      objects[2] = '';
    }
    objects[1] = operator.textContent;
    objectPanel.textContent = objects[0]+objects[1];
    resultPanel.textContent = objects[0];
  })
})
backspaceButton.addEventListener('click',()=>{
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
})
function Operate(first,second,oper){
  if(first===''){
    return '0';
  }
  else if(second === ''){
    return first;
  }
  switch (oper){
    case '+':
      return Add(+first,+second);
    case '-':
      return Substract(first,second);
    case 'x':
      return Multiply(first,second);
    case '/':
      return Divide(first,second);
  }
}
equalButton.addEventListener('click',()=>{
  if(objects[0]==='')
    alert('the first number is empty');
  else if(objects[1] ==='')
    alert('no operator is chosen');
  else if(objects[2]==='')
    alert('the second number is empty');
  else{
    objectPanel.textContent = Operate(objects[0],objects[2],objects[1]);
    isFirst=true;
    objects[0] = '', objects[2] = '', objects[1]='';
    //if enabled, will reset objects
  }
})

function Clear(){
  isFirst=true;
  objectPanel.textContent = '---';
  resultPanel.textContent = '---';
  objects[0] = '', objects[2] = '', objects[1]='';
}
clearButton.addEventListener('click' ,Clear)

decimalButton.addEventListener('click',()=>{
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
})
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

