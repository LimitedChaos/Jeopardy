
const fallbackGame = {
  rounds: [
    {
      name: 'Round 1',
      categories: [
          {
              "title": "Who's Who in the Hollow",
              "clues": [
                  { "value": 100, "q": "Who plays Lorelai Gilmore?", "a": "Lauren Graham", "used": false },
                  { "value": 200, "q": "Who plays Rory Gilmore?", "a": "Alexis Bledel", "used": false },
                  { "value": 300, "q": "Who portrays Luke Danes, owner of the diner?", "a": "Scott Patterson", "used": false },
                  { "value": 400, "q": "Who plays Lorelai's mother Emily Gilmore?", "a": "Kelly Bishop", "used": false },
                  { "value": 500, "q": "Which actress plays Sookie St. James?", "a": "Melissa McCarthy", "used": false }
              ]
          },

          {
              "title": "Friday Night Dinners",
              "clues": [
                  { "value": 100, "q": "Emily and Richard live in this wealthy Connecticut town?", "a": "Hartford", "used": false },
                  { "value": 200, "q": "Lorelai agrees to weekly dinners in exchange for this", "a": "Tuition money for Chilton", "used": false },
                  { "value": 300, "q": "Emily goes through many of these household employees throughout the series", "a": "Maids", "used": false },
                  { "value": 400, "q": "Richard attended this Ivy League university, same as Rory", "a": "Yale", "used": false },
                  { "value": 500, "q": "This is Richard's profession before retirement", "a": "Insurance company executive", "used": false }
              ]
          },
          {
              "title": "Stars Hollow",
              "clues": [
                  { "value": 100, "q": "What structure in the town square hosts many community events?", "a": "The gazebo", "used": false },
                  { "value": 200, "q": "What is the name of the inn Lorelai and Sookie run?", "a": "Dragonfly Inn", "used": false },
                  { "value": 300, "q": "What is the name of the diner central to the town?", "a": "Luke's Diner", "used": false },
                  { "value": 400, "q": "What inn did Lorelai work at earlier in the series?", "a": "Independence Inn", "used": false },
                  { "value": 500, "q": "Who is the town's harpist?", "a": "Drella", "used": false }
              ]
          },
          {
              "title": "Relationships",
              "clues": [
                  { "value": 100, "q": "Who is Rory's first boyfriend?", "a": "Dean Forester", "used": false },
                  { "value": 200, "q": "Which character, played by Milo Ventimiglia, becomes Rory's rebellious love interest?", "a": "Jess Mariano", "used": false },
                  { "value": 300, "q": "Which character is Rory's Yale-era boyfriend from a prominent publishing family?", "a": "Logan Huntzberger", "used": false },
                  { "value": 400, "q": "Who is Rory's father?", "a": "Christopher Hayden", "used": false },
                  { "value": 500, "q": "Who is Lorelai's longtime love interest and the diner owner?", "a": "Luke Danes", "used": false }
              ]
          },
          {
              "title": "Town Folks",
              "clues": [
                  { "value": 100, "q": "Who is the officious town councilman who organizes many events?", "a": "Taylor Doose", "used": false },
                  { "value": 200, "q": "Who is the hotel's sarcastic concierge?", "a": "Michel Gerard", "used": false },
                  { "value": 300, "q": "Who runs the local dance studio and is a longtime friend of the Gilmores?", "a": "Miss Patty", "used": false },
                  { "value": 400, "q": "Who is the town's cheerful gossip and friend of Miss Patty?", "a": "Babette", "used": false },
                  { "value": 500, "q": "Which eccentric resident holds dozens of odd jobs throughout Stars Hollow?", "a": "Kirk Gleason", "used": false }
              ]
          }
      ]
    },
    {
      name: 'Round 2',
      categories: [
          {
              "title": "Behind the Scenes",
              "clues": [
                  {
                      "value": 200,
                      "q": "The year the show premiered?",
                      "a": "2000",
                      "used": false
                  },
                  {
                      "value": 400,
                      "q": "Who is the creator of the show?",
                      "a": "Amy Sherman-Palladino",
                      "used": false
                  },
                  {
                      "value": 600,
                      "q": "Where was the show filmed?",
                      "a": "Warner Bros. Studios, LA",
                      "used": false
                  },
                  {
                      "value": 800,
                      "q": "How many season of gilmore girls on WB",
                      "a": "7",
                      "used": false
                  },
                  {
                      "value": 1000,
                      "q": "What year did Gilmore Girls: A Year in the Life? ",
                      "a": "2016",
                      "used": false
                  }
              ]
          },
        { title: 'School Days', clues: [
            { value: 400, q:'What is Rory’s prep school', a:'Chilton', used:false},
          {value:800, q:'Who was Rorys Yale roommate from Chilton', a:'Paris', used:false},
          {value:1200, q:'Who was the headmaster at Chilton?', a:'Hanlin Charleston', used:false},
          { value: 1600, q:'What was the highschool paper in gilmore girls?', a:'The Franklin', used:false},
            { value: 2000, q: 'What was the yale paper in gilmore girls?', a: 'The Yale Daily News', used:false},
        ]},
        { title: 'Misc', clues: [
          {value:400, q:'What was Emilys Social Club Called?', a:'The DAR (Daughters of the American Revolution', used:false},
          {value:800, q:'Lorelais Dog Name', a:'Paul Anka', used:false},
          {value:1200, q:'What did Kirk win in Season 3 Finale? ', a:'Dance Marthon', used:false},
          {value:1600, q:'Who played Gil and was the lead singer of Skid Row?', a:'Sebastian Bach', used:false},
            { value: 2000, q:'who wrote the gilmore girls theme song?', a:'Carole King', used:false},
        ]},
        { title: 'Gilmore Family', clues: [
            { value: 400, q: 'What is the name of Rory’s grandmother?', a:'Trix Gilmore', used:false},
          {value:800, q:'What age did Lorelai leave home because she was pregnant?', a:'16', used:false},
            { value: 1200, q: 'What does Rory want to do professionally?', a:'Journalist', used:false},
          {value:1600, q:'What was Richards Alma Mater?', a:'Yale', used:false},
          {value:2000, q:'What was Richards cause of death in the revival?', a:'Heart Attack', used:false},
        ]},
        { title: 'Random', clues: [
          {value:400, q:'Who is Lorelais fiance in season 5', a:'Luke Danes', used:false},
            { value: 800, q: 'What magazine does Rory intern for in Season 4?', a:'The Stamford Eagle Gazette', used:false},
            { value: 1200, q: 'What is the name of the secret society Rory joins at Yale? ', a:'Life and Death Brigade', used:false},
          {value:1600, q:'Who is Rorys best friend?', a:'Lane Kim', used:false},
          {value:2000, q:'What is the name of the band Lane Kim is the drummer for?', a:'Hep Alien', used:false},
        ]}
      ]
    }
  ]
};

