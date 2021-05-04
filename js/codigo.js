function language() {
    var idioma = document.getElementById('language').value
    if (idioma == 'ES') {
        window.location.href = '../index.html'
    } else if (idioma == 'EN') {
        window.location.href = './en/index.html'
    } else if (idioma == 'CH') {
        window.location.href = './ch/index.html'
    }
}