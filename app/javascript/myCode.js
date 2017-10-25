//////////////////////////
/////WELCOME page
/////////////////////////////////

$(window).on("load", function(){
  $(".welcome").addClass("noBlur");

   setTimeout(function(){
        $(".welcome").addClass("color");
        $(".rectangleRuttar, .rectangleWD ").removeClass("zeropx");
        setTimeout(function(){
          $(".rectangleRuttar, .rectangleWD").addClass("zeropx");
        }, 1300)
    }, 1500);

  setTimeout(function(){
      $(".downArrow").removeClass("fade");
      $(".downArrow").addClass("unfade");
  }, 3500);

  // setTimeout(function(){
  //   $(".rectangleArrow").removeClass("farLeft");
  //   setTimeout(function(){
  //     $(".rectangleArrow").addClass("smallBall");
  //     setTimeout(function(){
  //       // $(".rectangleArrow").removeClass("small");
  //       $(".rectangleArrow").addClass("ball");
  //       setTimeout(function(){
  //         $(".rectangleArrow").addClass("fade");
  //         $(".downArrow").removeClass("fade");
  //         $(".downArrow").addClass("unfade");
  //
  //       }, 500)
  //     }, 700)
  //   }, 300)
  // }, 3500);

  setTimeout(function(){
    $(".rectangleMenu").removeClass("farRight");
 }, 3200);

  setTimeout(function(){
    $(".logo, .webDesigner, .arrowDown").removeClass("hide");
  }, 3100)

  setTimeout(function(){
    $("#menuLines").removeClass("hide");
  }, 4500)

})

$(document).ready(function(){
	$('#menuLines').click(function(){
    toggleClass();
	});
});

function toggleClass(){
  $(".menu").toggleClass("show");
  $(".headerItem li").toggleClass("widthAuto");
  $("#menuLines").toggleClass('open');
}

$(document).ready(function(){
	$('#webDesign').click(function(){
    toggleWebDesign();
	});
});

$('#cross').click(function(){
  toggleWebDesign();
});


function toggleWebDesign(){

  $(".webDesignPage").toggleClass("show");
  $("#cross").toggleClass("hide");
  $("header").toggleClass("hide");

  setTimeout(function(){
    $(".coverTitle").addClass("coverTitleFull")
    setTimeout(function(){
      $(".coverTitle").removeClass("coverTitleFull")
      $(".webDesignPage .title span").toggleClass("unfade");

    },800)

  },800)
  setTimeout(function(){
    $(".title span").removeClass("unfade");
  }, 2600)

  $(".webDesignPage .title").toggleClass("widthAuto");

}

$(".nav a, nav a").on("click", function(e){        //1
    toggleClass();
    e.preventDefault();
    var id = $(this).attr("href");
    console.log(id)               //2

    $(".nav a, nav a").removeClass("selected");
    $(this).addClass("selected");
    $("#contact").removeClass("selected");

    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    $("html, body").animate({                       //4
        scrollTop : position - (coverHeight/2+100)
    }, {
        duration : 2000,
        queue : false
    })
});

$(".downArrow").on("click", function(){        //1
    var id = "#about";                  //2
    $("#aboutMenu").addClass("selected");
    $("body").removeClass("overFlowHidden")

    var position = $(id).offset().top;              //3
    var coverHeight = $(id).prev().height()

    $("html, body").animate({                       //4
        scrollTop : position - (coverHeight/2+50)
    }, {
        duration : 2000,
        queue : false
    })
});

$( ".underAbout" ).on("click", function() {
    $(this).find(".comment").toggleClass( "show" );
    $(this).find(".commentSpan").toggleClass( "showPadding" );
  }
);

