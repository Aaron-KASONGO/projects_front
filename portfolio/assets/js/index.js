$(document).ready(function() {
    let position = $('#before-navbar').offset();
    $(window).resize(function() {
        position = $('#before-navbar').offset();
    })
    $(window).scroll(function(){
        let height = $(window).scrollTop();
        console.log(`height: ${height}, position: ${Math.floor(position.top)}`)
        if (height >= position.top){
            $('#navbar').addClass('fixed-top');
        }else{
            $('#navbar').removeClass('fixed-top');
        }
    })
})