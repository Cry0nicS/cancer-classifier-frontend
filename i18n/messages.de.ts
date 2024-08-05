export default {
    logo: {
        altText:
            "Verflochtene DNA-Stränge, die Teil des kreisförmigen Designs bilden, zentriert mit dem App-Namen in einer klaren, lesbaren Schrift. Das Farbschema umfasst Blautöne und Grautöne, die ein professionelles und vertrauenswürdiges Bild vermitteln, das für eine medizinische Anwendung geeignet ist. Das Logo kombiniert visuelle Elemente der Wissenschaft und Medizin und symbolisiert den Fokus der App auf DNA-Methylierungsprofile zur Krebs-Klassifikation."
    },
    footer: {
        aboutUs: "Über uns",
        contact: "Kontakt",
        eula: "EULA",
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
        password: "Passwort",
        aboutMe: "Über mich",
        aboutMePlaceholder: "Erzählen Sie uns etwas über sich selbst.",
        charactersLeft: "{count} / {max} Zeichen übrig",
        verification: {
            title: "Kontoverifizierung",
            subtitle: "Ihr Konto wurde erstellt und wird derzeit von unserem Team überprüft.",
            info: "Dieser Prozess kann bis zu 24 Stunden dauern. Sobald Ihr Konto verifiziert ist, können Sie alle Funktionen unserer Website nutzen.",
            urgent: "Wenn Sie diesen Prozess beschleunigen müssen, senden Sie uns bitte eine E-Mail an",
            email: "support{'@'}tgc-research.de"
        }
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
        tryAgain: "Bitte erneut versuchen.",
        accountDisabled: "Ihr Konto wurde nicht aktiviert."
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
        aboutMe: {
            required: "Bitte geben Sie eine kurze Beschreibung über sich selbst ein.",
            long: "Ihre Beschreibung ist zu lang. Sie sollte nicht länger als 1000 Zeichen sein."
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
        goBack: "Zur Startseite",
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
    // -- Ueber uns
    aboutUs: {
        seo: {
            title: "Über uns",
            description:
                "Erfahren Sie mehr über das Team hinter den auf unserer Website verfügbaren Forschungsmodellen und -werkzeugen. Unsere Mission ist es, die Forschungsgemeinschaft mit zugänglichen und zuverlässigen Werkzeugen zu unterstützen.",
            image: "/og-image.webp",
            imageAlt: "Forschungsteam arbeitet an Modellen"
        },
        title: "Über uns"
    },
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
        instructions:
            "Eine E-Mail mit Anweisungen zum Zurücksetzen Ihres Passworts wurde an Ihre E-Mail-Adresse gesendet."
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
        signIn: "Anmelden",
        disclaimer: {
            title: "Haftungsausschluss",
            privacyText: "Durch die Registrierung stimmen Sie unserer {privacy} und {eula} zu.",
            privacyUrl: "Datenschutzrichtlinie",
            eulaUrl: "Endbenutzer-Lizenzvertrag (EULA)",
            purpose:
                "Sie sind sich bewusst, dass der Klassifikator nur ein Forschungstool ist und nicht für diagnostische Zwecke verwendet werden sollte."
        }
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
                "Sie können unsere Dienstleistungen nutzen, neue Dateien hochladen oder frühere Sitzungen überprüfen"
        },
        noUser: {
            title: "PAAD vs. iCCA Klassifikator",
            description:
                "Bitte melden Sie sich an oder erstellen Sie ein Konto, um unsere Dienstleistungen zu nutzen."
        },
        faq: {
            title: "Häufig gestellte Fragen",
            description: "Überprüfen Sie diese Fragen für Informationen zu unserem Service.",
            item1: {
                title: "Was ist der Krebs-Klassifikator?",
                content:
                    "Der Krebs-Klassifikator ist ein auf genomweiten DNA-Methylierung basierender neuronaler Netzwerk-Klassifikator, der zwischen pankreatischem Duktaladenokarzinom primären und metastatischen Ursprungs, intrahepatischem Cholangiokarzinom und normalem Gallengewebe unterscheiden kann.\n\n" +
                    "Die Klassifikation mittels Methylierungsprofilierung ist nur für Forschungszwecke vorgesehen. Dieses Tool wurde nicht überprüft oder klinisch validiert und darf nicht für diagnostische Zwecke verwendet werden. Benutzer sollten sich bei gesundheitlichen Bedenken oder Erkrankungen an einen qualifizierten Gesundheitsdienstleister wenden. Die Entwickler des Krebs-Klassifikators lehnen jegliche Verantwortung für den Missbrauch dieses Tools für diagnostische Zwecke ab."
            },
            item2: {
                title: "Wie erstelle ich ein Konto?",
                content:
                    "Um ein Konto zu erstellen, müssen Sie Ihren Namen, Ihre E-Mail-Adresse und Ihr Passwort angeben. Geben Sie außerdem eine kurze Beschreibung über sich selbst an, um den Missbrauch des Klassifikators zu verhindern. Beachten Sie, dass Ihr Konto erst aktiv wird, wenn es von einem Teammitglied genehmigt wurde.\n\n" +
                    "Dieser Service wird kostenlos angeboten."
            },
            item3: {
                title: "Wie funktioniert der Krebs-Klassifikator?",
                content:
                    "Der Krebs-Klassifikator verarbeitet `.idat`-Dateien und kategorisiert sie in eine von vier Gruppen: PAAD, iCCA, normales Gallengewebe oder keine Übereinstimmung. Der Workflow umfasst zwei Hauptpipelines: die Vorverarbeitungspipeline und die Vorhersagepipeline.\n\n" +
                    "**Vorverarbeitungspipeline:**\n\n" +
                    "- Die Vorverarbeitungspipeline liest die `.idat`-Dateien, extrahiert Betawerte und normalisiert diese Werte mit FunNorm und BMIQ.\n\n" +
                    "- Aus den normalisierten Betawerten werden die relevanten CpGs extrahiert, die von der Vorhersagepipeline verwendet werden, und weitergeleitet.\n\n" +
                    "**Vorhersagepipeline:**\n\n" +
                    "1. **Batch-Effekt-Normalisierung:**\n" +
                    "   - Passt Batch-Effekte mit reCombat an.\n\n" +
                    "2. **Binomialer Klassifikator:**\n" +
                    "   - Ein neuronales Netzwerkensemble bestimmt, ob die Probe PAAD, iCCA, normales Gallengewebe oder ein anderes Gewebe ist. Proben, die nicht mit PAAD, iCCA oder normalem Gallengewebe übereinstimmen, werden als 'Keine Übereinstimmung' gekennzeichnet.\n\n" +
                    "3. **PAAD / iCCA / normaler Gallenklassifikator:**\n" +
                    "   - Weist den drei Klassen PAAD, iCCA und normales Gallengewebe Wahrscheinlichkeitswerte zu. Damit eine Klasse das endgültige Label ist, muss ihr Wert über 80 % liegen. Wenn keine der Klassen diesen Schwellenwert erreicht, wird das Label 'Keine Übereinstimmung' zugewiesen.\n\n" +
                    "Für weitere Informationen siehe unsere Publikationen."
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
        },
        disclaimer: {
            title: "Haftungsausschluss",
            description:
                "Die vom Krebs-Klassifikator erzeugten Ergebnisse sind ausschließlich für Forschungszwecke bestimmt und dürfen nicht für diagnostische Zwecke verwendet werden."
        }
    },
    // -- Privacy
    privacy: {
        seo: {
            title: "Datenschutzerklärung | Sichere Krebsklassifikator-Tools",
            description:
                " Erfahren Sie, wie wir Ihre Daten schützen und verwalten. Unsere umfassende Datenschutzrichtlinie gibt Ihnen Einblick, wie wir .idat-Dateien und persönliche Informationen sicher handhaben, während Sie unsere Tools zur Krebsklassifikation nutzen.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Datenschutzerklärung"
    },
    // -- EULA
    eula: {
        seo: {
            title: "EULA | Nutzungsbedingungen für Krebsklassifikator-Tools",
            description: "Endbenutzer-Lizenzvertrag (EULA)",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Endbenutzer-Lizenzvertrag (EULA)"
    },
    // -- Contact
    contact: {
        seo: {
            title: "Kontaktieren Sie uns | TGC Ventures UG",
            description:
                "Kontaktieren Sie TGC Ventures UG für Anfragen oder Feedback. Schreiben Sie uns eine E-Mail für schnelle Unterstützung. Wir freuen uns darauf, Ihnen bei Ihren Fragen zu helfen und die benötigten Informationen zu liefern.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Kontaktieren Sie uns"
    },
    // -- Imprint
    imprint: {
        seo: {
            title: "Impressum | Rechtliche Hinweise der TGC Ventures UG",
            description:
                "Greifen Sie auf das offizielle Impressum der TGC Ventures UG zu. Finden Sie umfassende Kontaktinformationen, Registrierungsinformationen und Angaben zur Inhaltsverantwortung gemäß deutschem Recht.",
            image: "/og-image.webp",
            imageAlt:
                "Ein breitformatiges Open-Graph-Bild für soziale Medien, das ein abstraktes Design aus verflochtenen DNA-Strängen und Zellstrukturen zeigt. Die Farbpalette umfasst verschiedene Blautöne und Grautöne, die einen sauberen und professionellen Look betonen. Das Bild ist so gestaltet, dass es das Thema DNA-Methylierung und Krebs-Klassifikation visuell repräsentiert, ohne Text oder Logos und bietet eine rein grafische Darstellung."
        },
        title: "Impressum"
    }
};
