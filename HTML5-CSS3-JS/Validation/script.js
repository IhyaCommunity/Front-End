let nameInput = document.getElementById('name');

nameInput.addEventListener('blur', checkName);

function checkName() {
    let nameConstraints = [
        ['[A-Za-z]', 'Digits are not allowed']
    ];

    console.log('Checking...');

    for (let nameConstraint of nameConstraints) {
        var constraint = new RegExp(nameConstraint[0]);

        if (constraint.test(nameInput.value)) {
            nameInput.setCustomValidity('');
        }
        else {
            nameInput.setCustomValidity(nameConstraint[1]);
            break;
        }
    }
}