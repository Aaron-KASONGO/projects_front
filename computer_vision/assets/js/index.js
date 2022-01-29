$(document).ready(function() {
    $('#file').change(function(){
        const file = this.files[0];
        console.log(file);
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            console.log(event.target.result);
            $('#id-image').attr('src', event.target.result);
            $('#ig-image').attr('src', event.target.result);
            $('#id-div').removeClass('d-none');
          }
          reader.readAsDataURL(file);
        }
    })

    $('#id-button').click(function() {
      $('#file').click();
    })

    $('#accordion-button').click(function(event) {
      event.preventDefault();
    })

    $('#accordion-button1').click(function(event) {
      event.preventDefault();
    })
})
