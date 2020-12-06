checkEmail = (email) => {
    const regExp = /^([0-9]|[A-Za-z])+(\w+-?)\w+@[a-z]+\.[a-z]+/;

    if (!regExp.test(email)) {
        alert('Email is not correct!');
    } else {
        alert('Email is correct!');
    }
}
checkEmail('my_mail@gmail.com');