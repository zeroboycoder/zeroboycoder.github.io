$("document").ready(function(){
    // Whiteky nav
    $(".about-section").waypoint(function(direction){
        if(direction == "down"){
           $("nav").addClass("whiteky")
           $("#to-the-top").addClass("js--to-the-top")
        } else {
            $("nav").removeClass("whiteky");
            $("#to-the-top").removeClass("js--to-the-top")
        }
    }, {
        offset : "60px"
    })

    // Navigation Smooth Scrolling
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    });

    // Mobile-nav
    $(".js--mobile-nav").click(function(){
        $(".main-nav").slideToggle(200);
    })


    // Scrolling Effect
    $("header").waypoint(function(){
        $(".js--wp-0").addClass("animate fadeInUp")
    }, {
        offset : "70%"
    })

    $("header").waypoint(function(){
        $(".js--wp-0-1").addClass("animate fadeIn")
    }, {
        offset : "70%"
    })
    
    $(".js--wp-1").waypoint(function(){
        $(".js--wp-1").addClass("animate fadeInRight")
    }, {
        offset : "70%"
    })

    $(".js--wp-2").waypoint(function(){
        $(".js--wp-2").addClass("animate fadeIn")
    }, {
        offset : "70%"
    })

    $(".skill-section").waypoint(function(){
        $(".js--wp-3").addClass("animate fadeInLeft")
    }, {
        offset : "70%"
    })

    $(".skill-section").waypoint(function(){
        $(".js--wp-4").addClass("animate fadeInRight")
    }, {
        offset : "70%"
    })
    
    $(".js--wp-5").waypoint(function(){
        $(".js--wp-5").addClass("animate fadeInUp")
    }, {
        offset : "70%"
    })

    $(".js--wp-6").waypoint(function(){
        $(".js--wp-6").addClass("animate pulse")
    }, {
        offset : "70%"
    })


})