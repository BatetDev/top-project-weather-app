import '../styles/output.css';
import { createIcons, icons } from 'lucide';

const iconSpan = document.getElementById('icon');
if (iconSpan) {
  iconSpan.innerHTML =
    '<i data-lucide="cloud-lightning" width="48" height="48" class="inline"></i>';
  createIcons({ icons });
} else {
  console.warn('No element with id="icon" found.');
}
