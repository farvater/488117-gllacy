var Modal = document.querySelector('.modal-login');
var Close = document.querySelector('.modal-close');

Modal.onclick = function () {
  document.querySelector('.popup-shadow').classList.toggle('active');
}

Close.onclick = function() {
  document.querySelector('.popup-shadow').classList.toggle('active');
}