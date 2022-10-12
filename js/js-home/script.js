// to prevent any one to enter site directly
let site_access = localStorage.getItem("site_ok");

if(site_access && site_access == "site_ok"){

  let switcher_btn =document.querySelector('.color-switcher .switcher-btn');
  let color_switcher =document.querySelector('.color-switcher');
  let logout =document.getElementById('logout')
  // console.log(color_switcher);
  switcher_btn.onclick =()=>{
    color_switcher.classList.toggle('active');
  }
  logout.addEventListener('click',function(e){
  
    e.preventDefault();
    localStorage.removeItem('logindata');
    localStorage.removeItem('site_ok');

    setTimeout(() => {
        window.location='index.html';
    }, 1000);
    })
    

}else{


  window.location='/';
 
}

