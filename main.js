var typed= new Typed(".text",{
    strings:["Web-Designer" , "Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyB32ZOEd8Pv59xlGSWQxfcSk7udbo-1eyD_9-2auXcMC2kBzelaQcn1lVai2wyktUeSA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('Form submitted');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Response received:', response);
        msg.innerHTML="Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
