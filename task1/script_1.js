upperCase = (str) => {
    regExp = /^[A-Z]/;

    if (regExp.test(str)) {
        console.log('String\'s starts with uppercase character');
    } else {
        console.log('String\'s not starts with uppercase character');
    }

}
upperCase('regexp');
upperCase('RegExp');
