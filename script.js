function makeWordActivity(word, say, description) {
  const lowerWord = word.toLowerCase();

  return {
    word,
    description: description.charAt(0).toUpperCase() + description.slice(1) + '.',
    say,
    use: `${word} can mean ${description}.`,
    try: `Use the word ${lowerWord} in a sentence today.`,
    draw: `Draw something that shows ${lowerWord}.`
  };
}

const wordActivities = Object.fromEntries([
  ['Magic', 'ma-gic', 'something surprising and wonderful that makes your imagination sparkle'],
  ['Brave', 'brave', 'trying even when something feels a little scary'],
  ['Curious', 'cu-ri-ous', 'wanting to ask questions, explore, and learn new things'],
  ['Kind', 'kind', 'using words and actions to help someone feel cared for'],
  ['Giggle', 'gig-gle', 'a small happy laugh that bubbles out when something is funny'],
  ['Wonder', 'won-der', 'a wow feeling when something is amazing or mysterious'],
  ['Create', 'cre-ate', 'making something new from your ideas or imagination'],
  ['Adventure', 'ad-ven-ture', 'an exciting journey where you discover something new'],
  ['Imagine', 'i-mag-ine', 'making pictures and stories inside your mind'],
  ['Share', 'share', 'letting someone enjoy something with you'],
  ['Shine', 'shine', 'glowing brightly like a star or a happy idea'],
  ['Puzzle', 'puz-zle', 'a fun problem you solve by thinking carefully'],
  ['Celebrate', 'cel-e-brate', 'showing happiness about something special'],
  ['Dream', 'dream', 'a story your mind can make while sleeping or imagining'],
  ['Discover', 'dis-cov-er', 'finding out something you did not know before'],
  ['Helpful', 'help-ful', 'doing something kind that makes a job easier'],
  ['Sparkle', 'spar-kle', 'shining with tiny bright flashes'],
  ['Listen', 'lis-ten', 'paying attention with your ears, eyes, and heart'],
  ['Gentle', 'gen-tle', 'being soft, careful, and kind'],
  ['Explore', 'ex-plore', 'looking around carefully to learn about a place or idea'],
  ['Cheerful', 'cheer-ful', 'feeling bright, friendly, and full of happy energy'],
  ['Patient', 'pa-tient', 'waiting calmly and giving things time'],
  ['Invent', 'in-vent', 'thinking up and making something new'],
  ['Respect', 're-spect', 'showing that people, places, and things matter'],
  ['Joy', 'joy', 'a big happy feeling that warms you inside'],
  ['Focus', 'fo-cus', 'keeping your attention on one thing'],
  ['Courage', 'cour-age', 'the strong feeling that helps you try hard things'],
  ['Grateful', 'grate-ful', 'feeling thankful for someone or something good'],
  ['Build', 'build', 'putting pieces together to make something new'],
  ['Hope', 'hope', 'believing that something good can happen'],
  ['Bright', 'bright', 'full of light, color, or clever ideas'],
  ['Calm', 'calm', 'feeling peaceful and not rushed'],
  ['Careful', 'care-ful', 'doing something with attention so it is safe and right'],
  ['Clever', 'clev-er', 'using smart thinking to solve something'],
  ['Cozy', 'co-zy', 'warm, safe, and comfortable'],
  ['Daring', 'dar-ing', 'ready to try something bold'],
  ['Delight', 'de-light', 'a happy feeling of surprise or pleasure'],
  ['Eager', 'ea-ger', 'excited and ready to begin'],
  ['Fair', 'fair', 'treating people in a kind and equal way'],
  ['Friendly', 'friend-ly', 'kind and nice to be around'],
  ['Glowing', 'glow-ing', 'shining softly with light or happiness'],
  ['Graceful', 'grace-ful', 'moving in a smooth and lovely way'],
  ['Honest', 'hon-est', 'telling the truth and being trusted'],
  ['Humble', 'hum-ble', 'not bragging and still feeling proud in a quiet way'],
  ['Jolly', 'jol-ly', 'happy, playful, and full of fun'],
  ['Lively', 'live-ly', 'full of energy and movement'],
  ['Lucky', 'luck-y', 'having something good happen by chance'],
  ['Merry', 'mer-ry', 'happy and cheerful'],
  ['Mighty', 'might-y', 'strong or powerful'],
  ['Neat', 'neat', 'tidy, clean, or nicely done'],
  ['Noble', 'no-ble', 'showing goodness, courage, or honor'],
  ['Peaceful', 'peace-ful', 'quiet, calm, and free from trouble'],
  ['Playful', 'play-ful', 'full of fun and ready to play'],
  ['Polite', 'po-lite', 'using good manners and kind words'],
  ['Proud', 'proud', 'feeling happy about something done well'],
  ['Quiet', 'qui-et', 'soft and not noisy'],
  ['Radiant', 'ra-di-ant', 'shining with light or happiness'],
  ['Ready', 'read-y', 'prepared to start'],
  ['Safe', 'safe', 'protected from harm'],
  ['Silly', 'sil-ly', 'funny in a playful way'],
  ['Smart', 'smart', 'quick at learning or thinking'],
  ['Strong', 'strong', 'having power in your body, mind, or heart'],
  ['Sunny', 'sun-ny', 'bright like sunshine or cheerful'],
  ['Thoughtful', 'thought-ful', 'thinking about how others feel'],
  ['Trust', 'trust', 'believing someone is honest and safe'],
  ['Unique', 'u-nique', 'special and unlike anything else'],
  ['Warm', 'warm', 'comfortable, friendly, or gently heated'],
  ['Wise', 'wise', 'using good thinking and experience'],
  ['Wonderful', 'won-der-ful', 'so good that it fills you with wonder'],
  ['Zippy', 'zip-py', 'quick, lively, and full of energy'],
  ['Amazing', 'a-maz-ing', 'so special that it makes you say wow'],
  ['Balance', 'bal-ance', 'keeping things steady and even'],
  ['Bloom', 'bloom', 'opening like a flower or growing beautifully'],
  ['Bouncy', 'boun-cy', 'springing up and down with energy'],
  ['Breeze', 'breeze', 'a soft and gentle wind'],
  ['Bubbly', 'bub-bly', 'cheerful and full of lively feelings'],
  ['Buddy', 'bud-dy', 'a friend or helper'],
  ['Care', 'care', 'kind attention given to someone or something'],
  ['Charm', 'charm', 'a special pleasant quality'],
  ['Chuckle', 'chuck-le', 'a quiet little laugh'],
  ['Comfort', 'com-fort', 'a feeling of being safe and cared for'],
  ['Connect', 'con-nect', 'joining things or people together'],
  ['Cooperate', 'co-op-er-ate', 'working together kindly'],
  ['Dance', 'dance', 'moving your body to music or rhythm'],
  ['Dazzle', 'daz-zle', 'shining or impressing in a bright way'],
  ['Design', 'de-sign', 'planning how something will look or work'],
  ['Determined', 'de-ter-mined', 'not giving up easily'],
  ['Different', 'dif-fer-ent', 'not the same as something else'],
  ['Effort', 'ef-fort', 'trying hard to do something'],
  ['Energy', 'en-er-gy', 'the power to move, play, or work'],
  ['Enjoy', 'en-joy', 'liking something and having fun with it'],
  ['Excited', 'ex-cit-ed', 'feeling happy and full of energy about something'],
  ['Fairy', 'fair-y', 'a tiny magical story creature'],
  ['Family', 'fam-i-ly', 'people who love and care for each other'],
  ['Fancy', 'fan-cy', 'special, decorated, or imaginative'],
  ['Feather', 'feath-er', 'a soft light part from a bird'],
  ['Festival', 'fes-ti-val', 'a happy event with music, food, or fun'],
  ['Float', 'float', 'resting or moving gently on air or water'],
  ['Flower', 'flow-er', 'a colorful part of a plant'],
  ['Flutter', 'flut-ter', 'moving lightly and quickly like wings'],
  ['Forgive', 'for-give', 'letting go of angry feelings kindly'],
  ['Freedom', 'free-dom', 'being able to choose or move safely'],
  ['Friend', 'friend', 'someone you like, trust, and enjoy being with'],
  ['Garden', 'gar-den', 'a place where plants and flowers grow'],
  ['Generous', 'gen-er-ous', 'happy to give or share'],
  ['Glimmer', 'glim-mer', 'a small soft shine'],
  ['Grace', 'grace', 'kindness or smooth beauty'],
  ['Grow', 'grow', 'getting bigger, stronger, or wiser'],
  ['Harmony', 'har-mo-ny', 'things working together in a pleasing way'],
  ['Heal', 'heal', 'getting better after hurt or sadness'],
  ['Heart', 'heart', 'the place we imagine feelings come from'],
  ['Hero', 'he-ro', 'someone who helps with courage and kindness'],
  ['Idea', 'i-de-a', 'a thought that can become something new'],
  ['Include', 'in-clude', 'making sure someone is part of the group'],
  ['Invite', 'in-vite', 'asking someone to join in'],
  ['Journey', 'jour-ney', 'a trip from one place or idea to another'],
  ['Jump', 'jump', 'pushing your body up from the ground'],
  ['Lantern', 'lan-tern', 'a light you can carry'],
  ['Laugh', 'laugh', 'a happy sound people make when something is funny'],
  ['Learn', 'learn', 'finding out how something works or what it means'],
  ['Legend', 'leg-end', 'an old story about amazing people or events'],
  ['Light', 'light', 'brightness that helps us see'],
  ['Melody', 'mel-o-dy', 'a tune you can sing or hum'],
  ['Memory', 'mem-o-ry', 'something you remember from before'],
  ['Miracle', 'mir-a-cle', 'something wonderful that feels almost impossible'],
  ['Mission', 'mis-sion', 'an important job or goal'],
  ['Moonlight', 'moon-light', 'soft light from the moon'],
  ['Nature', 'na-ture', 'plants, animals, sky, water, and the world outside'],
  ['Notice', 'no-tice', 'seeing or paying attention to something'],
  ['Nurture', 'nur-ture', 'helping something grow with care'],
  ['Ocean', 'o-cean', 'a huge body of salty water'],
  ['Open', 'o-pen', 'ready to let things in or begin'],
  ['Original', 'o-rig-i-nal', 'new and made in your own way'],
  ['Peace', 'peace', 'a calm feeling without fighting'],
  ['Picture', 'pic-ture', 'an image you can see or imagine'],
  ['Plan', 'plan', 'an idea for what to do next'],
  ['Practice', 'prac-tice', 'doing something again to get better'],
  ['Promise', 'prom-ise', 'saying you will do something and meaning it'],
  ['Question', 'ques-tion', 'words you ask when you want to know more'],
  ['Quick', 'quick', 'moving or happening fast'],
  ['Rainbow', 'rain-bow', 'an arc of colors in the sky'],
  ['Reach', 'reach', 'stretching toward something'],
  ['Reflect', 're-flect', 'thinking carefully or bouncing back light'],
  ['Relax', 're-lax', 'letting your body and mind feel calm'],
  ['Remember', 're-mem-ber', 'keeping something in your mind'],
  ['Repair', 're-pair', 'fixing something that is broken'],
  ['Ripple', 'rip-ple', 'a small wave on water'],
  ['Roam', 'roam', 'wandering around to explore'],
  ['Root', 'root', 'the part of a plant that grows underground'],
  ['Secret', 'se-cret', 'something kept private or hidden'],
  ['Seed', 'seed', 'a tiny beginning of a plant'],
  ['Shelter', 'shel-ter', 'a safe place that protects you'],
  ['Signal', 'sig-nal', 'a sign or sound that sends a message'],
  ['Skill', 'skill', 'something you learn to do well'],
  ['Smile', 'smile', 'a happy look you make with your mouth'],
  ['Solve', 'solve', 'finding the answer to a problem'],
  ['Sound', 'sound', 'something you can hear'],
  ['Spirit', 'spir-it', 'the brave or lively feeling inside someone'],
  ['Sprout', 'sprout', 'a tiny new plant beginning to grow'],
  ['Story', 'sto-ry', 'a tale with people, places, or events'],
  ['Stretch', 'stretch', 'reaching your body or ideas farther'],
  ['Surprise', 'sur-prise', 'something unexpected that happens'],
  ['Team', 'team', 'people working together'],
  ['Thankful', 'thank-ful', 'feeling glad for someone or something'],
  ['Treasure', 'treas-ure', 'something special and worth caring for'],
  ['Twinkle', 'twin-kle', 'shining with tiny flashes'],
  ['Understand', 'un-der-stand', 'knowing what something means'],
  ['Valley', 'val-ley', 'low land between hills or mountains'],
  ['Voice', 'voice', 'the sound you make when you speak or sing'],
  ['Wander', 'wan-der', 'walking around without rushing'],
  ['Welcome', 'wel-come', 'making someone feel wanted and included'],
  ['Whisper', 'whis-per', 'speaking very softly'],
  ['Wish', 'wish', 'something you hope for'],
  ['World', 'world', 'the earth and all the people and places on it'],
  ['Zoom', 'zoom', 'moving very fast'],
  ['Admire', 'ad-mire', 'looking at someone or something with respect'],
  ['Artist', 'art-ist', 'a person who makes art'],
  ['Belong', 'be-long', 'feeling accepted and part of something'],
  ['Blink', 'blink', 'closing and opening your eyes quickly'],
  ['Blossom', 'blos-som', 'a flower opening or someone growing beautifully'],
  ['Boost', 'boost', 'helping something rise or improve'],
  ['Brainy', 'brain-y', 'good at thinking and learning'],
  ['Bubble', 'bub-ble', 'a round pocket of air or happy feeling'],
  ['Captain', 'cap-tain', 'a leader of a team, ship, or group'],
  ['Carefree', 'care-free', 'happy and not worried'],
  ['Clap', 'clap', 'hitting your hands together to make a sound'],
  ['Clear', 'clear', 'easy to see, hear, or understand'],
  ['Cloud', 'cloud', 'a soft-looking shape in the sky made of tiny water drops'],
  ['Color', 'col-or', 'what makes things look red, blue, yellow, and more'],
  ['Comet', 'com-et', 'a bright space object with a glowing tail'],
  ['Compassion', 'com-pas-sion', 'caring when someone else is hurting'],
  ['Confident', 'con-fi-dent', 'believing you can try and do your best'],
  ['Craft', 'craft', 'making something carefully with your hands'],
  ['Delicate', 'del-i-cate', 'needing gentle care'],
  ['Dependable', 'de-pend-a-ble', 'able to be trusted to help'],
  ['Doodle', 'doo-dle', 'a small drawing made for fun'],
  ['Drift', 'drift', 'moving slowly and gently'],
  ['Earnest', 'ear-nest', 'serious and honest in a kind way'],
  ['Encourage', 'en-cour-age', 'helping someone feel brave enough to try'],
  ['Equal', 'e-qual', 'the same in value or fairness'],
  ['Fantastic', 'fan-tas-tic', 'very wonderful or exciting'],
  ['Favorite', 'fa-vor-ite', 'liked the most'],
  ['Fearless', 'fear-less', 'very brave when facing something scary'],
  ['Flexible', 'flex-i-ble', 'able to bend or change easily'],
  ['Galaxy', 'gal-ax-y', 'a huge group of stars in space'],
  ['Gift', 'gift', 'something given to show care or kindness'],
  ['Glad', 'glad', 'happy or pleased'],
  ['Glow', 'glow', 'shining with a soft light'],
  ['Guide', 'guide', 'someone or something that shows the way'],
  ['Habit', 'hab-it', 'something you do again and again'],
  ['Imagineer', 'i-mag-in-eer', 'someone who builds ideas from imagination'],
  ['Jewel', 'jew-el', 'a shiny precious stone'],
  ['Kindle', 'kin-dle', 'starting a small light, idea, or feeling'],
  ['Leader', 'lead-er', 'someone who helps guide others'],
  ['Limit', 'lim-it', 'a line or point where something stops'],
  ['Lovely', 'love-ly', 'very nice, beautiful, or pleasant'],
  ['Mindful', 'mind-ful', 'paying careful attention to now'],
  ['Nest', 'nest', 'a safe home built by a bird'],
  ['Peacekeeper', 'peace-keep-er', 'someone who helps people stay calm and fair'],
  ['Pioneer', 'pi-o-neer', 'someone who tries a new path first'],
  ['Radiate', 'ra-di-ate', 'sending out light, warmth, or happiness'],
  ['Resourceful', 're-source-ful', 'good at finding clever ways to solve problems'],
  ['Rhythm', 'rhyth-m', 'a pattern of beats or movement'],
  ['Sincere', 'sin-cere', 'honest and true in what you say'],
  ['Soothe', 'soothe', 'helping someone feel calm or better'],
  ['Starlight', 'star-light', 'light that comes from stars'],
  ['Thrive', 'thrive', 'growing strong and doing well'],
  ['Together', 'to-geth-er', 'with each other as a group'],
  ['Trail', 'trail', 'a path to follow'],
  ['Victory', 'vic-to-ry', 'success after trying hard'],
  ['Whimsy', 'whim-sy', 'playful imagination and fun'],
  ['Worthy', 'wor-thy', 'important and deserving care'],
  ['Xylophone', 'xy-lo-phone', 'a musical instrument with bars you tap'],
  ['Yearn', 'yearn', 'wanting something very much'],
  ['Zeal', 'zeal', 'great energy and excitement for something'],
].map(([word, say, description]) => [word, makeWordActivity(word, say, description)]));


