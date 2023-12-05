jQuery(function($) {
  // AOS.init({
  //   duration: 1200,
  // });
  // Sticky Navbar

  //if ($(window).width() < 1024){

  $(".navclk").click(function() {
      if ($(this).hasClass("active")) {
          // alert('111');
          //		 $(this).removeClass('active');
          //$(this).next(".sub_submenu").slideUp();
      } else {
          //$('.sub_submenu').slideUp();
          //$('.navclk').removeClass('active');
          // $(this).addClass('active');
          //$(this).next(".sub_submenu").slideDown();
      }

      // $(this).next('.sub_submenu').slideDown();
      //$(this).addClass('active');
  });
  // }

  $(window).scroll(function() {
      if ($(this).scrollTop() > 40) {
          $("#header").addClass("sticky-top");
      } else {
          $("#header").removeClass("sticky-top");
      }

      /*****/
      if ($(this).scrollTop() > 100) {
          $(".back-to-top").fadeIn("fast");
      } else {
          $(".back-to-top").fadeOut("fast");
      }
  });

  jQuery(".search_icon").click(function() {
      jQuery(".search_slide__bx").toggleClass("active");
      //alert('test1'); 
      jQuery(".search_slide__bx2").toggleClass("active");
      jQuery(".navbar-toggler").toggleClass("open");
      jQuery(".m-menu").toggleClass("open");
      jQuery("#navbarCollapse").toggleClass("show");
  });

  jQuery(".srchclose").click(function() {
      jQuery(".search_slide__bx").removeClass("active");
      //alert('test1'); 
      jQuery(".search_slide__bx2").removeClass("active");
      jQuery(".navbar-toggler").removeClass("open");
      jQuery(".m-menu").removeClass("open");
      jQuery("#navbarCollapse").removeClass("show");
  });

  // Back to top button

  $(".back-to-top").click(function() {
      $("html, body").animate({
              scrollTop: 0,
          },
          500
      );
      return false;
  });

  jQuery("#header__humburgericon").click(function() {
      jQuery(this).toggleClass("open");
      jQuery(".menu__burger").toggleClass("open");
      jQuery("#mobile_accordian").toggleClass("open");
      jQuery("body").toggleClass("ovrflw__hdn");
  });

  document.addEventListener("DOMContentLoaded", function() {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

      if ("IntersectionObserver" in window) {
          let lazyImageObserver = new IntersectionObserver(function(
              entries,
              observer
          ) {
              entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                      let lazyImage = entry.target;
                      lazyImage.src = lazyImage.dataset.src;
                      lazyImage.srcset = lazyImage.dataset.srcset;
                      lazyImage.classList.remove("lazy");
                      lazyImageObserver.unobserve(lazyImage);
                  }
              });
          });

          lazyImages.forEach(function(lazyImage) {
              lazyImageObserver.observe(lazyImage);
          });
      } else {
          // Possibly fall back to event handlers here
      }
  });

  jQuery("#cascade-slider").cascadeSlider({});

  jQuery("#tech_titans_slider").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],

  });



  $(".blog_list").slick({
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      arrows: true,
      focusOnSelect: true,
  });
  jQuery("#customers-testimonials").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });

  jQuery(".piller_area").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: false,
      autoplay: false,
      cssEase: "linear",
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });

  jQuery("#banner_sec").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      arrows: false,
      dots: true,
  });

  jQuery("#cascade-slider").cascadeSlider({});
  // AOS.init({
  //   duration: 1200,
  // });
  $(".blog_list").slick({
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      arrows: true,
      focusOnSelect: true,
  });
  jQuery("#customers-testimonials").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });

  // Watch More Link click handlers
  const $popup = $(".video-popup");
  const $modal = $("#modal");
  const $closeIcon = $(".close");
  const $watchMoreLink = $(".watch-more");

  $watchMoreLink.click(function(e) {
      $popup.fadeIn(200);
      $modal.fadeIn(200);
      e.preventDefault();
  });
  $closeIcon.click(function() {
      $popup.fadeOut(200);
      $modal.fadeOut(200);
  });
  // for escape key
  $(document).on("keyup", function(e) {
      if (e.key === "Escape") {
          $popup.fadeOut(200);
          $modal.fadeOut(200);
      }
  });
  // click outside of the popup, close it
  $modal.on("click", function(e) {
      $popup.fadeOut(200);
      $modal.fadeOut(200);
  });

  jQuery(".sol-slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });
  jQuery(".study-list").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: false,
      //cssEase: 'linear',
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      //vertical: true,
      //verticalSwiping: true,
      // useTransform: true,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  });
  jQuery(".brands-list").slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: true,
      padding: 15,
      autoplay: false,
      cssEase: "linear",
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 8,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              },
          },
      ],
  });

  jQuery("#tabs-slider").slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      padding: 15,
      autoplay: false,
      cssEase: "linear",
      draggable: false,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
              },
          },
      ],
  });

  jQuery(".cyber-brands-list").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      padding: 15,
      autoplay: false,
      cssEase: "linear",
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
      ],
  });
  if (window.matchMedia("(max-width: 767px)").matches) {
      jQuery(".investors-tab").slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          padding: 10,
          margin: 20,
          autoplay: false,
          cssEase: "linear",
          draggable: true,
          autoplaySpeed: 10000,
          speed: 600,
          responsive: [{
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 3,
                      padding: 10,
                  },
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 2,
                  },
              },
          ],
      });
  }

  jQuery(".testimonial-slider").slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      cssEase: "linear",
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1023,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
              },
          },
          {
              breakpoint: 767,
              settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });

  // expert-service-slider

  jQuery(".expert-slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      padding: 15,
      autoplay: false,
      cssEase: "linear",
      draggable: true,
      autoplaySpeed: 10000,
      speed: 600,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
  });
  // On before slide change
  $(".expert-slider")
      .on("afterChange", function(event, slick, currentSlide, nextSlide) {
          $(".slick-slide").removeClass("slick-active-center");
          $(".slick-active").eq(1).addClass("slick-active-center");
      })
      .trigger("afterChange");

  // new-swipper

  new Swiper(".journey-section .swiper-container", {
      slidesPerView: 7,
      speed: 500,
      grabCursor: true,
      // centeredSlides: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      breakpoints: {
          767: {
              slidesPerView: 3,
          },
          991: {
              slidesPerView: 4,
          },
          1200: {
              slidesPerView: 3,
          },
          1440: {
              slidesPerView: 5,
          },
      },
  });

  // .c-3d-carousel__item

  $(document).ready(function() {
      $(".c-3d-carousel__item").on("click", function() {
          $(this).prop("class", "c-3d-carousel__item c-3d-carousel__item-active");
          let activeSlide = $(this).data("slide");
          $(this)
              .siblings()
              .each(function() {
                  let slideNumber = $(this).data("slide");

                  if (slideNumber <= activeSlide) {
                      $(this).attr(
                          "class",
                          "c-3d-carousel__item c-3d-carousel__item-before c-3d-carousel__item-before--" +
                          (activeSlide - slideNumber)
                      );
                  } else {
                      $(this).prop(
                          "class",
                          "c-3d-carousel__item c-3d-carousel__item-after c-3d-carousel__item-after--" +
                          (slideNumber - activeSlide)
                      );
                  }
              });
      });

      $(".next").on("click", function(i) {
          $(".c-3d-carousel__item-active").next().click();
      });

      $(".prev").on("click", function(i) {
          $(".c-3d-carousel__item-active").prev().click();
      });
  });

  $(".modal").on("show.bs.modal", function() {
      setTimeout(function() {
          var swiper = new Swiper(".memberSlider", {
              slidesPerView: 1,
              // autoHeight: true,
              observer: true,
              observeParents: true,
              nextButton: ".swiper-button-next",
              prevButton: ".swiper-button-prev",
          });
      }, 5);
  });

  var swiper = new Swiper(".swiper-container.two", {
      // pagination: '.swiper-pagination',
      // paginationClickable: true,
      // navigationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      effect: "coverflow",
      loop: false,
      centeredSlides: true,
      initialSlide: 3,
      slidesPerView: "auto",
      coverflow: {
          rotate: 0,
          stretch: 150,
          depth: 250,
          modifier: 1,
          slideShadows: false,
      },
      breakpoints: {
          767: {
              slidesPerView: 1,
              coverflow: {
                  rotate: 0,
                  stretch: 150,
                  depth: 400,
                  modifier: 1,
              },
          },
          991: {
              slidesPerView: 1,
              coverflow: {
                  rotate: 0,
                  stretch: 400,
                  depth: 600,
                  modifier: 1,
              },
          },
      },
  });

  $(".sub-sol").hover(function() {
      $(".sub-sol").removeClass("active");
      $(this).addClass("active");
  });
});

