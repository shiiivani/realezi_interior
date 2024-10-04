// header js start
$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("header").addClass("active");
  } else {
     $("header").removeClass("active");
  }
});
// header js end
// check price form js start
$(document).ready(function () {
  $('#check-price').click(function () {
    $('#form-modal').addClass('active');
  });

  $('.close-form-icon').click(function () {
    $('#form-modal').removeClass('active');
  });
});
let pickupInput = document.getElementById("pickup-location");
let dropInput = document.getElementById("drop-location");
let phoneInput = document.getElementById("phone-number");

pickupInput.addEventListener('input', validatePickup);
dropInput.addEventListener('input', validateDrop);
phoneInput.addEventListener('input', validatePhone);

function validatePickup() {
  let pickupLocation = pickupInput.value;
  if (pickupLocation === "") {
    document.getElementById("pickup-error").style.display = "block";
  } else {
    document.getElementById("pickup-error").style.display = "none";
  }
}

function validateDrop() {
  let dropLocation = dropInput.value;
  if (dropLocation === "") {
    document.getElementById("drop-error").style.display = "block";
  } else {
    document.getElementById("drop-error").style.display = "none";
  }
}

function validatePhone() {
  let phoneNumber = phoneInput.value;
  let phoneRegex = /^\+?(\d{1,4})?[-.\s]?\(?(\d{1,4})?\)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
  if (phoneNumber === "") {
    document.getElementById("number-error").style.display = "block";
    document.getElementById("number-error").innerText = "Phone number is required.";
  } else if (!phoneRegex.test(phoneNumber)) {
    document.getElementById("number-error").innerText = "Enter valid mobile number";
    document.getElementById("number-error").style.display = "block";
  } else {
    document.getElementById("number-error").style.display = "none";
  }
}
function validateForm(e) {
  event.preventDefault();
  validatePickup();
  validateDrop();
  validatePhone();
}

var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);
$('#datepicker').val(today);
// check price form js end

// testimonial js start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0
    },
  }
});
// testimonial js end

// consulataion form validation start
const consulataionFormOpen = document.getElementById("consulataionFormOpen");
const consultationFormModal = document.getElementById("consultation-form-modal")
const closeFormIcon = document.querySelector("#consultation-form-modal .close-form-icon")
consulataionFormOpen.addEventListener("click",(e)=> {
  e.preventDefault();
  consultationFormModal.classList.add("active")
})
closeFormIcon.addEventListener("click",(e)=> {
  e.preventDefault();
  consultationFormModal.classList.remove("active")
})
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('consulataionForm');
  const submitBtn = document.getElementById('submitBtn');
  const sendOtpLink = document.getElementById('sendOtp');
  const otpMessage = document.getElementById('otpMessage');
  const mobileNumberInput = document.getElementById('mobileNumber');
  const callRequestDiv = document.getElementById('callRequest');
  
  function checkFormValidity() {
    const isValid = form.checkValidity();
    submitBtn.disabled = !isValid;
  }
  
  function sendOtp() {
    const mobileNumber = mobileNumberInput.value;
    if (mobileNumber && mobileNumberInput.checkValidity()) {
      otpMessage.textContent = `We have sent the OTP to ${mobileNumber}.`;
      callRequestDiv.style.display = 'block';
    } else {
      otpMessage.textContent = 'Please enter a valid mobile number.';
      callRequestDiv.style.display = 'none';
    }
  }

  // Event listeners
  form.addEventListener('input', checkFormValidity);
  form.addEventListener('change', checkFormValidity);
  
  sendOtpLink.addEventListener('click', function(event) {
    event.preventDefault();
    sendOtp();
  });
});
// consulataion form validation end