const bubbleSteps = [
  { className: 'thought-dot-one', delay: 0 },
  { className: 'thought-dot-two', delay: 400 },
  { className: 'thought-dot-three', delay: 700 },
  { className: 'thought-main', delay: 900, isMain: true }
];

let bubbleTimers = [];
let activityRevealTimer;
let activityPulseTimers = [];
let drawPromptTimer;
let wordPromptHideTimer;
const wordRolloverHourUtc = 2;
const activityRevealDelayAfterMainBubble = 0;
const activityPulseDelaysAfterMainBubble = [3000, 8000, 13000];
const wordPromptHideDelay = 10000;
const drawPromptDelayAfterMainBubble = 23000;
const minimumRepeatGapDays = 50;
const wordOrder = createShuffledWordOrder(Object.keys(wordActivities), 7282026);
const drawingState = {
  color: '#246aa8',
  brushSize: 12,
  isDrawing: false,
  lastPoint: null,
  history: [],
  maxHistory: 18
};

if (wordOrder.length <= minimumRepeatGapDays) {
  console.warn('Add more words to keep the 50-day no-repeat rule working.');
}

function createSeededRandom(seed) {
  let state = seed >>> 0;

  return function random() {
    state += 0x6D2B79F5;
    let value = state;

    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);

    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

function createShuffledWordOrder(words, seed) {
  const shuffledWords = [...words];
  const random = createSeededRandom(seed);

  for (let index = shuffledWords.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    const currentWord = shuffledWords[index];

    shuffledWords[index] = shuffledWords[swapIndex];
    shuffledWords[swapIndex] = currentWord;
  }

  return shuffledWords;
}

function getTodaySeed() {
  const now = new Date();
  const shiftedTime = now.getTime() - wordRolloverHourUtc * 60 * 60 * 1000;
  return Math.floor(shiftedTime / 86400000);
}

function pickDailyWord() {
  const word = wordOrder[getTodaySeed() % wordOrder.length];
  return wordActivities[word];
}

function getMsUntilNextWordRollover() {
  const now = new Date();
  const nextRollover = new Date(now);

  nextRollover.setUTCHours(wordRolloverHourUtc, 0, 0, 0);

  if (now >= nextRollover) {
    nextRollover.setUTCDate(nextRollover.getUTCDate() + 1);
  }

  return nextRollover.getTime() - now.getTime();
}

function setWordPromptVisible(isVisible) {
  const prompt = document.querySelector('.word-prompt');
  const promptStage = document.querySelector('.word-prompt-stage');

  if (prompt) {
    prompt.hidden = !isVisible;
  }

  if (promptStage) {
    promptStage.hidden = !isVisible;
  }
}

function scheduleWordPromptHide() {
  clearTimeout(wordPromptHideTimer);

  wordPromptHideTimer = setTimeout(() => {
    setWordPromptVisible(false);
  }, wordPromptHideDelay);
}

function createAudioButtonLabel(word) {
  return `Hear ${word} pronounced`;
}

function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();

  return voices.find((voice) => voice.lang === 'en-ZA')
    || voices.find((voice) => voice.lang === 'en-GB')
    || voices.find((voice) => voice.lang === 'en-US')
    || voices.find((voice) => voice.lang.startsWith('en'))
    || null;
}

