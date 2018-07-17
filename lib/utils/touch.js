'use strict';

exports.__esModule = true;
exports.default = {
  methods: {
    touchStart: function touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
      this.startTamp = event.timeStamp;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);

      this.direction = 'horizontal';
    },
    touchEnd: function touchEnd(event) {
      this.offsetT = event.timeStamp - this.startTamp;
    }
  }
};