function videoId(button) {
  var $videoUrl = button.attr("data-video");
  if ($videoUrl !== undefined) {
      var $videoUrl = $videoUrl.toString();
      var srcVideo;

      if ($videoUrl.indexOf("youtube") !== -1) {
          var et = $videoUrl.lastIndexOf("&");
          if (et !== -1) {
              $videoUrl = $videoUrl.substring(0, et);
          }
          var embed = $videoUrl.indexOf("embed");
          if (embed !== -1) {
              $videoUrl =
                  "https://www.youtube.com/watch?v=" +
                  $videoUrl.substring(embed + 6, embed + 17);
          }

          srcVideo =
              "https://www.youtube.com/embed/" +
              $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
              "?autoplay=1&mute=1&loop=1&playlist=" +
              $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
              "";
      } else if ($videoUrl.indexOf("youtu") !== -1) {
          var et = $videoUrl.lastIndexOf("&");
          if (et !== -1) {
              $videoUrl = $videoUrl.substring(0, et);
          }
          var embed = $videoUrl.indexOf("embed");
          if (embed !== -1) {
              $videoUrl =
                  "https://youtu.be/" + $videoUrl.substring(embed + 6, embed + 17);
          }

          srcVideo =
              "https://www.youtube.com/embed/" +
              $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
              "?autoplay=1&mute=1&loop=1&playlist=" +
              $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
              "";
      } else if ($videoUrl.indexOf("vimeo") !== -1) {
          srcVideo =
              "https://player.vimeo.com/video/" +
              $videoUrl
              .substring($videoUrl.indexOf(".com") + 5, $videoUrl.length)
              .replace("/", "") +
              "?autoplay=1";
      } else if ($videoUrl.indexOf("mp4") !== -1) {
          return (
              '<video controls loop playsinline autoplay><source src="' +
              $videoUrl +
              '" type="video/mp4"></video>'
          );
      } else if ($videoUrl.indexOf("m4v") !== -1) {
          return (
              '<video controls loop playsinline autoplay><source src="' +
              $videoUrl +
              '" type="video/mp4"></video>'
          );
      } else {
          alert(
              "The video assigned is not from Youtube, Vimeo or MP4, remember to enter the correct complete video link .\n - Youtube: https://www.youtube.com/watch?v=43ngkc2Ejgw\n - Vimeo: https://vimeo.com/111939668\n - MP4 https://server.com/file.mp4"
          );
          return false;
      }
      return (
          '<iframe src="' +
          srcVideo +
          '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      );
  } else {
      alert("No video assigned.");
      return false;
  }
}

document
  .querySelectorAll(".playVideo")
  .forEach((d) => d.addEventListener("click", playVideos));

function playVideos(e) {
  e.preventDefault();
  var $theVideo = videoId($(this));

  var appendVideo = document.createElement("div");

  if ($theVideo) {
      appendVideo.innerHTML +=
          '<div class="active video-modal-wrapp" id="video-wrap"><span onclick="lvideoClose();" class="video-overlay"></span><div class="video-container">' +
          $theVideo +
          '</div><button onclick="lvideoClose();" class="close-video">x</button></div>';

      document.body.appendChild(appendVideo);
  }
}

const lvideoClose = () => {
  const boxes = document.querySelectorAll(".video-modal-wrapp, .video-overlay");

  boxes.forEach((box) => {
      box.remove();
  });
};

var $carousel = $(".sol-new-slider");

var settings = {
  dots: false,
  arrows: true,
  slide: ".slick-slideshow__slide",
  slidesToShow: 2,
  centerMode: true,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
          },
      },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ],
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find(
      '.slick-slideshow__slide[aria-hidden="false"]'
  );
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
      $(this).css("opacity", 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css("opacity", 1);
}

