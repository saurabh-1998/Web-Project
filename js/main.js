// Typed Js 
var typed = new Typed('.element', {
    strings: ['Provide best information about mca college','Your Dream College Waiting for You'],
    typeSpeed: 20,
    backSpeed:20,
    loop:true,
  });

  // Multilevel Navbar 
  $(function () {
    $('#main_navbar').bootnavbar();
})

// Exam Notification 
  function openNav() {
    document.getElementById("mySidebar").style.width = "50%";
    document.getElementById('clkbtn').style.display="none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById('clkbtn').style.display="block";
  }

  // Login Form 
  function closePopUp(){
    document.getElementById('login').style.display="none";
  }

  function openPopUp(){
    document.getElementById('login').style.display="block";
  }