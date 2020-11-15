import { doc } from 'prettier';
// import './js/if';
// import './js/u - patch.js
import './css/common.css';

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });
};

const options = {};
const observer = new IntersectionObserver(callback, options);

const sentinel = document.querySelector('#sentinel');
observer.observe(sentinel);
