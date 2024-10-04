gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".text-overlay h1",
  { opacity: 1, y: 100 },
  {
    opacity: 1,
    y: -50,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  }
);

gsap.registerPlugin(ScrollTrigger);

const textElement = document.getElementById('animated-text');
const words = textElement.innerText.split(' ').map(word => `<span>${word}</span>`).join(' ');
textElement.innerHTML = words;

gsap.fromTo("#animated-text span",
  { opacity: 0.25 },
  {
    opacity: 1,
    duration: 0.5,
    stagger: 0.1, 
    scrollTrigger: {
      trigger: "#animated-text",
      start: "top bottom", 
      end: "bottom top",
      scrub: true 
    }
  }
);

document.addEventListener("DOMContentLoaded",function() {
  const card = document.querySelector('#tablet');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  card.style.transform = `
    scale3d(1, 1, 1)
    rotate3d(
      ${center.y / 500},
      ${-center.x / 500},
      0,
      ${Math.log(distance)* 2.5}deg
    )
  `;
  
  const angle = Math.atan2(center.y, center.x) * (180 / Math.PI); 
  card.querySelector('.glow').style.backgroundImage = `
    linear-gradient(
      ${angle + 90}deg, /* Rotate the gradient based on mouse position */
      #ffffff55 10%,
      #0000000f
    )
  `;
}
document.body.addEventListener('mouseenter', () => {
  bounds = card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

document.body.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  card.style.transform = '';
  card.style.background = '';
});

})



document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 0) {
    const navItems = document.querySelectorAll(".tablet-section .main-menu ul li");
    const navBar = document.querySelector(".tablet-section .main-menu");
    let activeItem = document.querySelector(".tablet-section .main-menu ul li.active");
    let slideLine = document.createElement("div");
    let hoverLine = document.createElement("div");

    let mouseX = 0;
    let isCursorInside = false;

    slideLine.classList.add("slide-line");
    navBar.appendChild(slideLine);

    hoverLine.classList.add("hover-line");
    navBar.appendChild(hoverLine);

    gsap.set([slideLine, hoverLine], {
      height: 31,
      position: "absolute",
      bottom: 10,
      borderRadius: "64px",
      zIndex: 1,
      transformOrigin: "left center",
    });

    gsap.set(slideLine, {
      width: activeItem.offsetWidth,
      left: activeItem.offsetLeft,
      backgroundColor: "#111F3C",
    });

    gsap.set(hoverLine, {
      width: 0,
      left: 0,
      backgroundColor: "#F4F4F4",
      zIndex: 0,
    });

    function updateActiveItem(newActiveItem) {
      if (activeItem !== newActiveItem) {
        activeItem.classList.remove("active");
        newActiveItem.classList.add("active");

        const tl = gsap.timeline();

        const activeItemRect = activeItem.getBoundingClientRect();
        const newItemRect = newActiveItem.getBoundingClientRect();
        const direction =
          newItemRect.left < activeItemRect.left ? "left" : "right";

        tl.to(slideLine, {
          duration: 0.3,
          width: newActiveItem.offsetWidth,
          left: newActiveItem.offsetLeft,
          ease: "power2.out",
        })
          .to(
            slideLine,
            {
              duration: 0.1,
              x: direction === "left" ? "-3px" : "+3px",
              ease: "bounce.out",
            },
            "-=0.1"
          )
          .to(slideLine, {
            duration: 0.1,
            x: direction === "left" ? "+3px" : "-3px",
            ease: "bounce.out",
          })
          .to(slideLine, {
            duration: 0.2,
            x: "0px",
            ease: "power2.inOut",
          });

        activeItem = newActiveItem;
      }
    }

    function attractToCursor() {
      if (isCursorInside) {
        const slideLineRect = slideLine.getBoundingClientRect();
        const slideLineCenterX = slideLineRect.left + slideLineRect.width / 2;
        const distanceX = mouseX - slideLineCenterX;
        const distance = Math.abs(distanceX);

        const maxDistance = 100;

        if (distance < maxDistance) {
          const intensity = Math.max(0, 1 - distance / maxDistance);
          gsap.to(slideLine, {
            x: intensity * (distanceX * 0.2),
            duration: 0.1,
            ease: "power2.out",
          });
        }
      }
    }

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      attractToCursor();
    });

    navBar.addEventListener("mouseenter", () => {
      isCursorInside = true;
    });

    navBar.addEventListener("mouseleave", () => {
      isCursorInside = false;
      gsap.to(slideLine, {
        x: "0px",
        duration: 0.2,
        ease: "power2.inOut",
      });
    });

    navItems.forEach((item) => {
      item.addEventListener("mouseover", function () {
        gsap.to(hoverLine, {
          width: this.offsetWidth,
          left: this.offsetLeft,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseout", function () {
        gsap.to(hoverLine, {
          width: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("click", function () {
        updateActiveItem(this);
      });
    });

    navBar.addEventListener("mouseleave", function () {
      updateActiveItem(activeItem);
    });
  }
});

$(document).ready(function () {
  console.clear();
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();

  var ww = window.innerWidth;

  var noSlides = $(".section").length;
  var slideWidth = $(".section").width();
  var slideContainerWidth = slideWidth * noSlides - ww;

  console.log(noSlides, slideContainerWidth);

  var actionHorizontal = new TimelineMax().to("#slideContainer", 1, {
    x: -slideContainerWidth,
  });

  var horizontal = createHorizontal();

  function createHorizontal() {
    return new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: slideContainerWidth,
    })
      .setPin("#js-wrapper")
      .setTween(actionHorizontal)
      .on("progress", function (e) {
        var progress = e.progress;
        var dashArray = (progress * 4) + ", 1";
        $(".svg-line path").attr("stroke-dasharray", dashArray);
      })
      .addTo(controller);
  }

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: newpos,
        autoKill: true,
      },
      ease: Power3.easeOut,
    });
  });

  $(window).resize(function () {
    ww = window.innerWidth;
    slideContainerWidth = slideWidth * noSlides - ww;
    horizontal.destroy(true);
    horizontal = createHorizontal();
    console.log(ww, slideContainerWidth);
  });

  $(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    $targetPos = $(id).offset().top;
    $targetPos += $(id).offset().left - window.innerWidth / 2;
    if ($(id).length > 0) {
      console.log($(id));
      e.preventDefault();
      controller.scrollTo($targetPos);
    }
  });
});


