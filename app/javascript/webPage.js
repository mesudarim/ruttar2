$(document).ready(function(){
  setTimeout(function(){
    $(".coverTitle").addClass("coverTitleFull")
    setTimeout(function(){
      $(".coverTitle").removeClass("coverTitleFull")
      $(".webDesignPage .title span").toggleClass("unfade");
    },600)
  },800)

  // setTimeout(function(){
  //   $(".webDesignPage .title span").removeClass("unfade");
  // }, 5000)

  setTimeout(function(){
    $(".container").toggleClass("unfade");
    $("#cross").removeClass("fade")
  }, 3500)

  setTimeout(function(){
    $(".picWebSite").removeClass("windowUp");
    $(".picWebSite img").removeClass("invisible");
  }, 3800)

  $(".webDesignPage .title").toggleClass("widthAuto");
})

$('#cross').click(function(){
  window.location="index.html#services";
});

var clicked = false

$(".picWebSite").on("click", function(){
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



//
// $(window).on("load", function(){
//   console.log("window on load .....")
//   setTimeout(function(){
//     console.log("b4 coverTitle")
//     $(".coverTitle").addClass("coverTitleFull")
//     setTimeout(function(){
//       console.log("b4 coverTitleFull")
//       $(".coverTitle").removeClass("coverTitleFull")
//       $(".webDesignPage .title span").toggleClass("unfade");
//     },800)
//   },800)
  //
  // setTimeout(function(){
  //   $(".webDesignPage .title span").removeClass("unfade");
  // }, 3000)

  // setTimeout(function(){
  //   $(".inContainer").toggleClass("unfade");
  // }, 3500)

//
//   $(".webDesignPage .title").toggleClass("widthAuto");
// })
