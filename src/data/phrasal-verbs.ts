export interface PhrasalVerb {
  verb: string
  particle: string
  full: string
  meaning: string
  examples: { en: string; ua: string }[]
  frequency: 'high' | 'medium'
  baseVerb: string
}

export interface MeaningQuestion {
  phrasalVerb: string
  correctMeaning: string
  options: string[]
  correctIndex: number
}

export interface ParticleQuestion {
  baseVerb: string
  meaning: string
  correctParticle: string
  options: string[]
  correctIndex: number
  full: string
}

export const BASE_VERBS = [
  'get', 'take', 'look', 'give', 'come', 'go',
  'put', 'turn', 'break', 'make', 'bring', 'carry',
  'hold', 'run', 'set', 'pick', 'cut', 'fall', 'keep', 'work',
] as const

export const phrasalVerbs: PhrasalVerb[] = [
  // ==================== GET (8) ====================
  { verb: 'get', particle: 'up', full: 'get up', meaning: 'вставати (з ліжка)', examples: [{ en: 'I get up at 7 every morning.', ua: 'Я встаю о 7 щоранку.' }, { en: 'She got up late yesterday.', ua: 'Вона вчора встала пізно.' }], frequency: 'high', baseVerb: 'get' },
  { verb: 'get', particle: 'along', full: 'get along', meaning: 'ладити (з кимось)', examples: [{ en: 'Do you get along with your colleagues?', ua: 'Ти ладиш з колегами?' }, { en: 'They don\'t get along at all.', ua: 'Вони зовсім не ладять.' }], frequency: 'high', baseVerb: 'get' },
  { verb: 'get', particle: 'over', full: 'get over', meaning: 'одужати / пережити', examples: [{ en: 'It took weeks to get over the flu.', ua: 'Знадобилися тижні, щоб одужати від грипу.' }, { en: 'She finally got over the breakup.', ua: 'Вона нарешті пережила розставання.' }], frequency: 'high', baseVerb: 'get' },
  { verb: 'get', particle: 'rid of', full: 'get rid of', meaning: 'позбутися', examples: [{ en: 'I need to get rid of old clothes.', ua: 'Мені треба позбутися старого одягу.' }, { en: 'How do I get rid of this error?', ua: 'Як позбутися цієї помилки?' }], frequency: 'high', baseVerb: 'get' },
  { verb: 'get', particle: 'back', full: 'get back', meaning: 'повернутися', examples: [{ en: 'When did you get back from vacation?', ua: 'Коли ти повернувся з відпустки?' }, { en: 'I\'ll get back to you later.', ua: 'Я повернусь до тебе пізніше.' }], frequency: 'high', baseVerb: 'get' },
  { verb: 'get', particle: 'off', full: 'get off', meaning: 'вийти (з транспорту)', examples: [{ en: 'We need to get off at the next stop.', ua: 'Нам треба вийти на наступній зупинці.' }, { en: 'She got off the bus downtown.', ua: 'Вона вийшла з автобуса в центрі.' }], frequency: 'medium', baseVerb: 'get' },
  { verb: 'get', particle: 'on', full: 'get on', meaning: 'сісти (в транспорт)', examples: [{ en: 'We got on the train just in time.', ua: 'Ми сіли в потяг якраз вчасно.' }, { en: 'Get on the bus here.', ua: 'Сідай в автобус тут.' }], frequency: 'medium', baseVerb: 'get' },
  { verb: 'get', particle: 'through', full: 'get through', meaning: 'дістатися / пробитися', examples: [{ en: 'I can\'t get through to customer service.', ua: 'Не можу додзвонитися до підтримки.' }, { en: 'We\'ll get through this together.', ua: 'Ми пройдемо через це разом.' }], frequency: 'medium', baseVerb: 'get' },

  // ==================== TAKE (6) ====================
  { verb: 'take', particle: 'off', full: 'take off', meaning: 'зняти / злетіти', examples: [{ en: 'Take off your shoes, please.', ua: 'Зніми взуття, будь ласка.' }, { en: 'The plane takes off at 6 PM.', ua: 'Літак злітає о 18:00.' }], frequency: 'high', baseVerb: 'take' },
  { verb: 'take', particle: 'up', full: 'take up', meaning: 'зайнятися (хобі)', examples: [{ en: 'She took up yoga last year.', ua: 'Вона зайнялась йогою минулого року.' }, { en: 'I want to take up painting.', ua: 'Хочу зайнятися малюванням.' }], frequency: 'medium', baseVerb: 'take' },
  { verb: 'take', particle: 'care of', full: 'take care of', meaning: 'піклуватися', examples: [{ en: 'Who takes care of the kids?', ua: 'Хто піклується про дітей?' }, { en: 'I\'ll take care of the problem.', ua: 'Я вирішу цю проблему.' }], frequency: 'high', baseVerb: 'take' },
  { verb: 'take', particle: 'out', full: 'take out', meaning: 'винести / повести (на побачення)', examples: [{ en: 'Can you take out the trash?', ua: 'Можеш винести сміття?' }, { en: 'He took her out for dinner.', ua: 'Він повів її на вечерю.' }], frequency: 'medium', baseVerb: 'take' },
  { verb: 'take', particle: 'after', full: 'take after', meaning: 'бути схожим (на родича)', examples: [{ en: 'She takes after her mother.', ua: 'Вона схожа на маму.' }, { en: 'He takes after his grandfather.', ua: 'Він пішов у дідуся.' }], frequency: 'medium', baseVerb: 'take' },
  { verb: 'take', particle: 'over', full: 'take over', meaning: 'взяти під контроль', examples: [{ en: 'A new CEO will take over next month.', ua: 'Новий CEO візьме управління наступного місяця.' }, { en: 'Can you take over while I\'m away?', ua: 'Можеш замінити мене, поки мене нема?' }], frequency: 'medium', baseVerb: 'take' },

  // ==================== LOOK (5) ====================
  { verb: 'look', particle: 'for', full: 'look for', meaning: 'шукати', examples: [{ en: 'I\'m looking for my keys.', ua: 'Я шукаю свої ключі.' }, { en: 'She\'s looking for a new job.', ua: 'Вона шукає нову роботу.' }], frequency: 'high', baseVerb: 'look' },
  { verb: 'look', particle: 'after', full: 'look after', meaning: 'доглядати', examples: [{ en: 'Can you look after my cat this weekend?', ua: 'Можеш подоглядати за моїм котом на вихідних?' }, { en: 'She looks after her elderly parents.', ua: 'Вона доглядає за літніми батьками.' }], frequency: 'high', baseVerb: 'look' },
  { verb: 'look', particle: 'up', full: 'look up', meaning: 'знайти (інформацію)', examples: [{ en: 'Look up this word in the dictionary.', ua: 'Знайди це слово у словнику.' }, { en: 'I looked it up online.', ua: 'Я знайшов це в інтернеті.' }], frequency: 'high', baseVerb: 'look' },
  { verb: 'look', particle: 'forward to', full: 'look forward to', meaning: 'чекати з нетерпінням', examples: [{ en: 'I\'m looking forward to the holidays.', ua: 'Я з нетерпінням чекаю свят.' }, { en: 'We look forward to hearing from you.', ua: 'Чекаємо вашої відповіді.' }], frequency: 'high', baseVerb: 'look' },
  { verb: 'look', particle: 'out', full: 'look out', meaning: 'бути обережним', examples: [{ en: 'Look out! There\'s a car coming.', ua: 'Обережно! Їде машина.' }, { en: 'You should look out for pickpockets.', ua: 'Остерігайся кишенькових злодіїв.' }], frequency: 'medium', baseVerb: 'look' },

  // ==================== GIVE (4) ====================
  { verb: 'give', particle: 'up', full: 'give up', meaning: 'здатися / кинути', examples: [{ en: 'Don\'t give up! You can do it.', ua: 'Не здавайся! Ти зможеш.' }, { en: 'He gave up smoking last year.', ua: 'Він кинув курити минулого року.' }], frequency: 'high', baseVerb: 'give' },
  { verb: 'give', particle: 'back', full: 'give back', meaning: 'повернути', examples: [{ en: 'Give me back my book!', ua: 'Поверни мені мою книгу!' }, { en: 'I\'ll give it back tomorrow.', ua: 'Я поверну це завтра.' }], frequency: 'medium', baseVerb: 'give' },
  { verb: 'give', particle: 'away', full: 'give away', meaning: 'віддати / видати (секрет)', examples: [{ en: 'She gave away all her old clothes.', ua: 'Вона віддала весь старий одяг.' }, { en: 'Don\'t give away the ending!', ua: 'Не розкривай кінцівку!' }], frequency: 'medium', baseVerb: 'give' },
  { verb: 'give', particle: 'in', full: 'give in', meaning: 'поступитися', examples: [{ en: 'He finally gave in to their demands.', ua: 'Він нарешті поступився їхнім вимогам.' }, { en: 'Don\'t give in so easily.', ua: 'Не здавайся так легко.' }], frequency: 'medium', baseVerb: 'give' },

  // ==================== COME (4) ====================
  { verb: 'come', particle: 'back', full: 'come back', meaning: 'повернутися', examples: [{ en: 'When will you come back?', ua: 'Коли ти повернешся?' }, { en: 'She came back from London yesterday.', ua: 'Вона повернулась з Лондона вчора.' }], frequency: 'high', baseVerb: 'come' },
  { verb: 'come', particle: 'up with', full: 'come up with', meaning: 'придумати', examples: [{ en: 'She came up with a brilliant idea.', ua: 'Вона придумала геніальну ідею.' }, { en: 'Can you come up with a solution?', ua: 'Можеш придумати рішення?' }], frequency: 'high', baseVerb: 'come' },
  { verb: 'come', particle: 'across', full: 'come across', meaning: 'натрапити', examples: [{ en: 'I came across an interesting article.', ua: 'Я натрапив на цікаву статтю.' }, { en: 'She comes across as very confident.', ua: 'Вона справляє враження дуже впевненої.' }], frequency: 'medium', baseVerb: 'come' },
  { verb: 'come', particle: 'in', full: 'come in', meaning: 'увійти', examples: [{ en: 'Come in, please! The door is open.', ua: 'Заходь, будь ласка! Двері відчинені.' }, { en: 'She came in without knocking.', ua: 'Вона увійшла без стуку.' }], frequency: 'high', baseVerb: 'come' },

  // ==================== GO (5) ====================
  { verb: 'go', particle: 'on', full: 'go on', meaning: 'продовжувати', examples: [{ en: 'Please go on, I\'m listening.', ua: 'Продовжуй, я слухаю.' }, { en: 'What\'s going on here?', ua: 'Що тут відбувається?' }], frequency: 'high', baseVerb: 'go' },
  { verb: 'go', particle: 'out', full: 'go out', meaning: 'виходити / зустрічатися', examples: [{ en: 'Let\'s go out for dinner tonight.', ua: 'Підемо вечеряти сьогодні.' }, { en: 'They\'ve been going out for a year.', ua: 'Вони зустрічаються вже рік.' }], frequency: 'high', baseVerb: 'go' },
  { verb: 'go', particle: 'through', full: 'go through', meaning: 'пережити / переглянути', examples: [{ en: 'She went through a difficult time.', ua: 'Вона пережила важкий час.' }, { en: 'Let\'s go through the report together.', ua: 'Давай разом переглянемо звіт.' }], frequency: 'medium', baseVerb: 'go' },
  { verb: 'go', particle: 'off', full: 'go off', meaning: 'спрацювати (будильник) / зіпсуватися', examples: [{ en: 'The alarm went off at 6 AM.', ua: 'Будильник спрацював о 6 ранку.' }, { en: 'The milk has gone off.', ua: 'Молоко зіпсувалося.' }], frequency: 'medium', baseVerb: 'go' },
  { verb: 'go', particle: 'ahead', full: 'go ahead', meaning: 'діяти / продовжуй', examples: [{ en: 'Go ahead, I\'ll catch up later.', ua: 'Іди, я наздожену пізніше.' }, { en: 'Can I borrow your pen? — Go ahead!', ua: 'Можна позичити ручку? — Звісно!' }], frequency: 'high', baseVerb: 'go' },

  // ==================== PUT (4) ====================
  { verb: 'put', particle: 'on', full: 'put on', meaning: 'одягнути / увімкнути', examples: [{ en: 'Put on your jacket, it\'s cold.', ua: 'Одягни куртку, холодно.' }, { en: 'Can you put on some music?', ua: 'Увімкни якусь музику.' }], frequency: 'high', baseVerb: 'put' },
  { verb: 'put', particle: 'off', full: 'put off', meaning: 'відкласти', examples: [{ en: 'Don\'t put off your homework.', ua: 'Не відкладай домашню роботу.' }, { en: 'The meeting was put off until Friday.', ua: 'Зустріч відклали до пʼятниці.' }], frequency: 'high', baseVerb: 'put' },
  { verb: 'put', particle: 'away', full: 'put away', meaning: 'прибрати на місце', examples: [{ en: 'Put away your toys, please.', ua: 'Прибери іграшки, будь ласка.' }, { en: 'She put away the dishes.', ua: 'Вона прибрала посуд.' }], frequency: 'medium', baseVerb: 'put' },
  { verb: 'put', particle: 'up with', full: 'put up with', meaning: 'терпіти', examples: [{ en: 'I can\'t put up with this noise.', ua: 'Не можу терпіти цей шум.' }, { en: 'How do you put up with him?', ua: 'Як ти його терпиш?' }], frequency: 'medium', baseVerb: 'put' },

  // ==================== TURN (5) ====================
  { verb: 'turn', particle: 'on', full: 'turn on', meaning: 'увімкнути', examples: [{ en: 'Turn on the light, please.', ua: 'Увімкни світло, будь ласка.' }, { en: 'She turned on the TV.', ua: 'Вона увімкнула телевізор.' }], frequency: 'high', baseVerb: 'turn' },
  { verb: 'turn', particle: 'off', full: 'turn off', meaning: 'вимкнути', examples: [{ en: 'Don\'t forget to turn off the lights.', ua: 'Не забудь вимкнути світло.' }, { en: 'Turn off your phone during the movie.', ua: 'Вимкни телефон під час фільму.' }], frequency: 'high', baseVerb: 'turn' },
  { verb: 'turn', particle: 'out', full: 'turn out', meaning: 'виявитися', examples: [{ en: 'It turned out to be a mistake.', ua: 'Виявилось, що це була помилка.' }, { en: 'Everything turned out fine.', ua: 'Все виявилось добре.' }], frequency: 'high', baseVerb: 'turn' },
  { verb: 'turn', particle: 'down', full: 'turn down', meaning: 'відхилити / зменшити', examples: [{ en: 'She turned down the job offer.', ua: 'Вона відхилила пропозицію роботи.' }, { en: 'Can you turn down the volume?', ua: 'Можеш зменшити гучність?' }], frequency: 'medium', baseVerb: 'turn' },
  { verb: 'turn', particle: 'up', full: 'turn up', meaning: 'зʼявитися / збільшити', examples: [{ en: 'He turned up late as usual.', ua: 'Він зʼявився пізно, як завжди.' }, { en: 'Turn up the heat, it\'s freezing.', ua: 'Додай тепла, дуже холодно.' }], frequency: 'medium', baseVerb: 'turn' },

  // ==================== BREAK (3) ====================
  { verb: 'break', particle: 'down', full: 'break down', meaning: 'зламатися / розплакатися', examples: [{ en: 'My car broke down on the highway.', ua: 'Моя машина зламалась на трасі.' }, { en: 'She broke down in tears.', ua: 'Вона розплакалась.' }], frequency: 'high', baseVerb: 'break' },
  { verb: 'break', particle: 'up', full: 'break up', meaning: 'розійтися', examples: [{ en: 'They broke up after 3 years.', ua: 'Вони розійшлися після 3 років.' }, { en: 'She broke up with him yesterday.', ua: 'Вона вчора з ним розійшлась.' }], frequency: 'high', baseVerb: 'break' },
  { verb: 'break', particle: 'into', full: 'break into', meaning: 'вдертися', examples: [{ en: 'Someone broke into our office.', ua: 'Хтось вдерся до нашого офісу.' }, { en: 'He wants to break into the music industry.', ua: 'Він хоче пробитися у музичну індустрію.' }], frequency: 'medium', baseVerb: 'break' },

  // ==================== MAKE (4) ====================
  { verb: 'make', particle: 'up', full: 'make up', meaning: 'помиритися / вигадати', examples: [{ en: 'They argued but made up quickly.', ua: 'Вони посварилися, але швидко помирилися.' }, { en: 'She made up the whole story.', ua: 'Вона вигадала всю історію.' }], frequency: 'high', baseVerb: 'make' },
  { verb: 'make', particle: 'out', full: 'make out', meaning: 'розібрати / зрозуміти', examples: [{ en: 'I can\'t make out what he\'s saying.', ua: 'Не можу розібрати, що він каже.' }, { en: 'Can you make out the sign?', ua: 'Ти можеш розібрати знак?' }], frequency: 'medium', baseVerb: 'make' },
  { verb: 'make', particle: 'sure', full: 'make sure', meaning: 'переконатися', examples: [{ en: 'Make sure you lock the door.', ua: 'Переконайся, що ти замкнув двері.' }, { en: 'I\'ll make sure it\'s done by Friday.', ua: 'Я переконаюсь, що це буде зроблено до пʼятниці.' }], frequency: 'high', baseVerb: 'make' },
  { verb: 'make', particle: 'up for', full: 'make up for', meaning: 'компенсувати', examples: [{ en: 'I\'ll make up for lost time.', ua: 'Я компенсую втрачений час.' }, { en: 'Nothing can make up for his absence.', ua: 'Ніщо не може компенсувати його відсутність.' }], frequency: 'medium', baseVerb: 'make' },

  // ==================== BRING (3) ====================
  { verb: 'bring', particle: 'up', full: 'bring up', meaning: 'виховувати / згадати тему', examples: [{ en: 'She was brought up by her grandparents.', ua: 'Її виховували бабуся й дідусь.' }, { en: 'Don\'t bring up that topic again.', ua: 'Не піднімай цю тему знову.' }], frequency: 'high', baseVerb: 'bring' },
  { verb: 'bring', particle: 'back', full: 'bring back', meaning: 'повернути / нагадати', examples: [{ en: 'Bring back the book when you\'re done.', ua: 'Поверни книгу, коли дочитаєш.' }, { en: 'This song brings back memories.', ua: 'Ця пісня повертає спогади.' }], frequency: 'medium', baseVerb: 'bring' },
  { verb: 'bring', particle: 'about', full: 'bring about', meaning: 'спричинити', examples: [{ en: 'Technology brought about many changes.', ua: 'Технології спричинили багато змін.' }, { en: 'What brought about this decision?', ua: 'Що спричинило це рішення?' }], frequency: 'medium', baseVerb: 'bring' },

  // ==================== CARRY (2) ====================
  { verb: 'carry', particle: 'on', full: 'carry on', meaning: 'продовжувати', examples: [{ en: 'Carry on with your work.', ua: 'Продовжуй працювати.' }, { en: 'She carried on talking despite the noise.', ua: 'Вона продовжувала говорити попри шум.' }], frequency: 'high', baseVerb: 'carry' },
  { verb: 'carry', particle: 'out', full: 'carry out', meaning: 'виконати', examples: [{ en: 'They carried out the experiment successfully.', ua: 'Вони успішно провели експеримент.' }, { en: 'The plan was carried out perfectly.', ua: 'План було виконано ідеально.' }], frequency: 'medium', baseVerb: 'carry' },

  // ==================== HOLD (2) ====================
  { verb: 'hold', particle: 'on', full: 'hold on', meaning: 'зачекати / триматися', examples: [{ en: 'Hold on, I\'ll be right back.', ua: 'Зачекай, я зараз повернусь.' }, { en: 'Hold on tight!', ua: 'Тримайся міцно!' }], frequency: 'high', baseVerb: 'hold' },
  { verb: 'hold', particle: 'up', full: 'hold up', meaning: 'затримати', examples: [{ en: 'Sorry I\'m late, I was held up in traffic.', ua: 'Вибач за запізнення, я застряг у пробці.' }, { en: 'The project was held up by budget issues.', ua: 'Проект затримали через бюджет.' }], frequency: 'medium', baseVerb: 'hold' },

  // ==================== RUN (4) ====================
  { verb: 'run', particle: 'out of', full: 'run out of', meaning: 'вичерпати запас', examples: [{ en: 'We\'ve run out of milk.', ua: 'У нас закінчилося молоко.' }, { en: 'I\'m running out of patience.', ua: 'В мене закінчується терпіння.' }], frequency: 'high', baseVerb: 'run' },
  { verb: 'run', particle: 'into', full: 'run into', meaning: 'випадково зустріти', examples: [{ en: 'I ran into my old teacher at the mall.', ua: 'Я випадково зустрів старого вчителя в ТЦ.' }, { en: 'She ran into some problems.', ua: 'Вона натрапила на проблеми.' }], frequency: 'medium', baseVerb: 'run' },
  { verb: 'run', particle: 'away', full: 'run away', meaning: 'втекти', examples: [{ en: 'The dog ran away from home.', ua: 'Собака втік з дому.' }, { en: 'Don\'t run away from your problems.', ua: 'Не тікай від своїх проблем.' }], frequency: 'medium', baseVerb: 'run' },
  { verb: 'run', particle: 'over', full: 'run over', meaning: 'переїхати / переглянути', examples: [{ en: 'Let\'s run over the plan one more time.', ua: 'Давай переглянемо план ще раз.' }, { en: 'Be careful not to run over any animals.', ua: 'Будь обережний, не переїдь тварин.' }], frequency: 'medium', baseVerb: 'run' },

  // ==================== SET (3) ====================
  { verb: 'set', particle: 'up', full: 'set up', meaning: 'налаштувати / організувати', examples: [{ en: 'Can you help me set up the projector?', ua: 'Можеш допомогти налаштувати проектор?' }, { en: 'She set up her own business.', ua: 'Вона заснувала свій бізнес.' }], frequency: 'high', baseVerb: 'set' },
  { verb: 'set', particle: 'off', full: 'set off', meaning: 'вирушити в дорогу', examples: [{ en: 'We set off early in the morning.', ua: 'Ми вирушили рано вранці.' }, { en: 'What time should we set off?', ua: 'О котрій нам виїжджати?' }], frequency: 'medium', baseVerb: 'set' },
  { verb: 'set', particle: 'out', full: 'set out', meaning: 'мати намір / почати', examples: [{ en: 'She set out to prove everyone wrong.', ua: 'Вона мала намір довести, що всі помиляються.' }, { en: 'We set out on a long journey.', ua: 'Ми вирушили у довгу подорож.' }], frequency: 'medium', baseVerb: 'set' },

  // ==================== PICK (3) ====================
  { verb: 'pick', particle: 'up', full: 'pick up', meaning: 'підібрати / забрати / вивчити', examples: [{ en: 'Can you pick up the kids from school?', ua: 'Можеш забрати дітей зі школи?' }, { en: 'She picked up Spanish really fast.', ua: 'Вона дуже швидко вивчила іспанську.' }], frequency: 'high', baseVerb: 'pick' },
  { verb: 'pick', particle: 'out', full: 'pick out', meaning: 'обрати', examples: [{ en: 'Help me pick out a dress for the party.', ua: 'Допоможи мені обрати сукню на вечірку.' }, { en: 'She picked out the best apples.', ua: 'Вона обрала найкращі яблука.' }], frequency: 'medium', baseVerb: 'pick' },
  { verb: 'pick', particle: 'on', full: 'pick on', meaning: 'чіплятися до', examples: [{ en: 'Stop picking on your little brother!', ua: 'Перестань чіплятися до молодшого брата!' }, { en: 'The teacher always picks on me.', ua: 'Вчитель завжди чіпляється до мене.' }], frequency: 'medium', baseVerb: 'pick' },

  // ==================== CUT (3) ====================
  { verb: 'cut', particle: 'off', full: 'cut off', meaning: 'перервати / відрізати', examples: [{ en: 'Don\'t cut me off when I\'m speaking!', ua: 'Не перебивай мене, коли я говорю!' }, { en: 'The village was cut off by the flood.', ua: 'Село було відрізане повінню.' }], frequency: 'medium', baseVerb: 'cut' },
  { verb: 'cut', particle: 'down on', full: 'cut down on', meaning: 'скоротити споживання', examples: [{ en: 'You should cut down on sugar.', ua: 'Тобі варто менше їсти цукру.' }, { en: 'I\'m trying to cut down on coffee.', ua: 'Намагаюсь пити менше кави.' }], frequency: 'medium', baseVerb: 'cut' },
  { verb: 'cut', particle: 'out', full: 'cut out', meaning: 'припинити / вирізати', examples: [{ en: 'Cut it out! You\'re being annoying.', ua: 'Припини! Ти дратуєш.' }, { en: 'I cut out dairy from my diet.', ua: 'Я виключив молочне зі свого раціону.' }], frequency: 'medium', baseVerb: 'cut' },

  // ==================== FALL (3) ====================
  { verb: 'fall', particle: 'behind', full: 'fall behind', meaning: 'відставати', examples: [{ en: 'I fell behind with my studies.', ua: 'Я відстав у навчанні.' }, { en: 'Don\'t fall behind on your payments.', ua: 'Не допускай заборгованостей з оплатою.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'apart', full: 'fall apart', meaning: 'розвалитися', examples: [{ en: 'My old shoes are falling apart.', ua: 'Мої старі черевики розвалюються.' }, { en: 'Their marriage fell apart.', ua: 'Їхній шлюб розпався.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'out', full: 'fall out', meaning: 'посваритися / випасти', examples: [{ en: 'They fell out over money.', ua: 'Вони посварилися через гроші.' }, { en: 'Her hair started falling out.', ua: 'Її волосся почало випадати.' }], frequency: 'medium', baseVerb: 'fall' },

  // ==================== KEEP (3) ====================
  { verb: 'keep', particle: 'up with', full: 'keep up with', meaning: 'встигати за', examples: [{ en: 'I can\'t keep up with technology.', ua: 'Я не встигаю за технологіями.' }, { en: 'She walks so fast, I can\'t keep up.', ua: 'Вона ходить так швидко, я не встигаю.' }], frequency: 'high', baseVerb: 'keep' },
  { verb: 'keep', particle: 'on', full: 'keep on', meaning: 'продовжувати', examples: [{ en: 'Keep on trying, you\'ll get it.', ua: 'Продовжуй намагатися, у тебе вийде.' }, { en: 'He keeps on interrupting me.', ua: 'Він весь час мене перебиває.' }], frequency: 'medium', baseVerb: 'keep' },
  { verb: 'keep', particle: 'away', full: 'keep away', meaning: 'триматися подалі', examples: [{ en: 'Keep away from the fire!', ua: 'Тримайся подалі від вогню!' }, { en: 'I\'m trying to keep away from junk food.', ua: 'Намагаюсь уникати шкідливої їжі.' }], frequency: 'medium', baseVerb: 'keep' },

  // ==================== WORK (3) ====================
  { verb: 'work', particle: 'out', full: 'work out', meaning: 'тренуватися / вирішитися', examples: [{ en: 'I work out three times a week.', ua: 'Я тренуюсь тричі на тиждень.' }, { en: 'Everything will work out fine.', ua: 'Все буде добре.' }], frequency: 'high', baseVerb: 'work' },
  { verb: 'work', particle: 'on', full: 'work on', meaning: 'працювати над', examples: [{ en: 'I\'m working on a new project.', ua: 'Я працюю над новим проектом.' }, { en: 'She needs to work on her pronunciation.', ua: 'Їй потрібно попрацювати над вимовою.' }], frequency: 'high', baseVerb: 'work' },
  { verb: 'work', particle: 'out', full: 'work out', meaning: 'розібратися / порахувати', examples: [{ en: 'I can\'t work out the answer.', ua: 'Не можу знайти відповідь.' }, { en: 'Let me work out the total cost.', ua: 'Дай мені порахувати загальну вартість.' }], frequency: 'medium', baseVerb: 'work' },
]

// ==================== MEANING QUESTIONS (50+) ====================
export function generateMeaningQuestions(verbs: PhrasalVerb[]): MeaningQuestion[] {
  const allMeanings = verbs.map(v => v.meaning)
  return verbs.map(v => {
    const wrong = allMeanings
      .filter(m => m !== v.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    const options = [...wrong, v.meaning].sort(() => Math.random() - 0.5)
    return {
      phrasalVerb: v.full,
      correctMeaning: v.meaning,
      options,
      correctIndex: options.indexOf(v.meaning),
    }
  })
}

// ==================== PARTICLE QUESTIONS (50+) ====================
export function generateParticleQuestions(verbs: PhrasalVerb[]): ParticleQuestion[] {
  const allParticles = [...new Set(verbs.map(v => v.particle))]
  return verbs.map(v => {
    const wrong = allParticles
      .filter(p => p !== v.particle)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    const options = [...wrong, v.particle].sort(() => Math.random() - 0.5)
    return {
      baseVerb: v.verb,
      meaning: v.meaning,
      correctParticle: v.particle,
      options,
      correctIndex: options.indexOf(v.particle),
      full: v.full,
    }
  })
}