$carousel.slick(settings);
$carousel.slick("slickGoTo", 1);
setSlideVisibility();

$carousel.on("afterChange", function() {
  setSlideVisibility();
});

new Swiper(".award_slide", {
  slidesPerView: 6,
  speed: 500,
  observer: true,
  observeParents: true,
  spaceBetween: 0,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
      480: {
          slidesPerView: 2,
      },
      767: {
          slidesPerView: 3,
      },
      1023: {
          slidesPerView: 3,
      },
      1200: {
          slidesPerView: 4,
      },
      1920: {
          slidesPerView: 5,
      },
  },
});

$(".nav-tabs .nav-link").on("click", function() {

  $(".nav-tabs .nav-link").removeClass("active");
  $(this).addClass("active");
  $(".nav-tabs").scrollCenter(".active", 300);
});

$(".nav-tabs2 .nav-link").on("click", function() {

  $(".nav-tabs2 .nav-link").removeClass("active");
  $(this).addClass("active");
  $(".nav-tabs2").scrollCenter(".active", 300);
});

jQuery.fn.scrollCenter = function(elem, speed) {
  var active = jQuery(this).find(elem); // find the active element
  var activeWidth = active.width() / 2; // get active width center

  var pos = active.position().left + activeWidth; //get left position of active li + center position
  var currentscroll = jQuery(this).scrollLeft(); // get current scroll position
  var divwidth = jQuery(this).width(); //get div width
  //var divwidth = jQuery(elem).width(); //get div width
  pos = pos + currentscroll - divwidth / 2; // for center position if you want adjust then change this

  jQuery(this).animate({
          scrollLeft: pos,
      },
      speed == undefined ? 1000 : speed
  );
  return this;
};

