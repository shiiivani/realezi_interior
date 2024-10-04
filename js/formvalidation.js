// contactus-page js start(thank msg appear)
const formData = (e) => {
  e.preventDefault();
  const formFields = document.querySelectorAll("#contactus input, textarea");
  const fieldbox = document.querySelectorAll("#contactus .field");
  const msgDiv = document.querySelector("#contactus .msg");
  const messageDiv = document.querySelector(
    ".contact-form-section .card .message"
  );
  const termP = document.querySelector(
    ".contact-form-section .card-form .card-group .card .term p"
  );
  const image = document.querySelector(
    ".contact-form-section .card-form .card-group .card:nth-child(2)"
  );
  let allFieldsFilled = true;

  formFields.forEach((field) => {
    if (field.value.trim() === "") {
      allFieldsFilled = false;
    }
  });

  if (!allFieldsFilled) {
    msgDiv.classList.remove("d-block");
    messageDiv.classList.remove("d-block");
  } else {
    fieldbox.forEach((field) => {
      field.style.display = "none";
      termP.style.display = "none";
    });
    messageDiv.classList.add("d-block");
    msgDiv.classList.add("d-flex");
    image.classList.add("active");
  }

  msgDiv.addEventListener("click", () => {
    fieldbox.forEach((field) => {
      field.style.display = "block";
    });
    termP.style.display = "block";
    msgDiv.classList.remove("d-flex");
    messageDiv.classList.remove("d-block");
    image.classList.remove("active");
  });
};
// contactus-page js end

// homeloan page sorm js start

// select label effect
document.getElementById("city").addEventListener("focus", function () {
  document.getElementById("cityLabel").style.top = "-12px";
});

document.getElementById("city").addEventListener("blur", function () {
  if (!this.value) {
    document.getElementById("cityLabel").style.top = "6px";
  }
});
document.getElementById("location").addEventListener("focus", function () {
  document.getElementById("offerFormLabel").style.top = "-12px";
});

document.getElementById("location").addEventListener("blur", function () {
  if (!this.value) {
    document.getElementById("offerFormLabel").style.top = "6px";
  }
});
// select label effect

// personal-detail-form js start

document.querySelectorAll("#personalDetailForm input").forEach((input) => {
  input.addEventListener("input", updateButtonState);
  input.addEventListener("change", updateButtonState);
});

function contactusData(event) {
  event.preventDefault();

  document.querySelectorAll(".error-message").forEach((el) => {
    el.style.display = "none";
  });
  document.querySelectorAll("input").forEach((input) => {
    input.style.border = "1px solid #100F3F";
  });

  let isValid = true;

  // Validate Property Amount
  const propertyAmount = document.getElementById("property-amount").value;
  if (!propertyAmount) {
    document.getElementById("property-amount-error").style.display = "block";
    document.getElementById("property-amount").style.border = "1px solid red";
    isValid = false;
  }

  // Validate City
  const city = document.getElementById("city").value;
  if (!city) {
    document.getElementById("city-error").style.display = "block";
    document.getElementById("city").style.border = "1px solid red";
    isValid = false;
  }

  // Validate Pin Code
  const pinCode = document.getElementById("pin-code").value;
  if (!pinCode) {
    document.getElementById("pin-code-error").textContent =
      "Please enter a pin code.";
    document.getElementById("pin-code-error").style.display = "block";
    document.getElementById("pin-code").style.border = "1px solid red";
    isValid = false;
  } else if (pinCode.length !== 6) {
    document.getElementById("pin-code-error").textContent =
      "Pin code must be exactly 6 digits.";
    document.getElementById("pin-code-error").style.display = "block";
    document.getElementById("pin-code").style.border = "1px solid red";
    isValid = false;
  }

  // Validate Property Identified
  const propertyIdentified = document.querySelector(
    'input[name="property-identified"]:checked'
  );
  if (!propertyIdentified) {
    document.getElementById("property-identified-error").style.display =
      "block";
    isValid = false;
  }

  // Update button state and color
  updateButtonState();

  if (isValid) {
    const selectDetailValue = document.getElementById("selectDetailValue");
    selectDetailValue.textContent = `Looking for Rs. ${propertyAmount} loan in ${city}`;
    $("#verifyForm").fadeIn();
  }

  return isValid;
}

