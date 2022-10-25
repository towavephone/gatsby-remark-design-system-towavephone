/* eslint-disable no-restricted-globals */
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

  window.playTranslateSound = () => {
    const name = event.currentTarget.getAttribute('data-name');
    const lan = event.currentTarget.getAttribute('data-lan');
    const speed = event.currentTarget.getAttribute('data-speed');
    const src = `https://fanyi.baidu.com/gettts?lan=${lan}&text=${name}}&spd=${speed}&source=web`;
    const htmlCode = `<audio src="${src}" controls></audio>`;
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
