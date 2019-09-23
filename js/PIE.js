// JavaScript Document


$(function(){
	$('').addClass('rounded')
});

$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});

$(function() {
$('').hover(
function(){ $(this).addClass('rounded') },
function(){ $(this).removeClass('rounded') }

)
});
