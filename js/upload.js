export function setupUpload(previewImg, downloadBtn) {
    const fileInput = document.getElementById('upload');

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            previewImg.src = e.target.result;
            downloadBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    });
}
