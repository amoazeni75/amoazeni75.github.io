function showBib(bib, btn){
    var el = document.getElementById(bib);
    el.hidden = !el.hidden;
    if (btn) {
        btn.innerText = el.hidden ? btn.innerText.replace("Hide", "Show")
                                  : btn.innerText.replace("Show", "Hide");
    }
}
