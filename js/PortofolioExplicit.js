
// document.querySelectorAll('.CarouselTrack img').forEach(image =>{
//    image.onclick = () =>{
//       document.querySelector('.PopupImage').style.display = 'block';
//       document.querySelector('.PopupImage img').src = image.getAttribute('src');
//    }
// });

// document.querySelector('.PopupImage span').onclick = () =>{
//    document.querySelector('.PopupImage').style.display = 'none';
// }

$('.CarouselTrack img').each(function() {
   $(this).on('click', ()=> {
      $('.PopupImage').css("display", "block");
      $('.PopupImage img').attr('src', $(this).attr('src'));
   });
});

$('.CarouselTrack video').each(function() {
   $(this).on('click', ()=> {
      // $('.PopupVideo').css("display", "block");
      $('.PopupVideo video').attr('src', $(this).attr('src'));
      $('.PopupVideo video').trigger('play');
   });
});

$('.PopupImage span').on('click', function() {
   $('.PopupImage').css("display", "none");
});