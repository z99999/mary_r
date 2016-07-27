$(document).ready(function() {
    var image = $(".image");
    var frame = $(".frame");
    var painting = $(".painting");
    var hole;
    var count=0;
    
    frame.click(function(event){
        var offset = $(this).next().offset();
        var x= event.pageX - offset.left;
        var y= event.pageY - offset.top;
        count++;
        if(count===1) {
            hole = $("<img>").attr("src", "../images/hole1.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y, zIndex:"3"});
            hole.insertBefore(frame);
        } else if (count===2) {
            hole = $("<img>").attr("src", "../images/hole2.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===3) {
            hole = $("<img>").attr("src", "../images/hole6.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===4) {
            hole = $("<img>").attr("src", "../images/hole4.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===5) {
            hole = $("<img>").attr("src", "../images/hole5.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===6) {
            hole = $("<img>").attr("src", "../images/hole3.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
        } else if (count===7) {
            hole = $("<img>").attr("src", "../images/hole7.png").addClass("hole");
            hole.css({position:"absolute", left:x, top:y});
            hole.insertBefore(frame);
            frame.off();
            var holes = $(".hole");
            var done = $("<img>").attr("src", "../images/venus_after.jpg").addClass("done").css("opacity", "0");
            done.insertBefore(frame);
            holes.delay(600).fadeTo(600, 0);
            image.delay(600).fadeTo(600, 0); 
            done.delay(600).fadeTo(600, 1);
        };
    });
    
});