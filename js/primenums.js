alert("Bütün üçrəqəmli ədədlərin içərisindən sadə ədədləri seçərək çapa çıxaran program")
let flag=0;
let primes=[]
for(let i=100; i<1000; i++){
    for(let j=2; j<i && flag==0;j++){
        if(i%j===0){
            flag=1;
        }
    }if(flag==0){
        primes.push(i)
    }flag=0;
}
alert("ve bu ededlerdir: "+primes.join(' , '))
