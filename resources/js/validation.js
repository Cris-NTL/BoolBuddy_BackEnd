document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.ms_form');
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const password = document.getElementById('password');
        const passwordConfirm = document.getElementById('password-confirm');
        const errorMessage = document.getElementById('errorTech');
        const errorMessagePw = document.getElementById('errorPw');
        const errorMessagePwConfirm = document.getElementById('errorPw2');
        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const eMail = document.getElementById('email');
        const address = document.getElementById('address');
        const city = document.getElementById('city');
        const errorNameMessageEmpty = document.getElementById('errorNameEmpty');
        const errorSurnameMessageEmpty = document.getElementById('errorSurnameEmpty');
        const errorEmailMessageEmpty = document.getElementById('errorEmailEmpty');
        const errorAddressMessageEmpty = document.getElementById('errorAddressEmpty');
        const errorCityMessageEmpty = document.getElementById('errorCityEmpty');
        const errorMessageMailFormat = document.getElementById('errorMailFormat');


        form.addEventListener('submit', function (event) {


                let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);

                if (!checkedOne) {
                        event.preventDefault();
                        errorMessage.textContent = 'Select at least one technology';
                }else{
                        errorMessage.textContent = 'Looks Good!';
                        errorMessage.classList.remove("text-danger");
                        errorMessage.classList.add("text-success");
                }
                if (password.value.length < 8) {
                        event.preventDefault();
                        errorMessagePw.textContent = 'Passwords must contain at least 8 characters';
                }else{
                        errorMessagePw.textContent = 'Looks Good!';
                        errorMessagePw.classList.remove("text-danger");
                        errorMessagePw.classList.add("text-success");
                }

                if (password.value !== passwordConfirm.value || password.value.length == 0) {
                        event.preventDefault();
                        errorMessagePwConfirm.textContent = 'Passwords does not match';

                }else{
                        errorMessagePwConfirm.textContent = 'Looks Good!';
                        errorMessagePwConfirm.classList.remove("text-danger");
                        errorMessagePwConfirm.classList.add("text-success");
                }

                if (name.value === '') {
                        event.preventDefault();
                        errorNameMessageEmpty.textContent = 'Field must not be empty';

                } else {
                        errorNameMessageEmpty.textContent = 'Looks Good!';
                        errorNameMessageEmpty.classList.remove("text-danger");
                        errorNameMessageEmpty.classList.add("text-success");
                }

                if (surname.value === '') {
                        event.preventDefault();
                        errorSurnameMessageEmpty.textContent = 'Field must not be empty';

                }else{
                        errorSurnameMessageEmpty.textContent = 'Looks Good!';
                        errorSurnameMessageEmpty.classList.remove("text-danger");
                        errorSurnameMessageEmpty.classList.add("text-success");
                }

                if (address.value === '') {
                        event.preventDefault();
                        errorAddressMessageEmpty.textContent = 'Field must not be empty';

                }else{
                        errorAddressMessageEmpty.textContent = 'Looks Good!';
                        errorAddressMessageEmpty.classList.remove("text-danger");
                        errorAddressMessageEmpty.classList.add("text-success");
                }

                if (city.value === '') {
                        event.preventDefault();
                        errorCityMessageEmpty.textContent = 'Field must not be empty';

                }else{
                        errorCityMessageEmpty.textContent = 'Looks Good!';
                        errorCityMessageEmpty.classList.remove("text-danger");
                        errorCityMessageEmpty.classList.add("text-success");
                }

                if (eMail.value === '') {
                        event.preventDefault();
                        errorEmailMessageEmpty.textContent = 'Field must not be empty';

                }else{
                        errorEmailMessageEmpty.textContent = 'Looks Good!';
                        errorEmailMessageEmpty.classList.remove("text-danger");
                        errorEmailMessageEmpty.classList.add("text-success");
                }

                if (!eMail.value.includes('@')) {
                        event.preventDefault();
                        errorMessageMailFormat.textContent = 'Field must contain a valid e-mail address (ex.: example@example.com)';

                }else{
                        errorMessageMailFormat.textContent = 'Looks Good!';
                        errorMessageMailFormat.classList.remove("text-danger");
                        errorMessageMailFormat.classList.add("text-success");
                }
        });
});



