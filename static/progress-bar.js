document.addEventListener("DOMContentLoaded", function(event) { 
    var 
        width = 0,
        $barPositive = document.querySelectorAll('.positive'),
        $progressTexts = document.querySelectorAll('.progress-bar'),
        baseText = $progressTexts[0].innerHTML;

    // replace text of the inner nodes
    for (var i = $progressTexts.length - 1; i >= 0; i--) {
        $progressTexts[i].innerHTML = baseText.replace(/\s/g, '&nbsp;');
    };
    
    // just for presentation
    function increaseWidth() {
        if (width > '100') {
            width = 0;
        }
        $barPositive[0].style = "width:" +  width + '%';
        width += 0.5;
        setTimeout(increaseWidth, 50);
    }   
    
    increaseWidth();
})
