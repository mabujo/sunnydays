$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        anchors:['Weather', 'Enter'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Weather', 'Enter'],

        //Accessibility
        keyboardScrolling: true,
        //sectionsColor : ['#ccc', '#fff'],


    });
});

