export default {
    logo: {
        altText:
            "Verflochtene DNA-Stränge, die Teil des kreisförmigen Designs bilden, zentriert mit dem App-Namen in einer klaren, lesbaren Schrift. Das Farbschema umfasst Blautöne und Grautöne, die ein professionelles und vertrauenswürdiges Bild vermitteln, das für eine medizinische Anwendung geeignet ist. Das Logo kombiniert visuelle Elemente der Wissenschaft und Medizin und symbolisiert den Fokus der App auf DNA-Methylierungsprofile zur Krebs-Klassifikation."
    },
    footer: {
        contact: "Kontakt",
        imprint: "Impressum",
        privacy: "Datenschutz"
    },
    language: {
        de: "Deutsch",
        en: "Englisch"
    },
    common: {
        darkMode: "Dunkelmodus",
        lightMode: "Hellmodus",
        or: "oder",
        toggleTheme: "Thema wechseln"
    },
    account: {
        email: "E-Mail",
        name: "Name",
        password: "Passwort"
    },
    login: {
        title: "Mit bestehendem Konto anmelden"
    },
    toast: {
        accountCreated: "Ihr Konto wurde erfolgreich erstellt.",
        createAccount: "Konto wird erstellt",
        instructionsSent: "Anweisungen gesendet!",
        loading: "Laden",
        logOut: "Abmelden",
        logOutSuccess: "Sie wurden erfolgreich abgemeldet.",
        nextStep: "Weiter zum nächsten Schritt",
        noData: "Fehler beim Verarbeiten der Dateien. Bitte erneut versuchen.",
        predictionStart: "Vorhersage gestartet",
        predictionSuccessful: "Vorhersage abgeschlossen",
        preStart: "Vorverarbeitung gestartet",
        preSuccessful: "Vorverarbeitung abgeschlossen",
        redirect: "Weiterleiten",
        sendData: "Daten an Server senden",
        sendInstructions: "Anweisungen senden",
        signIn: "Anmelden",
        signInSuccess: "Sie wurden erfolgreich angemeldet.",
        uploading: "Dateien zum Server hochladen",
        uploadSuccess: "Dateien erfolgreich hochgeladen.",
        wait: "Bitte warten"
    },
    errors: {
        unexpectedError: "Ein unerwarteter Fehler ist aufgetreten.",
        tryAgain: "Bitte erneut versuchen."
    },
    validation: {
        name: {
            long: "Ihr Name ist zu lang. Er sollte nicht länger als 50 Zeichen sein.",
            required: "Bitte geben Sie Ihren Namen ein.",
            short: "Ihr Name ist zu kurz. Er sollte mindestens 3 Zeichen lang sein."
        },
        email: {
            invalid:
                "Die eingegebene E-Mail-Adresse ist ungültig. Bitte überprüfen und erneut versuchen.",
            required: "Bitte geben Sie Ihre E-Mail-Adresse ein."
        },
        password: {
            required: "Bitte geben Sie ein Passwort ein.",
            short: "Ihr Passwort ist zu kurz. Es sollte mindestens 8 Zeichen lang sein.",
            weak: "Ihr Passwort ist zu schwach. Bitte verwenden Sie ein stärkeres Passwort mit einer Mischung aus Buchstaben, Zahlen und Symbolen."
        },
        file: {
            failure: "Ausgewählte Dateien konnten nicht hinzugefügt werden.",
            maxFiles: "Sie können maximal 16 Dateien gleichzeitig hochladen.",
            evenNumber: "Bitte laden Sie eine gerade Anzahl von Dateien hoch.",
            required: "Bitte laden Sie eine Datei hoch.",
            size: "Die Dateigröße ist zu groß. Bitte laden Sie eine Datei hoch, die kleiner als 30 MB ist.",
            type: 'Ungültiger Dateityp. Bitte laden Sie nur ".idat"-Dateien hoch.'
        },
        storageMethod: {
            invalid: "Ungültige Speichermethode. Bitte wählen Sie eine der erlaubten Optionen.",
            required: "Bitte wählen Sie eine Speichermethode."
        },
        platform: {
            invalid:
                "Eine ungültige Plattform wurde erkannt. Bitte versuchen Sie es erneut oder kontaktieren Sie den Support."
        }
    },
    buttons: {
        createAccount: "Konto erstellen",
        dashboard: "Aktuelle Sitzung",
        getStarted: "Erste Schritte",
        history: "Sitzungsverlauf",
        logIn: "Anmelden",
        logOut: "Abmelden",
        upload: "Weitere Dateien hochladen",
        predictions: "Vorhersagedetails"
    },

    // API
    api: {
        storageMethod: {
            FFPE: "Formalin-fixiert, Paraffin-eingebettet",
            Frozen: "Frisch gefroren",
            Other: "Andere",
            none: "Nicht definiert"
        },
        platform: {
            "EPIC": "EPIC",
            "EPICv2": "EPICv2",
            "450k": "450k"
        },
        uploadStatus: {
            "csv-uploaded": "Dokumente hochgeladen",
            "pending": "Ausstehend",
            "prediction-running": "Vorhersage läuft",
            "prediction-successful": "Vorhersage erfolgreich",
            "preprocessing-running": "Vorverarbeitung läuft",
            "preprocessing-successful": "Vorverarbeitung erfolgreich",
            "files-uploaded": "Dateien hochgeladen",
            "upload-pending": "Hochladen ausstehend"
        },
        predictionResult: {
            PAAD: "PAAD",
            iCCA: "iCCA",
            normal_bile: "Normale Galle",
            no_match: "Kein Treffer"
        },
        binomialPrediction: {
            positive: "Bestanden",
            negative: "Nicht bestanden"
        }
    },

    // Seiten
    // -- Passwort vergessen
    forgotPassword: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Passwort vergessen?",
        submit: "Passwort zurücksetzen",
        emailSent: "Überprüfen Sie Ihren Posteingang.",
        instructions: "Eine E-Mail mit Anweisungen wurde an Ihre E-Mail-Adresse gesendet."
    },
    // -- Registrieren
    register: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Konto erstellen",
        submit: "Jetzt registrieren",
        signIn: "Anmelden"
    },
    // -- Startseite
    home: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        user: {
            title: "Willkommen zurück, {name}",
            description:
                "Sie können Ihre Dateien hier hochladen und unsere Dienstleistungen nutzen."
        },
        noUser: {
            title: "Willkommen zu unserem Projekt",
            description:
                "Bitte melden Sie sich an oder erstellen Sie ein Konto, um unsere Dienstleistungen zu nutzen."
        },
        faq: {
            title: "Häufig gestellte Fragen",
            description: "Hier sind einige häufige Fragen und Antworten.",
            item1: {
                title: "Frage 1",
                content: "Antwort auf Frage 1."
            },
            item2: {
                title: "Frage 2",
                content: "Antwort auf Frage 2."
            },
            item3: {
                title: "Frage 3",
                content: "Antwort auf Frage 3."
            },
            item4: {
                title: "Frage 4",
                content: "Antwort auf Frage 4."
            }
        }
    },
    // -- Hochladen
    upload: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Hallo, {name}",
        dropzone: {
            title: "Klicken Sie, um Dateien hochzuladen oder ziehen Sie sie hierher.",
            subtext: 'Nur ".idat"-Dateien erlaubt. Maximal 16 Dateien.',
            submit: "Dateien hochladen"
        }
    },
    // -- Dashboard
    dashboard: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Hallo, {name}",
        table: {
            title: "Liste der aktuellen Dokumente",
            caption: "Alle Dateipaare in dieser Sitzung",
            columns: {
                name: "Dateipaar",
                status: "Status",
                date: "Datum",
                method: "Methode",
                platform: "Plattform"
            }
        },
        progress: {
            title: "Dateien werden verarbeitet.",
            subtitle: "Bitte warten Sie. Dies kann bis zu fünf Minuten dauern."
        },
        prediction: {
            title: "Vorhersageprozess gestartet",
            subtitle:
                "Bitte warten Sie, während wir Ihre Dateien analysieren. Dies kann einige Minuten dauern."
        }
    },
    // -- Verlauf
    history: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Hallo, {name}",
        table: {
            title: "Liste der letzten Sitzungen",
            caption: "Keine Vorhersage verfügbar für dieses Sitzung",
            columns: {
                name: "Dateipaar",
                status: "Status",
                date: "Datum",
                method: "Methode",
                platform: "Plattform"
            }
        }
    },
    // -- Results
    results: {
        seo: {
            title: "Krebs-Klassifikator",
            description:
                "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um die Art des Krebses zu bestimmen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Hallo, {name}",
        table: {
            caption: "Sitzung vom {date}",
            columns: {
                name: "Dateipaar",
                prediction: "Vorhersage",
                binomialScorePositive: "Binomialer Score Positiv",
                nnScoreNormalBile: "NN Score Normal Bile",
                nnScorePaad: "NN Score Paad",
                nnScoreiCCA: "NN Score iCCA",
                binomial_prediction: "Binomiale Vorhersage"
            }
        }
    }
};
