const NumberButtons = document.querySelectorAll('.button.number')
const objectPanel = document.querySelector('.object')
const resultPanel = document.querySelector('.result')
const operatorButtons = document.querySelectorAll('.operator')
let objects = ["","",""];
let isFirst = true;

NumberButtons.forEach(number => {
  number.addEventListener('click',()=>{
    if(isFirst){
      objects[0] +=number.textContent;
    }
    else{
      objects[2] +=number.textContent;
      isOperatorSelected = false;
    }
    objectPanel.textContent = objects[0]+objects[1]+objects[2];
    resultPanel.textContent = Operate(objects[0],objects[2],objects[1]);
  })
});
function Add(x,y){
  return x+y
}
function Substract(x,y){
  return x-y
}
function Multiply(x,y){
  return x*y
}
function Divide(x,y){
  if(x>0&&y===0){
    return alert('why!! its infinity ')
  }
  else if (x<0&&y===0){
    return alert('whyy! its negative infinity')
  }
  return x/y
}

