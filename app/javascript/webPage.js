$(window).on("load", function(){
  console.log("window on load .....")
  setTimeout(function(){
    console.log("b4 coverTitle")
    $(".coverTitle").addClass("coverTitleFull")
    setTimeout(function(){
      console.log("b4 coverTitleFull")
      $(".coverTitle").removeClass("coverTitleFull")
      $(".webDesignPage .title span").toggleClass("unfade");
    },800)
  },800)

  setTimeout(function(){
    $(".webDesignPage .title span").removeClass("unfade");
  }, 3000)

  setTimeout(function(){
    $(".inContainer").toggleClass("unfade");
  }, 3500)


  $(".webDesignPage .title").toggleClass("widthAuto");
})

$('#cross').click(function(){
  backServices();
});

function backServices(){
  window.location="index.html#services";
}
