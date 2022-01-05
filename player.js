

let setUpTool = function () {
    let tootip = "",
        toolTipDiv = document.querySelector(".div-tooltip"),
        toolTipElements = Array.from(document.querySelectorAll(".hover-reveal"));


    let displayTooltip = function(e, obj) {
        tooltip = obj.dataset.tooltip;
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.top = e.pageY + "px";
        toolTipDiv.style.left = e.pageX + "px";
        toolTipDiv.style.opacity = 1;
    };

    // Add an event listener
    toolTipElements.forEach(function (elem){
        elem.addEventListener("moussenter", function (e) {// Pass the event
            displayTooltip(e, this);
        })
    })
};