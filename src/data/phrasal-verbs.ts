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
  'call', 'pull', 'throw', 'check', 'hand', 'pass',
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
  { verb: 'look', particle: 'out', full: 'look out', meaning: 'бути обережним', examples: [{ en: 'Look out! There\'s a car coming.', ua: 'Обережно! Їде машина.' }, { en: 'You should look out for pickpockets.', ua: 'Остерігайся кишенькових злодіїв.' }], frequency: 'high', baseVerb: 'look' },

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

  // ==================== BRING (6) ====================
  { verb: 'bring', particle: 'up', full: 'bring up', meaning: 'виховувати / згадати тему', examples: [{ en: 'She was brought up by her grandparents.', ua: 'Її виховували бабуся й дідусь.' }, { en: 'Don\'t bring up that topic again.', ua: 'Не піднімай цю тему знову.' }], frequency: 'high', baseVerb: 'bring' },
  { verb: 'bring', particle: 'back', full: 'bring back', meaning: 'повернути / нагадати', examples: [{ en: 'Bring back the book when you\'re done.', ua: 'Поверни книгу, коли дочитаєш.' }, { en: 'This song brings back memories.', ua: 'Ця пісня повертає спогади.' }], frequency: 'medium', baseVerb: 'bring' },
  { verb: 'bring', particle: 'about', full: 'bring about', meaning: 'спричинити', examples: [{ en: 'Technology brought about many changes.', ua: 'Технології спричинили багато змін.' }, { en: 'What brought about this decision?', ua: 'Що спричинило це рішення?' }], frequency: 'medium', baseVerb: 'bring' },
  { verb: 'bring', particle: 'in', full: 'bring in', meaning: 'залучити / приносити дохід', examples: [{ en: 'They brought in a consultant to help.', ua: 'Вони залучили консультанта для допомоги.' }, { en: 'The new product brings in a lot of revenue.', ua: 'Новий продукт приносить багато доходу.' }], frequency: 'medium', baseVerb: 'bring' },
  { verb: 'bring', particle: 'out', full: 'bring out', meaning: 'випустити / виявити', examples: [{ en: 'The company is bringing out a new phone next month.', ua: 'Компанія випускає новий телефон наступного місяця.' }, { en: 'Competition brings out the best in her.', ua: 'Змагання виявляють найкраще в ній.' }], frequency: 'medium', baseVerb: 'bring' },
  { verb: 'bring', particle: 'down', full: 'bring down', meaning: 'знизити / повалити', examples: [{ en: 'We need to bring down costs.', ua: 'Нам потрібно знизити витрати.' }, { en: 'The scandal brought down the government.', ua: 'Скандал повалив уряд.' }], frequency: 'medium', baseVerb: 'bring' },

  // ==================== CARRY (4) ====================
  { verb: 'carry', particle: 'on', full: 'carry on', meaning: 'продовжувати', examples: [{ en: 'Carry on with your work.', ua: 'Продовжуй працювати.' }, { en: 'She carried on talking despite the noise.', ua: 'Вона продовжувала говорити попри шум.' }], frequency: 'high', baseVerb: 'carry' },
  { verb: 'carry', particle: 'out', full: 'carry out', meaning: 'виконати', examples: [{ en: 'They carried out the experiment successfully.', ua: 'Вони успішно провели експеримент.' }, { en: 'The plan was carried out perfectly.', ua: 'План було виконано ідеально.' }], frequency: 'medium', baseVerb: 'carry' },
  { verb: 'carry', particle: 'away', full: 'carry away', meaning: 'захопитися / понести', examples: [{ en: 'Don\'t get carried away with shopping.', ua: 'Не захоплюйся шопінгом.' }, { en: 'He got carried away and spent too much money.', ua: 'Він захопився і витратив занадто багато грошей.' }], frequency: 'medium', baseVerb: 'carry' },
  { verb: 'carry', particle: 'through', full: 'carry through', meaning: 'довести до кінця', examples: [{ en: 'Her determination carried her through the difficult times.', ua: 'Її рішучість допомогла їй пережити важкі часи.' }, { en: 'We need to carry this project through to completion.', ua: 'Ми повинні довести цей проект до завершення.' }], frequency: 'medium', baseVerb: 'carry' },

  // ==================== HOLD (5) ====================
  { verb: 'hold', particle: 'on', full: 'hold on', meaning: 'зачекати / триматися', examples: [{ en: 'Hold on, I\'ll be right back.', ua: 'Зачекай, я зараз повернусь.' }, { en: 'Hold on tight!', ua: 'Тримайся міцно!' }], frequency: 'high', baseVerb: 'hold' },
  { verb: 'hold', particle: 'up', full: 'hold up', meaning: 'затримати', examples: [{ en: 'Sorry I\'m late, I was held up in traffic.', ua: 'Вибач за запізнення, я застряг у пробці.' }, { en: 'The project was held up by budget issues.', ua: 'Проект затримали через бюджет.' }], frequency: 'medium', baseVerb: 'hold' },
  { verb: 'hold', particle: 'back', full: 'hold back', meaning: 'стримувати(ся)', examples: [{ en: 'She held back her tears during the speech.', ua: 'Вона стримувала сльози під час промови.' }, { en: 'Don\'t hold back, tell me what you really think.', ua: 'Не стримуйся, скажи мені, що ти справді думаєш.' }], frequency: 'medium', baseVerb: 'hold' },
  { verb: 'hold', particle: 'off', full: 'hold off', meaning: 'відкласти / почекати', examples: [{ en: 'Let\'s hold off on making a decision until Friday.', ua: 'Давай почекаємо з рішенням до п\'ятниці.' }, { en: 'They held off the attack for three hours.', ua: 'Вони стримували атаку три години.' }], frequency: 'medium', baseVerb: 'hold' },
  { verb: 'hold', particle: 'out', full: 'hold out', meaning: 'протриматися / простягнути', examples: [{ en: 'How long can we hold out without supplies?', ua: 'Як довго ми протримаємося без запасів?' }, { en: 'He held out his hand to greet me.', ua: 'Він простягнув руку, щоб привітатися.' }], frequency: 'medium', baseVerb: 'hold' },

  // ==================== RUN (6) ====================
  { verb: 'run', particle: 'out of', full: 'run out of', meaning: 'вичерпати запас', examples: [{ en: 'We\'ve run out of milk.', ua: 'У нас закінчилося молоко.' }, { en: 'I\'m running out of patience.', ua: 'В мене закінчується терпіння.' }], frequency: 'high', baseVerb: 'run' },
  { verb: 'run', particle: 'into', full: 'run into', meaning: 'випадково зустріти', examples: [{ en: 'I ran into my old teacher at the mall.', ua: 'Я випадково зустрів старого вчителя в ТЦ.' }, { en: 'She ran into some problems.', ua: 'Вона натрапила на проблеми.' }], frequency: 'medium', baseVerb: 'run' },
  { verb: 'run', particle: 'away', full: 'run away', meaning: 'втекти', examples: [{ en: 'The dog ran away from home.', ua: 'Собака втік з дому.' }, { en: 'Don\'t run away from your problems.', ua: 'Не тікай від своїх проблем.' }], frequency: 'medium', baseVerb: 'run' },
  { verb: 'run', particle: 'over', full: 'run over', meaning: 'переїхати / переглянути', examples: [{ en: 'Let\'s run over the plan one more time.', ua: 'Давай переглянемо план ще раз.' }, { en: 'Be careful not to run over any animals.', ua: 'Будь обережний, не переїдь тварин.' }], frequency: 'medium', baseVerb: 'run' },
  { verb: 'run', particle: 'through', full: 'run through', meaning: 'швидко переглянути / прорепетирувати', examples: [{ en: 'Let me run through the agenda before the meeting.', ua: 'Дай мені швидко переглянути порядок денний перед зустріччю.' }, { en: 'Can we run through the presentation one more time?', ua: 'Можемо ще раз прорепетирувати презентацію?' }], frequency: 'medium', baseVerb: 'run' },
  { verb: 'run', particle: 'down', full: 'run down', meaning: 'сісти (про батарею) / коротко переказати', examples: [{ en: 'My phone battery has run down.', ua: 'Батарея мого телефону сіла.' }, { en: 'Let me run down the list of changes for you.', ua: 'Дай мені коротко переказати тобі список змін.' }], frequency: 'medium', baseVerb: 'run' },

  // ==================== SET (6) ====================
  { verb: 'set', particle: 'up', full: 'set up', meaning: 'налаштувати / організувати', examples: [{ en: 'Can you help me set up the projector?', ua: 'Можеш допомогти налаштувати проектор?' }, { en: 'She set up her own business.', ua: 'Вона заснувала свій бізнес.' }], frequency: 'high', baseVerb: 'set' },
  { verb: 'set', particle: 'off', full: 'set off', meaning: 'вирушити в дорогу', examples: [{ en: 'We set off early in the morning.', ua: 'Ми вирушили рано вранці.' }, { en: 'What time should we set off?', ua: 'О котрій нам виїжджати?' }], frequency: 'medium', baseVerb: 'set' },
  { verb: 'set', particle: 'out', full: 'set out', meaning: 'мати намір / почати', examples: [{ en: 'She set out to prove everyone wrong.', ua: 'Вона мала намір довести, що всі помиляються.' }, { en: 'We set out on a long journey.', ua: 'Ми вирушили у довгу подорож.' }], frequency: 'medium', baseVerb: 'set' },
  { verb: 'set', particle: 'aside', full: 'set aside', meaning: 'відкласти (час, гроші)', examples: [{ en: 'Try to set aside some money every month.', ua: 'Намагайся відкладати трохи грошей щомісяця.' }, { en: 'Let\'s set aside our differences and work together.', ua: 'Давай відкинемо наші розбіжності і працюватимемо разом.' }], frequency: 'medium', baseVerb: 'set' },
  { verb: 'set', particle: 'back', full: 'set back', meaning: 'затримати / коштувати', examples: [{ en: 'The delay set the project back by two weeks.', ua: 'Затримка відкинула проект на два тижні.' }, { en: 'That new laptop set me back quite a bit.', ua: 'Той новий ноутбук коштував мені чималу суму.' }], frequency: 'medium', baseVerb: 'set' },
  { verb: 'set', particle: 'in', full: 'set in', meaning: 'настати / початися (про щось негативне)', examples: [{ en: 'Winter has set in early this year.', ua: 'Зима настала рано цього року.' }, { en: 'Panic set in when they realized they were lost.', ua: 'Паніка охопила їх, коли вони зрозуміли, що заблукали.' }], frequency: 'medium', baseVerb: 'set' },

  // ==================== PICK (3) ====================
  { verb: 'pick', particle: 'up', full: 'pick up', meaning: 'підібрати / забрати / вивчити', examples: [{ en: 'Can you pick up the kids from school?', ua: 'Можеш забрати дітей зі школи?' }, { en: 'She picked up Spanish really fast.', ua: 'Вона дуже швидко вивчила іспанську.' }], frequency: 'high', baseVerb: 'pick' },
  { verb: 'pick', particle: 'out', full: 'pick out', meaning: 'обрати', examples: [{ en: 'Help me pick out a dress for the party.', ua: 'Допоможи мені обрати сукню на вечірку.' }, { en: 'She picked out the best apples.', ua: 'Вона обрала найкращі яблука.' }], frequency: 'medium', baseVerb: 'pick' },
  { verb: 'pick', particle: 'on', full: 'pick on', meaning: 'чіплятися до', examples: [{ en: 'Stop picking on your little brother!', ua: 'Перестань чіплятися до молодшого брата!' }, { en: 'The teacher always picks on me.', ua: 'Вчитель завжди чіпляється до мене.' }], frequency: 'medium', baseVerb: 'pick' },

  // ==================== CUT (5) ====================
  { verb: 'cut', particle: 'off', full: 'cut off', meaning: 'перервати / відрізати', examples: [{ en: 'Don\'t cut me off when I\'m speaking!', ua: 'Не перебивай мене, коли я говорю!' }, { en: 'The village was cut off by the flood.', ua: 'Село було відрізане повінню.' }], frequency: 'medium', baseVerb: 'cut' },
  { verb: 'cut', particle: 'down on', full: 'cut down on', meaning: 'скоротити споживання', examples: [{ en: 'You should cut down on sugar.', ua: 'Тобі варто менше їсти цукру.' }, { en: 'I\'m trying to cut down on coffee.', ua: 'Намагаюсь пити менше кави.' }], frequency: 'medium', baseVerb: 'cut' },
  { verb: 'cut', particle: 'out', full: 'cut out', meaning: 'припинити / вирізати', examples: [{ en: 'Cut it out! You\'re being annoying.', ua: 'Припини! Ти дратуєш.' }, { en: 'I cut out dairy from my diet.', ua: 'Я виключив молочне зі свого раціону.' }], frequency: 'medium', baseVerb: 'cut' },
  { verb: 'cut', particle: 'in', full: 'cut in', meaning: 'втрутитися / вклинитися', examples: [{ en: 'Sorry to cut in, but I have a question.', ua: 'Вибачте, що втручаюсь, але маю питання.' }, { en: 'A car cut in right in front of me.', ua: 'Машина вклинилась прямо переді мною.' }], frequency: 'medium', baseVerb: 'cut' },
  { verb: 'cut', particle: 'back', full: 'cut back', meaning: 'скоротити (витрати, виробництво)', examples: [{ en: 'The company had to cut back on expenses.', ua: 'Компанія мусила скоротити витрати.' }, { en: 'We\'re cutting back on staff this quarter.', ua: 'Ми скорочуємо персонал цього кварталу.' }], frequency: 'medium', baseVerb: 'cut' },

  // ==================== FALL (6) ====================
  { verb: 'fall', particle: 'behind', full: 'fall behind', meaning: 'відставати', examples: [{ en: 'I fell behind with my studies.', ua: 'Я відстав у навчанні.' }, { en: 'Don\'t fall behind on your payments.', ua: 'Не допускай заборгованостей з оплатою.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'apart', full: 'fall apart', meaning: 'розвалитися', examples: [{ en: 'My old shoes are falling apart.', ua: 'Мої старі черевики розвалюються.' }, { en: 'Their marriage fell apart.', ua: 'Їхній шлюб розпався.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'out', full: 'fall out', meaning: 'посваритися / випасти', examples: [{ en: 'They fell out over money.', ua: 'Вони посварилися через гроші.' }, { en: 'Her hair started falling out.', ua: 'Її волосся почало випадати.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'for', full: 'fall for', meaning: 'закохатися / попастися на', examples: [{ en: 'She fell for him the moment they met.', ua: 'Вона закохалася в нього в момент зустрічі.' }, { en: 'I can\'t believe you fell for that scam.', ua: 'Не можу повірити, що ти попався на цей обман.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'through', full: 'fall through', meaning: 'зірватися / провалитися (про плани)', examples: [{ en: 'The deal fell through at the last minute.', ua: 'Угода зірвалася в останній момент.' }, { en: 'Our vacation plans fell through.', ua: 'Наші плани на відпустку провалилися.' }], frequency: 'medium', baseVerb: 'fall' },
  { verb: 'fall', particle: 'off', full: 'fall off', meaning: 'впасти з / зменшитися', examples: [{ en: 'He fell off his bike and hurt his knee.', ua: 'Він впав з велосипеда і забив коліно.' }, { en: 'Sales have fallen off since the summer.', ua: 'Продажі зменшилися з літа.' }], frequency: 'medium', baseVerb: 'fall' },

  // ==================== KEEP (6) ====================
  { verb: 'keep', particle: 'up with', full: 'keep up with', meaning: 'встигати за', examples: [{ en: 'I can\'t keep up with technology.', ua: 'Я не встигаю за технологіями.' }, { en: 'She walks so fast, I can\'t keep up.', ua: 'Вона ходить так швидко, я не встигаю.' }], frequency: 'high', baseVerb: 'keep' },
  { verb: 'keep', particle: 'on', full: 'keep on', meaning: 'продовжувати', examples: [{ en: 'Keep on trying, you\'ll get it.', ua: 'Продовжуй намагатися, у тебе вийде.' }, { en: 'He keeps on interrupting me.', ua: 'Він весь час мене перебиває.' }], frequency: 'medium', baseVerb: 'keep' },
  { verb: 'keep', particle: 'away', full: 'keep away', meaning: 'триматися подалі', examples: [{ en: 'Keep away from the fire!', ua: 'Тримайся подалі від вогню!' }, { en: 'I\'m trying to keep away from junk food.', ua: 'Намагаюсь уникати шкідливої їжі.' }], frequency: 'medium', baseVerb: 'keep' },
  { verb: 'keep', particle: 'out', full: 'keep out', meaning: 'не впускати / не входити', examples: [{ en: 'Keep out! This area is restricted.', ua: 'Не входити! Ця зона обмежена.' }, { en: 'Close the window to keep the cold out.', ua: 'Закрий вікно, щоб не впускати холод.' }], frequency: 'medium', baseVerb: 'keep' },
  { verb: 'keep', particle: 'up', full: 'keep up', meaning: 'підтримувати / не відставати', examples: [{ en: 'Keep up the good work!', ua: 'Продовжуй гарну роботу!' }, { en: 'The noise kept me up all night.', ua: 'Шум не давав мені спати всю ніч.' }], frequency: 'high', baseVerb: 'keep' },
  { verb: 'keep', particle: 'back', full: 'keep back', meaning: 'приховувати / тримати на відстані', examples: [{ en: 'I feel like she\'s keeping something back from me.', ua: 'Мені здається, вона щось від мене приховує.' }, { en: 'The police told the crowd to keep back.', ua: 'Поліція наказала натовпу триматися на відстані.' }], frequency: 'medium', baseVerb: 'keep' },

  // ==================== WORK (5) ====================
  { verb: 'work', particle: 'out', full: 'work out', meaning: 'тренуватися / вирішитися', examples: [{ en: 'I work out three times a week.', ua: 'Я тренуюсь тричі на тиждень.' }, { en: 'Everything will work out fine.', ua: 'Все буде добре.' }], frequency: 'high', baseVerb: 'work' },
  { verb: 'work', particle: 'on', full: 'work on', meaning: 'працювати над', examples: [{ en: 'I\'m working on a new project.', ua: 'Я працюю над новим проектом.' }, { en: 'She needs to work on her pronunciation.', ua: 'Їй потрібно попрацювати над вимовою.' }], frequency: 'high', baseVerb: 'work' },
  { verb: 'work', particle: 'out', full: 'work out', meaning: 'розібратися / порахувати', examples: [{ en: 'I can\'t work out the answer.', ua: 'Не можу знайти відповідь.' }, { en: 'Let me work out the total cost.', ua: 'Дай мені порахувати загальну вартість.' }], frequency: 'medium', baseVerb: 'work' },
  { verb: 'work', particle: 'through', full: 'work through', meaning: 'опрацювати / розібратися поступово', examples: [{ en: 'We need to work through these issues one by one.', ua: 'Нам потрібно опрацювати ці питання одне за одним.' }, { en: 'She\'s working through her feelings with a therapist.', ua: 'Вона опрацьовує свої почуття з терапевтом.' }], frequency: 'medium', baseVerb: 'work' },
  { verb: 'work', particle: 'around', full: 'work around', meaning: 'обійти (проблему)', examples: [{ en: 'We found a way to work around the bug.', ua: 'Ми знайшли спосіб обійти цю помилку.' }, { en: 'You can work around the restriction by using a VPN.', ua: 'Можна обійти обмеження за допомогою VPN.' }], frequency: 'medium', baseVerb: 'work' },

  // ==================== CALL (4) ====================
  { verb: 'call', particle: 'off', full: 'call off', meaning: 'скасувати', examples: [{ en: 'They called off the meeting due to the storm.', ua: 'Вони скасували зустріч через шторм.' }, { en: 'The wedding was called off at the last minute.', ua: 'Весілля скасували в останню мить.' }], frequency: 'high', baseVerb: 'call' },
  { verb: 'call', particle: 'up', full: 'call up', meaning: 'зателефонувати', examples: [{ en: 'I\'ll call you up when I get home.', ua: 'Я тобі зателефоную, коли приїду додому.' }, { en: 'She called up the restaurant to make a reservation.', ua: 'Вона зателефонувала в ресторан, щоб забронювати столик.' }], frequency: 'medium', baseVerb: 'call' },
  { verb: 'call', particle: 'back', full: 'call back', meaning: 'передзвонити', examples: [{ en: 'Can I call you back in five minutes?', ua: 'Можу передзвонити тобі через п\'ять хвилин?' }, { en: 'He never called me back.', ua: 'Він так і не передзвонив мені.' }], frequency: 'high', baseVerb: 'call' },
  { verb: 'call', particle: 'for', full: 'call for', meaning: 'вимагати / потребувати', examples: [{ en: 'This situation calls for immediate action.', ua: 'Ця ситуація вимагає негайних дій.' }, { en: 'The recipe calls for two eggs.', ua: 'За рецептом потрібно два яйця.' }], frequency: 'medium', baseVerb: 'call' },

  // ==================== PULL (4) ====================
  { verb: 'pull', particle: 'off', full: 'pull off', meaning: 'вдало здійснити', examples: [{ en: 'She managed to pull off a surprise party.', ua: 'Їй вдалося організувати вечірку-сюрприз.' }, { en: 'I can\'t believe we pulled it off!', ua: 'Не можу повірити, що ми це зробили!' }], frequency: 'medium', baseVerb: 'pull' },
  { verb: 'pull', particle: 'out', full: 'pull out', meaning: 'витягнути / вийти', examples: [{ en: 'He pulled out his wallet and paid.', ua: 'Він витягнув гаманець і заплатив.' }, { en: 'The company pulled out of the deal.', ua: 'Компанія вийшла з угоди.' }], frequency: 'medium', baseVerb: 'pull' },
  { verb: 'pull', particle: 'through', full: 'pull through', meaning: 'видужати / подолати', examples: [{ en: 'He was very sick, but he pulled through.', ua: 'Він був дуже хворий, але одужав.' }, { en: 'The team pulled through despite all the setbacks.', ua: 'Команда подолала труднощі попри всі перешкоди.' }], frequency: 'medium', baseVerb: 'pull' },
  { verb: 'pull', particle: 'over', full: 'pull over', meaning: 'зупинитися на узбіччі', examples: [{ en: 'The police officer asked him to pull over.', ua: 'Поліцейський попросив його зупинитися.' }, { en: 'Let\'s pull over and check the map.', ua: 'Давай зупинимося і перевіримо карту.' }], frequency: 'medium', baseVerb: 'pull' },

  // ==================== THROW (3) ====================
  { verb: 'throw', particle: 'away', full: 'throw away', meaning: 'викинути', examples: [{ en: 'Don\'t throw away those leftovers, I\'ll eat them.', ua: 'Не викидай ту їжу, я її з\'їм.' }, { en: 'She threw away all his old letters.', ua: 'Вона викинула всі його старі листи.' }], frequency: 'high', baseVerb: 'throw' },
  { verb: 'throw', particle: 'up', full: 'throw up', meaning: 'блювати', examples: [{ en: 'He felt sick and threw up.', ua: 'Йому стало погано, і його знудило.' }, { en: 'The child threw up after eating too much candy.', ua: 'Дитину знудило після того, як вона з\'їла забагато цукерок.' }], frequency: 'medium', baseVerb: 'throw' },
  { verb: 'throw', particle: 'out', full: 'throw out', meaning: 'викинути / вигнати', examples: [{ en: 'They threw out all the old furniture.', ua: 'Вони викинули всі старі меблі.' }, { en: 'He was thrown out of the bar for fighting.', ua: 'Його вигнали з бару за бійку.' }], frequency: 'medium', baseVerb: 'throw' },

  // ==================== CHECK (3) ====================
  { verb: 'check', particle: 'in', full: 'check in', meaning: 'зареєструватися (в готелі / на рейс)', examples: [{ en: 'We checked in at the hotel at noon.', ua: 'Ми зареєструвалися в готелі опівдні.' }, { en: 'You can check in online 24 hours before the flight.', ua: 'Можна зареєструватися онлайн за 24 години до рейсу.' }], frequency: 'high', baseVerb: 'check' },
  { verb: 'check', particle: 'out', full: 'check out', meaning: 'виїхати (з готелю) / подивитися', examples: [{ en: 'We have to check out by 11 AM.', ua: 'Ми маємо виїхати до 11 ранку.' }, { en: 'Check out this new app!', ua: 'Подивись цей новий додаток!' }], frequency: 'high', baseVerb: 'check' },
  { verb: 'check', particle: 'up on', full: 'check up on', meaning: 'перевірити (як справи у когось)', examples: [{ en: 'She called to check up on her parents.', ua: 'Вона зателефонувала, щоб дізнатися, як справи у батьків.' }, { en: 'The boss keeps checking up on us.', ua: 'Начальник постійно нас перевіряє.' }], frequency: 'medium', baseVerb: 'check' },

  // ==================== HAND (3) ====================
  { verb: 'hand', particle: 'in', full: 'hand in', meaning: 'здати (роботу)', examples: [{ en: 'Please hand in your essays by Friday.', ua: 'Будь ласка, здайте есеї до п\'ятниці.' }, { en: 'She handed in her resignation letter.', ua: 'Вона подала заяву на звільнення.' }], frequency: 'high', baseVerb: 'hand' },
  { verb: 'hand', particle: 'out', full: 'hand out', meaning: 'роздати', examples: [{ en: 'The teacher handed out the worksheets.', ua: 'Вчитель роздав робочі аркуші.' }, { en: 'They were handing out free samples at the store.', ua: 'В магазині роздавали безкоштовні зразки.' }], frequency: 'medium', baseVerb: 'hand' },
  { verb: 'hand', particle: 'over', full: 'hand over', meaning: 'передати', examples: [{ en: 'Hand over the documents, please.', ua: 'Передайте документи, будь ласка.' }, { en: 'The thief was told to hand over the money.', ua: 'Злодію наказали віддати гроші.' }], frequency: 'medium', baseVerb: 'hand' },

  // ==================== PASS (3) ====================
  { verb: 'pass', particle: 'away', full: 'pass away', meaning: 'померти (евфемізм)', examples: [{ en: 'Her grandfather passed away last spring.', ua: 'Її дідусь помер минулої весни.' }, { en: 'He passed away peacefully in his sleep.', ua: 'Він мирно відійшов уві сні.' }], frequency: 'high', baseVerb: 'pass' },
  { verb: 'pass', particle: 'out', full: 'pass out', meaning: 'знепритомніти / роздати', examples: [{ en: 'She passed out from the heat.', ua: 'Вона знепритомніла від спеки.' }, { en: 'The teacher passed out the tests.', ua: 'Вчитель роздав тести.' }], frequency: 'medium', baseVerb: 'pass' },
  { verb: 'pass', particle: 'on', full: 'pass on', meaning: 'передати (інформацію) / відмовитися', examples: [{ en: 'Can you pass on this message to your manager?', ua: 'Можеш передати це повідомлення менеджеру?' }, { en: 'I\'ll pass on dessert, I\'m full.', ua: 'Я відмовлюсь від десерту, я наївся.' }], frequency: 'medium', baseVerb: 'pass' },
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
