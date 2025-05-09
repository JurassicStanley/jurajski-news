document.querySelectorAll('.container').forEach(container => {
  let slider = container.querySelector('.slider .list');
  let items = container.querySelectorAll('.slider .list .item');
  let next = container.querySelector('.next');
  let prev = container.querySelector('.prev');
  let dots = container.querySelectorAll('.slider .dots li');
  
  let lengthItems = items.length - 1;
  let active = 0;
  
  next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  };
  
  prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  };
  
  function reloadSlider() {
    slider.style.transform = `translateX(-${active * 100}%)`;
    
    let last_active_dot = container.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
  }
  
  dots.forEach((li, key) => {
    li.addEventListener('click', () => {
      active = key;
      reloadSlider();
    });
  });
  
  window.onresize = function(event) {
    reloadSlider();
  };
});