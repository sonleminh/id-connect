// Setting Tabs

var tabLinks = document.querySelectorAll('.tablinks');
var tabContent = document.querySelectorAll('.tabcontent');

tabLinks.forEach(function (el) {
  el.addEventListener('click', openTabs);
});

function openTabs(el) {
  var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  var tab = btn.dataset.tab; // lấy giá trị trong data-electronic

  tabContent.forEach(function (el) {
    el.classList.remove('active');
  });

  tabLinks.forEach(function (el) {
    el.classList.remove('active');
  });

  document.querySelector('#' + tab).classList.add('active');

  btn.classList.add('active');
}

var tab3Links = document.querySelectorAll('.tab3links');
var tab3Content = document.querySelectorAll('.tab3content');

tab3Links.forEach(function (el) {
  el.addEventListener('click', openTabs3);
});

function openTabs3(el) {
  var btn3 = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  var tab3 = btn3.dataset.tab3; // lấy giá trị trong data-electronic

  tab3Content.forEach(function (el) {
    el.classList.remove('active');
  });

  tab3Links.forEach(function (el) {
    el.classList.remove('active');
  });

  document.querySelector('#' + tab3).classList.add('active');

  btn3.classList.add('active');
}

// Show Mobile Bar

const mobileBar = document.getElementById('mobile-bar');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

function handleBarClick() {
  overlay.classList.remove('hidden');
  mobileMenu.classList.remove('hidden');
}

function handleOverlayClick() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

function handleCloseBtn() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

// Animation

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showLeft');
      entry.target.classList.add('fadeInLeft');
    }
  });
});

const hiddenLeftElements = document.querySelectorAll('.hiddenLeft');
hiddenLeftElements.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showRight');
      entry.target.classList.add('fadeInRight');
    }
  });
});

const hiddenRightElements = document.querySelectorAll('.hiddenRight');
hiddenRightElements.forEach((el) => observerRight.observe(el));