function speakDailyWord() {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    return;
  }

  const wordData = pickDailyWord();
  const utterance = new SpeechSynthesisUtterance(wordData.word);
  const voice = getPreferredVoice();

  utterance.lang = voice ? voice.lang : 'en';
  utterance.rate = 0.82;
  utterance.pitch = 1.12;

  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function clearThoughtBubbles(layer) {
  bubbleTimers.forEach((timer) => clearTimeout(timer));
  bubbleTimers = [];
  clearTimeout(activityRevealTimer);
  clearActivityPulseTimers();
  clearTimeout(drawPromptTimer);
  setDrawPromptVisible(false);
  hideActivityStrip();
  layer.closest('.hero-scene')?.classList.remove('word-active');
  setWordPromptVisible(true);
  layer.replaceChildren();
}

function createBubble(step, wordData) {
  const bubble = document.createElement('div');
  bubble.className = `thought-bubble ${step.className}`;

  if (step.isMain) {
    bubble.innerHTML = `
      <div class="thought-content">
        <p class="thought-label">Word of the day</p>
        <div class="word-row">
          <h1 class="thought-word">${wordData.word}</h1>
          <button class="audio-button word-audio" type="button" aria-label="${createAudioButtonLabel(wordData.word)}">
            <svg class="audio-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path class="audio-speaker" d="M4 9v6h4l5 4V5L8 9H4z" />
              <path class="audio-wave wave-one" d="M16 9.5c.8.7 1.2 1.5 1.2 2.5s-.4 1.8-1.2 2.5" />
              <path class="audio-wave wave-two" d="M18.4 7.2c1.4 1.3 2.1 2.9 2.1 4.8s-.7 3.5-2.1 4.8" />
            </svg>
          </button>
        </div>
        <p class="thought-description">${wordData.description}</p>
      </div>
    `;
  }

  return bubble;
}

