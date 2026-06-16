// Historical figures database
const figuresData = {
  socrates: {
    id: 'socrates',
    name: 'Socrates',
    lifespan: 'Athens, 470 - 399 BC',
    era: 'Classical Antiquity',
    discipline: 'Philosophy',
    score: 98.4,
    dialogues: '14.2k',
    role: 'Philosopher',
    maxim: 'The unexamined life is not worth living.',
    bio: 'Socrates was a classical Greek philosopher credited as one of the founders of Western philosophy. He wrote no texts, preferring to engage in public dialectics in Athens.',
    achievements: 'Pioneered the Socratic Method of inquiry; established ethics as a branch of philosophy; influenced Plato and Aristotle.',
    quotes: [
      'The unexamined life is not worth living.',
      'I know that I am intelligent, because I know that I know nothing.',
      'To find yourself, think for yourself.'
    ],
    traits: ['Dialectical', 'Reflective', 'Ironist'],
    avatar: '/src/assets/socrates.png'
  },
  hypatia: {
    id: 'hypatia',
    name: 'Hypatia',
    lifespan: 'Alexandria, 350 - 415 AD',
    era: 'Classical Antiquity',
    discipline: 'Mathematics',
    score: 92.1,
    dialogues: '8.4k',
    role: 'Mathematician',
    maxim: 'Reserve your right to think, for even to think wrongly is better than not to think at all.',
    bio: 'Hypatia of Alexandria was a Neoplatonist philosopher, astronomer, and mathematician. She was the intellectual leader of the Alexandrian school.',
    achievements: 'Created commentaries on Diophantus\' Arithmetica and Apollonius\' Conics; constructed early astrolabes; championed rational inquiry.',
    quotes: [
      'Reserve your right to think, for even to think wrongly is better than not to think at all.',
      'To govern by truth-telling is rather a rare thing.',
      'Truth does not change because it is, or is not, believed.'
    ],
    traits: ['Analytical', 'Skeptical', 'Astronomical'],
    avatar: '/src/assets/hypatia.png'
  },
  davinci: {
    id: 'davinci',
    name: 'Leonardo da Vinci',
    lifespan: 'Florence, 1452 - 1519',
    era: 'The Renaissance',
    discipline: 'Engineering',
    score: 99.8,
    dialogues: '22.9k',
    role: 'Polymath',
    maxim: 'Simplicity is the ultimate sophistication.',
    bio: 'Leonardo da Vinci was the quintessential Renaissance Man. He was a painter, sculptor, architect, engineer, scientist, and designer.',
    achievements: 'Created the Mona Lisa; conceptualized flying machines, helicopters, and submarines; pioneered scientific anatomical drawings.',
    quotes: [
      'Simplicity is the ultimate sophistication.',
      'Learning never exhausts the mind.',
      'Art is never finished, only abandoned.'
    ],
    traits: ['Observant', 'Creative', 'Polymathic'],
    avatar: '/src/assets/davinci.png'
  },
  einstein: {
    id: 'einstein',
    name: 'Albert Einstein',
    lifespan: 'Princeton, 1879 - 1955',
    era: 'Modern Rationalism',
    discipline: 'Physics',
    score: 99.4,
    dialogues: '31.2k',
    role: 'Theoretical Physicist',
    maxim: 'Imagination is more important than knowledge.',
    bio: 'Albert Einstein developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science.',
    achievements: 'Formulated Special and General Relativity; discovered the photoelectric effect (Nobel Prize 1921); pioneered mass-energy equivalence E=mc².',
    quotes: [
      'Imagination is more important than knowledge.',
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      'A person who never made a mistake never tried anything new.'
    ],
    traits: ['Theoretical', 'Pacifist', 'Intuitive'],
    avatar: '/src/assets/einstein.png'
  },
  tesla: {
    id: 'tesla',
    name: 'Nikola Tesla',
    lifespan: 'New York, 1856 - 1943',
    era: 'Modern Rationalism',
    discipline: 'Engineering',
    score: 97.9,
    dialogues: '19.5k',
    role: 'Electrical Inventor',
    maxim: 'The present is theirs; the future, for which I really worked, is mine.',
    bio: 'Nikola Tesla was a Serbian-American engineer and physicist who designed the alternating current (AC) electricity supply system.',
    achievements: 'Patented the AC induction motor and transformer; invented the Tesla Coil; pioneered wireless communications.',
    quotes: [
      'The present is theirs; the future, for which I really worked, is mine.',
      'Our virtues and our failings are inseparable, like force and matter.',
      'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.'
    ],
    traits: ['Visionary', 'Inventive', 'Unorthodox'],
    avatar: '/src/assets/tesla.png'
  },
  turing: {
    id: 'turing',
    name: 'Alan Turing',
    lifespan: 'London, 1912 - 1954',
    era: 'Modern Rationalism',
    discipline: 'Mathematics',
    score: 98.1,
    dialogues: '18.3k',
    role: 'Computer Scientist',
    maxim: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
    bio: 'Alan Turing was an English mathematician and logician. He is widely considered the father of theoretical computer science and AI.',
    achievements: 'Conceived the Universal Turing Machine; cracked the Enigma cipher; proposed the Turing Test for machine intelligence.',
    quotes: [
      'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
      'Sometimes it is the people no one can imagine anything of who do the things no one can imagine.',
      'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.'
    ],
    traits: ['Logical', 'Cryptographic', 'Enigmatic'],
    avatar: '/src/assets/turing.png'
  },
  curie: {
    id: 'curie',
    name: 'Marie Curie',
    lifespan: 'Paris, 1867 - 1934',
    era: 'Modern Rationalism',
    discipline: 'Physics',
    score: 98.8,
    dialogues: '15.9k',
    role: 'Physicist & Chemist',
    maxim: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more.',
    bio: 'Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.',
    achievements: 'Discovered Polonium and Radium; coined the term radioactivity; first person to win two Nobel Prizes in different sciences.',
    quotes: [
      'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more.',
      'Be less curious about people and more curious about ideas.',
      'There are sadistic scientists who hurry to hunt down errors instead of establishing the truth.'
    ],
    traits: ['Determined', 'Resilient', 'Experimental'],
    avatar: '/src/assets/curie.png'
  },
  newton: {
    id: 'newton',
    name: 'Isaac Newton',
    lifespan: 'Woolsthorpe, 1642 - 1727',
    era: 'Enlightenment Era',
    discipline: 'Physics',
    score: 99.2,
    dialogues: '25.1k',
    role: 'Natural Philosopher',
    maxim: 'If I have seen further it is by standing on the shoulders of Giants.',
    bio: 'Sir Isaac Newton was an English mathematician and natural philosopher. He is a key figure of the scientific revolution.',
    achievements: 'Formulated the laws of motion and universal gravitation; co-developed calculus; created the first reflecting telescope.',
    quotes: [
      'If I have seen further it is by standing on the shoulders of Giants.',
      'I can calculate the motion of heavenly bodies, but not the madness of people.',
      'Truth is the offspring of silence and meditation.'
    ],
    traits: ['Rigorous', 'Reclusive', 'Calculated'],
    avatar: '/src/assets/newton.png'
  }
};

