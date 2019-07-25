var lang = 'zh';

window.addEventListener('DOMContentLoaded', (event) => {
    var els = document.querySelectorAll('img');
    for (var pos = 0; pos < els.length; pos++) {
        els[pos].src = els[pos].src.replace('_assets', lang + '/_assets');
    }
}