//Variables publicas

var n,u,d;
var rpta="S" //Variable que indicará si desea continuar ingresando mas numeros
//=================== 2 =====================
function general() {
    var xm;
    ingreso();
    separa();
    xm=proceso(n,d,u); //Calcular la potencia de digitos y el menor o mayor digito
    alert(xm); //Mostrar resultado en ventana de alerta
    document.write(xm); //Imprimiendo en el documento html
}
//=================== 3 =====================
function ingreso(params) {
    n=parseInt(prompt("Ingrese un numero de 2 digitos"));

    
}
//=================== 4 =====================
function separa(params) {
    d=Math.floor(n/10); //decenas
    u=n%10; //unidades
    
}
//=================== 5 =====================
function proceso(v1,v2,v3) { //v1 es el numero, v2 es decenas y v3 unidades
    var x,y,mx,mn,m
    if (v1%2!=0) {//Si es impar
        x=Math.pow(v3,v2) //Elevar unidades a la decena
        mn=Math.min(v3,v2) //Hallar la cifra menor
        m=n+" es un numero impar,"+"\n"+
        "El digito de la unidad es "+u+"\n"+
        "El digito de las decenas es "+d+"\n"+
        u+" elevado a "+d+"="+x+"\n"+
        " y el digito de menor valor es: "+mn+"<br>";
    } else {
        y=Math.pow(v2,v3) //Elevar decenas a las unidades
        mx=Math.max(v3,v2) //Hallar la cifra mayor
        m=n+" es un numero par, "+"\n"+
        "El digito de la unidad es "+u+"\n"+
        "El digito de las decenas es "+d+"\n"+
        u+" elevado a "+d+"="+y+"\n"+
        " y el digito de mayor valor es: "+mx+"<br>"    
    }
    return m;
}