function updateVisibleWord() {
  const content = document.querySelector('.thought-content');

  updateActivityStrip({ reveal: isActivityStripVisible() });
  updateDrawingWord();

  if (!content) {
    return;
  }

  const wordData = pickDailyWord();
  content.querySelector('.thought-word').textContent = wordData.word;
  content.querySelector('.thought-description').textContent = wordData.description;
  content.querySelector('.word-audio')?.setAttribute('aria-label', createAudioButtonLabel(wordData.word));
}

function getActivityElements() {
  return {
    steps: document.querySelector('.steps'),
    say: document.getElementById('sayActivity'),
    use: document.getElementById('useActivity'),
    try: document.getElementById('tryActivity'),
    draw: document.getElementById('drawActivity')
  };
}

function isActivityStripVisible() {
  const { steps } = getActivityElements();
  return Boolean(steps && steps.classList.contains('activities-visible'));
}

function hideActivityStrip() {
  const { steps } = getActivityElements();

  if (steps) {
    steps.classList.remove('activities-visible');
  }
}

function clearActivityPulseTimers() {
  activityPulseTimers.forEach((timer) => clearTimeout(timer));
  activityPulseTimers = [];
  document.querySelectorAll('.step-card.is-pulsing').forEach((card) => {
    card.classList.remove('is-pulsing');
  });
}