// Custom high-fidelity debates for pre-made queries
const customDebates = {
  "Will AI replace software engineers?": [
    {
      speaker: 'socrates',
      type: 'challenge',
      text: "Let us examine this 'artificial mind'. If coding is a script of rules, can a machine know *why* it builds? Or does it merely mimic form without understanding the essence of the craft? Is a software engineer just a scribe of syntax, or a seeker of truth in digital architecture?",
      consensus: 65
    },
    {
      speaker: 'turing',
      type: 'agree',
      text: "Fascinating query, Socrates. The Turing Machine proved that any computable logical sequence can be simulated. If engineering software is purely logical synthesis, a machine can write it. However, establishing novel abstractions and choosing *what* is worth computing remains an inductive human capacity, for now.",
      consensus: 75
    },
    {
      speaker: 'hypatia',
      type: 'agree',
      text: "I agree with Alan. The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers. But it has no pretension to originate anything. It can execute analysis, but it cannot anticipate relations or define human values. AI will absorb the repetitive scripting, lifting engineers to become architects of design and intent.",
      consensus: 85
    },
    {
      speaker: 'einstein',
      type: 'challenge',
      text: "Imagination is more important than mechanical syntax! A machine can compute equations at light speed, but it cannot dream of a new dimension. Software engineering is not just logic; it is a creative leap. AI will replace the code-transcriber, but the imaginative creator will stand tall, standing on the shoulders of giants.",
      consensus: 80
    },
    {
      speaker: 'tesla',
      type: 'agree',
      text: "Indeed, Albert. The automation of electricity did not replace the engineer; it magnified their reach! AI is a power grid for the mind. It will automate the low-level labor, allowing us to build monumental systems we can scarcely conceive today. The future belongs to those who direct the current, not the wires.",
      consensus: 90
    }
  ],
  "Should I pursue AI/ML or start a startup?": [
    {
      speaker: 'tesla',
      type: 'challenge',
      text: "A startup is an engine of direct application. One must channel ideas into physical reality. Scientific work is noble, but the thrill of invention is in seeing it illuminate the world! Choose the startup, but anchor it in fundamental breakthroughs.",
      consensus: 60
    },
    {
      speaker: 'einstein',
      type: 'challenge',
      text: "I must disagree, Nikola. The pursuit of fundamental principles—like AI/ML research—is where the real magic lies. Had I focused on patent applications rather than relativity, the world would have lacked the foundation of nuclear energy. Understand the math first, then build the application.",
      consensus: 50
    },
    {
      speaker: 'turing',
      type: 'agree',
      text: "Albert makes a vital point. The foundational theories of computing were created in academic isolation, not commercial boardrooms. Yet, the acceleration of machine learning now requires massive infrastructure. There is a synthesis: one can research within a startup structure, where raw data and compute power are abundant.",
      consensus: 70
    },
    {
      speaker: 'socrates',
      type: 'challenge',
      text: "But tell me, what is the goal of your soul? To amass wealth through a commercial enterprise, or to seek knowledge and wisdom in the secrets of intelligence? If you pursue AI research, do so to understand the nature of mind. If you build a startup, do so to serve the public good. The unexamined venture is not worth launching.",
      consensus: 75
    },
    {
      speaker: 'curie',
      type: 'agree',
      text: "Yes, Socrates. Determination and methodical research are core. In my work with radioactive isotopes, there were no commercial products in mind. Yet it changed medicine forever. My advice is to master the scientific depths of ML. Startups are ephemeral; scientific truth lasts forever.",
      consensus: 80
    }
  ],
  "What makes a great leader?": [
    {
      speaker: 'socrates',
      type: 'challenge',
      text: "A leader must first govern themselves. How can a pilot direct a ship if they do not know the path? A great leader does not impose their will, but acts as a midwife of wisdom, asking questions that guide their citizens to discover justice and truth on their own.",
      consensus: 70
    },
    {
      speaker: 'newton',
      type: 'agree',
      text: "I agree, Socrates. A leader must be calculated and rigorous. Tact is the art of making a point without making an enemy. One must organize forces in harmony, much like the laws of motion. Action and reaction must be balanced, and any force must have clear direction.",
      consensus: 80
    },
    {
      speaker: 'curie',
      type: 'challenge',
      text: "While order is good, resilience in the face of adversity is what truly defines a leader. When my research was dismissed, it was solitary, stubborn determination that carried it forward. A leader must have the courage to stand by experimental truths, regardless of consensus or funding.",
      consensus: 75
    },
    {
      speaker: 'davinci',
      type: 'agree',
      text: "Indeed, Marie. Simplicity and observation are key. A great leader is like a polymathic designer: they observe the natural flows of human motivation. They do not force structures, but design elegant systems that align with human curiosity and creative freedom.",
      consensus: 85
    }
  ],
  "How should college students learn effectively?": [
    {
      speaker: 'socrates',
      type: 'challenge',
      text: "By questioning everything! Lectures and textbooks only provide opinions, not understanding. Students must not memorize answers; they must examine definitions, debate peers, and learn to expose the contradictions in their own beliefs. True education is a fire, not a vessel.",
      consensus: 70
    },
    {
      speaker: 'einstein',
      type: 'agree',
      text: "I agree fully, Socrates. Learning is not the facts, but the training of the mind to think! Memory is cheap. One must cultivate play and curiosity. I formulated my ideas by imagining myself riding a beam of light. Students should spend less time on exams, and more time dreaming up physical puzzles.",
      consensus: 80
    },
    {
      speaker: 'hypatia',
      type: 'agree',
      text: "Yes, Albert. We must ground curiosity in rigorous mathematics. Students should learn by solving historic proofs, studying astronomy, and mapping the heavens. Geometry teaches the mind how to follow logic step-by-step, providing the skeleton for raw imagination.",
      consensus: 90
    },
    {
      speaker: 'turing',
      type: 'challenge',
      text: "Yet we must also learn by building and experimenting! Theory is verified through simulation. Students should construct Turing machines, write algorithms, and watch the behavior compile. The dialogue between formal logic and experimental execution is where understanding is born.",
      consensus: 85
    }
  ],
  "How should I build a successful career?": [
    {
      speaker: 'davinci',
      type: 'challenge',
      text: "Do not bind yourself to a single trade. Success is the expansion of observation. A career should be a canvas where paint, physics, anatomy, and engineering bleed into one another. The most lucrative innovations lie at the borders of separate disciplines.",
      consensus: 75
    },
    {
      speaker: 'tesla',
      type: 'agree',
      text: "Yes, Leonardo. One must look to the future, not follow contemporary trends. Focus on solving massive, structural bottlenecks. I worked on alternating current when direct current was the standard. Do not seek small promotions; seek to build the grid of tomorrow.",
      consensus: 80
    },
    {
      speaker: 'curie',
      type: 'challenge',
      text: " Nikola, your vision is grand, but careers are built in the mud of daily, repetitive experiment. The discovery of radium took years of boiling pitchblende in a cold shed. One must have the resilience to work when there is no applause. Grit and focus build a lasting career.",
      consensus: 75
    },
    {
      speaker: 'newton',
      type: 'agree',
      text: "I agree, Marie. Focus is a gravity. If I have achieved anything, it was by keeping the subject of research constantly before me, waiting until the first dawnings open slowly, by little and little, into a full and clear light. Stand on the shoulders of giants, master what came before, and stay quiet in your study.",
      consensus: 85
    }
  ]
};

