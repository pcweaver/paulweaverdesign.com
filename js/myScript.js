$(document).ready(function() {
	//Project title pop-outs--------------------
	$(".imageGrid a").hover(function(){
		$('h3', this).css('display', 'block');
		$('h3', this).css('padding-right', '20px');
		$('h3', this).animate({paddingRight:'10px',},200, 'swing');
	}, function(){
		$('h3', this).css('display', 'none');
		$('h3', this).css('padding-right', '10px');
	});
	//------------------------------------------
	
	//Navigation animation----------------------
	$(window).scroll(function() {
		if (($(document).scrollTop() > $("#photography").position().top - 300) && 
		   ($(document).scrollTop() < $("#traditionalArt").position().top - 300)) {
			$("#photographyNav").addClass("current");
			$("#graphicDesignNav").removeClass("current");
			$("#traditionalNav").removeClass("current");
		} else if (($(document).scrollTop() > $("#traditionalArt").position().top - 300)){
			$("#traditionalNav").addClass("current");
			$("#photographyNav").removeClass("current");
			$("#graphicDesignNav").removeClass("current");
		} else {
			$("#traditionalNav").removeClass("current");
			$("#photographyNav").removeClass("current");
			$("#graphicDesignNav").addClass("current");
		}
	});
		if (($(document).scrollTop() > $("#photography").position().top - 300) && 
		   ($(document).scrollTop() < $("#traditionalArt").position().top - 300)) {
			$("#photographyNav").addClass("current");
			$("#graphicDesignNav").removeClass("current");
			$("#traditionalNav").removeClass("current");
		} else if (($(document).scrollTop() > $("#traditionalArt").position().top - 300)){
			$("#traditionalNav").addClass("current");
			$("#photographyNav").removeClass("current");
			$("#graphicDesignNav").removeClass("current");
		} else {
			$("#traditionalNav").removeClass("current");
			$("#photographyNav").removeClass("current");
			$("#graphicDesignNav").addClass("current");
		}
	//------------------------------------
	
	
	//Smooth scrolling---------------------
	  $("a").on('click', function(event) {

		  if (this.hash !== "") {

			  event.preventDefault();

			  var hash = this.hash;

			  $('html, body').animate({
				  scrollTop: $(hash).offset().top
			  }, 500, function(){
   
				  window.location.hash = hash;
			  });
		  }
	  });
	//--------------------------------------
});