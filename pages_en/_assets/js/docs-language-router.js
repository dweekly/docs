function languageRouter(supported_locales, keep_path) {
    var default_locale = 'en-US';
    var default_language = extractLanguage(default_locale);
    var stored_locale = getLocale();
    var stored_language = extractLanguage(stored_locale);

    // If we already have a locale value stored...
    if (stored_locale != '') {
        if (localeCompare(stored_locale, default_locale) == '0') { // and it's not the default locale...
            return;
        }
        for (var check_locale in supported_locales) { // First, check if site supports exact stored locale
            if (localeCompare(stored_locale, check_locale) == '0') {
                console.log('suntem aici 2');
                doRedirection(supported_locales[check_locale], keep_path);
                return;
            }
        }
        for (var check_locale in supported_locales) { // If not, see if at least the language matches
            var check_language = extractLanguage(check_locale);

            if ((localeCompare(stored_language, check_language) == '0') && (localeCompare(stored_language, default_language) != '0')) {
                doRedirection(supported_locales[check_locale], keep_path);
                return;
            }
        }

        return; // If there is a stored locale value the site doesn't support, stop here so we don't overwrite it

    } else { // If we don't have a stored locale, let's go get it from the browser

        for (var browser_locale of navigator.languages) {
            var browser_language = extractLanguage(browser_locale);

            for (var check_locale in supported_locales) { // First, check if browser prefers any exact locale supported by site
                if (localeCompare(browser_locale, default_locale) == '0') {
                    setLocale(check_locale);
                    return;
                } else if (localeCompare(browser_locale, check_locale) == '0') {
                    setLocale(check_locale);
                    doRedirection(supported_locales[check_locale]);
                    return;
                }
            }
            for (var check_locale in supported_locales) { // If not, see if site supports at least a preferred language
                var check_language = extractLanguage(check_locale);

                if (browser_language.localeCompare(default_language, undefined, { sensitivity: 'base' }) == '0') {
                    setLocale(check_locale);
                    return;
                } else if (localeCompare(browser_language, check_language) == '0') {
                    setLocale(check_locale);
                    doRedirection(supported_locales[check_locale]);
                    return;
                }
            }
        }
        setLocale(default_locale); // If not, fall back to default locale
    }

    function doRedirection(url_prefix, keep_path) {
        if (keep_path == true) {
            document.location.replace(window.location.origin + url_prefix + window.location.pathname);
        } else {
            document.location.replace(window.location = window.location.origin + url_prefix + '/');
        }
    }

    function extractLanguage(locale) {
        return locale.substring(0, 2);
    }

    function localeCompare(check_locale, supported_locale) {
        return check_locale.localeCompare(supported_locale, undefined, { sensitivity: 'base' });
    }
}

function setLocale(locale, overwrite) {
    console.log(locale);
    if (overwrite == false && getLocale() != '') {
        return;
    } else {
        var d = new Date();
        d = new Date(d.getTime() + 1000*60*60*24 * 31);
        document.cookie = 'locale' + '=' + locale + '; expires=' + d.toGMTString() + '; path=/;';
    }
}

function getLocale() {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + 'locale' + '=');
    if (parts.length >= 2) return parts.pop().split(';').shift();
    else return '';
}
