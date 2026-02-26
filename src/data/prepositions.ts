export type Preposition = 'in' | 'on' | 'at'
export type PrepCategory = 'time' | 'place' | 'fixed'

export interface PrepRule {
  example: string
  ua: string
}

export interface PrepCheatsheetData {
  prep: Preposition
  label: string
  hint: string
  sections: {
    category: PrepCategory
    categoryLabel: string
    rules: PrepRule[]
  }[]
}

export interface PrepQuestion {
  sentence: string
  correct: Preposition
  explanation: string
  category: PrepCategory
}

export const cheatsheet: PrepCheatsheetData[] = [
  {
    prep: 'in',
    label: 'IN',
    hint: 'всередині, у великих періодах',
    sections: [
      {
        category: 'time',
        categoryLabel: 'Час',
        rules: [
          { example: 'in the morning / afternoon / evening', ua: 'вранці / вдень / ввечері' },
          { example: 'in January, in summer', ua: 'у місяцях, порах року' },
          { example: 'in 2024, in the 90s', ua: 'у роках, десятиліттях' },
          { example: 'in 5 minutes, in an hour', ua: 'через (проміжок часу)' },
        ],
      },
      {
        category: 'place',
        categoryLabel: 'Місце',
        rules: [
          { example: 'in the room, in the box', ua: 'всередині чогось' },
          { example: 'in Kyiv, in Ukraine', ua: 'у місті, країні' },
          { example: 'in the car, in a taxi', ua: 'у закритому транспорті' },
          { example: 'in the photo, in the book', ua: 'на фото (всередині рамки), у книзі' },
        ],
      },
      {
        category: 'fixed',
        categoryLabel: 'Стійкі вирази',
        rules: [
          { example: 'in love', ua: 'закоханий' },
          { example: 'in time', ua: 'вчасно (з запасом)' },
          { example: 'in a hurry', ua: 'поспішаючи' },
          { example: 'in trouble', ua: 'у біді' },
          { example: 'in fact', ua: 'насправді' },
          { example: 'in general', ua: 'загалом' },
        ],
      },
    ],
  },
  {
    prep: 'on',
    label: 'ON',
    hint: 'на поверхні, конкретні дні/дати',
    sections: [
      {
        category: 'time',
        categoryLabel: 'Час',
        rules: [
          { example: 'on Monday, on Fridays', ua: 'у дні тижня' },
          { example: 'on December 25, on March 8', ua: 'у конкретну дату' },
          { example: 'on my birthday', ua: 'у день народження' },
          { example: 'on the weekend (AmE)', ua: 'на вихідних (амер.)' },
        ],
      },
      {
        category: 'place',
        categoryLabel: 'Місце',
        rules: [
          { example: 'on the table, on the wall', ua: 'на поверхні' },
          { example: 'on the bus, on the train', ua: 'у громадському транспорті' },
          { example: 'on the second floor', ua: 'на поверсі' },
          { example: 'on the left / right', ua: 'ліворуч / праворуч' },
        ],
      },
      {
        category: 'fixed',
        categoryLabel: 'Стійкі вирази',
        rules: [
          { example: 'on time', ua: 'вчасно (точно)' },
          { example: 'on fire', ua: 'у вогні / палає' },
          { example: 'on purpose', ua: 'навмисне' },
          { example: 'on vacation / holiday', ua: 'у відпустці' },
          { example: 'on the phone', ua: 'по телефону' },
          { example: 'on the internet', ua: 'в інтернеті' },
        ],
      },
    ],
  },
  {
    prep: 'at',
    label: 'AT',
    hint: 'у точці, конкретний час/місце',
    sections: [
      {
        category: 'time',
        categoryLabel: 'Час',
        rules: [
          { example: 'at 5 PM, at 7:30', ua: 'у конкретний час' },
          { example: 'at noon, at midnight', ua: 'опівдні, опівночі' },
          { example: 'at night', ua: 'вночі' },
          { example: 'at the moment, at present', ua: 'зараз, наразі' },
          { example: 'at the weekend (BrE)', ua: 'на вихідних (брит.)' },
        ],
      },
      {
        category: 'place',
        categoryLabel: 'Місце',
        rules: [
          { example: 'at home, at work, at school', ua: 'вдома, на роботі, у школі' },
          { example: 'at the bus stop, at the door', ua: 'у точці / біля' },
          { example: 'at the airport, at the station', ua: 'в аеропорту, на станції' },
          { example: 'at the top / bottom', ua: 'на вершині / внизу' },
        ],
      },
      {
        category: 'fixed',
        categoryLabel: 'Стійкі вирази',
        rules: [
          { example: 'at first', ua: 'спочатку' },
          { example: 'at last', ua: 'нарешті' },
          { example: 'at least', ua: 'принаймні' },
          { example: 'at once', ua: 'негайно' },
          { example: 'at all', ua: 'взагалі' },
        ],
      },
    ],
  },
]