function pulseActivityCard(card) {
  if (!card) {
    return;
  }

  card.classList.remove('is-pulsing');
  void card.offsetWidth;
  card.classList.add('is-pulsing');
}

function scheduleActivityPulses(startDelay = 0) {
  const cards = Array.from(document.querySelectorAll('.activity-card')).slice(0, 3);

  clearActivityPulseTimers();

  cards.forEach((card, index) => {
    const timer = setTimeout(() => {
      pulseActivityCard(card);
    }, startDelay + activityPulseDelaysAfterMainBubble[index]);

    activityPulseTimers.push(timer);
  });
}

function updateActivityStrip({ reveal = false } = {}) {
  const wordData = pickDailyWord();
  const activityElements = getActivityElements();

  if (!activityElements.say || !activityElements.use || !activityElements.try || !activityElements.draw) {
    return;
  }

  activityElements.say.textContent = wordData.say;
  activityElements.use.textContent = wordData.use;
  activityElements.try.textContent = wordData.try;
  activityElements.draw.textContent = wordData.draw;
  document.querySelector('.activity-audio')?.setAttribute('aria-label', createAudioButtonLabel(wordData.word));

  if (activityElements.steps) {
    activityElements.steps.classList.toggle('activities-visible', reveal);
  }
}

function getDrawingElements() {
  return {
    screen: document.querySelector('.drawing-screen'),
    canvas: document.getElementById('drawingCanvas'),
    word: document.getElementById('drawingWord'),
    close: document.querySelector('.drawing-close'),
    swatches: document.querySelectorAll('.color-swatch'),
    brush: document.getElementById('brushSize'),
    undo: document.querySelector('.drawing-undo'),
    clear: document.querySelector('.drawing-clear'),
    open: document.querySelector('.draw-card-button'),
    prompt: document.querySelector('.draw-tap-prompt')
  };
}