function updateButtonState() {
  const propertyAmount = document
    .getElementById("property-amount")
    .value.trim();
  const city = document.getElementById("city").value.trim();
  const pinCode = document.getElementById("pin-code").value.trim();
  const propertyIdentified = document.querySelector(
    'input[name="property-identified"]:checked'
  );

  const isFormValid =
    propertyAmount && city && pinCode.length === 6 && propertyIdentified;

  // Enable or disable the submit button and change its color based on the form validity
  const submitButton = document.getElementById("peronalDetailBtn");
  if (isFormValid) {
    submitButton.style.backgroundColor = "#100F3F";
  } else {
    submitButton.style.backgroundColor = "";
  }
}

function clearError(errorId) {
  document.getElementById(errorId).style.display = "none";
  // Find the associated input field and reset its border color
  const inputId = errorId.replace("-error", "");
  const inputField = document.getElementById(inputId);
  if (inputField) {
    inputField.style.border = "1px solid #100F3F";
  }
}
// person detail form js end

//  validationdetail js start
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verficationDetail");
  const sendOtpButton = document.getElementById("send-otp");
  const verifiedSpan = document.querySelector(".verified");
  const otpInputBox = document.querySelector("#otp").parentElement;
  const submitButton = document.getElementById("submit-button");

  // Function to validate individual fields
  function validateField(target) {
    let valid = true;

    if (target.matches("#name")) {
      const name = target.value.trim();
      const nameError = document.getElementById("name-error");
      if (!name) {
        nameError.style.display = "block";
        valid = false;
      } else {
        nameError.style.display = "none";
      }
    }

    if (target.matches("#age")) {
      const age = target.value.trim();
      const ageError = document.getElementById("age-error");
      if (!age || isNaN(age) || age <= 0) {
        ageError.style.display = "block";
        valid = false;
      } else {
        ageError.style.display = "none";
      }
    }

    if (target.matches("#email")) {
      const email = target.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailError = document.getElementById("email-error");
      if (!email || !emailPattern.test(email)) {
        emailError.style.display = "block";
        valid = false;
      } else {
        emailError.style.display = "none";
      }
    }

    if (target.matches("#mobile")) {
      const mobile = target.value.trim();
      const mobilePattern = /^[0-9]{10}$/;
      const mobileError = document.getElementById("mobile-error");
      if (!mobile || !mobilePattern.test(mobile)) {
        mobileError.style.display = "block";
        valid = false;
      } else {
        mobileError.style.display = "none";
      }
    }

    if (target.matches("#otp")) {
      const otp = target.value.trim();
      const otpError = document.getElementById("otp-error");
      if (!otp) {
        otpError.style.display = "block";
        valid = false;
      } else {
        otpError.style.display = "none";
        // Show the verified span if OTP is filled
        verifiedSpan.style.display = "block";
      }
    }

    if (target.matches('input[name="gender"]')) {
      const gender = document.querySelector('input[name="gender"]:checked');
      const genderError = document.getElementById("gender-error");
      if (!gender) {
        genderError.style.display = "block";
        valid = false;
      } else {
        genderError.style.display = "none";
      }
    }

    return valid;
  }

  // Function to enable or disable the submit button
  function toggleSubmitButton() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const otp = document.getElementById("otp").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const isOtpVisible = !otpInputBox.classList.contains("opacity-0");

    // Check if all required fields are filled and valid
    const isFormValid =
      name &&
      age &&
      email &&
      mobile &&
      (isOtpVisible ? otp : true) &&
      gender &&
      validateField(document.getElementById("name")) &&
      validateField(document.getElementById("age")) &&
      validateField(document.getElementById("email")) &&
      validateField(document.getElementById("mobile")) &&
      (isOtpVisible ? validateField(document.getElementById("otp")) : true) &&
      validateField(document.querySelector('input[name="gender"]:checked'));

    // Enable or disable the submit button
    submitButton.disabled = !isFormValid;
  }

  // Event listeners to validate fields and toggle submit button
  form.addEventListener("input", (event) => {
    validateField(event.target);
    toggleSubmitButton();
  });
  form.addEventListener("change", (event) => {
    validateField(event.target);
    toggleSubmitButton();
  });

  // Form submission handler
  form.addEventListener("submit", (event) => {
    const isValid = !submitButton.disabled;
    if (!isValid) {
      event.preventDefault();
    } else {
      alert("Form is valid! Submitting...");
    }
  });

  // Event listener for "Send OTP" button
  sendOtpButton.addEventListener("click", () => {
    const mobile = document.getElementById("mobile").value.trim();
    if (mobile) {
      // Show the OTP input and "Verified" span
      otpInputBox.classList.remove("opacity-0");
      verifiedSpan.style.display = "none"; // Hide initially until OTP is entered
      toggleSubmitButton(); // Check validity after showing OTP input
    }
  });

  // Event listener for OTP input to toggle verified message
  document.getElementById("otp").addEventListener("input", (event) => {
    if (event.target.value.trim()) {
      verifiedSpan.style.display = "block"; // Show "Verified" if OTP is filled
    } else {
      verifiedSpan.style.display = "none"; // Hide "Verified" if OTP is empty
    }
    toggleSubmitButton(); // Check validity after OTP input
  });

  // Initial validation check
  toggleSubmitButton();
});

