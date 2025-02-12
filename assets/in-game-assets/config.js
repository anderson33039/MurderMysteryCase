document.getElementById('back').addEventListener('click', () => {
    window.location.href = 'prelim.html'
})

function john() {
    localStorage.setItem("clue4shown", true);
}

function ask() {
    localStorage.setItem('clue3shown', true);
}

window.onload = function() {
        if(localStorage.getItem("clue3shown") === "true") {
            document.getElementById('clue3').hidden = false;
        }
        if(localStorage.getItem("clue4shown") === "true") {
            document.getElementById('clue4').hidden = false;
        }
    }