function setDrawPromptVisible(isVisible) {
  const { prompt } = getDrawingElements();

  if (prompt) {
    prompt.hidden = !isVisible;
  }
}

function scheduleDrawPrompt(startDelay = 0) {
  clearTimeout(drawPromptTimer);

  drawPromptTimer = setTimeout(() => {
    const { screen } = getDrawingElements();

    if (!screen || screen.hidden) {
      setDrawPromptVisible(true);
    }
  }, startDelay + drawPromptDelayAfterMainBubble);
}

function prepareDrawingContext(context) {
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = drawingState.color;
  context.lineWidth = drawingState.brushSize;
}

function clearCanvas(context, canvas) {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.restore();
}

function saveDrawingSnapshot({ replace = false } = {}) {
  const { canvas, undo } = getDrawingElements();

  if (!canvas) {
    return;
  }

  const snapshot = canvas.toDataURL('image/png');

  if (replace && drawingState.history.length) {
    drawingState.history[drawingState.history.length - 1] = snapshot;
  } else {
    drawingState.history.push(snapshot);
  }

  if (drawingState.history.length > drawingState.maxHistory) {
    drawingState.history.shift();
  }

  if (undo) {
    undo.disabled = drawingState.history.length <= 1;
  }
}

function restoreDrawingSnapshot(snapshot) {
  const { canvas } = getDrawingElements();

  if (!canvas || !snapshot) {
    return;
  }

  const context = canvas.getContext('2d');
  const image = new Image();

  image.onload = () => {
    clearCanvas(context, canvas);
    context.drawImage(image, 0, 0, canvas.clientWidth, canvas.clientHeight);
    prepareDrawingContext(context);
  };

  image.src = snapshot;
}

