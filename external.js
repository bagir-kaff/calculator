const NumberButtons = document.querySelectorAll('.button.number')
const objectPanel = document.querySelector('.object')
const resultPanel = document.querySelector('.result')
const operatorButtons = document.querySelectorAll('.operator')
let objects = ["","",""];
let isFirst = true;
let isOperatorSelected = false;
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
    objects[0] = Operate(objects[0],objects[2],objects[1]);
    if(objects[2]===''){
      isFirst = false;
    }
    else{
      objects[2] = '';
    }
    objects[1] = operator.textContent
    objectPanel.textContent = objects[0]+objects[1]
    resultPanel.textContent = objects[0];
  })
})
function Operate(first,second,oper){
  if(first===''){
    return '0'
  }
  else if(second === ''){
    return first
  }
  switch (oper){
    case '+':
      return Add(+first,+second)
    case '-':
      return Substract(first,second)
    case 'x':
      return Multiply(first,second)
    case '/':
      return Divide(first,second)
  }
}
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
  if(x>0&&+y===0){
    return alert('why!! its infinity ')
  }
  else if (x<0&&+y===0){
    return alert('whyy! its negative infinity')
  }
  else if(+x===0 && +y===0)
    return alert('what is this? is it equal to one?')
  return x/y
}

