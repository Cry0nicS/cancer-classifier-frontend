export default {
    logo: {
        altText:
            "Intertwined DNA strands forming part of the circular design, centered with the app name in a clean, readable font. The color scheme includes shades of blue and gray, conveying a professional and trustworthy image suitable for a medical application. The logo combines visual elements of science and medicine, symbolizing the app's focus on DNA methylation profiles for cancer classification."
    },
    footer: {
        aboutUs: "About us",
        contact: "Contact",
        eula: "EULA",
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
        password: "Password",
        aboutMe: "About me",
        aboutMePlaceholder: "Tell us something about yourself",
        charactersLeft: "{count} / {max} characters left",
        verification: {
            title: "Account Verification",
            subtitle:
                "Your account has been created and is currently being validated by our staff.",
            info: "This process can take up to 24 hours. Once your account is validated, you will be able to use all the functions of our website.",
            urgent: "If you need to expedite this process, please email us at",
            email: "support{'@'}tgc-research.de"
        }
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
        tryAgain: "Please try again.",
        accountDisabled: "Your account has not been activated."
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
        aboutMe: {
            long: "Your description is too long. It should be no more than 1000 characters.",
            required: "Please enter a description."
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
    buttons: {
        goBack: "Return to home page",
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
            FFPE: "FFPE",
            Frozen: "Fresh Frozen",
            Other: "Other",
            none: "Not defined"
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
    // -- About us
    aboutUs: {
        seo: {
            title: "About us",
            description:
                "Learn more about the team behind the research models and tools available on our website. Our mission is to support the research community with accessible and reliable tools.",
            image: "/og-image.webp",
            imageAlt: "Research team working on models"
        },
        title: "About us"
    },
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
        instructions:
            "An email with instructions to reset your password has been sent to your email address."
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
        signIn: "Sign in",
        disclaimer: {
            title: "Disclaimer",
            privacyText: "By registering, you agree to our {privacy} and {eula}.",
            privacyUrl: "Privacy Policy",
            eulaUrl: "End User License Agreement (EULA)",
            purpose:
                "You are aware that the Classifier is a research tool only and should not be used for diagnostic purposes."
        }
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
            description: "You can use our services, upload new files, or check previous sessions."
        },
        noUser: {
            title: "PAAD vs iCCA classifier",
            description: "Please sign in or create an account to use our services."
        },
        faq: {
            title: "Frequently Asked Questions",
            description: "Check these questions for information about our service.",
            item1: {
                title: "What is the Cancer Classifier?",
                content:
                    "The Cancer Classifier is a genome-wide DNA methylation-based neural network classifier that can differentiate between pancreatic ductal adenocarcinoma of primary and metastatic origin, intrahepatic cholangiocarcinoma and normal bile tissue.\n\n" +
                    "Classification using methylation profiling is intended for research use only. This tool has not been verified or clinically validated and must not be used for diagnostic purposes. Users should consult with a qualified healthcare provider for any health concerns or conditions. The developers of the Cancer Classifier disclaim any responsibility for the misuse of this tool for diagnostic purposes."
            },
            item2: {
                title: "How do I create an account?",
                content:
                    "To create an account, you'll need to provide your name, email, and password. Additionally, include a brief description about yourself to help us prevent misuse of the classifier.\n\n" +
                    "**Note** that your account will only become **active** once approved by a team member.\n\n" +
                    "This service is provided free of charge."
            },
            item3: {
                title: "How does the Cancer Classifier work?",
                content:
                    "The Cancer Classifier processes `.idat` files and categorizes them into one of four groups: PAAD, iCCA, Normal Bile, or No Match. The workflow involves two main pipelines: the pre-processing pipeline and the prediction pipeline.\n\n" +
                    "**Pre-Processing Pipeline:**\n\n" +
                    "- The pre-processing pipeline reads the `.idat` files, extracts beta values, and normalizes these values using FunNorm and BMIQ.\n\n" +
                    "- From the normalized beta values, the relevant CpGs used by the prediction pipeline are extracted and passed forward.\n\n" +
                    "**Prediction Pipeline:**\n\n" +
                    "1. **Batch Effect Normalization:**\n" +
                    "   - Adjusts for any batch effects using reCombat.\n\n" +
                    "2. **Binomial Classifier:**\n" +
                    "   - A neural network ensemble determines if the sample is PAAD, iCCA, normal bile tissue, or a different tissue. Samples not matching PAAD, iCCA, or normal bile tissue are labeled as 'No Match.'\n\n" +
                    "3. **PAAD / iCCA / Normal Bile Classifier:**\n" +
                    "   - Assigns probability scores to the three classes: PAAD, iCCA, and normal bile. For a class to be the final label, its score must exceed 80%. If none of the classes reach this threshold, the label 'No Match' is assigned.\n\n" +
                    "For more information, please refer to our publications."
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
        },
        disclaimer: {
            title: "Disclaimer",
            description:
                "The results generated by the Cancer Classifier should be used for research only and must not be used for diagnostic purposes."
        }
    },
    // -- Privacy
    privacy: {
        seo: {
            title: "Policy | Secure Cancer Classifier Tools",
            description:
                "Discover how we protect and manage your data with our comprehensive privacy policy. Learn about our secure handling of .idat files and personal information while using our cancer classification tools on our dedicated platform.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Data Privacy Policy"
    },
    // -- EULA
    eula: {
        seo: {
            title: "EULA | Terms of Service for Cancer Classifier",
            description: "End User License Agreement (EULA)",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "End User License Agreement (EULA)"
    },
    // -- Contact
    contact: {
        seo: {
            title: "Contact Us | TGC Ventures UG",
            description:
                "Reach out to TGC Ventures UG for inquiries or feedback. Contact us via email for prompt support. We look forward to assisting you with your questions and providing the information you need.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Contact Us"
    },
    // -- Imprint
    imprint: {
        seo: {
            title: "Imprint | Legal Notice of TGC Ventures UG",
            description:
                " Access the official legal notice (Impressum) of TGC Ventures UG. Find comprehensive contact details, registration information, and responsibility for content as required under German law.",
            image: "/og-image.webp",
            imageAlt:
                "A wide-format Open Graph image for social media, showcasing an abstract design of intertwined DNA strands and cellular structures. The color palette features various shades of blues and grays, emphasizing a clean and professional look. The image is designed to visually represent the theme of DNA methylation and cancer classification, without any text or logos, offering a purely graphical depiction."
        },
        title: "Legal Notice"
    }
};
