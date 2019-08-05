alert("Bütün ikirəqəmli ədədkərin içindən 3-ə və 6-ya bölünən ədədlərin neçəsinin həmçinin 9-a bölündüyünü hesablayan program")
let siyahi=[]
for(let i=10; i<100;i++){
    if(i%3===0 & i%6===0){
        siyahi.push(i)
}}
var ilkin=siyahi.length;
for(let j=siyahi.length-1; j>=0 ;j--){
     if(siyahi[j] % 9 !==0){
         siyahi.pop()
}}
alert("Bütün ikirəqəmli ədədkərin içindən toplam "+ilkin+" eded hem 3-e hem de 6-ya bolunur. Ve onlardan "+siyahi.length+" denesi hem de 9-a bolunur.")