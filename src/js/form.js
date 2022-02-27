import * as $ from 'jquery';

const phone = /\+?[7-8]{1}\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{2}-?[0-9]{2}/;

// Creating Flash Notifies
function Flash(type, message) {
  $('.errors').prepend(`<div class="${type} flash"></div>`);
  $(`.${type}`).append(`<span class="flash__desc desc">${message}</span>`);
  $(`.${type}`).append(`<div class="flash__icon icon ${type}__icon"></div>`);
  setTimeout(() => {
    $(`.${type}`).fadeOut(250);
    $(`.${type}`).remove();
  }, 3000);
}
// Post Method
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
// Post Order
$(document).on('submit', '.form', (e) => {
  const order = {
    name: `${$('#inputName').val()}`,
    lastName: `${$('#inputLastName').val()}`,
    email: `${$('#inputEmail').val()}`,
    phone: `${$('#inputNumber').val()}`,
    orderdesc: `${$('#inputDesc').val()}`,
  };
  if (order.name === '' || order.email === '' || order.phone === '') {
    Flash('error', 'Пожалуйста, заполните все поля');
    return 0;
  }
  e.preventDefault();
  if (phone.test(order.phone)) {
    try {
      postData('/', order).then(() => {
        const overlay = document.querySelectorAll('.wrapper, .form');
        overlay.forEach((el) => {
          // eslint-disable-next-line no-param-reassign
          el.style.opacity = '0.1';
          el.style.display = 'none';
        });
        Flash('success', 'Спасибо, Ваш заказ принят, в ближайшее время с вами свяжутся!');
      }, () => {
        Flash('error', 'Что-то пошло не так...');
      });
    } catch (error) {
      Flash('error', error.message);
    }
  } else {
    Flash('error', 'Номер телефона некорректен');
  }
});
