/* eslint no-new: 0 */
const Clipboard = require('clipboard');

exports.onClientEntry = () => {
  const clipboard = new Clipboard('.clippy');

  function showTooltip(elem) {
    elem.setAttribute('class', 'clippy tooltipped tooltipped-n');
    elem.setAttribute('aria-label', 'Copied to clipboard');
    setTimeout(() => {
      elem.setAttribute('class', 'clippy');
      elem.removeAttribute('aria-label');
    }, 1500);
  }

  clipboard.on('success', e => {
    e.clearSelection();
    showTooltip(e.trigger);
  });

  window.playTranslateSound = src => {
    const decodeSrc = decodeURIComponent(src);
    const htmlCode = `<audio src="${decodeSrc}" controls></audio>`;
    const blob = new Blob([htmlCode], {
      type: 'text/html',
    });
    window.open(
      URL.createObjectURL(blob),
      '',
      `width=300,height=100,top=${window.innerHeight},left=${window.innerWidth}`
    );
  };
};
