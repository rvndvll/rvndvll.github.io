function classToggle() {
    const navs = document.querySelectorAll('.navbar__list')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.header__hamburger--toggle')
    .addEventListener('click', classToggle);

    //hamburger animation
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

// change navbar
window.onscroll = function changeNav() {
  const navbar = document.getElementById('header');
  const secondSection = document.getElementById('about');
  const secondSectionTop = secondSection.getBoundingClientRect().top;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if(secondSectionTop >= navbarHeight) {
    navbar.className = ('header')
  } else if(secondSectionTop <= navbarHeight) {
    navbar.className = ('header header--blue')
  }
}
//animations on screen


const scrollEventHandler = () => {
  const cards = document.querySelector('.cards');
  const cardsClasses = cards.classList;
  if (isScrolledIntoView(document.getElementById('home'))) {
    cardsClasses.remove('cards--animated')
  } else {
    cardsClasses.add('cards--animated')
  }
};

document.addEventListener('scroll', scrollEventHandler);

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