//  validationdetail js end

// applynow js form start
function handleInputChange(event) {
  const input = event.target;
  input.style.border = "1px solid black"; // Reset border color
  updateOfferButtonState(); // Update button state based on current form values
}

// Attach event listeners to all input fields and select menus for input and change events
document
  .querySelectorAll("#offerForm select, #offerForm input")
  .forEach((input) => {
    input.addEventListener("input", handleInputChange);
    input.addEventListener("change", handleInputChange);
  });

function offerForm(event) {
  event.preventDefault();

  // Hide all error messages and reset border color to default
  document.querySelectorAll(".error-message").forEach((el) => {
    el.style.display = "none";
  });
  document
    .querySelectorAll("#offerForm select, #offerForm input")
    .forEach((input) => {
      input.style.border = "1px solid #100F3F"; // Default border color
    });

  let isValid = true;

  // Validate Property Amount
  const propertyAmount = document.getElementById("propertyAmount").value;
  if (!propertyAmount) {
    document.getElementById("property-amountError").style.display = "block";
    document.getElementById("propertyAmount").style.border = "1px solid red";
    isValid = false;
  }

  // Validate City
  const city = document.getElementById("location").value;
  if (!city) {
    document.getElementById("cityError").style.display = "block";
    document.getElementById("location").style.border = "1px solid red";
    isValid = false;
  }

  // Validate Pin Code
  const pinCode = document.getElementById("pinCode").value;
  if (!pinCode) {
    document.getElementById("pin-codeError").textContent =
      "Please enter a pin code.";
    document.getElementById("pin-codeError").style.display = "block";
    document.getElementById("pinCode").style.border = "1px solid red";
    isValid = false;
  } else if (pinCode.length !== 6) {
    document.getElementById("pin-codeError").textContent =
      "Pin code must be exactly 6 digits.";
    document.getElementById("pin-codeError").style.display = "block";
    document.getElementById("pinCode").style.border = "1px solid red";
    isValid = false;
  }

  // Validate Property Identified
  const propertyIdentified = document.querySelector(
    'input[name="offerIdentified"]:checked'
  );
  if (!propertyIdentified) {
    document.getElementById("property-identifiedError").style.display = "block";
    isValid = false;
  }

  // Update button state and color
  updateOfferButtonState();

  if (isValid) {
    const selectDetailValue = document.getElementById("offerFormValue");
    selectDetailValue.textContent = `Looking for Rs. ${propertyAmount} loan in ${city}`;
    $("#offerVerifyForm").fadeIn();
  }

  return isValid;
}

function updateOfferButtonState() {
  const propertyAmount = document.getElementById("propertyAmount").value.trim();
  const city = document.getElementById("location").value.trim();
  const pinCode = document.getElementById("pinCode").value.trim();
  const propertyIdentified = document.querySelector(
    'input[name="offerIdentified"]:checked'
  );

  const isFormValid =
    propertyAmount && city && pinCode.length === 6 && propertyIdentified;

  // Enable or disable the submit button and change its color based on the form validity
  const submitButton = document.getElementById("offerBtn");
  if (isFormValid) {
    submitButton.style.backgroundColor = "#100F3F";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "";
    submitButton.disabled = true;
  }
}

