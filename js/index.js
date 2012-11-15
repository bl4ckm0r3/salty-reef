 $(window).load(function(){  
      $('.carousel').carousel({
          interval: false
        });

      /*$('#logo_carousel').carousel({
          interval: false
      });*/
          $('#cc_left').fadeTo(0,0.2);
          $('#faces_ccc_arrow_left').fadeTo(0,0.2);
          
          $('#cc_left').bind('click',function(event){
            var new_number = parseInt($('.carousel-control-circle.active').attr('id').slice(-1))-1;
            if(new_number == 1){
            $(this).animate({
                opacity: 0.2,
              },500);
            }
            if(new_number==0){
              event.stopPropagation();
            $(this).removeAttr("href");


          }
            else{
              $('#cc_right').attr("href","#myCarousel");
              $('#cc_right').animate({
                opacity: 0.8,
              },300);
              var new_id = '#ccc_slide_'+new_number;
              $('.carousel-control-circle.active').removeClass('active');
              $(new_id).addClass('active');

            }
            
            
          });

          $('#cc_right').bind('click',function(event){
            var new_number = parseInt($('.carousel-control-circle.active').attr('id').slice(-1))+1;
            if(new_number == 3){
            $(this).animate({
                opacity: 0.2,
              },500);
            }
            if(new_number == 4){
              event.stopPropagation();
              $(this).removeAttr("href");
            }else{
              $('#cc_left').attr("href","#myCarousel");
              $('#cc_left').animate({
                opacity: 0.8,
              },300);
              var new_id = '#ccc_slide_'+new_number;
              $('.carousel-control-circle.active').removeClass('active');
              $(new_id).addClass('active');
              if($('#cc_left').is(":visible")==false)
                $('#cc_left').show(300);
            }
            
            
          });

        $('#ccc_slide_1').click(function(){

          $('.carousel').carousel(0);
          $('.carousel-control-circle.active').removeClass('active');
          $(this).addClass('active');

        });  

        $('#ccc_slide_2').click(function(){

          $('.carousel').carousel(1);
          $('.carousel-control-circle.active').removeClass('active');
          $(this).addClass('active');


        });  

        $('#ccc_slide_3').click(function(){

          $('.carousel').carousel(2);
          $('.carousel-control-circle.active').removeClass('active');
          $(this).addClass('active');
        }); 

        /*$('#ccc_slide_4').click(function(){

          $('.carousel').carousel(3);
          $('.carousel-control-circle.active').removeClass('active');
          $(this).addClass('active');

        });  */


        $('#faces_ccc_arrow_left').bind('click',function(event){
            var new_number = parseInt($('.faces_ccc.active').attr('id').slice(-1))-1;
            if(new_number==1){
              $(this).animate({
                opacity: 0.2,
              },500);
            }
            if(new_number==0){
              event.stopPropagation();
              $(this).removeAttr("href");
              
            }
            else{
              $('#faces_ccc_arrow_right').attr("href","#myFacesCarousel");
              $('#faces_ccc_arrow_right').animate({
                opacity: 0.5,
              },500);
              var new_id = '#faces_ccc_'+new_number;
              $('.faces_ccc.active').removeClass('active');
              $(new_id).addClass('active');

            }
            
            
          });

          $('#faces_ccc_arrow_right').bind('click',function(event){
            
            var new_number = parseInt($('.faces_ccc.active').attr('id').slice(-1))+1;
            if(new_number==2){
                $(this).animate({
                opacity: 0.1,
              },500);
            }
            if(new_number==3){
              event.stopPropagation();
              $(this).removeAttr("href");


            }
            else{
              $('#faces_ccc_arrow_left').attr("href","#myFacesCarousel");
              $('#faces_ccc_arrow_left').animate({
                opacity: 0.5,
              },500);
              var new_id = '#faces_ccc_'+new_number;
              $('.faces_ccc.active').removeClass('active');
              $(new_id).addClass('active');

            }

          });

          $('#faces_ccc_1').click(function(){

          $('#myFacesCarousel').carousel(0);
          $('.faces_ccc.active').removeClass('active');
          $(this).addClass('active');

        });  

        $('#faces_ccc_2').click(function(){

          $('#myFacesCarousel').carousel(1);
          $('.faces_ccc.active').removeClass('active');
          $(this).addClass('active');


        });  

        /*$('#faces_ccc_3').click(function(){

          $('#myFacesCarousel').carousel(2);
          $('.faces_ccc.active').removeClass('active');
          $(this).addClass('active');
        });*/ 

      });  