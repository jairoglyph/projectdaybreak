/*
-------------------------------------------
function to scroll to desired page section
-------------------------------------------
*/

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + $('.wrapper').offset().top
        }, 1000);
    });
};

$("#main-nav ul a").click(function (e) {
	var s = '#'+$(this).attr('class')+'-section';
	$(s).scrollView();
	e.preventDefault();
});

$(".social a").click(function (e) {
	var t = '#'+$(this).attr('rel')+'-section';
	$(t).scrollView();
	e.preventDefault();
});

/*
---------------------------------------
open links in a new browser window/tab
---------------------------------------
*/

$('a[rel="external"]').click( function (e) {
	window.open( $(this).attr('href') );
	e.preventDefault();
});