

let setUpTool = function () {
    // Parent function

    let tootip = "",
        toolTipDiv = document.querySelector(".div-tooltip"),
        toolTipElements = Array.from(document.querySelectorAll(".hover-reveal")),
        timer;

    /**
     * Display a tool tip
     * @param e
     * @param obj - domain
     */
    let displayTooltip = function(e, obj) {
        tooltip = obj.dataset.tooltip;
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.top = e.pageY + "px";
        toolTipDiv.style.left = e.pageX + "px";
        // toolTipDiv.style.opacity = 1; // Tool tip to appear
        fadeIn(toolTipDiv);
    };

    /**
     * Fade out the tool tip in an interval time of 10 ms
     * @param element tool tip
     */
    let fadeOut = function(element) {
      let op = 1;
      if (!timer){ // Check if faded in earlier
          timer = setInterval(function () {
              if(op <= 0.1){
                  clearInterval(timer);
                  timer = null; // Clean timer to fade out the next one
                  element.style.opacity = 0;
              }
              element.style.opacity = op;
              op -= op * 0.1;
          }, 10); // 10 ms to fade out
      }

    };

    /**
     * Fade out the tool tip in an interval time of 10 ms
     * @param element tool tip
     */
    let fadeIn = function(element) {
        let op = 1;
        let timer = setInterval(function () {
            if(op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 10); // 10 ms to fade out
    };

    /**
     * Add an event listener to appear and disappear for each tool tip
     */
    toolTipElements.forEach(function (elem){
        let timeOut;
        elem.addEventListener("mouseenter", function (e) {// Tool tip is appearing when mouse enter
            let that = this; // Need an aly
            timeOut = setTimeout(function (){ // Display with a bit of delay in order to avoid bleak in effects
                displayTooltip(e, that);
            }, 400);

        });
        elem.addEventListener("mouseleave", function(e) { // Fade out when mouse leave
            clearTimeout(timeOut);  // Avoid bleak in effects
            fadeOut(toolTipDiv);
        });
    });
};