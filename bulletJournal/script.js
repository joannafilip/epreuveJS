import './styles.scss';

const body = document.querySelector('body');
const jours = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const hobbies = [{ nom: 'natation', semaine: [true, false, true, false, true, false, true] },
  { nom: 'piano', semaine: [true, false, true, false, false, false, true] },
  { nom: 'yoga', semaine: [true, true, true, false, true, false, true] }];

const main = document.getElementById('main');
const tbl = document.createElement('table');
main.appendChild(tbl);

function practice() {
  const pratiques = document.querySelectorAll('.pratiques');
  for (const pratique of pratiques) {
    pratique.addEventListener('click', (e) => {
      if (e.currentTarget.innerHTML) {
        e.currentTarget.innerHTML = '';
      } else {
        e.currentTarget.innerHTML = '•';
      }
    });
  }
}

function ajouterJour(arrayJours) {
  const tr = document.createElement('tr');
  for (let i = 0; i < arrayJours.length; i++) {
    const jour = arrayJours[i];
    const td = document.createElement('td');
    const text = document.createTextNode(jour);
    td.appendChild(text);
    tr.appendChild(td);
  }
  tbl.appendChild(tr);
}
ajouterJour(jours);

function ajouterHobby(arrayHobby) {
  for (const hob of arrayHobby) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const nom = document.createTextNode(hob.nom);
    td.appendChild(nom);
    tr.appendChild(td);
    for (let sem of hob.semaine) {
      const td1 = document.createElement('td');
      td1.className = 'pratiques';
      if (sem === true) {
        sem = '•';
      } else {
        sem = ' ';
      }
      const pratique = document.createTextNode(sem);
      td1.appendChild(pratique);
      tr.appendChild(td1);
    }tbl.appendChild(tr);
  }
}
ajouterHobby(hobbies);

practice();
// add input
const input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);

body.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const obj = {};
    if (input.value !== '') {
      const tr = document.createElement('tr');
      const td0 = document.createElement('td');
      obj.nom = input.value;
      const nomHobby = document.createTextNode(obj.nom);
      td0.appendChild(nomHobby);
      tr.appendChild(td0);
      obj.semaine = [];
      for (let i = 0; i < 7; i++) {
        const td = document.createElement('td');
        td.className = 'pratiques';
        obj.semaine[i] = false;
        if (obj.semaine[i] === true) {
          obj.semaine[i] = '•';
        } else {
          obj.semaine[i] = ' ';
        }
        const newSemaine = document.createTextNode(obj.semaine[i]);
        td.appendChild(newSemaine);
        tr.appendChild(td);
        tbl.appendChild(tr);
      }
      practice();
      hobbies.push(obj);
      input.value = '';
    }
  }
});

// add a btn
const btn = document.createElement('button');
btn.setAttribute('type', 'submit');
btn.innerHTML = 'ajouter';
body.appendChild(btn);
