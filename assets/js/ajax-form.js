(function ($) {
    'use strict';
    var form = $('.contact-form'),
        message = $('.messenger-box-contact__msg');

    // Update reply-to field when email changes
    $('#email').on('change', function() {
        $('input[name="_replyto"]').val($(this).val());
    });

    // Success function
    function showSuccess() {
        console.log('Success: Form submission successful');
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text('Thank you! Your message has been sent successfully.');
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
        form.find('input:not([type="hidden"]), textarea, select').val('');
    }

    // Error function
    function showError(errorMsg, details) {
        console.error('Form Error:', errorMsg, details);
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(errorMsg || 'Sorry, there was a problem sending your message. Please try again.');
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
    }
    
    // Form submission handler
    form.submit(function (e) {
        e.preventDefault();
        console.log('Form submission started');

        // Set reply-to field
        $('input[name="_replyto"]').val($('#email').val());

        // Log form data
        const formData = new FormData(form[0]);
        console.log('Form action URL:', form.attr('action'));
        console.log('Form data:');
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // Basic form validation
        var isValid = true;
        form.find('[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('error');
                console.log('Validation failed for:', $(this).attr('name'));
            } else {
                $(this).removeClass('error');
            }
        });

        if (!isValid) {
            showError('Please fill in all required fields.');
            return false;
        }

        // Show loading state
        var submitButton = $('#submit-form');
        var originalText = submitButton.text();
        submitButton.prop('disabled', true).text('Sending...');
        console.log('Form validation passed, attempting submission');

        // Submit form via Formspree
        fetch(form.attr('action'), {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            
            return response.text().then(text => {
                try {
                    // Try to parse as JSON
                    const data = JSON.parse(text);
                    console.log('Response data:', data);
                    return response;
                } catch (e) {
                    // If not JSON, log as text
                    console.log('Response text:', text);
                    return response;
                }
            });
        })
        .then(response => {
            if (response.ok) {
                showSuccess();
                form.trigger('reset');
            } else {
                throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
            }
        })
        .catch(error => {
            console.error('Detailed submission error:', {
                message: error.message,
                stack: error.stack,
                type: error.name
            });
            showError('There was a problem sending your message. Please try again.', error);
        })
        .finally(() => {
            // Reset button state
            console.log('Form submission completed');
            submitButton.prop('disabled', false).text(originalText);
        });
    });
    
    // Clear error state on input
    $('form input, form textarea, form select').on('input change', function() {
        $(this).removeClass('error');
        message.hide();
    });
    
})(jQuery);