////selection du menu pendant le scroll
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    var limit = scrollTop + $(window).height();
    //
    // console.log("$(window).scrollTop()",$(window).scrollTop())
    // console.log("$(window).height()",$(window).height())

    if ($(window).scrollTop() > $(window).height()) {
      console.log($(window).scrollTop())
        $("header").addClass("headerGreen")
        $(".headerLogo span").addClass("showLogo")
        $(".welcomeLeft").addClass("small")
        $("body").removeClass("overFlowHidden")
    }
    else{
        $("header").removeClass("headerGreen")
        $(".headerLogo span").removeClass("showLogo")
    }


    // var pos = $(".printerTwo").css({width: randomValueRed});

    var pos = $(".printerTwo").width();
    var windowWidth = $(window ).width();
    if(pos == windowWidth){
      setTimeout(function(){
        $(".printerTwo").css({width: 0})
        $(".printerTwo").css({opacity: 0})
        $(".printerOne").css({width: windowWidth})
        $(".printerOne").css({opacity: 1})
        // $(".printerOne").addClass("hide")
        // $(".printerOne").css({width: windowWidth})

        // setTimeout(function(){
        //   $(".printerOne").css({width: windowWidth})
        //   $(".printerOne").removeClass("hide")
        //
        // }, 200)
      }, 200)

    }
    else{
      setTimeout(function(){
          $(".printerTwo").css({opacity: 1})
        $(".printerTwo").css({width: windowWidth})
        $(".printerOne").css({width: 0})
        $(".printerOne").css({opacity: 0})
        // $(".printerTwo").addClass("hide")
        //
        // // $(".printerOne").css({width: windowWidth})
        //
        // setTimeout(function(){
        //   $(".printerTwo").css({width: windowWidth})
        //   $(".printerTwo").removeClass("hide")
        //
        // },200)
      }, 200)


    }



    var windowWidht = $(window ).width()/3;

    if(scrollTop > 2780 && scrollTop <5000){

      $(".fullscreen-bg").removeClass("hide")
    }
    else{
      $(".fullscreen-bg").addClass("hide")
    }

    var randomValueGreen = Math.floor(Math.random() * windowWidht);

    var randomValueblack = Math.floor(Math.random() * windowWidht);
    var randomValueblack2 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));
    var randomValueblack3 = Math.floor(windowWidht + (Math.random() * windowWidht));

    var randomValueBrown = Math.floor(Math.random() * windowWidht);
    var randomValueBrown2 = Math.floor(Math.random() * windowWidht);
    var randomValueBrown3 = Math.floor(windowWidht + (Math.random() * windowWidht));
    var randomValueBrown4 = Math.floor(windowWidht + (Math.random() * windowWidht));
    var randomValueBrown5 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));
    var randomValueBrown6 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));

    var randomValueRed = Math.floor(Math.random() * windowWidht);
    var randomValueRed2 = Math.floor(windowWidht + (Math.random() * windowWidht));
    var randomValueRed3 = Math.floor(windowWidht*2 + (Math.random() * windowWidht));

    $(".red").css({left: randomValueRed});
    $(".red2").css({left: randomValueRed2});
    $(".red3").css({left: randomValueRed3});

    $(".green").css({left: randomValueGreen});

    $(".black").css({left: randomValueblack});
    $(".black2").css({left: randomValueblack2});
    $(".black3").css({left: randomValueblack3});

    $(".brun").css({left: randomValueBrown});
    $(".brun2").css({left: randomValueBrown2});
    $(".brun3").css({left: randomValueBrown3});
    $(".brun4").css({left: randomValueBrown4});
    $(".brun5").css({left: randomValueBrown5});
    $(".brun6").css({left: randomValueBrown6});
})
    // var $selectedArticle;
    //
    // if (scrollTop < 100) {
    //     $selectedArticle = "#about"
    // }
    //
    // $("article").each(function(){
    // 	var positionArticleParcouru = $(this).offset().top;
    //     if (positionArticleParcouru > limit) {
    //         return false;
    //     }
    //     $selectedArticle = $(this);
    //     console.log($selectedArticle);
    // });
    // // if(limit <= $(window).height() - 100)
    // var id = $selectedArticle.attr("id");
    // $("a").removeClass("selected");
    // $("#" + id).addClass("selected");


