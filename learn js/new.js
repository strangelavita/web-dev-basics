function getting_clicked (){
    var username1 = document.getElementById("text1").value ;
    var password1 = document.getElementById("password1").value;

    if(password1 == username1){
        alert("password and username matches")
    }
    else {
        alert ("details saved ")
    }    
}

function getting_clicked2(){
    var rd1_1 = document.getElementById("rd1_1");
    var rd1_2 = document.getElementById("rd1_2");

    if (rd1_1.checked == true){
        alert (rd1_1.value + " is selected ")
    }
    else if (rd1_2.checked == true ){
        alert(rd1_2.value +" has been selected ")
    }
    else{
        alert("nothing is selected ")
    }
    
}

function clicked3(){
    var dropbox1 = document.getElementById("myselectbox");
    var selectedindex1 = dropbox1.selectedIndex;
    alert(dropbox1.options[selectedindex1].value)
}