jQuery.fn.scrollleft = function(elem, speed) {
  jQuery(this).animate({
          scrollLeft: jQuery(this).scrollLeft() -
              jQuery(this).offset().left +
              jQuery(elem).offset().left,
      },
      speed == undefined ? 1000 : speed
  );
  return this;
};

$(function() {
  $(document).on("click", ".tab-links", function() {
      var tabContent = $(this).data("tab-id");
      $(this).parents(".tab-parent").find(".tab-links").removeClass("show");
      $(this).addClass("show");
      $(this).parents(".tab-parent").find(".tabcontent").removeClass("active");
      // $("." + tabContent).addClass("active");
      $(this)
          .parents(".tab-parent")
          .find("." + tabContent)
          .addClass("active");
  });
});

$(function() {
  $(".menu-item-has-children").on("click", function() {

      $(this).parents("#header").find(".mega-menus").removeClass("show");
      $(this).find(".mega-menus").addClass("show");


      //if ($(this).hasClass("menu-item-has-children")) {
      //  $(".mega-menus").removeClass("show");
      // }

  });

  $(".sub-menu-parent").on("click", function() {

      if ($(this).hasClass("menu-item-has-children")) {
          $(".mega-menus").removeClass("show");
      } else {
          $(this).parents("#header").find(".mega-menus").removeClass("show");
          $(this).find(".mega-menus").addClass("show");

      }


  });

  $(document).on("click", ".menu-closeBtn", function() {
      $(".mega-menus").removeClass("show");
  });

  $(document).on("click", function(event) {
      var className = event.target.className;
      className = className.split(" ");
      if (className.includes("navclk")) {
          return;
      }
      if ($(event.target).parents(".mega-menus").length) return;

      $(".mega-menus").removeClass("show");
  });
});

