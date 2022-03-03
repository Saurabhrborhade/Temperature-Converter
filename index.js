function doSome()
{
var y=document.querySelector("input").value
document.querySelector(".op").value=eval(y) *(9/5)+32
}

function converttoC()
{
  var x=document.querySelector(".op").value
  document.querySelector("input").value=(eval(x)-32)*(5/9)
}
