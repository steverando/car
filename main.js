$(document).ready(function(){
    
    $(document).keydown(function(e){
        switch(e.which)
        {
            case 37:
            $("div").animate({
                left:"-=20"
            });
            break;
            case 38:
            $("div").animate({
                top:"-=20"
            });
            break;
            case 39:
            $("div").animate({
                left:"+=20"
            });
            break;
            case 40:
            $("div").animate({
                top:"+=20"
            });
        }   
    })
});