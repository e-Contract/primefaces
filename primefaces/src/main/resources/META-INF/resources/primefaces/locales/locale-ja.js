if (window.PrimeFaces) {
    /** Japanese */
    PrimeFaces.locales['ja'] = {
        "startsWith": "始まる",
        "contains": "含む",
        "notContains": "含まない",
        "endsWith": "終わる",
        "equals": "等しい",
        "notEquals": "等しくない",
        "noFilter": "フィルターなし",
        "filter": "フィルター",
        "lt": "未満",
        "lte": "以下",
        "gt": "超える",
        "gte": "以上",
        "dateIs": "等しい",
        "dateIsNot": "等しくない",
        "dateBefore": "指定日より過去",
        "dateAfter": "指定日より未来",
        "custom": "カスタム",
        "clear": "クリア",
        "apply": "適用",
        "matchAll": "全て一致",
        "matchAny": "いずれかが一致",
        "addRule": "条件追加",
        "removeRule": "条件削除",
        "accept": "はい",
        "reject": "いいえ",
        "choose": "選択",
        "upload": "アップロード",
        "cancel": "キャンセル",
        "completed": "完了済",
        "pending": "保留",
        "dayNames": ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        "dayNamesShort": ["日", "月", "火", "水", "木", "金", "土"],
        "dayNamesMin": ["日", "月", "火", "水", "木", "金", "土"],
        "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        "chooseYear": "年を選択",
        "chooseMonth": "月を選択",
        "chooseDate": "日を選択",
        "prevDecade": "前の10年",
        "nextDecade": "後の10年",
        "prevYear": "前年",
        "nextYear": "翌年",
        "prevMonth": "先月",
        "nextMonth": "翌月",
        "prevHour": "前の時間",
        "nextHour": "次の時間",
        "prevMinute": "前の分",
        "nextMinute": "次の分",
        "prevSecond": "前の秒",
        "nextSecond": "次の秒",
        "am": "午前",
        "pm": "午後",
        "today": "今日",
        "weekHeader": "週",
        "firstDayOfWeek": 0,
        "showMonthAfterYear": true,
        "dateFormat": "yy/mm/dd",
        "weak": "弱い",
        "medium": "普通",
        "strong": "強い",
        "passwordPrompt": "パスワードを入力",
        "emptyFilterMessage": "オプションなし",
        "searchMessage": "{0} 件の結果",
        "selectionMessage": "{0} 件選択済み",
        "emptySelectionMessage": "選択なし",
        "emptySearchMessage": "該当なし",
        "emptyMessage": "結果なし",
        "aria": {
            "trueLabel": "True",
            "falseLabel": "False",
            "nullLabel": "未選択",
            "star": "1件のスター",
            "stars": "{star}件のスター",
            "selectAll": "全て選択",
            "unselectAll": "すべての選択を解除",
            "close": "閉じる",
            "previous": "前",
            "next": "次",
            "navigation": "ナビゲーション",
            "scrollTop": "トップへスクロール",
            "moveTop": "トップへ移動",
            "moveUp": "上へ",
            "moveDown": "下へ",
            "moveBottom": "一番下へ",
            "moveToTarget": "ターゲットへ移動",
            "moveToSource": "ソースへ移動",
            "moveAllToTarget": "ターゲットへ全て移動",
            "moveAllToSource": "ソースへ全て移動",
            "pageLabel": "{page}ページ",
            "firstPageLabel": "最初のページ",
            "lastPageLabel": "最後のページ",
            "nextPageLabel": "次のページ",
            "previousPageLabel": "前のページ",
            "rowsPerPageLabel": "行/ページ",
            "jumpToPageDropdownLabel": "ページドロップダウンへ",
            "jumpToPageInputLabel": "ページ入力へ",
            "selectRow": "選択済み行",
            "unselectRow": "未選択行",
            "expandRow": "展開済行",
            "collapseRow": "折りたたみ行",
            "showFilterMenu": "フィルターメニューを表示",
            "hideFilterMenu": "フィルターメニューを非表示",
            "filterOperator": "フィルター操作",
            "filterConstraint": "フィルター成約",
            "editRow": "行編集",
            "saveEdit": "保存",
            "cancelEdit": "キャンセル",
            "listView": "リストビュー",
            "gridView": "グリッドビュー",
            "slide": "スライド",
            "slideNumber": "{slideNumber}",
            "zoomImage": "画像を拡大",
            "zoomIn": "拡大",
            "zoomOut": "縮小",
            "rotateRight": "右に回転",
            "rotateLeft": "左に回転"
        }
    };

    // custom PF labels
    PrimeFaces.locales['ja'] = $.extend(true, {}, PrimeFaces.locales['ja'], {
        weekNumberTitle: '週',
        isRTL: false,
        yearSuffix: '年',
        timeOnlyTitle: '時間のみ',
        timeText: '時間',
        hourText: '時',
        minuteText: '分',
        secondText: '秒',
        millisecondText: 'ミリ秒',
        year: '年',
        month: '月',
        week: '週',
        day: '日',
        list: '一覧',
        allDayText: '終日',
        moreLinkText: '更に表示...',
        noEventsText: '予定なし',
        aria: {
            'datatable.sort.ASC': '昇順でソート',
            'datatable.sort.DESC': '降順でソート',
            'datatable.sort.NONE': 'ソートをクリア',
            'colorpicker.OPEN': 'カラーピッカーを開く',
            'colorpicker.CLOSE': 'カラーピッカーを閉じる',
            'colorpicker.CLEAR': '選択色をクリア',
            'colorpicker.MARKER': '彩度: {s}. 明度: {v}.',
            'colorpicker.HUESLIDER': '色調スライダー',
            'colorpicker.ALPHASLIDER': '不透明度スライダー',
            'colorpicker.INPUT': '値フィールド',
            'colorpicker.FORMAT': '色フォーマット',
            'colorpicker.SWATCH': '色スイッチ',
            'colorpicker.INSTRUCTION': '彩度と明度セレクターは上下左右キーで選択することができます。',
            'spinner.INCREASE': '価値を高める',
            'spinner.DECREASE': '減少値',
            'switch.ON': 'オン',
            'switch.OFF': 'オフ',
            'messages.ERROR': 'エラー',
            'messages.FATAL': '致命的',
            'messages.INFO': 'インフォメーション',
            'messages.WARN': '警告'
        },
        messages: { //optional for Client Side Validation
            'javax.faces.component.UIInput.REQUIRED': '{0}: 検証エラー: 必須入力です。',
            'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' 数値を入力してください。',
            'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' -2147483648 から 2147483647 までの数値を入力してください。 (例): {1}。',
            'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' 数値を入力してください。',
            'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' 4.9E-324 から 1.7976931348623157E308 までの数値を入力してください。 (例): {1}。',
            'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' 符号付きの数値を入力してください。',
            'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' 符号付きの数値(整数もしくは少数を含む数値)を入力してください。 (例): {1}。',
            'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' 数値を入力してください。',
            'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' 数値を入力してください。 (例): {1}。',
            'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' 0 から 255 までの数値を入力してください。',
            'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' 0 から 255 までの数値を入力してください。 (例): {1}。',
            'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' 有効な文字を入力してください。',
            'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' 有効なASCII文字を入力してください。',
            'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' 数値を入力してください。',
            'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' -32768 から 32767 までの数値を入力してください。 (例): {1}。',
            'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' true もしくは false を入力してください。',
            'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' true もしくは false を入力してください。(true以外の値は全てfalseとして扱われます)',
            'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: 検証エラー: {0}以下の値を入力してください。',
            'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: 検証エラー: {0}以上の値を入力してください。',
            'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: 検証エラー: {0} から {1} までの値を入力してください。',
            'javax.faces.validator.LongRangeValidator.TYPE': '{0}: 検証エラー: 値の形式が不正です。',
            'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: 検証エラー: {0}以下の値を入力してください。',
            'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: 検証エラー: {0}以上の値を入力してください。',
            'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: 検証エラー: {0} から {1} までの値を入力してください。',
            'javax.faces.validator.DoubleRangeValidator.TYPE': '{0}: 検証エラー: 値の形式が不正です。',
            'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' 数値を入力してください。',
            'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' 1.4E-45 から 3.4028235E38 までの数値を入力してください。 (例): {1}。',
            'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' 日付の形式が不正です。',
            'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' 日付の形式が不正です。 (例): {1}。',
            'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' 時間の形式が不正です。',
            'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' 時間の形式が不正です。 (例): {1}。',
            'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' 日時の形式が不正です。',
            'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' 日時の形式が不正です。 (例): {1}。',
            'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: 値を変換するためにはパターンもしくはタイプ属性を指定してください。',
            'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' 通貨の形式が不正です。',
            'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' 通貨の形式が不正です。 (例): {1}。',
            'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' パーセントの形式が不正です。',
            'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' パーセントの形式が不正です。 (例): {1}。',
            'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' 数値の形式が不正です。',
            'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' 数値の形式が不正です。 (例): {1}。',
            'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' 値が指定されたパターンに一致しません。',
            'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' 値が指定されたパターンに一致しません。 (例): {1}。',
            'javax.faces.validator.LengthValidator.MINIMUM': '{1}: 検証エラー: {0}以上の長さを指定してください。',
            'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: 検証エラー: {0}以下の長さを指定してください。',
            'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': '正規表現パターンを指定してください。',
            'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': '正規表現パターンを指定してください。',
            'javax.faces.validator.RegexValidator.NOT_MATCHED': '正規表現パターンと一致しません。',
            'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': '正規表現パターン({0})と一致しません。',
            'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': '正規表現パターンが不正です。',
            'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': '正規表現パターンが不正です({0})。',
            //optional for bean validation integration in client side validation
            'javax.faces.validator.BeanValidator.MESSAGE': '{0}',
            'javax.validation.constraints.AssertFalse.message': '値がfalseではありません。',
            'javax.validation.constraints.AssertTrue.message': '値がtrueではありません。',
            'javax.validation.constraints.DecimalMax.message': '{0}以下の数値を入力してください。',
            'javax.validation.constraints.DecimalMin.message': '{0}以上の数値を入力してください。',
            'javax.validation.constraints.Digits.message': '範囲外の数値です (整数:{0}桁、少数:{1}桁の範囲で入力してください)。',
            'javax.validation.constraints.Future.message': '未来を指定してください。',
            'javax.validation.constraints.Max.message': '{0}以下の数値を入力してください。',
            'javax.validation.constraints.Min.message': '{0}以上の数値を入力してください。',
            'javax.validation.constraints.NotNull.message': '値がNULLです。',
            'javax.validation.constraints.Null.message': '値がNULLではありません。',
            'javax.validation.constraints.Past.message': '過去をしていてください。',
            'javax.validation.constraints.Pattern.message': 'パターン({0})に一致しません。',
            'javax.validation.constraints.Size.message': 'サイズは {0} から {1} までで入力してください。'
        }
    });
    PrimeFaces.locales['ja_JP'] = PrimeFaces.locales['ja'];
}