export function setupFilters(previewImg) {
    const brightnessSlider = document.getElementById('brightness');
    const contrastSlider = document.getElementById('contrast');
    const blurSlider = document.getElementById('blur');
    

    let blurValue = 0;
    let contrast = 100;
    let brightness = 100;

    function applyFilters() {
        previewImg.style.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    blur(${blurValue}px)
  `;
    }

    brightnessSlider.addEventListener('input', () => {
        brightness = brightnessSlider.value;
        applyFilters();
    })

    contrastSlider.addEventListener('input', () => {
        contrast = contrastSlider.value;
        applyFilters();
    })

    blurSlider.addEventListener('input', () => {
        blurValue = blurSlider.value;
        applyFilters();
    })


    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            brightness = 100;
            contrast = 100;
            blurValue = 0;
            brightnessSlider.value = 100;
            contrastSlider.value = 100;
            blurSlider.value = 0;
            applyFilters();
        });
    }
}