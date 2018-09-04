'use strict';

var eventTarget;

if (!document.createTouch) {
  document.createTouch = function (view, target, identifier, pageX, pageY, screenX, screenY) {
    return new Touch(target, identifier, {
      pageX: pageX,
      pageY: pageY,
      screenX: screenX,
      screenY: screenY,
      clientX: pageX - window.pageXOffset,
      clientY: pageY - window.pageYOffset
    }, 0, 0);
  };
}

if (!document.createTouchList) {
  document.createTouchList = function () {
    var touchList = TouchList();
    for (var i = 0; i < arguments.length; i++) {
      touchList[i] = arguments[i];
    }
    touchList.length = arguments.length;
    return touchList;
  };
}

var Touch = function Touch(target, identifier, pos, deltaX, deltaY) {
  deltaX = deltaX || 0;
  deltaY = deltaY || 0;

  this.identifier = identifier;
  this.target = target;
  this.clientX = pos.clientX + deltaX;
  this.clientY = pos.clientY + deltaY;
  this.screenX = pos.screenX + deltaX;
  this.screenY = pos.screenY + deltaY;
  this.pageX = pos.pageX + deltaX;
  this.pageY = pos.pageY + deltaY;
};

function TouchList() {
  var touchList = [];

  touchList['item'] = function (index) {
    return this[index] || null;
  };

  touchList['identifiedTouch'] = function (id) {
    return this[id + 1] || null;
  };

  return touchList;
}

function fakeTouchSupport() {
  var objs = [window, document.documentElement];
  var props = ['ontouchstart', 'ontouchmove', 'ontouchcancel', 'ontouchend'];

  for (var o = 0; o < objs.length; o++) {
    for (var p = 0; p < props.length; p++) {
      if (objs[o] && objs[o][props[p]] === undefined) {
        objs[o][props[p]] = null;
      }
    }
  }
}

function onMouse(touchType) {
  return function (ev) {

    if (ev.which !== 1) {
      return;
    }

    if (ev.type === 'mousedown' || !eventTarget || eventTarget && !eventTarget.dispatchEvent) {
      eventTarget = ev.target;
    }

    triggerTouch(touchType, ev);

    if (ev.type === 'mouseup') {
      eventTarget = null;
    }
  };
}

function triggerTouch(eventName, mouseEv) {
  var touchEvent = document.createEvent('Event');
  touchEvent.initEvent(eventName, true, true);

  touchEvent.altKey = mouseEv.altKey;
  touchEvent.ctrlKey = mouseEv.ctrlKey;
  touchEvent.metaKey = mouseEv.metaKey;
  touchEvent.shiftKey = mouseEv.shiftKey;

  touchEvent.touches = getActiveTouches(mouseEv);
  touchEvent.targetTouches = getActiveTouches(mouseEv);
  touchEvent.changedTouches = createTouchList(mouseEv);

  eventTarget.dispatchEvent(touchEvent);
}

function createTouchList(mouseEv) {
  var touchList = TouchList();
  touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
  return touchList;
}

function getActiveTouches(mouseEv) {
  if (mouseEv.type === 'mouseup') {
    return TouchList();
  }
  return createTouchList(mouseEv);
}

function TouchEmulator() {
  fakeTouchSupport();

  window.addEventListener('mousedown', onMouse('touchstart'), true);
  window.addEventListener('mousemove', onMouse('touchmove'), true);
  window.addEventListener('mouseup', onMouse('touchend'), true);
}

TouchEmulator['multiTouchOffset'] = 75;

new TouchEmulator();