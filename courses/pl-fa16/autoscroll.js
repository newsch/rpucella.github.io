
// SMOOTH AUTO SCROLL
//  cf  https://www.youtube.com/watch?v=b0tnynJtm18


(function () {

    var autoScroll = {};

    var scrollY = 0;
    var distance = 50;
    var speed = 1;
    var lastPos = -1;

    function within (x,y) {
       return (Math.abs(x-y) < distance);
    }
    
    function autoScrollTo(el,off){
	var scrollPos = window.pageYOffset;
	var targetPos = document.getElementById(el).offsetTop+off;
	
	if(scrollPos < targetPos){
            scrollDown(el,off);
	} else {
            scrollUp(el,off);
	}
    }
    
    function scrollDown(el,off){
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop+off;
	var animator = setTimeout ('autoScroll.scrollDown(\''+el+'\','+(off)+')', speed);

//	if (currentY < targetY && lastPos != currentY){
	if (!within(currentY,targetY) && lastPos !=currentY ) {
            
	    lastPos = currentY;
            scrollY = currentY+distance;
            window.scroll(0, scrollY);
            
	} else {
	    
	    lastPos = -1;
            clearTimeout(animator);
            window.scroll(0,targetY);
            
	}  
	
    }
    
    function scrollUp(el,off){
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop+off;
	var animator = setTimeout ('autoScroll.scrollUp(\''+el+'\','+(off)+')', speed);
	
//	if (currentY > targetY && lastPos != currentY){
	if (!within(currentY,targetY) && lastPos != currentY) {
            
	    lastPos = currentY;
            scrollY = currentY-distance;
            window.scroll(0, scrollY);
            
	} else {
	    lastPos = -1;
            clearTimeout(animator);
            window.scroll(0,targetY);
            
	}  
    }
    
    function back(el,off){
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop+off;
	var animator = setTimeout ('autoScroll.back(\''+el+'\','+(off)+')', speed);

//	if (currentY > targetY && lastPos != currentY){
	if (!within(currentY,targetY) && lastPos != currentY) {
            
	    lastPos = currentY;
            scrollY = currentY-distance;
            window.scroll(0, scrollY);
            
	} else {
	    
	    lastPos = -1;
            clearTimeout(animator);
            window.scroll(0,targetY);
            
	}  
    
    }

    autoScroll.autoScrollTo = autoScrollTo;
    autoScroll.back = back;
    autoScroll.scrollUp = scrollUp;
    autoScroll.scrollDown = scrollDown;

    this.autoScroll = autoScroll;

})()
