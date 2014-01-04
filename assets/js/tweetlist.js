/*
------------------
tweetlist.js 2013-01-29 http://github.com/jairoglyph/

Function to display multiple twitter feeds on one page
Used in conjunction with DreamCodes' twitter feed script

http://www.dreamtemplate.com/dreamcodes/documentation/tweet.html
------------------
*/

var tweetList = function (ticker_id, user_id) {
	document.write('<div class="query ' + ticker_id + '"></div>')

	jQuery(function ($) {
	    $('.'+ticker_id).tweet({
	        username: user_id, // define your twitter username
	        page: 1,
	        avatar_size: 32, // avatar size in px
	        count: 10, // how many tweets to show
	        loading_text: "Loading ... Check out <a href=\"http://status.twitter.com/\">Twitter Status</a> if there is an issue accessing Twitter."
	    }).bind("loaded", function () {
	        var ul = $(this).find(".tweet_list");
	        var ticker = function () {
	                setTimeout(function () {
	                    ul.find('li:first').animate({
	                        marginTop: '-64px'
	                    }, 500, function () {
	                        $(this).detach().appendTo(ul).removeAttr('style');
	                    });
	                    ticker();
	                }, 8000); // duration before next tick (4000 = 4 secs)
	            };
	        ticker();
	    });
	});
}