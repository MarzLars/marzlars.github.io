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
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Pd6b9
    });
  });

  overlay.addEventListener('click', function() {
    var focusedItem = document.querySelector('.grid-item.focused');
    if (focusedItem) {
      focusedItem.classList.remove('focused');
    }
    overlay.style.display = 'none';
    overlay.style.backgroundColor = 'transparent'; // P96ec
  });
});
