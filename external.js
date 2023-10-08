const NumberButtons = document.querySelectorAll('.button.number')
const objectPanel = document.querySelector('.object')
const resultPanel = document.querySelector('.result')
const operatorButtons = document.querySelectorAll('.operator')
let objects = ["","",""];

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

