var page_Y = window.pageYOffset;

var windowH = $(window).height();

window.onscroll = function(){
	var currPos = window.pageYOffset;
	if(page_Y > currPos){
		$(".top-menu-fixed").css({'top':'0','padding-top':'0','padding-bottom':'0','background-color':'rgb(0,0,0)','display':'block'});
	}else{		
	   	$(".top-menu-fixed").css({'top':'-10em','display':'none'});
	   	$('.top-but-not').css({'display':'none'});
	}
	page_Y = currPos;

	if(currPos == 0){
		$(".top-menu-fixed").css({'top':'0','padding-top':'0.5rem','padding-bottom':'0.5rem','background-color':'transparent','display':'block'});
		$('.top-but-not').css({'display':'block'});
	}
}

var search = 0;
$('.top-search').on('click',function(){
	if(search == 0){
		$('.top-search').removeClass('top-search').addClass('top-close');
		search = 1;
	}
	else{console.log('asd333');
	$('.top-close').removeClass('top-close').addClass('top-search');
		search = 0;
	}
});

$('.white-item-top').on('click',function(e){
	var cc = $(this).attr('link-to');
	var he = $(cc).position().top-100;
	$("HTML, BODY").animate({ scrollTop: he }, 1000);

});