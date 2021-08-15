function open_letter() {
    document.getElementsByClassName("letter-closed")[0].style.display = 'none';
    document.getElementsByClassName("letter-open")[0].style.display = 'block';
}


function on_click_rtanny() {
    window.location.href = 'http://192.168.1.7:5500/laila/card2.html';
}