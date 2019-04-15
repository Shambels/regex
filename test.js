
var txt = document.getElementById('txt');

window.addEventListener('paste', () => {
   let input = event.clipboardData.getData('text');
   setTimeout(() => {
      txt.value = input.replace(/-|_/g, ' ');
      txt.select();
      document.execCommand("copy");
   }, 120);
});