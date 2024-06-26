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
            description: "Überprüfen Sie diese Fragen für Informationen zu unserem Service.",
            item1: {
                title: "Wie ist der Arbeitsablauf des Krebs-Klassifikators?",
                content:
                    "**Unser Krebs-Klassifikator verarbeitet `.idat`-Dateien und klassifiziert sie in eine von vier Kategorien: PAAD, iCCA, Normal Bile oder No Match.**\n\n" +
                    "Der Vorhersage-Workflow umfasst die folgenden vier Schritte:\n\n" +
                    "1. **Hochladen von `.idat`-Dateien:**\n" +
                    "   - Der Klassifikator akzeptiert Dateien, die von den Plattformen 450k, EPIC und EPICv2 generiert wurden.\n" +
                    "   - Er kann bis zu 8 Proben gleichzeitig verarbeiten, was insgesamt 16 Dateien erfordert (jeweils `_Red` und `_Grn` für jede Probe).\n" +
                    "   - Stellen Sie sicher, dass Ihre Dateinamen diesem Format folgen: `*_XXXXXX_Red.idat` oder `*_XXXXXX_Grn.idat`. Zum Beispiel wäre ein korrekter Dateiname `OPTIONAL_NAME_206702460068_R03C01_Red.idat`.\n\n" +
                    "2. **Angeben des Probenspeichertyps:**\n" +
                    "   - Geben Sie an, ob die Probe in FFPE oder Fresh Frozen gelagert wurde. Diese Information ist entscheidend, um die Modellgenauigkeit zu verbessern, da die Materiallagerung einen signifikanten Batch-Effekt auf die DNA-Methylierungsdaten hat.\n\n" +
                    "3. **Auf die Vorhersage warten:**\n" +
                    "   - Der Vorhersageprozess kann bis zu 10 Minuten dauern. Bitte haben Sie Geduld, während das Modell die Analyse durchführt.\n\n" +
                    "4. **Ergebnisse überprüfen:**\n" +
                    "   - Sobald die Analyse abgeschlossen ist, erhalten Sie das Vorhersageetikett zusammen mit den Wahrscheinlichkeitsscores für jede Klasse. Diese detaillierte Ausgabe hilft, das Vertrauen des Klassifikators in seine Vorhersagen zu verstehen.\n" +
                    "   - Zögern Sie nicht, unser Support-Team zu kontaktieren, wenn Sie weitere Fragen haben oder Unterstützung bei dem Prozess benötigen."
            },
            item2: {
                title: "Welche Dateien akzeptiert der Klassifikator?",
                content:
                    "Der Klassifikator arbeitet durch zwei Hauptpipelines: die Vorverarbeitungspipeline und die Vorhersagepipeline.\n\n" +
                    "**Vorverarbeitungspipeline:**\n\n" +
                    "   - Die Vorverarbeitungspipeline liest die `.idat`-Dateien, extrahiert Beta-Werte und normalisiert diese Werte mithilfe von FunNorm und BMIQ.\n" +
                    "   - Aus den normalisierten Beta-Werten werden die relevanten CpGs extrahiert, die von der Vorhersagepipeline verwendet werden, und weitergeleitet.\n\n" +
                    "**Vorhersagepipeline:**\n\n" +
                    "   Die Vorhersagepipeline umfasst drei Schritte:\n\n" +
                    "1. **Batch-Effekt-Normalisierung:**\n" +
                    "   - Dies erfolgt mithilfe von reCombat, um Batch-Effekte auszugleichen.\n\n" +
                    "2. **Binomialer Klassifikator:**\n" +
                    "   - Ein neuronales Netzwerk-Ensemble, das darauf trainiert ist zu bestimmen, ob die bereitgestellte Probe PAAD, iCCA, normales Gallengewebe oder ein anderes Gewebe ist.\n" +
                    "   - Proben, die nicht mit PAAD, iCCA oder normalem Gallengewebe übereinstimmen, werden als 'No Match' gekennzeichnet.\n\n" +
                    "3. **PAAD / iCCA / Normal Bile Klassifikator:**\n" +
                    "   - Ein neuronales Netzwerk, das Wahrscheinlichkeitsscores für die drei Klassen PAAD, iCCA und normales Gallengewebe zuweist.\n" +
                    "   - Damit eine Klasse das endgültige Etikett wird, muss ihr Score über 80% liegen. Wenn keine der drei Klassen diese Schwelle erreicht, wird das Etikett 'No Match' zugewiesen.\n\n" +
                    "Dieser detaillierte Prozess gewährleistet die genaue Klassifizierung der Proben und liefert sowohl Vorhersageetiketten als auch Wahrscheinlichkeitsscores für eine bessere Interpretierbarkeit.\n\n" +
                    "Für weitere Informationen verweisen wir auf unsere Publikationen."
            },
            item3: {
                title: "Publikationen",
                content:
                    "Der Klassifikator basiert sich auf den folgenden Publikationen:\n" +
                    "  - DNA-Methylierungsbasierter Klassifikator unterscheidet intrahepatische Pankreatobiliärtumore\n" +
                    "  - [Hier verfügbar](https://www.sciencedirect.com/science/article/pii/S2352396423002220)"
            },
            item4: {
                title: "Wer sind wir und warum machen wir das?",
                content:
                    "  - Diese Website wurde von **Dr. Dragomir** und **T.G. Calina** eingerichtet, um Zugang zu den in ihrer Forschung veröffentlichten Modellen zu bieten. Unser Ziel ist es, diese Werkzeuge anderen Forschern zugänglich zu machen, die daran interessiert sind, sie auszuprobieren. Wir glauben, dass unser Werkzeug in spezifischen Fällen sehr nützlich sein kann und wollen seine Nutzung vereinfachen.\n" +
                    "  - Die Website wird von **T.G. Calina** als Hobbyprojekt gehostet und entwickelt und ist nicht mit einer Institution verbunden. Derzeit sind die Infrastrukturkosten niedrig genug, um in den kostenlosen Bereich unseres Cloud-Service-Providers zu fallen. Deshalb kann die Vorhersagepipeline langsam sein und die Anzahl der gleichzeitig verarbeiteten Proben ist begrenzt.\n" +
                    "  - Zukünftig werden eventuelle Kostensteigerungen aufgrund höheren Verkehrs privat von **T.G. Calina** gedeckt. Es gibt keine kommerziellen Interessen; dies ist ein pro-bono Einsatz zur Unterstützung der Forschungsgemeinschaft.\n" +
                    "  - Wir überprüfen potenzielle Benutzer, bevor wir den Zugang zum Werkzeug gewähren, um Ressourcenmissbrauch zu verhindern und sicherzustellen, dass die Benutzer die vom Werkzeug erzeugten Ergebnisse verstehen.\n"
            },
            item5: {
                title: "Wie lange dauert der Vorhersageprozess?",
                content:
                    "Der Vorhersageprozess kann bis zu 10 Minuten dauern. Bitte haben Sie Geduld, während das Modell die Analyse durchführt."
            },
            item6: {
                title: "Welche Unterstützung ist verfügbar, wenn ich Fragen habe?",
                content:
                    "Zögern Sie nicht, unser Support-Team zu kontaktieren, wenn Sie weitere Fragen haben oder Unterstützung bei dem Prozess benötigen. Wir sind hier, um Ihnen zu helfen, den Krebs-Klassifikator effektiv zu verstehen und zu nutzen."
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
