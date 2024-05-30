document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.toggleable');
    const contents = document.querySelectorAll('.details');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        // Remove the highlight class from all items
        items.forEach(el => el.classList.remove('highlight'));
  
        // Hide all content divs
        contents.forEach(content => content.classList.remove('visible'));
  
        // Add the highlight class to the clicked item
        item.classList.add('highlight');
  
        // Show the associated content div
        const targetId = item.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('visible');
        }
      });
    });
  });