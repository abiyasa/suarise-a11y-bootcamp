// var isFirstTime = true;

// get all links under menu
var menuLinks = document.querySelectorAll('#menu > a');

// add click event listener to menuLinks
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {

    // Prevent the default action of the link
    event.preventDefault();

    // get data-page value
    var page = event.target.getAttribute('data-page');
    showPage(page);
  });
});

// show the first page from menuLinks
showPage(menuLinks[0].getAttribute('data-page'));

function showPage(pageName) {
  // Remove is-active class from previous menu item and section
  var oldMenuItem = document.querySelector('#menu .is-active');
  var oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  var newMenuItem = document.querySelector('#menu [data-page='+pageName+']');
  var newPage = document.querySelector('main [data-page='+pageName+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

  // If this is the first time someone is visiting the site, don't move focus
  // around. Wait until they have clicked a menu item
  // if (isFirstTime) {
  //   isFirstTime = false;
  //   return;
  // }

  // focus to header in new page
  // Hint: check the HTML h2 tag in each section
  // newPage.querySelector('h2').focus();
}
