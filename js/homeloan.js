// calculate emi secyion js start
const label = document.querySelectorAll(".calculate-emi-section form .selector label[for=property-identified],.calculate-emi-section form .selector label[for=gender]");
label.forEach((item)=> {
    item.addEventListener("click",()=> {
      label.forEach((item)=> {
        item.classList.remove("active")
      })
    item.classList.add("active")
  })
})
// calculate emi secyion js end

// homeloan-calculator js start
// amount js start
const loanRange = document.getElementById('loanRange');
const loan = document.getElementById('loan');
const rateOfInterest = document.getElementById('rateOfInterest');
const intrest = document.getElementById('intrest');
const loanTenure = document.getElementById('loanTenure');
const tenure = document.getElementById('tenure');
const emiResult = document.getElementById('emi-result');
const principalResult = document.getElementById('principal-result');
const totalInterestResult = document.getElementById('total-interest-result');
const totalAmountResult = document.getElementById('total-amount-result');

// Chart start
const ctx = document.getElementById('loanChart').getContext('2d');
const loanChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Principal Amount', 'Interest Amount'],
    datasets: [{
      label: 'Amount',
      data: [0, 0],
      backgroundColor: ['#1C85E8', '#100F3F'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ₹' + context.raw.toFixed(0);
            }
            return label;
          }
        }
      }
    }
  }
});
// chart end

function loanAmount() {
  const value = loanRange.value;
  const max = loanRange.max;
  const percentage = (value / max) * 100;

  loan.textContent = `₹ ${value}`;
  loanRange.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
  calculateEMI();
}
loanAmount();
loanRange.addEventListener('input', loanAmount);
// amount js end

// intrest js start
function Intrest() {
  const value = rateOfInterest.value;
  const max = rateOfInterest.max;
  const percentage = (value / max) * 100;

  intrest.textContent = `${value} %`;
  rateOfInterest.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
  calculateEMI();
}
Intrest();
rateOfInterest.addEventListener('input', Intrest);
// intrest js end

// tennure js start
function Tenure() {
  const value = loanTenure.value;
  const max = loanTenure.max;
  const percentage = (value / max) * 100;

  tenure.textContent = `${value} Yr`;
  loanTenure.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
  calculateEMI();
}
Tenure();
loanTenure.addEventListener('input', Tenure);

// tennure js end


// Calculate EMI
function calculateEMI() {
  const loanAmountValue = (loanRange.value);
  const rateOfInterestValue = (rateOfInterest.value);
  const loanTenureValue = (loanTenure.value);

  // Convert rate of interest from annual to monthly
  const monthlyRate = (rateOfInterestValue / 100) / 12;

  // Calculate EMI
  const emi = loanAmountValue * monthlyRate * Math.pow((1 + monthlyRate), loanTenureValue * 12) / (Math.pow((1 + monthlyRate), loanTenureValue * 12) - 1);
  // Calculate Principal Amount
  // const principalAmount = loanAmountValue / Math.pow((1 + monthlyRate), loanTenureValue * 12);
  const principalAmount = (emi * (Math.pow((1 + monthlyRate), loanTenureValue * 12) - 1)) /
    (monthlyRate * Math.pow((1 + monthlyRate), loanTenureValue * 12));;

  // Calculate Total Amount
  const totalAmount = emi * loanTenureValue * 12;

  // Calculate Total Interest
  const totalInterest = totalAmount - principalAmount;

  emiResult.textContent = `₹${emi.toFixed(0)}`;
  principalResult.textContent = `₹${principalAmount.toFixed(0)}`;
  totalInterestResult.textContent = `₹${totalInterest.toFixed(0)}`;
  totalAmountResult.textContent = `₹${totalAmount.toFixed(0)}`;

  // Update the chart
  loanChart.data.datasets[0].data = [principalAmount, totalInterest];
  loanChart.update();
}
// homeloan-calculator js end

// eligibility-calculator-section start
const salary = document.getElementById("salary");
const rangeSalary = document.getElementById("range-salary");
const emiTenure = document.getElementById("emi-tenure");
const rangeTenure = document.getElementById("range-tenure");
const emiInterest = document.getElementById('emi-intrest');
const rangeInterest = document.getElementById('range-intrest');
const emiOther = document.getElementById('emi-other');
const rangeOtherEmi = document.getElementById('range-otherEmi');

function salaryFun() {
  const value = rangeSalary.value;
  const max = rangeSalary.max;
  const percentage = (value / max) * 100;

  salary.value = `${value}`;
  rangeSalary.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
}

function updateRangeSalary() {
  const maxValueSalary = 50000000;
  const maxValueRange = 20000000;
  const salaryValue = parseInt(salary.value);

  if (salaryValue > maxValueSalary) {
    salary.value = maxValueSalary;
  }

  const rangeValue = Math.min(salaryValue, maxValueRange);
  rangeSalary.value = rangeValue;

  const percentage = (rangeSalary.value / rangeSalary.max) * 100;
  rangeSalary.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
}

salaryFun();
rangeSalary.addEventListener('input', salaryFun);
salary.addEventListener('input', updateRangeSalary);

