document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/*$( document ).ready(function() {
  var $typesarray = [];
  $('.typecard').each(function() {
      var id = $(this).attr('id');
      $(this).toggleClass("invisible", !$typesarray.includes(clicked_id));
      $typesarray.push(id);
      
  });
  console.log($typesarray);
})
      if ($('input[type=checkbox]').is(':checked') == true){
        //$( '[id*="' + clicked_id + '"]' ).addClass("invisible");
      $('[id*="' + clicked_id + '"]').addClass("invisible");
      } else{
      //$( '[id*="' + clicked_id + '"]' ).removeClass("invisible");
      $('[id*="' + clicked_id + '"]').removeClass("invisible");
      }
*/

/*function showCard(clicked_id){
  //console.log(clicked_id);
  var $typesarray = [];
  $('.btn-check').each(function(){
    if ($(this).is(':checked') == true){
      $('.typecard').each(function() {
        id = $(this).attr('id');
        $typesarray.push(id); 
        if ($('.btn-check').is(':checked') == true){
          $('.typecard').not('[id*="' + id + '"]').css("display","none");
        } else if ($('.btn-check').is(':checked') == false){
          $('.typecard').not('[id*="' + id + '"]').css("display","flex");
        }
        //$(this).toggleClass("invisible", id.includes(clicked_id));  (doesn't work)
    })
  }
  });*/
  
  

  function showCard(){
    var $inputIDs = [];
    $(".btn-check").each(function(){
      if($(this).is(":checked")){
        $inputIDs.push($(this).attr('id'));
      }
    });
    console.log("Ma inputIDs = " + $inputIDs);
    $(".typecard").each(function(){
      var id = $(this).attr('id');
      if(!CardIsVisible($inputIDs, id)){
        $(this).css("display","none");
      }else{
        $(this).css("display","flex");
      }
    });
  }
  
  function CardIsVisible (tab, idCard){
    var isVisible = true;
    jQuery.each(tab, function(i, value) {   
      if(!idCard.includes(value)){
        isVisible = false;
      }
    });
    return isVisible;
  }


$('input[type=checkbox]').change(function(){
  if ($('[id="Ni"],[id="Se"]').is(':checked') == true){
    $('[id="Si"]').prop('disabled', true);
    $('[id="Ne"]').prop('disabled', true);
  } else {
      $('[id="Si"]').prop('disabled', false);
      $('[id="Ne"]').prop('disabled', false);
  }

  if ($('[id="Ne"],[id="Si"]').is(':checked') == true){
      $('[id="Se"]').prop('disabled', true);
      $('[id="Ni"]').prop('disabled', true);
  } else {
      $('[id="Se"]').prop('disabled', false);
      $('[id="Ni"]').prop('disabled', false);
  }

  if ($('[id="Fe"],[id="Ti"]').is(':checked') == true){
    $('[id="Te"]').prop('disabled', true);
    $('[id="Fi"]').prop('disabled', true);
  } else {
      $('[id="Te"]').prop('disabled', false);
      $('[id="Fi"]').prop('disabled', false);
  }

  if ($('[id="Te"],[id="Fi"]').is(':checked') == true){
    $('[id="Fe"]').prop('disabled', true);
    $('[id="Ti"]').prop('disabled', true);
  } else {
      $('[id="Fe"]').prop('disabled', false);
      $('[id="Ti"]').prop('disabled', false);
  }

});

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 

/*
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});*/