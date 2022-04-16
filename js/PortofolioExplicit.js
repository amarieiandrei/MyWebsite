
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

$('.PopupImage span').on('click', function() {
   $('.PopupImage').css("display", "none");
});
