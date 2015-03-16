function hhRemoveAds() {
    $("#btn_xemngay")
    .off('click')
    .click(function () {
	    $(".banner_player_img").hide();
	        
	    $(".info_film-div").animate({
	        height: "0px",
	        opacity: 0
	    }, {
	        duration: 1500,
	        complete: function () {
	            $(".info_film-div").hide();
	        }
	    });

	    $.ajax({
	        type: 'POST',
	        url: http + 'vod/addview',
	        data: "id=" + "34383938316E61" + "&q=" + "episode",
	        dataType: 'json',
	        success: function (result) {

	        }
	    })

	    addPlayer(initVideoUrl, imageSrc, adsXMLURL, infoXMLUrl, videoSubs);
	    // addPlayer(initVideoUrl, imageSrc , 'http://www.hayhaytv.vn/ads.xml', videoSubs);
	    button = 2;
	    if(isVTT){
	        api_impression_hit(234,39);
	    }
	    
	     //increase z-index
	    var balloonContainer = $('.AdvertiseBalloonFooterBottomRight div');
	    if(balloonContainer.length){
	         balloonContainer.each(function(index, item){
	            $(item).css({"z-index" : '99998 !important'});
	        });
	         $('.banner_player ').css({position: "absolute","z-index" : '99999'});
	    }
	});
}

var script = document.createElement('script');
script.type = 'text/javascript';

script.textContent = hhRemoveAds.toString() + ' hhRemoveAds();';

document.body.appendChild(script);