import App from './app.js';

window.onload = () => {
  console.log('loading apppppp....');
  const main = document.querySelector('main');
  new App(main).init();
};
