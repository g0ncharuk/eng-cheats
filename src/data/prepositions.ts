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
  // ==================== TIME (15) ====================
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

  // ==================== PLACE (13) ====================
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

  // ==================== FIXED EXPRESSIONS (14) ====================
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
]
