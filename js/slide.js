/*jshint undef:true, browser:true, noarg:true, curly:true, regexp:true, newcap:true, trailing:false, noempty:true, regexp:false, strict:true, evil:true, funcscope:true, iterator:true, loopfunc:true, multistr:true, boss:true, eqnull:true, eqeqeq:false, undef:true */
/*global $:false */

$(document).ready(function(){
    'use strict';

    //--- show introduction ----------------------------------------------
    $('#slide').delegate('.item', 'mouseenter', function(){
        $(this).find('p').fadeIn();
    });
    $('#slide').delegate('.item', 'mouseleave', function(){
        $(this).find('p').fadeOut();
    });
});
