var page_Y = window.pageYOffset;
var navState = 0;
var windowH = $(window).height();

window.onscroll = function(){
	var currPos = window.pageYOffset;
	if(navState == 0){
		if(page_Y > currPos){
			$(".top-menu-fixed").css({'top':'0','padding-top':'0','padding-bottom':'0','background-color':'rgb(0,0,0)','display':'block'});
		}else{		
		   	$(".top-menu-fixed").css({'top':'-10em','display':'none'});
		}
	}
	else{
		$(".top-menu-fixed").css({'top':'0','padding-top':'0','padding-bottom':'0','background-color':'rgb(0,0,0)','display':'block'});
	}
	$('.top-but-not').css({'display':'none'});
	page_Y = currPos;

	if(currPos == 0){
		$(".top-menu-fixed").css({'top':'0','padding-top':'0.5rem','padding-bottom':'0.5rem','background-color':'transparent','display':'block'});
		$('.top-but-not').css({'display':'block'});
	}
}

var search = 0;
var cart = 0;
$('.top-search').on('click',function(){
	if(search == 0){
		$('.top-search').removeClass('top-search').addClass('top-close');
		search = 1;
		
		if(cart == 1){
			console.log('asds');
			$('.shoping-cart').click();
		}
		navState = 1;
	}
	else{
		$('.top-close').removeClass('top-close').addClass('top-search');
		search = 0;
		navState = 0;
	}

});
$('.btn-huy').on('click',function(){
	var cateItem = $(this).parents('.cart-item');
	cateItem.remove();
});
$('.shoping-cart').on('click',function(){
	if(cart == 0)
	{	
		cart = 1;
		$(this).parent().find('.dropdown-menu').show();
		if(search == 1){
			$('.top-close').click();
		}
		navState = 1;
	}
	else{
		cart = 0;
		navState = 0;
		$(this).parent().find('.dropdown-menu').hide();
	}
});
$('.white-item-top').on('click',function(e){
	var cc = $(this).attr('link-to');
	var he = $(cc).position().top-100;
	$("HTML, BODY").animate({ scrollTop: he }, 1000);

});
$('.cate-review-slider-item').on('click',function(){
	
	var asd = $(this).find('img');
	var aa = $(this).parents('.cate-review-img-par').find('.cate-review-img');
	aa.find('img').attr('src',asd.attr('src'));

});
$('.cate-detail-slider-item').on('click',function(){
	
	var asd = $(this).find('img');
	var aa = $(this).parents('.cate-detail-img-par').find('.cate-detail-img');
	aa.find('img').attr('src',asd.attr('src'));

});

$('.detail-tab').on('click', function(){

	$('.detail-tab').removeClass('detail-tab-active');
	$(this).addClass('detail-tab-active');
});

$('#cost-range').on('input',function(){
      var cst = $(this).val();
      var fi = cst -50;
      var la = cst -(-50);
      if(cst >= 50)
      {$('.choose-cost').first().html("$"+fi);}
      else{$('.choose-cost').first().html("$0");}
      $('.choose-cost').last().html("$"+la);       
});
