const btn = document.getElementById('getfile');
const reader = new FileReader();
function previewFile() {
    const content = document.querySelector('.text');
    const [file] = document.querySelector('input[type=file]').files;
    if (file) {
        reader.readAsText(file);
      }
    
}

btn.addEventListener("click", () => {
    console.log(reader.result);
      $.ajax({
          url: '',
          type: 'post',
          data: {
              text: reader.result
          },
      });
});
