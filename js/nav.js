// navbar js start
let lists = document.querySelectorAll("nav .container .main-box ul li");

lists.forEach((list) => {
  list.addEventListener("click", () => {
    lists.forEach((otherList => {
      if (otherList !== list) {
        otherList.classList.remove("active");
      }
    }))
    list.classList.add("active");
  })
})
// // navbar js end

// header menu hamburger menu js start
let icon = document.querySelector("header .container .row .main-box .menu-icon .icon");
let menu = document.querySelector("header .container .row .main-box .main-menu");
const checkbox = document.getElementById('checkbox');
// if (icon) {
//   icon.addEventListener("click", function () {
//     icon.classList.toggle("active");
//     menu.classList.toggle("active");
//   });
// }
checkbox.addEventListener('change', () => {
  // If the checkbox is checked, add the active class to the menu
  if (checkbox.checked) {
    menu.classList.add('active');
  } else {
    // If the checkbox is unchecked, remove the active class from the menu
    menu.classList.remove('active');
  }
});
// header menu hamburger menu js end

// document.addEventListener("DOMContentLoaded", function () {
//   var currentLocation = window.location.pathname.split("/").pop(); // Get the current page name
//   var menuLinks = document.querySelectorAll('.main-menu a');

//   menuLinks.forEach(function (link) {
//     var linkHref = link.getAttribute('href');
//     if (linkHref === currentLocation) {
//       link.classList.add('active');
//     }
//   });
// });

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
  } else {
      $("header").removeClass("sticky");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 0) {
    const navItems = document.querySelectorAll("header .main-menu ul li");
    const navBar = document.querySelector("header .main-menu");
    let activeItem = document.querySelector("header .main-menu ul li.active");
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
