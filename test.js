
 $(document).ready(function(){
        $(".zmf2").click(function(){
         if($(window).width() < 1200) {
       
            $("#zmf1, #zmf2, #zmf3, #zmf4, #zmf5, #zmf6, #zmf7, #zmf8").animate({
                width: "toggle"
            },575);
            
}
           $("#zmf1, #zmf2, #zmf3, #zmf4, #zmf5, #zmf6, #zmf7, #zmf8").css('position', 'fixed');
           $(".matter, .privacy, .main, .head, .subjects, #zmf1, .zmf, #zmf2, #zmf3, #zmf4, #zmf5, #zmf6, #zmf7, #zmf8, .zmf1, .zmf6, .zmf12, .sconj, .about1, .header1, .about2, .header2, .team, .contents, .feat, .about1, .about2, .header1, .header2, .team, .teamx, .teamz, .team2, .teamx2, .teamz2, .zed1, .zed2, .zed3, .read").toggleClass("sidebar");
 

        });
 });
$(document).ready(function(){
$("#zmf2, #zmf3, #zmf4, #zmf5, #zmf6, #zmf7, #zmf8").mouseenter(function() {
$(this).css('background-color', '#4FC3F7');
$(h3).css('color', '#37474F');
});
$(" #zmf1, #zmf2, #zmf3, #zmf4, #zmf5, #zmf6, #zmf7, #zmf8, #zmf8").mouseleave(function() {
$(this).css('background-color', '#37474F');
$(h3).css('color', '#4FC3F7');
});   
});

$(document).ready(function(){

$(window).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
$(".hh").removeClass("h");
    $(".hh").addClass("trans");

  } 
else {
  $(".hh").addClass("h");
    $(".hh").removeClass("trans");
}
});
});   

$(document).ready(function() {
  $(document).on("keydown", function(e) {
       if (e.keyCode == 40) { 
          var y = $(window).scrollTop(); $("html, body").animate({ scrollTop: y + $(window).height() + 100 }, 1000);
       }
       /*if (e.keyCode == 38) { 
          var y = $(window).scrollTop(); $("html, body").animate({ scrollTop: y - 500  }, 1000);
       }*/
  });
});