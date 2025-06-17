document.querySelector(".scroll-to-top-btn")?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  }); 
});


   document.querySelector('.scroll-to-top-btn').addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
   });