// emi-tenure start
function tenureFun() {
  const value = rangeTenure.value;
  const max = rangeTenure.max;
  const percentage = (value - rangeTenure.min) / (max - rangeTenure.min) * 100;

  emiTenure.value = value;
  rangeTenure.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
}
function updateRangeTenure() {
  const maxValue = parseInt(rangeTenure.max, 10);
  let tenureValue = parseInt(emiTenure.value, 10);

  if (tenureValue > maxValue) {
    tenureValue = maxValue;
  } else if (tenureValue < parseInt(rangeTenure.min, 10)) {
    tenureValue = parseInt(rangeTenure.min, 10);
  }

  emiTenure.value = tenureValue;
  rangeTenure.value = tenureValue;
  tenureFun();
}
tenureFun();
rangeTenure.addEventListener('input', tenureFun);
emiTenure.addEventListener('input', updateRangeTenure);

// emi-tenure end

// emi-intrest start
function intrestFun() {
  const value = parseFloat(rangeInterest.value);
  const min = parseFloat(rangeInterest.min);
  const max = parseFloat(rangeInterest.max);
  const percentage = ((value - min) / (max - min)) * 100;

  emiInterest.value = value.toFixed(1);
  rangeInterest.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
}

function updateNumberInterest() {
  const maxValue = parseFloat(rangeInterest.max);
  let interestValue = parseFloat(emiInterest.value);

  if (interestValue > maxValue) {
    interestValue = maxValue;
  } else if (interestValue < parseFloat(rangeInterest.min)) {
    interestValue = parseFloat(rangeInterest.min);
  }

  emiInterest.value = interestValue.toFixed(2);
  rangeInterest.value = interestValue;
  intrestFun();
}
intrestFun();
rangeInterest.addEventListener('input', intrestFun);
emiInterest.addEventListener('input', updateNumberInterest);

// emi-intrest end
function emiOtherFun() {
  const value = rangeOtherEmi.value;
  const max = rangeOtherEmi.max;
  const percentage = (value / max) * 100;

  emiOther.value = `${value}`;
  rangeOtherEmi.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
}

function updateRangeOtherEmi() {
  const maxValue = 50000000;
  const maxValueRange = 20000000;
  const emiOtherValue = parseInt(emiOther.value);

  if (emiOtherValue > maxValue) {
    emiOther.value = maxValue;
  }

  const rangeValue = Math.min(emiOtherValue, maxValueRange);
  rangeOtherEmi.value = rangeValue;

  const percentage = (rangeOtherEmi.value / rangeOtherEmi.max) * 100;
  rangeOtherEmi.style.background = `linear-gradient(to right, #100F3F ${percentage}%, #919191 ${percentage}%)`;
}

emiOtherFun();
rangeOtherEmi.addEventListener('input', emiOtherFun);
emiOther.addEventListener('input', updateRangeOtherEmi);
// otherEmi end




const eligibility = document.getElementById("eligibility");
const monthly = document.getElementById("monthly");

function calculateEligibility() {
  const salary = parseInt(document.getElementById("salary").value);
  const tenure = parseInt(document.getElementById("emi-tenure").value) * 12; // Convert years to months
  const annualInterestRate = parseFloat(document.getElementById('emi-intrest').value);
  const otherEmi = parseInt(document.getElementById("emi-other").value);
  
  if (isNaN(salary) || isNaN(tenure) || isNaN(annualInterestRate) || isNaN(otherEmi)) {
    eligibility.textContent = 'Please provide valid inputs.';
    return;
  }

  const monthlyInterestRate = annualInterestRate / 100 / 12; // Convert annual interest rate to monthly
  const maxEmiPercentage = 0.4; // Assuming 40% of the monthly salary can be used for EMI

  // Calculate the maximum EMI affordable
  const maxMonthlyEmi = (salary / 12) * maxEmiPercentage - otherEmi;

  if (maxMonthlyEmi <= 0) {
    eligibility.textContent = '₹0';
    return;
  }

  // Calculate the eligible loan amount using the EMI formula
  const principal = maxMonthlyEmi / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) / (Math.pow(1 + monthlyInterestRate, tenure) - 1);

  eligibility.textContent = `₹${Math.round(principal).toLocaleString()}`;
}

function calculateMonthlyEMI() {
  const loanAmount = parseFloat(eligibility.textContent.replace(/[^0-9]/g, ''));
  const tenure = parseInt(document.getElementById("emi-tenure").value) * 12; // Convert years to months
  const annualInterestRate = parseFloat(document.getElementById('emi-intrest').value);
  
  if (isNaN(loanAmount) || isNaN(tenure) || isNaN(annualInterestRate)) {
    monthly.textContent = 'Please provide valid inputs.';
    return;
  }

  const monthlyInterestRate = annualInterestRate / 100 / 12; // Convert annual interest rate to monthly

  if (monthlyInterestRate === 0) {
    const emi = loanAmount / tenure;
    monthly.textContent = `₹${Math.round(emi).toLocaleString()}`;
    return;
  }

  // Calculate the EMI using the formula
  const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure) / (Math.pow(1 + monthlyInterestRate, tenure) - 1);

  monthly.textContent = `₹${Math.round(emi).toLocaleString()}`;
}

