function validation(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if(name.length <5 ){
        alert("Please Enter Valid Name");
        return false;
    }
   
    if(address.length <5){
        alert("Please Enter Your Address");
        return false;
    }
   
    if(email.indexOf("@")== 1 || email.length <6 ){
        alert("Please Enter Valid Email");
        return false;
    }
   
    if(isNaN(phone) || phone.length <10){
        alert("Please Enter Valid Phone Number");
        return false;
    }
        alert("Form Register Successfully!")
        return true;
        
}