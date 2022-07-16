// template_pixaain
// service_db56jef
// erLPp9rOPGHgU8j9l
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20

function moveBackground(event){
   const shapes = document.querySelectorAll(".shape")
   const x = event.clientX * scaleFactor;
   const y = event.clientY * scaleFactor;

   for(let i = 0; i < shapes.length; i++){
      const isOdd = i % 2 !== 0;
      if (isOdd){
         shapes[i].style.transform = `translate(${x}px,${y}px)`
      } else {
         shapes[i].style.transform = `translate(${y}px,${x}px)`
      }
   }
}

function toggleContrast(){
   contrastToggle = !contrastToggle
   if (contrastToggle){
      document.body.classList += " dark-theme"
   } else {
      document.body.classList.remove("dark-theme")
   }
}

function contact(event){
   // email sender
   event.preventDefault();
   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
   loading.classList += ' modal__overlay--visible';
   
   emailjs
      .sendForm(
         'service_db56jef',
         'template_pixaain',
         event.target,
         'erLPp9rOPGHgU8j9l'
      ).then(() => {
         loading.classList.remove('modal__overlay--visible');
         success.classList += ' modal__overlay--visible';
      }).catch(() => {
         loading.classList.remove('modal__overlay--visible');
         alert(
            "The email service is temporarily unavailable. Please contact me directly at mattchan1999@gmail.com"
         );
      });   
}

function toggleModal(){
   if (isModalOpen){
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
   }
   isModalOpen = true;
   // toggle modal
   document.body.classList += " modal--open";
}