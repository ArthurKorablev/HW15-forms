const btnBuy = document.querySelector('#btnBuy');
const btnSubmit = document.querySelector('#btnSubmit');
const form = document.querySelector('.page');

const inputName = document.querySelector('#floatingInputValue');
const city = document.querySelector('select');
const radios = document.querySelectorAll('input[name="flexRadioDefault"]');
const quantity = document.querySelector('#formGroupExampleInput');
const textarea = document.querySelector('#floatingTextarea');

function validation() {

    let flag = true;
    let formInputs = [];
    formInputs.push(inputName, city, quantity);

    formInputs.forEach(input => {
        input.classList.remove('is-invalid');

        if (input.value == '' || input.value == 'City') {
            flag = false;
            input.classList.add('is-invalid');
        }
        
    });
    if (radios[0].checked == false && radios[1].checked == false) {
            flag = false;
        }

    return flag;
}

function output() {
    form.setAttribute('hidden', 'hidden');
    
    const mainDiv = document.createElement('div');
    const name = document.createAttribute('div');
    const location = document.createElement('div');
    const quantityOfProduct = document.createElement('div');

    name.textContent = `${inputName.value}`;
    location.textContent = `City: ${city.value}`;
    quantityOfProduct.textContent = `Quantity: ${quantity.value}`;

    mainDiv.append(name, location, quantityOfProduct);

    if (textarea.value != "") {
        const coment = document.createElement('div');
        coment.textContent = `${textarea.value}`;
        mainDiv.append(coment);
    }

    document.body.append(mainDiv);
}

btnBuy.addEventListener('click', function (e) {
    e.preventDefault();

    form.removeAttribute('hidden');
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validation(this)) {
        // alert('форма проверена');
        output();
    }
    console.log(validation(this));
})
