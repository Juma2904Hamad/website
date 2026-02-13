$(document).ready(function () {

    function showMessage(message, type = 'error') {
        const msgDiv = $('#loginMessage');

        msgDiv.removeClass('error success info').addClass(type);

        if (type === 'info') {
            msgDiv.html(
                '<div class="spinner" style="border:3px solid #f3f3f3;border-top:3px solid #856404;border-radius:50%;width:16px;height:16px;animation:spin 1s linear infinite;margin-right:8px;display:inline-block;"></div>' 
                + message
            );
        } else if (type === 'success') {
            msgDiv.html('<i class="fas fa-check-circle"></i> ' + message);
        } else {
            msgDiv.html('<i class="fas fa-exclamation-circle"></i> ' + message);
        }

        msgDiv.fadeIn();

        if (type !== 'info') {
            setTimeout(() => msgDiv.fadeOut(), 7000);
        }
    }

    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const btn = $('#loginBtn');
        const btnText = btn.find('.btn-text');
        const btnSpinner = btn.find('.btn-spinner');
        const btnSuccessIcon = btn.find('.btn-success-icon');

        $('#formError').hide();
        btn.removeClass('success');
        btnSuccessIcon.hide();

        const formData = {
            email: $('input[name="email"]').val(),
            password: $('input[name="password"]').val(),
            remember: $('input[name="remember"]').is(':checked'),
            _token: $('meta[name="csrf-token"]').attr('content')
        };

        btn.prop('disabled', true);
        btnText.text('Checking credentials...');
        btnSpinner.show();

        showMessage('Checking credentials...', 'info');

        $.ajax({
            url: "/ajax-login",
            type: "POST",
            data: formData,

            success: function (res) {
                if (res.success) {

                    btnSpinner.hide();
                    btnSuccessIcon.show();
                    btnText.text('Success!');
                    btn.addClass('success');

                    showMessage(res.message, 'success');

                    setTimeout(() => {
                        window.location.href = res.redirect;
                    }, 800);

                } else {
                
                    $('#formError')
                        .html('<i class="fas fa-exclamation-circle"></i> ' + (res.message || 'Login failed'))
                        .fadeIn();

                    btn.prop('disabled', false);
                    btnText.text('Login');
                    btnSpinner.hide();
                }
            },

            error: function (xhr) {
                let msg = xhr.responseJSON?.message || 'Invalid email or password';

                $('#formError')
                    .html('<i class="fas fa-exclamation-circle"></i> ' + msg)
                    .fadeIn();

                btn.prop('disabled', false);
                btnText.text('Login');
                btnSpinner.hide();
            }
        });
    });

});

$(document).ready(function () {

    $('#togglePassword').on('click', function () {
        const passwordInput = $('#password');
        const icon = $(this);

        if (passwordInput.attr('type') === 'password') {
            // SHOW password
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            // HIDE password
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

});

