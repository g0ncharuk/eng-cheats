import type { TenseData } from './types'

export const tenses: TenseData[] = [
  // ==================== PRESENT ====================
  {
    time: 'present',
    aspect: 'simple',
    icon: '\u{1F4CD}',
    name: 'Present Simple',
    nameUa: 'Теперішній простий',
    formula: {
      positive: 'S + V(s/es)',
      negative: "S + don't/doesn't + V",
      question: 'Do/Does + S + V?',
    },
    explain: {
      analogy:
        '«Я працюю з дому» (звичка), «Сонце встає на сході» (факт).',
      description:
        "Описує щось постійне, регулярне або загальновідоме. Не прив'язане до конкретного моменту. Також для розкладів: «Потяг відправляється о 9» — навіть якщо це майбутнє, бо це розклад.",
    },
    usage:
      'звички, факти, розклади, загальні істини, почуття/стани',
    examples: [
      { en: 'I **work** from home.', ua: 'Я працюю з дому.' },
      { en: "She **doesn't like** coffee.", ua: 'Вона не любить каву.' },
      { en: 'The train **leaves** at 9 AM.', ua: 'Потяг відправляється о 9.' },
      { en: 'Water **boils** at 100°C.', ua: 'Вода кипить при 100°C.' },
    ],
    mistakes: [
      { wrong: "He don't like it.", right: "He doesn't like it.", note: "3-я особа = doesn't" },
      { wrong: 'She work here.', right: 'She works here.', note: 'he/she/it → +s' },
    ],
    markers: ['always', 'usually', 'often', 'every day', 'never', 'sometimes', 'rarely'],
  },
  {
    time: 'present',
    aspect: 'continuous',
    icon: '\u{1F504}',
    name: 'Present Continuous',
    nameUa: 'Теперішній тривалий',
    formula: {
      positive: 'S + am/is/are + V-ing',
      negative: 'S + am/is/are + not + V-ing',
      question: 'Am/Is/Are + S + V-ing?',
    },
    explain: {
      analogy: '«Я зараз пишу код» — дія прямо в цей момент.',
      description:
        "Уяви, що хтось знімає тебе на камеру — те, що він бачить, і є Continuous. Також для тимчасових ситуацій («Цього тижня я працюю з офісу») та запланованого майбутнього («Я завтра лечу на Кіпр»).",
    },
    usage:
      'дія прямо зараз, тимчасова ситуація, заплановане майбутнє, зміни/тренди',
    examples: [
      { en: 'I **am coding** right now.', ua: 'Я зараз пишу код.' },
      {
        en: 'She **is working** from the office this week.',
        ua: 'Цього тижня вона працює з офісу.',
      },
      { en: 'Prices **are rising**.', ua: 'Ціни ростуть (тренд).' },
      { en: 'We **are meeting** at 5 PM.', ua: 'Ми зустрічаємось о 5 (план).' },
    ],
    mistakes: [
      { wrong: 'I am knowing the answer.', right: 'I know the answer.' },
      {
        note: 'Stative verbs (know, like, want, need, believe, understand, belong) НЕ вживаються в Continuous!',
      },
    ],
    markers: ['now', 'right now', 'at the moment', 'currently', 'today', 'this week'],
  },
  {
    time: 'present',
    aspect: 'perfect',
    icon: '✅',
    name: 'Present Perfect',
    nameUa: 'Теперішній завершений',
    formula: {
      positive: 'S + have/has + V3 (past participle)',
      negative: "S + haven't/hasn't + V3",
      question: 'Have/Has + S + V3?',
    },
    explain: {
      analogy:
        '«Я вже зробив» / «Я був у Лондоні (коли — не важливо)».',
      description:
        'Ключова ідея — звʼязок з теперішнім. Дія відбулась у минулому, але результат або досвід важливий ЗАРАЗ. Якщо вказано конкретний час (yesterday, in 2020) — це Past Simple, НЕ Present Perfect.',
    },
    usage:
      'досвід (без конкретного часу), результат важливий зараз, дія від минулого до тепер',
    examples: [
      {
        en: 'I **have finished** the task.',
        ua: 'Я завершив завдання (ось результат).',
      },
      {
        en: 'She **has lived** here since 2020.',
        ua: 'Вона живе тут з 2020 (досі).',
      },
      {
        en: '**Have** you ever **been** to Japan?',
        ua: 'Ти коли-небудь був у Японії?',
      },
      {
        en: 'I **have never seen** this movie.',
        ua: 'Я ніколи не бачив цей фільм.',
      },
    ],
    mistakes: [
      { wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.' },
      {
        note: 'Конкретний час (yesterday, last week, in 2020) = Past Simple, не Perfect!',
      },
    ],
    markers: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'so far', 'recently'],
  },
  {
    time: 'present',
    aspect: 'perfect-continuous',
    icon: '⌛',
    name: 'Present Perfect Continuous',
    nameUa: 'Теперішній завершений тривалий',
    formula: {
      positive: 'S + have/has + been + V-ing',
      negative: "S + haven't/hasn't + been + V-ing",
      question: 'Have/Has + S + been + V-ing?',
    },
    explain: {
      analogy: '«Я працюю тут вже 5 років» (і досі працюю).',
      description:
        "Акцент на ТРИВАЛОСТІ процесу. Порівняй: «I have written 3 emails» (Perfect — результат, скільки) vs «I have been writing emails all morning» (Perfect Continuous — процес, як довго).",
    },
    usage:
      'дія почалась у минулому й досі триває, акцент на тривалості, пояснення видимого результату',
    examples: [
      {
        en: 'I **have been working** here for 5 years.',
        ua: 'Я працюю тут 5 років (досі).',
      },
      {
        en: 'It **has been raining** all day.',
        ua: 'Дощ іде весь день.',
      },
      {
        en: "She's tired — she **has been running**.",
        ua: 'Вона втомлена — бігала (видно результат).',
      },
    ],
    mistakes: [
      { wrong: 'I have been knowing him for years.', right: 'I have known him for years.' },
      {
        note: 'Stative verbs → Perfect (без Continuous). Know, like, want — не мають -ing форми.',
      },
    ],
    markers: ['for', 'since', 'all day', 'how long', 'lately', 'recently'],
  },

  // ==================== PAST ====================
  {
    time: 'past',
    aspect: 'simple',
    icon: '⏪',
    name: 'Past Simple',
    nameUa: 'Минулий простий',
    formula: {
      positive: 'S + V2 (past form) / V-ed',
      negative: "S + didn't + V",
      question: 'Did + S + V?',
    },
    explain: {
      analogy:
        '«Я зробив це вчора» / «Вона пішла додому».',
      description:
        'Найпростіший минулий час. Дія завершена, точка. Часто є маркер часу (yesterday, last week, in 2020). Для irregular verbs треба знати V2 форму (go→went, see→saw).',
    },
    usage:
      'завершена дія в конкретний час у минулому, послідовність подій у розповіді',
    examples: [
      {
        en: 'I **worked** late yesterday.',
        ua: 'Я працював допізна вчора.',
      },
      {
        en: "She **didn't go** to the meeting.",
        ua: 'Вона не пішла на зустріч.',
      },
      {
        en: 'We **met** in 2019 and **became** friends.',
        ua: 'Ми познайомились у 2019 і подружились.',
      },
    ],
    mistakes: [
      { wrong: 'Did she went home?', right: 'Did she go home?' },
      {
        note: 'Після did завжди базова форма V (не V2)!',
      },
    ],
    markers: ['yesterday', 'last week/month/year', 'ago', 'in 2020', 'when', 'then'],
  },
  {
    time: 'past',
    aspect: 'continuous',
    icon: '\u{1F504}',
    name: 'Past Continuous',
    nameUa: 'Минулий тривалий',
    formula: {
      positive: 'S + was/were + V-ing',
      negative: "S + wasn't/weren't + V-ing",
      question: 'Was/Were + S + V-ing?',
    },
    explain: {
      analogy:
        '«Я читав книгу, коли він зателефонував».',
      description:
        'Як фон у фільмі — довга дія (was reading), яку перериває коротка (called). Або дві паралельні дії: «Поки я спав, вона працювала». Класичне правило: while + Continuous, when + Simple.',
    },
    usage:
      'фонова/тривала дія в минулому, переривання іншою дією, паралельні дії, атмосфера в розповіді',
    examples: [
      {
        en: 'I **was reading** when he **called**.',
        ua: 'Я читав, коли він зателефонував.',
      },
      {
        en: 'They **were working** while I **was sleeping**.',
        ua: 'Вони працювали, поки я спав.',
      },
      {
        en: 'The sun **was shining** and birds **were singing**.',
        ua: 'Сонце світило і птахи співали (атмосфера).',
      },
    ],
    mistakes: [
      {
        wrong: 'When I was coming home, I saw a cat.',
        right: 'When I was walking home, I saw a cat.',
      },
      {
        note: 'come/arrive — зазвичай миттєві, не вживаються як фон. Використовуй walk, drive, etc.',
      },
    ],
    markers: ['while', 'when', 'at that moment', 'all day yesterday', 'at 8 PM'],
  },
  {
    time: 'past',
    aspect: 'perfect',
    icon: '⏮️',
    name: 'Past Perfect',
    nameUa: 'Минулий завершений',
    formula: {
      positive: 'S + had + V3',
      negative: "S + hadn't + V3",
      question: 'Had + S + V3?',
    },
    explain: {
      analogy:
        '«Коли я прийшов, вона вже пішла» — передминуле.',
      description:
        '«Минуле в минулому» — коли потрібно показати, що одна дія відбулась РАНІШЕ за іншу минулу. Якщо є дві минулі дії, та що раніше = Past Perfect (had + V3), та що пізніше = Past Simple.',
    },
    usage:
      'дія ДО іншої минулої дії, «передминуле», результат до певного минулого моменту',
    examples: [
      {
        en: 'I **had finished** before she arrived.',
        ua: 'Я закінчив до того, як вона прийшла.',
      },
      {
        en: 'They **had already left** when I got there.',
        ua: 'Вони вже пішли, коли я прийшов.',
      },
      {
        en: 'She was sad because she **had lost** her keys.',
        ua: 'Вона була сумна, бо загубила ключі.',
      },
    ],
    mistakes: [
      {
        note: 'Не використовуй Past Perfect без причини. Якщо дії йдуть по порядку, достатньо Past Simple:',
      },
      {
        right: 'I came home and watched TV.',
        note: 'порядок зрозумілий — Past Simple OK',
      },
    ],
    markers: ['before', 'after', 'by the time', 'already', 'just', 'when'],
  },
  {
    time: 'past',
    aspect: 'perfect-continuous',
    icon: '⌛',
    name: 'Past Perfect Continuous',
    nameUa: 'Минулий завершений тривалий',
    formula: {
      positive: 'S + had + been + V-ing',
      negative: "S + hadn't + been + V-ing",
      question: 'Had + S + been + V-ing?',
    },
    explain: {
      analogy:
        '«Я чекав 2 години, перш ніж автобус приїхав».',
      description:
        "Як Past Perfect, але з акцентом на ТРИВАЛОСТІ дії. Часто пояснює видимий результат у минулому: «Вона була мокра, бо бігала під дощем».",
    },
    usage:
      'тривала дія ДО певного минулого моменту, пояснення стану в минулому',
    examples: [
      {
        en: 'I **had been waiting** for 2 hours before the bus came.',
        ua: 'Я чекав 2 години, перш ніж приїхав автобус.',
      },
      {
        en: 'She was tired because she **had been running**.',
        ua: 'Вона втомилась, бо бігала.',
      },
      {
        en: 'The road was wet — it **had been raining**.',
        ua: 'Дорога була мокра — дощ ішов.',
      },
    ],
    mistakes: [],
    markers: ['for', 'since', 'before', 'by the time', 'all morning'],
  },

  // ==================== FUTURE ====================
  {
    time: 'future',
    aspect: 'simple',
    icon: '\u{1F52E}',
    name: 'Future Simple',
    nameUa: 'Майбутній простий',
    formula: {
      positive: 'S + will + V',
      negative: "S + won't + V",
      question: 'Will + S + V?',
    },
    explain: {
      analogy:
        '«Я зроблю це» / «Мабуть, піде дощ».',
      description:
        'Спонтанне рішення (щойно вирішив), обіцянки, прогнози. Не плутай з "going to": "going to" = запланована дія або очевидний прогноз. "will" = рішення в момент мовлення або невпевнений прогноз.',
    },
    usage:
      'спонтанне рішення, прогноз, обіцянка, факти про майбутнє, пропозиції',
    examples: [
      {
        en: 'I **will help** you with that.',
        ua: 'Я допоможу тобі (щойно вирішив).',
      },
      {
        en: 'It **will probably rain** tomorrow.',
        ua: 'Мабуть, завтра піде дощ.',
      },
      {
        en: "I **won't tell** anyone, I promise.",
        ua: 'Нікому не скажу, обіцяю.',
      },
    ],
    mistakes: [
      { note: '"Will" vs "going to":' },
      {
        right: "I'll have water.",
        note: 'вирішив щойно в ресторані',
      },
      {
        right: "I'm going to buy a car.",
        note: 'планую вже давно',
      },
    ],
    markers: ['tomorrow', 'next week', 'I think', 'probably', 'I promise', "I'm sure"],
  },
  {
    time: 'future',
    aspect: 'continuous',
    icon: '\u{1F504}',
    name: 'Future Continuous',
    nameUa: 'Майбутній тривалий',
    formula: {
      positive: 'S + will + be + V-ing',
      negative: "S + won't + be + V-ing",
      question: 'Will + S + be + V-ing?',
    },
    explain: {
      analogy:
        '«Завтра о 8 вечора я буду працювати».',
      description:
        'Уяви конкретний момент у майбутньому і «сфоткай» його — що буде відбуватись в той момент? Також для ввічливих запитань: «Will you be using the car?» звучить мʼякше за «Will you use the car?».',
    },
    usage:
      'дія в процесі в певний майбутній момент, ввічливе запитання',
    examples: [
      {
        en: 'I **will be working** at 8 PM tomorrow.',
        ua: 'Завтра о 8 вечора я буду працювати.',
      },
      {
        en: 'This time next week I **will be flying** to Cyprus.',
        ua: 'Цього часу наступного тижня я буду летіти на Кіпр.',
      },
      {
        en: '**Will** you **be using** the computer?',
        ua: 'Ти будеш користуватись компʼютером? (ввічливо)',
      },
    ],
    mistakes: [],
    markers: ['at this time', 'this time tomorrow', 'at 5 PM', 'all day', 'still'],
  },
  {
    time: 'future',
    aspect: 'perfect',
    icon: '\u{1F3C1}',
    name: 'Future Perfect',
    nameUa: 'Майбутній завершений',
    formula: {
      positive: 'S + will + have + V3',
      negative: "S + won't + have + V3",
      question: 'Will + S + have + V3?',
    },
    explain: {
      analogy:
        '«До пʼятниці я вже закінчу».',
      description:
        'Дедлайн у майбутньому — до цього моменту дія буде завершена. Ключове слово — "by" (до).',
    },
    usage:
      'дія завершена ДО певного моменту в майбутньому',
    examples: [
      {
        en: 'I **will have finished** by Friday.',
        ua: 'Я закінчу до пʼятниці.',
      },
      {
        en: 'She **will have graduated** by next summer.',
        ua: 'Вона випуститься до наступного літа.',
      },
      {
        en: 'By 2030, I **will have saved** enough.',
        ua: 'До 2030 я накопичу достатньо.',
      },
    ],
    mistakes: [],
    markers: ['by', 'by the time', 'before', 'by next year', 'by then'],
  },
  {
    time: 'future',
    aspect: 'perfect-continuous',
    icon: '⌛',
    name: 'Future Perfect Continuous',
    nameUa: 'Майбутній завершений тривалий',
    formula: {
      positive: 'S + will + have + been + V-ing',
      negative: "S + won't + have + been + V-ing",
      question: 'Will + S + have + been + V-ing?',
    },
    explain: {
      analogy:
        '«До червня я буду працювати тут вже 3 роки».',
      description:
        'Найрідше вживаний час. Акцент на тривалості дії до певного майбутнього моменту. Використовується коли потрібно підкреслити «скільки часу» дія буде тривати до дедлайну.',
    },
    usage:
      'тривала дія до певного моменту в майбутньому, акцент на тривалості',
    examples: [
      {
        en: 'By June, I **will have been working** here for 3 years.',
        ua: 'До червня я буду працювати тут 3 роки.',
      },
      {
        en: 'She **will have been studying** for 5 hours by then.',
        ua: 'До того часу вона буде вчитись 5 годин.',
      },
    ],
    mistakes: [],
    markers: ['by', 'for', 'by the time', 'by next month'],
  },
]
