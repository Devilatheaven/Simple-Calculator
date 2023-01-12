var a=0;
var b=0;
var first=0;
var opnum=0;
var ans=0;
var firstfract=0;
var secondfract=0;
var tot=document.querySelectorAll(".button-size").length;
for(var i=0;i<tot;i++){
    document.querySelectorAll(".button-size")[i].addEventListener("click",function(){
        var but = this.innerHTML
        if(but<=9 && but>=0){
            number(but);
        }
        else if(but==='+'){
            operatorvalue(but);
        }
        else if(but==='-'){
            operatorvalue(but);
        }
        else if(but==='x'){
            operatorvalue(but);
        }
        else if(but==='/'){
            operatorvalue(but);
        }
        else if(but==='='){
            operatorvalue(but);
        }
        else if(but==='%'){
            operatorvalue(but);
        }
        else if(but==='CE'){
            a=0;
            b=0;
            opnum=0;
        }
        else if(but==='C'){
            if(first===0 ){
                a=0;
            }
            else if(first===1){
                b=0;
            }
        }
        else if(but==='CE'){
            a=0;
            b=0;
            first=0;
            opnum=0;
            ans=0;
            display(ans);
        }
        else if(but==='DEL'){
            if(first===0){
                a=(a-(a%10))/10;
                display(a);
            }
            if(first===1){
                b=(b-(b%10))/10;
                display(b);
            }
        }
        else if(but==='1/x'){
            ans = 1/a;
            first=1;
            a=ans;
            display(ans);
        }
        else if(but==='x*x'){
            a=a*a;
            first=1;
            display(a);
        }
        else if(but==='sqrt(x)'){
            a=Math.sqrt(a);
            first=1;
            display(a);
        }
        else if(but==='.'){
            fraction();
        }
    });
}

function fraction(){
    if(first===0){
        firstfract++;
    }
    else if(first===1){
        secondfract++;
    }
}

function number(value){
    if(first===0 && firstfract===0){
        a=a*10+(value-'0');
        document.getElementById("display").innerHTML=a;
    }
    else if(first===0 && firstfract!=0){
        a=a+((value-'0')/(Math.pow(10,firstfract)));
        firstfract++;
        document.getElementById("display").innerHTML=a;
    }
    else if(first===1 && secondfract===0){
        b=b*10+(value-'0');
        document.getElementById("display").innerHTML =b;
    }
    else if(first===1 && secondfract!=0){
        b=b+((value-'0')/(Math.pow(10,secondfract)));
        secondfract++;
        document.getElementById("display").innerHTML = b;
    }
}

function operatorvalue(op){
    if(op==='+'){
        opnum=1;
        first=1;
    }
    else if(op==='-'){
        opnum=2;
        first=1;
    }
    else if(op==='x'){
        opnum=3;
        first=1;
    }
    else if(op==='/'){
        opnum=4;
        first=1;
    }
    else if(op==='='){
        calculate(a,b,opnum);
    }
    else if(op==='%'){
        opnum=5;
        first=1;
    }
}

function calculate(num1,num2,opval){
    switch(opval){
        case 1:
            ans=a+b;
            a=ans;
            b=0;
            display(ans);
            break;
        case 2:
            ans = a-b;
            a=ans;
            b=0;
            display(ans);
            break;
        case 3:
            ans = a*b;
            a=ans;
            b=0;
            display(ans);
            break;
        case 4:
            ans=a/b;
            a=ans;
            b=0;
            display(ans);
            break;
        case 5:
            ans = a%b;
            a=ans;
            b=0;
            display(ans);
            break;
    }
}

function display(ans){
    document.getElementById("display").innerHTML=ans;
}


