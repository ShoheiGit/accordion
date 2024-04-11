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
$('.button').click(function(e) {
    e.preventDefault();
    $(this).next().toggleClass('open');
});