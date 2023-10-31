if (window.PrimeFaces) {
    /** Danish (from PrimeLocale)*/
    PrimeFaces.locales['da'] = {
        "startsWith": "Starter med",
        "contains": "Indeholder",
        "notContains": "Indeholder ikke",
        "endsWith": "Slutter med",
        "equals": "Lig med",
        "notEquals": "Ikke lig med",
        "noFilter": "Ingen filtrering",
        "filter": "Filtrer",
        "lt": "Mindre end",
        "lte": "Mindre end eller lig med",
        "gt": "Større end",
        "gte": "Større end eller lig med",
        "dateIs": "Dato er",
        "dateIsNot": "Dato er ikke",
        "dateBefore": "Dato er før",
        "dateAfter": "Dato er efter",
        "custom": "Brugerdefineret",
        "clear": "Ryd",
        "apply": "Anvend",
        "matchAll": "Match alle",
        "matchAny": "Match nogen",
        "addRule": "Tilføj regel",
        "removeRule": "Fjern regel",
        "accept": "Ja",
        "reject": "Nej",
        "choose": "Vælg",
        "upload": "Upload",
        "cancel": "Annuller",
        "completed": "Afsluttet",
        "pending": "Afventer",
        "dayNames": [
            "Søndag",
            "Mandag",
            "Tirsdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "Lørdag"
        ],
        "dayNamesShort": ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        "dayNamesMin": ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
        "monthNames": [
            "Januar",
            "Februar",
            "Marts",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "December"
        ],
        "monthNamesShort": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Maj",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec"
        ],
        "chooseYear": "Vælg år",
        "chooseMonth": "Vælg måned",
        "chooseDate": "Vælg dato",
        "prevDecade": "Forrige årti",
        "nextDecade": "Næste årti",
        "prevYear": "Forrige år",
        "nextYear": "Næste år",
        "prevMonth": "Forrige måned",
        "nextMonth": "Næste måned",
        "prevHour": "Forrige time",
        "nextHour": "Næste time",
        "prevMinute": "Forrige minut",
        "nextMinute": "Næste minut",
        "prevSecond": "Forrige sekund",
        "nextSecond": "Næste sekund",
        "am": "am",
        "pm": "pm",
        "today": "I dag",
        "weekHeader": "Uge",
        "firstDayOfWeek": 0,
        "showMonthAfterYear": false,
        "dateFormat": "dd/mm-yy",
        "weak": "Svag",
        "medium": "Medium",
        "strong": "Stærk",
        "passwordPrompt": "Indtast adgangskode",
        "emptyFilterMessage": "Ingen resultater fundet",
        "searchMessage": "{0} resultater er tilgængelige",
        "selectionMessage": "{0} elementer valgt",
        "emptySelectionMessage": "Ingen valgte elementer",
        "emptySearchMessage": "Ingen resultater fundet",
        "emptyMessage": "Ingen tilgængelige muligheder",
        "aria": {
            "trueLabel": "Sandt",
            "falseLabel": "Falsk",
            "nullLabel": "Ikke valgt",
            "star": "1 stjerne",
            "stars": "{star} stjerner",
            "selectAll": "Alle elementer valgt",
            "unselectAll": "Alle elementer fjernet",
            "close": "Luk",
            "previous": "Forrige",
            "next": "Næste",
            "navigation": "Navigation",
            "scrollTop": "Rul til toppen",
            "moveTop": "Flyt til top",
            "moveUp": "Flyt op",
            "moveDown": "Flyt ned",
            "moveBottom": "Flyt til bunden",
            "moveToTarget": "Flyt til mål",
            "moveToSource": "Flyt til kilde",
            "moveAllToTarget": "Flyt alle til mål",
            "moveAllToSource": "Flyt alle til kilde",
            "pageLabel": "Side {page}",
            "firstPageLabel": "Første side",
            "lastPageLabel": "Sidste side",
            "nextPageLabel": "Næste side",
            "previousPageLabel": "Forrige side",
            "rowsPerPageLabel": "Rækker pr. side",
            "jumpToPageDropdownLabel": "Skift til sidenummer",
            "jumpToPageInputLabel": "Skift til sidenummer",
            "selectRow": "Række valgt",
            "unselectRow": "Række fjernet",
            "expandRow": "Række udvidet",
            "collapseRow": "Række foldet sammen",
            "showFilterMenu": "Vis filtermenu",
            "hideFilterMenu": "Skjul filtermenu",
            "filterOperator": "Filteroperator",
            "filterConstraint": "Filterbegrænsning",
            "editRow": "Redigér række",
            "saveEdit": "Gem ændringer",
            "cancelEdit": "Annullér ændringer",
            "listView": "Listevisning",
            "gridView": "Gittervisning",
            "slide": "Slide",
            "slideNumber": "{slideNumber}",
            "zoomImage": "Zoom ind på billede",
            "zoomIn": "Zoom ind",
            "zoomOut": "Zoom ud",
            "rotateRight": "Roter mod højre",
            "rotateLeft": "Roter mod venstre"
        }
    };

    // custom PF labels
    PrimeFaces.locales['da'] = $.extend(true, {}, PrimeFaces.locales['da'], {
        weekNumberTitle: 'S',
        isRTL: false,
        yearSuffix: '',
        aria: {
            'switch.ON': 'På',
            'switch.OFF': 'Af',
            'messages.ERROR': 'Fejl',
            'messages.FATAL': 'Dødelig',
            'messages.INFO': 'Information',
            'messages.WARN': 'Advarsel'
        }
    });

    PrimeFaces.locales['da_DK'] = PrimeFaces.locales['da'];
}