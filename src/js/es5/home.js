"use strict";

(function () {
  $(document).ready(function () {
    var mySwiper = new Swiper('#swiper1', {
      direction: 'horizontal',
      loop: true,
      autoplay: 1000,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  });
  var swiper = new Swiper('#swiper2', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    autoplay: 1000
  });
})();