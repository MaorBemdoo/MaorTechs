
// ReactDOM.render("")

// Variable declaration
// const SignUpForm = document.getElementById("createAccount")
// const SignUpSubmitBtn = document.getElementById("sub")


// document.cookie = "Name='Maor Bemdoo';"

// Thank.html OR redirect page
/*
const redirectForm = document.getElementById("fForm");
const redirectInput = document.getElementById("rInput");
const redirectIncorrectMsg = document.getElementById("rP");
const redirectSubmitBtn = document.getElementById("rSubmit")
redirectForm.addEventListener("submit", (e) => {
    if(redirectInput.value !== "123456"){
        redirectIncorrectMsg.textContent = "Hello"
        e.preventDefault()
    }
})
*/

function validateEmail(e) {
    let SignUpEmailAdd = document.getElementById("ea")
    const SignUpEmailAddRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    let SignUpEmailAddRegexFound = SignUpEmailAddRegex.test(SignUpEmailAdd.value)
    let SignUpEmailAddMsg = document.getElementById("eam")
    if (SignUpEmailAdd.value.length == "") {
        SignUpEmailAddMsg.innerHTML = "Email Address should be filled"
        SignUpEmailAdd.classList.add("form__input--error")
        e.preventDefault()
    } else if (!SignUpEmailAddRegexFound) {
        SignUpEmailAddMsg.innerHTML = "Invalid Email Address format\nexample@test.com"
        SignUpEmailAdd.classList.add("form__message--error")
        SignUpEmailAdd.classList.add("form__input--error")
        e.preventDefault()
    } else{
        SignUpEmailAddMsg.innerHTML = ""
        SignUpEmailAdd.classList.remove("form__message--error")
        SignUpEmailAdd.classList.remove("form__input--error")
    }
}

function validatePassword(e) {
    let PasswordShowHide = document.getElementById("togglePassword")
    let SignUpPassword = document.getElementById("P")
    if (SignUpPassword.value.length < 8) {
        document.getElementById("PP").innerHTML = "Password should be more than 8 characters"
        PasswordShowHide.style.top = "40%"
        SignUpPassword.classList.add("form__input--error")
        e.preventDefault()
    } else{
        PasswordShowHide.style.top = "50%"
        document.getElementById("PP").innerHTML = ""
        SignUpPassword.classList.remove("form__input--error")
    }
}

function validateCPassword(e) {
    let SignUpPass = document.getElementById("P")
    let SignUpComfirmPassword = document.getElementById("CP")
    let SignUpUniversalErrorMsg = document.getElementById("uni");
    if (SignUpPass.value != SignUpComfirmPassword.value) {
        SignUpUniversalErrorMsg.innerHTML = "Passwords do not match!";
        SignUpPass.classList.add("form__input--error")
        SignUpPass.classList.add("form__message--error")
        SignUpComfirmPassword.classList.add("form__input--error")
        SignUpComfirmPassword.classList.add("form__message--error")
        e.preventDefault()
    } else{
        SignUpUniversalErrorMsg.innerHTML = "";
        SignUpPass.classList.remove("form__input--error")
        SignUpPass.classList.remove("form__message--error")
        SignUpComfirmPassword.classList.remove("form__input--error")
        SignUpComfirmPassword.classList.remove("form__message--error")
    }
}

function validateUName(e) {
    let SignUpUserName = document.getElementsByClassName("cun")[0];
    if (SignUpUserName.value.trim() == "") {
        document.getElementById("un").innerHTML = "Username should be filled";
        SignUpUserName.classList.add("form__input--error")
        e.preventDefault() 
    } else{
        // localStorage.setItem("NameStore",  SignUpUserName.value)
        document.getElementById("un").innerHTML = "";
        SignUpUserName.classList.remove("form__input--error")
    }
}

function universalError(e){
    let SignUpUniversalErrorMsg = document.getElementById("uni");
    let SignUpUserName = document.getElementsByClassName("cun")[0]
    let SignUpEmailAdd = document.getElementById("ea")
    let SignUpP = document.getElementById("P")
    let SignUpComfirmP = document.getElementById("CP")
    if (SignUpUserName.value.trim() == "" && SignUpEmailAdd.value.trim() == "" && SignUpP.value.trim() == "" && SignUpComfirmP.value.trim() == ""){
        SignUpUniversalErrorMsg.innerHTML = "Please fill in all required fields";
        SignUpP.classList.add("form__input--error")
        SignUpComfirmP.classList.add("form__input--error")
        e.preventDefault()
    } else{
        SignUpUniversalErrorMsg.innerHTML = ""
    }
}

function UserData(){
    let SignUpUserName = document.getElementsByClassName("cun")[0];
    let SignUpEmailAdd = document.getElementById("ea")
    let SignUpPassword = document.getElementById("P")
    let UserData = {
        UserName: SignUpUserName.value,
        UserEmailAdd: SignUpEmailAdd.value,
        UserPassword: SignUpPassword.value
    }
    localStorage.setItem("MaorTechsUserData",  JSON.stringify(UserData))
}

