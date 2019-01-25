
export const validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const validatePassword = password => {
    return password != "" && password.length >= 6;
};

export const validateName = name => {
    var re = new RegExp(/^([a-zA-Z ]{1,})$/);
    return re.test(name);
};