function resetErrorState(errorId) {
  document.getElementById(errorId).style.display = "none";
  // Find the associated input field and reset its border color
  const inputId = errorId.replace("-error", "");
  const inputField = document.getElementById(inputId);
  if (inputField) {
    inputField.style.border = "1px solid black"; // Set border color to black
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("offerFormDetail");
  const sendOtpButton = document.querySelector('button[name="btn"]');
  const verifiedSpan = document.querySelector(".verified");
  const otpInputBox = document.querySelector("#offerOtp").parentElement;
  const submitButton = document.getElementById("offer-submit-button");

  // Function to validate individual fields
  function validateField(target) {
    let valid = true;

    if (target.matches("#offerName")) {
      const name = target.value.trim();
      const nameError = document.getElementById("nameError");
      if (!name) {
        nameError.style.display = "block";
        valid = false;
      } else {
        nameError.style.display = "none";
      }
    }

    if (target.matches("#offerAge")) {
      const age = target.value.trim();
      const ageError = document.getElementById("ageError");
      if (!age || isNaN(age) || age <= 0) {
        ageError.style.display = "block";
        valid = false;
      } else {
        ageError.style.display = "none";
      }
    }

    if (target.matches("#offerEmail")) {
      const email = target.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailError = document.getElementById("emailError");
      if (!email || !emailPattern.test(email)) {
        emailError.style.display = "block";
        valid = false;
      } else {
        emailError.style.display = "none";
      }
    }

    if (target.matches("#offerMobile")) {
      const mobile = target.value.trim();
      const mobilePattern = /^[0-9]{10}$/;
      const mobileError = document.getElementById("mobileError");
      if (!mobile || !mobilePattern.test(mobile)) {
        mobileError.style.display = "block";
        valid = false;
      } else {
        mobileError.style.display = "none";
      }
    }

    if (target.matches("#offerOtp")) {
      const otp = target.value.trim();
      const otpError = document.getElementById("otpError");
      if (!otp) {
        otpError.style.display = "block";
        valid = false;
      } else {
        otpError.style.display = "none";
        document.getElementById("apply-verified").style.display = "block";
      }
    }

    if (target.matches('input[name="offerIdentified"]')) {
      const gender = document.querySelector(
        'input[name="offerIdentified"]:checked'
      );
      const genderError = document.getElementById("genderError");
      if (!gender) {
        genderError.style.display = "block";
        valid = false;
      } else {
        genderError.style.display = "none";
      }
    }

    return valid;
  }

  // Function to enable or disable the submit button
  function toggleSubmitButton() {
    const name = document.getElementById("offerName").value.trim();
    const age = document.getElementById("offerAge").value.trim();
    const email = document.getElementById("offerEmail").value.trim();
    const mobile = document.getElementById("offerMobile").value.trim();
    const otp = document.getElementById("offerOtp").value.trim();
    const gender = document.querySelector(
      'input[name="offerIdentified"]:checked'
    );
    const isOtpVisible = !otpInputBox.classList.contains("d-none");

    // Check if all required fields are filled and valid
    const isFormValid =
      name &&
      age &&
      email &&
      mobile &&
      (isOtpVisible ? otp : true) &&
      gender &&
      validateField(document.getElementById("offerName")) &&
      validateField(document.getElementById("offerAge")) &&
      validateField(document.getElementById("offerEmail")) &&
      validateField(document.getElementById("offerMobile")) &&
      (isOtpVisible
        ? validateField(document.getElementById("offerOtp"))
        : true) &&
      validateField(
        document.querySelector('input[name="offerIdentified"]:checked')
      );

    // Enable or disable the submit button
    submitButton.disabled = !isFormValid;
  }

  // Event listeners to validate fields and toggle submit button
  form.addEventListener("input", (event) => {
    validateField(event.target);
    toggleSubmitButton();
  });
  form.addEventListener("change", (event) => {
    validateField(event.target);
    toggleSubmitButton();
  });

  // Form submission handler
  form.addEventListener("submit", (event) => {
    const isValid = toggleSubmitButton();
    if (!isValid) {
      event.preventDefault();
    } else {
      alert("Form is valid! Submitting...");
    }
  });

  // Event listener for "Send OTP" button
  sendOtpButton.addEventListener("click", () => {
    if (offerMobile.value) {
      // Show the "Verified" span and OTP input
      verifiedSpan.style.display = "block";
      otpInputBox.classList.remove("opacity-0");
      toggleSubmitButton(); // Check validity after showing OTP input
    }
  });

  // Initial validation check
  toggleSubmitButton();
});

// applynow js form end

