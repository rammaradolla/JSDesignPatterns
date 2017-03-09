
//------------------ModuleRevealPattern Start------------------------\n
(function (win, doc, $){
var chatModule = (function(){

    var _leadself = "Me: ",
        _leadcomputer  = "PC: ",
        _aSaid = ["This is a Cyber Chat"],
        _msgYes = "yes, that's a great idea.",
        _msgNo = "No, that must be a mistake.",
        _aSassyStuff = ["Like mold on books, grow myths on history.",
            "She moved like a poem and smiled like a sphinx.", +
                "As long a we don't die,  this is gonna be one hell of a story.",
            "She laughed, and the desert sang.",
            "Ypu've got about as much charm as a dead slug."];

    function _echo (msg){
        _aSaid.push("<div>" + msg + "</div>");
        var aSaidLength = _aSaid.length,
            start = Math.max(aSaidLength - 6, 0),
            out = "";

        for(var i=start; i<aSaidLength; i++){
            out += _aSaid[i];
        }

        $('.advert').html(out);
        $('#talk span').text(msg);
    }

    function talk (msg){
        _echo(_leadself + msg);
    }

    function replayYesNo(){
        var msg = Math.random()>.5 ? _msgYes : _msgNo;
        _echo(_leadcomputer + msg);
    }

    function saySassyStuff(){
        var msg = _aSassyStuff[ Math.floor(Math.random()*_aSassyStuff.length) ];
        _echo(_leadcomputer + msg);
    }

    return {
        talk: talk,
        replayYesNo: replayYesNo,
        saySassyStuff: saySassyStuff
    }

})();
    if(!win.chatModule)
        win.chatModule = chatModule; //here we can add global accessible module on condition.

})(window, document, jQuery);
//------------------ModuleRevealPattern End-------------------------------\n

//------------------ModuleRevealPattern Test Start------------------------\n

//$(document).ready(function(){
//    chatModule.talk("Hey what's up buddy");
//    chatModule.replayYesNo();
//    chatModule.talk("Are you kidding!");
//});
//
//
//console.log (window.chatModule)

//------------------ModuleRevealPattern Test End--------------------------\n

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

//------------------ModuleRevealPattern Start------------------------\n

var chatRevealModule = (function(){

    var _leadself = "Me: ",
        _leadcomputer  = "PC: ",
        _aSaid = ["This is a Cyber Chat"],
        _msgYes = "yes, that's a great idea.",
       _msgNo = "No, that must be a mistake.",
       _aSassyStuff = ["Like mold on books, grow myths on history.",
            "She moved like a poem and smiled like a sphinx.", +
                "As long a we don't die,  this is gonna be one hell of a story.",
            "She laughed, and the desert sang.",
            "Ypu've got about as much charm as a dead slug."];

    function _echo (msg){
        _aSaid.push("<div>" + msg + "</div>");
        var aSaidLength = _aSaid.length,
            start = Math.max(aSaidLength - 6, 0),
            out = "";

        for(var i=start; i<aSaidLength; i++){
            out += _aSaid[i];
        }

        $('.advert').html(out);
        $('#talk span').text(msg);
    }

    function talk (msg){
        _echo(_leadself + msg);
    }

    function replayYesNo(){
        var msg = Math.random()>.5 ? _msgYes : _msgNo;
        _echo(_leadcomputer + msg);
    }

    function saySassyStuff(){
        var msg = _aSassyStuff[ Math.floor(Math.random()*_aSassyStuff.length) ];
        _echo(_leadcomputer + msg);
    }

    return {
        talk: talk,
        replayYesNo: replayYesNo,
        saySassyStuff: saySassyStuff
    }

})();

//------------------ModuleRevealPattern End-------------------------------\n

//------------------ModuleRevealPattern Test Start------------------------\n

//$(document).ready(function(){
//    chatRevealModule.talk("Hey what's up buddy");
//    chatRevealModule.replayYesNo();
//    chatRevealModule.talk("Are you kidding!");
//});

//------------------ModuleRevealPattern Test End--------------------------\n
(function (win, $) {
    var CircleGeneratorSingleton = (function() {
        var instance;

        function init() {
            var _aCircle = [],
                _stage = $('.advert');

            function _position(circle, left, top) {
                circle.css({position:"absolute", left:left, top:top});
            }

            function create(left, top) {
                var circle = $('<div class="circle"></div>');
                _position(circle, left, top)
                return circle;
            }

            function add(circle) {
                _aCircle.push(circle);
                _stage.append(circle);
            }

            function index() {
                return _aCircle.length;
            }
            return {
                index:index,
                create:create,
                add:add
            }
        }

        return {
            getInstance: function () {
                if(!instance) {
                    instance = init();
                }
                return instance;
            }
        }
    })();

    $(win.document).ready(function(){
      $('.advert').click(function(e){
        var cg = CircleGeneratorSingleton.getInstance();
        var circle = cg.create(e.pageX-10, e.pageY-10);
        cg.add(circle);
      });
    });

})(window, jQuery)