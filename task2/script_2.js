checkEmail = (email) => {
    const regExp = /\w+@\w+\.\w+/;

    if (regExp.test(email)) {
        alert('Your e-mail is valid. We will contact you soon.');
    } else {
        alert('This is not an e-mail. Please try again.')
    }
}
checkEmail('Qmail2@gmail.com');

