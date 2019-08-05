alert("a, b ve c ededlerini daxil edin");
var llist=[];
var newllist=[];
llist.push(parseInt(prompt("a?")));
llist.push(parseInt(prompt("b?")));
llist.push(parseInt(prompt("c?")));
console.log(llist)
if(llist[0]%8===0){
    // alert(list[0]+" hem 3-e hem de 5-e qaliqsiz bolunur")
    newllist.push(llist[0]);
}
if(llist[1]%8===0){
    newllist.push(llist[1]);

}
if(llist[2]%8===0){
    newllist.push(llist[2]);

}
if(newllist.length>0)
alert(newllist.join(' , ')+" hem 2-e hem de 4-e qaliqsiz bolunur.")
else{
    alert('hecbiri')
}