$("#contact").on("click", function(){
    $("#contactForm").addClass("show")
    $(".nav a, nav a").removeClass("selected");
    $("#contact").addClass("selected");
    console.log("click")
})

$("#cross").on("click", function(){
    $("#contactForm").removeClass("show")
    $("#contact").removeClass("selected");
})


//1.je veux cliquer sur un des liens du menu en haut
//2.je veux retrouver l'identifiant de la section qui correspond au lien que j'ai cliqué
//3.je veux récupérer la position de la section sélectionnée
//4.je veux scroller sur cette position


// $(".nav a, nav a").on("click", function(e){        //1
//     e.preventDefault();
//     var id = $(this).attr("href");                  //2
//
//     // $(".nav a, nav a").removeClass("selected");
//     // $(this).addClass("selected");
//
//     var position = $(id).offset().top;              //3
//     var coverHeight = $(id).prev().height()
//
//     $("html, body").animate({                       //4
//         scrollTop : position - (coverHeight/2+100)
//     }, {
//         duration : 2000,
//         queue : false
//     })
// });

//selection du menu pendant le scroll
/*$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    var limit = scrollTop + $(window).height();

    var $selectedArticle;
    $("article").each(function(){
    	var positionArticleParcouru = $(this).offset().top;
        if (positionArticleParcouru > limit) {
            return false;
        }
        $selectedArticle = $(this);
        console.log($selectedArticle);
    });

    var id = $selectedArticle.attr("id");
    $("a").removeClass("selected");
    $("a[href=#" + id + "]").addClass("selected");
})*/


//navigation du menu
// $("#triggerMenu").on("click", function(){
//     $("nav").toggleClass("open");
// })
//
// $("#start").on("click", function(){
//     $("#welcomePage").removeClass("absolute");
//     $("#welcomePage").addClass("relative");
//     $("header").addClass("topZero");
//     $("header").addClass("fixed")
//     $("#welcomeRight").addClass("farRight");
//     $("#welcomeLeft").addClass("farLeft");
//     $("#start").addClass("hide");
//     $("#home").addClass("home");
//     //$("#firstSection").addClass("fullWidth");
//     $("#welcomeCenter").removeClass("topMargin")
//     $("body").removeClass("overFlowHidden")
//     setTimeout(function(){
//      $("#welcomeRight").addClass("hide");
//      $("#welcomeLeft").addClass("hide");
//     }, 1000);
// })
//
// $("a").on("click", function(){
//     $("#welcomeLeft").addClass("hide");
//     $("#welcomeRight").addClass("hide");
//
// })
//
// $("#contact").on("click", function(){
//     $("#contactForm").addClass("show")
//     console.log("click")
// })
//
// $("#cross").on("click", function(){
//     $("#contactForm").removeClass("show")
// })
//
// function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('#contactForm'), {
//           zoom: 16,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }

				// // The latitude and longitude of your business / place
				// var position = [27.1959739, 78.02423269999997];
        //
				// function showGoogleMaps() {
        //
				//     var latLng = new google.maps.LatLng(position[0], position[1]);
        //
				//     var mapOptions = {
				//         zoom: 16, // initialize zoom level - the max value is 21
				//         streetViewControl: false, // hide the yellow Street View pegman
				//         scaleControl: true, // allow users to zoom the Google Map
				//         mapTypeId: google.maps.MapTypeId.ROADMAP,
				//         center: latLng
				//     };
        //
				//     map = new google.maps.Map(document.getElementById('googlemaps'),
				//         mapOptions);
        //
				//     // Show the default red marker at the location
				//     marker = new google.maps.Marker({
				//         position: latLng,
				//         map: map,
				//         draggable: false,
				//         animation: google.maps.Animation.DROP
				//     });
				// }
        //
				// google.maps.event.addDomListener("#contactForm", 'load', showGoogleMaps);
