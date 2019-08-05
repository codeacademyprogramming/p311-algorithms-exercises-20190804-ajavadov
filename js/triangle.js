alert("Üçbucaq düzəlməsi mümkünlüyünü yoxlaya bilməyimiz üçün, sıra ilə 3 ədəd tərəf uzunluğu daxil edin")
    var a=parseInt(prompt("1-ci tərəf"))
    var b=parseInt(prompt("2-ci tərəf"))
    var c=parseInt(prompt("3-cü tərəf"))
    
    
    
    if((a+b)<=c || (a+c)<=b || (b+c)<=a ){
        alert("mümkün deyil");
        
    }
    else if(a==b && a==c){
    alert("mümkündür, bərabərtərəflidir");
    
    }
    else if((a==b && a!=c) || (a==c && a!=b) || (b==c && b!=a)){
    alert("mümkündür, bərabəryanlıdır");
    
    }
    else
    alert("mümkündür, müxtəliftərəflidir");
    
    
    
