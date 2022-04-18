
jQuery(document).ready(function($){

    $('.LiveSearchList li').each(function(){
    $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    
    $('.liveSearchBox').on('keyup', function(){
    
    var searchTerm = $(this).val().toLowerCase();
    
        $('.LiveSearchList li').each(function(){
    
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });
    });    
});