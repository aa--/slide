/*jshint undef:true, browser:true, noarg:true, curly:true, regexp:true, newcap:true, trailing:false, noempty:true, regexp:false, strict:true, evil:true, funcscope:true, iterator:true, loopfunc:true, multistr:true, boss:true, eqnull:true, eqeqeq:false, undef:true */
/*global $:false */

$(document).ready(function(){
    'use strict';

    //--- show introduction ----------------------------------------------
    $('#slide').delegate('.item', 'mouseenter', function(){
        var $this = $(this);
        $this.find('p').fadeIn();
        clearTimeout($this.data('time'));
    });
    $('#slide').delegate('.item', 'mouseleave', function(){
        var $this = $(this);
        $this.find('p').stop().fadeOut();
        autoChange($this);
    });

    function autoChange($item) {
        changePic($item, function() {
            var t = setTimeout(function() {
                autoChange.call($item, $item);
            }, 3000);
            $item.data('time', t);
        });
    }
    autoChange($('.item').eq(0));
    autoChange($('.item').eq(1));
    autoChange($('.item').eq(2));
    autoChange($('.item').eq(3));

    function changePic($item, callback) {
        var $this = $item,
            $on = $this.find('.on'),
            $next;
        if ($on.length) {
            $next = $on.next().length ?  $on.next() : $on.siblings().eq(0);
        } else {
            $next = $this.find('li').eq(0);
        }
        $next.addClass('on')
             .siblings().removeClass('on');
        if (callback) {
            callback.call($this, $this);
        }
    }
});
