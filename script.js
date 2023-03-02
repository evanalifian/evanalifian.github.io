// TOGGLER DARK MODE
const btnTheme = document.getElementById('btn-theme');
const imageLabel = document.querySelector('.profile .profile-label img');
const imgList = document.querySelectorAll('main .projects-section li');
const header = document.getElementsByTagName('header')[0];
const titleName = document.querySelector('.profile .profile-label .profile-label-title h3');
btnTheme.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  hamburger.classList.toggle('dark-mode');
  hamburger.classList.toggle('dark');
  btnTheme.classList.toggle('active');
  imageLabel.classList.toggle('active');
  titleName.classList.toggle('active');

  for(let i = 0; i < imgList.length; i++) {
    imgList[i].classList.toggle('active');
  }
});


// TOGGLER HAMBURGER MENU
const hamburger = document.getElementById('btn-toggler');
const navAction = document.querySelector('nav .nav-action');
hamburger.addEventListener('click', function() {
  navAction.classList.toggle('active');
});


// TOGGLER TABS
const btnProjects = document.getElementById('btn-projects');
const btnAbout = document.getElementById('btn-about');
const btnSocials = document.getElementById('btn-socials');
const mainTitle = document.querySelector('main .main-title');
const projectsSection = document.querySelector('main .projects-section');
const aboutSection = document.querySelector('main .about-section');
const socialsSection = document.querySelector('main .socials-section');
const socialsLinks = document.getElementsByClassName('social-link')
btnProjects.addEventListener('click', function() {
  mainTitle.innerHTML = 'Projects';
  btnProjects.classList.add('active');
  btnAbout.classList.remove('active');
  btnSocials.classList.remove('active');
  projectsSection.classList.add('active');
  aboutSection.classList.remove('active');
  socialsSection.classList.remove('active');
});
btnAbout.addEventListener('click', function() {
  mainTitle.innerHTML = 'About';
  btnAbout.classList.add('active');
  btnProjects.classList.remove('active');
  btnSocials.classList.remove('active');
  aboutSection.classList.add('active');
  projectsSection.classList.remove('active');
  socialsSection.classList.remove('active');
});
btnSocials.addEventListener('click', function() {
  mainTitle.innerHTML = 'Socials';
  btnSocials.classList.add('active');
  btnAbout.classList.remove('active');
  btnProjects.classList.remove('active');
  socialsSection.classList.add('active');
  projectsSection.classList.remove('active');
  aboutSection.classList.remove('active');

  for(let i = 0; i < socialsLinks.length; i++) {
    socialsLinks[i].classList.toggle('dark-mode');
  }
});