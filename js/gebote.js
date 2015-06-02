// JavaScript Document

var $post = $('.gebote_text');

$('a').click(function(e){
  e.preventDefault();
  
  console.log(e)
var id = '#' + $(this).attr('data-id');
  
  console.log(id);
  $post.fadeOut();
  $(id).fadeIn();
  
});