const primaryNav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('#mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// set the dropdown menu element
const targetEl = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const triggerEl = document.getElementById('dropdownButton');

// options with default values
const options = {
  placement: 'left',
  onHide: () => {
      console.log('dropdown has been hidden');
  },
  onShow: () => {
      console.log('dropdown has been shown');
  }
};

/*
* targetEl: required
* triggerEl: required
* options: optional
*/
const dropdown = new Dropdown(targetEl, triggerEl, options);