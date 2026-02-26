import type { Comparison, IrregularVerb, Tip } from './types'

export const comparisons: Comparison[] = [
  {
    title: 'Present Simple vs Present Continuous',
    description: 'Simple = постійне, звичка | Continuous = зараз, тимчасово',
    examples: [
      { text: 'I **work** from home.', note: 'Завжди (звичка).' },
      { text: 'I **am working** from home today.', note: 'Тільки сьогодні.' },
    ],
    tip: 'Подумай: це ЗАВЖДИ так чи тільки ЗАРАЗ/тимчасово?',
  },
  {
    title: 'Past Simple vs Present Perfect',
    description: 'Past Simple = конкретний час у минулому | Present Perfect = звʼязок з тепер',
    examples: [
      { text: 'I **visited** Japan **in 2019**.', note: 'Конкретний рік = Past Simple.' },
      { text: 'I **have visited** Japan.', note: 'Коли — не важливо, є досвід = Pres. Perfect.' },
    ],
    tip: 'Є конкретний час (yesterday, in 2020, ago)? → Past Simple. Нема? → Present Perfect.',
  },
  {
    title: 'Present Perfect vs Pres. Perfect Continuous',
    description: 'Perfect = результат/кількість | Perfect Cont. = процес/тривалість',
    examples: [
      { text: 'I **have written** 3 emails.', note: 'Результат: 3 штуки.' },
      { text: 'I **have been writing** emails all morning.', note: 'Процес: весь ранок.' },
    ],
    tip: '«Скільки?» → Perfect. «Як довго?» → Perfect Continuous.',
  },
  {
    title: 'Will vs Going to',
    description: 'Will = рішення зараз, невпевнений прогноз | Going to = план, очевидний прогноз',
    examples: [
      { text: 'I **will** have tea.', note: 'Щойно вирішив.' },
      { text: 'I **am going to** buy a car.', note: 'Давно планую.' },
      { text: 'Look at the clouds — it **is going to** rain.', note: 'Очевидно з ознак.' },
    ],
    tip: 'Вирішив ЗАРАЗ → will. Планував РАНІШЕ → going to.',
  },
  {
    title: 'Past Simple vs Past Continuous',
    description: 'Simple = коротка/завершена дія | Continuous = фон/тривала дія',
    examples: [
      { text: 'The phone **rang** while I **was cooking**.', note: 'Коротка перерива тривалу.' },
    ],
    tip: 'Фон (довга дія) = Continuous. Подія (коротка) = Simple. Правило: when + Simple, while + Continuous.',
  },
  {
    title: 'Since vs For',
    description: 'Since = з конкретного МОМЕНТУ | For = протягом ПЕРІОДУ',
    examples: [
      { text: "I've lived here **since** 2020.", note: 'З конкретного року.' },
      { text: "I've lived here **for** 5 years.", note: 'Протягом 5 років.' },
    ],
    tip: 'since + дата/подія (since Monday, since I was born). for + відрізок часу (for 2 hours, for ages).',
  },
]

