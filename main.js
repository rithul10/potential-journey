const loginclk = () =>{
    const uname = username.value
    const passwe = password.value
    if(!uname || !passwe){
        info.innerHTML = "fill the form"
    }
    else{
        info.innerHTML = "login successful"
        localStorage.setItem("username",uname)
        window.location = "dash.html"
    }
}