document.addEventListener("submit", (e) => {
    validateUName(e)
    validatePassword(e)
    validateCPassword(e)
    validateEmail(e)
    universalError(e)
    UserData()
})

let 
    sideBar  = document.getElementsByTagName("aside")[0]
    sideBarLinks = document.querySelectorAll("#_sl h2")
    sbt = document.getElementById("_sbt")

sbt.addEventListener("click", (e) => {
    sbt.classList.toggle("sbc")
    if (sbt.classList.contains("sbc")){
        sideBar.style.left = "0"
    } else{
        sideBar.style.left = "100%"
    }
    sideBarLinks.forEach(link => {
        link.classList.remove("dO")
        link.classList.add("eO")
    })
})

// sbc.addEventListener("click", (e) => {
//     sideBar.style.transform = "scale(0,1)"
//     sideBarLinks.forEach(link => {
//         link.classList.remove("eO")
//         link.classList.add("dO")
//     })
// })

sideBarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        sideBar.style.left = "100%"
        sbt.classList.remove("sbc")
        link.classList.remove("eO")
        link.classList.add("dO")
    })
})

const item1 = document.querySelectorAll(".item1-item h2");
const asideItem1 = document.querySelectorAll("#_sl a h2");
window.onscroll = (e) => {
    item1.forEach(item => {
        if(scrollY >= 795 && scrollY < 1731){
            // item.classList.add("activeNav")
            item.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("activeNav")
            item.parentNode.parentNode.firstElementChild.firstElementChild.classList.add("activeNav")
            item.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.classList.remove("activeNav")
        } else if(scrollY >= 1731 && scrollY < 2526){
            item.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("activeNav")
            item.parentNode.parentNode.firstElementChild.firstElementChild.classList.remove("activeNav")
            item.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.classList.add("activeNav")
        } else if(scrollY >= 2526){
            item.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.classList.remove("activeNav")
            item.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("activeNav")
        } else if(scrollY < 795){
            item.classList.remove("activeNav")
        }
    })
    asideItem1.forEach(asideItem => {
        if(scrollY < 795){
            asideItem.parentNode.parentNode.firstElementChild.firstElementChild.classList.add("activeNav")
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.classList.remove("activeNav")
        } else if(scrollY >= 795 && scrollY < 1731){
            asideItem.parentNode.parentNode.firstElementChild.firstElementChild.classList.remove("activeNav")
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.classList.add("activeNav")
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("activeNav")
        } else if(scrollY >= 1731 && scrollY < 2526){
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.firstElementChild.classList.remove("activeNav")
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.add("activeNav")
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("activeNav")
        } else if(scrollY >= 2526){
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("activeNav")
            asideItem.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.classList.add("activeNav")
        }
    })
}

const sections = document.querySelectorAll("section");
const header = document.getElementsByTagName("nav")[0];
const footer = document.getElementsByTagName("footer")[0]
if(localStorage.getItem("MaorTechsUserData") == null || JSON.parse(localStorage.getItem("MaorTechsUserData")).UserName == ""){
    window.onscroll = () => {
        const LoginModal = document.getElementById("lM")
        if(scrollY > 709){
            LoginModal.classList.remove("d-none")
            sections.forEach(section => {
                section.style.filter = "blur(7px)"
                section.style.pointerEvents = "none"
            })
            header.style.filter = "blur(7px)"
            header.style.pointerEvents = "none"
            footer.style.filter = "blur(7px)"
            footer.style.pointerEvents = "none"
    }
    }
    item1.forEach(item11 => {
        item11.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.textContent = "Signup"
        // item11.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.insertAdjacentElement(10, '<a href="Login.html" class="item1-item" style="color:crimson;"><h2>Login</h2></a>')
    })
    asideItem1.forEach(asideItem11 => {
        asideItem11.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.textContent = "SignUp"
    })
} else{
    item1.forEach(item11 => {
        item11.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.textContent = "Logout"
    })
    asideItem1.forEach(asideItem11 => {
        asideItem11.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.textContent = "Login"
    })
}


// const item1 = document.querySelectorAll(".item1-item");
// item1.addEventListener("click", (e) => {
//     console.log(e.target)
//     e.target.style.color = "crimson"
//     // item1.classList.toggle("text-danger")
//     // item1.classList.toggle("text-light")
// })

// document.addEventListener("scroll", (e) => {
//     console.log(location.pathname)
// })

// const sections = document.getElementsByTagName("body")[0];
// const header = document.getElementsByTagName("nav")[0];
// const navLinks = document.getElementsByClassName("nav-item1")[0];
// const hero = document.getElementById("hero")
const serviceItems = document.querySelectorAll("#services .service-item")
const options = {
    threshold: 0.5
    // rootMargin: "-150px 0px 0px 0px"
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // console.log(entry)
    })
}, options)

serviceItems.forEach(serviceItem => {
    observer.observe(serviceItem)
})

// window.onscroll = function(){
//     const top1 = window.scrollY
//     console.log(top1)
//     if(top1 >= 5){
//         header.classList.add("bg-primary")
//     } else{
//         header.classList.remove("bg-primary")
//     }
// }

console.log("Testing...")