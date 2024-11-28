document.addEventListener('DOMContentLoaded', function() {
  var dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log('Button clicked');
      var dropdownContent = this.nextElementSibling;
      var paragraphs = dropdownContent.querySelectorAll('p');

      paragraphs.forEach(function(paragraph) {
        if (paragraph.style.display === 'block') {
          paragraph.style.display = 'none';
        } else {
          paragraph.style.display = 'block';
        }
      });
    });
  });

  var focusButtons = document.querySelectorAll('.focus-btn');
  var overlay = document.querySelector('.overlay');

  focusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var gridItem = this.parentElement;
      gridItem.classList.add('focused');
      overlay.style.display = 'block';
    });
  });

  overlay.addEventListener('click', function() {
    var focusedItem = document.querySelector('.grid-item.focused');
    if (focusedItem) {
      focusedItem.classList.remove('focused');
    }
    overlay.style.display = 'none';
  });

  // Add event listener for mode-toggle button
  var modeToggleButton = document.querySelector('.mode-toggle');
  modeToggleButton.addEventListener('click', function() {
    console.log('Mode toggle button clicked'); // P598d
    document.body.classList.toggle('dark-mode');
  });
});
