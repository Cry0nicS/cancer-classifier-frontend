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
            description: "You can use our services, upload new files, or check previous sessions."
        },
        noUser: {
            title: "Welcome to our project",
            description: "Please sign in or create an account to use our services."
        },
        faq: {
            title: "Frequently Asked Questions",
            description: "Check these questions for information about our service.",
            item1: {
                title: "What is the workflow of the Cancer Classifier?",
                content:
                    "**Our Cancer Classifier processes `.idat` files and classifies them into one of four categories: PAAD, iCCA, Normal Bile, or No Match.**\n" +
                    "The prediction workflow involves the following four steps: \n" +
                    "1. **Upload `.idat` Files:**\n" +
                    "   - The classifier accepts files generated by 450k, EPIC, and EPICv2 platforms.\n" +
                    "   - It can handle up to 8 samples simultaneously, requiring a total of 16 files (both `_Red` and `_Grn` for each sample).\n" +
                    "   - Ensure your file names follow this format: `*_XXXXXX_Red.idat` or `*_XXXXXX_Grn.idat`. For example, a correct filename would be `OPTIONAL_NAME_206702460068_R03C01_Red.idat`.\n\n" +
                    "2. **Specify Sample Storage Type:**\n" +
                    "   - Indicate whether the sample was stored in FFPE or Fresh Frozen. This information is crucial for enhancing model accuracy due to the significant batch effect that material storage has on DNA methylation data.\n\n" +
                    "3. **Wait for Prediction:**\n" +
                    "   - The prediction process may take up to 10 minutes. Please be patient while the model runs the analysis.\n" +
                    "4. **Check Results:**\n" +
                    "   - Once the analysis is complete, you will receive the prediction label along with the probability scores for each class. This detailed output helps in understanding the confidence of the classifier in its predictions.\n" +
                    "   - Feel free to reach out to our support team if you have any further questions or need assistance with the process."
            },
            item2: {
                title: "What files does the classifier accept?",
                content:
                    "The classifier operates through two main pipelines: the pre-processing pipeline and the prediction pipeline.\n" +
                    "**Pre-processing Pipeline:**\n\n" +
                    "   - The pre-processing pipeline reads the `.idat` files, extracts beta values, and normalizes these values using FunNorm and BMIQ.\n" +
                    "   - From the normalized beta values, the relevant CpGs used by the prediction pipeline are extracted and passed forward.\n\n" +
                    "**Prediction Pipeline:**\n" +
                    "   The prediction pipeline involves three steps:\n\n" +
                    "1. **Batch Effect Normalization:**\n" +
                    "   - This is done using reCombat to adjust for any batch effects.\n\n" +
                    "2. **Binomial Classifier:**\n" +
                    "   - A neural network ensemble trained to determine if the provided sample is PAAD, iCCA, normal bile tissue, or a different tissue.\n" +
                    "   - Samples that do not match PAAD, iCCA, or normal bile tissue are labeled as 'No Match.'\n\n" +
                    "3. **PAAD / iCCA / Normal Bile Classifier:**\n" +
                    "   - A neural network that assigns probability scores to the three classes: PAAD, iCCA, and normal bile.\n" +
                    "   - For a class to be the final label, its score must be above 80%. If none of the three classes reaches this threshold, the label 'No Match' is assigned.\n\n" +
                    "This detailed process ensures the accurate classification of the samples, providing both prediction labels and probability scores for better interpretability.\n\n" +
                    "For more information please refer to our publications."
            },
            item3: {
                title: "Publications",
                content:
                    "The classifier is based on the following publications:\n" +
                    "  - DNA methylation-based classifier differentiates intrahepatic pancreato-biliary tumours\n" +
                    "  - [Available here](https://www.sciencedirect.com/science/article/pii/S2352396423002220)"
            },
            item4: {
                title: "Who are we and why we do this?",
                content:
                    "  - This website was established by **Dr. Dragomir** and **T.G. Calina** to provide access to the models published in their research. Our goal is to make these tools accessible to other researchers interested in testing them out. We believe our tool can be highly useful in specific cases and aim to simplify its usage.\n" +
                    "  - The website is hosted and developed by **T.G. Calina** as a hobby project, not affiliated with any institution. Currently, the infrastructure costs are low enough to fall within the free tier of our cloud service provider. This is why the prediction pipeline may be slow and the number of samples that can be processed simultaneously is limited.\n" +
                    "  - In the future, any increase in costs due to higher traffic will be covered privately by **T.G. Calina**. There are no commercial interests; this is a pro-bono effort to support the research community.\n" +
                    "  - We review potential users before granting access to the tool to prevent resource abuse and ensure users understand the results produced by the tool.\n"
            },
            item5: {
                title: "How long does the prediction process take?",
                content:
                    "The prediction process may take up to 10 minutes. Please be patient while the model runs the analysis."
            },
            item6: {
                title: "What support is available if I have questions?",
                content:
                    "Feel free to reach out to our support team if you have any further questions or need assistance with the process. We are here to help you understand and utilize the Cancer Classifier effectively."
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
        title: "Our privacy policy"
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
