$(document).ready(function() {

    // $('.addwithjs').click(function() {
    //     $('.arrow-up').hide();
    //     $('.arrow-down').show();
    // });
    $('#addwithjs').click(function() {
        $('#addclass-aroowdown').toggleClass("arrow-down ");
    });
    $('#addwithjs').hover(function() {
        $('#addclass-aroowdown').toggleClass("arrow-down ");
    });
    // $('.addwidth2 li>a').hover(function() {
    //     $('#addwithjs2').toggleClass("addimg");
    // });
    $('a[href="#login-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 300,
            closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false,
        });
        return false;
    });
    $('a[href="#signup-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 300,
            closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false,
        });
        return false;
    });
    $('a[href="#wallet-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 300,
            closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false,
        });
        $('#hide-data').css("visibility", "hidden");
        return false;
    });
    $('a[href="#buy-credits-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 200,
            closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
        return false;
    });
    $('a[href="#students-notification-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 200,
            // closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
        $('#hide-data').css("visibility", "hidden");
        return false;
    });
    $('a[href="#teacher-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 200,
            // closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
        $('#hide-data').css("visibility", "hidden");
        return false;
    });
    $('#show-wallet').click(function() {
        $('#hide-data').css("visibility", "initial");

    });
    $('#show-students').click(function() {
        $('#hide-data').css("visibility", "initial");

    });
    $(".edu").click(function() {
        $(".wrk-exp2").hide();
    });
    $(".exp").click(function() {
        $(".wrk-exp2").show();
    });
    $('a[href="#lesson-modal"]').click(function() {
        $(this).modal({
            fadeDuration: 400,
            closeExisting: false,
            escapeClose: false,
            clickClose: false,
            showClose: false
        });
        return false;
    });

    // $(".crt").click(function() {
    //     $(".wrk-exp2").show();
    // });

});