// Global App State
const state = {
  activeView: 'sanctuary',
  activeCouncil: ['socrates', 'einstein', 'turing', 'hypatia', 'tesla'],
  currentQuestion: '',
  debateTranscript: [],
  isPlaying: false,
  timelineIndex: -1,
  debateTimer: null,
  savedDebates: []
};

// DOM Elements
const views = {
  sanctuary: document.getElementById('view-sanctuary'),
  repository: document.getElementById('view-repository'),
  council: document.getElementById('view-council'),
  archive: document.getElementById('view-archive'),
  scholar: document.getElementById('view-scholar')
};

const navItems = document.querySelectorAll('.nav-links li, .scholar-btn');

// Initialize view routing
function showView(viewId) {
  state.activeView = viewId;
  
  // Toggle sections
  Object.keys(views).forEach(key => {
    if (key === viewId) {
      views[key].style.display = 'block';
      setTimeout(() => views[key].classList.add('active'), 50);
    } else {
      views[key].classList.remove('active');
      views[key].style.display = 'none';
    }
  });

  // Toggle active class on nav
  navItems.forEach(item => {
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Stop debate play if moving away
  if (viewId !== 'council') {
    pauseDebate();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update layout charts if changing views
  if (viewId === 'council') {
    initWaveformCanvas();
    drawFlowMap();
  } else if (viewId === 'repository') {
    renderRepositoryDirectory();
  } else if (viewId === 'archive') {
    renderArchiveDirectory();
  }
}

// Attach nav handlers
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-view');
    showView(target);
  });
});

document.getElementById('nav-logo').addEventListener('click', () => showView('sanctuary'));
document.getElementById('hero-start-btn').addEventListener('click', () => showView('council'));
document.querySelectorAll('.nav-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    const target = e.target.getAttribute('data-view');
    showView(target);
  });
});

// Watch Demo Handler
document.getElementById('hero-demo-btn').addEventListener('click', () => {
  showView('council');
  startDebateSimulation("Will AI replace software engineers?");
});

// Search input archive search handler
document.getElementById('global-search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  if (state.activeView === 'archive') {
    renderArchiveDirectory(query);
  } else if (state.activeView === 'repository') {
    renderRepositoryDirectory(query);
  }
});

/* -------------------------------------------------------------------------- */
/*                 LANDING PAGE PORTRAITS ANIMATION & FLOATING                */
/* -------------------------------------------------------------------------- */
function initFloatingPortraits() {
  const container = document.getElementById('hero-floating-container');
  if (!container) return;

  const characters = ['socrates', 'hypatia', 'davinci', 'einstein', 'tesla', 'turing'];
  container.innerHTML = '';

  characters.forEach((charId, idx) => {
    const fig = figuresData[charId];
    const portraitDiv = document.createElement('div');
    portraitDiv.className = `floating-portrait fp-${idx + 1}`;
    portraitDiv.style.backgroundImage = `url('${fig.avatar}')`;
    portraitDiv.style.cursor = 'pointer';
    portraitDiv.title = `Summon ${fig.name}`;
    portraitDiv.addEventListener('click', () => {
      openProfileDrawer(charId);
    });
    container.appendChild(portraitDiv);
  });
}

/* -------------------------------------------------------------------------- */
/*                      REPOSITORY DIRECTORY & FILTERS                        */
/* -------------------------------------------------------------------------- */
const eraFilters = document.querySelectorAll('.era-filter');
const disciplineFilters = document.querySelectorAll('.discipline-filter');
const influenceSlider = document.getElementById('influence-range');
const sliderValNum = document.getElementById('slider-val-num');

if (influenceSlider) {
  influenceSlider.addEventListener('input', (e) => {
    sliderValNum.innerText = parseFloat(e.target.value).toFixed(1);
    renderRepositoryDirectory();
  });
}

eraFilters.forEach(f => f.addEventListener('change', renderRepositoryDirectory));
disciplineFilters.forEach(f => f.addEventListener('change', renderRepositoryDirectory));

