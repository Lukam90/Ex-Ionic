const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");

const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

const expensesList = document.querySelector("#expenses-list");

const totalExpensesOutput = document.querySelector("#total-expenses");

const alertCtrl = document.querySelector("ion-alert");

alertCtrl.buttons = ["Okay"];
alertCtrl.addEventListener('ionAlertDidDismiss', () => {
    alertCtrl.isOpen = false;
});

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = "";
    amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = reasonInput.value;

    if (enteredReason.trim() == "" || enteredAmount.trim() == "" || enteredAmount <= 0) {
        alertCtrl.isOpen = true;

        return;
    }

    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ": $" + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

cancelBtn.addEventListener("click", clear);