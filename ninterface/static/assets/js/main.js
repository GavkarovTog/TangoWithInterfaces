const fileInput = document.getElementById("fileinput");
const btn = document.getElementById('getfile');

btn.addEventListener("click", () => {
    const [file] = fileInput.files;
    if (file) {
        const reader = new FileReader();
        fileInput.addEventListener("load", () => {
            console.log("test")
            debugger
            console.log(reader.result);
        })
        reader.readAsText(file);
    }
}
)

// fileInput.addEventListener("change", () => {
//   const [file] = fileInput.files;
//   if (file) {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//       output.innerText = reader.result;
//     });
//     reader.readAsText(file);
//   }
// })