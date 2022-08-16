const chaneThemeBtn = document.querySelector('#change-theme');

chaneThemeBtn.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})