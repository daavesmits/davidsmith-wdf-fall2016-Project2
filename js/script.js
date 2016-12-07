$(function() {

     $(window).scroll( function(){

         $('.FadeInFast').each( function(i){

             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();

             if( bottom_of_window > bottom_of_object ){

                 $(this).animate({'opacity':'1'},500);

             }

         });

     });

     $(window).scroll( function(){

         $('.FadeInSlow').each( function(i){

             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();

             if( bottom_of_window > bottom_of_object ){

                 $(this).animate({'opacity':'1'},1500);

             }

         });

     });


     $('#contactForm').on('submit', function(e){
       e.preventDefault();

       if ( $('#nameField').val() == '' ) {
         alert('Please Enter Your Name.');
       }

       if ( $('#emailField').val() == '' ) {
         alert('Please Enter Your Email.');

       } else {
         alert('Thanks for contacting us!');
         $(this).fadeOut(1);
         $(".formSubmit").show();
       }

     });

 });
