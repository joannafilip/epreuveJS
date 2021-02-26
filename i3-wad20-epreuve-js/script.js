import './styles.scss';
import { vaccins } from './src/data';

const app = document.querySelector('#app');
const body = document.querySelector('body');
function render() {
  const titre = '<h1>Catalogue des vaccins</h1>';
  const header = `
        <header class="card-header">
            <a href="#" id="prix"class="btn btn-primary">Classer par prix</a>
            <a href="#" id="nonApp"class="btn btn-primary">Cacher les vaccins non approuvés</a>
        </header>`;
  let main = '<main class="card-columns">';
  for (let i = 0; i < vaccins.length; i++) {
    main += `
            <div id ="card" class="card" style="width: 15rem; height: 35rem; margin-left: 23%">
                <img src="${vaccins[i].image}.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4>${vaccins[i].nom}</h4>
                    <h5>invanteurs : ${vaccins[i].inventeurs}</h5>
                    <h6>Lieu de production : ${vaccins[i].lieux_de_production}</h6>
                    <h6>Technologie :${vaccins[i].technologie}</h6>
                    <h6>Quantité : ${vaccins[i].quantité}</h6>
                    <h6>Prix : ${vaccins[i].prix_unitaire}$</h6>
                    <h6>Approuvé : ${vaccins[i].approuvé}</h6>
                    <input type="number"name="Quantité"id="${[i]}" min="10"class="quantité"placeholder="Quantité à comander">
                    <button id="réserver">Réserver</button>
                </div>
                </div>
             `;
  }
  const footer = `
        <footer id="footer" class="card-footer">
          <a href="#" id="commande" class="btn btn-primary">Passer la commande</a>
          <a href="#" id="commandeRes"class="btn btn-primary">Annuler la réservation</a>
        </footer>`;

  main += '</main>';
  app.innerHTML = header + titre + main + footer;

  const btnRes = document.querySelectorAll('#réserver');
  const input = document.querySelectorAll('.quantité');
  const footerRes = document.querySelector('#footer');
  const btnCommand = document.querySelector('#commande');

  for (let i = 0; i < vaccins.length; i++) {
    btnRes[i].addEventListener('click', (e) => {
      e.preventDefault();
      if (input[i].value > 0) {
        footerRes.innerHTML += `<br/><h5>${vaccins[i].nom}<br/>${input[i].value}</h5>`;
        input[i].style.display = 'none';
        btnRes[i].disabled = true;
        btnCommand.disabled = false;
      } else {
        alert('Quantité ne peut pas etre 0');
        btnCommand.disabled = true;
      }
    });
  }

  const card = document.querySelectorAll('#card');

  body.addEventListener('click', (e) => {
    if (e.target.matches('#nonApp')) {
      e.preventDefault();
      for (let i = 0; i < vaccins.length; i++) {
        if (vaccins[i].approuvé === false && card[i].style.display === 'none') {
          card[i].style.display = 'block';
        } else if (vaccins[i].approuvé === false) {
          card[i].style.display = 'none';
        }
      }
    } else if (e.target.matches('#commande')) {
      btnCommand.disabled = false;
      body.innerHTML = '<h5>La commande a bien été enregistrée</h5>';
    } else if (e.target.matches('#commandeRes')) {
      document.location.reload();
    }
  });

  // classer par prix
  body.addEventListener('click', (e) => {
    if (e.target.matches('#prix')) {
      vaccins.sort((x, y) => {
        const a = x.prix_unitaire;
        const b = y.prix_unitaire;
        return a - b;
      }); render();
    }
  });
}
render();
