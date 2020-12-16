import './styles.scss';
// import kitten from './static/images/kitten.jpg';
import { movies } from './src/data';

const app = document.querySelector('#app');
const body = document.querySelector('body');

function render() {
  const titre = '<h1>Les films</h1>';
  const recentFilms = '<button id="recent">Recent films only</button>';
  let posters = '<div class="box-films">';
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].img === true) {
      posters += `
        <div class="films">
          <img src="posters/${movies[i].imdb}.jpg" class="img"/>
          <h5>${movies[i].title}</h5>
        </div>`;
    } else {
      posters += `
          <div class="films">
            <div class="posters">
            <h5>${movies[i].title}</h5>
            </div>
         
        </div>`;
    }
    posters += `
      <div class="card-body">
        <div class="popup">
          <div class="cont-pop"></div>
          <button id='btn'>close</button>
        </div>
      </div>
`;
  }
  posters += '</div>';
  app.innerHTML = titre + recentFilms + posters;
}
render();

function playPopup() {
  const images = document.querySelectorAll('.img, div.posters');
  const pop = document.querySelectorAll('.popup');

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
      if (pop[i].style.display === 'none') {
        pop[i].innerHTML = '<button id="btn">close</button>';
        pop[i].style.display = 'block';
        pop[i].innerHTML += `
          <div class="pop-titre">titre : ${movies[i].title}</div><br/>
          <div class="pop-titre">genres : ${movies[i].genres}</div><br/>
          <div class="pop-year">year : ${movies[i].year}</div><br/>
          <div class="pop-year">note : ${movies[i].note}</div><br/>
          <div class="pop-year">plot : <br/> ${movies[i].plot}</div><br/>
          `;
        const btn = document.querySelectorAll('#btn');
        btn[i].addEventListener('click', () => {
          pop[i].style.display = 'none';
        });
      } else {
        pop[i].style.display = 'none';
      }
    });
  }
}
playPopup();
function recentFilmsOnly() {
  let recentFilms = '<div class="recent-films">';
  for (let i = 0; i < movies.length; i++) {
    body.addEventListener('click', (e) => {
      if (e.target.matches('#recent')) {
        if (movies[i].year > 2000) {
          if (movies[i].img === true) {
            recentFilms += `
            <div class="films">
              <img src="posters/${movies[i].imdb}.jpg" class="img"/>
              <h5>${movies[i].title}</h5>
            </div>`;
          } else {
            recentFilms += `
              <div class="films">
                <div class="posters">
                <h5>${movies[i].title}</h5>
                </div>
            </div>`;
          }
          recentFilms += `
        <div class="card-body">
          <div class="popup">
            <div class="cont-pop"></div>
            <button id='btn'>close</button>
          </div>
        </div>
        </div>
        </div>
      </div>
  </div>
`;
        }
        const back = '<button id="back">back</button>';
        recentFilms += '</div>';
        const titreRecentFilms = '<h2>Recent films</h2>';
        app.innerHTML = titreRecentFilms + back + recentFilms;
        playPopup();

        const backBtn = document.getElementById('back');
        backBtn.addEventListener('click', () => {
          render();
        });
      }
    });
  }
}
recentFilmsOnly();
// il y a un poblème, si on returne sur la page avec tous les films, le popup ne marche plus.
