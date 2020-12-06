validateBankCard = (numberOfCard) => {
    numberOfCard = prompt('Enter your credit card to make payment.', '9999-9999-9999-9999');
    const regExp = /\d{4}-\d{4}-\d{4}-\d{4}/;

    if (regExp.test(numberOfCard)) {
        alert('Your payment is accepted.');
    } else {
        alert('You credit card is not valid!     Enter your card again, please.');
    }

}
validateBankCard();