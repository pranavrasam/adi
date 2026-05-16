function checkPassword(){
    let password=document.getElementById("password").value;
    let correctPassword="Adityagay";
    if(password === correctPassword){
        window.location.href="index.html";
    }
    else{

        document.getElementById("message").innerHTML = "Wrong Password";

    }
}