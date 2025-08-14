import { setupUpload } from './upload.js';
import { setupFilters } from './filters.js';
import { setupDownload } from './download.js';

const previewImg = document.getElementById('preview');
const downloadBtn = document.getElementById('download');

document.addEventListener('DOMContentLoaded', () => {
  setupUpload(previewImg, downloadBtn);
  setupFilters(previewImg);
  setupDownload(previewImg);
});
