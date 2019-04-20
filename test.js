
var toSpace = document.getElementById('to-space');
var fromSpace = document.getElementById('from-space');

window.addEventListener('paste', () => {

   let input = event.clipboardData.getData('text');

   setTimeout(() => {
      if (document.activeElement.id === "to-space") {
         toSpace.value = input.replace(/-|_/g, ' ');
         toSpace.select();
      }
      else {         
         fromSpace.value = input.replace(/  */g, '-');
         fromSpace.select();
      }
      document.execCommand("copy");
   }, 50);
});