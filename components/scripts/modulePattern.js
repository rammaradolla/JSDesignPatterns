
//------------------ModulePattern Start------------------------\n

var chatModule = (function(){

    var leadself = "Me: ",
        leadcomputer  = "PC: ",
        aSaid = ["This is a Cyber Chat"],
        msgYes = "yes, that's a great idea.",
        msgNo = "No, that must be a mistake.",
        aSassyStuff = ["Like mold on books, grow myths on history.",
        "She moved like a poem and smiled like a sphinx.", +
            "As long a we don't die,  this is gonna be one hell of a story.",
        "She laughed, and the desert sang.",
        "Ypu've got about as much charm as a dead slug."];

    function echo (msg){
        aSaid.push("<div>" + msg + "</div>");
        var aSaidLength = aSaid.length,
            start = Math.max(aSaidLength - 6, 0),
            out = "";

        for(var i=start; i<aSaidLength; i++){
            out += aSaid[i];
        }

        $('.advert').html(out);
        $('#talk span').text(msg);
    }

    return {
        talk: function (msg){
            echo(leadself + msg);
        },

        replayYesNo: function (){
            var msg = Math.random()>.5 ? msgYes : msgNo;
            echo(leadcomputer + msg);
        },

        saySassyStuff: function (){
            var msg = aSassyStuff[ Math.floor(Math.random()*aSassyStuff.length) ];
            echo(leadcomputer + msg);
        }
      }

})();

//------------------ModulePattern End-------------------------------\n

//------------------ModulePattern Test Start------------------------\n

//uncomment this block if you want to test it.
//$(document).ready(function(){
//    chatModule.talk("Hey what's up buddy");
//    chatModule.replayYesNo();
//    chatModule.talk("Are you kidding!");
//});

//------------------ModulePattern Test End--------------------------\n