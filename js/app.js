window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        // document.querySelector("html").style.opacity = 1;
        // start app?

        var id = function(element) {

            return document.getElementById(element);

        };
        // alert()

        var hero = id('guy');
        var ground = id('ground');
        var groundPosition = {
            x:0,
            y:0
        } //[0 , 0]
        var heroPosition =  {
            x:20,
            y:ground.offsetHeight
        } // [20 , ground.offsetHeight] //I want guy to start above the ground

        var plotObject = function(obj, coordinates) {//alert(coordinates.x)
            // We changed our origin point from top left to bottom left to be congruent with a classical scheme
            // We also relocated our origin point of place objects to the bottom left
            obj.style.left = coordinates.x + 'px';
            obj.style.top = document.querySelector('body').offsetHeight - coordinates.y - obj.offsetHeight + 'px'

        };
        // alert(document.querySelector('body').offsetHeight)
        plotObject(ground, groundPosition);
        plotObject(hero, heroPosition);

document.onkeydown=function(e){
    var evtobj = window.event? event : e
// alert(3)
    if(evtobj.keyCode==37){ //left arrow pressed
        heroPosition.x += -1;

    }

    if(evtobj.keyCode==39){ //right arrow pressed
        heroPosition.x += 1;

    }
    plotObject(hero , heroPosition );

}


    })

}