function resizeDrawingCanvas({ preserve = true } = {}) {
  const { canvas } = getDrawingElements();

  if (!canvas) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * pixelRatio));
  const height = Math.max(1, Math.round(rect.height * pixelRatio));

  if (canvas.width === width && canvas.height === height) {
    prepareDrawingContext(canvas.getContext('2d'));
    return;
  }

  const snapshot = preserve && canvas.width && canvas.height ? canvas.toDataURL('image/png') : null;
  const context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  prepareDrawingContext(context);

  if (snapshot) {
    const image = new Image();

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.clientWidth, canvas.clientHeight);
      saveDrawingSnapshot({ replace: true });
    };

    image.src = snapshot;
  } else if (!drawingState.history.length) {
    saveDrawingSnapshot();
  }
}

function getCanvasPoint(event, canvas) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function drawLineTo(point) {
  const { canvas } = getDrawingElements();

  if (!canvas || !drawingState.lastPoint) {
    return;
  }

  const context = canvas.getContext('2d');

  prepareDrawingContext(context);
  context.beginPath();
  context.moveTo(drawingState.lastPoint.x, drawingState.lastPoint.y);
  context.lineTo(point.x, point.y);
  context.stroke();
  drawingState.lastPoint = point;
}

function drawDot(point) {
  const { canvas } = getDrawingElements();

  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');

  prepareDrawingContext(context);
  context.beginPath();
  context.fillStyle = drawingState.color;
  context.arc(point.x, point.y, drawingState.brushSize / 2, 0, Math.PI * 2);
  context.fill();
}

function beginDrawing(event) {
  const { canvas } = getDrawingElements();

  if (!canvas || event.button > 0) {
    return;
  }

  event.preventDefault();
  resizeDrawingCanvas();
  canvas.setPointerCapture?.(event.pointerId);
  drawingState.isDrawing = true;
  drawingState.lastPoint = getCanvasPoint(event, canvas);
  drawDot(drawingState.lastPoint);
}

function continueDrawing(event) {
  const { canvas } = getDrawingElements();

  if (!canvas || !drawingState.isDrawing) {
    return;
  }

  event.preventDefault();
  drawLineTo(getCanvasPoint(event, canvas));
}

function finishDrawing(event) {
  const { canvas } = getDrawingElements();

  if (!canvas || !drawingState.isDrawing) {
    return;
  }

  event.preventDefault();
  drawingState.isDrawing = false;
  drawingState.lastPoint = null;
  canvas.releasePointerCapture?.(event.pointerId);
  saveDrawingSnapshot();
}

