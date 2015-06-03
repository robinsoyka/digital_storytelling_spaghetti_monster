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