var lang = 'ja';

const myAsyncFunc = async (el, newURL) => {

    await fetch(newURL)
        .then(function (response) {
            if (response.status === 200) {
                el.src = newURL;
            }
        });
};

window.addEventListener('DOMContentLoaded', (event) => {
    var els = document.querySelectorAll('img');
    for (var pos = 0; pos < els.length; pos++) {
        var newURL = els[pos].src.replace('_assets', lang + '/_assets');

        myAsyncFunc(els[pos], newURL);
    }
});