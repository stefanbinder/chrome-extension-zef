let intervalId;

function check() {
    let select = document.getElementById('ddlStore');
    if (select) {
        select.value = 'HO';
        clearInterval(intervalId);

        let passwordField = document.getElementsByName('tbPassword');
        if (passwordField.length > 0) {
            passwordField[0].focus();
            console.log('script@check: focused');
        }
    }
}

intervalId = setInterval(function() {
    check();
}, 1000);