// Attach event listeners
function updateCalculations() {
  calculateEligibility();
  calculateMonthlyEMI();
}

// Add event listeners for all inputs
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', updateCalculations);
});

// Initialize
updateCalculations();

// eligibility-calculator-section end

// news scroll js start
document.addEventListener("DOMContentLoaded", function() {
  const cardGroup = document.querySelector('.homeloan-calculator-section .container .row .news .box .card-group');
  const cards = cardGroup.querySelectorAll('.homeloan-calculator-section .container .row .news .box .card-group .card');

  if (cards.length >= 3) {
      cardGroup.classList.add('scroll');
  }
});
// news scroll js end

// topic-section js start
const topicNav = document.getElementById('topic-nav');
const card = document.querySelectorAll('.topic-section .card');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  card.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    const navLink = topicNav.querySelector(`a[href="#${section.id}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navLink.classList.add('active');
    } else {
      if (navLink) {
        navLink.classList.remove('active');
      }
    }
  });
});
// topic-section js end
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  const cardGroup = box.querySelector('.card-group');
  const cards = box.querySelectorAll('.card');
  const leftArrow = box.querySelector('.left-arrow');
  const rightArrow = box.querySelector('.right-arrow');

  if (!cardGroup || cards.length === 0 || !leftArrow || !rightArrow) {
    
    return;
  }

  let currentCardIndex = 0;
  
  const cardWidth = cards[0].offsetWidth;
  const cardCount = cards.length;

  const firstCardClone = cards[0].cloneNode(true);
  const lastCardClone = cards[cards.length - 1].cloneNode(true);
  cardGroup.appendChild(firstCardClone);
  cardGroup.insertBefore(lastCardClone, cards[0]);

  leftArrow.addEventListener('click', () => {
    currentCardIndex--;
    if (currentCardIndex < 0) {
      currentCardIndex = cardCount - 1;
    }
    updateCarouselPosition();
  });

  rightArrow.addEventListener('click', () => {
    currentCardIndex++;
    if (currentCardIndex >= cardCount) {
      currentCardIndex = 0;
    }
    updateCarouselPosition();
  });

  function updateCarouselPosition() {
    const newTransform = `translateX(${currentCardIndex * -cardWidth}px)`;
    cardGroup.style.transform = newTransform;
  }

  updateCarouselPosition();
});

// topic-section tabbar js start
const tabbar = document.querySelectorAll(".topic-section .container .row .card .step .tabMenu .tabbar ul li");
const contents = document.querySelectorAll(".topic-section .container .row .card .step .tabMenu .tabbar .menu-content .content");

tabbar.forEach((list, index) => {
  const tabmenu = list.querySelector("span");
  tabmenu.addEventListener("click", () => {
    // Remove 'active' class from all tabs and contents
    tabbar.forEach((otherList) => {
      otherList.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // Add 'active' class to the clicked tab and corresponding content
    list.classList.add("active");
    contents[index].classList.add("active");
  });
});
// topic-section tabbar js end


// offer-pop js start
$(document).ready(function() {
  $('.popUp').click(function(event) {
    event.preventDefault();
    $('.form-popUp-section').addClass("show");
  });
  $('#closeOfferForm').click(function(event) {
    if($('.form-popUp-section').hasClass("show")) {
      $('.form-popUp-section').removeClass("show");
    }
  });
});
// offer-pop js end

// carousel indicator auto start
document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('carouselExampleAutoplaying');
  var inner = carousel.querySelector('.carousel-inner');
  var indicatorsContainer = document.createElement('div');
  indicatorsContainer.classList.add('carousel-indicators');
  
  var items = inner.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
      var button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('data-bs-target', '#carouselExampleAutoplaying');
      button.setAttribute('data-bs-slide-to', index);
      button.setAttribute('aria-label', `Slide ${index + 1}`);
      
      if (index === 0) {
          button.classList.add('active');
          button.setAttribute('aria-current', 'true');
      }
      
      indicatorsContainer.appendChild(button);
  });
  
  carousel.insertBefore(indicatorsContainer, inner);
});
// carousel indicator auto end

if(window.innerWidth < 991) {
  const topicNav = document.getElementById('topic-nav');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

let currentSlide = 0;
const slideWidth = topicNav.children[0].offsetWidth;
const maxSlides = topicNav.children.length;
const maxTranslateX = -515; // maximum translateX value

topicNav.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

prevArrow.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    const translateX = -currentSlide * slideWidth;
    topicNav.style.transform = `translateX(${Math.max(translateX, maxTranslateX)}px)`;
  }
});

nextArrow.addEventListener('click', () => {
  if (currentSlide < maxSlides - 1) {
    currentSlide++;
    const translateX = -currentSlide * slideWidth;
    topicNav.style.transform = `translateX(${Math.min(translateX, maxTranslateX)}px)`;
  }
});
}

document.getElementById("clsform").addEventListener("click", ()=> {
  if(  document.querySelector(".form-popUp-section").classList.contains("show")) {

    document.querySelector(".form-popUp-section").classList.remove("show");
  }
})