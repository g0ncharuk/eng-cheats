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
  { v1: 'be', v2: 'was/were', v3: 'been', ua: 'бути' },
  { v1: 'have', v2: 'had', v3: 'had', ua: 'мати' },
  { v1: 'do', v2: 'did', v3: 'done', ua: 'робити' },
  { v1: 'go', v2: 'went', v3: 'gone', ua: 'йти' },
  { v1: 'get', v2: 'got', v3: 'got', ua: 'отримати' },
  { v1: 'make', v2: 'made', v3: 'made', ua: 'робити' },
  { v1: 'say', v2: 'said', v3: 'said', ua: 'сказати' },
  { v1: 'know', v2: 'knew', v3: 'known', ua: 'знати' },
  { v1: 'take', v2: 'took', v3: 'taken', ua: 'брати' },
  { v1: 'come', v2: 'came', v3: 'come', ua: 'приходити' },
  { v1: 'see', v2: 'saw', v3: 'seen', ua: 'бачити' },
  { v1: 'think', v2: 'thought', v3: 'thought', ua: 'думати' },
  { v1: 'give', v2: 'gave', v3: 'given', ua: 'давати' },
  { v1: 'find', v2: 'found', v3: 'found', ua: 'знаходити' },
  { v1: 'tell', v2: 'told', v3: 'told', ua: 'казати' },
  { v1: 'write', v2: 'wrote', v3: 'written', ua: 'писати' },
  { v1: 'run', v2: 'ran', v3: 'run', ua: 'бігти' },
  { v1: 'read', v2: 'read', v3: 'read', ua: 'читати' },
  { v1: 'speak', v2: 'spoke', v3: 'spoken', ua: 'говорити' },
  { v1: 'buy', v2: 'bought', v3: 'bought', ua: 'купити' },
  { v1: 'send', v2: 'sent', v3: 'sent', ua: 'надіслати' },
  { v1: 'build', v2: 'built', v3: 'built', ua: 'будувати' },
  { v1: 'put', v2: 'put', v3: 'put', ua: 'класти' },
  { v1: 'set', v2: 'set', v3: 'set', ua: 'встановити' },
  { v1: 'keep', v2: 'kept', v3: 'kept', ua: 'тримати' },
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
