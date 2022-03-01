function Welcomewill()
{
	var will=prompt("Here is the registration page! Are you ready ","Ready");
	if(will=='')
	{
		alert("Write Ready to start");
		Welcomewill();
	}
	
}

function validation(){
	
	var will=prompt("Do you want to register ","y/n");
	if(will=='y')
		return true;
	else
		return false;
    var name = document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password= document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var error_message = document.getElementById('error_message');
    var text;
    error_message.style.padding ="10px";

  
if(name.length<5){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
}

if(email.indexOf('@')==-1 ||email.length<6){
    text = "Please Enter Valid Email id";
    error_message.innerHTML = text;
    return false;
}

if(isNaN(phone) || phone.length!=10){
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
}

if(password.length<5){
    text = "Please Enter valid Password";
    error_message.innerHTML = text;
    return false;
}
if(cpassword.length!=password.length || cpassword!=password){
    text = "Please check the password";
    error_message.innerHTML = text;
    return false;
}

alert("Good job!");
return true;
}