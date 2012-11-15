    $(window).load(function(){  
      $('.carousel').carousel({
          interval: false
        });

      
          
          $('#cc_left').bind('click',function(event){
            var new_number = parseInt($('.carousel-control-circle.active').attr('id').slice(-1))-1;
            if(new_number==0)
              event.stopPropagation();
            else{
              var new_id = '#ccc_slide_'+new_number;
              $('.carousel-control-circle.active').removeClass('active');
              $(new_id).addClass('active');

            }
            
            
          });

          $('#cc_right').bind('click',function(event){
            var new_number = parseInt($('.carousel-control-circle.active').attr('id').slice(-1))+1;
            if(new_number==4)
              event.stopPropagation();
            else{
              var new_id = '#ccc_slide_'+new_number;
              $('.carousel-control-circle.active').removeClass('active');
              $(new_id).addClass('active');

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

        $('ul.top_menu_ul li a').bind('click',function(event){
            var $anchor = $(this);
            var new_pos = $($anchor.attr('href')).offset().top -35;

            //alert($($anchor.attr('href')).offset().top);
     
            $('html, body').stop().animate({
                scrollTop: new_pos,
            }, 600,'linear');
            //$('.top_menu_ul li').removeClass('active');
            //$(this).parent().addClass('active');
            event.preventDefault();
            });


        $('.top_menu_ul a').click(function(event){
          var position_top = $('#top_div').offset().top;

            $("#top_div").removeClass('scrollable_div');
            $("#top_div").addClass('scrollable_div_min');


            

        });
        
        var firstb_pos = parseInt($('#opportunity').offset().top)-55;
        var secondb_pos = parseInt($('#problem').offset().top)-55;
        var thirdb_pos = parseInt($('#solution').offset().top)-55;
        var fourthb_pos = parseInt($('#team').offset().top)-55;
        var fifthb_pos = parseInt($('#business').offset().top)-56;
        var sixthb_pos = parseInt($('#acquisition').offset().top)-56;
        var seventhb_pos = parseInt($('#invest').offset().top)-60;
/*console.log(firstb_pos);
console.log(secondb_pos);
console.log(thirdb_pos);
console.log(fourthb_pos);
console.log(fifthb_pos);
console.log(sixthb_pos);
console.log(seventhb_pos);*/
        $(window).scroll(function(event) {

          var position_top = $('#top_div').offset().top;
          //console.log(position_top );
          //console.log($('#top_div').height());

          //console.log(fb_pos);
          //console.log('SCROLL Y' + window.scrollY);
          var scroll_value = window.scrollY;
          if(scroll_value>70){
            $("#top_div").removeClass('scrollable_div');
            $("#top_div").addClass('scrollable_div_min');
          }
          setTimeout(function(){},1000);
          if(scroll_value<70){
            $("#top_div").removeClass('scrollable_div_min');
            $("#top_div").addClass('scrollable_div');
          }

          if(((scroll_value)<secondb_pos)&& ($('#firstb').hasClass('active') == false)){
            //console.log('first block ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#firstb').addClass('active');
            }

          if((secondb_pos<scroll_value) && (scroll_value<thirdb_pos)&& ($('#secondb').hasClass('active') == false)){
            //console.log('second block ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#secondb').addClass('active');
            }

          if((thirdb_pos<scroll_value) && (scroll_value<fourthb_pos)&& ($('#thirdb').hasClass('active') == false)){
            //console.log('third block ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#thirdb').addClass('active');
            }

          if((fourthb_pos<scroll_value) && (scroll_value<fifthb_pos)&& ($('#fourthdb').hasClass('active') == false)){
            //console.log('fourth block ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#fourthb').addClass('active');
            }

          if((fifthb_pos<scroll_value) && (scroll_value<sixthb_pos)&& ($('#fifthdb').hasClass('active') == false)){
            //console.log('fifthblock ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#fifthb').addClass('active');
            }

          if((sixthb_pos<scroll_value) && (scroll_value<seventhb_pos)&& ($('#sixthdb').hasClass('active') == false)){
            //console.log('sixth block ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#sixthb').addClass('active');
            }

          if( (scroll_value>seventhb_pos)&& ($('#seventhdb').hasClass('active') == false)){
            //console.log('third block ' + window.scrollY);
            $('.top_menu_ul li').removeClass('active');
            $('#seventhb').addClass('active');
            }
          });

          $("#alist").click(function(){
               window.location=$(this).find("a").attr("href"); 
               return false;
          });
          $("#gitouch").click(function(){
               window.location=$(this).find("a").attr("href"); 
               return false;
          });
          $("#hunielogo_top").click(function(){

            $('html, body').animate({
                scrollTop: 0,
            }, 600,'linear');
          });
    });