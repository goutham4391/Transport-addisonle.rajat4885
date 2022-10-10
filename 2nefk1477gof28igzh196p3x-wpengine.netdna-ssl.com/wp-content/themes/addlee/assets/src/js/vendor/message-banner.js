jQuery(document).ready(function ($) {

    // Message Banner
    function showMsgBanner() {
        setTimeout(
            function () {
                $('#msg-banner').addClass('showMessage');
            },
            500
        );
    }

    var show_msg_banner = $.cookie('show_msg_banner');

    // Close App Banner
    $('#msg-banner-close').click(function () {

        $('#msg-banner').removeClass('showMessage');

        // Hide App Banner for 2 days
        $.cookie('show_msg_banner', 'false', {
            expires: 0.5
        });
        return false;
    });

    if ($('#msg-banner').length > 0 && show_msg_banner !== 'false') {
        showMsgBanner();
    }
});
