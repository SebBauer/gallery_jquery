$(function(){
    
    $(".zdjecie img").on("mouseover", function(){
        const smallPicture = $(this).attr("src");
        //console.log(smallPicture);
        const bigPicture = smallPicture.replace("small", "big");
        //console.log(bigPicture);
        
        $("#popup img").attr("src", bigPicture);
        
        $("#popup").show(200);
    
    }).on("mouseout", function(){
        $("#popup").hide(200);    
    }).on("mousemove", function(e){
        $("#popup").css({
            width: 50 + "%",
            left: 15 + "%",
            right: 15 + "%",
            top: 50 + "%",
            transform: "translateY(-50%)"    
        });

        if($(window).width() > 1440){
            $("#popup").css({
                left: e.pageX + 20,
                top: e.pageY + 300,
            });
            
            if(e.pageX > $(window).width() / 2){
                $("#popup").css({
                    left: e.pageX - 720,                   
                });
            };
        };
    });
       
});