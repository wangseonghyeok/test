AOS.init();
const toolTips = ["H", "About", "Project", "Connect"];
const owl_stage = document.querySelector(".owl-stage");

function stage() {
  owl_stage.classList.add("on");
}
const mainSlider = new Swiper("#main", {
  direction: "vertical",
  speed: 1000,
  parallax: true,
  mousewheel: true,
  pagination: {
    el: ".wrap .location ",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><span class="tooltip">${toolTips[index]}</span></span>`;
    },
  },
  on: {
    slideChange: function (swiper) {
      classChange();
      setTimeout(stage, 1000);
      console.log(swiper.activeIndex);
      $(".activePage").text(swiper.activeIndex + 1);
    },
  },
});
const owl = $(".owl-carousel");
const slide_hero = $(".slide_hero");
function classChange() {
  if (mainSlider.realIndex === 1) {
    $(".txtFirst").addClass("on");
    $(".txtSeond").addClass("on");
  } else if (mainSlider.realIndex === 2) {
    /* 슬라이드 */
    slide_hero.owlCarousel({
      items: 3,
      loop: true,
      nav: true,

      center: true,
      callbacks: true,
      autoplay: true,
      autoplayTimeout: 95200,
      autoplayHoverPause: false,
      // onInitialized: inithero,
    });
    // slide_hero.on("changed.owl.carousel", function (e) {
    //   if (!$(".cmh_btn").hasClass("stop")) {
    //     slide_hero.trigger("stop.owl.autoplay");
    //     slide_hero.trigger("play.owl.autoplay");
    //   } else {
    //     slide_hero.trigger("stop.owl.autoplay");
    //   }
    // });
  }
  //  else if (mainswiper.realIndex === 2) {
  //   /* 슬라이드 */
  //   slide_hero.owlCarousel({
  //     items: 3,
  //     loop: true,
  //     nav: true,
  //     center: true,
  //     callbacks: true,
  //     autoplay: false,
  //     autoplayTimeout: 9000,
  //     autoplayHoverPause: false,
  //     // onInitialized: inithero,
  //   });
  // }
}

$(".owl-next").click(() => owl.trigger("next.owl.carousel"));
$(".owl-prev").click(() => owl.trigger("prev.owl.carousel"));
$(document).ready(function () {
  emailjs.init("ey2oCxL9xayfxIcIW");

  $("#submit").click(function () {
    var templateParams = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };

    emailjs.send("gmail", "template_8tgp22r", templateParams).then(
      function (response) {
        alert("이메일 보내주셔서 감사합니다!");
        window.location.reload();
      },
      function (error) {
        alert("정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요!");
      }
    );
  });
});
