
var txt = document.getElementById('txt');


if (typeof window.orientation !== 'undefined') {
   window.addEventListener('change', () => {
      let input = event.clipboardData.getData('text');
      setTimeout(() => {
         txt.value = input.replace(/-|_/g, ' ');
         txt.select();
         document.execCommand("copy");
      }, 120);
   });
} else {
   window.addEventListener('paste', () => {
      let input = event.clipboardData.getData('text');
      setTimeout(() => {
         txt.value = input.replace(/-|_/g, ' ');
         txt.select();
         document.execCommand("copy");
      }, 120);
   });
}