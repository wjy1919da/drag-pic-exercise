const dropArea = document.querySelector('#drop-area');
const fileInput = document.querySelector('#input-file');
const imgView = document.querySelector('#img-view');
fileInput.addEventListener('change', uploadImg);
function uploadImg(event) {
    // 注意: 这里应该是 fileInput.files 而不是 fileInput.file
    let imgLink = URL.createObjectURL(fileInput.files[0]);
    // 使用 backgroundImage 来设置图片可能不是最好的选择，但根据你的代码，这样做是可以的
    imgView.style.backgroundImage = `url(${imgLink})`;
    imgView.textContent = '';
    imgView.style.border = 'none';
}
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('drag-over');
});
dropArea.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dropArea.classList.remove('drag-over');
});
dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    fileInput.files = event.dataTransfer.files;
    uploadImg();
});


