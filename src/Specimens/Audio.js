const svg = require('../utils/svg');

module.exports = class Audio {
  constructor(
    autoplay = 'false',
    classPrefix,
    loop = 'false',
    name = 'No name defined',
    src,
    preload = 'metadata',
    isSound = 'false',
    lan = 'en',
    speed = '3'
  ) {
    this.autoplay = autoplay;
    this.classPrefix = classPrefix;
    this.loop = loop;
    this.name = name;
    this.isSound = isSound;
    this.lan = lan;
    this.speed = speed;
    this.src = src;
    this.preload = preload;
  }

  output() {
    if (this.isSound === 'true') {
      return `
      <div class="${this.classPrefix}-audio__container">
        <div class="${this.classPrefix}-audio__title">
          <span class="${this.classPrefix}-audio__audio__icon">${svg.audio()}</span>${this.name}<span class="${
        this.classPrefix
      }-audio__play__sound__icon" data-lan="${this.lan}" data-name="${
        // eslint-disable-next-line prettier/prettier
        escape(this.name)
      }" data-speed="${this.speed}" onclick="playTranslateSound()">${svg.playSound()}</span>
            </div>
          </div>
      `;
    }

    return `
    <div class="${this.classPrefix}-audio__container">
      <div class="${this.classPrefix}-audio__title"><span class="${
      this.classPrefix
    }-audio__audio__icon">${svg.audio()}</span>${this.name}</div>
      <audio class="${this.classPrefix}-audio__audiofile" src=${this.src} ${
      this.autoplay === 'true' ? 'autoplay' : ''
    } ${this.loop === 'true' ? 'loop' : ''} controls ${this.preload ? `preload="${this.preload}"` : ''} />
    </div>
    `;
  }
};
