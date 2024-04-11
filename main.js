// javascript
// const button = document.querySelectorAll('.button');
// Array.prototype.forEach.call(button, (el) => {
//   const contents = el.nextElementSibling;
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     el.classList.toggle('open');
//     contents.classList.toggle('open');
//   });
// });


// jquery
// $(function(){
//     //クリックで動く
//     $('.nav-open').click(function(){
//         $(this).next('nav').slideToggle();
//     });
    
// });

$(function(){
    // $('.btn1').click(function() {
    //     // $(this).closet('.accordions').next('.content').slideToggle();
    //     // $('.content').not($(this).next('.content')).slideUp();
    //     $('.content2, .content3').slideUp();
    //     $('.content1').slideToggle();
    // });
    // $('.btn2').click(function() {
    //     // $(this).closet('.accordions').next('.content').slideToggle();
    //     // $('.content').not($(this).next('.content')).slideUp();
    //     $('.content1, .content3').slideUp();
    //     $('.content2').slideToggle();
    // });
    // $('.btn3').click(function() {
    //     // $(this).closet('.accordions').next('.content').slideToggle();
    //     // $('.content').not($(this).next('.content')).slideUp();
    //     $('.content1, .content2').slideUp();
    //     $('.content3').slideToggle();
    // });
    $('.btn').click(function() {
        // 対応するボタンに応じて該当するcontentを表示する
        const index = $(this).index(); // クリックされたボタンのインデックスを取得
        $('.content').not($('.content').eq(index)).css('display', 'none');
        $('.content').eq(index).slideToggle(); // インデックスに対応するcontentを表示
    });
});