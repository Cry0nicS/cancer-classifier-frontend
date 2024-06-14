export default {
    "logo.alt_text":
        "Intertwined DNA strands forming part of the circular design, centered with the app name in a clean, readable font. The color scheme includes shades of blue and gray, conveying a professional and trustworthy image suitable for a medical application. The logo combines visual elements of science and medicine, symbolizing the app's focus on DNA methylation profiles for cancer classification.",

    // SEO metadata.
    "seo.title": "Cancer Classifier",
    "seo.description":
        "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
    "seo.image": "/og-image.webp",
    "seo.image.alt":
        "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction.",

    //  Footer.
    "footer.contact": "Contact",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
    "footer.privacy_settings": "Privacy settings",

    "language.de": "German",
    "language.en": "English",

    // General keywords
    "or": "or",
    "loading": "Loading",
    "toggleTheme": "Toggle theme",
    "darkMode": "Dark mode",
    "lightMode": "Light mode",
    "toggleLocale": "Toggle language",

    // Account
    "name": "Name",
    "email": "Email",
    "password": "Password",

    // Login
    "login": {
        title: "Log in with an existing account",
        login: "Log in",
        logout: "Log out",
        loading: "Signing in...",
        loadingSuccess: "You have been signed in successfully.",
        register: "Create an account"
    },

    "logout": {
        title: "Log out",
        loading: "Signing out...",
        loadingSuccess: "You have been signed out successfully."
    },

    //Forgot Password
    "forgot-password": {
        title: "Forgot your password?",
        submit: "Reset password",
        loading: "Sending instructions...",
        loadingSuccess: "Instructions sent!",
        emailSent: "Check your inbox.",
        instructions: "An email with instructions has been sent to your email address."
    },

    // Errors
    "errors": {
        "user-not-found": "No user found with this email. Please register first.",
        "wrong-password": "Incorrect password. Please try again.",
        "too-many-requests": "Too many attempts. Please try again later.",
        "invalid-email": "Invalid email format.",
        "default-error": "Login failed with error code: {code}",
        "unexpected-error": "An unexpected error occurred. Please try again."
    },

    // Register
    "register": {
        title: "Create an account",
        register: "Register",
        signIn: "Sign in",
        loading: "Creating your account...",
        loadingSuccess: "Your account has been created successfully."
    },

    // Validation messages.
    "validation": {
        name: {
            required: "Please enter your name.",
            short: "Your name is too short. It should be at least 3 characters.",
            long: "Your name is too long. It should be no more than 50 characters."
        },
        email: {
            required: "Please enter your email address.",
            invalid: "The email address you entered is invalid. Please check it and try again."
        },
        password: {
            required: "Please enter a password.",
            short: "Your password is too short. It should be at least 8 characters.",
            weak: "Your password is too weak. Please use a stronger password that includes a mix of letters, numbers, and symbols."
        },
        file: {
            required: "Please upload a file.",
            type: 'Invalid file type. Please upload only ".idat" files.',
            size: "File size is too large. Please upload a file smaller than 30 MB.",
            maxFiles: "You can only upload two file at a time.",
            failure: "Selected files could not be added"
        },
        storageMethod: {
            required: "Please select a storage method.",
            invalid: "Invalid storage method. Please select one of the allowed options."
        },
        platform: {
            invalid: "An invalid platform has been detected. Please try again or contact support."
        }
    },

    // Homepage

    "home": {
        user: {
            title: "Welcome back, {name}",
            description: "You can upload your files and use our services here.",
            button: "Get started"
        },
        noUser: {
            title: "Welcome to our lil' project",
            description: "Please sign in or create an account to be able to user our services."
        },
        faq: {
            title: "Frequently Asked Questions",
            description: "Here are some common questions and answers.",
            item1: {
                title: "Question 1",
                content: "Answer to question 1."
            },
            item2: {
                title: "Question 2",
                content: "Answer to question 2."
            },
            item3: {
                title: "Question 3",
                content: "Answer to question 3."
            },
            item4: {
                title: "Question 4",
                content: "Answer to question 4."
            }
        }
    },

    // Upload
    "upload": {
        title: "Hello, {name}",
        description: "Upload your files here.",
        buttons: {
            dashboard: "Dashboard",
            history: "History"
        },
        loading: "Uploading...",
        loadingSuccess: "Files uploaded successfully.",
        dropzone: {
            title: "Click to upload or drag & drop files.",
            subtext: 'Only ".idat" files allowed. Maximum 2 files',
            submit: "Upload files"
        }
    },

    // Dashboard
    "dashboard": {
        title: "Hello, {name}",
        buttons: {
            upload: "Upload more files",
            refresh: "Refresh document status",
            history: "Session history"
        },
        table: {
            title: "List of recent documents",
            caption: "All file pairs in this session",
            columns: {
                name: "Files pair",
                status: "Status",
                date: "Date",
                method: "Method",
                platform: "Platform"
            }
        },
        progress: {
            title: "Files are being processed.",
            subtitle: "Please wait. This might take up to five minutes."
        },
        prediction: {
            title: "Prediction process started",
            subtitle: "Please wait while we analyze your files. This may take a few minutes."
        },
        loading: {
            wait: "Please wait",
            start: "Sending data to server",
            preStart: "Preprocessing started",
            preSuccessful: "Preprocessing complete",
            predictionStart: "Prediction started",
            predictionSuccessful: "Prediction finished",
            redirect: "Redirecting",
            noData: "Error while parsing the files. Please try again."
        }
    },

    // Uncategorized
    "material": {
        ffpe: "Formalin-Fixed, Paraffin-Embedded",
        freshFrozen: "Fresh Frozen",
        other: "Other",
        none: "Not defined"
    },

    // History
    "history": {
        title: "Hello, {name}",
        buttons: {
            upload: "Upload more files",
            dashboard: "Current session"
        },
        table: {
            title: "List of recent sessions",
            caption: "All file pairs in this session",
            columns: {
                name: "Files pair",
                status: "Status",
                date: "Date",
                method: "Method",
                platform: "Platform"
            }
        }
    }
};
