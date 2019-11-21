var aa = function(){
    console.log(123);
}
function aa(){
    console.log(456);
}

aa();     // 结果123    v8显示器  有关键字 var aa = underfine 然后执行下一个function aa(){}
          //  之后在从上往下执行  function()又把下面的覆盖 . 所以输出123;