const billAmt = document.querySelector("#bill-amt");

const cashAmt = document.querySelector("#cash-amt");

const checkBtn = document.querySelector("#check-btn");

const errorMsg = document.querySelector("#error-msg");

const noOfNotes = document.querySelectorAll(".no-of-notes");

errorMsg.style.display = "none";

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function onClick() {
  if (Number(billAmt.value) > 0 && Number(cashAmt.value) > 0) {
    if (Number(cashAmt.value) >= Number(billAmt.value)) {
      const amountToBeReturned = cashAmt.value - billAmt.value;
      calculateChange(amountToBeReturned);
    } else {
      errorMsg.innerText = "Do you wanna wash dishes!";
      errorMsg.style.display = "block";
    }
  } else {
    errorMsg.innerText = "Invalid Amount!";
    errorMsg.style.display = "block";
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
    amountToBeReturned = amountToBeReturned % notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
