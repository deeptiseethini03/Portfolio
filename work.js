//  $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY>20){
//            $('.navbar').addClass("sticky"); 
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     });
// // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar.menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });
//  });

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); 
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");  // Fixed Selector
        $('.menu-btn i').toggleClass("active");
    });
});

