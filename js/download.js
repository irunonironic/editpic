export function setupDownload(previewImg) {
    const download = document.getElementById('download');
   
    download.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        canvas.width = previewImg.naturalWidth;
        canvas.height = previewImg.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.filter = previewImg.style.filter;
        ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'edited-image.png';
        link.click();

    })
}