function classToggle() {
    const navs = document.querySelectorAll('.navbar__list')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.header__hamburger--toggle')
    .addEventListener('click', classToggle);

    /**
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }

//   var initialTopOffset = $('.header').offset().top;
// $(window).scroll(function(event) {
//   var scroll = $(window).scrollTop();
//   // if the top of our browser is inside the section2
//   if (scroll + initialTopOffset >= $('.about').offset().top && scroll + initialTopOffset <= $('.about').offset().top + $('.about').outerHeight()) {
//     $('header').addClass('header--blue'); // add the class
//   } else {
//     $('header').removeClass('blue'); // remove the class
//   }
// });

//trigger the scroll
// $(window).scroll(); //ensure if you're in current position when page is refreshed

// const initialTopOffset = document.querySelector("#home").offsetTop;
// window.addEventListener('scroll', function(event) {
//   const scroll = window.scrollTop;
//   // window.addEventListener('scroll', top);
//   if (scroll + initialTopOffset >= document.querySelector('.about').offsetTop && scroll + initialTopOffset <= document.querySelector('.about').offsetTop + document.querySelector('.about').outHeight) {
//     if (document.querySelector('header').classList) {
//       this.add('header--blue');
//    } else {
//     console.log('gahhhhhhhh')
//   }
//  } else {
//     console.log('booo');
//   }
// });

// window.addEventListener('scroll', window);


