// TOGGLER HAMBURGER MENU
const hamburger = document.getElementById('btn-toggler');
const navAction = document.querySelector('nav .nav-action');

hamburger.addEventListener('click', function() {
  navAction.classList.toggle('active');
});


// TOGGLER DARK MODE
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  hamburger.classList.toggle('dark-mode');
  hamburger.classList.toggle('dark');
  btnTheme.classList.toggle('dark-mode');
});