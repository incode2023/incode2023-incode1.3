const mobileMenuToggle = document.getElementById('mobile-menu');
const menuList = document.getElementById('menu-list');

mobileMenuToggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

