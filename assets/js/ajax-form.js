(function ($) {
    'use strict';
    var form = $('.contact-form'),
        message = $('.messenger-box-contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text('Thank you! Your message has been sent successfully.');
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text('Sorry, there was a problem sending your message. Please try again.');
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
    }
    
    form.submit(function (e) {
        e.preventDefault();

        // Basic form validation
        const fullName = document.getElementById("full-name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const messageText = document.getElementById("message");

        if (!fullName.value || !email.value || !subject.value || !messageText.value) {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text('Please fill in all required fields.');
            return false;
        }

        // Submit form via Formspree
        form_data = $(this).serialize();
        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form_data,
            dataType: 'json'
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);

$(document).ready(function() {
    // Contact Form Submission
    $('#submit-form').on('click', function(e) {
        e.preventDefault();
        var form = $(this).closest('form');
        
        // Basic form validation
        var isValid = true;
        form.find('[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (!isValid) {
            $('.messenger-box-contact__msg').removeClass('alert-success').addClass('alert-danger').html('Please fill in all required fields.').show();
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer.php",
            data: form.serialize(),
            success: function(response) {
                $('.messenger-box-contact__msg').removeClass('alert-danger').addClass('alert-success').html(response).show();
                form.trigger('reset');
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.responseText || 'Sorry, there was an error sending your message. Please try again later.';
                if (xhr.status === 405) {
                    errorMessage = 'Server configuration error. Please contact the administrator.';
                }
                $('.messenger-box-contact__msg').removeClass('alert-success').addClass('alert-danger').html(errorMessage).show();
                console.error('Form submission error:', status, error);
            }
        });
    });

    // Clear error state on input
    $('form input, form textarea').on('input', function() {
        $(this).removeClass('error');
        $('.messenger-box-contact__msg').hide();
    });
});