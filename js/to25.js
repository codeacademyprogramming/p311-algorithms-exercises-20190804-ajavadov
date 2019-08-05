alert("25-in misli olan bütün üçrəqəmli tək ədədlərin həndəsi ortasını tapmaq üçün program")
let counter=0;
let mult=1;
for(let i=101;i<=999;i=i+2){
    if(i%25===0){
        console.log(i);
        counter++;
        mult*=i;
    }
}
alert("onlar "+counter+" denedir. Ve hendesi orta: "+Math.pow(mult,1/counter));