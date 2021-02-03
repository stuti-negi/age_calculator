function cal()
{
	debugger;
var age=parseFloat(document.getElementById("humanage").value);
var agedec=document.getElementById("humanage_month").value;
var ad=agedec/12;
var age1=age+ad;
if(age1<0)
{
	alert("Enter a valid age");
}
else if(age1>=21)
{
var a2=age1-21;
var a3=a2/4;
var fa=a3+2;
document.getElementById("dogage").value=parseInt(fa);
document.getElementById("dogage_month").value=parseInt((fa-parseInt(fa))*12);
document.getElementById("disp").style.display="block";
}
else if(0<age1<21)
{
 
 var as=(age1/10.5);

 document.getElementById("dogage").value=parseInt(as);
 document.getElementById("dogage_month").value=parseInt((as-parseInt(as))*12);
 document.getElementById("disp").style.display="block";
}

}