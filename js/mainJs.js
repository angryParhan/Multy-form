var wrap = document.getElementById("wrapper");

var btnClose = document.getElementById("close");

btnClose.onclick = function() {
    wrap.style.display = "none";
    return false;
    
}

function time_passed() {
    wrap.style.display = "block";
}

setTimeout(time_passed, 7000);