let game = null;
let finalJeopardy = null;

// Try to fetch questions.json; fall back to embedded `fallbackGame` when unavailable.
fetch('https://limitedchaos.github.io/Questions/Gilmore-Questions-fdas')
  .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to load')))
  .then(data => {
    game = data;
    // move finalJeopardy into a consistent property if present
    if(data.finalJeopardy){ window.finalJeopardy = data.finalJeopardy; }
    startGame();
  })
  .catch(err => {
    console.warn('Could not load questions.json, using fallback data.', err);
    game = fallbackGame;
    window.finalJeopardy = fallbackGame.finalJeopardy || { category: 'Final', clue: 'What does Rory reveal in the final episode in the Gilmore Girls: A year in the Life', answer: 'She is Pregnant' };
    startGame();
  });

function startGame(){
  // set finalJeopardy from loaded data (or fallback)
    finalJeopardy = game.finalJeopardy || { category: 'Final', clue: 'What does Rory reveal in the final episode in the Gilmore Girls: A year in the Life', answer: 'She is Pregnant' };
  // now render the board
  renderBoard();
}

let currentRound = 0; // 0 or 1

const boardEl = document.getElementById('board');
const modal = document.getElementById('modal');
const modalCategory = document.getElementById('modalCategory');
const modalValue = document.getElementById('modalValue');
const modalQuestion = document.getElementById('modalQuestion');
const modalAnswer = document.getElementById('modalAnswer');
const showAnswerBtn = document.getElementById('showAnswer');
const closeModalBtn = document.getElementById('closeModal');
const round1Btn = document.getElementById('round1');
const round2Btn = document.getElementById('round2');
const resetBtn = document.getElementById('reset');
// ... no wager inputs (Daily Double removed)
const finalBtn = document.getElementById('finalBtn');

