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