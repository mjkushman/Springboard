window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues(); //pre-fills fields and result with placeholder
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the input fields from the DOM.
// Put some default values in the input fields
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 800000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputs = getCurrentUIValues(); //grabs current values from inputs
  // console.dir(inputs)
  const paymentAmount = calculateMonthlyPayment(inputs); //returns the monthly payment amount
  // console.log("expecting payment amount: "+paymentAmount)
  updateMonthly(paymentAmount);
  // return(paymentAmount);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //using formula from assignment
  const p = values.amount; 
  const i = values.rate /100 / 12;
  const n = (values.years * 12);
  const monthlyPayment = (p * i) / (1 - Math.pow((1+i),-n))
  return(monthlyPayment.toFixed(2))
  // const roundMonthlyPayment = (Math.round(monthlyPayment*100)) / 100
  //updateMonthly('$'+roundMonthlyPayment.toString())
  // return('$'+roundMonthlyPayment.toString()); //returns a string of payment amount
  // return(roundMonthlyPayment.toString()); //returns a string of payment amount
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // update the inner text of span with id "monthly-payment"
  const resultSpan = document.getElementById('monthly-payment')
  resultSpan.innerText = '$'+monthly;
}