function renderBoard(){
  boardEl.innerHTML = '';
  const round = game.rounds[currentRound];
  // category headers
  const grid = document.createElement('div');
  grid.className = 'grid';
  round.categories.forEach(cat => {
    const h = document.createElement('div');
    h.className = 'category';
    h.textContent = cat.title;
    grid.appendChild(h);
  });
  boardEl.appendChild(grid);

  // 5 rows of clues
  for(let row=0; row<5; row++){
    const rowEl = document.createElement('div');
    rowEl.className = 'row';
    round.categories.forEach((cat,catIndex)=>{
      const clue = cat.clues[row];
      const cell = document.createElement('div');
      cell.className = 'clue';
  if(clue.used){ cell.classList.add('used','disabled'); }
      cell.dataset.cat = catIndex;
      cell.dataset.row = row;
  cell.textContent = clue.used ? '' : `$${clue.value}`;
      cell.addEventListener('click', onClueClick);
      rowEl.appendChild(cell);
    });
    boardEl.appendChild(rowEl);
  }
}

function onClueClick(e){
  const el = e.currentTarget;
  const catIndex = Number(el.dataset.cat);
  const row = Number(el.dataset.row);
  const clue = game.rounds[currentRound].categories[catIndex].clues[row];
  if(clue.used) return;
  // mark used and update UI immediately
  clue.used = true;
  el.classList.add('used','disabled');
  el.textContent = '';

  // show modal
  modalCategory.textContent = game.rounds[currentRound].categories[catIndex].title;
  modalValue.textContent = `$${clue.value}`;
  modalQuestion.textContent = clue.q;
  modalAnswer.textContent = clue.a;
  modalAnswer.classList.add('hidden');
  // reveal always allowed for normal clues
  showAnswerBtn.disabled = false;
  openModal();
}

function openModal(){
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}

showAnswerBtn.addEventListener('click', ()=>{
  modalAnswer.classList.remove('hidden');
  showAnswerBtn.disabled = true;
});

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); });

round1Btn.addEventListener('click', ()=>{ currentRound=0; round1Btn.classList.add('active'); round2Btn.classList.remove('active'); renderBoard(); });
round2Btn.addEventListener('click', ()=>{ currentRound=1; round2Btn.classList.add('active'); round1Btn.classList.remove('active'); renderBoard(); });

resetBtn.addEventListener('click', ()=>{
  game.rounds.forEach(r=>r.categories.forEach(c=>c.clues.forEach(cl=>{cl.used=false;})));
  renderBoard();
});

// Final Jeopardy flow
finalBtn.addEventListener('click', ()=>{
  // open Final Jeopardy modal (no wager, simplified)
  modalCategory.textContent = `Final Jeopardy — ${finalJeopardy.category}`;
  modalValue.textContent = '';
  modalQuestion.textContent = finalJeopardy.clue;
  modalAnswer.textContent = finalJeopardy.answer;
  modalAnswer.classList.add('hidden');
  showAnswerBtn.disabled = false;
  openModal();
});

// Wager flow removed; starting wager handler removed as well
