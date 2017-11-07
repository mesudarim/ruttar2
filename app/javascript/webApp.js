$(document).ready(function(){
  setTimeout(function(){
    $(".coverTitle").addClass("coverTitleFull")
    setTimeout(function(){
      $(".coverTitle").removeClass("coverTitleFull")
      $("#webAppPage .title span").toggleClass("unfade");
    },600)
  },800)

  // setTimeout(function(){
  //   $(".webAppPage .title span").removeClass("unfade");
  // }, 3000)

  // setTimeout(function(){
  //   $(".inContainer").toggleClass("unfade");
  // }, 3500)

  setTimeout(function(){
    $(".container").toggleClass("unfade");
    $("#cross").removeClass("fade");
    $(".inUnderContainer").addClass("unfade")
    $("#webAppPage").addClass("whiteBackground")
  }, 3500)

  setTimeout(function(){
    $(".picWebApp").removeClass("centered");
    $(".picWebApp img").removeClass("invisible");
  }, 3800)

  $("#webAppPage .title").toggleClass("widthAuto");
})

$('#cross').click(function(){
  window.location="index.html#services";
});

var clicked = false

$(".picWebApp").on("click", function(){
  console.log(clicked)
  if (clicked == false){
    var text = $(this).data('text');
    clicked = true;
    typeWriter(text, 0);
  }
})

function typeWriter(text, n) {
  if (n < (text.length)) {
    $("#appText").html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n);
    }, 100);
  }
  else{
    clicked = false
  }
}
