n=parseInt(prompt("inserte un numero de notas"))
a=0; b=0;
while (a<n) {
    i=parseFloat(prompt("inserte la nota"))
    b=b+i;
    a++;
}
p=b/n;
alert("el promedio es:"+p)
console.log("el promedio es:"+p)