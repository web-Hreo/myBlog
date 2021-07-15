onload = function() {
  var click_cnt = 0;
  var WIDTH = document.documentElement.clientWidth;
  var HEIGHT = document.documentElement.clientHeight;
  var $html = document.getElementsByTagName("html")[0];
  var $body = document.getElementsByTagName("body")[0];
  var $canvas = document.createElement("canvas"),
  
  content = $canvas.getContext('2d'),
  round = [],
  initRoundPopulation = 80;
  $canvas.width = WIDTH;
  $canvas.height = HEIGHT;
  $canvas.style.position = "fixed";
  $canvas.style.top = "0";
  $canvas.style.left = "0";
  $canvas.style.zIndex = "-20";
  function box(index, x, y) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.r = Math.random() * 5 + 1;
    var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = "rgba(220,20,60," + alpha + ")";
  }

  box.prototype.draw = function () {
    content.fillStyle = this.color;
    content.shadowBlur = this.r * 2;
    content.beginPath();
    content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    content.closePath();
    content.fill();
  };

  function animate() {
    content.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i in round) {
      round[i].move();
    }
    requestAnimationFrame(animate)
  }

  box.prototype.move = function () {
    this.y -= 1;   //  上升移动速度
    if (this.y <= -10) {
      this.y = HEIGHT + 10;
    }
    this.draw();
  };

  function init() {
    for (var i = 0; i < initRoundPopulation; i++) {
      round[i] = new box(i, Math.random() * WIDTH, Math.random() * HEIGHT);
      round[i].draw();
    }
    $body.appendChild($canvas);
    animate();
  }
  init();
  $html.onclick = function(e) {
      var $elem = document.createElement("b");
      var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
      while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
        hex = '0' + hex;
      }
      $elem.style.color = `#${hex}`;
      $elem.style.zIndex = 9999;
      $elem.style.position = "absolute";
      $elem.style.userSelect = "none";
      var x = e.pageX;
      var y = e.pageY;
      $elem.style.left = (x - 10) + "px";
      $elem.style.top = (y - 20) + "px";
      clearInterval(anim);
      switch (++click_cnt) {
          case 10:
              $elem.innerText = "OωO";
              break;
          case 20:
              $elem.innerText = "(๑•́ ∀ •̀๑)";
              break;
          case 30:
              $elem.innerText = "(๑•́ ₃ •̀๑)";
              break;
          case 40:
              $elem.innerText = "(๑•̀_•́๑)";
              break;
          case 50:
              $elem.innerText = "（￣へ￣）";
              break;
          case 60:
              $elem.innerText = "(╯°口°)╯(┴—┴";
              break;
          case 70:
              $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
              break;
          case 80:
              $elem.innerText = "╮(｡>口<｡)╭";
              break;
          case 90:
              $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
              break;
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
              $elem.innerText = "(ꐦ°᷄д°᷅)";
              break;
          default:
              $elem.innerText = "❤";
              break;
      }
      $elem.style.fontSize = Math.random() * 10 + 18 + "px";
      var increase = 0;
      var anim;
      setTimeout(function() {
          anim = setInterval(function() {
              if (++increase == 150) {
                  clearInterval(anim);
                  $body.removeChild($elem);
              }
              $elem.style.top = y - 20 - increase + "px";
              $elem.style.opacity = (150 - increase) / 120;
          }, 8);
      }, 70);
      $body.appendChild($elem);
  };

};
