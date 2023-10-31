if (window.PrimeFaces) {
  /** Romanian */
  PrimeFaces.locales["ro"] = {
    startsWith: "Începe cu",
    contains: "Conține",
    notContains: "Nu conține",
    endsWith: "Se termină cu",
    equals: "Este egal",
    notEquals: "Nu este egal",
    noFilter: "Fără filtru",
    filter: "Filtru",
    lt: "Mai mic decât",
    lte: "Mai mic sau egal cu",
    gt: "Mai mare decât",
    gte: "Mai mare sau egal cu",
    dateIs: "Data este",
    dateIsNot: "Data nu este",
    dateBefore: "Data este înainte",
    dateAfter: "Data este după",
    custom: "Personalizat",
    clear: "Curăță",
    apply: "Aplică",
    matchAll: "Potrivește cu toate",
    matchAny: "Potrivește cu orice",
    addRule: "Adăugă o regulă",
    removeRule: "Elimină regula",
    accept: "Da",
    reject: "Nu",
    choose: "Alege",
    upload: "Încarcă",
    cancel: "Anulează",
    completed: "Terminat",
    pending: "În așteptare",
    dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
    dayNamesShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
    dayNamesMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
    monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
    monthNamesShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
    chooseYear: "Alege anul",
    chooseMonth: "Alege luna",
    chooseDate: "Alege data",
    prevDecade: "Deceniul precedent",
    nextDecade: "Deceniul următor",
    prevYear: "Anul precedent",
    nextYear: "Anul următor",
    prevMonth: "Luna precedentă",
    nextMonth: "Luna următoare",
    prevHour: "Ora precedentă",
    nextHour: "Ora următoare",
    prevMinute: "Minutul precedent",
    nextMinute: "Minutul următor",
    prevSecond: "Secunda precedentă",
    nextSecond: "Secunda anterioară",
    am: "înainte de amiază",
    pm: "după amiază",
    today: "Astăzi",
    now: "Acum",
    weekHeader: "Săpt",
    firstDayOfWeek: 1,
    showMonthAfterYear: false,
    dateFormat: "dd.mm.yy",
    weak: "Slabă",
    medium: "Medie",
    strong: "Puternică",
    passwordPrompt: "Introduceți parola",
    emptyFilterMessage: "Nu s-au găsite rezultate",
    searchMessage: "{0} rezultate sunt disponibile",
    selectionMessage: "{0} elemente selectate",
    emptySelectionMessage: "Niciun element selectat",
    emptySearchMessage: "Nu s-au găsite rezultate",
    emptyMessage: "Nu există opțiuni disponibile",
    aria: {
      trueLabel: "Adevărat",
      falseLabel: "Fals",
      nullLabel: "Neselectat",
      star: "1 stea",
      stars: "{star} stele",
      selectAll: "Toate elementele selectate",
      unselectAll: "Toate elementele neselectate",
      close: "Închide",
      previous: "Precedent",
      next: "Următor",
      navigation: "Navigare",
      scrollTop: "Derulați la început",
      moveTop: "Mutați la început",
      moveUp: "Mutați în sus",
      moveDown: "Mutați în jos",
      moveBottom: "Mutați la sfârșit",
      moveToTarget: "Mutați la țintă",
      moveToSource: "Mutați la sursă",
      moveAllToTarget: "Mutați totul la țintă",
      moveAllToSource: "Mutați totul la sursă",
      pageLabel: "Pagina {page}",
      firstPageLabel: "Prima pagină",
      lastPageLabel: "Ultima pagină",
      nextPageLabel: "Pagina următoare",
      previousPageLabel: "Pagina precedentă",
      rowsPerPageLabel: "Rânduri pe pagină",
      jumpToPageDropdownLabel: "Treceți la meniul derulant al paginii",
      jumpToPageInputLabel: "Treceți la pagina de intrare",
      selectRow: "Rând selectat",
      unselectRow: "Rând neselectat",
      expandRow: "Rând extins",
      collapseRow: "Rând restrâns",
      showFilterMenu: "Afișați meniul filtrului",
      hideFilterMenu: "Ascundeți meniul filtrului",
      filterOperator: "Operator de filtrare",
      filterConstraint: "Constrângere de filtrare",
      editRow: "Editați rândul",
      saveEdit: "Salvați editarea",
      cancelEdit: "Anulați editarea",
      listView: "Vizualizare listă",
      gridView: "Vizualizare grilă",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Măriți imaginea",
      zoomIn: "Măriți",
      zoomOut: "Micșorați",
      rotateRight: "Rotiți la dreapta",
      rotateLeft: "Rotiți la stânga",
    },
  };

// custom PF labels
  PrimeFaces.locales["ro"] = $.extend(true, {}, PrimeFaces.locales["ro"], {
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "Doar timp",
    timeText: "Timp",
    hourText: "Ora",
    minuteText: "Minut",
    secondText: "Secunde",
    millisecondText: "Milisecunde",
    month: "Luna",
    week: "Săptămâna",
    day: "Zi",
    allDayText: "Toată ziua",
    moreLinkText: "Mai mult...",
    noEventsText: "Fără Evenimente",
    aria: {
      "datatable.sort.ASC": "activare pentru a sorta coloana crescător",
      "datatable.sort.DESC": "activare pentru a sorta coloana descrescător",
      "datatable.sort.NONE": "activare pentru a elimina sortarea pe coloană",
      "colorpicker.OPEN": "Deschideți selectorul de culori",
      "colorpicker.CLOSE": "Închideți selectorul de culori",
      "colorpicker.CLEAR": "Ștergeți culoarea selectată",
      "colorpicker.MARKER": "Saturație: {s}. Luminozitate: {v}.",
      "colorpicker.HUESLIDER": "Slider de nuanță",
      "colorpicker.ALPHASLIDER": "Slider de opacitate",
      "colorpicker.INPUT": "Câmp pentru valoarea culorii",
      "colorpicker.FORMAT": "Format de culoare",
      "colorpicker.SWATCH": "Eșantion de culoare",
      "colorpicker.INSTRUCTION": "Selector de saturație și luminozitate. Folosiți tastele săgeți sus, jos, stânga și dreapta pentru a selecta.",
      "spinner.INCREASE": "Măriți valoarea",
      "spinner.DECREASE": "Reduceți valoarea",
      "switch.ON": "Pe",
      "switch.OFF": "Off",
      "messages.ERROR": "Eroare",
      "messages.FATAL": "Fatal",
      "messages.INFO": "Infromație",
      "messages.WARN": "Atenție",
    },
    messages: {
      "javax.faces.component.UIInput.REQUIRED": "{0}: Eroare de validare: Valoarea este obligatorie.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' trebuie să fie un număr între -2147483648 și 2147483647. Exemplu: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' trebuie să fie un număr între 4.9E-324 și 1.7976931348623157E308. Exemplu: {1}.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' trebuie să fie un număr zecimal cu semn.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' trebuie să fie un număr zecimal cu semn format din zero sau mai multe cifre, care poate fi urmat de un punct zecimal și o fracție. Exemplu: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre. Exemplu: {1}.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' trebuie să fie un număr între 0 și 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' trebuie să fie un număr între 0 și 255. Exemplu: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' trebuie să fie un caracter valid.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' trebuie să fie un caracter ASCII valid.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' trebuie să fie un număr între -32768 și 32767. Exemplu: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' trebuie să fie adevărat sau false.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' trebuie să fie adevărat sau false. Orice altă valoare diferită de adevărat va trece în fals.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Eroare de validare: Valoarea este mai mare decât maximul admisibil de '{0}'.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Eroare de validare: Valoarea este mai mică decât minimul admisibil de '{0}'.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Eroare de validare: Atributul specificat nu se încadrează între valorile așteptate de {0} și {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Eroare de validare: Tipul valorii este greșit.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Eroare de validare: Valoarea este mai mare decât maximul admisibil de '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Eroare de validare: Valoarea este mai mică decât minimul admisibil de '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Eroare de validare: Atributul specificat nu se încadrează între valorile așteptate de {0} și {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Eroare de validare: Tipul valorii este greșit.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' trebuie să fie un număr între 1.4E-45 și 3.4028235E38. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' nu a putut fi înțeles ca o dată.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' nu a putut fi înțeles ca o dată. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' nu a putut fi înțeles ca un timp.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' nu a putut fi înțeles ca un timp. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' nu a putut fi înțeles ca o dată și timp.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' nu a putut fi înțeles ca o dată și timp. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Trebuie specificat un atribut 'pattern' sau 'type' pentru a converti valoarea '{0}'.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' nu a putut fi înțeles ca o valută.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' nu a putut fi înțeles ca o valută. Exemplu: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' nu a putut fi înțeles ca un procent.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' nu a putut fi înțeles ca un procent. Exemplu: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' nu poate fi înțeles ca un număr.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' nu poate fi înțeles ca un număr. Exemplu: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' nu poate fi înțeles ca un șablon numeric.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' nu poate fi înțeles ca un șablon numeric. Exemplu: {1}.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Eroare de validare: Lungimea este mai mică decât minimul admisibil de '{0}'.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Eroare de validare: Lungimea este mai mare decât maximul admisibil de '{0}'.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Modelul Regex trebuie setată.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Modelul Regex trebuie setată pentru o valoare ce nu poate fi goală.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Modelul Regex nu se potrivește.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Modelul regex '{0}' nu se potrivește.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Eroare la expresia regulată.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Eroare la expresia regulată, '{0}'.",
      //optional for bean validation integration in client side validation
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.validation.constraints.AssertFalse.message": "trebuie să fie fals.",
      "javax.validation.constraints.AssertTrue.message": "trebuie să fie adevărat.",
      "javax.validation.constraints.DecimalMax.message": "trebuie să fie mai mic sau egal cu {0}.",
      "javax.validation.constraints.DecimalMin.message": "trebuie să fie mai mare sau egal cu {0}.",
      "javax.validation.constraints.Digits.message": "valoare numerică în afara limitelor (&lt;{0} digits>.&lt;{1} digits> expected).",
      "javax.validation.constraints.Future.message": "trebuie să fie în viitor.",
      "javax.validation.constraints.Max.message": "trebuie să fie mai mic sau egal cu {0}.",
      "javax.validation.constraints.Min.message": "trebuie să fie mai mare sau egal cu {0}.",
      "javax.validation.constraints.NotNull.message": "poate să nu fie nul.",
      "javax.validation.constraints.Null.message": "trebuie să fie nul.",
      "javax.validation.constraints.Past.message": "trebuie să fie în trecut.",
      "javax.validation.constraints.Pattern.message": 'trebuie să se potrivească cu "{0}".',
      "javax.validation.constraints.Size.message": "dimensiunea trebuie să fie între {0} și {1}.",
    },
  });
}