'use strict'
let str="aaafdaewrebdafdasfdsafdsafb";
function getStrSum(str) {
    /*
       @思路
       /1.首先遍历字符串每一数据
       /2.把找到的数据放进对象中
       /3.if判断是否有重复数据,如果有就+1,没有就等于1
       /4.str.charAt(i) 返回当前下标对应的字符 列如let str=abc; str.charAt(1)获取的是b
       /5.把保存对象遍历,进行比对,取最大的值出来打印
    */
    let obj={};
    for(let i=0;i<str.length;i++){

        if(obj[str.charAt(i)]){

            obj[str.charAt(i)]++;
        }else{
            obj[str.charAt(i)]=1;
        }
    }
    console.log(obj);
    let sum=0;
    let number;
    for(let key in obj){
        if (obj[key]>sum) {
            sum=obj[key]
            number=key
        }
    }
    console.log(number+'出现了====='+sum+'次');
}
getStrSum(str);