function renderRepositoryDirectory(searchQuery = '') {
  const grid = document.getElementById('figures-directory-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Get active filters
  const selectedEras = Array.from(eraFilters).filter(f => f.checked).map(f => f.value);
  const selectedDisciplines = Array.from(disciplineFilters).filter(f => f.checked).map(f => f.value);
  const minInfluence = parseFloat(influenceSlider ? influenceSlider.value : 80);

  Object.values(figuresData).forEach(fig => {
    // Apply filters
    const matchesSearch = fig.name.toLowerCase().includes(searchQuery) || fig.role.toLowerCase().includes(searchQuery);
    const matchesEra = selectedEras.includes(fig.era);
    const matchesDiscipline = selectedDisciplines.includes(fig.discipline);
    const matchesInfluence = fig.score >= minInfluence;

    if (matchesSearch && matchesEra && matchesDiscipline && matchesInfluence) {
      const card = document.createElement('div');
      card.className = 'figure-card';
      card.innerHTML = `
        <div class="fig-card-header">
          <div class="fig-portrait-wrapper">
            <img class="fig-portrait-img" src="${fig.avatar}" alt="${fig.name}">
          </div>
          <div class="fig-meta">
            <h3>${fig.name}</h3>
            <div class="fig-lifespan">${fig.lifespan}</div>
            <span class="drawer-badge" style="font-size: 0.6rem; padding: 0.1rem 0.5rem;">${fig.role}</span>
          </div>
        </div>
        <div class="fig-influence-badge">
          <div class="fig-influence-score">${fig.score}</div>
          <div class="fig-influence-lbl">Index</div>
        </div>
        <div class="fig-stats-row">
          <div class="stat-item">
            <div class="stat-val">${fig.dialogues}</div>
            <div class="stat-lbl">Dialogues</div>
          </div>
          <div class="stat-item">
            <div class="stat-val">${fig.discipline}</div>
            <div class="stat-lbl">Discipline</div>
          </div>
          <div class="stat-item">
            <div class="stat-val">${fig.era.split(' ')[0]}</div>
            <div class="stat-lbl">Era</div>
          </div>
        </div>
        <div class="fig-maxim-box">
          <div class="fig-maxim-lbl">Key Maxim</div>
          <div class="fig-maxim-text">"${fig.maxim}"</div>
        </div>
        <button class="btn-card-action">Profile & Summon</button>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
          openProfileDrawer(fig.id);
        } else {
          openProfileDrawer(fig.id);
        }
      });

      grid.appendChild(card);
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                       PROFILE DRAWER LOGIC                                 */
/* -------------------------------------------------------------------------- */
const profileDrawer = document.getElementById('profile-drawer');
const drawerCloseBtn = document.getElementById('profile-drawer-close');
const drawerPortrait = document.getElementById('drawer-portrait');
const drawerName = document.getElementById('drawer-name');
const drawerLifespan = document.getElementById('drawer-lifespan');
const drawerDiscipline = document.getElementById('drawer-discipline');
const drawerBio = document.getElementById('drawer-bio');
const drawerAchievements = document.getElementById('drawer-achievements');
const drawerQuotes = document.getElementById('drawer-quotes');
const drawerTraits = document.getElementById('drawer-traits');
const drawerSummonBtn = document.getElementById('drawer-summon-btn');

let currentDrawerFigId = null;

function openProfileDrawer(figId) {
  const fig = figuresData[figId];
  if (!fig) return;

  currentDrawerFigId = figId;
  drawerPortrait.src = fig.avatar;
  drawerName.innerText = fig.name;
  drawerLifespan.innerText = fig.lifespan;
  drawerDiscipline.innerText = fig.discipline;
  drawerBio.innerText = fig.bio;
  drawerAchievements.innerText = fig.achievements;

  // Render maxims
  drawerQuotes.innerHTML = '';
  fig.quotes.forEach(q => {
    const li = document.createElement('li');
    li.className = 'drawer-quote-item';
    li.innerText = `"${q}"`;
    drawerQuotes.appendChild(li);
  });

  // Render traits
  drawerTraits.innerHTML = '';
  fig.traits.forEach(t => {
    const span = document.createElement('span');
    span.className = 'trait-tag';
    span.innerText = t;
    drawerTraits.appendChild(span);
  });

  // Update button text based on council membership
  if (state.activeCouncil.includes(figId)) {
    drawerSummonBtn.innerText = 'Dismiss from Council';
    drawerSummonBtn.style.background = '#c24b4b';
    drawerSummonBtn.style.color = '#fff';
  } else {
    drawerSummonBtn.innerText = 'Summon to Council';
    drawerSummonBtn.style.background = 'var(--color-gold)';
    drawerSummonBtn.style.color = '#050505';
  }

  profileDrawer.classList.add('active');
}

function closeProfileDrawer() {
  profileDrawer.classList.remove('active');
}

if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeProfileDrawer);

if (drawerSummonBtn) {
  drawerSummonBtn.addEventListener('click', () => {
    if (!currentDrawerFigId) return;
    
    if (state.activeCouncil.includes(currentDrawerFigId)) {
      // Remove
      state.activeCouncil = state.activeCouncil.filter(id => id !== currentDrawerFigId);
    } else {
      // Add
      if (state.activeCouncil.length >= 8) {
        alert("The Council Chamber capacity is limited to 8 scholars for dialectical coherence.");
        return;
      }
      state.activeCouncil.push(currentDrawerFigId);
    }

    renderCouncilSelectors();
    closeProfileDrawer();
    
    // If we're in the council chamber, redraw the flow map nodes
    if (state.activeView === 'council') {
      drawFlowMap();
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                       COUNCIL CHAMBER SIMULATION SYSTEM                    */
/* -------------------------------------------------------------------------- */

const councilSelectorContainer = document.getElementById('council-selector-container');
const categoryPillsList = document.getElementById('category-pills-list');
const inquiryForm = document.getElementById('inquiry-form');
const userInquiryInput = document.getElementById('user-inquiry-input');
const debateViewportPanel = document.getElementById('debate-viewport-panel');
const consensusSummaryText = document.getElementById('consensus-summary-text');
const agreementDialFill = document.getElementById('agreement-dial-fill');
const agreementPercentVal = document.getElementById('agreement-percent-val');
const contributionBarsList = document.getElementById('contribution-bars-list');
const saveDebateSessionBtn = document.getElementById('btn-save-debate-session');

// Podcast play items
const playPauseBtn = document.getElementById('podcast-play-btn');
const prevBtn = document.getElementById('podcast-prev-btn');
const nextBtn = document.getElementById('podcast-next-btn');
const timelineSlider = document.getElementById('podcast-timeline');
const timeCur = document.getElementById('podcast-time-cur');
const timeTotal = document.getElementById('podcast-time-total');
const activeSpeakerAvatar = document.getElementById('active-speaker-avatar');

// Populates Left Sidebar council selection cards
function renderCouncilSelectors() {
  if (!councilSelectorContainer) return;
  councilSelectorContainer.innerHTML = '';

  Object.values(figuresData).forEach(fig => {
    const isSelected = state.activeCouncil.includes(fig.id);
    const mCard = document.createElement('div');
    mCard.className = `selector-member-card ${isSelected ? 'selected' : ''}`;
    mCard.innerHTML = `
      <div class="selector-member-info">
        <div class="selector-member-avatar" style="background-image: url('${fig.avatar}')"></div>
        <div>
          <div class="selector-member-name">${fig.name}</div>
          <div class="selector-member-title">${fig.role}</div>
        </div>
      </div>
      <div class="selector-check"></div>
    `;

    mCard.addEventListener('click', (e) => {
      // Toggle selection directly
      if (isSelected) {
        state.activeCouncil = state.activeCouncil.filter(id => id !== fig.id);
      } else {
        if (state.activeCouncil.length >= 8) {
          alert("The Council Chamber capacity is limited to 8 scholars.");
          return;
        }
        state.activeCouncil.push(fig.id);
      }
      renderCouncilSelectors();
      drawFlowMap();
    });

    councilSelectorContainer.appendChild(mCard);
  });
}

// Category selection core topics click
if (categoryPillsList) {
  const pills = categoryPillsList.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const question = pill.getAttribute('data-q');
      startDebateSimulation(question);
    });
  });
}

// Core topic helper questions inside initial card
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('suggested-question-btn')) {
    const question = e.target.getAttribute('data-ask');
    startDebateSimulation(question);
  }
});

// Inquiry Submission
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = userInquiryInput.value.trim();
    if (!query) return;
    
    startDebateSimulation(query);
    userInquiryInput.value = '';
  });
}

// Simulation Engine Core
function startDebateSimulation(question) {
  pauseDebate();
  state.currentQuestion = question;
  state.timelineIndex = -1;
  state.debateTranscript = [];

  // Generate turns
  // Check if we have pre-made script
  if (customDebates[question]) {
    // Filter turns to only include speakers who are in the active council, 
    // or inject speakers dynamically if they aren't active to make the debate rich!
    const turns = customDebates[question];
    turns.forEach(t => {
      // Add speaker to council if not already there, so they are seen in the sidebar
      if (!state.activeCouncil.includes(t.speaker)) {
        state.activeCouncil.push(t.speaker);
      }
    });
    renderCouncilSelectors();
    state.debateTranscript = JSON.parse(JSON.stringify(turns));
  } else {
    // Generate simulated dynamic debate turns based on active council members
    if (state.activeCouncil.length === 0) {
      alert("Please convene at least one historical mind to start a discussion.");
      return;
    }
    
    const erasCombined = state.activeCouncil.map(id => figuresData[id].name).join(" and ");
    
    state.debateTranscript = [
      {
        speaker: state.activeCouncil[0],
        type: 'challenge',
        text: `Regarding "${question}", let us consider the first principles. As a representative of ${figuresData[state.activeCouncil[0]].discipline}, the core problem is not the application, but the foundational definitions. What do we truly seek here?`,
        consensus: 60
      }
    ];

    // Build subsequent turns
    const numTurns = Math.max(3, state.activeCouncil.length);
    for (let i = 1; i < numTurns; i++) {
      const spId = state.activeCouncil[i % state.activeCouncil.length];
      const prevSp = figuresData[state.debateTranscript[i - 1].speaker];
      const currentSp = figuresData[spId];
      
      const isChallenge = i % 2 === 1;
      const type = isChallenge ? 'challenge' : 'agree';
      const consensusMod = isChallenge ? -10 : 8;
      const prevCons = state.debateTranscript[i - 1].consensus;
      
      let text = "";
      if (isChallenge) {
        text = `I must build upon, yet pivot from ${prevSp.name}'s argument. In the realm of ${currentSp.discipline}, we view this differently. ${currentSp.quotes[0]} If we only analyze rules, we miss the experimental nature of the challenge.`;
      } else {
        text = `Indeed, ${prevSp.name}. Your point coordinates perfectly with my own view. In my life's work, I observed that ${currentSp.quotes[1] || currentSp.quotes[0]}. We must unify our research paths to form a consensus.`;
      }

      state.debateTranscript.push({
        speaker: spId,
        type,
        text,
        consensus: Math.max(40, Math.min(98, prevCons + consensusMod))
      });
    }
  }

  // Clear viewport & render questions
  debateViewportPanel.innerHTML = `
    <div style="text-align: center; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
      <span class="hero-tag" style="font-size: 0.75rem;">Active Inquiry</span>
      <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: #fff; margin-top: 0.5rem;">"${question}"</h2>
    </div>
  `;

  // Enable save button
  saveDebateSessionBtn.removeAttribute('disabled');

  // Trigger Play
  playDebate();
}

function playDebate() {
  if (state.debateTranscript.length === 0) return;
  state.isPlaying = true;
  playPauseBtn.innerText = '⏸';
  playPauseBtn.title = 'Pause Debate';
  
  // Start simulation loop
  state.debateTimer = setInterval(() => {
    if (state.timelineIndex < state.debateTranscript.length - 1) {
      stepForward();
    } else {
      pauseDebate();
    }
  }, 4500); // 4.5 seconds per turn block

  // If first play, step immediately
  if (state.timelineIndex === -1) {
    stepForward();
  }
}

function pauseDebate() {
  state.isPlaying = false;
  if (playPauseBtn) {
    playPauseBtn.innerText = '▶';
    playPauseBtn.title = 'Play Debate Podcast';
  }
  if (state.debateTimer) {
    clearInterval(state.debateTimer);
    state.debateTimer = null;
  }
}

// Toggles Play/Pause button
if (playPauseBtn) {
  playPauseBtn.addEventListener('click', () => {
    if (state.isPlaying) {
      pauseDebate();
    } else {
      if (state.debateTranscript.length === 0) {
        // Trigger default suggested question
        startDebateSimulation("Will AI replace software engineers?");
      } else {
        playDebate();
      }
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    pauseDebate();
    stepBackward();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    pauseDebate();
    stepForward();
  });
}

// Step logic
function stepForward() {
  if (state.timelineIndex >= state.debateTranscript.length - 1) return;
  state.timelineIndex++;
  renderCurrentTurn();
}

function stepBackward() {
  if (state.timelineIndex <= 0) return;
  state.timelineIndex--;
  renderCurrentTurn();
}

// Renders visual changes for current debate turn
function renderCurrentTurn() {
  const turn = state.debateTranscript[state.timelineIndex];
  const fig = figuresData[turn.speaker];

  // 1. Highlight speaker avatar and speaking animations
  activeSpeakerAvatar.style.backgroundImage = `url('${fig.avatar}')`;
  activeSpeakerAvatar.classList.add('speaking');
  // Reset after 4 seconds (before next turn)
  setTimeout(() => activeSpeakerAvatar.classList.remove('speaking'), 3800);
  
  // 2. Add message to viewport if not already added
  const existingBubbles = debateViewportPanel.querySelectorAll('.message-bubble');
  
  // We can render all messages up to the current timelineIndex
  debateViewportPanel.innerHTML = `
    <div style="text-align: center; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
      <span class="hero-tag" style="font-size: 0.75rem;">Active Inquiry</span>
      <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: #fff; margin-top: 0.5rem;">"${state.currentQuestion}"</h2>
    </div>
  `;

  for (let i = 0; i <= state.timelineIndex; i++) {
    const t = state.debateTranscript[i];
    const f = figuresData[t.speaker];
    const isLatest = i === state.timelineIndex;
    
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${i % 2 === 1 ? 'right-align' : ''}`;
    bubble.innerHTML = `
      <div class="msg-avatar" style="background-image: url('${f.avatar}')"></div>
      <div class="msg-content-wrapper">
        <div class="msg-meta">
          <span class="msg-sender-name">${f.name}</span>
          <span class="msg-sender-role">${f.role}</span>
          ${t.type === 'challenge' ? '<span style="color:#e05e5e; font-size:0.6rem; font-weight:700;">[ANTITHESIS]</span>' : '<span style="color:var(--color-gold); font-size:0.6rem; font-weight:700;">[SYNTHESIS]</span>'}
        </div>
        <div class="msg-body ${isLatest ? 'active-speaking' : ''}">
          ${t.text}
        </div>
      </div>
    `;
    debateViewportPanel.appendChild(bubble);
  }

  // Scroll viewport to bottom
  debateViewportPanel.scrollTop = debateViewportPanel.scrollHeight;

  // 3. Update timeline elements
  const percent = ((state.timelineIndex + 1) / state.debateTranscript.length) * 100;
  timelineSlider.value = percent;
  
  // Formats times
  const curSeconds = (state.timelineIndex + 1) * 30;
  const totalSeconds = state.debateTranscript.length * 30;
  timeCur.innerText = formatTime(curSeconds);
  timeTotal.innerText = formatTime(totalSeconds);

  // 4. Update Analytics Dial consensus ring
  const circleOffset = 201 - (201 * turn.consensus) / 100;
  agreementDialFill.style.strokeDashoffset = circleOffset;
  agreementPercentVal.innerText = `${turn.consensus}%`;

  // Color code dial consensus
  if (turn.consensus > 80) {
    agreementDialFill.style.stroke = 'var(--color-gold-bright)';
  } else if (turn.consensus < 60) {
    agreementDialFill.style.stroke = '#e05e5e';
  } else {
    agreementDialFill.style.stroke = 'var(--color-gold)';
  }

  // 5. Update right sidebar consensus text
  updateConsensusText(turn);

  // 6. Update contribution list bars
  updateContributions();

  // 7. Pulse flow map link
  pulseFlowMapLink(turn.speaker);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// timeline range slider drag handler
if (timelineSlider) {
  timelineSlider.addEventListener('input', (e) => {
    if (state.debateTranscript.length === 0) return;
    pauseDebate();
    const pct = parseInt(e.target.value);
    const newIdx = Math.min(
      state.debateTranscript.length - 1,
      Math.max(0, Math.floor((pct / 100) * state.debateTranscript.length))
    );
    state.timelineIndex = newIdx;
    renderCurrentTurn();
  });
}

// Consensus Text updates — uses HTML strong tags instead of markdown
function updateConsensusText(turn) {
  const fig = figuresData[turn.speaker];
  let summary = "";

  if (turn.consensus > 85) {
    summary = `The Council has reached a solid <strong style="color:var(--color-gold)">Synthesis</strong>. ${fig.name} unified the viewpoints by arguing that low-level friction resolves into elegant macro systems. There is strong alignment between scientific models and metaphysics.`;
  } else if (turn.consensus < 60) {
    summary = `Active <strong style="color:#e05e5e">Antithesis</strong> challenge in progress. ${fig.name} has disrupted the prevailing harmony by pointing out empirical discrepancies. The debate has split along theoretical vs engineering axes.`;
  } else {
    summary = `The Council is in a dialectical <strong style="color:var(--color-gold-bright)">Development</strong> phase. ${fig.name} is building the bridge of consensus, linking historical axioms to the modern query.`;
  }

  consensusSummaryText.innerHTML = summary;
}

// Contributions progress bars updates
function updateContributions() {
  if (!contributionBarsList) return;
  contributionBarsList.innerHTML = '';

  // Calculate spoken word counts for speakers up to timelineIndex
  const counts = {};
  let totalWords = 0;

  state.activeCouncil.forEach(id => {
    counts[id] = 0;
  });

  for (let i = 0; i <= state.timelineIndex; i++) {
    const turn = state.debateTranscript[i];
    if (counts[turn.speaker] !== undefined) {
      const words = turn.text.split(' ').length;
      counts[turn.speaker] += words;
      totalWords += words;
    }
  }

  state.activeCouncil.forEach(id => {
    const fig = figuresData[id];
    const wordCount = counts[id];
    const pct = totalWords > 0 ? Math.round((wordCount / totalWords) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'progress-row';
    row.innerHTML = `
      <div class="progress-info">
        <span class="progress-name">${fig.name}</span>
        <span class="progress-percent">${pct}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${pct}%"></div>
      </div>
    `;
    contributionBarsList.appendChild(row);
  });
}

/* -------------------------------------------------------------------------- */
/*                 VOICE WAVEFORM VISUALIZER (CANVAS)                         */
/* -------------------------------------------------------------------------- */
let waveformCtx = null;
let waveformAnimationId = null;

function initWaveformCanvas() {
  const canvas = document.getElementById('waveform-canvas');
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  waveformCtx = canvas.getContext('2d');

  if (waveformAnimationId) {
    cancelAnimationFrame(waveformAnimationId);
  }

  animateWaveform();
}

function animateWaveform() {
  if (!waveformCtx) return;

  const canvas = waveformCtx.canvas;
  const w = canvas.width;
  const h = canvas.height;
  waveformCtx.clearRect(0, 0, w, h);

  const numBars = 35;
  const barWidth = 3;
  const barGap = 3;
  const startX = (w - (numBars * (barWidth + barGap))) / 2;

  waveformCtx.fillStyle = '#cfa851';

  for (let i = 0; i < numBars; i++) {
    let barHeight = 2;

    if (state.isPlaying && activeSpeakerAvatar.classList.contains('speaking')) {
      // Bouncing animation synced with speaker
      const factor = Math.sin(Date.now() * 0.006 + i * 0.15);
      const rand = Math.random() * 0.5 + 0.5;
      barHeight = Math.max(3, Math.abs(factor) * (h - 6) * rand);
    } else {
      // Muted flat state
      barHeight = 2;
    }

    const x = startX + i * (barWidth + barGap);
    const y = (h - barHeight) / 2;

    waveformCtx.beginPath();
    waveformCtx.roundRect(x, y, barWidth, barHeight, 1.5);
    waveformCtx.fill();
  }

  waveformAnimationId = requestAnimationFrame(animateWaveform);
}

/* -------------------------------------------------------------------------- */
/*                  IDEA FLOW NETWORK VISUALIZER (CANVAS)                     */
/* -------------------------------------------------------------------------- */
let flowCtx = null;
let flowNodeCoords = {};

function drawFlowMap() {
  const canvas = document.getElementById('flow-map-canvas');
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  flowCtx = canvas.getContext('2d');

  const w = canvas.width;
  const h = canvas.height;
  flowCtx.clearRect(0, 0, w, h);

  // Position nodes in a circular ring layout
  const numNodes = state.activeCouncil.length;
  if (numNodes === 0) return;

  const centerX = w / 2;
  const centerY = h / 2;
  const radius = Math.min(w, h) / 2.7;

  flowNodeCoords = {};

  // Draw connecting pathways first
  flowCtx.strokeStyle = 'rgba(207, 168, 81, 0.06)';
  flowCtx.lineWidth = 1;
  
  for (let i = 0; i < numNodes; i++) {
    const angle = (i * 2 * Math.PI) / numNodes - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    flowNodeCoords[state.activeCouncil[i]] = { x, y };
  }

  // Draw cross connections
  const keys = Object.keys(flowNodeCoords);
  flowCtx.beginPath();
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const p1 = flowNodeCoords[keys[i]];
      const p2 = flowNodeCoords[keys[j]];
      flowCtx.moveTo(p1.x, p1.y);
      flowCtx.lineTo(p2.x, p2.y);
    }
  }
  flowCtx.stroke();

  // Draw node points
  keys.forEach(key => {
    const coord = flowNodeCoords[key];
    const fig = figuresData[key];

    // Background glow
    flowCtx.beginPath();
    flowCtx.arc(coord.x, coord.y, 8, 0, 2 * Math.PI);
    flowCtx.fillStyle = 'rgba(207, 168, 81, 0.2)';
    flowCtx.fill();

    // Foreground dot
    flowCtx.beginPath();
    flowCtx.arc(coord.x, coord.y, 4, 0, 2 * Math.PI);
    flowCtx.fillStyle = 'var(--color-gold)';
    flowCtx.fill();

    // Node Name Tag
    flowCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    flowCtx.font = '9px Outfit';
    flowCtx.textAlign = 'center';
    flowCtx.fillText(fig.name.split(' ').pop(), coord.x, coord.y - 12);
  });
}

// Animated pulse beam traveling between previous speaker and current speaker
let flowPulseTimer = null;
function pulseFlowMapLink(speakerId) {
  if (!flowCtx || !flowNodeCoords[speakerId]) return;

  // Find previous speaker
  if (state.timelineIndex <= 0) return;
  const prevTurn = state.debateTranscript[state.timelineIndex - 1];
  const startCoord = flowNodeCoords[prevTurn.speaker];
  const endCoord = flowNodeCoords[speakerId];

  if (!startCoord || !endCoord) return;

  // Animate pulse dot
  let progress = 0;
  if (flowPulseTimer) clearInterval(flowPulseTimer);

  flowPulseTimer = setInterval(() => {
    if (progress >= 1) {
      clearInterval(flowPulseTimer);
      return;
    }

    progress += 0.05;
    
    // Redraw base flow map
    drawFlowMap();

    // Draw active link highlight line
    flowCtx.strokeStyle = 'rgba(207, 168, 81, 0.6)';
    flowCtx.lineWidth = 2;
    flowCtx.beginPath();
    flowCtx.moveTo(startCoord.x, startCoord.y);
    flowCtx.lineTo(endCoord.x, endCoord.y);
    flowCtx.stroke();

    // Calculate pulse dot position
    const px = startCoord.x + (endCoord.x - startCoord.x) * progress;
    const py = startCoord.y + (endCoord.y - startCoord.y) * progress;

    // Glowing Pulse dot
    flowCtx.beginPath();
    flowCtx.arc(px, py, 6, 0, 2 * Math.PI);
    flowCtx.fillStyle = 'var(--color-gold-bright)';
    flowCtx.shadowColor = 'var(--color-gold-bright)';
    flowCtx.shadowBlur = 10;
    flowCtx.fill();
    flowCtx.shadowBlur = 0; // reset
  }, 30);
}

/* -------------------------------------------------------------------------- */
/*                       SAVED DIALOGUES & ARCHIVE                            */
/* -------------------------------------------------------------------------- */

function saveActiveDebateSession() {
  if (state.debateTranscript.length === 0) return;

  const newSession = {
    id: 'debate_' + Date.now(),
    question: state.currentQuestion,
    category: document.querySelector('.category-pill.active')?.innerText || 'Custom Inquiry',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    council: [...state.activeCouncil],
    transcript: [...state.debateTranscript]
  };

  // Check duplicate
  const exists = state.savedDebates.some(d => d.question === newSession.question);
  if (exists) {
    alert("This inquiry session is already archived.");
    return;
  }

  state.savedDebates.unshift(newSession);
  localStorage.setItem('council_saved_debates', JSON.stringify(state.savedDebates));
  alert("Wisdom session successfully archived under Eternal Citation License!");
  
  showView('archive');
}

if (saveDebateSessionBtn) {
  saveDebateSessionBtn.addEventListener('click', saveActiveDebateSession);
}

function loadSavedDebatesFromStorage() {
  const stored = localStorage.getItem('council_saved_debates');
  if (stored) {
    state.savedDebates = JSON.parse(stored);
  } else {
    // Populate default saved debate history so the archive doesn't feel empty!
    state.savedDebates = [
      {
        id: 'default_1',
        question: "Will AI replace software engineers?",
        category: "Technology & AI",
        date: "Jun 12, 2026",
        council: ['socrates', 'turing', 'hypatia', 'einstein', 'tesla'],
        transcript: customDebates["Will AI replace software engineers?"]
      },
      {
        id: 'default_2',
        question: "What makes a great leader?",
        category: "Leadership & Ethics",
        date: "May 28, 2026",
        council: ['socrates', 'newton', 'curie', 'davinci'],
        transcript: customDebates["What makes a great leader?"]
      }
    ];
    localStorage.setItem('council_saved_debates', JSON.stringify(state.savedDebates));
  }
}

function renderArchiveDirectory(searchQuery = '') {
  const grid = document.getElementById('archive-dialogues-grid');
  if (!grid) return;
  
  grid.innerHTML = '';

  const filtered = state.savedDebates.filter(deb => 
    deb.question.toLowerCase().includes(searchQuery) || deb.category.toLowerCase().includes(searchQuery)
  );

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; padding: 4rem; color: var(--color-text-muted);">
        No dialogues match your filter inquiry.
      </div>
    `;
    return;
  }

  filtered.forEach(deb => {
    const card = document.createElement('div');
    card.className = 'archive-card';
    
    // Render avatar icons list
    let avatarsHtml = '';
    deb.council.forEach(cid => {
      const fig = figuresData[cid];
      if (fig) {
        avatarsHtml += `<div class="archive-avatar" style="background-image: url('${fig.avatar}')" title="${fig.name}"></div>`;
      }
    });

    card.innerHTML = `
      <div class="archive-card-header">
        <span class="archive-card-category">${deb.category}</span>
        <span>${deb.date}</span>
      </div>
      <h3 class="archive-card-title">"${deb.question}"</h3>
      <div class="archive-participants">
        ${avatarsHtml}
      </div>
      <div class="archive-card-footer">
        <span>${deb.transcript.length} turns spoken</span>
        <span style="color: var(--color-gold); font-weight:700;">Replay Podcast ↗</span>
      </div>
    `;

    card.addEventListener('click', () => {
      // Load this debate back into the active panel
      pauseDebate();
      state.currentQuestion = deb.question;
      state.activeCouncil = [...deb.council];
      state.debateTranscript = [...deb.transcript];
      state.timelineIndex = -1;
      
      renderCouncilSelectors();
      showView('council');
      
      // Update heading & viewport
      debateViewportPanel.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
          <span class="hero-tag" style="font-size: 0.75rem;">Active Inquiry</span>
          <h2 style="font-family: var(--font-serif); font-size: 1.5rem; color: #fff; margin-top: 0.5rem;">"${deb.question}"</h2>
        </div>
      `;

      // Enable save button
      saveDebateSessionBtn.removeAttribute('disabled');

      // Auto start replay
      playDebate();
    });

    grid.appendChild(card);
  });
}

/* -------------------------------------------------------------------------- */
/*                         INITIALIZATION & ENTRY                             */
/* -------------------------------------------------------------------------- */
window.addEventListener('resize', () => {
  if (state.activeView === 'council') {
    initWaveformCanvas();
    drawFlowMap();
  }
});

// App startup
function initApp() {
  initFloatingPortraits();
  renderCouncilSelectors();
  loadSavedDebatesFromStorage();
  
  // Set initial route
  showView('sanctuary');
}

document.addEventListener('DOMContentLoaded', initApp);
// If scripts are loaded defer/async, sometimes DOMContentLoaded has already fired
if (document.readyState === "interactive" || document.readyState === "complete") {
  initApp();
}

// =============================================
// UPI PAYMENT MODAL
// =============================================
const upiOverlay    = document.getElementById('upi-modal-overlay');
const upiCloseBtn   = document.getElementById('upi-modal-close');
const goScholarBtn  = document.getElementById('btn-go-scholar');
const upiCopyBtn    = document.getElementById('upi-copy-btn');
const upiCopyLabel  = document.getElementById('upi-copy-label');
const upiDeeplink   = document.getElementById('upi-deeplink-btn');
const UPI_ID        = '7572995698@nyes';
const UPI_NAME      = 'Council of Minds';
const UPI_AMOUNT    = '19';

function openUpiModal() {
  upiOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeUpiModal() {
  upiOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (goScholarBtn) {
  goScholarBtn.addEventListener('click', openUpiModal);
}

if (upiCloseBtn) {
  upiCloseBtn.addEventListener('click', closeUpiModal);
}

// Close when clicking backdrop
if (upiOverlay) {
  upiOverlay.addEventListener('click', (e) => {
    if (e.target === upiOverlay) closeUpiModal();
  });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && upiOverlay?.classList.contains('open')) {
    closeUpiModal();
  }
});

// Copy UPI ID to clipboard
if (upiCopyBtn) {
  upiCopyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      upiCopyBtn.classList.add('copied');
      upiCopyLabel.textContent = 'Copied!';
      setTimeout(() => {
        upiCopyBtn.classList.remove('copied');
        upiCopyLabel.textContent = 'Copy';
      }, 2500);
    } catch {
      // Fallback for non-https or older browsers
      const el = document.createElement('textarea');
      el.value = UPI_ID;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      upiCopyLabel.textContent = 'Copied!';
      setTimeout(() => { upiCopyLabel.textContent = 'Copy'; }, 2000);
    }
  });
}

// UPI deeplink — opens GPay/PhonePe/etc on mobile
if (upiDeeplink) {
  upiDeeplink.addEventListener('click', () => {
    const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&am=${UPI_AMOUNT}&cu=INR&tn=${encodeURIComponent('Scholar Membership - Council of Minds')}`;
    window.location.href = upiLink;
  });
}
