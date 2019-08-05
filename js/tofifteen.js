'use strict'
alert("a, b ve c ededlerini daxil edin");
var list=[]; var newlist=[];
list.push(parseInt(prompt("a?")));
list.push(parseInt(prompt("b?")));
list.push(parseInt(prompt("c?")));
if(list[0]%5===0 && list[0]%0===0){
    // alert(list[0]+" hem 3-e hem de 5-e qaliqsiz bolunur")
    newlist.push(list[0]);
}
if(list[1]%5===0 && list[1]%3===0){
    newlist.push(list[1]);
}
if(list[2]%5===0 && list[1]%3===0){
    newlist.push(list[2]);
}
if(newlist.length>0)
alert(newlist.join(' , ')+" hem 3-e hem de 5-e qaliqsiz bolunur.")
else{
    alert('hecbiri')
}

