const logBtn = document.querySelector('.log-btn');

logBtn.addEventListener('click', () => {
  const id = document.querySelector('.log-id');
  const pw = document.querySelector('.log-psw');

  if (id.value !== 0 && pw.value !== 0) {
    window.location.href = './main.html';
  }
});
