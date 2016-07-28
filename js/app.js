$(document).ready(function() {
    
    //add cuts on click at the image
    
    var image = $(".image");
    var frame = $(".frame");
    var painting = $(".painting");
    var hole;
    var count=0;
    var info = $("#info")
    
    frame.click(function(event){
        var offset = $(this).next().offset();
        var x= event.pageX - offset.left;
        var y= event.pageY - offset.top;
        count++;
        
//        if (count<7){
//            for (i=1; i<7; i++) {
//                hole = $("<img>").attr("src", "../images/hole1.png").addClass("hole");
//                hole.css({position:"absolute", left:x, top:y});
//                hole.insertBefore(frame);
//            }
//        } 
            
        if(count===1) {
            hole = $("<img>").attr("src", "../images/hole1.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===2) {
            hole = $("<img>").attr("src", "../images/hole3.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===3) {
            hole = $("<img>").attr("src", "../images/hole6.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===4) {
            hole = $("<img>").attr("src", "../images/hole2.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===5) {
            hole = $("<img>").attr("src", "../images/hole5.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===6) {
            hole = $("<img>").attr("src", "../images/hole4.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===7) {
            hole = $("<img>").attr("src", "../images/hole7.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
            frame.off();
            var holes = $(".hole");
            var done = $("<img>").attr("src", "../images/venus_after.jpg").addClass("done").css("opacity", "0");
//            var doneText=$("<div>learn more about the attack on Velazquez's painting</div>").addClass("done_text").css("opacity", "0");
            done.insertBefore(frame); //exchange the image with b&w photo
//            doneText.insertBefore(frame);
//            , function() {doneText.fadeTo(50,1)}
            holes.delay(400).fadeTo(600, 0);
            image.delay(400).fadeTo(600, 0); 
            done.delay(600).fadeTo(600, 1);
            $("html,body").delay(1300).animate({scrollTop: info.offset().top}, 1500); //after - go to the info section
        };
    });
    
    
    // show pictures on scroll
    
    var img1=$("#img1");
    var img3=$("#img3");
    var img2=$("#img2");
    var img4=$("#img4");
    
    $(document).on('scroll', function(){
        var positionY = $(this).scrollTop();
        console.log(positionY);
        if (positionY > 480) {
            img1.addClass("show");
        }
        if (positionY > 520) {
            img2.addClass("show");
        }
        if (positionY > 650) {
            img3.addClass("show");
        }
        if (positionY > 740) {
            img4.addClass("show");
            $(document).off('scroll');
        }
        
        
    });
    
    
});