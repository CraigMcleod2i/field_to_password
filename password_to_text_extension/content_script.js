// content_script.js

let isPasswordConverted = false;

// Function to convert password fields to text fields
function convertPasswordToText() {
    if (!isPasswordConverted) {
        var passwordFields = document.querySelectorAll('input[type="password"]');
        passwordFields.forEach(function(field) {
            field.classList.add('passwordToggle');
            field.type = 'text';
        });
        isPasswordConverted = true;
    } else {
        var passwordToggle = document.querySelectorAll('input.passwordToggle');
        passwordToggle.forEach(function(field) {
            if (field.type === 'password') {
                field.type = 'text';
            } else {
                field.type = 'password';
            }
        });
    }
}

// Listen for a message from the background script to convert password fields to text fields
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'convertPasswordToText') {
        convertPasswordToText();
    }
});
