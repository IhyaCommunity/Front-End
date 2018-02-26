window.addEventListener('load', function () {
  var canvas, context, tool;

  function init() {

    canvas = document.getElementById('drawCanvas');
    context = canvas.getContext('2d');

    document.getElementById('clear').addEventListener('click', function () {
      context.clearRect(0, 0, canvas.width, canvas.height)
    }, false);

    tool = new pencilTool();

    canvas.addEventListener('mousedown', mouseEvent, false);
    canvas.addEventListener('mousemove', mouseEvent, false);
    canvas.addEventListener('mouseup', mouseEvent, false);
  }

  // This painting tool works like a drawing pencil which tracks the mouse movements.
  function pencilTool() {
    var tool = this;
    this.started = false;

    this.mousedown = function (ev) {
      context.beginPath();
      context.moveTo(ev._x, ev._y);
      tool.started = true;
    };

    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    this.mouseup = function (ev) {
      if (tool.started) {
        tool.started = false;
      }
    };
  }

  function mouseEvent(ev) {
    // Create alias/shorthand properties
    ev._x = ev.offsetX;
    ev._y = ev.offsetY;

    // Call only the event handler of the tool.
    var func = tool[ev.type];
    func(ev);
  }

  init();

}, false);