function checkPassword(){

    let password = document.getElementById("password").value;

    let correctPassword = "teatotalers";

    if(password === correctPassword){

        window.location.href = "server.html";

    }

    else{

        alert("Wrong Password");

    }

}
