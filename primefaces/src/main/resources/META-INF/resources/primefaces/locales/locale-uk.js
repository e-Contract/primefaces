if (window.PrimeFaces) {
  /** Ukranian */
  PrimeFaces.locales["uk"] = {
    startsWith: "Починається з",
    contains: "Містить",
    notContains: "Не містить",
    endsWith: "Закінчується",
    equals: "Дорівнює",
    notEquals: "Не дорівнює",
    noFilter: "Немає фільтра",
    filter: "Фільтр",
    lt: "Менше ніж",
    lte: "Менш ніж або дорівнює",
    gt: "Більш ніж",
    gte: "Більш ніж або дорівнює",
    dateIs: "Дата дорівнює",
    dateIsNot: "Дата не дорівнює",
    dateBefore: "Дата до",
    dateAfter: "Дата після",
    custom: "Користувальницький",
    clear: "Очистити",
    apply: "Прийняти",
    matchAll: "Порівняти все",
    matchAny: "Збіг з будь-яким",
    addRule: "Додати правило",
    removeRule: "Видалити правило",
    accept: "Так",
    reject: "Ні",
    choose: "Виберіть",
    upload: "Завантажити",
    cancel: "Відміна",
    completed: "Завершено",
    pending: "В очікуванні",
    dayNames: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
    dayNamesShort: ["Нед", "Пон", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
    dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    monthNamesShort: ["Січ", "Лют", "Бер", "Квіт", "Трав", "Чер", "Лип", "Сер", "Вер", "Жов", "Лист", "Груд"],
    chooseYear: "Виберіть рік",
    chooseMonth: "Виберіть місяць",
    chooseDate: "Виберіть дату",
    prevDecade: "Попереднє десятиліття",
    nextDecade: "Наступне десятиліття",
    prevYear: "Попередній рік",
    nextYear: "Наступний рік",
    prevMonth: "Попередній місяць",
    nextMonth: "Наступний місяць",
    prevHour: "Попередня година",
    nextHour: "Наступна година",
    prevMinute: "Попередня хвилина",
    nextMinute: "Наступна хвилина",
    prevSecond: "Попередня секунда",
    nextSecond: "Наступна секунда",
    am: "до полудня",
    pm: "після полудня",
    today: "Сьогодні",
    now: "Тепер",
    weekHeader: "Тиж.",
    firstDayOfWeek: 1,
    showMonthAfterYear: false,
    dateFormat: "dd.mm.yy",
    weak: "Простий",
    medium: "Нормальний",
    strong: "Гарний",
    passwordPrompt: "Введіть пароль",
    emptyFilterMessage: "Результатів не знайдено",
    searchMessage: "{0} результатів доступно",
    selectionMessage: "{0} елементів вибрано",
    emptySelectionMessage: "Немає вибраного елемента",
    emptySearchMessage: "Результатів не знайдено",
    emptyMessage: "Немає доступних варіантів",
    aria: {
      trueLabel: "Вірно",
      falseLabel: "Невірно",
      nullLabel: "Не вибраний",
      star: "1 зірка",
      stars: "{star} зірок",
      selectAll: "Вибрано всі елементи",
      unselectAll: "Усі елементи не вибрані",
      close: "Закрити",
      previous: "Попередній",
      next: "Наступний",
      navigation: "Навігація",
      scrollTop: "Прокрутити на початок",
      moveTop: "Перемістити на початок",
      moveUp: "Перемістити вгору",
      moveDown: "Перемістити вниз",
      moveBottom: "Перемістити в кінець",
      moveToTarget: "Перемістити до приймача",
      moveToSource: "Перемістити до джерела",
      moveAllToTarget: "Перемістити все до приймача",
      moveAllToSource: "Перемістити все в джерело",
      pageLabel: "Сторінка {page}",
      firstPageLabel: "Перша сторінка",
      lastPageLabel: "Остання сторінка",
      nextPageLabel: "Наступна сторінка",
      rowsPerPageLabel: "Рядок на сторінці",
      previousPageLabel: "Попередня сторінка",
      jumpToPageDropdownLabel: "Перейти до списку сторінок, що розкривається",
      jumpToPageInputLabel: "Перейти до введення сторінки",
      selectRow: "Вибрано рядок",
      unselectRow: "Рядок не вибрано",
      expandRow: "Рядок розгорнутий",
      collapseRow: "Рядок згорнутий",
      showFilterMenu: "Показати меню фільтра",
      hideFilterMenu: "Сховати меню фільтра",
      filterOperator: "Оператор фільтра",
      filterConstraint: "Обмеження фільтра",
      editRow: "Редагування рядка",
      saveEdit: "Зберегти редагування",
      cancelEdit: "Скасувати редагування",
      listView: "У вигляді списку",
      gridView: "У вигляді сітки",
      slide: "Слайд",
      slideNumber: "{slideNumber}",
      zoomImage: "Збільшити зображення",
      zoomIn: "Збільшити",
      zoomOut: "Зменшити",
      rotateRight: "Повернути праворуч",
      rotateLeft: "Повернути вліво",
    },
  };

// custom PF labels
  PrimeFaces.locales["uk"] = $.extend(true, {}, PrimeFaces.locales["uk"], {
    weekNumberTitle: "Н",
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "Тільки час",
    timeText: "Час",
    hourText: "Година",
    minuteText: "Хвилина",
    secondText: "Секунда",
    millisecondText: "Мілісекунд",
    month: "Місяць",
    week: "Тиждень",
    day: "День",
    list: "Зміст",
    allDayText: "Весь день",
    moreLinkText: "Ще...",
    noEventsText: "Нічого немає",
    aria: {
      "datatable.sort.ASC": "активувати для сортування за зростанням стовпця",
      "datatable.sort.DESC": "активувати сортування за спаданням стовпця",
      "datatable.sort.NONE": "активувати, щоб вилучити сортування за стовпцем",
      "colorpicker.OPEN": "Відкрити вибір кольору",
      "colorpicker.CLOSE": "Закрити вибір кольору",
      "colorpicker.CLEAR": "Очистити вибраний колір",
      "colorpicker.MARKER": "Насиченість: {s}. Яскравість: {v}.",
      "colorpicker.HUESLIDER": "Повзунок відтінку",
      "colorpicker.ALPHASLIDER": "Значення кольору",
      "colorpicker.INPUT": "Значения цвета",
      "colorpicker.FORMAT": "Формат кольору",
      "colorpicker.SWATCH": "Зразок кольору",
      "colorpicker.INSTRUCTION": "Селектор насиченості та яскравості. Використовуйте клавіші зі стрілками вгору, вниз, вліво та вправо для вибору.",
      "spinner.INCREASE": "Збільшити вартість",
      "spinner.DECREASE": "Зменшити значення",
    },
    messages: {
      //optional for Client Side Validation
      "javax.faces.component.UIInput.REQUIRED": "{0}: Помилка валідації: Потрібно ввести значення.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' має бути числом, що складається з однієї або більше цифр.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' має бути числом між -2147483648 та 2147483647. Приклад: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' має бути числом, що складається з однієї або більше цифр.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' має бути числом між 4.9E-324 та 1.7976931348623157E308. Приклад: {1}.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' має бути знаковим десятковим числом.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' має бути знаковим десятковим числом, що складається з нуля або більше цифр, які можуть супроводжуватися десятковою крапкою та дробом. Приклад: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' має бути числом, що складається з однієї або більше цифр.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' має бути числом, що складається з однієї або більше цифр. Приклад: {1}.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' має бути числом від 0 до 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' має бути числом від 0 до 255. Приклад: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' має бути дійсним символом.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' має бути дійсним ASCII-символом.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' має бути числом, що складається з однієї або більше цифр.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' має бути числом між -32768 та 32767. Приклад: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' має бути 'true' або 'false'.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' має бути 'true' або 'false'.  Будь-яке значення, відмінне від 'true', буде оцінено як 'false'.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Помилка валідації: Значення перевищує допустимий максимум '{0}'.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Помилка валідації: Значення менше допустимого мінімуму '{0}'.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Помилка валідації: Вказаний атрибут не знаходиться між очікуваними значеннями {0} та {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Помилка валідації: Значення не має правильного типу.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Помилка валідації: Значення перевищує допустимий максимум '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Помилка валідації: Значення менше допустимого мінімуму '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Помилка валідації: Вказаний атрибут не знаходиться між очікуваними значеннями {0} та {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Помилка валідації: Значення не має правильного типу.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' має бути числом, що складається з однієї або більше цифр.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' має бути числом у діапазоні від 1.4E-45 до 3.4028235E38 Приклад: {1}.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' не може бути сприйнято як дата.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' не може бути сприйнято як дата. Приклад: {1}.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' не може бути сприйнято як час.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' не може бути сприйнято як час. Приклад: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' не може бути сприйнято як дата і час.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' не може бути сприйнято як дата і час. Приклад: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Для перетворення значення '{0}' має бути вказано атрибут 'pattern' або 'type'.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' не може бути сприйнято як значення валюти.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' не може бути сприйнято як значення валюти. Приклад: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' не може бути сприйнято як відсоток.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' не може бути сприйнято як відсоток. Приклад: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' не може бути сприйнято як число.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' не може бути сприйнято як число. Приклад: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' не може бути сприйнято як шаблон числа.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' не може бути сприйнято як шаблон числа. Приклад: {1}.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Помилка валідації: Довжина менша за допустимий мінімум '{0}'.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Помилка валідації: Довжина більша за допустимий максимум '{0}'.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Повинен бути встановлений зразок регулярного виразу.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Зразок регулярного виразу повинен мати непорожнє значення.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Зразок регулярного виразу не знайдено.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Зразок регулярного виразу '{0}' не знайдено.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Помилка в регулярному виразі.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Помилка в регулярному виразі, '{0}'.",
      //optional for bean validation integration in client side validation
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.validation.constraints.AssertFalse.message": "Значення має бути false.",
      "javax.validation.constraints.AssertTrue.message": "Значення має бути true.",
      "javax.validation.constraints.DecimalMax.message": "Значення повинно бути меншим або дорівнювати {0}.",
      "javax.validation.constraints.DecimalMin.message": "Значення повинно бути більшим або дорівнювати {0}.",
      "javax.validation.constraints.Digits.message": "Числове значення знаходиться за межами допустимого діапазону (&lt;{0} digits&gt;.&lt;{1} digits&gt;).",
      "javax.validation.constraints.Future.message": "Повинно бути надалі.",
      "javax.validation.constraints.Max.message": "Значення повинно бути меншим або дорівнювати{0}.",
      "javax.validation.constraints.Min.message": "Значення повинно бути більшим або дорівнювати {0}.",
      "javax.validation.constraints.NotNull.message": "Не повинно бути null.",
      "javax.validation.constraints.Null.message": "Повинно бути null.",
      "javax.validation.constraints.Past.message": "Повинно бути надалі.",
      "javax.validation.constraints.Pattern.message": 'Повинно відповідати "{0}".',
      "javax.validation.constraints.Size.message": "Розмір значення має бути між {0} і{1}.",
    },
  });
}