function updateDrawingWord() {
  const { word, open } = getDrawingElements();
  const wordData = pickDailyWord();

  if (word) {
    word.textContent = wordData.word;
  }

  if (open) {
    open.setAttribute('aria-label', `Open drawing board for ${wordData.word}`);
  }
}

function openDrawingScreen() {
  const { screen, close } = getDrawingElements();

  if (!screen) {
    return;
  }

  clearTimeout(drawPromptTimer);
  setDrawPromptVisible(false);
  updateDrawingWord();
  screen.hidden = false;
  document.body.classList.add('drawing-open');

  requestAnimationFrame(() => {
    resizeDrawingCanvas();
    close?.focus();
  });
}

function closeDrawingScreen() {
  const { screen, open } = getDrawingElements();

  if (!screen) {
    return;
  }

  screen.hidden = true;
  document.body.classList.remove('drawing-open');
  open?.focus();
}

function setupDrawingBoard() {
  const { canvas, close, swatches, brush, undo, clear, open } = getDrawingElements();

  if (!canvas) {
    return;
  }

  canvas.addEventListener('pointerdown', beginDrawing);
  canvas.addEventListener('pointermove', continueDrawing);
  canvas.addEventListener('pointerup', finishDrawing);
  canvas.addEventListener('pointercancel', finishDrawing);
  canvas.addEventListener('pointerleave', finishDrawing);

  open?.addEventListener('click', openDrawingScreen);
  close?.addEventListener('click', closeDrawingScreen);

  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      drawingState.color = swatch.dataset.color || drawingState.color;
      swatches.forEach((button) => button.classList.toggle('is-selected', button === swatch));
      prepareDrawingContext(canvas.getContext('2d'));
    });
  });

  brush?.addEventListener('input', () => {
    drawingState.brushSize = Number(brush.value);
    prepareDrawingContext(canvas.getContext('2d'));
  });

  undo?.addEventListener('click', () => {
    if (drawingState.history.length <= 1) {
      return;
    }

    drawingState.history.pop();
    restoreDrawingSnapshot(drawingState.history[drawingState.history.length - 1]);
    undo.disabled = drawingState.history.length <= 1;
  });

  clear?.addEventListener('click', () => {
    clearCanvas(canvas.getContext('2d'), canvas);
    saveDrawingSnapshot();
  });

  window.addEventListener('resize', () => {
    if (!getDrawingElements().screen?.hidden) {
      resizeDrawingCanvas();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !getDrawingElements().screen?.hidden) {
      closeDrawingScreen();
    }
  });

  updateDrawingWord();
  setDrawPromptVisible(false);

  if (undo) {
    undo.disabled = true;
  }
}

function showThoughtSequence() {
  const layer = document.querySelector('.thought-layer');

  if (!layer) {
    return;
  }

  const wordData = pickDailyWord();
  clearTimeout(wordPromptHideTimer);
  clearThoughtBubbles(layer);
  layer.closest('.hero-scene')?.classList.add('word-active');
  setWordPromptVisible(false);
  updateActivityStrip({ reveal: false });

  bubbleSteps.forEach((step) => {
    const timer = setTimeout(() => {
      layer.appendChild(createBubble(step, wordData));
    }, step.delay);

    bubbleTimers.push(timer);
  });

  const mainBubble = bubbleSteps.find((step) => step.isMain);
  const revealDelay = (mainBubble ? mainBubble.delay : 0) + activityRevealDelayAfterMainBubble;

  activityRevealTimer = setTimeout(() => {
    updateActivityStrip({ reveal: true });
  }, revealDelay);

  scheduleActivityPulses(revealDelay);
  scheduleDrawPrompt(revealDelay);
}

function scheduleDailyWordRefresh() {
  setTimeout(() => {
    updateVisibleWord();
    scheduleDailyWordRefresh();
  }, getMsUntilNextWordRollover());
}

window.addEventListener('DOMContentLoaded', () => {
  const heroScene = document.querySelector('.hero-scene');

  updateActivityStrip({ reveal: false });
  scheduleWordPromptHide();

  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('.audio-button')) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      speakDailyWord();
    }
  }, true);

  if (heroScene) {
    heroScene.addEventListener('click', (event) => {
      if (!event.target.closest('.audio-button')) {
        showThoughtSequence();
      }
    });
  }

  setupDrawingBoard();
  scheduleDailyWordRefresh();
});