let offerLabel = document.querySelectorAll("label[for=offerIdentified]");

offerLabel.forEach((label) => {
  label.addEventListener("click", () => {
    offerLabel.forEach((otherLabel) => {
      if (otherLabel != label) {
        otherLabel.classList.remove("active");
      }
    });
    label.classList.add("active");
  });
});

// Converts a number into words
function numberToWords(num) {
  if (num === 0) return "Zero Rupees";

  const ones = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const convertBelowHundred = (n) => {
    if (n < 10) return ones[n];
    if (n < 20) return n === 10 ? tens[0] : teens[n - 11];
    let ten = Math.floor(n / 10);
    let one = n % 10;
    return tens[ten - 1] + (one ? "-" + ones[one] : "");
  };

  const convertBelowThousand = (n) => {
    if (n < 100) return convertBelowHundred(n);
    let hundred = Math.floor(n / 100);
    let remainder = n % 100;
    return (
      ones[hundred] +
      " Hundred" +
      (remainder ? " and " + convertBelowHundred(remainder) : "")
    );
  };

  const convertBelowLakh = (n) => {
    if (n < 1000) return convertBelowThousand(n);
    let thousand = Math.floor(n / 1000);
    let remainder = n % 1000;
    return (
      convertBelowThousand(thousand) +
      " Thousand" +
      (remainder ? " " + convertBelowThousand(remainder) : "")
    );
  };

  const convertBelowCrore = (n) => {
    if (n < 100000) return convertBelowLakh(n);
    let crore = Math.floor(n / 10000000);
    let remainder = n % 10000000;
    let lakh = Math.floor(remainder / 100000);
    remainder = remainder % 100000;
    let thousand = Math.floor(remainder / 1000);
    remainder = remainder % 1000;

    let result = "";
    if (crore > 0) result += convertBelowThousand(crore) + " Crore";
    if (lakh > 0)
      result += (result ? " " : "") + convertBelowLakh(lakh) + " Lakh";
    if (thousand > 0)
      result +=
        (result ? " " : "") + convertBelowThousand(thousand) + " Thousand";
    if (remainder > 0)
      result += (result ? " " : "") + convertBelowThousand(remainder);

    return result.trim();
  };

  return convertBelowCrore(num) + " Rupees";
}

// Event listener to convert number to words when input changes
document
  .getElementById("property-amount")
  .addEventListener("input", function () {
    const amount = this.value;
    const words = numberToWords(Number(amount));
    document.getElementById("amount-in-words").textContent = words;
  });
document
  .getElementById("propertyAmount")
  .addEventListener("input", function () {
    const amount = this.value;
    const words = numberToWords(Number(amount));
    document.getElementById("offer-amount-in-words").textContent = words;
  });

document
  .getElementById("verficationDetail")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Hide the verification form
    document.getElementById("verifyForm").style.display = "none";

    // Show the confirmation section
    const confirmSection = document.getElementById("verifyForm-confirm");
    confirmSection.style.display = "flex";

    // Get the video element
    const video = document.getElementById("verify-confirmation-video");

    // Add an event listener for when the video ends
    video.addEventListener("ended", function () {
      // Show the great message when the video finishes playing
      video.classList.add("shrink");
      document.querySelector(".great-msg").classList.add("show");
      // video.style.transform = "scale(0.8)"
      // video.style.width = "90%"
      // video.style.transition = "all 0.3s"
      // document.querySelector(".great-msg").style.display = "block";
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("offerFormDetail");
  const submitButton = document.getElementById("offer-submit-button");
  const applyConfirmation = document.getElementById("apply-confirmation");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById("offerVerifyForm").style.display = "none";
    // Hide the form
    form.style.display = "none";

    // Show the confirmation message
    // Get the video element
    const video = document.getElementById("apply-confirmation-video");

    // Add an event listener for when the video ends
    applyConfirmation.style.display = "flex";
    video.addEventListener("ended", function () {
      // Show the great message when the video finishes playing
      // video.style.transform = "scale(0.8)";
      // video.style.width = "90%";
      // video.style.transition = "all 0.3s";
      // document.querySelector("#apply-msg").style.display = "block";
      // document.querySelector("#apply-msg").style.transition = "all 1s";
      video.classList.add("shrink");
      document.querySelector("#apply-msg").classList.add("show");
    });
  });
});

// click outside and modal close
