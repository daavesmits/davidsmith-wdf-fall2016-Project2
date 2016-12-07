$(function() {

  /* Every time the window is scrolled ... */
     $(window).scroll( function(){

         /* Check the location of each desired element */
         $('.FadeInFast').each( function(i){

             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();

             /* If the object is completely visible in the window, fade it it */
             if( bottom_of_window > bottom_of_object ){

                 $(this).animate({'opacity':'1'},500);

             }

         });

     });

     $(window).scroll( function(){

         /* Check the location of each desired element */
         $('.FadeInSlow').each( function(i){

             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();

             /* If the object is completely visible in the window, fade it it */
             if( bottom_of_window > bottom_of_object ){

                 $(this).animate({'opacity':'1'},1500);

             }

         });

     });


     $('#contactForm').on('submit', function(e){
       e.preventDefault();
       $(this).fadeOut(2000);

       if ( $('#nameField').val() == '' ) {
         alert('Please Enter Your Name.');
       }

       if ( $('#emailField').val() == '' ) {
         alert('Please Enter Your Email.');

       } else {
         alert('Thanks for contacting us!');
       }

    //  $("#contactForm").submit(function(e) {
    //  e.preventDefault();
  });

 });
