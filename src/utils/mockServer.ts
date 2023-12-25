import { Test, User } from "../utils/types";

export let testsFromServer: Test[] = [
  {
    id: 1,
    title: 'Front-end developer test',
    questions: [
      {
        id: 1,
        question: "Яке традиційне ім'я JavaScript?",
        options: ["Java Script", "ECMAScript", "Java", "JScript"],
        correctIndex: 1,
      },
      {
        id: 2,
        question: "Яка функція використовується для виводу тексту в консоль у JavaScript?",
        options: ["console.log()", "print()", "echo()", "log()"],
        correctIndex: 0,
      },
      {
        id: 3,
        question: "Що таке HTML?",
        options: ["HyperText Markup Language", "High-Level Text Manipulation Language", "HyperTransfer Text Markup Language", "HyperText Makeup Language"],
        correctIndex: 0
      },
      {
        id: 4,
        question: "Як створити заголовок першого рівня в HTML?",
        options: ["<h1>", "<h2>", "<heading>", "<head>"],
        correctIndex: 0
      },
      {
        id: 5,
        question: "Що означає CSS?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctIndex: 2
      },
      {
        id: 6,
        question: "Яке ключове слово використовується для оголошення змінної в JavaScript?",
        options: ["var", "let", "const", "variable"],
        correctIndex: 0
      },
      {
        id: 7,
        question: "Яка функція використовується для отримання довжини рядка в JavaScript?",
        options: ["length()", "getSize()", "len()", "stringLength()"],
        correctIndex: 0
      },
      {
        id: 8,
        question: "Що таке DOM в контексті веб-розробки?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"],
        correctIndex: 0
      },
      {
        id: 9,
        question: "Яка функція використовується для створення нового елемента в DOM?",
        options: ["createElement()", "createNode()", "newElement()", "makeElement()"],
        correctIndex: 0
      },
      {
        id: 10,
        question: "Яке ключове слово використовується для визначення функції в JavaScript?",
        options: ["function", "define", "func", "method"],
        correctIndex: 0
      },
      {
        id: 11,
        "question": "Що таке атрибут src в тегу <img>?",
        options: ["Source", "Script", "Style", "Image"],
        correctIndex: 0
      },
      {
        id: 12,
        question: "Як обрати всі елементи з певним класом в CSS?",
        options: [".class", "#class", "class", "*class"],
        correctIndex: 0
      },
      {
        id: 13,
        question: "Що таке AJAX?",
        options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous JSON and XML", "Advanced JSON and XML"],
        correctIndex: 0
      },
      {
        id: 14,
        question: "Яке ключове слово використовується для створення об'єкта в JavaScript?",
        options: ["object", "create", "make", "new"],
        correctIndex: 3
      },
      {
        id: 15,
        question: "Яке ключове слово використовується для визначення класу в CSS?",
        options: [".class", "#class", "class", "*class"],
        correctIndex: 0
      }
    ],
  },
  {
    id: 2,
    title: 'General IT test',
    questions : [
      {
        id: 1,
        question: "Що таке логіка в програмуванні?",
        options: ["Математична галузь", "Спосіб мислення", "Апаратний компонент", "Мова програмування"],
        correctIndex: 1
      },
      {
        id: 2,
        question: "Які основні види циклів існують в програмуванні?",
        options: ["For, While, If", "Loop, Iterate, Execute", "Repeat, Until, Break", "Cycle, Iteration, Condition"],
        correctIndex: 0
      },
      {
        id: 3,
        question: "Що таке алгоритм?",
        options: ["Програмний код", "Набір інструкцій", "Спосіб зберігання даних", "Коротка назва програми"],
        correctIndex: 1
      },
      {
        id: 4,
        question: "Які основні типи даних в програмуванні?",
        options: ["Text, Number, Boolean", "String, Integer, Float", "Character, Integer, Double", "Array, Object, Function"],
        correctIndex: 0
      },
      {
        id: 5,
        question: "Що таке змінна в програмуванні?",
        options: ["Контейнер для зберігання даних", "Вираз в умовному операторі", "Мова програмування", "Спосіб введення даних"],
        correctIndex: 0
      },
      {
        id: 6,
        question: "Яке ключове слово використовується для об'явлення функції в багатьох мовах програмування?",
        options: ["function", "def", "method", "procedure"],
        correctIndex: 0
      },
      {
        id: 7,
        question: "Які основні операції порівняння в програмуванні?",
        options: [">, <, ==", "==, !=, <=", "Compare, Equal, Not", "Greater, Less, Equals"],
        correctIndex: 0
      },
      {
        id: 8,
        question: "Яке призначення масивів в програмуванні?",
        options: ["Зберігання кольорів", "Запис даних в файл", "Об'єднання об'єктів", "Зберігання послідовності даних"],
        correctIndex: 3
      },
      {
        id: 9,
        question: "Що таке інкапсуляція в об'єктно-орієнтованому програмуванні?",
        options: ["Процес прийняття даних", "Зберігання даних разом з методами їх обробки", "Розділення даних та методів", "Модифікація даних в об'єкті"],
        correctIndex: 1
      },
      {
        id: 10,
        question: "Яке ключове слово використовується для створення умови в різних мовах програмування?",
        options: ["condition", "if", "check", "validate"],
        correctIndex: 1
      }
    ],
  },
  {
    id: 3,
    title: 'What do you know about history?',
    questions :  [
      {
        id: 11,
        question: "У якому році відбулася Велика Французька революція?",
        options: ["1789", "1804", "1750", "1832"],
        correctIndex: 0
      },
      {
        id: 12,
        question: "Хто був першим президентом Сполучених Штатів Америки?",
        options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
        correctIndex: 0
      },
      {
        id: 13,
        question: "Що стало причиною Першої світової війни?",
        options: ["Атентат на Франца Фердинанда", "Територіальні претензії", "Економічні конфлікти", "Релігійні суперечності"],
        correctIndex: 0
      },
      {
        id: 14,
        question: "Хто був засновником Римської імперії?",
        options: ["Julius Caesar", "Nero", "Augustus", "Cicero"],
        correctIndex: 2
      },
      {
        id: 15,
        question: "Що стало причиною Великої депресії в 1930-их роках?",
        options: ["Банкрутство багатьох компаній", "Перепродукція товарів", "Фінансова криза", "Землетрус"],
        correctIndex: 1
      },
      {
        id: 16,
        question: "Яка подія визначає початок Другої світової війни?",
        options: ["Напад на Польщу", "Напад на Францію", "Підписання Молотов-Риббентроп пакту", "Атака на Перл-Харбор"],
        correctIndex: 0
      },
      {
        id: 17,
        question: "Хто був фараоном під час будівництва піраміди Хеопса?",
        options: ["Хеопс", "Рамзес II", "Клеопатра", "Тутмос III"],
        correctIndex: 0
      },
      {
        id: 18,
        question: "Що стало причиною Пелопонеської війни в Давній Греції?",
        options: ["Релігійні конфлікти", "Торговельні суперечності", "Територіальні претензії", "Спроба Афін стати імперією"],
        correctIndex: 3
      },
      {
        id: 19,
        question: "Коли відбулася Велика індустріальна революція?",
        options: ["XVIII століття", "XIX століття", "XX століття", "XVII століття"],
        correctIndex: 1
      },
      {
        id: 20,
        question: "Хто був лідером китайського Комуністичного руху?",
        options: ["Mao Zedong", "Chiang Kai-shek", "Sun Yat-sen", "Deng Xiaoping"],
        correctIndex: 0
      }
    ],
  },
  {
    id: 4,
    title: 'Merry Cristmas test',
    questions : [
      {
        id: 21,
        question: "Коли відзначається Різдво за західним християнським календарем?",
        options: ["25 грудня", "7 січня", "1 грудня", "12 лютого"],
        correctIndex: 0
      },
      {
        id: 22,
        question: "Хто є головним персонажем Різдва за західними традиціями?",
        options: ["Санта Клаус", "Дід Мороз", "Різдвяний олень", "Грінч"],
        correctIndex: 0
      },
      {
        id: 23,
        question: "Яке слово асоціюється з Різдвом із зимового напою?",
        options: ["Егног", "Какао", "Мартіні", "Лимонад"],
        correctIndex: 0
      },
      {
        id: 24,
        question: "Який традиційний напій часто п'ють під час святкування Різдва?",
        options: ["Глінтвейн", "Шампанське", "Пунш", "Мохіто"],
        correctIndex: 2
      },
      {
        id: 25,
        question: "Яке дерево часто служить як символ Різдва?",
        options: ["Ялинка", "Сосна", "Береза", "Дуб"],
        correctIndex: 0
      },
      {
        id: 26,
        question: "Яка країна вважається рідною для Санта Клауса?",
        options: ["Фінляндія", "Канада", "Північний полюс", "Лапландія"],
        correctIndex: 3
      },
      {
        id: 27,
        question: "Що часто кладуть у різдвяні рукавички або чобітки для дітей?",
        options: ["Цукерки", "Мандарини", "Гроші", "Лист до Санти"],
        correctIndex: 1
      },
      {
        id: 28,
        question: "Як називається різдвяний обід чи вечеря у багатьох країнах?",
        options: ["Різдвяна вечеря", "Гуліаш", "Бранч", "Святковий суп"],
        correctIndex: 0
      },
      {
        id: 29,
        question: "Що часто кладуть на верхушку ялинки як символ Різдва?",
        options: ["Ангел", "Півень", "Зірка", "Кулька"],
        correctIndex: 2
      },
      {
        id: 30,
        question: "Що символізує святковий камін?",
        options: ["Тепло і затишок", "Небезпеку", "Вогонь на Різдво", "Наполегливість"],
        correctIndex: 0
      }
    ],
  },
  {
    id: 5,
    title: 'Good relationship test',
    questions : [
      {
        id: 31,
        question: "Що є основою здорових міжособистих відносин?",
        options: ["Взаємна залежність", "Довіра", "Спільні інтереси", "Фізична близькість"],
        correctIndex: 1
      },
      {
        id: 32,
        question: "Який фактор визначає успішність комунікації в парі?",
        options: ["Схожість інтересів", "Кількість спільних друзів", "Фінансовий статус", "Кольорова гама одягу"],
        correctIndex: 0
      },
      {
        id: 33,
        question: "Що є основним елементом вирішення конфліктів у відносинах?",
        options: ["Ігнорування", "Активне слухання", "Вимагання вибачень", "Критика"],
        correctIndex: 1
      },
      {
        id: 34,
        question: "Яка роль важлива для підтримання емоційного благополуччя в парі?",
        options: ["Подарунки", "Спільний відпочинок", "Відкритість та спілкування", "Фізичні контакти"],
        correctIndex: 2
      },
      {
        id: 35,
        question: "Що сприяє розвитку взаєморозуміння в парі?",
        options: ["Відсутність розбіжностей", "Взаємні уподобання", "Спільна мета", "Подарунки"],
        correctIndex: 2
      },
      {
        id: 36,
        question: "Які основні якості сприяють будівництву стійких відносин?",
        options: ["Домагання", "Терпіння та великодушність", "Конкуренція", "Байдужість"],
        correctIndex: 1
      },
      {
        id: 37,
        question: "Що може зміцнити відчуття єдності в парі?",
        options: ["Спільні досягнення", "Однаковий характер", "Визнання переваг одного з партнерів", "Постійні конфлікти"],
        correctIndex: 0
      },
      {
        id: 38,
        question: "Які основні принципи взаємодії в парі сприяють збереженню індивідуальності?",
        options: ["Асертивність", "Залежність", "Підкорення", "Пасивність"],
        correctIndex: 0
      },
      {
        id: 39,
        question: "Що може підтримати романтичну атмосферу в парі?",
        options: ["Спільні подорожі", "Фінансова стабільність", "Розписка на папері", "Подарунки та сюрпризи"],
        correctIndex: 3
      },
      {
        id: 40,
        question: "Яке значення має взаємне повага у відносинах?",
        options: ["Застереженість", "Довіра", "Байдужість", "Емоційна холодність"],
        correctIndex: 1
      }
    ],
  },
  {
    id: 6,
    title: 'Are you good at football knowledge?',
    questions : [
      {
        id: 41,
        question: "Яка країна виграла перший чемпіонат світу з футболу?",
        options: ["Бразилія", "Німеччина", "Уругвай", "Аргентина"],
        correctIndex: 2
      },
      {
        id: 42,
        question: "Скільки гравців може бути на полі в команді під час гри в футбол?",
        options: ["9", "10", "11", "12"],
        correctIndex: 2
      },
      {
        id: 43,
        question: "Як називається захисник, який стоїть перед воротарем?",
        options: ["Нападник", "Півзахисник", "Центральний захисник", "Лівий захисник"],
        correctIndex: 2
      },
      {
        id: 44,
        question: "Хто здобув титул найкращого футболіста світу у 2021 році?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Kylian Mbappé"],
        correctIndex: 1
      },
      {
        id: 45,
        question: "Як називається найбільша футбольна подія, що відбувається кожні чотири роки?",
        options: ["Чемпіонат світу", "Кубок Америки", "Євро", "Кубок Азії"],
        correctIndex: 0
      },
      {
        id: 46,
        question: "У якому році заснована Фіфа?",
        options: ["1904", "1923", "1930", "1958"],
        correctIndex: 0
      },
      {
        id: 47,
        question: "Хто здобув Золотий м'яч у 2020 році?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Neymar"],
        correctIndex: 2
      },
      {
        id: 48,
        question: "Яка країна виграла Євро-2020 (відбулося в 2021 році)?",
        options: ["Італія", "Англія", "Франція", "Німеччина"],
        correctIndex: 0
      },
      {
        id: 49,
        question: "Яке місто приймало фінал Ліги чемпіонів УЄФА у 2021 році?",
        options: ["Мілан", "Лондон", "Париж", "Стамбул"],
        correctIndex: 3
      },
      {
        id: 50,
        question: "Хто є рекордсменом забитих м'ячів на Чемпіонаті світу з футболу?",
        options: ["Pele", "Lionel Messi", "Miroslav Klose", "Diego Maradona"],
        correctIndex: 2
      }
    ],
  },
  {
    id: 7,
    title: 'What do you know about geography?',
    questions : [
      {
        id: 51,
        question: "Яка найбільша країна за площею?",
        options: ["Китай", "США", "Росія", "Канада"],
        correctIndex: 2
      },
      {
        id: 52,
        question: "Яке найбільше озеро у світі за площею?",
        options: ["Озеро Байкал", "Великі озера", "Каспійське море", "Озеро Вікторія"],
        correctIndex: 2
      },
      {
        id: 53,
        question: "На якому континенті розташована Австралія?",
        options: ["Азія", "Південна Америка", "Австралія", "Африка"],
        correctIndex: 2
      },
      {
        id: 54,
        question: "Яка країна славиться своїми фьордами?",
        options: ["Ісландія", "Норвегія", "Нова Зеландія", "Канада"],
        correctIndex: 1
      },
      {
        id: 55,
        question: "Яка ріка є найдовшою у світі?",
        options: ["Амазонка", "Ніл", "Янцзи", "Міссісіпі"],
        correctIndex: 0
      },
      {
        id: 56,
        question: "У якому океані розташована Бермудський трикутник?",
        options: ["Тихий", "Атлантичний", "Індійський", "Північний Льодовитий"],
        correctIndex: 1
      },
      {
        id: 57,
        question: "Скільки материків на Землі?",
        options: ["3", "5", "7", "6"],
        correctIndex: 2
      },
      {
        id: 58,
        question: "Яке найменше озеро у світі за площею?",
        options: ["Озеро Титікака", "Мертве море", "Озеро Восток", "Озеро Ківу"],
        correctIndex: 2
      },
      {
        id: 59,
        question: "В якій горі розташована найвища точка Землі?",
        options: ["Еверест", "К2", "Канченджанга", "Аконкагуа"],
        correctIndex: 0
      },
      {
        id: 60,
        question: "Яке море розташоване між Європою та Азією?",
        options: ["Чорне море", "Аравійське море", "Середземне море", "Каспійське море"],
        correctIndex: 2
      }
    ],
  },
  {
    id: 8,
    title: 'Interesting facts test',
    questions : [
      {
        id: 61,
        question: "Скільки планет у Сонячній системі?",
        options: ["7", "8", "9", "10"],
        correctIndex: 1
      },
      {
        id: 62,
        question: "Що найбільше світить у небі після Сонця та Місяця?",
        options: ["Меркурій", "Венера", "Марс", "Юпітер"],
        correctIndex: 1
      },
      {
        id: 63,
        question: "Яка найважча тварина на Землі?",
        options: ["Синій кит", "Слон", "Гірський горілка", "Кашалот"],
        correctIndex: 0
      },
      {
        id: 64,
        question: "Скільки кісток у людини?",
        options: ["206", "214", "220", "195"],
        correctIndex: 0
      },
      {
        id: 65,
        question: "Яка найбільша пустеля у світі?",
        options: ["Сахара", "Атакама", "Гобі", "Антарктида"],
        correctIndex: 3
      },
      {
        id: 66,
        question: "Скільки океанів на Землі?",
        options: ["4", "5", "6", "7"],
        correctIndex: 1
      },
      {
        id: 67,
        question: "Який найвищий водоспад у світі?",
        options: ["Анхель", "Ніагара", "Вікторія", "Ігуасу"],
        correctIndex: 0
      },
      {
        id: 68,
        question: "Скільки континентів на Землі?",
        options: ["5", "6", "7", "8"],
        correctIndex: 0
      },
      {
        id: 69,
        question: "Що є найбільшою річкою у світі за довжиною?",
        options: ["Амазонка", "Ніл", "Янцзи", "Міссісіпі"],
        correctIndex: 0
      },
      {
        id: 70,
        question: "Яка розміщена на найвищій вершині світу?",
        options: ["Монт-Блан", "К2", "Ельбрус", "Еверест"],
        correctIndex: 3
      }
    ],
  }
];
