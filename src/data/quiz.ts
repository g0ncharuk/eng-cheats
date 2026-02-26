export interface QuizQuestion {
  sentence: string
  options: string[]
  correctIndex: number
  explanation: string
  tense: string
}

export const TENSE_GROUPS = {
  present: ['Present Simple', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
  past: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Past Perfect Continuous'],
  future: ['Future Simple', 'Future Continuous', 'Future Perfect', 'Future Perfect Continuous'],
} as const

export const ALL_TENSE_NAMES = [
  ...TENSE_GROUPS.present,
  ...TENSE_GROUPS.past,
  ...TENSE_GROUPS.future,
] as const

export const quizQuestions: QuizQuestion[] = [
  // ==================== PRESENT SIMPLE (6) ====================
  {
    sentence: 'My brother ___ (play) guitar every evening.',
    options: ['plays', 'is playing', 'has played', 'played'],
    correctIndex: 0,
    explanation: 'Present Simple, бо це звичка — щовечора. Маркер "every evening" вказує на регулярну дію. Для he/she/it додаємо -s.',
    tense: 'Present Simple',
  },
  {
    sentence: 'Water ___ (boil) at 100 degrees Celsius.',
    options: ['is boiling', 'boils', 'has boiled', 'will boil'],
    correctIndex: 1,
    explanation: 'Present Simple для загальновідомих фактів і законів природи. Вода завжди кипить при 100°C — це незмінна істина.',
    tense: 'Present Simple',
  },
  {
    sentence: 'She ___ (not / drink) coffee in the morning.',
    options: ["doesn't drink", "isn't drinking", "hasn't drunk", "didn't drink"],
    correctIndex: 0,
    explanation: "Present Simple для звичок. Заперечення з doesn't + V (базова форма). \"In the morning\" — регулярна дія.",
    tense: 'Present Simple',
  },
  {
    sentence: 'The train ___ (leave) at 8:45 every day.',
    options: ['is leaving', 'leaves', 'has left', 'will leave'],
    correctIndex: 1,
    explanation: 'Present Simple для розкладів і графіків. Потяг відправляється за фіксованим розкладом — це не одноразова подія.',
    tense: 'Present Simple',
  },
  {
    sentence: '___ your parents ___ (live) in Kyiv?',
    options: ['Are ... living', 'Do ... live', 'Have ... lived', 'Did ... live'],
    correctIndex: 1,
    explanation: 'Present Simple для постійних ситуацій. Питання формується з Do/Does + S + V. "Live" — стан, а не тимчасова дія.',
    tense: 'Present Simple',
  },
  {
    sentence: 'I ___ (not / understand) this rule at all.',
    options: ["don't understand", "am not understanding", "haven't understood", "didn't understand"],
    correctIndex: 0,
    explanation: 'Present Simple зі stative verb "understand". Дієслова стану (know, understand, like, want) зазвичай не вживаються в Continuous.',
    tense: 'Present Simple',
  },

  // ==================== PRESENT CONTINUOUS (6) ====================
  {
    sentence: 'Look! It ___ (rain) outside.',
    options: ['rains', 'is raining', 'has rained', 'rained'],
    correctIndex: 1,
    explanation: 'Present Continuous, бо дія відбувається прямо зараз. "Look!" вказує на те, що ми бачимо це в цей момент.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'She ___ (wear) a red dress today.',
    options: ['wears', 'is wearing', 'has worn', 'wore'],
    correctIndex: 1,
    explanation: 'Present Continuous для тимчасових ситуацій. "Today" — дія відбувається саме сьогодні, це не її звичний одяг.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'We ___ (move) to a new apartment next week.',
    options: ['move', 'are moving', 'have moved', 'will move'],
    correctIndex: 1,
    explanation: 'Present Continuous для запланованих дій у найближчому майбутньому. "Next week" + вже прийняте рішення = Continuous.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'Why ___ you ___ (laugh)? What happened?',
    options: ['do ... laugh', 'are ... laughing', 'have ... laughed', 'did ... laugh'],
    correctIndex: 1,
    explanation: 'Present Continuous, бо ми питаємо про дію, яка відбувається прямо зараз. Людина сміється в цей момент.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'The kids ___ (not / sleep), they are watching cartoons.',
    options: ["don't sleep", "aren't sleeping", "haven't slept", "didn't sleep"],
    correctIndex: 1,
    explanation: 'Present Continuous для дій прямо зараз. Контекст "they are watching cartoons" підтверджує, що все відбувається в цей момент.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'He ___ (work) from home this month because of renovation.',
    options: ['works', 'is working', 'has worked', 'worked'],
    correctIndex: 1,
    explanation: 'Present Continuous для тимчасових ситуацій. "This month" + причина (ремонт) = тимчасова зміна, не постійна звичка.',
    tense: 'Present Continuous',
  },

  // ==================== PAST SIMPLE (6) ====================
  {
    sentence: 'We ___ (meet) at a conference last year.',
    options: ['meet', 'have met', 'met', 'were meeting'],
    correctIndex: 2,
    explanation: 'Past Simple, бо є конкретний час у минулому — "last year". Дія завершена і час чітко вказаний.',
    tense: 'Past Simple',
  },
  {
    sentence: 'She ___ (buy) a new laptop yesterday.',
    options: ['buys', 'has bought', 'bought', 'was buying'],
    correctIndex: 2,
    explanation: 'Past Simple з "yesterday" — конкретний момент у минулому. Buy → bought (неправильне дієслово).',
    tense: 'Past Simple',
  },
  {
    sentence: 'I ___ (not / go) to the gym last week.',
    options: ["don't go", "haven't gone", "didn't go", "wasn't going"],
    correctIndex: 2,
    explanation: "Past Simple в запереченні: didn't + V (базова форма). \"Last week\" — конкретний час у минулому.",
    tense: 'Past Simple',
  },
  {
    sentence: '___ you ___ (enjoy) the concert on Saturday?',
    options: ['Do ... enjoy', 'Have ... enjoyed', 'Did ... enjoy', 'Were ... enjoying'],
    correctIndex: 2,
    explanation: 'Past Simple для завершених дій з конкретним часом. "On Saturday" — минулий час. Питання: Did + S + V?',
    tense: 'Past Simple',
  },
  {
    sentence: 'The movie ___ (start) at 7 and ___ (end) at 9.',
    options: ['starts ... ends', 'started ... ended', 'has started ... has ended', 'was starting ... was ending'],
    correctIndex: 1,
    explanation: 'Past Simple для послідовних завершених дій у минулому. Фільм почався і закінчився — обидві дії завершені.',
    tense: 'Past Simple',
  },
  {
    sentence: 'When I was a child, I ___ (want) to be an astronaut.',
    options: ['want', 'wanted', 'have wanted', 'was wanting'],
    correctIndex: 1,
    explanation: 'Past Simple для станів у минулому. "When I was a child" — минулий період. Want — stative verb, не вживається в Continuous.',
    tense: 'Past Simple',
  },

  // ==================== PRESENT PERFECT (6) ====================
  {
    sentence: 'She ___ (work) here since 2020.',
    options: ['works', 'is working', 'has worked', 'worked'],
    correctIndex: 2,
    explanation: 'Present Perfect, бо дія почалась у 2020 і продовжується зараз. Маркер "since" — типовий для Present Perfect.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'I ___ (never / try) sushi before.',
    options: ['never try', 'never tried', 'have never tried', 'am never trying'],
    correctIndex: 2,
    explanation: 'Present Perfect для досвіду за все життя (без конкретного часу). "Never" + "before" — типові маркери Present Perfect.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'We ___ (just / finish) the project.',
    options: ['just finish', 'just finished', 'have just finished', 'are just finishing'],
    correctIndex: 2,
    explanation: 'Present Perfect з "just" — щойно завершена дія. Результат актуальний зараз: проект готовий.',
    tense: 'Present Perfect',
  },
  {
    sentence: '___ you ___ (see) my keys? I can\'t find them.',
    options: ['Do ... see', 'Are ... seeing', 'Have ... seen', 'Did ... see'],
    correctIndex: 2,
    explanation: 'Present Perfect для ситуацій, де результат важливий зараз. Ключі загублені зараз — чи ти їх бачив (коли-небудь)?',
    tense: 'Present Perfect',
  },
  {
    sentence: 'He ___ (visit) 15 countries so far.',
    options: ['visits', 'visited', 'has visited', 'is visiting'],
    correctIndex: 2,
    explanation: 'Present Perfect з "so far" — накопичений досвід до цього моменту. Він може відвідати ще більше країн.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'I ___ (already / read) this book, let\'s pick another one.',
    options: ['already read', 'already reading', 'have already read', 'had already read'],
    correctIndex: 2,
    explanation: 'Present Perfect з "already" — дія завершена раніше ніж очікувалось. Результат актуальний зараз: давай виберемо іншу.',
    tense: 'Present Perfect',
  },

  // ==================== FUTURE SIMPLE (6) ====================
  {
    sentence: "Don't worry, I ___ (help) you with the project.",
    options: ['help', 'am helping', 'will help', 'have helped'],
    correctIndex: 2,
    explanation: 'Future Simple з "will" для спонтанних рішень і обіцянок. Людина щойно вирішила допомогти — це не було заплановано.',
    tense: 'Future Simple',
  },
  {
    sentence: 'I think it ___ (snow) tomorrow.',
    options: ['snows', 'is snowing', 'will snow', 'has snowed'],
    correctIndex: 2,
    explanation: 'Future Simple для прогнозів і припущень. "I think" + "tomorrow" — це передбачення, не запланована дія.',
    tense: 'Future Simple',
  },
  {
    sentence: 'She ___ (not / come) to the party, she is busy.',
    options: ["doesn't come", "isn't coming", "won't come", "hasn't come"],
    correctIndex: 2,
    explanation: "Future Simple в запереченні: won't + V. Рішення прийнято — вона не прийде, бо зайнята.",
    tense: 'Future Simple',
  },
  {
    sentence: '___ you ___ (open) the window, please? It\'s hot.',
    options: ['Do ... open', 'Are ... opening', 'Will ... open', 'Have ... opened'],
    correctIndex: 2,
    explanation: 'Future Simple для ввічливих прохань. "Will you...?" — стандартна форма прохання.',
    tense: 'Future Simple',
  },
  {
    sentence: 'One day, robots ___ (do) all the boring jobs.',
    options: ['do', 'are doing', 'will do', 'have done'],
    correctIndex: 2,
    explanation: 'Future Simple для передбачень про майбутнє. "One day" — невизначений час у майбутньому.',
    tense: 'Future Simple',
  },
  {
    sentence: 'I ___ (call) you when I arrive at the airport.',
    options: ['call', 'am calling', 'will call', 'have called'],
    correctIndex: 2,
    explanation: 'Future Simple в головному реченні з "when". У підрядному ("when I arrive") — Present Simple, а в головному — will.',
    tense: 'Future Simple',
  },

  // ==================== PAST CONTINUOUS (3) ====================
  {
    sentence: 'I ___ (cook) dinner when the phone rang.',
    options: ['cooked', 'was cooking', 'have cooked', 'had cooked'],
    correctIndex: 1,
    explanation: 'Past Continuous для тривалої дії, яку перервала інша подія. "Was cooking" — фонова дія, "rang" — переривання.',
    tense: 'Past Continuous',
  },
  {
    sentence: 'At 10 PM last night, she ___ (study) for the exam.',
    options: ['studied', 'was studying', 'has studied', 'had studied'],
    correctIndex: 1,
    explanation: 'Past Continuous для дії, яка тривала в конкретний момент у минулому. "At 10 PM last night" — точний момент.',
    tense: 'Past Continuous',
  },
  {
    sentence: 'While they ___ (play) football, it started to rain.',
    options: ['played', 'were playing', 'have played', 'had played'],
    correctIndex: 1,
    explanation: 'Past Continuous з "while" — тривала фонова дія. Вони грали (тривала дія), і пішов дощ (переривання).',
    tense: 'Past Continuous',
  },

  // ==================== PRESENT PERFECT CONTINUOUS (2) ====================
  {
    sentence: 'You look tired. ___ you ___ (work) all day?',
    options: ['Did ... work', 'Do ... work', 'Have ... been working', 'Are ... working'],
    correctIndex: 2,
    explanation: 'Present Perfect Continuous — дія тривала до цього моменту, і результат видимий зараз (виглядаєш втомленим). Акцент на тривалості.',
    tense: 'Present Perfect Continuous',
  },
  {
    sentence: 'She ___ (learn) English for 3 years.',
    options: ['learns', 'is learning', 'has been learning', 'learned'],
    correctIndex: 2,
    explanation: 'Present Perfect Continuous з "for 3 years" — дія почалась 3 роки тому і триває досі. Акцент на тривалості процесу.',
    tense: 'Present Perfect Continuous',
  },

  // ==================== PAST PERFECT (2) ====================
  {
    sentence: 'When I arrived, the meeting ___ (already / start).',
    options: ['already started', 'was already starting', 'had already started', 'has already started'],
    correctIndex: 2,
    explanation: 'Past Perfect — дія завершилась ДО іншої минулої дії. Зустріч почалась раніше, ніж я прийшов.',
    tense: 'Past Perfect',
  },
  {
    sentence: 'She ___ (never / fly) before her trip to Japan.',
    options: ['never flew', 'was never flying', 'had never flown', 'has never flown'],
    correctIndex: 2,
    explanation: 'Past Perfect для досвіду ДО певного моменту в минулому. До поїздки в Японію вона ніколи не літала.',
    tense: 'Past Perfect',
  },

  // ==================== PAST PERFECT CONTINUOUS (2) ====================
  {
    sentence: 'They ___ (wait) for 2 hours before the bus finally came.',
    options: ['waited', 'were waiting', 'had been waiting', 'have been waiting'],
    correctIndex: 2,
    explanation: 'Past Perfect Continuous — тривала дія ДО іншої минулої дії. Вони чекали 2 години, перш ніж прийшов автобус. Акцент на тривалості.',
    tense: 'Past Perfect Continuous',
  },
  {
    sentence: 'He was out of breath because he ___ (run).',
    options: ['ran', 'was running', 'had been running', 'has been running'],
    correctIndex: 2,
    explanation: 'Past Perfect Continuous — тривала дія в минулому, результат якої був видимим (задихався). Він бігав перед тим.',
    tense: 'Past Perfect Continuous',
  },

  // ==================== FUTURE CONTINUOUS (2) ====================
  {
    sentence: 'This time tomorrow, I ___ (fly) to Barcelona.',
    options: ['fly', 'will fly', 'will be flying', 'am flying'],
    correctIndex: 2,
    explanation: 'Future Continuous — дія, яка буде тривати в певний момент у майбутньому. "This time tomorrow" — конкретний момент.',
    tense: 'Future Continuous',
  },
  {
    sentence: "Don't call me at 8 PM, I ___ (have) dinner with my family.",
    options: ['have', 'will have', 'will be having', 'am having'],
    correctIndex: 2,
    explanation: 'Future Continuous для дії, яка буде в процесі в конкретний час у майбутньому. О 8 вечора я буду вечеряти.',
    tense: 'Future Continuous',
  },

  // ==================== FUTURE PERFECT (2) ====================
  {
    sentence: 'By Friday, I ___ (finish) the report.',
    options: ['finish', 'will finish', 'will have finished', 'am finishing'],
    correctIndex: 2,
    explanation: 'Future Perfect — дія буде завершена ДО певного моменту в майбутньому. "By Friday" — дедлайн.',
    tense: 'Future Perfect',
  },
  {
    sentence: 'By next year, she ___ (save) enough money for a car.',
    options: ['saves', 'will save', 'will have saved', 'is saving'],
    correctIndex: 2,
    explanation: 'Future Perfect з "by next year" — до наступного року вона вже накопичить. Акцент на результаті до дедлайну.',
    tense: 'Future Perfect',
  },

  // ==================== FUTURE PERFECT CONTINUOUS (1) ====================
  {
    sentence: 'By June, I ___ (work) at this company for 5 years.',
    options: ['will work', 'will be working', 'will have been working', 'work'],
    correctIndex: 2,
    explanation: 'Future Perfect Continuous — тривала дія до певного моменту в майбутньому з акцентом на тривалості. "By June" + "for 5 years".',
    tense: 'Future Perfect Continuous',
  },
]
