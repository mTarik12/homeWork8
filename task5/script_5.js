replaceStringElements = (str) => {
    const regExp = /\w+\s\w+/;

    [firstStr, secondStr] = regExp.exec(str).input.split(' ');

    let newStr = [secondStr, firstStr].join(' ');
    console.log(newStr);
}
replaceStringElements('Taras Maiula');
