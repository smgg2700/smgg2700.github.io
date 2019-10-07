$(document).ready(function() {
    var $element = $('#Stage');
    var phrases = [
        'Hi Didi',
        'I wish that',
        'you have a',
        'very happy',
        'and cheerful',
        '      DUSSEHRA       ',
        'Did you like this gift ?'
    ];
    var index = -1;
    function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1500);
            },
        });
    };
});
