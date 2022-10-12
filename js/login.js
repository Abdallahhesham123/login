let email= document.getElementById('email')
let password = document.getElementById('password')
let btn_login = document.getElementById('submit')
let pass_icon = document.getElementById("pass_icon");
let pass_text = document.querySelector("#pass_con_indicator .text");
let errorEmailMessage = document.getElementById("error-email");
let pass_icon_app = document.getElementById("pass_icon_app");
//for success message
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

//end for success message

let formdata =JSON.parse(localStorage.getItem('formdata')) || []

let emails_data =""
let password_data =""


for (let index = 0; index < formdata.length; index++) {
 
  emails_data +=  formdata[index].emails + "-";
  password_data +=  formdata[index].password +"-";
    
  }

  // console.log(password_data.split("-"))
  // console.log( emails_data.split("-"))
 let  password_array = password_data.split("-") || [];
 let  emails_array = emails_data.split("-") || [];


//for eye password
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


 // for handling password email
  email.addEventListener("focus", function (e) {
    e.preventDefault();
    email.placeholder = "";
    email.style.backgroundColor = "transparent";
    if(email.value != ""){
      errorEmailMessage.classList.remove("d-block");
      errorEmailMessage.classList.add("d-none");
    }
  
  });
  
 
  email.addEventListener("blur", function (e) {
    e.preventDefault();
    if (email.value == "") {
      email.placeholder = "ex(Abdallah_hstar2009@yahoo.com)  ....";
      errorEmailMessage.classList.remove("d-block");
      errorEmailMessage.classList.add("d-none");
    }
  
 if(emails_array.includes(email.value.trim())){

  errorEmailMessage.classList.remove('d-block');
  errorEmailMessage.classList.add('d-none');
  email.classList.add("is-valid");
  email.classList.remove("is-invalid");
 }
  });
  
  password.addEventListener("focus", function (e) {
    e.preventDefault();
    password.placeholder = "";
    password.style.backgroundColor = "transparent";

  });

  // end for handling password email

  // login button
btn_login.addEventListener("click", function (e) {
  e.preventDefault();

  if (email.value === "" ) {
    errorEmailMessage.classList.add('d-block');
    errorEmailMessage.classList.remove('d-none');
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    errorEmailMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    "></i>`;
    errorEmailMessage.innerHTML += "enter your email please";



  }else{
    errorEmailMessage.classList.remove('d-block');
    errorEmailMessage.classList.add('d-none');
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    if(password.value === ""){
      pass_text.classList.add('d-block');
      pass_text.classList.remove('d-none');
      pass_text.innerHTML = "enter your password please";

    }
  }

  
  
  if(emails_array.includes(email.value.trim())){

  if( password_array.includes(password.value)){

    let logindata =JSON.parse(localStorage.getItem('logindata')) || []
    logindata.push({
      
      email:email.value,
      password:password.value
    })

    localStorage.setItem('logindata',JSON.stringify(logindata))


    localStorage.setItem('site_ok','site_ok')
    setTimeout(() => {
        window.location = "home.html";
      }, 1500);
    password.value ="";
    email.value ="";
      // alert("congratulation");

      content_alert_con.classList.add('d-block');
      content_alert_con.classList.remove('d-none');
      text_alert_con.innerHTML="congratulation";
  }else{
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    // alert(" password is wrong");
    pass_text.classList.add('d-block');
    pass_text.classList.remove('d-none');
    pass_text.innerHTML = "check your password ,password is wrong";

  }

  }else{
    // alert("username is wrong");
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    errorEmailMessage.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="
    this.parentElement.previousElementSibling.classList.remove('is-invalid');
    this.parentElement.classList.add('d-none');
    this.parentElement.classList.remove('d-block');
    "></i>`;
    errorEmailMessage.classList.add('d-block');
    errorEmailMessage.classList.remove('d-none');
    errorEmailMessage.innerHTML += " your email is wrong or you arent register";

  }

}); //for addeventlistener