export const irregularVerbs: IrregularVerb[] = [
  // ==================== BASIC (25) ====================
  { v1: 'be', v2: 'was/were', v3: 'been', ua: 'бути', difficulty: 'basic' },
  { v1: 'have', v2: 'had', v3: 'had', ua: 'мати', difficulty: 'basic' },
  { v1: 'do', v2: 'did', v3: 'done', ua: 'робити', difficulty: 'basic' },
  { v1: 'go', v2: 'went', v3: 'gone', ua: 'йти', difficulty: 'basic' },
  { v1: 'get', v2: 'got', v3: 'got', ua: 'отримати', difficulty: 'basic' },
  { v1: 'make', v2: 'made', v3: 'made', ua: 'робити', difficulty: 'basic' },
  { v1: 'say', v2: 'said', v3: 'said', ua: 'сказати', difficulty: 'basic' },
  { v1: 'know', v2: 'knew', v3: 'known', ua: 'знати', difficulty: 'basic' },
  { v1: 'take', v2: 'took', v3: 'taken', ua: 'брати', difficulty: 'basic' },
  { v1: 'come', v2: 'came', v3: 'come', ua: 'приходити', difficulty: 'basic' },
  { v1: 'see', v2: 'saw', v3: 'seen', ua: 'бачити', difficulty: 'basic' },
  { v1: 'think', v2: 'thought', v3: 'thought', ua: 'думати', difficulty: 'basic' },
  { v1: 'give', v2: 'gave', v3: 'given', ua: 'давати', difficulty: 'basic' },
  { v1: 'find', v2: 'found', v3: 'found', ua: 'знаходити', difficulty: 'basic' },
  { v1: 'tell', v2: 'told', v3: 'told', ua: 'казати', difficulty: 'basic' },
  { v1: 'write', v2: 'wrote', v3: 'written', ua: 'писати', difficulty: 'basic' },
  { v1: 'run', v2: 'ran', v3: 'run', ua: 'бігти', difficulty: 'basic' },
  { v1: 'read', v2: 'read', v3: 'read', ua: 'читати', difficulty: 'basic' },
  { v1: 'speak', v2: 'spoke', v3: 'spoken', ua: 'говорити', difficulty: 'basic' },
  { v1: 'buy', v2: 'bought', v3: 'bought', ua: 'купити', difficulty: 'basic' },
  { v1: 'send', v2: 'sent', v3: 'sent', ua: 'надіслати', difficulty: 'basic' },
  { v1: 'build', v2: 'built', v3: 'built', ua: 'будувати', difficulty: 'basic' },
  { v1: 'put', v2: 'put', v3: 'put', ua: 'класти', difficulty: 'basic' },
  { v1: 'set', v2: 'set', v3: 'set', ua: 'встановити', difficulty: 'basic' },
  { v1: 'keep', v2: 'kept', v3: 'kept', ua: 'тримати', difficulty: 'basic' },
  // ==================== INTERMEDIATE (15) ====================
  { v1: 'eat', v2: 'ate', v3: 'eaten', ua: 'їсти', difficulty: 'intermediate' },
  { v1: 'drink', v2: 'drank', v3: 'drunk', ua: 'пити', difficulty: 'intermediate' },
  { v1: 'drive', v2: 'drove', v3: 'driven', ua: 'водити', difficulty: 'intermediate' },
  { v1: 'begin', v2: 'began', v3: 'begun', ua: 'починати', difficulty: 'intermediate' },
  { v1: 'break', v2: 'broke', v3: 'broken', ua: 'ламати', difficulty: 'intermediate' },
  { v1: 'choose', v2: 'chose', v3: 'chosen', ua: 'обирати', difficulty: 'intermediate' },
  { v1: 'fall', v2: 'fell', v3: 'fallen', ua: 'падати', difficulty: 'intermediate' },
  { v1: 'feel', v2: 'felt', v3: 'felt', ua: 'відчувати', difficulty: 'intermediate' },
  { v1: 'forget', v2: 'forgot', v3: 'forgotten', ua: 'забувати', difficulty: 'intermediate' },
  { v1: 'grow', v2: 'grew', v3: 'grown', ua: 'рости', difficulty: 'intermediate' },
  { v1: 'hear', v2: 'heard', v3: 'heard', ua: 'чути', difficulty: 'intermediate' },
  { v1: 'leave', v2: 'left', v3: 'left', ua: 'залишати', difficulty: 'intermediate' },
  { v1: 'lose', v2: 'lost', v3: 'lost', ua: 'губити', difficulty: 'intermediate' },
  { v1: 'meet', v2: 'met', v3: 'met', ua: 'зустрічати', difficulty: 'intermediate' },
  { v1: 'pay', v2: 'paid', v3: 'paid', ua: 'платити', difficulty: 'intermediate' },
  // ==================== ADVANCED (15) ====================
  { v1: 'arise', v2: 'arose', v3: 'arisen', ua: 'виникати', difficulty: 'advanced' },
  { v1: 'bear', v2: 'bore', v3: 'borne', ua: 'нести/терпіти', difficulty: 'advanced' },
  { v1: 'bind', v2: 'bound', v3: 'bound', ua: "зв'язувати", difficulty: 'advanced' },
  { v1: 'blow', v2: 'blew', v3: 'blown', ua: 'дути', difficulty: 'advanced' },
  { v1: 'breed', v2: 'bred', v3: 'bred', ua: 'розводити', difficulty: 'advanced' },
  { v1: 'cast', v2: 'cast', v3: 'cast', ua: 'кидати', difficulty: 'advanced' },
  { v1: 'creep', v2: 'crept', v3: 'crept', ua: 'повзти', difficulty: 'advanced' },
  { v1: 'flee', v2: 'fled', v3: 'fled', ua: 'тікати', difficulty: 'advanced' },
  { v1: 'forbid', v2: 'forbade', v3: 'forbidden', ua: 'забороняти', difficulty: 'advanced' },
  { v1: 'grind', v2: 'ground', v3: 'ground', ua: 'молоти', difficulty: 'advanced' },
  { v1: 'leap', v2: 'leapt', v3: 'leapt', ua: 'стрибати', difficulty: 'advanced' },
  { v1: 'overcome', v2: 'overcame', v3: 'overcome', ua: 'долати', difficulty: 'advanced' },
  { v1: 'seek', v2: 'sought', v3: 'sought', ua: 'шукати', difficulty: 'advanced' },
  { v1: 'sow', v2: 'sowed', v3: 'sown', ua: 'сіяти', difficulty: 'advanced' },
  { v1: 'withdraw', v2: 'withdrew', v3: 'withdrawn', ua: 'відкликати', difficulty: 'advanced' },
]

export const tips: Tip[] = [
  {
    title: 'Simple = фотографія \u{1F4F8}',
    body: 'Просто щось відбувається (чи відбулось, чи відбудеться). Без акценту на процесі. Один кадр.',
  },
  {
    title: 'Continuous = відео \u{1F3A5}',
    body: 'Дія в процесі. Завжди є be + V-ing. Уяви камеру, що знімає дію прямо зараз — це Continuous.',
  },
  {
    title: 'Perfect = чек-лист \u{1F3C6}',
    body: 'Дія завершена з результатом. Звʼязок між двома моментами. «Скільки зроблено? Що вже є?»',
  },
  {
    title: 'Perfect Continuous = секундомір ⏱️',
    body: 'Як довго щось тривало? Комбо: have + been + V-ing. Рідко вживається — не парся.',
  },
  {
    title: 'Конструктор формул:',
    body: 'Past → did / was / had\nPresent → do / am / have\nFuture → will + [все те ж саме]\nПросто міняєш «шапку», решта працює однаково!',
  },
  {
    title: '80/20 правило:',
    body: '90% розмовної мови — це 5 часів: Present Simple, Present Continuous, Past Simple, Present Perfect, Future Simple. Решту додавай поступово.',
  },
  {
    title: 'Stative verbs (дієслова стану):',
    body: 'НЕ вживаються в Continuous: know, like, love, want, need, believe, understand, belong, prefer, mean, seem, hear.',
  },
  {
    title: 'Маркери = чіт-код:',
    body: 'yesterday/ago → Past Simple\nalready/yet/just → Present Perfect\nnow/right now → Present Continuous\nby + час → Future Perfect\nfor/since → Perfect часи',
  },
]
