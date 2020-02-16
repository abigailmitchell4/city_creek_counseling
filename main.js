$(document).ready(() => {
  
  const $menuButton = $('#menu-btn');
  const $navDropdown = $('.nav-menu-mobile');
  const $close = $('.close');
  const $main = $('main');

  $navDropdown.hide();

  $menuButton.on('click', () => {
    $navDropdown.toggle();
    $menuButton.hide();
  });

  $close.on('click', () => {
    $navDropdown.hide();
    $menuButton.toggle();
  });

  $main.on('click', () => {
    $navDropdown.hide();
    $menuButton.toggle();
  });

});
