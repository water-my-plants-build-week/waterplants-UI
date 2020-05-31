const dropdown = document.querySelector(".dropbtn");
const mobileMenu = document.querySelector("nav");

dropdown.addEventListener('click', (event) => {
    mobileMenu.style.display = "flex";
});

jQuery(".contentbody_child1").raindrops(
  {
  color: "#E8A87C",
  canvasHeight: 100,
  waveLength: 100,
  rippleSpeed: 0.05,
  density: 0.04
  });

jQuery(".contentbody_child2").raindrops(
  {
  color: "#E8A87C",
  canvasHeight: 75,
  waveLength: 100,
  rippleSpeed: 0.05,
  density: 0.04
  });

jQuery(".contentbody_child3").raindrops(
  {
  color: "#E8A87C",
  canvasHeight: 50,
  waveLength: 100,
  rippleSpeed: 0.05,
  density: 0.04
  });

jQuery(".contentbody_child4").raindrops(
  {
  color: "#E8A87C",
  canvasHeight: 40,
  waveLength: 100,
  rippleSpeed: 0.05,
  density: 0.04
  });


  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      var toRotate2 = elements[i].getAttribute('data-rotate2');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      } else {
        new TxtRotate(elements[i], JSON.parse(toRotate2), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
