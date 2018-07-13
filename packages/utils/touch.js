/*
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-07-02 02:02:38 
 * @Last Modified by:   zhongw@corp.21cn.com 
 * @Last Modified time: 2018-07-02 02:02:38 
 */
export default {
  methods: {
    touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },

    touchMove(event) {
      const touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      // this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
      this.direction='horizontal'
    }
  }
};