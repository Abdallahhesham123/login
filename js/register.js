let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let comfirm_password = document.getElementById("comfirm-password");
let com_password = document.getElementById("com_password")
let indicator = document.querySelectorAll(
  "#pass_con_indicator .indicator span"
);
let pass_text = document.querySelector("#pass_con_indicator .text");
let length_text = document.querySelector("#pass_con_indicator .length-text");
let pass_icon = document.getElementById("pass_icon");
let pass_icon_app = document.getElementById("pass_icon_app");
let com_pass_icon_app = document.getElementById("com_pass_icon_app");
let com_pass_icon = document.getElementById("com_pass_icon");
let errorNameMessage = document.getElementById("error-name");
let errorEmailMessage = document.getElementById("error-email");
let btn_submit = document.getElementById("submit");
let validationName = /^[A-Z]{1}-[a-z]{3,15}$/gm;
let validationEmail = /^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.[^\W_]{2,4})$/gm;
let password_strong_regex =false;
let  password_medium_regex =false;
let  password_weak_regex =false;
let   password_is_ok 
let Name_valid 
let Email_valid 


// for alert danger//
let content_alert =document.getElementById('content_alert')
let close_alert =document.getElementById('close_alert')
let text_alert =document.getElementById('text_alert')
let btn_alert =document.getElementById('btn_alert')

close_alert.addEventListener('click',function(){
  content_alert.classList.add('d-none');
  content_alert.classList.remove('d-block');
});

btn_alert.addEventListener('click',function(){
  content_alert.classList.add('d-none');
  content_alert.classList.remove('d-block');
});

// end for alert danger//

//for alert success//
let content_alert_con =document.getElementById('content_alert_con')
let close_alert_con =document.getElementById('close_alert_con')
let text_alert_con =document.getElementById('text_alert_con')
let btn_alert_con =document.getElementById('btn_alert_con')

close_alert_con.addEventListener('click',function(){
  content_alert_con.classList.add('d-none');
  content_alert_con.classList.remove('d-block');
});

btn_alert_con.addEventListener('click',function(){
  content_alert_con.classList.add('d-none');
  content_alert_con.classList.remove('d-block');
});

//end for alert success//


// for user field focus blur //
username.addEventListener("focus", function (e) {
  e.preventDefault();
  username.placeholder = "";
  username.style.backgroundColor = "transparent";
  if(username.value != ""){
    errorNameMessage.classList.remove("d-block");
    errorNameMessage.classList.add("d-none");
  }

});

