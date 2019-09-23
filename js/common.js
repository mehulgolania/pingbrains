$(function(){
	//$('.user-photo').addClass('rounded');
});


$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});

$(function() {
	// $('.stories-box').hover(
	// function(){ $(this).next().css("border-color":"#00eb94") },
	// function(){ $(this).next().css("border-color":"#f0f0f0")}
	// )
});

