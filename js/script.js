(function () {

    var main = function () {
        decodeMail();
    }

    var decodeMail = function () {
        var mails = document.querySelectorAll('.decode-me');

        for (var i = 0; i < mails.length; i++) {
            var value = mails[i].innerText;
            value = value.replace(/( \[at\] )/g, '@').replace(/( \[dot\] )/g, '.');
            mails[i].innerHTML = '<a href="mailto:' + value + '">' + value + '</a>';
        }
    }

    main();

})();