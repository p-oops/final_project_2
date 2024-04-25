// Burger

document.querySelector('.burger').onclick = function() {
  document.querySelector('.section-first .top-container header nav ul').classList.toggle('mob-menu');
}

document.querySelector('.section-first .top-container header nav ul li').onclick = function() {
  document.querySelector('.section-first .top-container header nav ul').classList.remove('mob-menu');

}



// WOW

const wow = new WOW({
    boxClass: 'wow', /* класс, который необходим для работы wow.js */
    animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
    offset: 10, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
    mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
    live: true /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
  })
  wow.init(); /* Инициализация плагина с установленными выше свойствами */


// Questions

document.querySelectorAll('.plus').forEach(function (el) {
   el.addEventListener('click', function() {
    el.classList.toggle('close');
    el.parentElement.querySelector('p').classList.toggle('answer-visible');
   }); 
});

document.querySelectorAll('.question-info').forEach(function (el) {
    el.addEventListener('click', function() {
    el.parentElement.querySelector('p').classList.toggle('answer-visible');
    el.nextElementSibling.classList.toggle('close');
    }); 
 });

// swipper 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 26,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 2000,
      },

    
  });