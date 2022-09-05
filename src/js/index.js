import '../css/index.css';
import atajos from './meeting/session/libreria';
import initPreviewButtons from './meeting/preview/preview';

window.addEventListener('DOMContentLoaded', async () => {
  console.log('======= Initializing preview =======');
  await initPreviewButtons();
  
});
