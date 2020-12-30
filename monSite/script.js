import './style.scss';
import gsap from 'gsap';
import { about } from './src/views/about';
import { skills } from './src/views/skills';
import { projects } from './src/views/projects';
import { contacts } from './src/views/contacts';


const body = document.querySelector('body');
const home = document.querySelector('.accueil');
const menuBurger = document.getElementById('burger');
const contMenu = document.querySelector('.cont-menu');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const menuB = document.querySelector('.menu-burger'); // deux barres;
const popup = document.querySelector('.popup');

// Text title animation
// function titleAnimation () {
const mainTitle = document.querySelector('h1');
const strText = mainTitle.textContent;
const splitTitle = strText.split('');
mainTitle.textContent = '';
for (let i = 0; i < splitTitle.length; i++) {
  mainTitle.innerHTML += `<span>${splitTitle[i]}</span>`;
  if (splitTitle[i] === ',') {
    mainTitle.innerHTML += '<br/>';
  }
}
// home.addEventListener('mouseover', function (e) {
//  if (e.target.matches('span')) {

//     gsap.TweenMax.to(e.target, 1,);
//     x : Math.floor(Math.random() * 100 - 50);
//     y : Math.floor(Math.random() * 100 - 50);
//     z : Math.floor(Math.random() * 100 - 50);
//     rotation : Math.floor(Math.random() * 100 - 50);
//   }
// });
// }
// titleAnimation();

// Accueil/Menu/Animaton
let toggle = 0;
function toggleMenu() {
  if (toggle === 0) {
    toggle++;
    gsap.to(b1, {
      duration: 1,
      top: 2.5,
      transform: 'rotate(225deg)',
      background: 'white',
    });
    gsap.to(b2, {
      duration: 1,
      top: -2.5,
      transform: 'rotate(-225deg)',
      background: 'white',
    });
    gsap.to(menuB, { duration: 0.1, background: 'transparent' });
    // pour amener l'element quelque part
    gsap.to(contMenu, { duration: 1, left: 0, ease: 'power1.out' });
  } else {
    toggle--;
    gsap.to(b1, {
      duration: 1.4,
      top: -5,
      transform: 'rotate(0)',
      background: 'rgba(0, 0, 0, 0.801)',
    });
    gsap.to(b2, {
      duration: 1.4,
      top: 5,
      transform: 'rotate(0)',
      background: 'rgba(0, 0, 0, 0.801)',
    });
    gsap.to(menuB, { duration: 1, background: 'transparent' });
    gsap.to(contMenu, { duration: 1.6, left: '-100%', ease: 'power1.in' });
  }
}
menuBurger.addEventListener('click', toggleMenu);

// Menu
document.body.addEventListener('click', function (e) {
  if (e.target.matches('.about span')) {
    toggleMenu();
    gsap.from(body, { duration: 3, opacity: 0, ease: 'slow(0.5, 0.8, true)' });
    body.innerHTML = about;
  } else if (e.target.matches('.skills span')) {
    gsap.from(body, { duration: 3, opacity: 0, ease: 'slow(0.5, 0.8, true)' });
    toggleMenu();
    body.innerHTML = skills;
  } else if (e.target.matches('.projects span')) {
    gsap.from(body, { duration: 3, opacity: 0, ease: 'slow(0.5, 0.8, true)' });
    toggleMenu();
    body.innerHTML = projects;
  } else if (e.target.matches('.contacts span')) {
    gsap.from(body, { duration: 3, opacity: 0, ease: 'slow(0.5, 0.8, true)' });
    toggleMenu();
    body.innerHTML = contacts;
  }
});

// Sous menu
function sousMenu (){
document.body.addEventListener('click', function (e) {
  if (e.target.matches('.home-a')) {
    body.innerHTML = '';
    body.appendChild(home);
  } else if (e.target.matches('.about-a')) {
    body.innerHTML = about;
  } else if (e.target.matches('.skills-a')) {
    body.innerHTML = skills;
  } else if (e.target.matches('.projects-a')) {
    body.innerHTML = projects;
  } else if (e.target.matches('.contacts-a')) {
    body.innerHTML = contacts;
  } else if (e.target.matches('.fa-times')) {
    body.innerHTML = '';
    body.appendChild(home);
  }
});}

sousMenu();


//Menu qui disparesse à 640px et qui ne marche pas correctement 
//Mon idée était de créer un menu qui se cache quand la page est à moins de 640px et les fa-grip-lines aparessent et puis on clique sur elles et le menu se ouvre de nouveau mais plus petit.
//Je n'arrive pas à comprendre prq on ne peut pas retrouver le feuille de style. 
const menuMobile = document.querySelector('.cont-menu-a'); // ce menu se trouve dans projects, skills et about
document.body.addEventListener('click', function (e) {
  if (e.target.matches('.fa-grip-lines')) {
    console.log('toto'); //jsq ici ca marche
    if (menuMobile.style.display === 'none') { // la page n'existe plus ?
      body.innerHTML+= menuMobile;
      // menuMobile.style.display = 'block';
      // sousMenu();
    } 
    else
    {
      //menuMobile.style.display = 'none';
    }
  }
});


//popup
// function popupp () {
// document.body.addEventListener('click', function (e) {
//   if (e.target.matches('#cv')) {
//     console.log('toto2');
   
//     popup.innerHTML += `<a href="#"><div class="affichecvfr">cvfr</div></a><a href="#"><div class="affichecvang">cvang</div></a>`}
  
// });
// }


