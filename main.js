// 2단계 메뉴 (전체 슬라이드)
$(function () {
  $('.depth1 > li').hover(
    function () {

      $('.bg').stop().slideDown(200);
      $('.depth2').stop().slideDown(200);
    },
    function () {
      $('.bg').stop().slideUp(200);
      $('.depth2').stop().slideUp(200);
    }
  );
})

$(function(){
  var img_num = 0; // 이미지 번호(0,1,2)

  // 초기화 (첫번째 이미지로 설정)
  $('.sliders > img').fadeOut();
  $('.sliders > img').eq(img_num).fadeIn();

  // 인터벌 재생(3초마다 이미지 바꾸기)
  var duration=3000; // 3초마다
  setInterval(function(){
    // 이미지번호 2이면 0으로 가고 아닐 땐 이미지번호 +1
    if(img_num>=2) { img_num=0} else {
      img_num=img_num+1;
    }
    $('.sliders > img').fadeOut();
    $('.sliders > img').eq(img_num).fadeIn();

    // pager UI 업데이트
    $('.pager > a').removeClass('active');
    $('.pager > a').eq(img_num).addClass('active');
  },duration)
})



// bx slider 플러그인

// $(document).ready(function () {

//   $('#main_banner').imagesLoaded(function () {
//     // images have loaded
//     $('.sliders').bxSlider({
//       mode: 'fade',
//       // 3초마다 전환
//       pause: 3000,
//       // 자동재생 (기본값 false | true:자동재생됨)
//       auto: true,
//       // 마우스 올라갔을 때 멈춤
//       autoHover: true,
//       // pager 없애기
//       pager: false
//       // pagerType: 'short'
//     });
//   });
// });