export default {
    logo: {
        altText:
            "Intertwined DNA strands forming part of the circular design, centered with the app name in a clean, readable font. The color scheme includes shades of blue and gray, conveying a professional and trustworthy image suitable for a medical application. The logo combines visual elements of science and medicine, symbolizing the app's focus on DNA methylation profiles for cancer classification."
    },
    footer: {
        contact: "Contact",
        imprint: "Imprint",
        privacy: "Privacy"
    },
    language: {
        de: "German",
        en: "English"
    },
    common: {
        darkMode: "Dark mode",
        lightMode: "Light mode",
        or: "or",
        toggleTheme: "Toggle theme"
    },
    account: {
        email: "Email",
        name: "Name",
        password: "Password"
    },
    login: {
        title: "Log in with an existing account"
    },
    toast: {
        accountCreated: "Your account has been created successfully.",
        createAccount: "Creating your account",
        instructionsSent: "Instructions sent!",
        loading: "Loading",
        logOut: "Signing out",
        logOutSuccess: "You have been signed out successfully.",
        nextStep: "Proceeding to the next step",
        noData: "Error while parsing the files. Please try again.",
        predictionStart: "Prediction started",
        predictionSuccessful: "Prediction finished",
        preStart: "Preprocessing started",
        preSuccessful: "Preprocessing complete",
        redirect: "Redirecting",
        sendData: "Sending data to server",
        sendInstructions: "Sending instructions",
        signIn: "Signing in",
        signInSuccess: "You have been signed in successfully.",
        uploading: "Uploading files to server",
        uploadSuccess: "Files uploaded successfully.",
        wait: "Please wait"
    },
    errors: {
        unexpectedError: "An unexpected error occurred.",
        tryAgain: "Please try again."
    },
    validation: {
        name: {
            long: "Your name is too long. It should be no more than 50 characters.",
            required: "Please enter your name.",
            short: "Your name is too short. It should be at least 3 characters."
        },
        email: {
            invalid: "The email address you entered is invalid. Please check it and try again.",
            required: "Please enter your email address."
        },
        password: {
            required: "Please enter a password.",
            short: "Your password is too short. It should be at least 8 characters.",
            weak: "Your password is too weak. Please use a stronger password that includes a mix of letters, numbers, and symbols."
        },
        file: {
            failure: "Selected files could not be added.",
            maxFiles: "You can upload maximum 16 files at a time.",
            evenNumber: "Please upload files in pairs.",
            required: "Please upload a file.",
            size: "File size is too large. Please upload a file smaller than 30 MB.",
            type: 'Invalid file type. Please upload only ".idat" files.'
        },
        storageMethod: {
            invalid: "Invalid storage method. Please select one of the allowed options.",
            required: "Please select a storage method."
        },
        platform: {
            invalid: "An invalid platform has been detected. Please try again or contact support."
        }
    },
    material: {
        ffpe: "Formalin-Fixed, Paraffin-Embedded",
        freshFrozen: "Fresh Frozen",
        none: "Not defined",
        other: "Other"
    },
    buttons: {
        createAccount: "Create an account",
        dashboard: "Current session",
        getStarted: "Get started",
        history: "Session history",
        logIn: "Log in",
        logOut: "Log out",
        upload: "Upload more files",
        predictions: "Prediction details"
    },

    // API
    api: {
        storageMethod: {
            FFPE: "Formalin-Fixed, Paraffin-Embedded",
            Frozen: "Fresh Frozen",
            Other: "Other"
        },
        platform: {
            "EPIC": "EPIC",
            "EPICv2": "EPICv2",
            "450k": "450k"
        },
        uploadStatus: {
            "csv-uploaded": "Documents uploaded",
            "pending": "Pending",
            "prediction-running": "Prediction running",
            "prediction-successful": "Prediction successful",
            "preprocessing-running": "Preprocessing running",
            "preprocessing-successful": "Preprocessing successful",
            "files-uploaded": "Files uploaded",
            "upload-pending": "Upload pending"
        },
        predictionResult: {
            PAAD: "PAAD",
            iCCA: "iCCA",
            normal_bile: "Normal bile",
            no_match: "No match"
        },
        binomialPrediction: {
            positive: "Pass",
            negative: "Fail"
        }
    },

    // Pages
    // -- Forgotten password
    forgotPassword: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Forgot your password?",
        submit: "Reset password",
        emailSent: "Check your inbox.",
        instructions: "An email with instructions has been sent to your email address."
    },
    // -- Register
    register: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Create an account",
        submit: "Register now",
        signIn: "Sign in"
    },
    // -- Index
    home: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        user: {
            title: "Welcome back, {name}",
            description: "You can upload your files and use our services here."
        },
        noUser: {
            title: "Welcome to our project",
            description: "Please sign in or create an account to use our services."
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
    // -- Upload
    upload: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Hello, {name}",
        dropzone: {
            title: "Click to upload or drag & drop files.",
            subtext: 'Only ".idat" files allowed. Maximum 16 files.',
            submit: "Upload files"
        }
    },
    // -- Dashboard
    dashboard: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Hello, {name}",
        table: {
            title: "List of recent documents",
            caption: "All file pairs in this session",
            columns: {
                name: "File pair",
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
        }
    },
    // -- History
    history: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Hello, {name}",
        table: {
            title: "List of recent sessions",
            caption: "No prediction available for this session",
            columns: {
                name: "File pair",
                status: "Status",
                date: "Date",
                method: "Method",
                platform: "Platform"
            }
        }
    },
    // -- Results
    results: {
        seo: {
            title: "Cancer Classifier",
            description:
                "We use DNA methylation profiles and an ML classifier to determine what kind of cancer it is.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Hello, {name}",
        table: {
            caption: "Session started {date}",
            columns: {
                name: "File pair",
                prediction: "Prediction",
                binomialScorePositive: "Binomial Score Positive",
                nnScoreNormalBile: "NN Score Normal Bile",
                nnScorePaad: "NN Score Paad",
                nnScoreiCCA: "NN Score iCCA",
                binomial_prediction: "Binomial Prediction"
            }
        }
    }
};
