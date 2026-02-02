document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       DOM ELEMENTS
       ========================================= */
    const overlayDisclaimer = document.getElementById('disclaimer-overlay');

    // VIEWS
    const viewEmail = document.getElementById('view-email');
    const viewLogin = document.getElementById('view-login');
    const viewAlert = document.getElementById('view-alert');

    // BUTTONS
    const btnAcceptDisclaimer = document.getElementById('btn-accept-disclaimer');
    const btnVerifyLink = document.getElementById('btn-verify-link');
    const btnRestart = document.getElementById('btn-restart');

    // LOGIN STEPS (New Split Flow)
    const stepEmail = document.getElementById('login-step-email');
    const stepPassword = document.getElementById('login-step-password');

    const formEmailStep = document.getElementById('form-email-step');
    const formPasswordStep = document.getElementById('form-password-step');

    const inputEmail = document.getElementById('email-step-input');
    const inputPassword = document.getElementById('password-step-input');

    // User Chip Elements
    const displayEmail = document.getElementById('display-email');
    const userChipWrapper = document.getElementById('user-chip-wrapper');
    const checkShowPassword = document.getElementById('show-password-check');

    // FEEDBACK & PROGRESS
    const feedbackArea = document.getElementById('auth-feedback');
    const errorMsg = document.getElementById('error-msg');
    const loadingMsg = document.getElementById('loading-msg');
    const progressBar = document.getElementById('login-progress-bar');

    // We target the submit button of the password form for disabling
    const btnPasswordSubmit = formPasswordStep.querySelector('button[type="submit"]');

    /* =========================================
       STATE MANAGEMENT
       ========================================= */

    function showView(viewElement) {
        // Hide all main views
        [viewEmail, viewLogin, viewAlert].forEach(el => {
            el.classList.add('hidden');
        });

        // Show target
        viewElement.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function resetLoginFlow() {
        // Reset inputs
        formEmailStep.reset();
        formPasswordStep.reset();

        // Reset steps visibility
        stepEmail.classList.remove('hidden');
        stepPassword.classList.add('hidden');

        // Reset feedback
        feedbackArea.classList.add('hidden');
        errorMsg.classList.add('hidden');
        loadingMsg.classList.add('hidden');
        if (progressBar) progressBar.classList.add('hidden');
        if (btnPasswordSubmit) btnPasswordSubmit.disabled = false;
    }

    /* =========================================
       EVENT LISTENERS
       ========================================= */

    // 1. DISCLAIMER
    btnAcceptDisclaimer.addEventListener('click', () => {
        overlayDisclaimer.style.opacity = '0';
        setTimeout(() => {
            overlayDisclaimer.classList.add('hidden');
            showView(viewEmail);
        }, 300);
    });

    // 2. OPEN LOGIN (Simulator)
    btnVerifyLink.addEventListener('click', () => {
        resetLoginFlow();
        showView(viewLogin);
    });

    // 3. EMAIL STEP SUBMIT -> GO TO PASSWORD STEP
    formEmailStep.addEventListener('submit', (e) => {
        e.preventDefault();
        if (inputEmail.checkValidity()) {
            // "Next" clicked
            const emailValue = inputEmail.value;
            displayEmail.textContent = emailValue; // Update User Chip

            // Switch Steps
            stepEmail.classList.add('hidden');
            stepPassword.classList.remove('hidden');

            // Auto focus password
            setTimeout(() => inputPassword.focus(), 100);
        } else {
            // Trigger browser validation UI
            formEmailStep.reportValidity();
        }
    });

    // 4. USER CHIP CLICK -> GO BACK TO EMAIL
    userChipWrapper.addEventListener('click', () => {
        stepPassword.classList.add('hidden');
        stepEmail.classList.remove('hidden');
        inputEmail.focus();
    });

    // 5. SHOW PASSWORD TOGGLE
    checkShowPassword.addEventListener('change', (e) => {
        inputPassword.type = e.target.checked ? 'text' : 'password';
    });

    // 6. PASSWORD STEP SUBMIT -> PHISHING SEQUENCE
    formPasswordStep.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!inputPassword.value) {
            inputPassword.focus();
            return;
        }

        // START THE TRAP
        startPhishingSequence();
    });

    // 7. RESTART
    btnRestart.addEventListener('click', () => {
        resetLoginFlow();
        showView(viewEmail); // or Disclaimer
    });


    /* =========================================
       PHISHING SIMULATION LOGIC
       ========================================= */
    function startPhishingSequence() {
        btnPasswordSubmit.disabled = true;

        // Phase 1: Processing - Show Top Progress Bar
        progressBar.classList.remove('hidden');

        // Hide specific text messages for now
        loadingMsg.classList.add('hidden');
        errorMsg.classList.add('hidden');

        // Show the feedback container if needed, but if we are just using the bar, 
        // we might not need the bottom area yet.
        // However, if we want to mimic the "Verification failed" later, we'll need it.
        feedbackArea.classList.add('hidden');

        setTimeout(() => {
            // Phase 2: Fake Error
            progressBar.classList.add('hidden'); // Stop bar

            feedbackArea.classList.remove('hidden'); // Show bottom area
            errorMsg.classList.remove('hidden'); // Show error text

            setTimeout(() => {
                // Phase 3: ALERT
                showView(viewAlert);
                btnPasswordSubmit.disabled = false; // reset for next time
            }, 2000);

        }, 1500);
    }

    /* =========================================
       INIT
       ========================================= */
    overlayDisclaimer.classList.remove('hidden');
    viewEmail.classList.add('hidden');
    viewLogin.classList.add('hidden');
    viewAlert.classList.add('hidden');
});
