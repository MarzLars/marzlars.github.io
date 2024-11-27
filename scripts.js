document.addEventListener('DOMContentLoaded', function() {
  var dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log('Button clicked'); // P39a7
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
});
