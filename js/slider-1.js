$(function(){
    $('.slider-1').slidesjs({
        play:{
        active: true,
        // [Boolean] Generate the play stop buttom.
        // You canot use your own buttom. Sorry.
        effect: "slide",
        // [String] Can be either "slide" or "fade".
        interval: 5000,
        // [number] Time spent on each slide in milliseconds.
        auto: "true",
        // [Boolean] Start playing the slideshow on load.
        swap: true,
        // [Boolean] Show/hide stop and play buttons.
        pauseOnHover: "false",
        // [Boolean] Pause a playing slideshow on hover.
        restarDelay: 1500,
        // [number] Restart delay on inactive slideshow.
        }
                    
    });
});
                