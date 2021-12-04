$(document).ready(function() {
    $('.card-im').hover(function() {
        $('img',this).stop(true, true).css({
            "filter": "blur( 3px )",
            "transform": "scale(1.01)"
        })
        $('div', this).removeClass('d-none');
    }, function() {
        $('img',this).stop(true, true).css({
            "filter": "blur( 0px )",
            "transform": "scale(1)"
        })
        $('div', this).addClass('d-none');
    })
})