const btn = document.getElementById('getfile');

function previewFile() {
    const content = document.querySelector('.text');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    btn.addEventListener("click", () => {
        console.log(reader.result);
    }, false);
  
    if (file) {
      reader.readAsText(file);
    }
}