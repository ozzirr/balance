(function () {
    const SUPPORTED_LANGS = ['it', 'en', 'pt'];
    const DEFAULT_LANG = 'it';
    const LANG_STORAGE_KEY = 'balance-lang';

    const LANG_META = {
        it: { locale: 'it-IT', ogLocale: 'it_IT' },
        en: { locale: 'en-US', ogLocale: 'en_US' },
        pt: { locale: 'pt-BR', ogLocale: 'pt_BR' }
    };

    const COPY = {
        it: {
            global: {
                nav: {
                    overview: 'Panoramica',
                    pricing: 'Piani',
                    features: 'Funzionalità',
                    roadmap: 'Roadmap',
                    download: 'Download',
                    home: 'Home'
                },
                footer: {
                    privacy: 'Privacy Policy',
                    terms: 'Termini e Condizioni',
                    contacts: 'Contatti',
                    language: 'Lingua',
                    copyright: '© Balance App. Tutti i diritti riservati.'
                },
                ui: {
                    menu: 'Menu',
                    appStore: 'App Store',
                    googlePlay: 'Google Play',
                    comingSoon: 'Coming soon',
                    langNames: {
                        it: 'Italiano',
                        en: 'English',
                        pt: 'Português'
                    }
                }
            },
            home: {
                meta: {
                    title: 'Balance – App di finanza personale e tracker patrimonio privato',
                    description: 'Balance è un’app di finanza personale privacy-first per tracciare patrimonio, investimenti, crypto e asset. Offline, sicura e semplice.',
                    ogTitle: 'Balance – App di finanza personale e tracker patrimonio privato'
                },
                hero: {
                    badge: 'Privacy-first · Offline · Open source',
                    title: 'Prendi il controllo delle tue finanze',
                    subtitle: 'Monitora patrimonio, investimenti e liquidità con un’app di finanza personale privata e offline-first.',
                    description: 'Tutto resta sul tuo dispositivo, senza collegamenti bancari né condivisione dei dati.',
                    cta: 'Scarica su App Store'
                },
                trust: [
                    { label: '100% offline', sub: 'Funziona senza internet' },
                    { label: 'Nessun server', sub: 'Dati sul tuo dispositivo' },
                    { label: 'Open source', sub: 'Codice verificabile' },
                    { label: 'iOS & Android', sub: 'Disponibile ovunque' }
                ],
                context: {
                    title: 'Tutto il tuo patrimonio, in un solo posto',
                    text: 'Conti bancari, broker, crypto, liquidità e altri asset raramente stanno nello stesso posto. Balance ti permette di vedere tutto insieme senza sincronizzazioni bancarie né accessi di terze parti.',
                    highlight: 'Una vista semplice, privata e completa, costruita sul modo in cui gestisci davvero il denaro.'
                },
                clarity: {
                    title: 'Una visione chiara delle tue finanze nel tempo',
                    text: 'Balance è pensata per aggiornamenti manuali rapidi, grafici essenziali e una dashboard chiara che resta utile ogni giorno.',
                    highlight: 'Gli snapshot ti aiutano a seguire l’evoluzione di patrimonio, investimenti e liquidità nel tempo, senza trasformare tutto in un foglio di calcolo.'
                },
                pricing: {
                    kicker: 'Balance è gratis',
                    title: 'Passa a Pro, senza limiti',
                    intro: 'Inizia gratis con 3 wallet. Passa a Pro per wallet illimitati, snapshot avanzati e storico completo.',
                    toggle: {
                        ariaLabel: 'Seleziona il piano',
                        annual: 'Annuale',
                        monthly: 'Mensile'
                    },
                    free: {
                        badge: 'Per iniziare',
                        title: 'Balance',
                        description: "La versione gratuita per tenere d'occhio i wallet essenziali.",
                        priceHtml: 'Gratis',
                        list: [
                            'Fino a 3 wallet',
                            'Snapshot essenziali',
                            'Storico completo'
                        ],
                        cta: 'Scarica gratis'
                    },
                    pro: {
                        badgeAnnual: 'Offerta lancio',
                        badgeMonthly: 'Offerta lancio',
                        emphasis: 'Miglior valore',
                        emphasisMonthly: 'Flessibile',
                        description: 'Per chi vuole usare Balance come archivio finanziario personale, senza limiti.',
                        billing: {
                            annual: {
                                title: 'Pro Annuale',
                                description: 'Il piano più conveniente per chi usa Balance ogni giorno. Risparmi il 44% rispetto al piano mensile.',
                                caption: 'Offerta di lancio',
                                priceHtml: '19,99 €<span class="price-suffix">l\'anno</span>',
                                chip: 'Risparmi 15,89 €',
                                alt: "Equivale a 1,67 € al mese · Risparmi 15,89 €",
                                note: 'Primo mese di prova gratuito.'
                            },
                            monthly: {
                                title: 'Pro Mensile',
                                description: 'Tutte le funzionalità Pro con la libertà di pagare mese per mese, senza vincoli.',
                                caption: 'Abbonamento',
                                priceHtml: '2,99 €<span class="price-suffix">al mese</span>',
                                chip: 'Flessibile',
                                alt: 'Rinnovo automatico ogni mese',
                                note: 'Primo mese di prova gratuito.'
                            }
                        },
                        list: [
                            'Wallet illimitati',
                            'Snapshot avanzati per analisi più precise',
                            "Storico completo per confrontare l'evoluzione nel tempo"
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Inizia la prova gratuita',
                        microcopy: 'Al termine della prova, salvo annullamento, il rinnovo avviene al prezzo del piano scelto.'
                    }
                },
                features: {
                    title: 'Funzionalità',
                    detailEyebrow: 'Dettaglio',
                    cards: {
                        snapshot: {
                            title: 'Snapshot mensili',
                            text: 'Salva il valore totale del patrimonio e confrontalo nel tempo in pochi tocchi.'
                        },
                        wallet: {
                            title: 'Wallet separati',
                            text: 'Separa conti, broker, liquidità, crypto e altri asset in wallet ordinati.'
                        },
                        dashboard: {
                            title: 'Dashboard personalizzata',
                            text: 'Controlla patrimonio, liquidità e investimenti in una vista semplice e immediata.'
                        },
                        privacy: {
                            title: 'Privacy reale',
                            text: 'Dati locali, nessun server e nessun accesso ai conti: il controllo resta tuo.'
                        },
                        speed: {
                            title: 'Aggiornamenti rapidi',
                            text: 'Aggiorna saldi e asset velocemente, senza flussi lenti o passaggi inutili.'
                        }
                    },
                    detailMap: {
                        snapshot: {
                            title: 'Snapshot mensili',
                            text: 'Registra snapshot quando vuoi e rivedi l’evoluzione del patrimonio senza esportare dati o aprire fogli di calcolo.',
                            bullets: [
                                'Salvi il valore aggiornato in pochi secondi.',
                                'Confronti date diverse e capisci subito cosa è cambiato.',
                                'Segui patrimonio, investimenti e liquidità con una cronologia chiara.'
                            ]
                        },
                        wallet: {
                            title: 'Wallet separati',
                            text: 'Ogni parte del patrimonio ha il suo spazio: conti bancari, broker, crypto, liquidità e altri asset.',
                            bullets: [
                                'Organizzi tutto in wallet separati e facili da leggere.',
                                'Mantieni ordine anche se usi più banche o piattaforme.',
                                'La struttura replica il modo in cui gestisci davvero i tuoi soldi.'
                            ]
                        },
                        dashboard: {
                            title: 'Dashboard personalizzata',
                            text: 'La dashboard ti mostra quanto possiedi e dove si trova, con un colpo d’occhio davvero utile.',
                            bullets: [
                                'Patrimonio totale sempre in evidenza.',
                                'Liquidità, investimenti e asset leggibili senza rumore.',
                                'Pensata per controllare tutto in pochi secondi.'
                            ]
                        },
                        privacy: {
                            title: 'Privacy reale',
                            text: 'Balance nasce offline-first: niente login, niente server proprietari, niente sincronizzazioni bancarie.',
                            bullets: [
                                'I dati restano sul tuo dispositivo.',
                                'Nessuna credenziale passa da servizi esterni.',
                                'Codice open source e approccio verificabile.'
                            ]
                        },
                        speed: {
                            title: 'Aggiornamenti rapidi',
                            text: 'L’app è costruita per aggiornamenti manuali rapidi, così resta utile anche nell’uso quotidiano.',
                            bullets: [
                                'Aggiorni saldi e asset senza passaggi superflui.',
                                'Interfaccia essenziale, pensata per il mobile.',
                                'Perfetta per tenere il patrimonio allineato costantemente.'
                            ]
                        }
                    }
                },
                faq: {
                    title: 'Domande frequenti',
                    items: [
                        {
                            q: 'Balance è davvero privata?',
                            a: 'Sì. Balance è un’app di finanza personale privacy-first e offline: i dati restano sul tuo dispositivo, senza server, login o condivisione.'
                        },
                        {
                            q: 'Balance si collega a banche o broker?',
                            a: 'No. Balance è pensata come tracker investimenti e portfolio tracker privato senza collegamenti bancari, quindi le tue credenziali non passano mai da servizi esterni.'
                        },
                        {
                            q: 'Cosa posso tracciare con Balance?',
                            a: 'Puoi tracciare conti bancari, investimenti, crypto, liquidità e altri asset in una sola dashboard, usando Balance come tracker patrimonio nella vita quotidiana.'
                        },
                        {
                            q: 'Qual è la differenza tra la versione gratuita e Pro?',
                            a: "La versione gratuita include fino a 3 wallet, dashboard completa e snapshot essenziali. Balance Pro rimuove il limite ai wallet, aggiunge snapshot avanzati e sblocca tutta la cronologia per un'esperienza più completa."
                        },
                        {
                            q: 'Come funziona la prova gratuita?',
                            a: 'Il primo mese di Balance Pro è gratuito. Al termine della prova, salvo annullamento, il rinnovo segue il piano mensile o annuale selezionato.'
                        },
                        {
                            q: 'È disponibile su Android?',
                            a: 'Balance è disponibile su iOS. La versione Android è in arrivo.'
                        }
                    ]
                },
                download: {
                    badge: 'Offerta lancio',
                    title: 'Download',
                    copy: 'Scarica e attiva Balance Pro con abbonamento mensile o annuale: il primo mese è gratuito.',
                    points: ['Privacy-first', 'Offline', 'Open source'],
                    note: 'Al termine della prova gratuita, salvo annullamento, il rinnovo segue il piano selezionato.'
                }
            },
            balancepro: {
                meta: {
                    title: 'Balance Pro · Offerta lancio',
                    description: "Sblocca Balance Pro con il primo mese gratis, poi 2,99 € al mese oppure 19,99 € l'anno."
                },
                heroTitle: 'Balance Pro',
                heroText: "Sblocca tutte le funzionalità avanzate direttamente nell'app con abbonamento mensile o annuale.",
                card: {
                    badge: 'Annulla quando vuoi',
                    priceHtml: '2,99 €<span class="price-suffix">al mese</span>',
                    altPrice: "19,99 € l'anno invece di 35,88 €",
                    note: 'Primo mese di prova gratuito.',
                    list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo senza limiti'],
                    microcopy: 'Alla fine della prova gratuita, salvo annullamento, il rinnovo segue il piano selezionato direttamente in app.',
                    primaryCtaHtml: '<i class="fa-brands fa-apple"></i> App Store',
                    secondaryCta: 'Vedi i piani'
                }
            },

            proWaitlist: {
                meta: {
                    title: 'Balance Pro Waitlist',
                    description: 'Balance Pro sta arrivando. Scopri le nuove funzionalita che stanno per arrivare.'
                },
                hero: {
                    title: 'Balance Pro sta arrivando',
                    subtitle: 'La versione potenziata di Balance sara disponibile venerdi 20 marzo.'
                },
                countdown: {
                    label: 'Cosa sblocchi con Balance Pro'
                },
                features: [
                    {
                        icon: 'fa-wallet',
                        title: 'Wallet illimitati',
                        text: 'Organizza tutte le tue risorse: conti bancari, investimenti, crypto, cash e altro.'
                    },
                    {
                        icon: 'fa-chart-line',
                        title: 'Snapshot avanzati',
                        text: "Salva snapshot illimitati e analizza l'evoluzione del tuo patrimonio nel tempo."
                    },
                    {
                        icon: 'fa-history',
                        title: 'Storico completo',
                        text: 'Accedi a tutto il tuo storico finanziario per confrontare e analizzare tendenze.'
                    },
                    {
                        icon: 'fa-shield-halved',
                        title: 'Privacy assoluta',
                        text: 'Tutto rimane sul tuo dispositivo. Nessun server, nessuna condivisione dati.'
                    }
                ],
                countdownLabels: {
                    days: 'Giorni',
                    hours: 'Ore',
                    minutes: 'Minuti',
                    seconds: 'Secondi'
                }
            },
            roadmap: {
                meta: {
                    title: 'Roadmap · Balance',
                    description: "Roadmap di Balance: prossime funzionalità per l’app privacy-first, offline e open source.",
                    ogTitle: 'Roadmap. Balance'
                },
                hero: {
                    title: 'Roadmap di Balance',
                    subtitle: 'Un progetto in evoluzione. Trasparente, open source e guidato dalla community.',
                    value: 'Scopri cosa stiamo costruendo e come puoi contribuire.',
                    repoCtaHtml: '<i class="fa-brands fa-github"></i> Repository GitHub',
                    featureCtaHtml: '<i class="fa-solid fa-lightbulb"></i> Proponi una feature'
                },
                status: {
                    version: 'Versione Attuale: 1.0',
                    date: 'Gennaio 2026',
                    title: 'Stato del Progetto',
                    text: 'Balance è attualmente in fase di lancio pubblico. La versione 1.0 include le funzionalità core per gestire liquidità e investimenti con un approccio privacy-first.'
                },
                timelineTitle: 'Timeline di Sviluppo',
                timeline: [
                    {
                        title: 'Q1 2026 · Lancio Pubblico',
                        status: 'Completato',
                        items: [
                            'Dashboard patrimoniale con grafici essenziali',
                            'Sistema wallet per liquidità e investimenti',
                            'Snapshot manuali con storico',
                            'Archiviazione locale dei dati',
                            'Versione iOS e Android',
                            'Repository open source pubblico'
                        ]
                    },
                    {
                        title: 'Q2 2026 · Miglioramenti UX',
                        status: 'In Sviluppo',
                        items: [
                            'Widget home screen per iOS e Android',
                            'Grafici interattivi avanzati',
                            'Export dati in CSV/JSON',
                            'Temi personalizzabili (dark/light)',
                            'Notifiche promemoria snapshot',
                            'Onboarding migliorato'
                        ]
                    },
                    {
                        title: 'Q3 2026 · Funzionalità Avanzate',
                        status: 'Pianificato',
                        items: [
                            'Backup e sincronizzazione cloud opzionale (E2E encrypted)',
                            'Obiettivi finanziari personalizzati',
                            'Categorie personalizzate per wallet',
                            'Comparazione multi-periodo avanzata',
                            'Supporto multi-valuta',
                            'API per integrazioni esterne'
                        ]
                    },
                    {
                        title: 'Q4 2026 · Espansione Ecosistema',
                        status: 'Futuro',
                        items: [
                            'Versione web app (PWA)',
                            'Integrazione con portfolio tracker crypto',
                            'Report automatici mensili/annuali',
                            'Collaborazione multi-utente (famiglia)',
                            'Plugin system per estensioni community'
                        ]
                    },
                    {
                        title: '2027+ · Visione a Lungo Termine',
                        status: 'Visione',
                        items: [
                            'AI insights per analisi patrimoniale',
                            'Marketplace per template e configurazioni',
                            'Integrazione con DeFi protocols',
                            'Community features e social sharing opzionale'
                        ]
                    }
                ],
                principles: {
                    title: 'Principi di Sviluppo',
                    cards: [
                        {
                            title: 'Privacy First',
                            text: 'Ogni feature deve rispettare il principio di privacy locale. Nessun dato sensibile lascia il dispositivo senza consenso esplicito.'
                        },
                        {
                            title: 'Open Source',
                            text: 'Codice pubblico, roadmap trasparente e decisioni condivise con la community. Ogni contributo è benvenuto.'
                        },
                        {
                            title: 'Semplicità',
                            text: 'Interfaccia pulita e azioni essenziali. Nessuna feature bloat, solo ciò che serve davvero.'
                        },
                        {
                            title: 'Community Driven',
                            text: 'Le priorità vengono definite ascoltando feedback, issue e proposte della community.'
                        }
                    ]
                },
                contribute: {
                    title: 'Contribuisci al Progetto',
                    text: 'Balance è un progetto open source. Ci sono molti modi per contribuire, anche senza scrivere codice.',
                    cards: [
                        {
                            title: 'Segnala Bug',
                            text: 'Hai trovato un problema? Apri una issue su GitHub con dettagli e screenshot.',
                            cta: 'Segnala Bug'
                        },
                        {
                            title: 'Proponi Feature',
                            text: "Hai un'idea per migliorare Balance? Condividila con la community.",
                            cta: 'Proponi Feature'
                        },
                        {
                            title: 'Contribuisci al Codice',
                            text: 'Sviluppatore? Fai un fork, implementa una feature e apri una pull request.',
                            cta: 'Guida Contributi'
                        },
                        {
                            title: 'Supporta il Progetto',
                            text: 'Lascia una stella su GitHub, condividi Balance e aiutaci a crescere.',
                            ctaHtml: '<i class="fa-brands fa-github"></i> Star su GitHub'
                        }
                    ]
                }
            },
            privacy: {
                meta: {
                    title: 'Privacy Policy · Balance',
                    description: 'Informativa Privacy di Balance, app privacy-first, offline e open source per gestire liquidità, investimenti e patrimonio con controllo totale.',
                    ogTitle: 'Privacy Policy. Balance'
                },
                pageTitle: 'Privacy Policy',
                lastUpdated: 'Ultimo aggiornamento',
                html: `
                    <h1>Privacy Policy</h1>
                    <p class="last-updated">Ultimo aggiornamento: {{date}}</p>
                    <section>
                        <h2>La nostra filosofia: Privacy First</h2>
                        <p><strong>Balance è progettato per proteggere completamente la tua privacy finanziaria.</strong> L'app non raccoglie, non trasmette e non conserva i tuoi dati finanziari sui nostri server.</p>
                        <p>Quando usi il sito web, possiamo trattare solo i dati che decidi di inviarci volontariamente, ad esempio tramite il modulo contatti.</p>
                    </section>
                    <section>
                        <h2>1. Dati che NON raccogliamo nell'app</h2>
                        <p>L'app Balance <strong>non raccoglie</strong> alcuna delle seguenti informazioni:</p>
                        <ul>
                            <li><strong>Dati finanziari:</strong> conti bancari, saldi, transazioni, investimenti, crypto wallet</li>
                            <li><strong>Dati di utilizzo:</strong> analytics, statistiche, comportamento nell'app</li>
                            <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di dispositivo, sistema operativo</li>
                            <li><strong>Dati di localizzazione:</strong> GPS, posizione geografica</li>
                            <li><strong>Identificatori:</strong> cookie, advertising ID, device ID</li>
                        </ul>
                        <p><strong>Non utilizziamo tracker, analytics o strumenti pubblicitari all'interno dell'app.</strong></p>
                    </section>
                    <section>
                        <h2>2. Dati che raccogliamo solo se ce li invii tu dal sito</h2>
                        <p>Il sito può raccogliere alcuni dati personali <strong>solo quando li inserisci volontariamente</strong> in un form.</p>
                        <ul>
                            <li><strong>Modulo contatti:</strong> nome, email e contenuto del messaggio che scegli di inviarci</li>
                            <li><strong>Analytics del sito:</strong> Vercel Web Analytics per misurare visite e pagine viste in forma aggregata e privacy-friendly, senza cookie di profilazione o advertising</li>
                            <li><strong>Finalità:</strong> rispondere ai messaggi che scegli di inviarci dal sito</li>
                            <li><strong>Nessuna profilazione:</strong> questi dati non vengono usati per advertising, tracking cross-site o analisi comportamentale</li>
                        </ul>
                    </section>
                    <section>
                        <h2>3. Come funziona Balance</h2>
                        <p>Balance è un'applicazione <strong>completamente offline</strong> per quanto riguarda i dati finanziari:</p>
                        <ul>
                            <li>Tutti i dati che inserisci nell'app vengono salvati <strong>localmente sul tuo dispositivo</strong></li>
                            <li>L'app funziona senza connessione internet</li>
                            <li>Non ci colleghiamo a banche o servizi finanziari esterni</li>
                            <li>Il sito web e i suoi form sono separati dai dati finanziari presenti nell'app</li>
                        </ul>
                    </section>
                    <section>
                        <h2>4. Sincronizzazione iCloud (funzionalità opzionale)</h2>
                        <p>Se e quando attivi la sincronizzazione iCloud (funzionalità opzionale):</p>
                        <ul>
                            <li>I tuoi dati vengono sincronizzati tramite <strong>iCloud privato di Apple</strong></li>
                            <li>I dati sono criptati end-to-end da Apple</li>
                            <li>Noi non abbiamo accesso ai tuoi dati su iCloud</li>
                            <li>Puoi disattivare la sincronizzazione in qualsiasi momento</li>
                        </ul>
                        <p>Per maggiori informazioni sulla privacy di iCloud, consulta la <a href="https://www.apple.com/legal/privacy/" target="_blank" style="color: var(--accent-color);">Privacy Policy di Apple</a>.</p>
                    </section>
                    <section>
                        <h2>5. Condivisione dei dati</h2>
                        <p>I dati finanziari dell'app <strong>non vengono condivisi con terze parti</strong> perché restano sul tuo dispositivo.</p>
                        <p>I dati inviati volontariamente dal sito possono invece essere trattati da fornitori tecnici strettamente necessari al servizio, ad esempio:</p>
                        <ul>
                            <li><strong>Provider di invio form o email:</strong> solo se usati per consegnare i messaggi o inviare comunicazioni richieste</li>
                        </ul>
                        <p>Non vendiamo né cediamo i tuoi dati a inserzionisti o partner commerciali.</p>
                    </section>
                    <section>
                        <h2>6. Sicurezza</h2>
                        <p>La sicurezza dei tuoi dati è garantita da:</p>
                        <ul>
                            <li><strong>Archiviazione locale:</strong> i dati non lasciano mai il tuo dispositivo</li>
                            <li><strong>Servizi separati:</strong> le eventuali email del sito vengono archiviate in un database dedicato, separato dai dati dell'app</li>
                            <li><strong>Crittografia iOS:</strong> i dati beneficiano della crittografia nativa del sistema operativo</li>
                            <li><strong>Face ID/Touch ID:</strong> puoi proteggere l'accesso all'app con autenticazione biometrica</li>
                        </ul>
                    </section>
                    <section>
                        <h2>7. I tuoi diritti</h2>
                        <p>Hai il controllo sia sui dati locali dell'app sia sui dati che ci invii dal sito:</p>
                        <ul>
                            <li><strong>Controllo totale:</strong> hai il pieno controllo dei tuoi dati, che risiedono solo sul tuo dispositivo</li>
                            <li><strong>Cancellazione:</strong> puoi eliminare tutti i dati disinstallando l'app</li>
                            <li><strong>Portabilità:</strong> puoi esportare i tuoi dati in qualsiasi momento dall'app</li>
                            <li><strong>Dati del sito:</strong> puoi chiederci la cancellazione dei dati inviati tramite contatti scrivendoci dalla pagina Contatti</li>
                        </ul>
                    </section>
                    <section>
                        <h2>8. Open Source</h2>
                        <p>Balance è <strong>completamente open source</strong>. Puoi verificare personalmente che non raccogliamo dati ispezionando il codice sorgente su <a href="https://github.com/ozzirr/balance-app-v1" target="_blank" style="color: var(--accent-color);">GitHub</a>.</p>
                        <p>La trasparenza è parte fondamentale del nostro impegno per la privacy.</p>
                    </section>
                    <section>
                        <h2>9. Modifiche a questa Privacy Policy</h2>
                        <p>Eventuali modifiche a questa Privacy Policy saranno pubblicate su questa pagina e comunicate tramite aggiornamento dell'app.</p>
                        <p>L'uso continuato dell'app dopo le modifiche costituisce accettazione della nuova Privacy Policy.</p>
                    </section>
                `
            },
            terms: {
                meta: {
                    title: 'Termini e Condizioni · Balance',
                    description: 'Termini e condizioni di Balance, app privacy-first, offline e open source per gestire liquidità, investimenti e patrimonio con controllo totale.',
                    ogTitle: 'Termini e Condizioni. Balance'
                },
                html: `
                    <h1>Termini e Condizioni</h1>
                    <p class="last-updated">Ultimo aggiornamento: {{date}}</p>
                    <section>
                        <h2>1. Accettazione dei Termini</h2>
                        <p>Scaricando, installando o utilizzando l'applicazione Balance ("Servizio"), l'utente accetta di essere vincolato dai presenti Termini e Condizioni. Se non si accettano questi termini, si prega di non utilizzare l'app.</p>
                    </section>
                    <section>
                        <h2>2. Descrizione del Servizio</h2>
                        <p>Balance è un'applicazione di finanza personale che permette agli utenti di monitorare manualmente il proprio patrimonio, registrare spese e visualizzare statistiche. Il servizio è fornito "così com'è" e può essere soggetto a modifiche.</p>
                    </section>
                    <section>
                        <h2>3. Account e Responsabilità dell'Utente</h2>
                        <p>L'utente è responsabile della riservatezza delle proprie credenziali (se applicabile) e di tutte le attività svolte tramite il proprio dispositivo. L'utente si impegna a fornire informazioni veritiere e ad utilizzare l'app in conformità con le leggi vigenti.</p>
                    </section>
                    <section>
                        <h2>4. Licenza e Utilizzo dell'App</h2>
                        <p>Concediamo all'utente una licenza limitata, non esclusiva e non trasferibile per utilizzare l'app per scopi personali e non commerciali. È vietato copiare, modificare, distribuire o vendere qualsiasi parte del Servizio senza autorizzazione.</p>
                    </section>
                    <section>
                        <h2>5. Limitazioni di Responsabilità</h2>
                        <p>Balance non fornisce consulenza finanziaria. Le informazioni fornite dall'app sono a scopo puramente informativo. Non siamo responsabili per eventuali decisioni finanziarie prese dall'utente, né per danni diretti o indiretti derivanti dall'uso o dall'impossibilità di utilizzare l'app.</p>
                    </section>
                    <section>
                        <h2>6. Modifiche al Servizio</h2>
                        <p>Ci riserviamo il diritto di modificare o interrompere, temporaneamente o permanentemente, il Servizio con o senza preavviso. Non saremo responsabili verso l'utente o terzi per qualsiasi modifica, sospensione o interruzione del Servizio.</p>
                    </section>
                    <section>
                        <h2>7. Interruzioni e Disponibilità</h2>
                        <p>Non garantiamo che il Servizio sarà sempre disponibile, ininterrotto o privo di errori. Potrebbero verificarsi interruzioni per manutenzione o problemi tecnici.</p>
                    </section>
                    <section>
                        <h2>8. Proprietà Intellettuale</h2>
                        <p>Tutti i diritti di proprietà intellettuale relativi al Servizio (inclusi design, logo, codice e contenuti) sono di proprietà esclusiva di Balance App.</p>
                    </section>
                    <section>
                        <h2>9. Legge Applicabile e Foro</h2>
                        <p>I presenti Termini sono governati dalla legge italiana. Per qualsiasi controversia sarà competente il foro esclusivo di [Città/Foro Competente], salvo diverse disposizioni di legge inderogabili a tutela del consumatore.</p>
                    </section>
                    <section>
                        <h2>10. Contatti</h2>
                        <p>Per domande sui presenti Termini, contattaci a: [Inserire email di contatto].</p>
                    </section>
                `
            },
            contacts: {
                meta: {
                    title: 'Contatti · Balance',
                    description: "Contatti Balance: scrivici per supporto o feedback sull’app privacy-first, offline e open source.",
                    ogTitle: 'Contatti. Balance'
                },
                title: 'Contatti',
                subtitle: 'Hai domande, feedback o una segnalazione da farci? Scrivici direttamente.',
                form: {
                    honeypot: 'Non compilare se sei umano',
                    reason: 'Motivo del contatto',
                    reasonOptions: ['Domande o Feedback', 'Segnalazione di un bug', 'Proposta nuova funzionalità', 'Altro'],
                    name: 'Nome',
                    namePlaceholder: 'Il tuo nome',
                    email: 'Email',
                    emailPlaceholder: 'la-tua@email.it',
                    message: 'Messaggio',
                    messagePlaceholder: 'Descrivi qui la tua richiesta o segnalazione...',
                    submit: 'Invia messaggio',
                    sending: 'Invio in corso...',
                    tooFast: 'Invio troppo veloce. Attendi qualche secondo e riprova.',
                    error: 'Impossibile inviare il messaggio in questo momento. Riprova tra poco.',
                    configError: 'Configura l’integrazione contatti prima di usare questa pagina.',
                    localDevError: 'In locale usa `vercel dev` per l’API, oppure punta il form a un endpoint deployato.',
                    disclaimer: 'Il messaggio viene consegnato tramite un servizio di terze parti solo per l’invio. Nessun tracciamento o utilizzo marketing.',
                    success: 'Grazie! Il tuo messaggio è stato inviato correttamente.'
                }
            },
            lpInvestors: {
                meta: {
                    title: 'Balance – Monitora Crypto, Azioni e Asset in Privato',
                    description: 'Monitora tutto il tuo portfolio di investimenti — crypto, azioni, ETF, immobili — in un\'app privata. Nessuna API key. Nessun collegamento bancario.',
                    ogTitle: 'Balance – Monitora Crypto, Azioni e Asset in Privato'
                },
                hero: {
                    kicker: 'Per investitori che vogliono il controllo',
                    titleHtml: 'Monitora ogni asset.<br>Senza condividere nulla.',
                    subHtml: 'Crypto, azioni, ETF, liquidità, immobili — tutto in <strong>una dashboard privata</strong>. Nessuna API key. Nessun accesso bancario. Nessun terzo coinvolto nel tuo portfolio.',
                    ctaPrimary: 'Scarica Gratis',
                    ctaSecondary: 'Scopri come funziona',
                    proof: '100% offline · Open source · Piano gratuito disponibile'
                },
                assets: { crypto: 'Crypto', stocks: 'Azioni', etfs: 'ETF', cash: 'Liquidità', realEstate: 'Immobili' },
                problem: {
                    title: 'Il tuo portfolio è sparso. I tuoi dati non dovrebbero esserlo.',
                    textHtml: 'La maggior parte dei portfolio tracker chiede le API key degli exchange, i login del broker o le credenziali bancarie. Balance funziona diversamente: <strong style="color:var(--ink)">inserisci i numeri, l\'app resta offline e nessun altro vede i tuoi dati.</strong>'
                },
                benefits: [
                    { title: 'Nessuna API key richiesta', text: 'Non dare accesso in lettura a Binance, Coinbase o al tuo broker. Inserisci i saldi manualmente e mantieni il pieno controllo su ciò che è visibile.' },
                    { title: 'Multi-asset in una vista', text: 'Crypto, azioni, conti bancari e immobili in un\'unica dashboard. Niente più switching tra cinque app per capire il tuo patrimonio netto.' },
                    { title: 'Snapshot del portfolio', text: 'Salva uno snapshot dei tuoi investimenti ogni mese. Osserva la traiettoria nel tempo con grafici chiari e semplici — senza fogli di calcolo.' },
                    { title: 'Funziona completamente offline', text: 'Niente internet? Nessun problema. Balance funziona ovunque — in volo, in montagna, o semplicemente sul divano. I tuoi dati non lasciano mai il dispositivo.' },
                    { title: 'Open source e verificabile', text: 'Don\'t trust, verify. Il codice è pubblico. Nessun tracker nascosto, nessun analytics che raccoglie i dati del tuo portfolio.' },
                    { title: 'Aggiorna in secondi', text: 'L\'inserimento manuale rapido significa 30 secondi per aggiornare invece di 30 minuti per debuggare un sync bancario rotto.' }
                ],
                comparison: {
                    title: 'Balance vs. tracker tradizionali',
                    subtitle: 'Altri strumenti promettono comodità. Balance offre controllo.',
                    headers: ['', 'Balance', 'Altri'],
                    rows: [
                        ['Richiede login bancario', 'No', 'Sì'],
                        ['Necessita API key', 'No', 'Sì'],
                        ['Dati salvati localmente', 'Sì', 'Cloud'],
                        ['Funziona offline', 'Sì', 'No'],
                        ['Open source', 'Sì', 'No'],
                        ['Tracking multi-asset', 'Sì', 'Parziale']
                    ]
                },
                pricing: {
                    title: 'Inizia gratis. Passa a Pro quando vuoi.',
                    subtitle: 'Monitora fino a 3 wallet gratis, per sempre. Passa a Pro per wallet illimitati, snapshot avanzati e storico completo.',
                    free: {
                        title: 'Gratuito', badge: 'Nessuna carta richiesta',
                        description: 'Tutto il necessario per iniziare a monitorare il tuo portfolio in privato.',
                        price: '€0', priceSuffix: 'per sempre',
                        list: ['Fino a 3 wallet', 'Dashboard completa', 'Snapshot essenziali'],
                        cta: 'Scarica Gratis'
                    },
                    pro: {
                        title: 'Pro Annuale', badge: 'Miglior valore',
                        description: 'Per investitori seri. Tracking illimitato, storico completo, 44% di risparmio.',
                        caption: 'Offerta lancio', price: '€19,99', priceSuffix: "l'anno",
                        alt: '€1,67/mese · Risparmi €15,89 vs. mensile', note: 'Primo mese gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Inizia la Prova Gratuita',
                        microcopy: 'Annulla in qualsiasi momento. Al termine della prova, il rinnovo segue il piano selezionato.'
                    }
                },
                finalCta: {
                    title: 'Il tuo portfolio merita privacy.',
                    text: 'Scarica Balance e inizia a monitorare ogni asset — senza condividere un singolo dato.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Scarica su App Store'
                }
            },
            lpPrivacy: {
                meta: {
                    title: 'Balance – L\'App di Finanza che Non Sa Nulla di Te',
                    description: 'La tua banca traccia ogni transazione. La tua app finanziaria vende i tuoi dati. Balance no. 100% offline, open source, zero raccolta dati.',
                    ogTitle: 'Balance – L\'App di Finanza che Non Sa Nulla di Te'
                },
                hero: {
                    kicker: 'Zero raccolta dati',
                    titleHtml: 'La tua app finanziaria <em>ti traccia</em>.<br>Questa <span class="lp-safe">no</span>.',
                    sub: 'Balance è un\'app di finanza personale che funziona 100% offline, non salva nulla su server e non chiede mai le credenziali bancarie. I tuoi soldi, i tuoi dati, il tuo dispositivo.',
                    ctaPrimary: 'Scarica Gratis',
                    ctaSecondary: 'Perché è importante'
                },
                proof: { servers: 'Server', trackers: 'Tracker', dataShared: 'Dati condivisi', openSource: 'Open source' },
                threats: {
                    title: 'Il problema della maggior parte delle app finanziarie',
                    subtitle: 'Ogni volta che colleghi un conto o accedi con la tua email, stai consegnando la tua identità finanziaria.',
                    items: [
                        { title: 'I tuoi dati sui loro server', text: 'La maggior parte delle app salva saldi, transazioni e patrimonio su server cloud che non controlli. Una violazione espone tutto.' },
                        { title: 'Collegamento bancario = accesso', text: 'Collegare un conto dà a un servizio terzo accesso in lettura alle tue transazioni, saldi e dettagli del conto.' },
                        { title: 'Raccolta dati invisibile', text: 'SDK analytics, reti pubblicitarie e dati "anonimi" spesso includono il tuo comportamento finanziario e fascia patrimoniale.' }
                    ]
                },
                shields: {
                    title: 'Come Balance ti protegge',
                    subtitle: 'Quattro livelli di privacy, integrati nell\'architettura — non aggiunti come feature.',
                    items: [
                        { title: '100% offline', text: 'L\'app funziona senza connessione internet. Nessun dato lascia il tuo telefono, mai. Non c\'è un server da hackerare perché non c\'è nessun server.' },
                        { title: 'Nessun collegamento bancario', text: 'Inserisci i saldi manualmente. Nessun servizio terzo ottiene mai accesso in lettura ai tuoi conti.' },
                        { title: 'Nessun account, nessun login', text: 'Balance non chiede email, nome o informazioni personali. Lo scarichi, lo apri e inizi a usarlo. Fine.' },
                        { title: 'Codice open source', text: 'Ogni riga di codice è pubblica. Puoi verificare che Balance fa esattamente ciò che dichiara.' }
                    ]
                },
                manifesto: {
                    quote: 'Crediamo che conoscere il proprio patrimonio non debba costare la propria privacy. Balance è stato costruito per dimostrare che un\'app finanziaria può essere utile senza sapere nulla di te.',
                    cite: '— Il team Balance'
                },
                features: {
                    title: 'Privacy non significa meno funzionalità',
                    subtitle: 'Balance ti offre un\'esperienza completa di finanza personale — solo senza la sorveglianza.',
                    items: [
                        { label: 'Dashboard patrimonio', sub: 'Tutto in una vista' },
                        { label: 'Snapshot mensili', sub: 'Monitora i cambiamenti nel tempo' },
                        { label: 'Wallet separati', sub: 'Organizza per tipo di conto' },
                        { label: 'Aggiornamenti rapidi', sub: '30 secondi, non 30 minuti' }
                    ]
                },
                pricing: {
                    title: 'Gratis per iniziare. Nessuna email richiesta.',
                    subtitle: 'Scarica, apri, usa. Passa a Pro solo se ti servono wallet illimitati e storico completo.',
                    free: {
                        title: 'Gratuito', badge: 'Nessuna registrazione',
                        description: 'Privacy totale, funzionalità core, zero costi. Nessuna email, nessuna carta.',
                        price: '€0', priceSuffix: 'per sempre',
                        list: ['Fino a 3 wallet', 'Dashboard completa', 'Privacy totale'],
                        cta: 'Scarica Gratis'
                    },
                    pro: {
                        title: 'Pro Annuale', badge: 'Miglior valore',
                        description: 'Wallet illimitati, snapshot avanzati, storico completo. Stessa privacy.',
                        caption: 'Offerta lancio', price: '€19,99', priceSuffix: "l'anno",
                        alt: '€1,67/mese · Risparmi 44%', note: 'Primo mese gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Inizia la Prova Gratuita',
                        microcopy: 'Annulla in qualsiasi momento. Al termine della prova, il rinnovo segue il piano selezionato.'
                    }
                },
                finalCta: {
                    title: 'Riprendi la tua privacy finanziaria.',
                    text: 'Scarica Balance. Nessuna registrazione, nessun login bancario, nessun tracciamento.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Scarica su App Store'
                }
            },
            lpSimple: {
                meta: {
                    title: 'Balance – Conosci il Tuo Patrimonio in 30 Secondi',
                    description: 'Basta complicare le tue finanze. Balance ti dà una panoramica chiara e privata del tuo patrimonio — liquidità, investimenti, tutto — in meno di un minuto.',
                    ogTitle: 'Balance – Conosci il Tuo Patrimonio in 30 Secondi'
                },
                hero: {
                    kicker: 'Semplice per design',
                    titleHtml: 'Conosci il tuo patrimonio in 30 secondi.',
                    subHtml: 'Nessun collegamento bancario. Nessun setup complicato. Apri l\'app, aggiorna i numeri e vedi <strong>esattamente dove sei</strong> — in una schermata pulita.',
                    ctaPrimary: 'Scarica Gratis',
                    ctaSecondary: 'Scopri come funziona',
                    proof: ['Piano gratuito disponibile', 'Nessuna registrazione', 'Funziona offline']
                },
                steps: {
                    title: 'Tre passaggi. Tutto qui.',
                    subtitle: 'Nessun wizard bancario. Nessun onboarding da 15 campi. Nessuna verifica email. Sei operativo in meno di un minuto.',
                    items: [
                        { title: 'Crea i wallet', text: 'Aggiungi un wallet per ogni conto: banca, broker, exchange crypto, contanti. Chiamalo come vuoi.' },
                        { title: 'Inserisci i saldi', text: 'Digita il saldo corrente. Tutto qui. Nessun sync, nessun import, nessuna attesa.' },
                        { title: 'Vedi il tuo patrimonio', text: 'La dashboard si aggiorna istantaneamente. Liquidità, investimenti, patrimonio totale — tutto in una vista pulita.' }
                    ]
                },
                vs: {
                    title: 'Hai già provato il modo complicato',
                    old: { title: 'Il vecchio modo', items: ['Collegare ogni conto bancario', 'Riparare sync rotti ogni settimana', 'Categorizzare centinaia di transazioni', 'Creare formule nei fogli di calcolo', 'Condividere credenziali con terzi', 'Chiedersi se i dati sono al sicuro'] },
                    new: { title: 'Il modo Balance', items: ['Apri l\'app', 'Digita i saldi', 'Vedi il tuo patrimonio', 'Salva uno snapshot', 'Fatto in 30 secondi', 'I dati restano sul telefono'] }
                },
                pains: {
                    title: 'Costruito per chi vuole chiarezza, non complessità',
                    items: [
                        { title: 'Stanco dei fogli di calcolo?', text: 'Balance sostituisce il tuo foglio Excel del patrimonio con un\'interfaccia più pulita che richiede meno tempo.' },
                        { title: 'Vuoi un check-in veloce?', text: 'Apri l\'app, guarda la dashboard, chiudi l\'app. È un caso d\'uso valido. Balance è progettato per questo.' },
                        { title: 'Il sync bancario si rompe?', text: 'L\'inserimento manuale significa nessuna connessione rotta, nessun "riautenticati", nessuna transazione mancante.' },
                        { title: 'Non hai abbastanza tempo?', text: 'Un check-in mensile richiede meno di un minuto. Salva uno snapshot e hai un record della tua traiettoria finanziaria.' }
                    ]
                },
                testimonials: {
                    title: 'Perché le persone passano a Balance',
                    items: [
                        { quote: 'Passavo 20 minuti al mese su un foglio di calcolo. Ora apro Balance, digito qualche numero e ho finito.', cite: '— Ex utente di fogli di calcolo' },
                        { quote: 'Non ho bisogno che la banca sia collegata per conoscere il mio patrimonio. Mi serve solo il numero. Balance lo capisce.', cite: '— Investitore attento alla privacy' },
                        { quote: 'Finalmente un\'app finanziaria che non cerca di fare tutto. Monitora il mio patrimonio e lo fa bene.', cite: '— Utente minimalista' }
                    ]
                },
                pricing: {
                    title: 'Prezzi semplici. Nessuna sorpresa.',
                    subtitle: 'Inizia gratis. Passa a Pro se vuoi di più.',
                    free: {
                        title: 'Gratuito', badge: 'Inizia qui',
                        description: 'L\'essenziale. Monitora fino a 3 wallet con dashboard pulita e snapshot base.',
                        price: '€0', priceSuffix: 'per sempre',
                        list: ['Fino a 3 wallet', 'Dashboard completa', 'Snapshot essenziali'],
                        cta: 'Scarica Gratis'
                    },
                    pro: {
                        title: 'Pro Annuale', badge: 'Miglior valore',
                        description: 'Wallet illimitati, storico completo, snapshot avanzati. Meno di un caffè al mese.',
                        caption: 'Offerta lancio', price: '€19,99', priceSuffix: "l'anno",
                        alt: '€1,67/mese · Risparmi 44%', note: 'Primo mese gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Inizia la Prova Gratuita',
                        microcopy: 'Annulla in qualsiasi momento. Al termine della prova, il rinnovo segue il piano selezionato.'
                    }
                },
                finalCta: {
                    title: 'Le tue finanze, semplificate.',
                    text: 'Scarica Balance e vedi il tuo patrimonio in meno di un minuto. Nessun setup, nessun sync, nessuno stress.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Scarica su App Store'
                }
            }
        },
        en: {
            global: {
                nav: {
                    overview: 'Overview',
                    pricing: 'Plans',
                    features: 'Features',
                    roadmap: 'Roadmap',
                    download: 'Download',
                    home: 'Home'
                },
                footer: {
                    privacy: 'Privacy Policy',
                    terms: 'Terms and Conditions',
                    contacts: 'Contact',
                    language: 'Language',
                    copyright: '© Balance App. All rights reserved.'
                },
                ui: {
                    menu: 'Menu',
                    appStore: 'App Store',
                    googlePlay: 'Google Play',
                    comingSoon: 'Coming soon',
                    langNames: {
                        it: 'Italian',
                        en: 'English',
                        pt: 'Portuguese'
                    }
                }
            },
            home: {
                meta: {
                    title: 'Balance – Private Personal Finance & Net Worth Tracker',
                    description: 'Balance is a privacy-first personal finance app to track net worth, investments, crypto and assets. Offline, secure and simple.',
                    ogTitle: 'Balance – Private Personal Finance & Net Worth Tracker'
                },
                hero: {
                    badge: 'Privacy-first · Offline · Open source',
                    title: 'Take control of your finances',
                    subtitle: 'Track your net worth, investments, and cash with a private, offline-first personal finance app.',
                    description: 'Everything stays on your device, with no bank connections and no data sharing.',
                    cta: 'Download on the App Store'
                },
                trust: [
                    { label: '100% offline', sub: 'Works without internet' },
                    { label: 'No servers', sub: 'Data stays on your device' },
                    { label: 'Open source', sub: 'Code you can verify' },
                    { label: 'iOS & Android', sub: 'Available everywhere' }
                ],
                context: {
                    title: 'A personal finance app for your full net worth',
                    text: 'Bank accounts, brokerage accounts, crypto, cash, and other assets rarely live in one place. Balance gives you a clear view across everything without relying on bank sync or third-party data access.',
                    highlight: 'Use Balance as a private net worth tracker, investment tracker, and portfolio tracker that mirrors how you actually manage money.'
                },
                clarity: {
                    title: 'See your money clearly over time',
                    text: 'Balance is an offline-first personal finance app built for fast manual updates, simple charts, and a clean dashboard you can trust.',
                    highlight: 'Snapshots help you track changes in cash, investments, and assets over time, so your offline finance app stays useful without turning into a spreadsheet.'
                },
                pricing: {
                    kicker: 'Balance is free',
                    title: 'Go Pro, no limits',
                    intro: 'Start free with 3 wallets. Upgrade to Pro for unlimited wallets, advanced snapshots, and full history.',
                    toggle: {
                        ariaLabel: 'Select plan',
                        annual: 'Yearly',
                        monthly: 'Monthly'
                    },
                    free: {
                        badge: 'To get started',
                        title: 'Balance',
                        description: 'The free version to keep an eye on your essential wallets.',
                        priceHtml: 'Free',
                        list: [
                            'Up to 3 wallets',
                            'Essential snapshots',
                            'Full history'
                        ],
                        cta: 'Download free'
                    },
                    pro: {
                        badgeAnnual: 'Launch offer',
                        badgeMonthly: 'Launch offer',
                        emphasis: 'Best value',
                        emphasisMonthly: 'Flexible',
                        description: 'For anyone who wants to use Balance as a personal financial archive, without limits.',
                        billing: {
                            annual: {
                                title: 'Pro Yearly',
                                description: 'The best value plan for everyday use. Save 44% compared to monthly.',
                                caption: 'Launch offer',
                                priceHtml: '19.99 €<span class="price-suffix">/ year</span>',
                                chip: 'Save 15.89 €',
                                alt: 'Equals 1.67 € / month · Save 15.89 €',
                                note: 'Free trial month.'
                            },
                            monthly: {
                                title: 'Pro Monthly',
                                description: 'All Pro features with the freedom to pay month to month.',
                                caption: 'Subscription',
                                priceHtml: '2.99 €<span class="price-suffix">/ month</span>',
                                chip: 'Flexible',
                                alt: 'Renews automatically each month',
                                note: 'Free trial month.'
                            }
                        },
                        list: [
                            'Unlimited wallets',
                            'Advanced snapshots for deeper analysis',
                            'Complete history to compare your evolution over time'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Start free trial',
                        microcopy: 'After the trial, unless cancelled, renewal follows the selected plan price.'
                    }
                },
                features: {
                    title: 'Features',
                    detailEyebrow: 'Detail',
                    cards: {
                        snapshot: {
                            title: 'Monthly snapshots',
                            text: 'Save your total net worth and compare it over time in a few taps.'
                        },
                        wallet: {
                            title: 'Separate wallets',
                            text: 'Separate bank accounts, brokers, cash, crypto, and other assets into clean wallets.'
                        },
                        dashboard: {
                            title: 'Custom dashboard',
                            text: 'Check net worth, cash, and investments in one simple overview.'
                        },
                        privacy: {
                            title: 'Real privacy',
                            text: 'Local data, no servers, and no account access. You stay in control.'
                        },
                        speed: {
                            title: 'Fast updates',
                            text: 'Update balances and assets fast, with no slow flows or unnecessary steps.'
                        }
                    },
                    detailMap: {
                        snapshot: {
                            title: 'Monthly snapshots',
                            text: 'Save snapshots whenever you want and review how your net worth evolves over time without exporting data or opening spreadsheets.',
                            bullets: [
                                'Save an updated total in a few seconds.',
                                'Compare different dates and quickly see what changed.',
                                'Track net worth, investments, and cash with a clear timeline.'
                            ]
                        },
                        wallet: {
                            title: 'Separate wallets',
                            text: 'Each part of your wealth has its own place: bank accounts, brokers, crypto, cash, and other assets.',
                            bullets: [
                                'Keep everything organized in separate, readable wallets.',
                                'Stay clear even if you use multiple banks or platforms.',
                                'Use a structure that matches how you really manage money.'
                            ]
                        },
                        dashboard: {
                            title: 'Custom dashboard',
                            text: 'The dashboard shows what you own and where it sits in one clear glance.',
                            bullets: [
                                'Total net worth is always visible.',
                                'Cash, investments, and assets stay readable without clutter.',
                                'Built to help you check everything in a few seconds.'
                            ]
                        },
                        privacy: {
                            title: 'Real privacy',
                            text: 'Balance is offline-first by design: no login, no proprietary servers, and no bank sync.',
                            bullets: [
                                'Your data stay on your device.',
                                'No credentials pass through third-party services.',
                                'Open source code makes the approach verifiable.'
                            ]
                        },
                        speed: {
                            title: 'Fast updates',
                            text: 'The app is built for quick manual updates, so it stays useful in everyday use.',
                            bullets: [
                                'Update balances and assets without unnecessary steps.',
                                'Use a focused interface designed for mobile.',
                                'Keep your net worth aligned with very little effort.'
                            ]
                        }
                    }
                },
                faq: {
                    title: 'Frequently asked questions',
                    items: [
                        {
                            q: 'Is Balance private?',
                            a: 'Yes. Balance is a privacy-first personal finance app and offline finance app, so your data stay on your device with no servers, no login, and no data sharing.'
                        },
                        {
                            q: 'Does Balance connect to banks or brokerages?',
                            a: 'No. Balance is designed as a private investment tracker and portfolio tracker without bank connections, so your credentials never pass through third-party services.'
                        },
                        {
                            q: 'What can I track with Balance?',
                            a: 'You can track bank accounts, investments, crypto, cash, and other assets in one dashboard, making Balance a practical net worth tracker for everyday use.'
                        },
                        {
                            q: 'What is the difference between the free version and Pro?',
                            a: 'The free version is enough to get started: it includes up to 3 wallets, the full dashboard, and essential snapshots. Balance Pro removes the wallet limit, adds advanced snapshots, and unlocks full history for a more complete personal finance app experience.'
                        },
                        {
                            q: 'How does the free trial work?',
                            a: 'The first month of Balance Pro is free. After the trial, unless cancelled, renewal follows the monthly or yearly plan you selected.'
                        },
                        {
                            q: 'Is it available on Android?',
                            a: 'Balance is available on iOS. The Android version is on the way.'
                        }
                    ]
                },
                download: {
                    badge: 'Launch offer',
                    title: 'Download',
                    copy: 'Download Balance and unlock Pro with a monthly or yearly subscription: the first month is free.',
                    points: ['Privacy-first', 'Offline', 'Open source'],
                    note: 'At the end of the free trial, unless cancelled, renewal follows the selected plan.'
                }
            },
            balancepro: {
                meta: {
                    title: 'Balance Pro · Launch offer',
                    description: 'Unlock Balance Pro with the first month free, then 2.99 € per month or 19.99 € per year.'
                },
                heroTitle: 'Balance Pro',
                heroText: 'Unlock all advanced features directly in the app with a monthly or yearly subscription.',
                card: {
                    badge: 'Cancel anytime',
                    priceHtml: '2.99 €<span class="price-suffix">/ month</span>',
                    altPrice: '19.99 € / year instead of 35.88 €',
                    note: 'Free trial month.',
                    list: ['Unlimited wallets', 'Advanced snapshots', 'Full history with no limits'],
                    microcopy: 'At the end of the free trial, unless cancelled, renewal follows the selected plan directly in the app.',
                    primaryCtaHtml: '<i class="fa-brands fa-apple"></i> App Store',
                    secondaryCta: 'See plans'
                }
            },
            proWaitlist: {
                meta: {
                    title: 'Balance Pro Waitlist',
                    description: 'Balance Pro is coming. Discover the new features that are on the way.'
                },
                hero: {
                    title: 'Balance Pro is coming',
                    subtitle: 'The upgraded version of Balance will be available on Friday, March 20.'
                },
                countdown: {
                    label: 'What you unlock with Balance Pro'
                },
                features: [
                    {
                        icon: 'fa-wallet',
                        title: 'Unlimited wallets',
                        text: 'Organize all your assets: bank accounts, investments, crypto, cash, and more.'
                    },
                    {
                        icon: 'fa-chart-line',
                        title: 'Advanced snapshots',
                        text: 'Save unlimited snapshots and analyze how your net worth evolves over time.'
                    },
                    {
                        icon: 'fa-history',
                        title: 'Full history',
                        text: 'Access your complete financial history to compare and analyze trends.'
                    },
                    {
                        icon: 'fa-shield-halved',
                        title: 'Absolute privacy',
                        text: 'Everything stays on your device. No servers and no data sharing.'
                    }
                ],
                countdownLabels: {
                    days: 'Days',
                    hours: 'Hours',
                    minutes: 'Minutes',
                    seconds: 'Seconds'
                }
            },
            roadmap: {
                meta: {
                    title: 'Roadmap · Balance',
                    description: 'Balance roadmap: upcoming features for the privacy-first, offline and open source app.',
                    ogTitle: 'Roadmap. Balance'
                },
                hero: {
                    title: 'Balance roadmap',
                    subtitle: 'A project in motion. Transparent, open source and community-driven.',
                    value: "See what we're building and how you can contribute.",
                    repoCtaHtml: '<i class="fa-brands fa-github"></i> GitHub repository',
                    featureCtaHtml: '<i class="fa-solid fa-lightbulb"></i> Suggest a feature'
                },
                status: {
                    version: 'Current version: 1.0',
                    date: 'January 2026',
                    title: 'Project status',
                    text: 'Balance is currently in public launch. Version 1.0 includes the core features to manage cash and investments with a privacy-first approach.'
                },
                timelineTitle: 'Development timeline',
                timeline: [
                    {
                        title: 'Q1 2026 · Public launch',
                        status: 'Completed',
                        items: [
                            'Net worth dashboard with essential charts',
                            'Wallet system for cash and investments',
                            'Manual snapshots with history',
                            'Local data storage',
                            'iOS and Android version',
                            'Public open source repository'
                        ]
                    },
                    {
                        title: 'Q2 2026 · UX improvements',
                        status: 'In progress',
                        items: [
                            'Home screen widgets for iOS and Android',
                            'Advanced interactive charts',
                            'CSV/JSON data export',
                            'Customizable themes (dark/light)',
                            'Snapshot reminder notifications',
                            'Improved onboarding'
                        ]
                    },
                    {
                        title: 'Q3 2026 · Advanced features',
                        status: 'Planned',
                        items: [
                            'Optional cloud backup and sync (E2E encrypted)',
                            'Custom financial goals',
                            'Custom wallet categories',
                            'Advanced multi-period comparison',
                            'Multi-currency support',
                            'API for external integrations'
                        ]
                    },
                    {
                        title: 'Q4 2026 · Ecosystem expansion',
                        status: 'Future',
                        items: [
                            'Web app version (PWA)',
                            'Integration with crypto portfolio trackers',
                            'Automatic monthly/yearly reports',
                            'Multi-user collaboration (family)',
                            'Plugin system for community extensions'
                        ]
                    },
                    {
                        title: '2027+ · Long-term vision',
                        status: 'Vision',
                        items: [
                            'AI insights for wealth analysis',
                            'Marketplace for templates and setups',
                            'Integration with DeFi protocols',
                            'Optional community features and social sharing'
                        ]
                    }
                ],
                principles: {
                    title: 'Development principles',
                    cards: [
                        {
                            title: 'Privacy First',
                            text: 'Every feature must respect local privacy by design. No sensitive data leaves the device without explicit consent.'
                        },
                        {
                            title: 'Open Source',
                            text: 'Public code, transparent roadmap and decisions shared with the community. Every contribution is welcome.'
                        },
                        {
                            title: 'Simplicity',
                            text: 'Clean interface and essential actions. No feature bloat, only what truly matters.'
                        },
                        {
                            title: 'Community Driven',
                            text: 'Priorities are shaped by listening to feedback, issues and proposals from the community.'
                        }
                    ]
                },
                contribute: {
                    title: 'Contribute to the project',
                    text: 'Balance is an open source project. There are many ways to contribute, even without writing code.',
                    cards: [
                        {
                            title: 'Report bugs',
                            text: 'Found an issue? Open a GitHub issue with details and screenshots.',
                            cta: 'Report bug'
                        },
                        {
                            title: 'Suggest features',
                            text: 'Do you have an idea to improve Balance? Share it with the community.',
                            cta: 'Suggest feature'
                        },
                        {
                            title: 'Contribute code',
                            text: 'Developer? Fork the project, implement a feature and open a pull request.',
                            cta: 'Contribution guide'
                        },
                        {
                            title: 'Support the project',
                            text: 'Leave a star on GitHub, share Balance and help us grow.',
                            ctaHtml: '<i class="fa-brands fa-github"></i> Star on GitHub'
                        }
                    ]
                }
            },
            privacy: {
                meta: {
                    title: 'Privacy Policy · Balance',
                    description: 'Balance Privacy Policy, the privacy-first, offline and open source app to manage cash, investments and net worth with full control.',
                    ogTitle: 'Privacy Policy. Balance'
                },
                html: `
                    <h1>Privacy Policy</h1>
                    <p class="last-updated">Last updated: {{date}}</p>
                    <section>
                        <h2>Our philosophy: Privacy First</h2>
                        <p><strong>Balance is designed to fully protect your financial privacy.</strong> The app does not collect, transmit or store your financial data on our servers.</p>
                        <p>When you use the website, we may only process the data you voluntarily choose to send us, for example through the contact form.</p>
                    </section>
                    <section>
                        <h2>1. Data we do NOT collect in the app</h2>
                        <p>The Balance app <strong>does not collect</strong> any of the following information:</p>
                        <ul>
                            <li><strong>Financial data:</strong> bank accounts, balances, transactions, investments, crypto wallets</li>
                            <li><strong>Usage data:</strong> analytics, statistics, in-app behavior</li>
                            <li><strong>Technical data:</strong> IP address, device type, operating system</li>
                            <li><strong>Location data:</strong> GPS, geographic location</li>
                            <li><strong>Identifiers:</strong> cookies, advertising ID, device ID</li>
                        </ul>
                        <p><strong>We do not use trackers, analytics or advertising tools inside the app.</strong></p>
                    </section>
                    <section>
                        <h2>2. Data we collect only if you send them through the website</h2>
                        <p>The website may collect some personal data <strong>only when you voluntarily enter them</strong> into a form.</p>
                        <ul>
                            <li><strong>Contact form:</strong> name, email and message content that you choose to send</li>
                            <li><strong>Website analytics:</strong> Vercel Web Analytics to measure visits and page views in an aggregated, privacy-friendly way, without profiling or advertising cookies</li>
                            <li><strong>Purpose:</strong> to reply to messages you choose to send from the website</li>
                            <li><strong>No profiling:</strong> these data are not used for advertising, cross-site tracking or behavioral analysis</li>
                        </ul>
                    </section>
                    <section>
                        <h2>3. How Balance works</h2>
                        <p>Balance is a <strong>fully offline</strong> application as far as financial data are concerned:</p>
                        <ul>
                            <li>All data you enter in the app are stored <strong>locally on your device</strong></li>
                            <li>The app works without an internet connection</li>
                            <li>We do not connect to banks or external financial services</li>
                            <li>The website and its forms are separate from the financial data stored in the app</li>
                        </ul>
                    </section>
                    <section>
                        <h2>4. iCloud sync (optional feature)</h2>
                        <p>If and when you enable iCloud sync (optional feature):</p>
                        <ul>
                            <li>Your data are synchronized through <strong>Apple's private iCloud</strong></li>
                            <li>The data are end-to-end encrypted by Apple</li>
                            <li>We do not have access to your data on iCloud</li>
                            <li>You can disable sync at any time</li>
                        </ul>
                        <p>For more information about iCloud privacy, please refer to <a href="https://www.apple.com/legal/privacy/" target="_blank" style="color: var(--accent-color);">Apple’s Privacy Policy</a>.</p>
                    </section>
                    <section>
                        <h2>5. Data sharing</h2>
                        <p>The app’s financial data <strong>are not shared with third parties</strong> because they remain on your device.</p>
                        <p>Data voluntarily sent through the website may instead be processed by technical providers strictly necessary for the service, for example:</p>
                        <ul>
                            <li><strong>Form or email delivery providers:</strong> only if used to deliver messages or send requested communications</li>
                        </ul>
                        <p>We do not sell or transfer your data to advertisers or commercial partners.</p>
                    </section>
                    <section>
                        <h2>6. Security</h2>
                        <p>Your data security is supported by:</p>
                        <ul>
                            <li><strong>Local storage:</strong> data never leave your device</li>
                            <li><strong>Separated services:</strong> any website emails are stored in a dedicated database separate from app data</li>
                            <li><strong>iOS encryption:</strong> data benefit from the operating system’s native encryption</li>
                            <li><strong>Face ID/Touch ID:</strong> you can protect app access with biometric authentication</li>
                        </ul>
                    </section>
                    <section>
                        <h2>7. Your rights</h2>
                        <p>You stay in control of both local app data and any data you send us through the website:</p>
                        <ul>
                            <li><strong>Full control:</strong> your data remain only on your device and under your control</li>
                            <li><strong>Deletion:</strong> you can delete all data by uninstalling the app</li>
                            <li><strong>Portability:</strong> you can export your data at any time from the app</li>
                            <li><strong>Website data:</strong> you can ask us to delete data sent through the contact form by writing to us from the Contact page</li>
                        </ul>
                    </section>
                    <section>
                        <h2>8. Open Source</h2>
                        <p>Balance is <strong>fully open source</strong>. You can personally verify that we do not collect data by inspecting the source code on <a href="https://github.com/ozzirr/balance-app-v1" target="_blank" style="color: var(--accent-color);">GitHub</a>.</p>
                        <p>Transparency is a fundamental part of our privacy commitment.</p>
                    </section>
                    <section>
                        <h2>9. Changes to this Privacy Policy</h2>
                        <p>Any changes to this Privacy Policy will be published on this page and communicated through app updates.</p>
                        <p>Continued use of the app after such changes constitutes acceptance of the updated Privacy Policy.</p>
                    </section>
                `
            },
            terms: {
                meta: {
                    title: 'Terms and Conditions · Balance',
                    description: 'Balance terms and conditions for the privacy-first, offline and open source app to manage cash, investments and net worth with full control.',
                    ogTitle: 'Terms and Conditions. Balance'
                },
                html: `
                    <h1>Terms and Conditions</h1>
                    <p class="last-updated">Last updated: {{date}}</p>
                    <section>
                        <h2>1. Acceptance of the Terms</h2>
                        <p>By downloading, installing or using the Balance application ("Service"), you agree to be bound by these Terms and Conditions. If you do not accept these terms, please do not use the app.</p>
                    </section>
                    <section>
                        <h2>2. Description of the Service</h2>
                        <p>Balance is a personal finance application that allows users to manually monitor their net worth, record expenses and view statistics. The service is provided "as is" and may be subject to changes.</p>
                    </section>
                    <section>
                        <h2>3. User Account and Responsibilities</h2>
                        <p>You are responsible for the confidentiality of your credentials (where applicable) and for all activity performed through your device. You agree to provide truthful information and to use the app in compliance with applicable laws.</p>
                    </section>
                    <section>
                        <h2>4. License and App Use</h2>
                        <p>We grant you a limited, non-exclusive and non-transferable license to use the app for personal, non-commercial purposes. You may not copy, modify, distribute or sell any part of the Service without authorization.</p>
                    </section>
                    <section>
                        <h2>5. Limitation of Liability</h2>
                        <p>Balance does not provide financial advice. The information provided by the app is for informational purposes only. We are not responsible for any financial decisions made by the user, nor for any direct or indirect damages arising from the use or inability to use the app.</p>
                    </section>
                    <section>
                        <h2>6. Changes to the Service</h2>
                        <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice. We will not be liable to you or any third party for any modification, suspension or interruption of the Service.</p>
                    </section>
                    <section>
                        <h2>7. Availability and Interruptions</h2>
                        <p>We do not guarantee that the Service will always be available, uninterrupted or error-free. Interruptions may occur due to maintenance or technical issues.</p>
                    </section>
                    <section>
                        <h2>8. Intellectual Property</h2>
                        <p>All intellectual property rights related to the Service (including design, logo, code and content) are the exclusive property of Balance App.</p>
                    </section>
                    <section>
                        <h2>9. Governing Law and Jurisdiction</h2>
                        <p>These Terms are governed by Italian law. Any dispute shall fall under the exclusive jurisdiction of [City/Competent Court], unless mandatory consumer protection rules provide otherwise.</p>
                    </section>
                    <section>
                        <h2>10. Contact</h2>
                        <p>For questions about these Terms, contact us at: [Insert contact email].</p>
                    </section>
                `
            },
            contacts: {
                meta: {
                    title: 'Contact · Balance',
                    description: 'Contact Balance: write to us for support or feedback about the privacy-first, offline and open source app.',
                    ogTitle: 'Contact. Balance'
                },
                title: 'Contact',
                subtitle: 'Questions, feedback or something to report? Write to us directly.',
                form: {
                    honeypot: 'Do not fill this field if you are human',
                    reason: 'Reason for contact',
                    reasonOptions: ['Questions or feedback', 'Bug report', 'Feature request', 'Other'],
                    name: 'Name',
                    namePlaceholder: 'Your name',
                    email: 'Email',
                    emailPlaceholder: 'your@email.com',
                    message: 'Message',
                    messagePlaceholder: 'Describe your request or report here...',
                    submit: 'Send message',
                    sending: 'Sending...',
                    tooFast: 'Submission was too fast. Wait a few seconds and try again.',
                    error: 'Unable to send your message right now. Please try again shortly.',
                    configError: 'Configure the contact integration before using this page.',
                    localDevError: 'For local testing, use `vercel dev` for the API or point the form to a deployed endpoint.',
                    disclaimer: 'Your message is delivered through a third-party service used only for delivery. No tracking or marketing usage.',
                    success: 'Thank you! Your message has been sent successfully.'
                }
            },
            lpInvestors: {
                meta: {
                    title: 'Balance – Track Crypto, Stocks & Assets Privately',
                    description: 'Track your full investment portfolio — crypto, stocks, ETFs, real estate — in one private app. No API keys. No bank connections. No data sharing.',
                    ogTitle: 'Balance – Track Crypto, Stocks & Assets Privately'
                },
                hero: {
                    kicker: 'For investors who value control',
                    titleHtml: 'Track every asset.<br>Share nothing.',
                    subHtml: 'Crypto, stocks, ETFs, cash, real estate — all in <strong>one private dashboard</strong>. No API keys. No bank logins. No third-party access to your portfolio.',
                    ctaPrimary: 'Download Free',
                    ctaSecondary: 'See how it works',
                    proof: '100% offline · Open source · Free tier available'
                },
                assets: { crypto: 'Crypto', stocks: 'Stocks', etfs: 'ETFs', cash: 'Cash', realEstate: 'Real Estate' },
                problem: {
                    title: 'Your portfolio is scattered. Your data shouldn\'t be.',
                    textHtml: 'Most portfolio trackers ask for your exchange API keys, brokerage logins, or bank credentials. Balance takes a different approach: <strong style="color:var(--ink)">you enter the numbers, the app stays offline, and nobody else sees your data.</strong>'
                },
                benefits: [
                    { title: 'No API keys required', text: 'Don\'t hand over read access to your Binance, Coinbase, or brokerage account. Enter your balances manually and keep full control over what\'s visible.' },
                    { title: 'Multi-asset in one view', text: 'See crypto, stocks, bank accounts, and real estate in a single dashboard. No more switching between five apps to understand your net worth.' },
                    { title: 'Snapshot your portfolio', text: 'Save a snapshot of your total holdings each month. Watch your investment trajectory over time with clear, simple charts — no spreadsheets needed.' },
                    { title: 'Works fully offline', text: 'No internet? No problem. Balance works anywhere — on a flight, in the mountains, or just on your couch with airplane mode on. Your data never leaves the device.' },
                    { title: 'Open source & auditable', text: 'Don\'t trust, verify. The code is public. No hidden trackers, no analytics harvesting your portfolio data, no surprises.' },
                    { title: 'Update in seconds', text: 'Quick manual entry means you spend 30 seconds updating instead of 30 minutes debugging a broken bank sync. Fast, reliable, always accurate.' }
                ],
                comparison: {
                    title: 'Balance vs. traditional trackers',
                    subtitle: 'Other tools promise convenience. Balance delivers control.',
                    headers: ['', 'Balance', 'Others'],
                    rows: [
                        ['Requires bank login', 'No', 'Yes'],
                        ['Needs API keys', 'No', 'Yes'],
                        ['Data stored locally', 'Yes', 'Cloud'],
                        ['Works offline', 'Yes', 'No'],
                        ['Open source', 'Yes', 'No'],
                        ['Multi-asset tracking', 'Yes', 'Partial']
                    ]
                },
                pricing: {
                    title: 'Start free. Upgrade when you\'re ready.',
                    subtitle: 'Track up to 3 wallets for free, forever. Go Pro for unlimited wallets, advanced snapshots, and full history.',
                    free: {
                        title: 'Free',
                        badge: 'No card needed',
                        description: 'Everything you need to start tracking your portfolio privately.',
                        price: '€0',
                        priceSuffix: 'forever',
                        list: ['Up to 3 wallets', 'Full dashboard', 'Essential snapshots'],
                        cta: 'Download Free'
                    },
                    pro: {
                        title: 'Pro Annual',
                        badge: 'Best value',
                        description: 'For serious investors. Unlimited tracking, full history, 44% savings.',
                        caption: 'Launch offer',
                        price: '€19.99',
                        priceSuffix: '/year',
                        alt: '€1.67/month · Save €15.89 vs. monthly',
                        note: 'First month free.',
                        list: ['Unlimited wallets', 'Advanced snapshots', 'Complete history'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Start Free Trial',
                        microcopy: 'Cancel anytime. After the trial, renewal follows the selected plan.'
                    }
                },
                finalCta: {
                    title: 'Your portfolio deserves privacy.',
                    text: 'Download Balance and start tracking every asset — without sharing a single data point.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Download on App Store'
                }
            },
            lpPrivacy: {
                meta: {
                    title: 'Balance – The Finance App That Knows Nothing About You',
                    description: 'Your bank tracks every transaction. Your finance app sells your data. Balance doesn\'t. 100% offline, open source, zero data collection.',
                    ogTitle: 'Balance – The Finance App That Knows Nothing About You'
                },
                hero: {
                    kicker: 'Zero data collection',
                    titleHtml: 'Your finance app <em>tracks you</em>.<br>This one <span class="lp-safe">doesn\'t</span>.',
                    sub: 'Balance is a personal finance app that works 100% offline, stores nothing on servers, and never asks for your bank credentials. Your money, your data, your device.',
                    ctaPrimary: 'Download Free',
                    ctaSecondary: 'Why it matters'
                },
                proof: {
                    servers: 'Servers',
                    trackers: 'Trackers',
                    dataShared: 'Data shared',
                    openSource: 'Open source'
                },
                threats: {
                    title: 'The problem with most finance apps',
                    subtitle: 'Every time you connect a bank account or sign in with your email, you\'re handing over your financial identity.',
                    items: [
                        { title: 'Your data on their servers', text: 'Most finance apps store your balances, transactions, and net worth on cloud servers you don\'t control. One breach exposes everything.' },
                        { title: 'Bank connections = access', text: 'Connecting a bank account gives a third-party service read access to your transactions, balances, and account details. Every single one.' },
                        { title: 'Invisible data harvesting', text: 'Analytics SDKs, ad networks, and "anonymous" usage data often include your financial behavior, spending patterns, and net worth range.' }
                    ]
                },
                shields: {
                    title: 'How Balance protects you',
                    subtitle: 'Four layers of privacy, built into the architecture — not bolted on as a feature.',
                    items: [
                        { title: '100% offline', text: 'The app works without an internet connection. No data leaves your phone, ever. There\'s no server to hack because there\'s no server at all.' },
                        { title: 'No bank connections', text: 'You enter your balances manually. This means no third-party service ever gets read access to your bank, brokerage, or exchange accounts.' },
                        { title: 'No account, no login', text: 'Balance doesn\'t ask for your email, name, or any personal information. You download it, open it, and start using it. That\'s it.' },
                        { title: 'Open source code', text: 'Every line of code is public. You — or anyone — can verify that Balance does exactly what it claims. No hidden analytics, no tracking pixels, no surprises.' }
                    ]
                },
                manifesto: {
                    quote: 'We believe knowing your net worth shouldn\'t cost your privacy. Balance was built to prove that a finance app can be useful without knowing anything about you.',
                    cite: '— The Balance team'
                },
                features: {
                    title: 'Privacy doesn\'t mean less features',
                    subtitle: 'Balance gives you a full personal finance experience — just without the surveillance.',
                    items: [
                        { label: 'Net worth dashboard', sub: 'Everything in one view' },
                        { label: 'Monthly snapshots', sub: 'Track changes over time' },
                        { label: 'Separate wallets', sub: 'Organize by account type' },
                        { label: 'Fast updates', sub: '30 seconds, not 30 minutes' }
                    ]
                },
                pricing: {
                    title: 'Free to start. No email required.',
                    subtitle: 'Download, open, use. Upgrade to Pro only if you need unlimited wallets and full history.',
                    free: {
                        title: 'Free',
                        badge: 'No signup',
                        description: 'Full privacy, core features, zero cost. No email, no card, no strings.',
                        price: '€0',
                        priceSuffix: 'forever',
                        list: ['Up to 3 wallets', 'Full dashboard', 'Full privacy'],
                        cta: 'Download Free'
                    },
                    pro: {
                        title: 'Pro Annual',
                        badge: 'Best value',
                        description: 'Unlimited wallets, advanced snapshots, complete history. Same privacy.',
                        caption: 'Launch offer',
                        price: '€19.99',
                        priceSuffix: '/year',
                        alt: '€1.67/month · Save 44%',
                        note: 'First month free.',
                        list: ['Unlimited wallets', 'Advanced snapshots', 'Complete history'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Start Free Trial',
                        microcopy: 'Cancel anytime. After the trial, renewal follows the selected plan.'
                    }
                },
                finalCta: {
                    title: 'Take back your financial privacy.',
                    text: 'Download Balance. No signup, no bank login, no tracking. Just a clean app that respects your data.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Download on App Store'
                }
            },
            lpSimple: {
                meta: {
                    title: 'Balance – Know Your Net Worth in 30 Seconds',
                    description: 'Stop overcomplicating your finances. Balance gives you a clear, private overview of your net worth — cash, investments, everything — in under a minute.',
                    ogTitle: 'Balance – Know Your Net Worth in 30 Seconds'
                },
                hero: {
                    kicker: 'Simple by design',
                    titleHtml: 'Know your net worth in 30 seconds.',
                    subHtml: 'No bank connections. No complicated setup. Just open the app, update your numbers, and see <strong>exactly where you stand</strong> — in one clean screen.',
                    ctaPrimary: 'Download Free',
                    ctaSecondary: 'See how it works',
                    proof: ['Free tier available', 'No signup', 'Works offline']
                },
                steps: {
                    title: 'Three steps. That\'s it.',
                    subtitle: 'No bank login wizard. No 15-field onboarding. No email verification. You\'re up and running in under a minute.',
                    items: [
                        { title: 'Create wallets', text: 'Add a wallet for each account: bank, brokerage, crypto exchange, cash. Name it anything you want.' },
                        { title: 'Enter balances', text: 'Type in the current balance. That\'s it. No sync, no import, no waiting. Just the number.' },
                        { title: 'See your net worth', text: 'Your dashboard updates instantly. Cash, investments, total net worth — everything in one clean view.' }
                    ]
                },
                vs: {
                    title: 'You\'ve tried the complicated way',
                    old: {
                        title: 'The old way',
                        items: ['Connect every bank account', 'Fix broken syncs every week', 'Categorize hundreds of transactions', 'Create spreadsheet formulas', 'Share credentials with third parties', 'Wonder if your data is safe']
                    },
                    new: {
                        title: 'The Balance way',
                        items: ['Open the app', 'Type your balances', 'See your net worth', 'Save a snapshot', 'Done in 30 seconds', 'Data stays on your phone']
                    }
                },
                pains: {
                    title: 'Built for people who want clarity, not complexity',
                    items: [
                        { title: 'Tired of spreadsheets?', text: 'Balance replaces your net worth spreadsheet with a cleaner interface that takes less time to update and looks better doing it.' },
                        { title: 'Want a quick check-in?', text: 'Open the app, glance at the dashboard, close the app. That\'s a valid use case. Balance is designed for it.' },
                        { title: 'Bank sync keeps breaking?', text: 'Manual entry means no broken connections, no "please re-authenticate", no missing transactions. It just works, every time.' },
                        { title: 'Not enough time?', text: 'A monthly check-in takes under a minute. Save a snapshot and you\'ve got a record of your financial trajectory with zero effort.' }
                    ]
                },
                testimonials: {
                    title: 'Why people switch to Balance',
                    items: [
                        { quote: 'I used to spend 20 minutes updating a spreadsheet every month. Now I open Balance, type a few numbers, and I\'m done. Best switch I\'ve made.', cite: '— Former spreadsheet user' },
                        { quote: 'I don\'t need my bank connected to know my net worth. I just need the number. Balance gets that, and it\'s refreshingly simple.', cite: '— Privacy-focused investor' },
                        { quote: 'Finally a finance app that doesn\'t try to be everything. It tracks my net worth and does it well. That\'s all I wanted.', cite: '— Minimalist user' }
                    ]
                },
                pricing: {
                    title: 'Simple pricing. No surprises.',
                    subtitle: 'Start free. Upgrade if you want more.',
                    free: {
                        title: 'Free',
                        badge: 'Start here',
                        description: 'The essentials. Track up to 3 wallets with a clean dashboard and basic snapshots.',
                        price: '€0',
                        priceSuffix: 'forever',
                        list: ['Up to 3 wallets', 'Full dashboard', 'Essential snapshots'],
                        cta: 'Download Free'
                    },
                    pro: {
                        title: 'Pro Annual',
                        badge: 'Best value',
                        description: 'Unlimited wallets, full history, advanced snapshots. Less than a coffee per month.',
                        caption: 'Launch offer',
                        price: '€19.99',
                        priceSuffix: '/year',
                        alt: '€1.67/month · Save 44%',
                        note: 'First month free.',
                        list: ['Unlimited wallets', 'Advanced snapshots', 'Complete history'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Start Free Trial',
                        microcopy: 'Cancel anytime. After the trial, renewal follows the selected plan.'
                    }
                },
                finalCta: {
                    title: 'Your finances, simplified.',
                    text: 'Download Balance and see your net worth in under a minute. No setup, no sync, no stress.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Download on App Store'
                }
            }
        },
        pt: {
            global: {
                nav: {
                    overview: 'Visão geral',
                    pricing: 'Planos',
                    features: 'Funcionalidades',
                    roadmap: 'Roadmap',
                    download: 'Download',
                    home: 'Início'
                },
                footer: {
                    privacy: 'Política de Privacidade',
                    terms: 'Termos e Condições',
                    contacts: 'Contactos',
                    language: 'Idioma',
                    copyright: '© Balance App. Todos os direitos reservados.'
                },
                ui: {
                    menu: 'Menu',
                    appStore: 'App Store',
                    googlePlay: 'Google Play',
                    comingSoon: 'Em breve',
                    langNames: {
                        it: 'Italiano',
                        en: 'Inglês',
                        pt: 'Português'
                    }
                }
            },
            home: {
                meta: {
                    title: 'Balance – App de finanças pessoais e tracker de património privado',
                    description: 'Balance é uma app de finanças pessoais privacy-first para acompanhar património, investimentos, cripto e ativos. Offline, segura e simples.',
                    ogTitle: 'Balance – App de finanças pessoais e tracker de património privado'
                },
                hero: {
                    badge: 'Privacy-first · Offline · Open source',
                    title: 'Assuma o controlo das suas finanças',
                    subtitle: 'Acompanhe património, investimentos e liquidez com uma app de finanças pessoais privada e offline-first.',
                    description: 'Balance ajuda-o a acompanhar contas, investimentos, cripto e ativos num dashboard simples. Tudo fica no seu dispositivo, sem ligações bancárias e sem partilha de dados.',
                    cta: 'Descarregar na App Store'
                },
                trust: [
                    { label: '100% offline', sub: 'Funciona sem internet' },
                    { label: 'Sem servidores', sub: 'Os dados ficam no seu dispositivo' },
                    { label: 'Open source', sub: 'Código verificável' },
                    { label: 'iOS & Android', sub: 'Disponível em qualquer lugar' }
                ],
                context: {
                    title: 'Uma app de finanças pessoais para todo o seu património',
                    text: 'Contas bancárias, brokers, cripto, liquidez e outros ativos raramente estão no mesmo lugar. Balance dá-lhe uma visão clara de tudo sem sync bancária nem acesso de terceiros.',
                    highlight: 'Use o Balance como tracker de património, tracker de investimentos e portfolio tracker privado, ajustado à forma como realmente gere o seu dinheiro.'
                },
                clarity: {
                    title: 'Veja o seu dinheiro com clareza ao longo do tempo',
                    text: 'Balance é uma app de finanças pessoais offline-first pensada para atualizações manuais rápidas, gráficos simples e um dashboard limpo.',
                    highlight: 'Os snapshots ajudam-no a acompanhar património, investimentos e ativos ao longo do tempo, para que a sua app financeira offline continue útil sem virar uma folha de cálculo.'
                },
                pricing: {
                    kicker: 'Balance é grátis',
                    title: 'Passe para o Pro, sem limites',
                    intro: 'Comece grátis com 3 wallets. Passe para o Pro para wallets ilimitadas, snapshots avançados e histórico completo.',
                    toggle: {
                        ariaLabel: 'Selecionar plano',
                        annual: 'Anual',
                        monthly: 'Mensal'
                    },
                    free: {
                        badge: 'Para começar',
                        title: 'Balance',
                        description: 'A versão gratuita para acompanhar as wallets essenciais.',
                        priceHtml: 'Grátis',
                        list: [
                            'Até 3 wallets',
                            'Snapshots essenciais',
                            'Histórico completo'
                        ],
                        cta: 'Download grátis'
                    },
                    pro: {
                        badgeAnnual: 'Oferta de lançamento',
                        badgeMonthly: 'Oferta de lançamento',
                        emphasis: 'Melhor valor',
                        emphasisMonthly: 'Flexível',
                        description: 'Para quem quer usar o Balance como arquivo financeiro pessoal, sem limites.',
                        billing: {
                            annual: {
                                title: 'Pro Anual',
                                description: 'O plano mais vantajoso para uso diário. Poupa 44% face ao plano mensal.',
                                caption: 'Oferta de lançamento',
                                priceHtml: '19,99 €<span class="price-suffix">por ano</span>',
                                chip: 'Poupa 15,89 €',
                                alt: 'Equivale a 1,67 € por mês · Poupa 15,89 €',
                                note: 'Primeiro mês de teste gratuito.'
                            },
                            monthly: {
                                title: 'Pro Mensal',
                                description: 'Todas as funcionalidades Pro com a liberdade de pagar mês a mês.',
                                caption: 'Subscrição',
                                priceHtml: '2,99 €<span class="price-suffix">por mês</span>',
                                chip: 'Flexível',
                                alt: 'Renovação automática cada mês',
                                note: 'Primeiro mês de teste gratuito.'
                            }
                        },
                        list: [
                            'Wallets ilimitadas',
                            'Snapshots avançados para análises mais precisas',
                            'Histórico completo para comparar a evolução ao longo do tempo'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Começar prova gratuita',
                        microcopy: 'Após a prova, salvo cancelamento, a renovação segue o preço do plano selecionado.'
                    }
                },
                features: {
                    title: 'Funcionalidades',
                    detailEyebrow: 'Detalhe',
                    cards: {
                        snapshot: {
                            title: 'Snapshots mensais',
                            text: 'Guarde o valor total do património e compare-o ao longo do tempo em poucos toques.'
                        },
                        wallet: {
                            title: 'Wallets separadas',
                            text: 'Separe contas, brokers, liquidez, cripto e outros ativos em wallets organizadas.'
                        },
                        dashboard: {
                            title: 'Dashboard personalizada',
                            text: 'Veja património, liquidez e investimentos numa visão simples e imediata.'
                        },
                        privacy: {
                            title: 'Privacidade real',
                            text: 'Dados locais, sem servidores e sem acesso às contas: o controlo continua seu.'
                        },
                        speed: {
                            title: 'Atualizações rápidas',
                            text: 'Atualize saldos e ativos rapidamente, sem fluxos lentos nem passos desnecessários.'
                        }
                    },
                    detailMap: {
                        snapshot: {
                            title: 'Snapshots mensais',
                            text: 'Registe snapshots quando quiser e reveja a evolução do património sem exportar dados nem abrir folhas de cálculo.',
                            bullets: [
                                'Guarda o valor atualizado em poucos segundos.',
                                'Compara datas diferentes e percebe logo o que mudou.',
                                'Acompanha património, investimentos e liquidez com um histórico claro.'
                            ]
                        },
                        wallet: {
                            title: 'Wallets separadas',
                            text: 'Cada parte do património tem o seu espaço: contas bancárias, brokers, cripto, liquidez e outros ativos.',
                            bullets: [
                                'Organiza tudo em wallets separadas e fáceis de ler.',
                                'Mantém ordem mesmo usando vários bancos ou plataformas.',
                                'A estrutura replica a forma como gere realmente o seu dinheiro.'
                            ]
                        },
                        dashboard: {
                            title: 'Dashboard personalizada',
                            text: 'O dashboard mostra quanto tem e onde está, com um olhar rápido realmente útil.',
                            bullets: [
                                'Património total sempre em destaque.',
                                'Liquidez, investimentos e ativos legíveis sem ruído.',
                                'Pensado para controlar tudo em poucos segundos.'
                            ]
                        },
                        privacy: {
                            title: 'Privacidade real',
                            text: 'O Balance nasce offline-first: sem login, sem servidores proprietários e sem sincronizações bancárias.',
                            bullets: [
                                'Os dados ficam no seu dispositivo.',
                                'Nenhuma credencial passa por serviços externos.',
                                'Código open source e abordagem verificável.'
                            ]
                        },
                        speed: {
                            title: 'Atualizações rápidas',
                            text: 'A app foi construída para atualizações manuais rápidas, por isso continua útil no uso do dia a dia.',
                            bullets: [
                                'Atualiza saldos e ativos sem passos supérfluos.',
                                'Interface essencial, pensada para mobile.',
                                'Perfeita para manter o património alinhado com frequência.'
                            ]
                        }
                    }
                },
                faq: {
                    title: 'Perguntas frequentes',
                    items: [
                        {
                            q: 'O Balance é realmente privado?',
                            a: 'Sim. Balance é uma app de finanças pessoais privacy-first e offline, por isso os seus dados ficam no dispositivo sem servidores, login ou partilha.'
                        },
                        {
                            q: 'O Balance liga-se a bancos ou brokers?',
                            a: 'Não. Balance foi pensado como tracker de investimentos e portfolio tracker privado sem ligações bancárias, por isso as suas credenciais nunca passam por serviços externos.'
                        },
                        {
                            q: 'O que posso acompanhar com o Balance?',
                            a: 'Pode acompanhar contas bancárias, investimentos, cripto, liquidez e outros ativos num único dashboard, usando o Balance como tracker de património no dia a dia.'
                        },
                        {
                            q: 'Qual é a diferença entre a versão gratuita e a Pro?',
                            a: 'A versão gratuita inclui até 3 wallets, dashboard completo e snapshots essenciais. Balance Pro remove o limite de wallets, adiciona snapshots avançados e desbloqueia o histórico completo para uma experiência mais completa.'
                        },
                        {
                            q: 'Como funciona o período gratuito?',
                            a: 'O primeiro mês do Balance Pro é grátis. Depois da prova, salvo cancelamento, a renovação segue o plano mensal ou anual selecionado.'
                        },
                        {
                            q: 'Está disponível para Android?',
                            a: 'Balance está disponível para iOS. A versão Android está a caminho.'
                        }
                    ]
                },
                download: {
                    badge: 'Oferta de lançamento',
                    title: 'Download',
                    copy: 'Faça download do Balance e ative o Pro com uma subscrição mensal ou anual: o primeiro mês é grátis.',
                    points: ['Privacy-first', 'Offline', 'Open source'],
                    note: 'No final do período gratuito, salvo cancelamento, a renovação segue o plano selecionado.'
                }
            },
            balancepro: {
                meta: {
                    title: 'Balance Pro · Oferta de lançamento',
                    description: 'Desbloqueie o Balance Pro com o primeiro mês grátis, depois 2,99 € por mês ou 19,99 € por ano.'
                },
                heroTitle: 'Balance Pro',
                heroText: 'Desbloqueie todas as funcionalidades avançadas diretamente na app com subscrição mensal ou anual.',
                card: {
                    badge: 'Cancela quando quiser',
                    priceHtml: '2,99 €<span class="price-suffix">por mês</span>',
                    altPrice: '19,99 € por ano em vez de 35,88 €',
                    note: 'Primeiro mês de teste gratuito.',
                    list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo sem limites'],
                    microcopy: 'No final do período gratuito, salvo cancelamento, a renovação segue o plano selecionado diretamente na app.',
                    primaryCtaHtml: '<i class="fa-brands fa-apple"></i> App Store',
                    secondaryCta: 'Ver planos'
                }
            },
            proWaitlist: {
                meta: {
                    title: 'Balance Pro Waitlist',
                    description: 'Balance Pro esta chegando. Descubra as novas funcionalidades que estao prestes a chegar.'
                },
                hero: {
                    title: 'Balance Pro esta chegando',
                    subtitle: 'A versao melhorada do Balance estara disponivel sexta-feira, 20 de marco.'
                },
                countdown: {
                    label: 'O que desbloqueia com Balance Pro'
                },
                features: [
                    {
                        icon: 'fa-wallet',
                        title: 'Wallets ilimitadas',
                        text: 'Organize todos os seus ativos: contas bancarias, investimentos, cripto, cash e mais.'
                    },
                    {
                        icon: 'fa-chart-line',
                        title: 'Snapshots avancados',
                        text: 'Guarde snapshots ilimitados e analise a evolucao do seu patrimonio ao longo do tempo.'
                    },
                    {
                        icon: 'fa-history',
                        title: 'Historico completo',
                        text: 'Aceda ao seu historico financeiro completo para comparar e analisar tendencias.'
                    },
                    {
                        icon: 'fa-shield-halved',
                        title: 'Privacidade absoluta',
                        text: 'Tudo fica no seu dispositivo. Sem servidores e sem partilha de dados.'
                    }
                ],
                countdownLabels: {
                    days: 'Dias',
                    hours: 'Horas',
                    minutes: 'Minutos',
                    seconds: 'Segundos'
                }
            },
            roadmap: {
                meta: {
                    title: 'Roadmap · Balance',
                    description: 'Roadmap do Balance: próximas funcionalidades da app privacy-first, offline e open source.',
                    ogTitle: 'Roadmap. Balance'
                },
                hero: {
                    title: 'Roadmap do Balance',
                    subtitle: 'Um projeto em evolução. Transparente, open source e guiado pela comunidade.',
                    value: 'Descubra o que estamos a construir e como pode contribuir.',
                    repoCtaHtml: '<i class="fa-brands fa-github"></i> Repositório GitHub',
                    featureCtaHtml: '<i class="fa-solid fa-lightbulb"></i> Propor uma funcionalidade'
                },
                status: {
                    version: 'Versão atual: 1.0',
                    date: 'Janeiro 2026',
                    title: 'Estado do projeto',
                    text: 'Balance está atualmente em lançamento público. A versão 1.0 inclui as funcionalidades core para gerir liquidez e investimentos com uma abordagem privacy-first.'
                },
                timelineTitle: 'Timeline de desenvolvimento',
                timeline: [
                    {
                        title: 'Q1 2026 · Lançamento público',
                        status: 'Concluído',
                        items: [
                            'Dashboard patrimonial com gráficos essenciais',
                            'Sistema de wallets para liquidez e investimentos',
                            'Snapshots manuais com histórico',
                            'Armazenamento local de dados',
                            'Versão iOS e Android',
                            'Repositório open source público'
                        ]
                    },
                    {
                        title: 'Q2 2026 · Melhorias de UX',
                        status: 'Em desenvolvimento',
                        items: [
                            'Widgets no ecrã inicial para iOS e Android',
                            'Gráficos interativos avançados',
                            'Exportação de dados em CSV/JSON',
                            'Temas personalizáveis (dark/light)',
                            'Notificações de lembrete para snapshots',
                            'Onboarding melhorado'
                        ]
                    },
                    {
                        title: 'Q3 2026 · Funcionalidades avançadas',
                        status: 'Planeado',
                        items: [
                            'Backup e sincronização cloud opcionais (E2E encrypted)',
                            'Objetivos financeiros personalizados',
                            'Categorias personalizadas para wallets',
                            'Comparação avançada entre múltiplos períodos',
                            'Suporte multi-moeda',
                            'API para integrações externas'
                        ]
                    },
                    {
                        title: 'Q4 2026 · Expansão do ecossistema',
                        status: 'Futuro',
                        items: [
                            'Versão web app (PWA)',
                            'Integração com trackers de portfolio cripto',
                            'Relatórios automáticos mensais/anuais',
                            'Colaboração multiutilizador (família)',
                            'Sistema de plugins para extensões da comunidade'
                        ]
                    },
                    {
                        title: '2027+ · Visão de longo prazo',
                        status: 'Visão',
                        items: [
                            'AI insights para análise patrimonial',
                            'Marketplace para templates e configurações',
                            'Integração com protocolos DeFi',
                            'Funcionalidades de comunidade e partilha social opcional'
                        ]
                    }
                ],
                principles: {
                    title: 'Princípios de desenvolvimento',
                    cards: [
                        {
                            title: 'Privacy First',
                            text: 'Cada funcionalidade deve respeitar a privacidade local por definição. Nenhum dado sensível sai do dispositivo sem consentimento explícito.'
                        },
                        {
                            title: 'Open Source',
                            text: 'Código público, roadmap transparente e decisões partilhadas com a comunidade. Toda contribuição é bem-vinda.'
                        },
                        {
                            title: 'Simplicidade',
                            text: 'Interface limpa e ações essenciais. Nada de feature bloat, apenas o que realmente importa.'
                        },
                        {
                            title: 'Driven pela comunidade',
                            text: 'As prioridades são definidas ouvindo feedback, issues e propostas da comunidade.'
                        }
                    ]
                },
                contribute: {
                    title: 'Contribua para o projeto',
                    text: 'Balance é um projeto open source. Há muitas formas de contribuir, mesmo sem escrever código.',
                    cards: [
                        {
                            title: 'Reportar bugs',
                            text: 'Encontrou um problema? Abra uma issue no GitHub com detalhes e screenshots.',
                            cta: 'Reportar bug'
                        },
                        {
                            title: 'Propor funcionalidades',
                            text: 'Tem uma ideia para melhorar o Balance? Partilhe-a com a comunidade.',
                            cta: 'Propor funcionalidade'
                        },
                        {
                            title: 'Contribuir com código',
                            text: 'Programador? Faça um fork, implemente uma funcionalidade e abra uma pull request.',
                            cta: 'Guia de contribuição'
                        },
                        {
                            title: 'Apoiar o projeto',
                            text: 'Deixe uma estrela no GitHub, partilhe o Balance e ajude-nos a crescer.',
                            ctaHtml: '<i class="fa-brands fa-github"></i> Dar estrela no GitHub'
                        }
                    ]
                }
            },
            privacy: {
                meta: {
                    title: 'Política de Privacidade · Balance',
                    description: 'Política de Privacidade do Balance, a app privacy-first, offline e open source para gerir liquidez, investimentos e património com controlo total.',
                    ogTitle: 'Política de Privacidade. Balance'
                },
                html: `
                    <h1>Política de Privacidade</h1>
                    <p class="last-updated">Última atualização: {{date}}</p>
                    <section>
                        <h2>A nossa filosofia: Privacy First</h2>
                        <p><strong>Balance foi concebido para proteger totalmente a sua privacidade financeira.</strong> A app não recolhe, não transmite e não armazena os seus dados financeiros nos nossos servidores.</p>
                        <p>Quando utiliza o website, podemos tratar apenas os dados que decide enviar-nos voluntariamente, por exemplo através do formulário de contacto.</p>
                    </section>
                    <section>
                        <h2>1. Dados que NÃO recolhemos na app</h2>
                        <p>A app Balance <strong>não recolhe</strong> nenhuma das seguintes informações:</p>
                        <ul>
                            <li><strong>Dados financeiros:</strong> contas bancárias, saldos, transações, investimentos, wallets cripto</li>
                            <li><strong>Dados de utilização:</strong> analytics, estatísticas, comportamento na app</li>
                            <li><strong>Dados técnicos:</strong> endereço IP, tipo de dispositivo, sistema operativo</li>
                            <li><strong>Dados de localização:</strong> GPS, localização geográfica</li>
                            <li><strong>Identificadores:</strong> cookies, advertising ID, device ID</li>
                        </ul>
                        <p><strong>Não utilizamos trackers, analytics nem ferramentas de publicidade dentro da app.</strong></p>
                    </section>
                    <section>
                        <h2>2. Dados que recolhemos apenas se os enviar pelo site</h2>
                        <p>O site pode recolher alguns dados pessoais <strong>apenas quando os introduz voluntariamente</strong> num formulário.</p>
                        <ul>
                            <li><strong>Formulário de contacto:</strong> nome, email e conteúdo da mensagem que escolher enviar</li>
                            <li><strong>Analytics do site:</strong> Vercel Web Analytics para medir visitas e visualizações de página de forma agregada e privacy-friendly, sem cookies de perfilização ou publicidade</li>
                            <li><strong>Finalidade:</strong> responder às mensagens que decidir enviar pelo site</li>
                            <li><strong>Sem perfilização:</strong> estes dados não são usados para publicidade, tracking cross-site ou análise comportamental</li>
                        </ul>
                    </section>
                    <section>
                        <h2>3. Como funciona o Balance</h2>
                        <p>Balance é uma aplicação <strong>totalmente offline</strong> no que diz respeito aos dados financeiros:</p>
                        <ul>
                            <li>Todos os dados que introduz na app são guardados <strong>localmente no seu dispositivo</strong></li>
                            <li>A app funciona sem ligação à internet</li>
                            <li>Não nos ligamos a bancos ou serviços financeiros externos</li>
                            <li>O website e os seus formulários estão separados dos dados financeiros guardados na app</li>
                        </ul>
                    </section>
                    <section>
                        <h2>4. Sincronização iCloud (funcionalidade opcional)</h2>
                        <p>Se e quando ativar a sincronização iCloud (funcionalidade opcional):</p>
                        <ul>
                            <li>Os seus dados são sincronizados através do <strong>iCloud privado da Apple</strong></li>
                            <li>Os dados são encriptados end-to-end pela Apple</li>
                            <li>Nós não temos acesso aos seus dados no iCloud</li>
                            <li>Pode desativar a sincronização em qualquer momento</li>
                        </ul>
                        <p>Para mais informações sobre a privacidade do iCloud, consulte a <a href="https://www.apple.com/legal/privacy/" target="_blank" style="color: var(--accent-color);">Política de Privacidade da Apple</a>.</p>
                    </section>
                    <section>
                        <h2>5. Partilha de dados</h2>
                        <p>Os dados financeiros da app <strong>não são partilhados com terceiros</strong> porque permanecem no seu dispositivo.</p>
                        <p>Os dados enviados voluntariamente através do website podem, no entanto, ser tratados por fornecedores técnicos estritamente necessários ao serviço, por exemplo:</p>
                        <ul>
                            <li><strong>Fornecedores de envio de formulários ou email:</strong> apenas se usados para entregar mensagens ou enviar comunicações solicitadas</li>
                        </ul>
                        <p>Não vendemos nem cedemos os seus dados a anunciantes ou parceiros comerciais.</p>
                    </section>
                    <section>
                        <h2>6. Segurança</h2>
                        <p>A segurança dos seus dados é suportada por:</p>
                        <ul>
                            <li><strong>Armazenamento local:</strong> os dados nunca saem do seu dispositivo</li>
                            <li><strong>Serviços separados:</strong> eventuais emails do site são guardados numa base de dados dedicada, separada dos dados da app</li>
                            <li><strong>Encriptação iOS:</strong> os dados beneficiam da encriptação nativa do sistema operativo</li>
                            <li><strong>Face ID/Touch ID:</strong> pode proteger o acesso à app com autenticação biométrica</li>
                        </ul>
                    </section>
                    <section>
                        <h2>7. Os seus direitos</h2>
                        <p>Tem controlo sobre os dados locais da app e também sobre os dados que nos envia pelo site:</p>
                        <ul>
                            <li><strong>Controlo total:</strong> os seus dados permanecem apenas no seu dispositivo e sob o seu controlo</li>
                            <li><strong>Eliminação:</strong> pode apagar todos os dados desinstalando a app</li>
                            <li><strong>Portabilidade:</strong> pode exportar os seus dados em qualquer momento a partir da app</li>
                            <li><strong>Dados do site:</strong> pode pedir a eliminação dos dados enviados pelo formulário de contacto escrevendo-nos através da página Contactos</li>
                        </ul>
                    </section>
                    <section>
                        <h2>8. Open Source</h2>
                        <p>Balance é <strong>totalmente open source</strong>. Pode verificar pessoalmente que não recolhemos dados inspecionando o código-fonte no <a href="https://github.com/ozzirr/balance-app-v1" target="_blank" style="color: var(--accent-color);">GitHub</a>.</p>
                        <p>A transparência é uma parte fundamental do nosso compromisso com a privacidade.</p>
                    </section>
                    <section>
                        <h2>9. Alterações a esta Política de Privacidade</h2>
                        <p>Quaisquer alterações a esta Política de Privacidade serão publicadas nesta página e comunicadas através de atualizações da app.</p>
                        <p>A continuação da utilização da app após essas alterações constitui aceitação da Política de Privacidade atualizada.</p>
                    </section>
                `
            },
            terms: {
                meta: {
                    title: 'Termos e Condições · Balance',
                    description: 'Termos e condições do Balance para a app privacy-first, offline e open source para gerir liquidez, investimentos e património com controlo total.',
                    ogTitle: 'Termos e Condições. Balance'
                },
                html: `
                    <h1>Termos e Condições</h1>
                    <p class="last-updated">Última atualização: {{date}}</p>
                    <section>
                        <h2>1. Aceitação dos Termos</h2>
                        <p>Ao descarregar, instalar ou utilizar a aplicação Balance ("Serviço"), concorda em ficar vinculado por estes Termos e Condições. Se não aceitar estes termos, por favor não utilize a app.</p>
                    </section>
                    <section>
                        <h2>2. Descrição do Serviço</h2>
                        <p>Balance é uma aplicação de finanças pessoais que permite aos utilizadores acompanhar manualmente o seu património, registar despesas e visualizar estatísticas. O serviço é fornecido "tal como está" e pode estar sujeito a alterações.</p>
                    </section>
                    <section>
                        <h2>3. Conta e Responsabilidades do Utilizador</h2>
                        <p>O utilizador é responsável pela confidencialidade das suas credenciais (quando aplicável) e por toda a atividade realizada através do seu dispositivo. O utilizador compromete-se a fornecer informações verdadeiras e a utilizar a app em conformidade com a legislação aplicável.</p>
                    </section>
                    <section>
                        <h2>4. Licença e Utilização da App</h2>
                        <p>Concedemos ao utilizador uma licença limitada, não exclusiva e intransmissível para utilizar a app para fins pessoais e não comerciais. É proibido copiar, modificar, distribuir ou vender qualquer parte do Serviço sem autorização.</p>
                    </section>
                    <section>
                        <h2>5. Limitação de Responsabilidade</h2>
                        <p>Balance não fornece aconselhamento financeiro. As informações fornecidas pela app têm apenas caráter informativo. Não somos responsáveis por quaisquer decisões financeiras tomadas pelo utilizador, nem por danos diretos ou indiretos resultantes da utilização ou da impossibilidade de utilização da app.</p>
                    </section>
                    <section>
                        <h2>6. Alterações ao Serviço</h2>
                        <p>Reservamo-nos o direito de modificar ou interromper, temporária ou permanentemente, o Serviço com ou sem aviso prévio. Não seremos responsáveis perante o utilizador ou terceiros por qualquer modificação, suspensão ou interrupção do Serviço.</p>
                    </section>
                    <section>
                        <h2>7. Interrupções e Disponibilidade</h2>
                        <p>Não garantimos que o Serviço esteja sempre disponível, ininterrupto ou livre de erros. Podem ocorrer interrupções devido a manutenção ou problemas técnicos.</p>
                    </section>
                    <section>
                        <h2>8. Propriedade Intelectual</h2>
                        <p>Todos os direitos de propriedade intelectual relacionados com o Serviço (incluindo design, logótipo, código e conteúdos) são propriedade exclusiva da Balance App.</p>
                    </section>
                    <section>
                        <h2>9. Lei Aplicável e Foro</h2>
                        <p>Os presentes Termos são regidos pela legislação italiana. Qualquer litígio ficará sujeito ao foro exclusivo de [Cidade/Tribunal Competente], salvo disposições legais imperativas de proteção do consumidor em contrário.</p>
                    </section>
                    <section>
                        <h2>10. Contacto</h2>
                        <p>Para questões sobre estes Termos, contacte-nos em: [Inserir email de contacto].</p>
                    </section>
                `
            },
            contacts: {
                meta: {
                    title: 'Contactos · Balance',
                    description: 'Contacte a Balance: escreva-nos para suporte ou feedback sobre a app privacy-first, offline e open source.',
                    ogTitle: 'Contactos. Balance'
                },
                title: 'Contactos',
                subtitle: 'Tem perguntas, feedback ou algo para reportar? Escreva-nos diretamente.',
                form: {
                    honeypot: 'Não preencha este campo se for humano',
                    reason: 'Motivo do contacto',
                    reasonOptions: ['Perguntas ou feedback', 'Reportar bug', 'Propor funcionalidade', 'Outro'],
                    name: 'Nome',
                    namePlaceholder: 'O seu nome',
                    email: 'Email',
                    emailPlaceholder: 'o-seu@email.com',
                    message: 'Mensagem',
                    messagePlaceholder: 'Descreva aqui o seu pedido ou reporte...',
                    submit: 'Enviar mensagem',
                    sending: 'A enviar...',
                    tooFast: 'O envio foi demasiado rápido. Aguarde alguns segundos e tente novamente.',
                    error: 'Não foi possível enviar a sua mensagem agora. Tente novamente daqui a pouco.',
                    configError: 'Configure a integração de contactos antes de usar esta página.',
                    localDevError: 'Em local, use `vercel dev` para a API ou aponte o formulário para um endpoint publicado.',
                    disclaimer: 'A sua mensagem é entregue através de um serviço externo usado apenas para envio. Sem rastreamento nem uso para marketing.',
                    success: 'Obrigado! A sua mensagem foi enviada com sucesso.'
                }
            },
            lpInvestors: {
                meta: {
                    title: 'Balance – Acompanhe Cripto, Ações e Ativos em Privado',
                    description: 'Acompanhe todo o seu portfólio de investimentos — cripto, ações, ETFs, imóveis — numa app privada. Sem API keys. Sem ligações bancárias.',
                    ogTitle: 'Balance – Acompanhe Cripto, Ações e Ativos em Privado'
                },
                hero: {
                    kicker: 'Para investidores que valorizam o controlo',
                    titleHtml: 'Acompanhe todos os ativos.<br>Sem partilhar nada.',
                    subHtml: 'Cripto, ações, ETFs, liquidez, imóveis — tudo num <strong>dashboard privado</strong>. Sem API keys. Sem login bancário. Sem acesso de terceiros ao seu portfólio.',
                    ctaPrimary: 'Download Grátis',
                    ctaSecondary: 'Veja como funciona',
                    proof: '100% offline · Open source · Plano grátis disponível'
                },
                assets: { crypto: 'Cripto', stocks: 'Ações', etfs: 'ETFs', cash: 'Liquidez', realEstate: 'Imóveis' },
                problem: {
                    title: 'O seu portfólio está espalhado. Os seus dados não deviam estar.',
                    textHtml: 'A maioria dos trackers pede API keys dos exchanges, logins do broker ou credenciais bancárias. O Balance funciona de forma diferente: <strong style="color:var(--ink)">introduz os números, a app fica offline e mais ninguém vê os seus dados.</strong>'
                },
                benefits: [
                    { title: 'Sem API keys necessárias', text: 'Não dê acesso de leitura à Binance, Coinbase ou à sua corretora. Introduza os saldos manualmente e mantenha controlo total.' },
                    { title: 'Multi-ativos numa vista', text: 'Cripto, ações, contas bancárias e imóveis num único dashboard. Chega de alternar entre cinco apps para perceber o seu património.' },
                    { title: 'Snapshot do portfólio', text: 'Guarde um snapshot das suas posições todos os meses. Acompanhe a trajetória com gráficos claros — sem folhas de cálculo.' },
                    { title: 'Funciona totalmente offline', text: 'Sem internet? Sem problema. O Balance funciona em qualquer lugar — no avião, na montanha ou no sofá com o modo avião ligado.' },
                    { title: 'Open source e auditável', text: 'Não confie, verifique. O código é público. Sem trackers ocultos, sem analytics a recolher dados do seu portfólio.' },
                    { title: 'Atualiza em segundos', text: 'A introdução manual rápida significa 30 segundos para atualizar em vez de 30 minutos a resolver um sync bancário partido.' }
                ],
                comparison: {
                    title: 'Balance vs. trackers tradicionais',
                    subtitle: 'Outras ferramentas prometem comodidade. O Balance oferece controlo.',
                    headers: ['', 'Balance', 'Outros'],
                    rows: [
                        ['Requer login bancário', 'Não', 'Sim'],
                        ['Necessita API keys', 'Não', 'Sim'],
                        ['Dados guardados localmente', 'Sim', 'Cloud'],
                        ['Funciona offline', 'Sim', 'Não'],
                        ['Open source', 'Sim', 'Não'],
                        ['Tracking multi-ativos', 'Sim', 'Parcial']
                    ]
                },
                pricing: {
                    title: 'Comece grátis. Passe para Pro quando quiser.',
                    subtitle: 'Acompanhe até 3 wallets grátis, para sempre. Passe para Pro para wallets ilimitadas, snapshots avançados e histórico completo.',
                    free: {
                        title: 'Grátis', badge: 'Sem cartão',
                        description: 'Tudo o que precisa para começar a acompanhar o portfólio em privado.',
                        price: '€0', priceSuffix: 'para sempre',
                        list: ['Até 3 wallets', 'Dashboard completo', 'Snapshots essenciais'],
                        cta: 'Download Grátis'
                    },
                    pro: {
                        title: 'Pro Anual', badge: 'Melhor valor',
                        description: 'Para investidores sérios. Tracking ilimitado, histórico completo, 44% de poupança.',
                        caption: 'Oferta de lançamento', price: '€19,99', priceSuffix: '/ano',
                        alt: '€1,67/mês · Poupa €15,89 vs. mensal', note: 'Primeiro mês grátis.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Começar Prova Gratuita',
                        microcopy: 'Cancele quando quiser. Após a prova, a renovação segue o plano selecionado.'
                    }
                },
                finalCta: {
                    title: 'O seu portfólio merece privacidade.',
                    text: 'Faça download do Balance e comece a acompanhar todos os ativos — sem partilhar um único dado.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Download na App Store'
                }
            },
            lpPrivacy: {
                meta: {
                    title: 'Balance – A App de Finanças que Não Sabe Nada Sobre Si',
                    description: 'O seu banco rastreia cada transação. A sua app financeira vende os seus dados. O Balance não. 100% offline, open source, zero recolha de dados.',
                    ogTitle: 'Balance – A App de Finanças que Não Sabe Nada Sobre Si'
                },
                hero: {
                    kicker: 'Zero recolha de dados',
                    titleHtml: 'A sua app financeira <em>rastreia-o</em>.<br>Esta <span class="lp-safe">não</span>.',
                    sub: 'Balance é uma app de finanças pessoais que funciona 100% offline, não guarda nada em servidores e nunca pede as suas credenciais bancárias.',
                    ctaPrimary: 'Download Grátis',
                    ctaSecondary: 'Porquê que importa'
                },
                proof: { servers: 'Servidores', trackers: 'Trackers', dataShared: 'Dados partilhados', openSource: 'Open source' },
                threats: {
                    title: 'O problema da maioria das apps financeiras',
                    subtitle: 'Cada vez que liga uma conta bancária ou entra com o seu email, está a entregar a sua identidade financeira.',
                    items: [
                        { title: 'Os seus dados nos servidores deles', text: 'A maioria das apps guarda saldos, transações e património em servidores cloud que não controla. Uma violação expõe tudo.' },
                        { title: 'Ligação bancária = acesso', text: 'Ligar uma conta bancária dá a um serviço terceiro acesso de leitura às suas transações, saldos e detalhes da conta.' },
                        { title: 'Recolha de dados invisível', text: 'SDKs de analytics, redes publicitárias e dados "anónimos" frequentemente incluem o seu comportamento financeiro e padrões de gastos.' }
                    ]
                },
                shields: {
                    title: 'Como o Balance o protege',
                    subtitle: 'Quatro camadas de privacidade, integradas na arquitetura — não adicionadas como funcionalidade.',
                    items: [
                        { title: '100% offline', text: 'A app funciona sem ligação à internet. Nenhum dado sai do seu telemóvel, nunca. Não há servidor para hackear.' },
                        { title: 'Sem ligações bancárias', text: 'Introduz os saldos manualmente. Nenhum serviço terceiro obtém acesso de leitura ao seu banco ou exchange.' },
                        { title: 'Sem conta, sem login', text: 'O Balance não pede email, nome ou qualquer informação pessoal. Faz download, abre e começa a usar.' },
                        { title: 'Código open source', text: 'Cada linha de código é pública. Pode verificar que o Balance faz exatamente o que afirma.' }
                    ]
                },
                manifesto: {
                    quote: 'Acreditamos que conhecer o seu património não deve custar a sua privacidade. O Balance foi construído para provar que uma app financeira pode ser útil sem saber nada sobre si.',
                    cite: '— A equipa Balance'
                },
                features: {
                    title: 'Privacidade não significa menos funcionalidades',
                    subtitle: 'O Balance dá-lhe uma experiência completa de finanças pessoais — só que sem vigilância.',
                    items: [
                        { label: 'Dashboard de património', sub: 'Tudo numa vista' },
                        { label: 'Snapshots mensais', sub: 'Acompanhe mudanças ao longo do tempo' },
                        { label: 'Wallets separadas', sub: 'Organize por tipo de conta' },
                        { label: 'Atualizações rápidas', sub: '30 segundos, não 30 minutos' }
                    ]
                },
                pricing: {
                    title: 'Grátis para começar. Sem email necessário.',
                    subtitle: 'Faça download, abra, use. Passe para Pro só se precisar de wallets ilimitadas e histórico completo.',
                    free: {
                        title: 'Grátis', badge: 'Sem registo',
                        description: 'Privacidade total, funcionalidades core, zero custos. Sem email, sem cartão.',
                        price: '€0', priceSuffix: 'para sempre',
                        list: ['Até 3 wallets', 'Dashboard completo', 'Privacidade total'],
                        cta: 'Download Grátis'
                    },
                    pro: {
                        title: 'Pro Anual', badge: 'Melhor valor',
                        description: 'Wallets ilimitadas, snapshots avançados, histórico completo. Mesma privacidade.',
                        caption: 'Oferta de lançamento', price: '€19,99', priceSuffix: '/ano',
                        alt: '€1,67/mês · Poupa 44%', note: 'Primeiro mês grátis.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Começar Prova Gratuita',
                        microcopy: 'Cancele quando quiser. Após a prova, a renovação segue o plano selecionado.'
                    }
                },
                finalCta: {
                    title: 'Recupere a sua privacidade financeira.',
                    text: 'Faça download do Balance. Sem registo, sem login bancário, sem tracking.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Download na App Store'
                }
            },
            lpSimple: {
                meta: {
                    title: 'Balance – Conheça o Seu Património em 30 Segundos',
                    description: 'Pare de complicar as suas finanças. O Balance dá-lhe uma visão clara e privada do seu património — liquidez, investimentos, tudo — em menos de um minuto.',
                    ogTitle: 'Balance – Conheça o Seu Património em 30 Segundos'
                },
                hero: {
                    kicker: 'Simples por design',
                    titleHtml: 'Conheça o seu património em 30 segundos.',
                    subHtml: 'Sem ligações bancárias. Sem setup complicado. Abra a app, atualize os números e veja <strong>exatamente onde está</strong> — num ecrã limpo.',
                    ctaPrimary: 'Download Grátis',
                    ctaSecondary: 'Veja como funciona',
                    proof: ['Plano grátis disponível', 'Sem registo', 'Funciona offline']
                },
                steps: {
                    title: 'Três passos. E pronto.',
                    subtitle: 'Sem wizard bancário. Sem onboarding de 15 campos. Sem verificação de email. Está operacional em menos de um minuto.',
                    items: [
                        { title: 'Crie wallets', text: 'Adicione uma wallet para cada conta: banco, corretora, exchange cripto, dinheiro.' },
                        { title: 'Introduza saldos', text: 'Digite o saldo atual. Pronto. Sem sync, sem import, sem espera. Só o número.' },
                        { title: 'Veja o seu património', text: 'O dashboard atualiza-se instantaneamente. Liquidez, investimentos, património total — tudo numa vista limpa.' }
                    ]
                },
                vs: {
                    title: 'Já tentou o modo complicado',
                    old: { title: 'O modo antigo', items: ['Ligar cada conta bancária', 'Resolver syncs partidos toda a semana', 'Categorizar centenas de transações', 'Criar fórmulas em folhas de cálculo', 'Partilhar credenciais com terceiros', 'Perguntar-se se os dados estão seguros'] },
                    new: { title: 'O modo Balance', items: ['Abrir a app', 'Digitar os saldos', 'Ver o património', 'Guardar um snapshot', 'Feito em 30 segundos', 'Os dados ficam no telemóvel'] }
                },
                pains: {
                    title: 'Construído para quem quer clareza, não complexidade',
                    items: [
                        { title: 'Cansado de folhas de cálculo?', text: 'O Balance substitui a sua folha de cálculo de património por uma interface mais limpa que leva menos tempo a atualizar.' },
                        { title: 'Quer um check-in rápido?', text: 'Abra a app, olhe para o dashboard, feche a app. É um caso de uso válido. O Balance foi desenhado para isso.' },
                        { title: 'O sync bancário continua a falhar?', text: 'A introdução manual significa zero ligações partidas, zero "reautentique-se", zero transações em falta.' },
                        { title: 'Não tem tempo suficiente?', text: 'Um check-in mensal leva menos de um minuto. Guarde um snapshot e tem um registo da sua trajetória financeira.' }
                    ]
                },
                testimonials: {
                    title: 'Porquê que as pessoas mudam para o Balance',
                    items: [
                        { quote: 'Passava 20 minutos por mês a atualizar uma folha de cálculo. Agora abro o Balance, digito uns números e está feito.', cite: '— Ex-utilizador de folhas de cálculo' },
                        { quote: 'Não preciso do banco ligado para saber o meu património. Só preciso do número. O Balance percebe isso.', cite: '— Investidor focado em privacidade' },
                        { quote: 'Finalmente uma app financeira que não tenta ser tudo. Acompanha o meu património e fá-lo bem.', cite: '— Utilizador minimalista' }
                    ]
                },
                pricing: {
                    title: 'Preços simples. Sem surpresas.',
                    subtitle: 'Comece grátis. Faça upgrade se quiser mais.',
                    free: {
                        title: 'Grátis', badge: 'Comece aqui',
                        description: 'O essencial. Acompanhe até 3 wallets com dashboard limpo e snapshots básicos.',
                        price: '€0', priceSuffix: 'para sempre',
                        list: ['Até 3 wallets', 'Dashboard completo', 'Snapshots essenciais'],
                        cta: 'Download Grátis'
                    },
                    pro: {
                        title: 'Pro Anual', badge: 'Melhor valor',
                        description: 'Wallets ilimitadas, histórico completo, snapshots avançados. Menos que um café por mês.',
                        caption: 'Oferta de lançamento', price: '€19,99', priceSuffix: '/ano',
                        alt: '€1,67/mês · Poupa 44%', note: 'Primeiro mês grátis.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Começar Prova Gratuita',
                        microcopy: 'Cancele quando quiser. Após a prova, a renovação segue o plano selecionado.'
                    }
                },
                finalCta: {
                    title: 'As suas finanças, simplificadas.',
                    text: 'Faça download do Balance e veja o seu património em menos de um minuto. Sem setup, sem sync, sem stress.',
                    ctaHtml: '<i class="fa-brands fa-apple"></i> Download na App Store'
                }
            }
        }
    };

    function normalizeLang(lang) {
        if (!lang) return DEFAULT_LANG;
        const short = lang.toLowerCase().split('-')[0];
        return SUPPORTED_LANGS.includes(short) ? short : DEFAULT_LANG;
    }

    function getPageKey() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        if (path === '' || path === 'index.html') return 'home';
        if (path === 'balancepro.html') return 'balancepro';
        if (path === 'roadmap.html') return 'roadmap';
        if (path === 'privacy.html') return 'privacy';
        if (path === 'terms.html') return 'terms';
        if (path === 'contacts.html') return 'contacts';
        if (path === 'lp-investors.html') return 'lpInvestors';
        if (path === 'lp-privacy.html') return 'lpPrivacy';
        if (path === 'lp-simple.html') return 'lpSimple';
        return 'home';
    }

    function detectLang() {
        const queryLang = normalizeLang(new URLSearchParams(window.location.search).get('lang'));
        const hasQuery = new URLSearchParams(window.location.search).has('lang');
        if (hasQuery) {
            localStorage.setItem(LANG_STORAGE_KEY, queryLang);
            return queryLang;
        }

        const storedRaw = localStorage.getItem(LANG_STORAGE_KEY);
        if (storedRaw) return normalizeLang(storedRaw);

        const browser = normalizeLang(navigator.language || navigator.userLanguage || DEFAULT_LANG);
        localStorage.setItem(LANG_STORAGE_KEY, browser);
        return browser;
    }

    function setText(selector, value) {
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
    }

    function setHtml(selector, value) {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = value;
    }

    function setAttr(selector, attr, value) {
        const el = document.querySelector(selector);
        if (el) el.setAttribute(attr, value);
    }

    function setTextAll(selector, values) {
        document.querySelectorAll(selector).forEach((el, index) => {
            if (values[index] !== undefined) el.textContent = values[index];
        });
    }

    function formatDate(lang) {
        const locale = LANG_META[lang].locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
    }

    function applyMeta(pageCopy, lang) {
        if (!pageCopy || !pageCopy.meta) return;
        const meta = pageCopy.meta;
        document.title = meta.title;
        setAttr('meta[name="description"]', 'content', meta.description);
        setAttr('meta[property="og:title"]', 'content', meta.ogTitle || meta.title);
        setAttr('meta[property="og:description"]', 'content', meta.description);
        setAttr('meta[property="og:locale"]', 'content', LANG_META[lang].ogLocale);
        setAttr('meta[name="twitter:title"]', 'content', meta.ogTitle || meta.title);
        setAttr('meta[name="twitter:description"]', 'content', meta.description);

        const jsonLd = document.querySelector('script[type="application/ld+json"]');
        if (jsonLd) {
            try {
                const data = JSON.parse(jsonLd.textContent);
                if (meta.description) data.description = meta.description;
                data.inLanguage = LANG_META[lang].locale;
                jsonLd.textContent = JSON.stringify(data, null, 12);
            } catch (error) {
                console.warn('Unable to update JSON-LD language metadata.', error);
            }
        }
    }

    function localizeInternalLinks(lang) {
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
            if (href.startsWith('javascript:')) return;

            const [pathAndQuery, hash = ''] = href.split('#');
            const [path, query = ''] = pathAndQuery.split('?');
            if (!path.endsWith('.html')) return;

            const params = new URLSearchParams(query);
            if (lang === DEFAULT_LANG) {
                params.delete('lang');
            } else {
                params.set('lang', lang);
            }

            const nextQuery = params.toString();
            const nextHref = `${path}${nextQuery ? `?${nextQuery}` : ''}${hash ? `#${hash}` : ''}`;
            link.setAttribute('href', nextHref);
        });
    }

    function applyGlobal(langCopy, lang) {
        setText('.nav-links a[href*="#overview"], .nav-links a[href*="#hero"]', langCopy.global.nav.overview);
        setText('.nav-links a[href*="#pricing"]', langCopy.global.nav.pricing);
        setText('.nav-links a[href*="#features"]', langCopy.global.nav.features);
        setText('.nav-links a[href*="roadmap.html"]', langCopy.global.nav.roadmap);
        setText('.nav-links .btn[href*="#download"]', langCopy.global.nav.download);
        setAttr('.mobile-menu-btn', 'aria-label', langCopy.global.ui.menu);

        setText('.footer-links a[href="privacy.html"]', langCopy.global.footer.privacy);
        setText('.footer-links a[href="terms.html"]', langCopy.global.footer.terms);
        setText('.footer-links a[href="contacts.html"]', langCopy.global.footer.contacts);
        setText('.copyright', langCopy.global.footer.copyright);
        setText('.footer-language-label', langCopy.global.footer.language);
        setAttr('.footer-language-select', 'aria-label', langCopy.global.footer.language);

        const langSelect = document.querySelector('.footer-language-select');
        if (langSelect) {
            langSelect.value = lang;
            langSelect.querySelector('option[value="it"]').textContent = langCopy.global.ui.langNames.it;
            langSelect.querySelector('option[value="en"]').textContent = langCopy.global.ui.langNames.en;
            langSelect.querySelector('option[value="pt"]').textContent = langCopy.global.ui.langNames.pt;
        }

        document.documentElement.lang = lang;
        localizeInternalLinks(lang);
    }

    function initLanguageSwitcher(lang) {
        const select = document.querySelector('.footer-language-select');
        if (!select || select.dataset.bound === 'true') return;

        select.dataset.bound = 'true';
        select.addEventListener('change', (event) => {
            const nextLang = normalizeLang(event.target.value);
            localStorage.setItem(LANG_STORAGE_KEY, nextLang);

            const url = new URL(window.location.href);
            if (nextLang === DEFAULT_LANG) {
                url.searchParams.delete('lang');
            } else {
                url.searchParams.set('lang', nextLang);
            }

            window.location.href = url.toString();
        });
        select.value = lang;
    }

    function setStoreSoonButton(selector, langCopy) {
        const button = document.querySelector(selector);
        if (!button) return;
        button.innerHTML = `<i class="fa-brands fa-google-play"></i> ${langCopy.global.ui.googlePlay}<span class="soon-badge">${langCopy.global.ui.comingSoon}</span>`;
    }

    function applyHome(langCopy) {
        const page = langCopy.home;
        applyMeta(page, currentLang);
        setHtml('.hero-badge', `<i class="fa-solid fa-shield-halved"></i>${page.hero.badge}`);
        setText('.hero-title', page.hero.title);
        setText('.hero-subtitle', page.hero.subtitle);
        setText('.hero-value-prop', page.hero.description || '');
        setHtml('.hero-buttons .btn-primary', `<i class="fa-brands fa-apple"></i> ${page.hero.cta || langCopy.global.ui.appStore}`);
        setStoreSoonButton('.hero .btn-store-soon', langCopy);

        const trustItems = document.querySelectorAll('.trust-item');
        if (trustItems[0]) {
            trustItems[0].querySelector('.trust-label').textContent = page.trust[0].label;
            trustItems[0].querySelector('.trust-sub').textContent = page.trust[0].sub;
        }
        if (trustItems[1]) {
            trustItems[1].querySelector('.trust-label').textContent = page.trust[1].label;
            trustItems[1].querySelector('.trust-sub').textContent = page.trust[1].sub;
        }
        if (trustItems[2]) {
            trustItems[2].querySelector('.trust-label').textContent = page.trust[2].label;
            trustItems[2].querySelector('.trust-sub').textContent = page.trust[2].sub;
        }
        if (trustItems[3]) {
            trustItems[3].querySelector('.trust-label').textContent = page.trust[3].label;
            trustItems[3].querySelector('.trust-sub').textContent = page.trust[3].sub;
        }

        const splitSections = document.querySelectorAll('.section-split .split-content');
        if (splitSections[0]) {
            splitSections[0].querySelector('.section-title').textContent = page.context.title;
            const texts = splitSections[0].querySelectorAll('.section-text');
            if (texts[0]) texts[0].textContent = page.context.text;
            if (texts[1]) texts[1].textContent = page.context.highlight;
        }
        if (splitSections[1]) {
            splitSections[1].querySelector('.section-title').textContent = page.clarity.title;
            const texts = splitSections[1].querySelectorAll('.section-text');
            if (texts[0]) texts[0].textContent = page.clarity.text;
            if (texts[1]) texts[1].textContent = page.clarity.highlight;
        }

        setText('#pricing .section-title', page.pricing.title);
        setText('#pricing .pricing-intro', page.pricing.intro || '');

        const freeCard = document.querySelector('#pricing .pricing-card.free');
        if (freeCard) {
            freeCard.querySelector('.pricing-free-badge').textContent = page.pricing.free.badge || '';
            freeCard.querySelector('h3').textContent = page.pricing.free.title || '';
            freeCard.querySelector('.pricing-description').textContent = page.pricing.free.description || '';
            const freePrice = freeCard.querySelector('.pricing-free-price');
            if (freePrice) {
                freePrice.innerHTML = page.pricing.free.priceHtml || page.pricing.free.priceLabel || '';
            }
            freeCard.querySelectorAll('.pricing-list li').forEach((li, index) => {
                const textTarget = li.querySelector('span') || li;
                textTarget.textContent = page.pricing.free.list[index] || '';
            });
            if (freeCard.querySelector('.btn')) {
                freeCard.querySelector('.btn').textContent = page.pricing.free.cta || '';
            }
        }

        const toggleMonthly = document.querySelector('#pricing-toggle [data-plan="monthly"]');
        const toggleAnnual = document.querySelector('#pricing-toggle [data-plan="annual"]');
        if (toggleMonthly) toggleMonthly.textContent = page.pricing.toggle.monthly;
        if (toggleAnnual) toggleAnnual.textContent = page.pricing.toggle.annual;

        document.querySelectorAll('#pricing .pricing-card.pro[data-plan]').forEach(card => {
            const plan = card.dataset.plan === 'monthly' ? 'monthly' : 'annual';
            const billing = page.pricing.pro.billing?.[plan] || {};
            const emphasis = plan === 'annual'
                ? (page.pricing.pro.emphasis || page.pricing.pro.badgeAnnual || '')
                : (page.pricing.pro.emphasisMonthly || page.pricing.pro.badgeMonthly || '');

            const emphasisBadge = card.querySelector('.pricing-emphasis-badge');
            const billingCaption = card.querySelector('.pricing-billing-caption');
            const pricingValue = card.querySelector('.pricing-price');
            const altPrice = card.querySelector('.pricing-alt-price');
            const note = card.querySelector('.pricing-note');

            const cardTitle = card.querySelector('h3');
            if (cardTitle && billing.title) cardTitle.textContent = billing.title;
            if (emphasisBadge) emphasisBadge.textContent = emphasis;
            if (card.querySelector('.pricing-description')) {
                card.querySelector('.pricing-description').textContent = billing.description || page.pricing.pro.description;
            }
            card.querySelectorAll('.pricing-list li').forEach((li, index) => {
                const textTarget = li.querySelector('span') || li;
                textTarget.textContent = page.pricing.pro.list[index] || '';
            });
            if (card.querySelector('.btn')) {
                card.querySelector('.btn').innerHTML = page.pricing.pro.ctaHtml;
            }
            if (card.querySelector('.pricing-microcopy')) {
                card.querySelector('.pricing-microcopy').textContent = page.pricing.pro.microcopy || '';
            }
            if (billingCaption) billingCaption.textContent = billing.caption || '';
            if (pricingValue) pricingValue.innerHTML = billing.priceHtml || '';
            if (altPrice) altPrice.textContent = billing.alt || '';
            if (note) note.textContent = billing.note || '';
        });

        setText('#features .section-title', page.features.title);
        setText('.feature-detail-eyebrow', page.features.detailEyebrow);
        const featureOrder = ['snapshot', 'wallet', 'dashboard', 'privacy', 'speed'];
        featureOrder.forEach((key) => {
            const card = document.querySelector(`.feature-card[data-feature="${key}"]`);
            const copy = page.features.cards[key];
            if (!card || !copy) return;
            setText(`.feature-card[data-feature="${key}"] .feature-front h3`, copy.title);
            setText(`.feature-card[data-feature="${key}"] .feature-front p`, copy.text);
        });

        setText('.section-faq .section-title', page.faq.title);
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach((item, index) => {
            const copy = page.faq.items[index];
            if (!copy) return;
            const summary = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer p');
            if (summary) summary.textContent = copy.q;
            if (answer) answer.textContent = copy.a;
        });

        setText('#download .footer-cta-badge', page.download.badge);
        setText('#download .section-title', page.download.title);
        setText('#download .footer-cta-copy', page.download.copy);
        setTextAll('#download .footer-cta-point', page.download.points);
        setHtml('#download .footer-cta-actions .btn-primary', `<i class="fa-brands fa-apple"></i> ${langCopy.global.ui.appStore}`);
        setStoreSoonButton('#download .btn-store-soon', langCopy);
        setText('#download .footer-cta-note', page.download.note);
    }

    function applyBalancePro(langCopy) {
        const page = langCopy.balancepro;
        applyMeta(page, currentLang);
        setText('main .section-title', page.heroTitle);
        setText('main .section-text', page.heroText);
        const card = document.querySelector('.pro-page-card');
        if (!card) return;
        card.querySelector('.badge').textContent = page.card.badge;
        card.querySelector('.pricing-price').innerHTML = page.card.priceHtml;
        card.querySelector('.pricing-alt-price').textContent = page.card.altPrice;
        card.querySelector('.pricing-note').textContent = page.card.note;
        card.querySelectorAll('.pricing-list li').forEach((li, index) => {
            li.textContent = page.card.list[index];
        });
        card.querySelector('.microcopy').textContent = page.card.microcopy;
        const buttons = card.querySelectorAll('.hero-buttons .btn');
        if (buttons[0]) buttons[0].innerHTML = page.card.primaryCtaHtml;
        if (buttons[1]) buttons[1].textContent = page.card.secondaryCta;
    }

    function applyRoadmap(langCopy) {
        const page = langCopy.roadmap;
        applyMeta(page, currentLang);
        setText('.roadmap-hero .hero-title', page.hero.title);
        const heroContent = document.querySelectorAll('.roadmap-hero .hero-content p');
        if (heroContent[0]) heroContent[0].textContent = page.hero.subtitle;
        if (heroContent[1]) heroContent[1].textContent = page.hero.value;
        const heroButtons = document.querySelectorAll('.roadmap-hero .hero-buttons .btn');
        if (heroButtons[0]) heroButtons[0].innerHTML = page.hero.repoCtaHtml;
        if (heroButtons[1]) heroButtons[1].innerHTML = page.hero.featureCtaHtml;

        setText('.status-badge span', page.status.version);
        setText('.status-date', page.status.date);
        setText('.status-card .section-title', page.status.title);
        setText('.status-card .section-text', page.status.text);

        setText('.section-timeline .section-title', page.timelineTitle);
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const copy = page.timeline[index];
            if (!copy) return;
            const title = item.querySelector('.timeline-header h3');
            const status = item.querySelector('.timeline-status');
            if (title) title.textContent = copy.title;
            if (status) status.textContent = copy.status;
            item.querySelectorAll('.timeline-list li').forEach((li, liIndex) => {
                const textNode = li.childNodes[1];
                if (textNode) {
                    textNode.textContent = ` ${copy.items[liIndex]}`;
                } else {
                    li.append(copy.items[liIndex]);
                }
            });
        });

        const principleTitle = document.querySelector('.section-split .container > .section-title');
        if (principleTitle) principleTitle.textContent = page.principles.title;
        const principleCards = document.querySelectorAll('.principle-card');
        principleCards.forEach((card, index) => {
            const copy = page.principles.cards[index];
            if (!copy) return;
            const title = card.querySelector('h3');
            const text = card.querySelector('p');
            if (title) title.textContent = copy.title;
            if (text) text.textContent = copy.text;
        });

        setText('.contribute-card .section-title', page.contribute.title);
        setText('.contribute-card > .section-text', page.contribute.text);
        const contributeCards = document.querySelectorAll('.contribute-item');
        contributeCards.forEach((card, index) => {
            const copy = page.contribute.cards[index];
            if (!copy) return;
            const title = card.querySelector('h4');
            const text = card.querySelector('p');
            const button = card.querySelector('.btn');
            if (title) title.textContent = copy.title;
            if (text) text.textContent = copy.text;
            if (button) {
                if (copy.ctaHtml) button.innerHTML = copy.ctaHtml;
                else button.textContent = copy.cta;
            }
        });
    }

    function applyLandingPage(langCopy, pageKey) {
        const pageCopy = langCopy[pageKey];
        if (!pageCopy) return;
        applyMeta(pageCopy, currentLang);
        setText('.nav-links a[href="index.html"]', langCopy.global.nav.home);
    }

    function applyLegalPage(pageCopy) {
        applyMeta(pageCopy, currentLang);
        const legalContent = document.querySelector('.legal-content');
        if (!legalContent) return;
        legalContent.innerHTML = pageCopy.html.replace('{{date}}', formatDate(currentLang));
    }

    function applyContacts(langCopy) {
        const page = langCopy.contacts;
        applyMeta(page, currentLang);
        setText('main .section-title', page.title);
        setText('main .section-text', page.subtitle);

        setText('label[for="honeypot"]', page.form.honeypot);
        setText('label[for="reason"]', page.form.reason);
        setText('label[for="name"]', page.form.name);
        setText('label[for="email"]', page.form.email);
        setText('label[for="message"]', page.form.message);
        setAttr('#name', 'placeholder', page.form.namePlaceholder);
        setAttr('#email', 'placeholder', page.form.emailPlaceholder);
        setAttr('#message', 'placeholder', page.form.messagePlaceholder);
        setText('#contact-form button[type="submit"]', page.form.submit);
        setText('.form-disclaimer', page.form.disclaimer);
        setText('#success-message p', page.form.success);

        const options = document.querySelectorAll('#reason option');
        options.forEach((option, index) => {
            if (page.form.reasonOptions[index] !== undefined) option.textContent = page.form.reasonOptions[index];
        });
    }


    function applyDataI18nAttributes(langCopy) {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedProperty(langCopy, key);
            if (value !== undefined) el.textContent = value;
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            const value = getNestedProperty(langCopy, key);
            if (value !== undefined) el.innerHTML = value;
        });
    }

    function getNestedProperty(obj, path) {
        return path.split('.').reduce((current, prop) => current?.[prop], obj);
    }

    let currentLang = DEFAULT_LANG;

    function applyTranslations() {
        currentLang = detectLang();
        const langCopy = COPY[currentLang] || COPY[DEFAULT_LANG];
        const pageKey = getPageKey();

        applyGlobal(langCopy, currentLang);

        if (pageKey === 'home') applyHome(langCopy);
        if (pageKey === 'balancepro') applyBalancePro(langCopy);
        if (pageKey === 'roadmap') applyRoadmap(langCopy);
        if (pageKey === 'privacy') applyLegalPage(langCopy.privacy);
        if (pageKey === 'terms') applyLegalPage(langCopy.terms);
        if (pageKey === 'contacts') applyContacts(langCopy);
        if (pageKey === 'lpInvestors') applyLandingPage(langCopy, 'lpInvestors');
        if (pageKey === 'lpPrivacy') applyLandingPage(langCopy, 'lpPrivacy');
        if (pageKey === 'lpSimple') applyLandingPage(langCopy, 'lpSimple');

        applyDataI18nAttributes(langCopy);
        initLanguageSwitcher(currentLang);

        window.BalanceI18n = {
            lang: currentLang,
            getLanguage: () => currentLang,
            getFeatureDetailMap: () => (COPY[currentLang]?.home?.features?.detailMap || COPY.it.home.features.detailMap),
            getContactFormCopy: () => (COPY[currentLang]?.contacts?.form || COPY.it.contacts.form)
        };
    }

    document.addEventListener('DOMContentLoaded', applyTranslations);
})();
