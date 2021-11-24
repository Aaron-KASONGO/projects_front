$(document).ready(function(){
    $( "a.link" ).toggle(
        function() {
          $( this ).addClass( "active" );
        }, function() {
          $( this ).removeClass( "active" );
        }
      );
})