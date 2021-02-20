//trying comments

/* thats a 
multiline comment*/

// for variables 
var a = 5;

//print statement
document.write("<h1>hello world</h1>");


//alert statement remove comment to see
//alert(a);

// associativity 
// a+b is behaving differently 
var b= 9;
var z = 0;
document.write(a+b+"string"+ a+b);

//problems to use control statements its almost the same 
// if , else if , else
if ((a%2 == 0)&&(a>0)){
    document.write("<h3>even and positive </h3>");

}
else if (a%2 ==0){
    document.write("<h1> only even </h1>");
}
else if (a>0){
    document.write("<h1>only positive not even<h1>");
}
else{
    document.write("<h3>its neither even nor positive </h3>");
}


//switch case 
// can accept number , string , boolean as case arguments 
// here we used 1,2 as arguments here 
var day = 55;
//break statement is necessary 
switch(day){
    case 1:
        document.write("sunday");
        break;

    case 2:
        document.write("monday");
        break;
        //keep on doing that and there is one more thing called default

    default:
        document.write("<h1>not a day of week</h1>")
}

//for loop 
//1. print first 5 even number 

for (var i =1; i<6 ; i++){
    document.write(" " + (i*2) +" " )
}

document.write(" <h1> </h1>")

// print table of 5
for(var i =1; i<11 ; i++){
    document.write(" " + (5*i)+" ")
}

document.write(" <h1> </h1>")

//while loop
//1. print 5 odd numbers 
var i = 1
while (i<10){
    document.write(" "+ i+ " ");
    i += 2;
}

//do while 

var did = 5;
do{
    document.write("<h4>" + did + "</h4>")
}while(did > 10);


//functions
//1. add 2 numbers 

function add2number (z,x){
    var a = z+x;
    return a;
}

n = add2number(5,6);
document.write("<h3>" + n+ "</h3>")

// global and local variable 
// here the variable a is a local variable 

// arrays 
// can store different type of values 
var my_array = ["new", "cars", 24];
my_array.push("5000");
for (i = 0; i < my_array.length; i++){
    document.write("<h3>" + my_array[i] + "</h3>")
}

// object oriented programming(OOPS)
// not using classes 
// creating an object without constructor
var Car =  {
    brand : "Tesla",
    price : 5500,

    info : function (){
        document.write("car is available")
    }
}
document.write(Car.price + " ")
Car.info()

// creating an object with constructor 
function Cars (brand, price){
    this.brand = brand ;
    this.price = price ;

    this.info = function(){
        document.write("<h1>car is available</h1>");
    }
}

var c1 = new Cars("tata",5000);
c1.info()

// you can add or delette attributes function after they have been declared 
delete Cars.price;
// after deleting it gives undefined result 
document.write("<h1>"+Cars.price+"</h1>");
Cars.price = 5500;
document.write("<h1>"+Cars.price+"</h1>");

// using a default data type attributes 
// or making a string object
var my_str = "its a string ";
my_strobj = new String("its a string object");

document.write("<h1>"+typeof(my_str)+"</h1>");
document.write("<h1>"+typeof(my_strobj)+"</h1>");