$(function() {
  $(document).on("click", ".custom-links", function() {
      var tabContent = $(this).data("tab-id");
      $(this).parents(".new-tabs").find(".custom-links").removeClass("show");
      $(this).addClass("show");
      $(this).parents(".new-tabs").find(".tabcontent").removeClass("active");
      // $("." + tabContent).addClass("active");
      $(this)
          .parents(".new-tabs")
          .find("." + tabContent)
          .addClass("active");
  });
});

// brands-partners
function opentabs(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("show");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }
  document.getElementsByClassName(tabName)[0].classList.add("show");
  document.getElementsByClassName(tabName)[1].classList.add("show");
  var cuttentTabClass = evt.currentTarget.className.split(" ")[1];

  document.getElementsByClassName(cuttentTabClass)[0].classList.add("active");
  document.getElementsByClassName(cuttentTabClass)[1].classList.add("active");
}

// Get the element with id="defaultOpen" and click on it
if (document.getElementById("defaultOpen")) {
  document.getElementById("defaultOpen").click();
}

/* Swiper
**************************************************************/
var swiper = Swiper;
var init = false;

/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
  let tablet = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");
  let desktop = window.matchMedia("(min-width: 1025px)");

  // Enable (for mobile)
  if (mobile.matches) {
      if (!init) {
          init = true;
          swiper = new Swiper(".recognize_slider", {
              slidesPerView: 1,
              spaceBetween: 20,
              observer: true,
              observeParents: true,
              nextButton: ".swiper-button-next",
              prevButton: ".swiper-button-prev",
          });
      }
  }

  // Disable (for tablet)
  else if (tablet.matches) {
      swiper.destroy();
      init = false;
  }

  // Disable (for desktop)
  else if (desktop.matches) {
      swiper.destroy();
      init = false;

  }
}

/* On Load
**************************************************************/
window.addEventListener("load", function() {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener("resize", function() {
  swiperMode();
});
// brand partners end

// financial-slider
var swiper = new Swiper(".financial3D-slider", {
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  effect: "coverflow",
  loop: false,
  centeredSlides: true,
  initialSlide: 4,
  observer: true,
  observeParents: true,
  slidesPerView: "auto",
  coverflow: {
      rotate: 0,
      stretch: 150,
      depth: 250,
      modifier: 1,
      slideShadows: false,
  },
  breakpoints: {
      767: {
          slidesPerView: 1,
          coverflow: {
              rotate: 0,
              stretch: 150,
              depth: 400,
              modifier: 1,
          },
      },
      991: {
          slidesPerView: 1,
          coverflow: {
              rotate: 0,
              stretch: 400,
              depth: 600,
              modifier: 1,
          },
      },
  },
});

new Swiper(".cAbout_slider", {
  slidesPerView: 5,
  speed: 500,
  spaceBetween: 30,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
      767: {
          slidesPerView: 1,
      },
      1200: {
          slidesPerView: 3,
      },
  },
});

new Swiper(".peopleRed_slider", {
  slidesPerView: 2,
  speed: 500,
  spaceBetween: 30,
  // centeredSlides: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
      767: {
          slidesPerView: 2,
      },
  },
});

$(function() {
  AOS.init({
      duration: 1200,
  });
});

//set this for custom data------
// var items = $("#content div.pageNub");

// var numItems = items.length;
// var perPage = 9;

// // Only show the first 2 (or first `per_page`) items initially.
// items.slice(perPage).hide();

// // Now setup the pagination using the `#pagination` div.
// $(".pagination-vip").pagination({
//   items: numItems,
//   itemsOnPage: perPage,
//   // change css style with any class------
//   cssStyle: "custom-theme",

//   // This is the actual page changing functionality.
//   onPageClick: function (pageNumber) {
//     // We need to show and hide `tr`s appropriately.
//     var showFrom = perPage * (pageNumber - 1);
//     var showTo = showFrom + perPage;

