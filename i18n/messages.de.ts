export default {
    "logo.alt_text":
        "Verflochtene DNA-Stränge, die Teil des kreisförmigen Designs bilden, zentriert mit dem App-Namen in einer sauberen, gut lesbaren Schriftart. Das Farbschema umfasst Blau- und Grautöne, die ein professionelles und vertrauenswürdiges Bild vermitteln, passend für eine medizinische Anwendung. Das Logo kombiniert visuelle Elemente aus Wissenschaft und Medizin und symbolisiert den Fokus der App auf DNA-Methylierungsprofile zur Krebsklassifikation.",

    // SEO metadata.
    "seo.title": "Cancer Classifier",
    "seo.description":
        "Wir verwenden DNA-Methylierungsprofile und einen ML-Klassifikator, um zu bestimmen, um welche Art von Krebs es sich handelt.",
    "seo.image": "/og-image.webp",
    "seo.image.alt":
        "Ein breitformatiges Open Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und zellulären Strukturen zeigt. Die Farbpalette umfasst verschiedene Blau- und Grautöne und betont ein sauberes und professionelles Erscheinungsbild. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebsklassifikation visuell darstellt, ohne Text oder Logos, und bietet eine rein grafische Darstellung.",

    // Footer.
    "footer.contact": "Kontakt",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.privacy_settings": "Datenschutzeinstellungen",

    "language.de": "Deutsch",
    "language.en": "Englisch",

    // General keywords
    "or": "oder",
    "loading": "Wird geladen",
    "toggleTheme": "Thema wechseln",
    "toggleLocale": "Sprache wechseln",

    // Account
    "name": "Name",
    "email": "E-Mail",
    "password": "Passwort",

    // Login
    "login": {
        title: "Mit Ihrem Konto fortfahren",
        login: "Anmelden",
        logout: "Abmelden",
        loading: "Anmeldung läuft...",
        loadingSuccess: "Sie wurden erfolgreich angemeldet.",
        register: "Konto erstellen"
    },

    "logout": {
        title: "Abmelden",
        loading: "Abmeldung läuft...",
        loadingSuccess: "Sie wurden erfolgreich abgemeldet."
    },

    //Forgot Password
    "forgot-password": {
        title: "Passwort vergessen?",
        submit: "Passwort zurücksetzen",
        loading: "Anweisungen werden gesendet...",
        loadingSuccess: "Anweisungen gesendet!",
        emailSent: "Überprüfen Sie Ihren Posteingang.",
        instructions: "Eine E-Mail mit Anweisungen wurde an Ihre E-Mail-Adresse gesendet."
    },

    // Errors
    "errors": {
        "user-not-found":
            "Kein Benutzer mit dieser E-Mail gefunden. Bitte registrieren Sie sich zuerst.",
        "wrong-password": "Falsches Passwort. Bitte versuchen Sie es erneut.",
        "too-many-requests": "Zu viele Versuche. Bitte versuchen Sie es später noch einmal.",
        "invalid-email": "Ungültiges E-Mail-Format.",
        "default-error": "Anmeldung fehlgeschlagen mit Fehlercode: {code}",
        "unexpected-error":
            "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
    },

    // Register
    "register": {
        title: "Konto erstellen",
        register: "Registrieren",
        signIn: "Einloggen",
        loading: "Ihr Konto wird erstellt...",
        loadingSuccess: "Ihr Konto wurde erfolgreich erstellt."
    },

    // Validation messages.
    "validation": {
        name: {
            required: "Bitte geben Sie Ihren Namen ein.",
            short: "Ihr Name ist zu kurz. Er sollte mindestens 3 Zeichen haben.",
            long: "Ihr Name ist zu lang. Er sollte nicht mehr als 50 Zeichen haben."
        },
        email: {
            required: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
            invalid:
                "Die eingegebene E-Mail-Adresse ist ungültig. Bitte überprüfen Sie sie und versuchen Sie es erneut."
        },
        password: {
            required: "Bitte geben Sie ein Passwort ein.",
            short: "Ihr Passwort ist zu kurz. Es sollte mindestens 8 Zeichen haben.",
            weak: "Ihr Passwort ist zu schwach. Bitte verwenden Sie ein stärkeres Passwort, das eine Kombination aus Buchstaben, Zahlen und Symbolen enthält."
        },
        file: {
            required: "Bitte laden Sie eine Datei hoch.",
            type: 'Ungültiger Dateityp. Bitte laden Sie ein ".idat" hoch.',
            size: "Dateigröße ist zu groß. Bitte laden Sie eine Datei kleiner als 30 MB hoch.",
            maxFiles: "Sie können nur zwei Dateien gleichzeitig hochladen.",
            failure: "Die ausgewählten Dateien konnten nicht hinzugefügt werden."
        }
    },

    // Homepage
    "home": {
        user: {
            title: "Willkommen zurück, {name}",
            description: "Hier können Sie Ihre Dateien hochladen und unsere Dienste nutzen.",
            button: "Jetzt starten"
        },
        noUser: {
            title: "Willkommen",
            description:
                "Bitte melden Sie sich an oder erstellen Sie ein Konto, um unsere Dienste nutzen zu können."
        },
        faq: {
            title: "Häufig gestellte Fragen",
            description: "Hier sind einige häufig gestellte Fragen und Antworten.",
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

    // Upload
    "upload": {
        title: "Hallo, {name}",
        description: "Laden Sie Ihre Dateien hier hoch.",
        button: "Hochladen",
        loading: "Wird hochgeladen...",
        loadingSuccess: "Dateien erfolgreich hochgeladen.",
        dropzone: {
            title: "Klick um Dateien hochzuladen oder ziehen Sie Dateien hierher.",
            subtext: 'Nur ".idat" erlaubt. Maximal 2 Dateien.',
            submit: "Dateien hochladen"
        }
    },

    // Dashboard
    "dashboard": {
        title: "Hallo, {name}",
        buttons: {
            upload: "Mehr Dateien hochladen",
            refresh: "Dokumentstatus aktualisieren"
        },
        table: {
            title: "Liste der letzten Dokumente",
            caption: "Eine Liste Ihrer letzten Dokumente",
            columns: {
                name: "Dateipaar",
                status: "Status",
                date: "Datum",
                method: "Methode"
            }
        }
    }
};
