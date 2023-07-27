document.addEventListener('DOMContentLoaded', function() {
  const openPopupBtn = document.getElementById('openPopupBtn');
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');
  const closePopupBtn = document.querySelector('.close-button');

  openPopupBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });
});
