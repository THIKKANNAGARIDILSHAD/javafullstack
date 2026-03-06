document.getElementById("registrationForm").addEventListener("submit",function(e){
    e.preventDefault();
let name = document.getElementById("name").Value;    
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmpassword = document.getElementById("confirmpassword").value;
let message = document.getElementById("message");

if(name === " " || email === " " || password ===" "){
    message.innerHTML = "ALL fields are required!";
    return;    
}
if(password.length<6){
     message.innerHTML = "password must be at least 6 characters.";
     return;

}
if(password !== confirmpassword){
    message.innerHTML = "password do not match!";
    return;
}
message.style.coor = "green";
message.innerHTML = "Registered Succesfully!";
});