var lang = 'zh';

var shouldReplace = false;

function onDataRetrieved () {
    if (this.status === 200) {
        shouldReplace = true;
    } else {
        shouldReplace = false;
    }
    console.log(this.status);

}

window.addEventListener('DOMContentLoaded', (event) => {
    var els = document.querySelectorAll('img');
    for (var pos = 0; pos < els.length; pos++) {
        var newURL = els[pos].src.replace('_assets', lang + '/_assets');

        var xhttp = new XMLHttpRequest();
        xhttp.addEventListener("load", onDataRetrieved);
        xhttp.open("GET", newURL, false);
        xhttp.send();

        if(shouldReplace) {
            els[pos].src = newURL;
        }

        shouldReplace = false;
    }
});