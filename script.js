const PageTopBtn = document.getElementById('js_scroll_top');
PageTopBtn.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});