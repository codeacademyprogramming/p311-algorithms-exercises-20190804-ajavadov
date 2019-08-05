alert("a, b ve c ededlerini daxil edin");
var llist = [];
var newllist = [];
var list3 = [];
llist.push(parseInt(prompt("a?")));
llist.push(parseInt(prompt("b?")));
llist.push(parseInt(prompt("c?")));
console.log(llist);
let flag = 0;
if (llist[0] % 2 === 0 && llist[0] % 4 === 0) {
  if (llist[0] % 8 === 0) {
    newllist.push(llist[0]);
  } else {
    list3.push(llist[0]);
  }
}
if (llist[1] % 2 === 0 && llist[1] % 4 === 0) {
  if (llist[1] % 8 === 0) {
    newllist.push(llist[0]);
  } else {
    list3.push(llist[1]);
  }
}
if (llist[2] % 2 === 0 && llist[2] % 4 === 0) {
  if (llist[2] % 8 === 0) {
    newllist.push(llist[2]);
  } else {
    list3.push(llist[2]);
  }
}
if (newllist.length > 0)
  alert(
    newllist.join(" , ") + ", hem 2-ye hem 4-e hem de 8-e qaliqsiz bolunur."
  );
else "hec 2 ve 4e de bolunmur";
if (list3.length > 0) {
  alert(list3.join(" , ") + " ise, 2-ye ve 4-e bolunur amma 8-e yox.");
}
