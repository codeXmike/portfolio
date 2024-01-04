function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
$(document).ready(function(){
    
    $nav = $('.navbar')
    $toggleCollapse = $('.toggle-collapse')

    $toggleCollapse.click(function(){
        
        $nav.toggleClass('show');
        
    })
})

const sender = document.getElementById("email").value;
const message = document.getElementById("message").value;
const name = document.getElementById("name").value;
const subject = document.getElementById("subject").value;
const submit = document.getElementById("submit");
const error1 = document.getElementById("error1");
submit.disabled = true;
error1.style.display = "none";
var mailFormat = /\S+@\S+\.\S+/;
function validate() {
    let email = document.getElementById("email").value;
    let submit = document.getElementById("submit");
    var mailFormat = /\S+@\S+\.com/;
    for (i = 0; i < 200; i++){
        
        if (email.match(mailFormat)) {
            submit.disabled = false;
            error1.style.display = "none";
       } else {
           submit.disabled = true;
           error1.style.display = "block"
       }
        
    }
    
}


// function sendEmail() {
//     Email.send({
//         Host : "smtp.mailslurp.com",
//         Username : "ecAfFyK2TpPzSfy0AgHz8z5mbm95txJi",
//         Password : "PUcw51PeEgtsf2s1hZH7zQU5lnYLg70H",
//         To : 'simplymike07@gmail.com',
//         From : sender,
//         Subject : subject,
//         Body : message,
//     }).then(message => alert(message)
//     );
//     }
