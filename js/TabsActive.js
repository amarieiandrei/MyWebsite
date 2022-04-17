
$(document).ready( function() {
    $('#WebProgrammingInfo').click( function() {
        $('.MainInfo').css("display", "none");

        $('.WebProgrammingInfo').css("display", "block");
        $('.WebDesignInfo').css("display", "none");
        $('.ProblemSolvingInfo').css("display", "none");
        $('.SomethingInfo1').css("display", "none");
        $('.SomethingInfo2').css("display", "none");
    });

    $('#WebDesignInfo').click( function() {
        $('.MainInfo').css("display", "none");

        $('.WebProgrammingInfo').css("display", "none");
        $('.WebDesignInfo').css("display", "block");
        $('.ProblemSolvingInfo').css("display", "none");
        $('.SomethingInfo1').css("display", "none");
        $('.SomethingInfo2').css("display", "none");
    });

    $('#ProblemSolvingInfo').click( function() {
        $('.MainInfo').css("display", "none");

        $('.WebProgrammingInfo').css("display", "none");
        $('.WebDesignInfo').css("display", "none");
        $('.ProblemSolvingInfo').css("display", "block");
        $('.SomethingInfo1').css("display", "none");
        $('.SomethingInfo2').css("display", "none");
    });

    $('#SomethingInfo1').click( function() {
        $('.MainInfo').css("display", "none");

        $('.WebProgrammingInfo').css("display", "none");
        $('.WebDesignInfo').css("display", "none");
        $('.ProblemSolvingInfo').css("display", "none");
        $('.SomethingInfo1').css("display", "block");
        $('.SomethingInfo2').css("display", "none");
    });

    $('#SomethingInfo2').click( function() {
        $('.MainInfo').css("display", "none");
        
        $('.WebProgrammingInfo').css("display", "none");
        $('.WebDesignInfo').css("display", "none");
        $('.ProblemSolvingInfo').css("display", "none");
        $('.SomethingInfo1').css("display", "none");
        $('.SomethingInfo2').css("display", "block");
    });
});