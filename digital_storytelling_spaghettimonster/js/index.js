$(document).ready(function(e) {

////////////////////////// SCROLL ICON ////////////////////////// 
  $(document).ready(function(){
  var didScroll = false;
  var icon = $(".loader");
  var $window = $(window);
  var $protagonist = $('#protagonist');

  $(window).scroll(function(){
      if (!didScroll) {
        icon.addClass('is-hidden');
      }
      didScroll = true;
      $protagonist.hide().show(0);
  });
});

  ////////////////////////// INTRO SCROLL FADE ////////////////////////// 

  var oItemsContainer = $('#items');

  var items = oItemsContainer.find('.slide_container');
  //Anzahl der Bilder
  var item_count = items.length+1;
  var $trenner = $('#trenner');
  //var scrollTop_trenner = $trenner.position().top; //px
  //TRENNER MAL 2//var scrollTop_trenner = $trenner.position().top;
  var scrollTop_trenner = $trenner.position().top*2;

  // 1000               10 
  //var iScrollPerItem = scrollTop_trenner  / item_count;
  var iScrollPerItem = (scrollTop_trenner  / item_count);
  // 
  console.log(iScrollPerItem)



  $(window).scroll(function(e) {
    
      var iScrollTop = $(window).scrollTop();
   //console.log(iScrollTop)

   if (iScrollTop>0){

    if(iScrollTop>scrollTop_trenner){
      oItemsContainer.addClass('out-of-view');
    }
    else{
    oItemsContainer.removeClass('out-of-view');  
    }
      // iScrollPerItem = 500;
      var aItems = oItemsContainer.children('.slide_container');
      
    //console.log(iScrollTop);
      var iCurrentIndex = Math.floor(iScrollTop / iScrollPerItem);
      var fOpacity= (iScrollTop % iScrollPerItem) / iScrollPerItem ;
      
    //console.log(fOpacity)
      aItems.filter(':lt(' + iCurrentIndex  + ')').show();
      aItems.filter(':gt(' + iCurrentIndex  + ')').hide();
      
      aItems.eq(iCurrentIndex).show().css('opacity', fOpacity);
    }
    else{
      items.hide();
    }
    
  });

  window.onresize = function(){
    scrollTop_trenner = $trenner.position().top;
  }

  ////////////////////////// ACCORDION FEIERTAGE ////////////////////////// 

  var allPanels = $('.accordion > dd').hide();
    
    $('.accordion > dt > a').click(function(e) {
    e.preventDefault();  
    var isHidden = $(this).parent().next().is(":hidden");
    allPanels.slideUp();
    if (isHidden) $(this).parent().next().slideDown();
    });


  ////////////////////////// GEBOTE & GESCHICHTE ////////////////////////// 

  $('a.action').click(function(e){
    e.preventDefault();
    var $id    = $('#' + $(this).attr('data-id'));
    var $layer = $('#' + $(this).attr('data-layer'));
    $('.active').removeClass('active');
    $(this).addClass('active');
    $layer.fadeOut(function () {
      $layer.html($id.html()).fadeIn();
    });
  });
  
  // display the first element
  $('#story').html($('#story1').html());
  $('#gebot').html($('#gebot1').html());

  ////////////////////////// PARALLAX HIMMEL ////////////////////////// 

  $(function () { // wait for document ready
    var controller = new ScrollMagic.Controller({vertical: true});
    // build tween
    var tween = new TimelineMax()
      .add([
        TweenMax.to("#biervulkan_container", 1, {top: $('#biervulkan_container').position().top-500+'px', ease: Linear.easeNone}),
        TweenMax.to("#fabrik_container", 1, {top: $('#fabrik_container').position().top-600+'px', ease: Linear.easeNone})
      ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#himmel", duration: $('#himmel').height(), offset: 0})
            .setTween(tween)
            .addTo(controller);
  });

  ////////////////////////// PUP UP ////////////////////////// 

$("a[href='#popup']").on("click", openPopUp);
$("#popup").on("click", closePopUp);

function i()
{
  alert("afa");
}

function openPopUp()
{
  $("#popup").css({"display": "block",
                   "opacity": 1});
}

function closePopUp()
{
  $("#popup").css({"display": "none",
                   "opacity": 0});
}

});
