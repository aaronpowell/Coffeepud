$(function() {
    $(window).resize(function() {
        var $textarea = $('textarea');
        var $window = $(this);
        $textarea.height( $window.height() - 35 );
        $textarea.width( $window.width() - 15 );
    });
    $(window).resize(); 
});