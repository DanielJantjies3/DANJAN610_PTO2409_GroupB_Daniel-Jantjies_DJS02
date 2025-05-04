const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

//checking incomplete/empty inputs
  if(!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again."
  return;
}

//Conversions , Check and Validation (If inputs are numeric)
const numDividend = Number(dividend);
const numDivider = Number(divider);

//Check for Valid Numerical Inputs
if(isNaN(numDividend) || isNaN(numDivider)) {
  document.body.innerText = "Non-numeric value entered. Please reload the page and try again.";
  console.error(new Error("Invalid Input: Non-Numeric value entered."));
  return;
}




});