var btn = document.getElementById('btn');
var txt = document.getElementById('txt');

btn.addEventListener('click', () => {
   var input = document.getElementById('input');
   txt.value = input.value.replace(/-|_/g, ' ');
   txt.select();
   document.execCommand("copy");
})
