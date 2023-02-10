const btn = document.getElementById('getfile');

btn.addEventListener('click', previewFile);

function previewFile() {
    const content = document.querySelector('.text');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
    console.log(typeof(reader.result));
    if (file) {
      reader.readAsText(file);
    }
    $.ajax({
        url: '',
        type: 'post',
        data: {
            text: "Deniss"
        }
    });
}

