function expenseValue(id) {
  const expenseInputField = document.getElementById(id);
  const expenseInputFieldString = expenseInputField.value;
  const expenseValue = parseFloat(expenseInputFieldString);
  return expenseValue;
}
function balance(id) {
  const balanceInputField = document.getElementById(id);
  const balanceInputFieldString = balanceInputField.innerText;
  const balanceValue = parseFloat(balanceInputFieldString);
  return balanceValue;
}
function setValue(id, value) {
  const valueSetField = document.getElementById(id);

  valueSetField.innerText = value;
}
document.getElementById('calculate_btn').addEventListener('click', function () {
  const foodCost = expenseValue('food_input_field');
  const rentCost = expenseValue('rent_input_field');
  const clothCost = expenseValue('cloth_input_field');
  if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
    alert('Please give number as an input');

    return;
  }
  const totalCost = foodCost + rentCost + clothCost;
  setValue('total_expense', totalCost);
  const income = expenseValue('income_input_field');
  const current_balance = income - totalCost;
  setValue('current_balance', current_balance);
});
document.getElementById('save_btn').addEventListener('click', function () {
  const saveInputValue = expenseValue('save_input_field');
  const income = expenseValue('income_input_field');
  if (isNaN(saveInputValue) || isNaN(income)) {
    alert('Please enter number');
    return;
  }
  const savingAmount = (income * saveInputValue) / 100;
  const current_balance = balance('current_balance');
  const remaining_balance = current_balance - savingAmount;
  if (current_balance < savingAmount) {
    alert('you can not save because your amount is too low');
    return;
  }
  setValue('saving_amount', savingAmount);
  setValue('remaining_balance', remaining_balance);
});
