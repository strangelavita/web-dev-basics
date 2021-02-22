// creating a function for validation blank input


/* now the question is when should we call this method 
try it on 2 attributes 
1. on button click 
2. on submit 
the correct way will be on submit otherwise ... try it */
function validi(){
    var usrnam = document.getElementById("un1");
    var passwd = document.getElementById("pw1");

    if (usrnam.value =="" ){
        alert ("you can not leave username blank " );
        document.getElementById("uss1").style.border="thin solid red";
        
        return false;
    }
    
    else if ( passwd.value == "") {
        alert ("you can not leave password blank");
        document.getElementById("pss1").style.border="thin solid red";

        // removing border if they made a mistake earlier
        document.getElementById("uss1").style.border="";
        return false ;
    }
// length of password should be over a certain length lets say 5
    else if (passwd.length <= 5){
        alert("password too short");
        document.getElementById("pss1").style.border="thin solid red";
         
        
        return false;

    }

    else {
        return true ;
    }
}

// now we will start regular expressions our condition is that 
// the username should start with capg2021

function regexp1(){
    var usrnam2 = document.getElementById("un2").value;
    // i used i for capitalisation issue
    // upper case and lower case alphabets will be treated same  
    var regx = /capg2021/i;

    if (regx.test(usrnam2)){
        return true ;
    }

    else{
        alert("invalid username ");
        return false ;
    }

}


// enhancing regular expressions 
// giving character set [a,b,c] 
/* if i write var regx = /[a,b,c]cat/  this will accept acat,bcat,ccat
or you can write [a-c] this will include a,b,c 
*/

// excluding a character from a set 
/* [^a,b,c] now you cant have this value  */