//     // We'll first hide everything...
//     items
//       .hide()
//       // ... and then only show the appropriate rows.
//       .slice(showFrom, showTo)
//       .show();
//   },
// });

new Swiper(".brand_slider", {
  slidesPerView: 5,
  speed: 500,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
      480: {
          slidesPerView: 1,
      },
      767: {
          slidesPerView: 2,
      },
      1200: {
          slidesPerView: 4,
      },
  },
});
new Swiper(".newsletter_slider", {
  slidesPerView: 3,
  spaceBetween: 60,
  centeredSlides: false,
  loop: true,
  observer: true,
  observeParents: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
      767: {
          slidesPerView: 1,
          autoHeight: true,
      },
      1200: {
          slidesPerView: 3,
      },
  },
});

// mobile-header

$(document).ready(function() {
  $("#mobile_accordian a").click(function() {
      var link = $(this);
      var closest_ul = link.closest("ul");
      var parallel_active_links = closest_ul.find(".active");
      var closest_li = link.closest("li");
      var link_status = closest_li.hasClass("active");
      var count = 0;

      closest_ul.find("ul").slideUp(function() {
          if (++count == closest_ul.find("ul").length)
              parallel_active_links.removeClass("active");
      });

      if (!link_status) {
          closest_li.children("ul").slideDown();
          closest_li.addClass("active");
      }
  });
});

$(function() {
  $(document).on("click", ".hover-text", function(event) {
      event.stopPropagation();
      $(".shape-closeBtn").trigger("click");
  });
  $(document).on("click", ".service-flex-field", function() {
      if (window.matchMedia("(max-width: 992px)").matches) {
          $(".shape-closeBtn").addClass("show");
          $(".hover-text").removeClass("show");
          $(this).find(".hover-text").addClass("show");
      }
  });

  $(document).on("click", ".shape-closeBtn", function() {
      $(this).removeClass("show");
      $(".hover-text").removeClass("show");
  });
});

// contact us country data
$(document).ready(function() {
  $('#resetcontact').on('click', function() {
      location.reload();
  });
});


$(document).ready(function() {
  $(".bsness_clk").on("click", function() {
      //alert('test');
      $(this).toggleClass("active");
      $(".enquiry_form").removeClass("active");
      $(".business_form").toggleClass("active");
      $(".sticky__frm__bx").toggleClass("slde");
      $(".frmfxddv").toggleClass("active")
      $(".enquiry_clk").removeClass("active");
  });

  $(".closebtn_pop").on("click", function() {
      //alert('test');
      $(".frm_clk").removeClass("active");
      $(".business_form").removeClass("active");
      $(".enquiry_form").removeClass("active");
      $(".sticky__frm__bx").removeClass("slde");
      $(".frmfxddv").removeClass("active")
  });
  $(".enquiry_clk").on("click", function() {
      //alert('test');
      $(this).toggleClass("active");
      $(".bsness_clk").removeClass("active");
      $(".business_form").removeClass("active");
      $(".enquiry_form").toggleClass("active");
      $(".sticky__frm__bx").toggleClass("slde");
      $(".frmfxddv").toggleClass("active")
  });

  $(".viewmore_clk_sharehldr").on("click", function() {
      //alert('test');
      $(this).fadeOut();
      $(".sharehldr_more").slideDown();

  });
  $(".viewless_clk_sharehldr").on("click", function() {
      //alert('test');
      $('.viewmore_clk_sharehldr').fadeIn();
      $(".sharehldr_more").SlideUp("active");
  });


  $('.mbl_archv_clk__toggle').click(function() {
      $(this).toggleClass('active');
      $('.fxdmbl_archv').toggleClass('open');

  });

  $(window).scroll(function() {
      //if ($(this).scrollTop() >= $('.media-section-main').offset().top) {
      //   $('.fxdmbl_archv').addClass("show");
      // }else {
      //  $('.fxdmbl_archv').removeClass("show");
      // }
  });

});