username.addEventListener("blur", function (e) {
  e.preventDefault();
  if (username.value == "") {
    username.placeholder = "ex(E-shop) between 5 char to 10 char ....";
    errorNameMessage.classList.remove("d-block");
    errorNameMessage.classList.add("d-none");
  }

  if (username.value.match(validationName) && username.value !== "") {
    errorNameMessage.classList.add("d-none");
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
    Name_valid = "ok";
    // console.log(Name_valid)
  } else if (username.value == "") {
    errorNameMessage.classList.add("d-block");
    errorNameMessage.classList.remove("d-none");
    // errorNameMessage.innerHTML += '';
    errorNameMessage.innerHTML += "enter your name please";
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
  } else if (!username.value.match(/^[A-Z]{1}/)) {
    errorNameMessage.classList.add("d-block");
    errorNameMessage.classList.remove("d-none");
    errorNameMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    
    " 
    ></i>`;
    errorNameMessage.innerHTML +=
      "please start name with Single capital letter";
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
  } else if (!username.value.match(/^[A-Z]{1}-/)) {
    errorNameMessage.classList.add("d-block");
    errorNameMessage.classList.remove("d-none");
    errorNameMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block')
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    " 
    ></i>`;
    errorNameMessage.innerHTML += "please add - after start Capital letter";
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
  } else if (!username.value.match(/^[A-Z]{1}-[a-z]{3,15}$/)) {
    errorNameMessage.classList.add("d-block");
    errorNameMessage.classList.remove("d-none");
    errorNameMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block')";
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    ></i>`;
    errorNameMessage.innerHTML +=
      "please this name must be have small letter between 3 character & 15 character after-";
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
  }
});

// end for user field focus blur //

// for email field focus blur //
email.addEventListener("focus", function (e) {
  e.preventDefault();
  email.placeholder = "";
  email.style.backgroundColor = "transparent";
  if(email.value != ""){
    errorEmailMessage.classList.remove("d-block");
    errorEmailMessage.classList.add("d-none");
    // email.value ="";
  }

});

email.addEventListener("blur", function (e) {
  e.preventDefault();
  if (email.value == "") {
    email.placeholder = "ex(Abdallah_hstar2009@yahoo.com)  ....";
    errorEmailMessage.classList.remove("d-block");
    errorEmailMessage.classList.add("d-none");
  }

  if (email.value.match(validationEmail) && email.value !== "") {
    errorEmailMessage.classList.add("d-none");
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    Email_valid = "ok";
    // console.log(Email_valid);
  } else if (email.value == "") {
    errorEmailMessage.classList.add("d-block");
    errorEmailMessage.classList.remove("d-none");
    // errorEmailMessage.innerHTML += '';
    errorEmailMessage.innerHTML += "enter your email please";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else if (!email.value.match(/^\w+([\._]?\w+)*/gm)) {
    errorEmailMessage.classList.add("d-block");
    errorEmailMessage.classList.remove("d-none");
    errorEmailMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    
    " 
    ></i>`;
    errorEmailMessage.innerHTML +=
      " email with any chracter inside this maybe _ or . not use special character";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else if (!email.value.match(/^\w+([\._]?\w+)*@/gm)) {
    errorEmailMessage.classList.add("d-block");
    errorEmailMessage.classList.remove("d-none");
    errorEmailMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    "></i>`;
    errorEmailMessage.innerHTML += "please add @ after email name";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else if (!email.value.match(/^\w+([\._]?\w+)*@\w+([\._]?\w+)*/gm)) {
    errorEmailMessage.classList.add("d-block");
    errorEmailMessage.classList.remove("d-none");
    errorEmailMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    "></i>`;
    errorEmailMessage.innerHTML +=
      "please add company domain after @ without any special character";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else if (
    !email.value.match(/^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.[^\W_]{2,4})$/gm)
  ) {
    errorEmailMessage.classList.add("d-block");
    errorEmailMessage.classList.remove("d-none");
    errorEmailMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    "></i>`;
    errorEmailMessage.innerHTML +=
      "please add domain name after co domain with . and word between(2:4)char without any special character";
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
});
// end for email field focus blur //

// for password field focus input //

/*

password very weak [ /^[0-9]{1}[a-zA-Z0-9_!@#\$%\^&\*]{8,}/]

password weak [ /^[a-z]{1}[a-zA-Z0-9_!@#\$%\^&\*]{8,}/]

password medium [/^[A-Z]{1}[a-zA-Z0-9_!@#\$%\^&\*]{7,}/]

password strong [/^\W{4}[a-zA-Z0-9_!@#\$%\^&\*]{5,}\W{2}$/]

  لازم تبتدي باي اربع رموز وتنتهي برمزين   

*/
password.addEventListener("focus", function (e) {
  e.preventDefault();
  password.placeholder = "";
  password.style.backgroundColor = "transparent";
  comfirm_password.value ="";
  // password.value ="";
  length_text.innerHTML=""
  indicator[0].parentElement.classList.add("d-none");
  password.classList.remove("is-invalid");
  password.classList.remove("is-valid");

  pass_text.innerHTML=""
  password_strong_regex ="";
  password_medium_regex ="";
  password_weak_regex ="";
  console.log(password_weak_regex +  password_medium_regex +password_strong_regex )

});

password.addEventListener("input", function () {
  if (password.value.length < 8 || password.value.length == 0) {

    password_strong_regex == "";
    password_medium_regex == "";
    password_weak_regex ==  "";
    password_is_ok ==  "";
    length_text.classList.remove("d-none");
    length_text.classList.add("d-block");
    length_text.innerHTML =
      "your password length must be more than 8 character";
    indicator[0].parentElement.classList.add("d-none");
    indicator[1].parentElement.classList.add("d-none");
    indicator[2].parentElement.classList.add("d-none");
    pass_text.classList.add("d-none");
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");

  
  } else {
    length_text.classList.remove("d-block");
    length_text.classList.add("d-none");

    if (password.value.match(/^[0-9]{1}[a-zA-Z0-9_!@#\$%\^&\*]{8,}/)) {
      indicator[0].parentElement.classList.remove("d-none");
      indicator[1].classList.remove("d-block", "medium");
      indicator[2].classList.remove("d-block", "strong");
      indicator[1].classList.add("d-none");
      indicator[2].classList.add("d-none");
      indicator[0].classList.remove("d-none");
      indicator[0].classList.add("d-block", "weak");
      pass_text.classList.remove("d-none");
      pass_text.classList.add("d-block", "weak", "active");
      pass_text.innerHTML = "your password is very weak I accpted it but it is not recomnded";
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
    // pass_icon.classList.add('d-none')
    // pass_icon.classList.remove('d-block')
        password_strong_regex =false;
        password_medium_regex =false;
        password_weak_regex =true;
        console.log("week is :" + password_weak_regex)}
 else if (password.value.match(/^[a-z]{1}[a-zA-Z0-9_!@#\$%\^&\*]{8,}/)) {
      indicator[0].parentElement.classList.remove("d-none");
      indicator[1].classList.remove("d-block", "medium");
      indicator[2].classList.remove("d-block", "strong");
      indicator[1].classList.add("d-none");
      indicator[2].classList.add("d-none");
      indicator[0].classList.remove("d-none");
      indicator[0].classList.add("d-block", "weak");
      pass_text.classList.remove("d-none");
      pass_text.classList.add("d-block", "weak", "active");
      pass_text.innerHTML = "your password is weak";
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
    // pass_icon.classList.add('d-none')
    // pass_icon.classList.remove('d-block')
        password_strong_regex =false;
        password_medium_regex =false;
        password_weak_regex =true;
        console.log("week is :" + password_weak_regex)
    } else if (password.value.match(/^[A-Z]{1}[a-zA-Z0-9_!@#\$%\^&\*]{7,}/)) {
      indicator[1].parentElement.classList.remove("d-none");
      indicator[0].classList.add("d-none");
      indicator[2].classList.add("d-none");
      indicator[0].classList.remove("d-block", "weak");
      indicator[2].classList.add("d-block", "strong");
      indicator[1].classList.remove("d-none");
      indicator[1].classList.add("d-block", "medium");
      pass_text.classList.remove("d-none");
      pass_text.classList.add("d-block", "medium", "activem");
      pass_text.innerHTML = "your password is medium";
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
      // pass_icon.classList.add('d-none')
      // pass_icon.classList.remove('d-block')
      password_strong_regex =false;
      password_medium_regex =true;
      password_weak_regex =false;
      console.log("medium is :" + password_medium_regex )
    } else if (password.value.match(/^\W{4}[a-zA-Z0-9_!@#\$%\^&\*]{5,}\W{2}$/)) {
      indicator[2].parentElement.classList.remove("d-none");
      indicator[0].classList.add("d-none");
      indicator[1].classList.add("d-none");
      indicator[0].classList.remove("d-block", "weak","active");
      indicator[1].classList.add("d-block", "medium");
      indicator[2].classList.remove("d-none");
      indicator[2].classList.add("d-block", "strong");
      pass_text.classList.remove("d-none");
      pass_text.classList.add("d-block", "strong", "actives");
      pass_text.innerHTML = "your password is strong";
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
      // pass_icon.classList.add('d-none')
      // pass_icon.classList.remove('d-block')
      password_strong_regex =true;
      password_medium_regex =false;
      password_weak_regex =false;
      console.log("strong is :"+ password_strong_regex )
    }
  }
});

comfirm_password.addEventListener("focus", function (e) {
  e.preventDefault();
  comfirm_password.placeholder = "";
  comfirm_password.style.backgroundColor = "transparent";
});
// end for password field focus input //

// for comfirmation-password field //
comfirm_password.addEventListener("input", function (e) {
  e.preventDefault();


  if((comfirm_password.value === password.value) && ((password_strong_regex = true ) || ( password_weak_regex = true ) )){
   
    password_is_ok = "ok";
    console.log('abdallah')
    com_password.classList.remove('d-block')
    com_password.classList.add('d-none')
  }else{
    com_password.classList.remove('d-none')
    com_password.classList.add('d-block')
    password_is_ok = "";
    com_password.innerHTML=`password not match`
  
  }
  });
// end for comfirmation-password field //

//eye to show password content
pass_icon.addEventListener("click", function (e) {
  e.preventDefault();
  //  console.log(this.previousElementSibling.getAttribute('type'))  ;

this.classList.add('d-none');
this.classList.remove('d-block')
pass_icon_app.classList.add('d-block')
pass_icon_app.classList.remove('d-none')

  if (this.previousElementSibling.getAttribute("type") === "password") {
    this.previousElementSibling.setAttribute("type", "text");
  } else {
    this.previousElementSibling.setAttribute("type", "password");


  }
});
//end ofeye to show password content

//eye without splash to show password content
pass_icon_app.addEventListener("click", function (e) {
  e.preventDefault();
  //  console.log(this.previousElementSibling.getAttribute('type'))  ;

  this.classList.add('d-none');
  this.classList.remove('d-block')
  pass_icon.classList.add('d-block')
  pass_icon.classList.remove('d-none')

  if (pass_icon.previousElementSibling.getAttribute("type") === "password") {
    pass_icon.previousElementSibling.setAttribute("type", "text");
  } else {
    pass_icon.previousElementSibling.setAttribute("type", "password");
  }
});

//end of eye without splash
// eye to show comfirmation password content
com_pass_icon.addEventListener("click", function (e) {
  e.preventDefault();
  //  console.log(this.previousElementSibling.getAttribute('type'))  ;

      this.classList.add('d-none');
      this.classList.remove('d-block')
      com_pass_icon_app.classList.add('d-block')
      com_pass_icon_app.classList.remove('d-none')

  if (this.previousElementSibling.getAttribute("type") === "password") {
    this.previousElementSibling.setAttribute("type", "text");
  } else {
    this.previousElementSibling.setAttribute("type", "password");
  }
});
//end of eye to show comfirmation password content

//eye without splash to show comfirmation password content
com_pass_icon_app.addEventListener("click", function (e) {
  e.preventDefault();
  //  console.log(this.previousElementSibling.getAttribute('type'))  ;

  this.classList.add('d-none');
  this.classList.remove('d-block')
  com_pass_icon.classList.add('d-block')
  com_pass_icon.classList.remove('d-none')

  if (com_pass_icon.previousElementSibling.getAttribute("type") === "password") {
    com_pass_icon.previousElementSibling.setAttribute("type", "text");
  } else {
    com_pass_icon.previousElementSibling.setAttribute("type", "password");
  }
});

//end of eye without splash

// btn form
btn_submit.addEventListener("click", function(e) {
  e.preventDefault();

      if((Name_valid === "ok")
       && ( Email_valid  === "ok")
        && (password_is_ok === "ok")
        && password.value.length > 8 && username.value !=="" 
        && email.value !=="" && password.value !== ""
        && password.value.length == comfirm_password.value.length
        ){

let formdata =JSON.parse(localStorage.getItem('formdata')) || []

let emails_data ="";

for (let index = 0; index < formdata.length; index++) {
 
  emails_data +=  formdata[index].emails + "-";
    
  }


  console.log(emails_data.split('-'))
  let emails_arr = emails_data.split('-') || [];

if(emails_arr.includes(email.value)){

  email.value =""

  content_alert.classList.add('d-block');
  content_alert.classList.remove('d-none');
  text_alert.innerHTML='you must change email ,email you wrote is exist';

// alert('you must change email ,email you wrote is exist')

}else {

  formdata.push({
    names:username.value,
    emails:email.value,
    password:password.value
  })
          localStorage.setItem('formdata',JSON.stringify(formdata))
  
  
  
  
           username.value ="";
           email.value ="";
           password.value = "";
           comfirm_password.value ="";

           content_alert_con.classList.add('d-block');
           content_alert_con.classList.remove('d-none');
           text_alert_con.innerHTML="congratulation";
           setTimeout(()=>{
            window.location = 'index.html'
           },2000)
          //  alert('congratulation')


}



      }else if((Name_valid != "ok" || username.value =="")){
        username.value =""
        comfirm_password.value =""
        errorNameMessage.classList.remove("d-block");
        errorNameMessage.classList.add("d-none");

        content_alert.classList.add('d-block');
        content_alert.classList.remove('d-none');
        // alert(' some thing is wrong in this Name field please check')

        text_alert.innerHTML=' some thing is wrong in this Name field please check';

      }else if(Email_valid  != "ok" || email.value ==""){
        email.value =""
        comfirm_password.value =""
        errorEmailMessage.classList.remove("d-block");
        errorEmailMessage.classList.add("d-none");


        content_alert.classList.add('d-block');
        content_alert.classList.remove('d-none');


        text_alert.innerHTML=' some thing is wrong in this Email field please check';
        // alert(' some thing is wrong in this Email field please check')

      }else if(password.value.length < 8 || password.value.length == 0){
        password.value=""
        comfirm_password.value =""

        content_alert.classList.add('d-block');
        content_alert.classList.remove('d-none');


        text_alert.innerHTML=' some thing is wrong in this password check your length(>8)';
        // alert(' some thing is wrong in this password check your length(>8)')

      }
      else if(password.value.length != comfirm_password.value.length){
        comfirm_password.value =""

        content_alert.classList.add('d-block');
        content_alert.classList.remove('d-none');
        text_alert.innerHTML=' password not match';
        // alert(' password not match')

      }else{
        password.value=""
        comfirm_password.value =""
        // alert("chech your fields please")
        content_alert.classList.add('d-block');
        content_alert.classList.remove('d-none');
        text_alert.innerHTML="chech your fields please";
      }
});