export const prepQuestions: PrepQuestion[] = [
  // ==================== TIME (40) ====================
  { sentence: 'I wake up ___ 7 AM every day.', correct: 'at', explanation: 'AT для конкретного часу (7 AM).', category: 'time' },
  { sentence: 'The meeting is ___ Monday.', correct: 'on', explanation: 'ON для днів тижня (Monday).', category: 'time' },
  { sentence: 'It usually rains a lot ___ November.', correct: 'in', explanation: 'IN для місяців (November).', category: 'time' },
  { sentence: 'She was born ___ 1995.', correct: 'in', explanation: 'IN для років (1995).', category: 'time' },
  { sentence: 'The train leaves ___ noon.', correct: 'at', explanation: 'AT для noon, midnight, night.', category: 'time' },
  { sentence: 'We have a test ___ Friday morning.', correct: 'on', explanation: 'ON для конкретного дня (Friday morning = день + частина дня).', category: 'time' },
  { sentence: 'I like to read ___ the evening.', correct: 'in', explanation: 'IN the morning / afternoon / evening — великий період дня.', category: 'time' },
  { sentence: "I'll finish the report ___ 30 minutes.", correct: 'in', explanation: 'IN для "через проміжок часу" (in 30 minutes = через 30 хвилин).', category: 'time' },
  { sentence: 'The concert is ___ July 15.', correct: 'on', explanation: 'ON для конкретних дат (July 15).', category: 'time' },
  { sentence: 'People often travel ___ summer.', correct: 'in', explanation: 'IN для пір року (summer).', category: 'time' },
  { sentence: 'The shop closes ___ midnight.', correct: 'at', explanation: 'AT для midnight (конкретний момент).', category: 'time' },
  { sentence: 'She called me ___ my birthday.', correct: 'on', explanation: 'ON для birthday (конкретний день).', category: 'time' },
  { sentence: 'We moved here ___ the 21st century.', correct: 'in', explanation: 'IN для століть і великих періодів.', category: 'time' },
  { sentence: 'Stars are visible ___ night.', correct: 'at', explanation: 'AT night — виняток (не in the night).', category: 'time' },
  { sentence: 'The project started ___ March 1st.', correct: 'on', explanation: 'ON для конкретних дат (March 1st).', category: 'time' },
  { sentence: 'I usually go jogging ___ the morning.', correct: 'in', explanation: 'IN the morning — частина дня (великий період).', category: 'time' },
  { sentence: 'The deadline is ___ the end of the week.', correct: 'at', explanation: 'AT the end of — стійкий вираз часу (у кінці).', category: 'time' },
  { sentence: 'We don\'t work ___ weekends.', correct: 'at', explanation: 'AT the weekend (BrE) / AT weekends — на вихідних.', category: 'time' },
  { sentence: 'He always takes a nap ___ the afternoon.', correct: 'in', explanation: 'IN the afternoon — частина дня.', category: 'time' },
  { sentence: 'The office closes ___ 6 PM sharp.', correct: 'at', explanation: 'AT для конкретного часу (6 PM).', category: 'time' },
  { sentence: 'I was born ___ a cold winter night.', correct: 'on', explanation: 'ON для конкретної ночі з описом (on a cold night = конкретний день).', category: 'time' },
  { sentence: 'Technology changed a lot ___ the 1990s.', correct: 'in', explanation: 'IN для десятиліть (the 1990s).', category: 'time' },
  { sentence: 'The alarm goes off ___ 6:30 every morning.', correct: 'at', explanation: 'AT для конкретного часу (6:30).', category: 'time' },
  { sentence: 'We have a team standup ___ Mondays and Wednesdays.', correct: 'on', explanation: 'ON для днів тижня (Mondays, Wednesdays).', category: 'time' },
  { sentence: 'The new feature will be released ___ two weeks.', correct: 'in', explanation: 'IN для "через проміжок часу" (in two weeks = через два тижні).', category: 'time' },
  { sentence: 'It gets really cold here ___ winter.', correct: 'in', explanation: 'IN для пір року (winter).', category: 'time' },
  { sentence: 'She got promoted ___ her first year at the company.', correct: 'in', explanation: 'IN для періоду часу (in her first year).', category: 'time' },
  { sentence: 'The restaurant is always busy ___ lunchtime.', correct: 'at', explanation: 'AT lunchtime — конкретний момент дня.', category: 'time' },
  { sentence: 'I have a dentist appointment ___ Thursday.', correct: 'on', explanation: 'ON для днів тижня (Thursday).', category: 'time' },
  { sentence: 'The cherry trees bloom ___ spring.', correct: 'in', explanation: 'IN для пір року (spring).', category: 'time' },
  { sentence: 'The accident happened ___ rush hour.', correct: 'at', explanation: 'AT для конкретного моменту/періоду (rush hour).', category: 'time' },
  { sentence: 'We moved to a new apartment ___ September.', correct: 'in', explanation: 'IN для місяців (September).', category: 'time' },
  { sentence: 'I like to go for walks ___ sunny days.', correct: 'on', explanation: 'ON для днів з описом (on sunny days = конкретний тип дня).', category: 'time' },
  { sentence: 'The company was founded ___ the early 2000s.', correct: 'in', explanation: 'IN для десятиліть і періодів (the early 2000s).', category: 'time' },
  { sentence: 'The server went down ___ 3 AM last night.', correct: 'at', explanation: 'AT для конкретного часу (3 AM).', category: 'time' },
  { sentence: 'We usually have dinner ___ Christmas Day.', correct: 'on', explanation: 'ON для конкретного свята-дня (Christmas Day).', category: 'time' },
  { sentence: 'Traffic is terrible ___ the morning rush.', correct: 'in', explanation: 'IN the morning — частина дня.', category: 'time' },
  { sentence: 'The store has a big sale ___ Black Friday.', correct: 'on', explanation: 'ON для конкретного дня (Black Friday).', category: 'time' },
  { sentence: 'I\'ll call you back ___ a few minutes.', correct: 'in', explanation: 'IN для "через проміжок часу" (in a few minutes = через кілька хвилин).', category: 'time' },
  { sentence: 'The deployment is scheduled ___ New Year\'s Eve.', correct: 'on', explanation: 'ON для конкретного свята-дня (New Year\'s Eve).', category: 'time' },

  // ==================== PLACE (40) ====================
  { sentence: "The keys are ___ the table.", correct: 'on', explanation: 'ON для поверхонь (on the table).', category: 'place' },
  { sentence: 'She lives ___ Kyiv.', correct: 'in', explanation: 'IN для міст і країн (in Kyiv).', category: 'place' },
  { sentence: "He's waiting ___ the bus stop.", correct: 'at', explanation: 'AT для точок/пунктів (bus stop = конкретна точка).', category: 'place' },
  { sentence: 'The picture is ___ the wall.', correct: 'on', explanation: 'ON для поверхонь (on the wall).', category: 'place' },
  { sentence: 'I left my bag ___ the car.', correct: 'in', explanation: 'IN the car — всередині закритого транспорту.', category: 'place' },
  { sentence: "There's someone ___ the door.", correct: 'at', explanation: 'AT the door — у точці (біля дверей).', category: 'place' },
  { sentence: 'We met ___ the airport.', correct: 'at', explanation: 'AT для будівель як точок зустрічі (at the airport).', category: 'place' },
  { sentence: 'She works ___ the second floor.', correct: 'on', explanation: 'ON для поверхів (on the 2nd floor).', category: 'place' },
  { sentence: 'He grew up ___ a small village.', correct: 'in', explanation: 'IN для населених пунктів (in a village).', category: 'place' },
  { sentence: 'I saw her ___ the bus this morning.', correct: 'on', explanation: 'ON the bus — у громадському транспорті.', category: 'place' },
  { sentence: 'The kids are playing ___ the garden.', correct: 'in', explanation: 'IN the garden — всередині огородженого простору.', category: 'place' },
  { sentence: "I'll meet you ___ the entrance.", correct: 'at', explanation: 'AT для точок зустрічі (at the entrance).', category: 'place' },
  { sentence: 'Your name is ___ the list.', correct: 'on', explanation: 'ON the list — на поверхні документа/списку.', category: 'place' },
  { sentence: 'She sat ___ the back of the taxi.', correct: 'in', explanation: 'IN the taxi — всередині закритого транспорту (як і in the car).', category: 'place' },
  { sentence: 'There are beautiful paintings ___ the museum.', correct: 'in', explanation: 'IN the museum — всередині будівлі.', category: 'place' },
  { sentence: 'He was standing ___ the corner of the street.', correct: 'at', explanation: 'AT the corner — у точці (на розі вулиці).', category: 'place' },
  { sentence: 'The cat is sleeping ___ the sofa.', correct: 'on', explanation: 'ON the sofa — на поверхні (диван).', category: 'place' },
  { sentence: 'I forgot my umbrella ___ the office.', correct: 'at', explanation: 'AT the office — у певному місці/точці.', category: 'place' },
  { sentence: 'We spent two weeks ___ Japan last year.', correct: 'in', explanation: 'IN для країн (in Japan).', category: 'place' },
  { sentence: 'The passengers were waiting ___ the platform.', correct: 'on', explanation: 'ON the platform — на поверхні/платформі.', category: 'place' },
  { sentence: 'I read about it ___ the internet.', correct: 'on', explanation: 'ON the internet — стійкий вираз для інтернету.', category: 'place' },
  { sentence: 'She left her phone ___ the kitchen counter.', correct: 'on', explanation: 'ON для поверхонь (on the counter).', category: 'place' },
  { sentence: 'The hotel is ___ the beach.', correct: 'on', explanation: 'ON the beach — на пляжі (поверхня).', category: 'place' },
  { sentence: 'We arrived ___ the hotel late at night.', correct: 'at', explanation: 'AT the hotel — у точці призначення.', category: 'place' },
  { sentence: 'My apartment is ___ the third floor.', correct: 'on', explanation: 'ON для поверхів (on the third floor).', category: 'place' },
  { sentence: 'She was swimming ___ the pool.', correct: 'in', explanation: 'IN the pool — всередині (у воді басейну).', category: 'place' },
  { sentence: 'The children are ___ school right now.', correct: 'at', explanation: 'AT school — перебувати у школі (функціонально, як точка).', category: 'place' },
  { sentence: 'There is a stain ___ your shirt.', correct: 'on', explanation: 'ON your shirt — на поверхні одягу.', category: 'place' },
  { sentence: 'I live ___ the city center.', correct: 'in', explanation: 'IN the city center — всередині району/зони.', category: 'place' },
  { sentence: 'He is sitting ___ the front row.', correct: 'in', explanation: 'IN the front row — всередині ряду.', category: 'place' },
  { sentence: 'We had lunch ___ a nice restaurant downtown.', correct: 'at', explanation: 'AT a restaurant — у певному закладі (точка).', category: 'place' },
  { sentence: 'The books are ___ the shelf.', correct: 'on', explanation: 'ON the shelf — на поверхні полиці.', category: 'place' },
  { sentence: 'She was born ___ a small town ___ Poland.', correct: 'in', explanation: 'IN для міст і країн (in a town, in Poland).', category: 'place' },
  { sentence: 'There are a lot of people ___ the train today.', correct: 'on', explanation: 'ON the train — у громадському транспорті.', category: 'place' },
  { sentence: 'I saw a great documentary ___ TV last night.', correct: 'on', explanation: 'ON TV — стійкий вираз (по телевізору).', category: 'place' },
  { sentence: 'The information is ___ page 42.', correct: 'on', explanation: 'ON page — на сторінці (поверхня).', category: 'place' },
  { sentence: 'He works ___ home three days a week.', correct: 'at', explanation: 'AT home — стійкий вираз (вдома, без артикля).', category: 'place' },
  { sentence: 'We stopped ___ a gas station on the highway.', correct: 'at', explanation: 'AT a gas station — у точці на шляху.', category: 'place' },
  { sentence: 'She put the letter ___ the envelope.', correct: 'in', explanation: 'IN the envelope — всередині конверта.', category: 'place' },
  { sentence: 'The new office is ___ the top floor.', correct: 'on', explanation: 'ON the top floor — на поверсі (поверхня).', category: 'place' },

  // ==================== FIXED EXPRESSIONS (40) ====================
  { sentence: "He's ___ love with her.", correct: 'in', explanation: 'IN love — стійкий вираз (закоханий).', category: 'fixed' },
  { sentence: 'Please be ___ time for the meeting.', correct: 'on', explanation: 'ON time = вчасно (точно). Порівняй: IN time = вчасно (з запасом).', category: 'fixed' },
  { sentence: 'The building was ___ fire.', correct: 'on', explanation: 'ON fire — стійкий вираз (горить).', category: 'fixed' },
  { sentence: "I'm ___ a hurry, can we talk later?", correct: 'in', explanation: 'IN a hurry — стійкий вираз (поспішаю).', category: 'fixed' },
  { sentence: 'She did it ___ purpose.', correct: 'on', explanation: 'ON purpose — стійкий вираз (навмисне).', category: 'fixed' },
  { sentence: '___ first, I was scared, but then I relaxed.', correct: 'at', explanation: 'AT first — стійкий вираз (спочатку).', category: 'fixed' },
  { sentence: "I don't like horror movies ___ all.", correct: 'at', explanation: 'AT all — стійкий вираз (взагалі).', category: 'fixed' },
  { sentence: "She's ___ vacation this week.", correct: 'on', explanation: 'ON vacation — стійкий вираз (у відпустці).', category: 'fixed' },
  { sentence: '___ least 20 people came to the party.', correct: 'at', explanation: 'AT least — стійкий вираз (принаймні).', category: 'fixed' },
  { sentence: '___ general, people prefer warm weather.', correct: 'in', explanation: 'IN general — стійкий вираз (загалом).', category: 'fixed' },
  { sentence: '___ last, we found the solution!', correct: 'at', explanation: 'AT last — стійкий вираз (нарешті).', category: 'fixed' },
  { sentence: "He's been ___ trouble since yesterday.", correct: 'in', explanation: 'IN trouble — стійкий вираз (у біді).', category: 'fixed' },
  { sentence: '___ fact, the test was easier than expected.', correct: 'in', explanation: 'IN fact — стійкий вираз (насправді).', category: 'fixed' },
  { sentence: 'We need to leave ___ once!', correct: 'at', explanation: 'AT once — стійкий вираз (негайно).', category: 'fixed' },
  { sentence: 'We arrived just ___ time to catch the train.', correct: 'in', explanation: 'IN time = вчасно (з запасом). Порівняй: ON time = вчасно (точно за розкладом).', category: 'fixed' },
  { sentence: 'She\'s talking ___ the phone right now.', correct: 'on', explanation: 'ON the phone — стійкий вираз (по телефону).', category: 'fixed' },
  { sentence: '___ the end, everything worked out fine.', correct: 'in', explanation: 'IN the end = врешті-решт (результат). Порівняй: AT the end = у кінці (конкретне місце/час).', category: 'fixed' },
  { sentence: 'There is a summary ___ the end of the chapter.', correct: 'at', explanation: 'AT the end of = у кінці (конкретна точка). Порівняй: IN the end = врешті-решт.', category: 'fixed' },
  { sentence: 'I\'m not very good ___ math.', correct: 'at', explanation: 'Good AT something — стійкий вираз (добре вміти щось).', category: 'fixed' },
  { sentence: 'She is interested ___ learning programming.', correct: 'in', explanation: 'Interested IN — стійкий вираз (зацікавлений у).', category: 'fixed' },
  { sentence: 'The project is still ___ progress.', correct: 'in', explanation: 'IN progress — стійкий вираз (у процесі).', category: 'fixed' },
  { sentence: 'I\'m ___ my way to the office.', correct: 'on', explanation: 'ON my way — стійкий вираз (у дорозі).', category: 'fixed' },
  { sentence: 'We need to focus ___ the main task.', correct: 'on', explanation: 'Focus ON — стійкий вираз (зосередитись на).', category: 'fixed' },
  { sentence: 'He is ___ charge of the marketing team.', correct: 'in', explanation: 'IN charge of — стійкий вираз (відповідальний за).', category: 'fixed' },
  { sentence: 'She depends ___ her parents for support.', correct: 'on', explanation: 'Depend ON — стійкий вираз (залежати від).', category: 'fixed' },
  { sentence: 'He\'s ___ risk of losing his job.', correct: 'at', explanation: 'AT risk — стійкий вираз (під загрозою).', category: 'fixed' },
  { sentence: 'They succeeded ___ finishing the project on time.', correct: 'in', explanation: 'Succeed IN — стійкий вираз (досягти успіху в).', category: 'fixed' },
  { sentence: 'I insist ___ paying for dinner.', correct: 'on', explanation: 'Insist ON — стійкий вираз (наполягати на).', category: 'fixed' },
  { sentence: 'She\'s ___ a good mood today.', correct: 'in', explanation: 'IN a good mood — стійкий вираз (у гарному настрої).', category: 'fixed' },
  { sentence: 'The system is ___ control now.', correct: 'in', explanation: 'IN control — стійкий вираз (під контролем). Порівняй: out of control.', category: 'fixed' },
  { sentence: 'The whole team is ___ board with the new plan.', correct: 'on', explanation: 'ON board — стійкий вираз (згодні, підтримують).', category: 'fixed' },
  { sentence: 'I\'m ___ favor of the new policy.', correct: 'in', explanation: 'IN favor of — стійкий вираз (на підтримку).', category: 'fixed' },
  { sentence: 'She is ___ average a good student.', correct: 'on', explanation: 'ON average — стійкий вираз (у середньому).', category: 'fixed' },
  { sentence: 'Don\'t laugh ___ him, it\'s not funny.', correct: 'at', explanation: 'Laugh AT — стійкий вираз (сміятися з когось).', category: 'fixed' },
  { sentence: 'He arrived ___ short notice.', correct: 'at', explanation: 'AT short notice — стійкий вираз (з коротким попередженням).', category: 'fixed' },
  { sentence: 'The new feature is ___ demand among users.', correct: 'in', explanation: 'IN demand — стійкий вираз (затребуваний, популярний).', category: 'fixed' },
  { sentence: 'I\'ll keep you ___ the loop about the updates.', correct: 'in', explanation: 'IN the loop — стійкий вираз (тримати в курсі).', category: 'fixed' },
  { sentence: 'She congratulated me ___ getting the promotion.', correct: 'on', explanation: 'Congratulate ON — стійкий вираз (вітати з).', category: 'fixed' },
  { sentence: 'We are ___ the same page about this issue.', correct: 'on', explanation: 'ON the same page — стійкий вираз (мати спільне розуміння).', category: 'fixed' },
  { sentence: 'He\'s ___ the top of his game right now.', correct: 'at', explanation: 'AT the top of — стійкий вираз (на вершині).', category: 'fixed' },
]
