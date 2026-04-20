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
                    home: 'Home',
                    overview: 'Panoramica',
                    pricing: 'Piani',
                    features: 'Funzionalità',
                    roadmap: 'Roadmap',
                    download: 'Download'
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
                    title: 'Tieni le tue finanze sotto controllo',
                    subtitle: 'Traccia patrimonio netto, investimenti e liquidità con un’app di finanza personale privata e offline-first.',
                    description: 'Balance ti aiuta a tracciare conti, investimenti, crypto e asset in un semplice dashboard. Tutto rimane sul tuo dispositivo, senza collegamenti bancari e senza condivisione dei dati.',
                    cta: 'Scarica Balance'
                },
                trust: [
                    { labelHtml: '100%<br>offline', sub: 'Funziona senza internet' },
                    { label: 'Nessun server', sub: 'Dati sul tuo dispositivo' },
                    { label: 'Open source', sub: 'Codice verificabile' },
                    { label: 'iOS & Android', sub: 'Disponibile ovunque' }
                ],
                context: {
                    title: 'Tutto il tuo patrimonio, davvero',
                    text: 'Conti, investimenti, crypto, liquidità: Balance ti mostra tutto insieme, senza compromessi sulla privacy.',
                    highlight: 'Un tracker patrimonio e investimenti che rispetta il tuo modo di gestire il denaro.'
                },
                clarity: {
                    title: 'Chiarezza e controllo nel tempo',
                    text: 'Aggiorna manualmente, visualizza grafici semplici, segui l’andamento con snapshot.',
                    highlight: 'La tua finanza, sempre chiara. Nessun foglio di calcolo.'
                },
                pricing: {
                    title: 'Piani disponibili',
                    intro: 'Inizia gratis con 3 wallet. Passa a Pro per sbloccare wallet illimitati, snapshot avanzati e storico completo. Scegli tra mensile o annuale.',
                    toggleMonthly: 'Mensile',
                    toggleAnnual: 'Annuale',
                    monthly: {
                        title: 'Pro Mensile',
                        badge: 'Flessibile',
                        description: 'Tutte le funzionalità Pro con la libertà di pagare mese per mese, senza vincoli.',
                        billingCaption: 'Abbonamento mensile',
                        priceHtml: '2,99 €<span class="price-suffix">al mese</span>',
                        altPrice: 'Rinnovo automatico ogni mese',
                        note: 'Primo mese di prova gratuito.',
                        list: [
                            'Wallet illimitati',
                            'Snapshot avanzati per analisi più precise',
                            'Storico completo per confrontare l’evoluzione nel tempo'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Inizia la prova gratuita',
                        microcopy: 'Al termine della prova, salvo annullamento, il rinnovo avviene al prezzo del piano scelto.'
                    },
                    annual: {
                        title: 'Pro Annuale',
                        badge: 'Miglior valore',
                        description: 'Il piano più conveniente per chi usa Balance ogni giorno. Risparmi il 44% rispetto al mensile.',
                        billingCaption: 'Offerta annuale di lancio',
                        priceHtml: '19,99 €<span class="price-suffix">l’anno</span>',
                        altPrice: 'Equivale a 1,67 € al mese · Risparmi 15,89 €',
                        note: 'Primo mese di prova gratuito.',
                        list: [
                            'Wallet illimitati',
                            'Snapshot avanzati per analisi più precise',
                            'Storico completo per confrontare l’evoluzione nel tempo'
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
                            title: 'Snapshot patrimoniali',
                            text: 'Salva snapshot del patrimonio e confronta facilmente lo storico nel tempo.'
                        },
                        wallet: {
                            title: 'Wallet per tipologia',
                            text: 'Organizza conti, liquidità, investimenti, crypto e altri asset in wallet separati.'
                        },
                        dashboard: {
                            title: 'Dashboard sintetica',
                            text: 'Vedi patrimonio netto, liquidità, investimenti e allocazione in una dashboard semplice.'
                        },
                        privacy: {
                            title: 'Privacy e controllo',
                            text: 'Una privacy finance app senza collegamenti bancari, server esterni o condivisione dei dati.'
                        },
                        speed: {
                            title: 'Esperienza veloce',
                            text: 'Aggiorna i saldi in pochi tocchi e tieni allineata la tua app finance offline.'
                        }
                    },
                    detailMap: {
                        snapshot: {
                            title: 'Snapshot patrimoniali',
                            text: 'Salva snapshot del patrimonio in pochi secondi e rivedi lo storico in una vista pulita.',
                            bullets: [
                                'Snapshot manuali senza collegamenti bancari.',
                                'Storico chiaro per seguire il patrimonio nel tempo.',
                                'Asset e investimenti senza rumore da foglio di calcolo.'
                            ]
                        },
                        wallet: {
                            title: 'Wallet per tipologia',
                            text: 'Organizza conti, liquidità, investimenti, crypto e asset con wallet chiari e separati.',
                            bullets: [
                                'Categorie flessibili per ogni conto o asset.',
                                'Totali aggregati tra liquidità e portafogli.',
                                'Una struttura che replica la tua realtà.'
                            ]
                        },
                        dashboard: {
                            title: 'Dashboard sintetica',
                            text: 'Controlla patrimonio, liquidità, investimenti e allocazione in una sola dashboard.',
                            bullets: [
                                'Una vista unica per il tuo patrimonio complessivo.',
                                'Trend chiari senza sovraccarico visivo.',
                                'Indicatori chiave sempre accessibili.'
                            ]
                        },
                        privacy: {
                            title: 'Privacy e controllo',
                            text: 'Dati locali, nessun collegamento bancario e zero tracking. Sempre.',
                            bullets: [
                                'Un’app di finanza personale privata per definizione.',
                                'Nessun login, server esterno o sync automatico.',
                                'Controllo totale dei tuoi dati sul dispositivo.'
                            ]
                        },
                        speed: {
                            title: 'Esperienza veloce',
                            text: 'Aggiorna i dati in pochi tocchi e mantieni tutto attuale senza attrito.',
                            bullets: [
                                'Flow essenziale senza passaggi inutili.',
                                'Interazioni rapide pensate per il mobile.',
                                'UI pulita per aggiornamenti frequenti.'
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
                            a: 'La promo di lancio include il primo mese gratuito di Balance Pro con attivazione di un abbonamento mensile o annuale. Alla fine della prova, salvo annullamento, il rinnovo segue il piano scelto.'
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
                    note: 'Al termine della prova gratuita, salvo annullamento, il rinnovo segue il piano selezionato.',
                    explore: {
                        title: 'Esplora le landing per angolo',
                        subtitle: 'Tre percorsi diversi, stesso prodotto: semplicità, investimenti e privacy.',
                        cards: {
                            simple: {
                                title: 'Simple',
                                text: 'Per chi vuole capire il proprio patrimonio in pochi secondi, senza complessità inutile.',
                                cta: 'Apri Simple'
                            },
                            investors: {
                                title: 'Investors',
                                text: 'Per chi vuole tracciare crypto, azioni, ETF e altri asset senza condividere i dati.',
                                cta: 'Apri Investors'
                            },
                            privacy: {
                                title: 'Privacy',
                                text: 'Per chi vuole un tracker finanziario offline, open source e senza raccolta dati.',
                                cta: 'Apri Privacy'
                            }
                        }
                    }
                }
            },
            lpSimple: {
                meta: {
                    title: 'Balance – Conosci il tuo patrimonio in 30 secondi',
                    description: 'Smetti di complicare le tue finanze. Balance ti offre una vista chiara e privata del tuo patrimonio in meno di un minuto.',
                    ogTitle: 'Balance – Conosci il tuo patrimonio in 30 secondi'
                },
                hero: {
                    kicker: 'Semplice per davvero',
                    titleHtml: 'Conosci il tuo patrimonio in 30 secondi.',
                    subHtml: "Niente collegamenti bancari. Niente setup complicati. Apri l'app, aggiorna i numeri e vedi <strong>subito dove sei</strong> in una schermata pulita.",
                    ctaPrimary: 'Scarica gratis',
                    ctaSecondary: 'Guarda come funziona',
                    proof: ['Piano gratuito disponibile', 'Nessuna registrazione', 'Funziona offline']
                },
                steps: {
                    title: 'Tre passaggi. Fine.',
                    subtitle: 'Nessun wizard bancario. Nessun onboarding da 15 campi. Nessuna verifica email. Parti in meno di un minuto.',
                    items: [
                        { title: 'Crea i wallet', text: 'Aggiungi un wallet per ogni conto: banca, broker, exchange crypto, contanti. Lo chiami come vuoi.' },
                        { title: 'Inserisci i saldi', text: 'Digita il saldo attuale. Tutto qui. Niente sync, niente import, niente attese. Solo il numero.' },
                        { title: 'Vedi il patrimonio', text: 'La dashboard si aggiorna subito. Liquidità, investimenti, patrimonio totale: tutto in una vista ordinata.' }
                    ]
                },
                vs: {
                    title: 'Hai già provato il modo complicato',
                    old: {
                        title: "<i class='fa-solid fa-xmark'></i> Il vecchio modo",
                        items: [
                            'Collegare ogni conto bancario',
                            'Sistemare sync rotte ogni settimana',
                            'Categorizzare centinaia di movimenti',
                            'Creare formule su fogli di calcolo',
                            'Condividere credenziali con terzi',
                            'Chiederti se i dati siano davvero al sicuro'
                        ]
                    },
                    new: {
                        title: "<i class='fa-solid fa-check'></i> Il modo Balance",
                        items: [
                            "Apri l'app",
                            'Inserisci i tuoi saldi',
                            'Vedi il patrimonio',
                            'Salva uno snapshot',
                            'Hai finito in 30 secondi',
                            'I dati restano sul tuo telefono'
                        ]
                    }
                },
                pains: {
                    title: 'Pensata per chi vuole chiarezza, non complessità',
                    items: [
                        { title: 'Stanco dei fogli di calcolo?', text: 'Balance sostituisce il tuo spreadsheet del patrimonio con un’interfaccia più pulita, veloce da aggiornare e migliore da leggere.' },
                        { title: 'Vuoi un check veloce?', text: "Apri l'app, guardi la dashboard, chiudi l'app. È un caso d'uso validissimo. Balance è progettata anche per questo." },
                        { title: 'La sync bancaria si rompe sempre?', text: 'L’inserimento manuale elimina connessioni rotte, richieste di nuova autenticazione e movimenti mancanti. Funziona, ogni volta.' },
                        { title: 'Hai poco tempo?', text: 'Un check mensile richiede meno di un minuto. Salvi uno snapshot e hai la traccia della tua traiettoria finanziaria senza sforzo.' }
                    ]
                },
                testimonials: {
                    title: 'Perché le persone passano a Balance',
                    items: [
                        { quote: 'Prima perdevo 20 minuti al mese a sistemare un foglio Excel. Ora apro Balance, inserisco qualche numero e ho finito.', cite: '— Ex utente di spreadsheet' },
                        { quote: 'Non mi serve collegare la banca per sapere il mio patrimonio. Mi serve solo il numero giusto. Balance lo capisce.', cite: '— Investitore attento alla privacy' },
                        { quote: "Finalmente un'app finance che non prova a fare tutto. Tiene traccia del mio patrimonio e lo fa bene. È esattamente quello che volevo.", cite: '— Utente minimalista' }
                    ]
                },
                pricing: {
                    title: 'Prezzi semplici. Nessuna sorpresa.',
                    subtitle: 'Inizia gratis. Passa a Pro se vuoi di più.',
                    free: {
                        title: 'Free',
                        badge: 'Inizia da qui',
                        description: 'L’essenziale. Fino a 3 wallet, dashboard pulita e snapshot base.',
                        price: '€0',
                        priceSuffix: 'per sempre',
                        list: ['Fino a 3 wallet', 'Dashboard completa', 'Snapshot essenziali'],
                        cta: 'Scarica gratis'
                    },
                    pro: {
                        title: 'Pro Annuale',
                        badge: 'Miglior valore',
                        description: 'Wallet illimitati, storico completo e snapshot avanzati. Meno di un caffè al mese.',
                        caption: 'Offerta lancio',
                        price: '€19,99',
                        priceSuffix: '/anno',
                        alt: '€1,67/mese · Risparmi il 44%',
                        note: 'Primo mese gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Inizia la prova gratuita",
                        microcopy: 'Annulla quando vuoi. Dopo la prova, il rinnovo segue il piano selezionato.'
                    }
                },
                finalCta: {
                    badge: 'Offerta lancio',
                    title: 'Le tue finanze, semplificate.',
                    text: 'Scarica Balance e vedi il tuo patrimonio in meno di un minuto. Niente setup, niente sync, niente stress.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Scarica su App Store"
                }
            },
            lpInvestors: {
                meta: {
                    title: 'Balance – Traccia crypto, azioni e asset in privato',
                    description: 'Traccia tutto il tuo portafoglio di investimento in un’unica app privata. Nessuna API key, nessun collegamento bancario, nessuna condivisione dati.',
                    ogTitle: 'Balance – Traccia crypto, azioni e asset in privato'
                },
                hero: {
                    kicker: 'Per investitori che vogliono controllo',
                    titleHtml: 'Traccia ogni asset.<br>Non condividere nulla.',
                    subHtml: 'Crypto, azioni, ETF, liquidità, immobiliare: tutto in <strong>un dashboard privato</strong>. Nessuna API key. Nessun login bancario. Nessun accesso di terzi al tuo portafoglio.',
                    ctaPrimary: 'Scarica gratis',
                    ctaSecondary: 'Guarda come funziona',
                    proof: '100% offline · Open source · Piano gratuito disponibile'
                },
                assets: {
                    crypto: 'Crypto',
                    stocks: 'Azioni',
                    etfs: 'ETF',
                    cash: 'Liquidità',
                    realEstate: 'Immobiliare'
                },
                problem: {
                    title: 'Il tuo portafoglio è sparso. I tuoi dati non dovrebbero esserlo.',
                    textHtml: "La maggior parte dei portfolio tracker chiede API key dell'exchange, login del broker o credenziali bancarie. Balance fa il contrario: <strong style='color:var(--ink)'>inserisci i numeri, l'app resta offline e nessun altro vede i tuoi dati.</strong>"
                },
                benefits: [
                    { title: 'Nessuna API key richiesta', text: 'Non dare accesso in lettura a Binance, Coinbase o al tuo broker. Inserisci i saldi manualmente e mantieni il controllo totale.' },
                    { title: 'Multi-asset in una sola vista', text: 'Vedi crypto, azioni, conti bancari e immobiliare in una sola dashboard. Niente più salto fra cinque app per capire il patrimonio.' },
                    { title: 'Salva snapshot del portafoglio', text: 'Salva uno snapshot mensile dei tuoi asset e osserva l’evoluzione nel tempo con grafici semplici e chiari.' },
                    { title: 'Funziona completamente offline', text: 'Niente internet? Nessun problema. Balance funziona ovunque e i dati non lasciano mai il dispositivo.' },
                    { title: 'Open source e verificabile', text: 'Non fidarti sulla parola: verifica. Il codice è pubblico, senza tracker nascosti né analytics sul tuo portafoglio.' },
                    { title: 'Aggiorni in pochi secondi', text: 'L’inserimento manuale richiede 30 secondi, non 30 minuti a sistemare sync bancarie rotte.' }
                ],
                comparison: {
                    title: 'Balance vs tracker tradizionali',
                    subtitle: 'Gli altri promettono comodità. Balance offre controllo.',
                    headers: ['', 'Balance', 'Altri'],
                    rows: [
                        ['Richiede login bancario', 'No', 'Sì'],
                        ['Richiede API key', 'No', 'Sì'],
                        ['Dati salvati in locale', 'Sì', 'Cloud'],
                        ['Funziona offline', 'Sì', 'No'],
                        ['Open source', 'Sì', 'No'],
                        ['Tracking multi-asset', 'Sì', 'Parziale']
                    ]
                },
                pricing: {
                    title: 'Inizia gratis. Passa a Pro quando vuoi.',
                    subtitle: 'Traccia fino a 3 wallet gratis, per sempre. Vai Pro per wallet illimitati, snapshot avanzati e storico completo.',
                    free: {
                        title: 'Free',
                        badge: 'Nessuna carta',
                        description: 'Tutto ciò che serve per iniziare a tracciare il portafoglio in privato.',
                        price: '€0',
                        priceSuffix: 'per sempre',
                        list: ['Fino a 3 wallet', 'Dashboard completa', 'Snapshot essenziali'],
                        cta: 'Scarica gratis'
                    },
                    pro: {
                        title: 'Pro Annuale',
                        badge: 'Miglior valore',
                        description: 'Per investitori seri. Tracking illimitato, storico completo e 44% di risparmio.',
                        caption: 'Offerta lancio',
                        price: '€19,99',
                        priceSuffix: '/anno',
                        alt: '€1,67/mese · Risparmi €15,89 rispetto al mensile',
                        note: 'Primo mese gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Inizia la prova gratuita",
                        microcopy: 'Annulla quando vuoi. Dopo la prova, il rinnovo segue il piano selezionato.'
                    }
                },
                finalCta: {
                    badge: 'Offerta lancio',
                    title: 'Il tuo portafoglio merita privacy.',
                    text: 'Scarica Balance e inizia a tracciare ogni asset senza condividere nemmeno un dato.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Scarica su App Store"
                }
            },
            lpPrivacy: {
                meta: {
                    title: 'Balance – L’app finance che non sa nulla di te',
                    description: 'La tua banca traccia ogni movimento. La tua app finance spesso vende i tuoi dati. Balance no: offline, open source e zero raccolta dati.',
                    ogTitle: 'Balance – L’app finance che non sa nulla di te'
                },
                hero: {
                    kicker: 'Zero raccolta dati',
                    titleHtml: "La tua app finance <em>traccia te</em>.<br>Questa <span class='lp-safe'>no</span>.",
                    sub: 'Balance è un’app di finanza personale che funziona al 100% offline, non salva nulla su server e non ti chiede mai credenziali bancarie. I tuoi soldi, i tuoi dati, il tuo dispositivo.',
                    ctaPrimary: 'Scarica gratis',
                    ctaSecondary: 'Perché conta',
                },
                proof: {
                    servers: 'Server',
                    trackers: 'Tracker',
                    dataShared: 'Dati condivisi',
                    openSource: 'Open source'
                },
                threats: {
                    title: 'Il problema delle classiche app finance',
                    subtitle: 'Ogni volta che colleghi un conto o accedi con l’email, stai cedendo la tua identità finanziaria.',
                    items: [
                        { title: 'I tuoi dati sui loro server', text: 'Molte app salvano saldi, movimenti e patrimonio su server cloud che non controlli. Una violazione espone tutto.' },
                        { title: 'Collegamenti bancari = accesso', text: 'Collegare un conto significa dare a un servizio terzo accesso in lettura a movimenti, saldi e dettagli del conto.' },
                        { title: 'Raccolta dati invisibile', text: 'SDK analytics, reti pubblicitarie e dati “anonimi” spesso includono il tuo comportamento finanziario e il tuo range patrimoniale.' }
                    ]
                },
                shields: {
                    title: 'Come Balance ti protegge',
                    subtitle: 'Quattro livelli di privacy, progettati nell’architettura e non aggiunti dopo.',
                    items: [
                        { title: '100% offline', text: 'L’app funziona senza internet. Nessun dato lascia il telefono. Non c’è un server da violare perché non c’è proprio.' },
                        { title: 'Nessun collegamento bancario', text: 'Inserisci i saldi manualmente. Nessun servizio terzo ottiene accesso in lettura a banca, broker o exchange.' },
                        { title: 'Nessun account, nessun login', text: 'Balance non chiede email, nome o dati personali. La scarichi, la apri e inizi a usarla.' },
                        { title: 'Codice open source', text: 'Ogni riga di codice è pubblica. Tu, o chi vuoi, potete verificare che Balance faccia davvero ciò che promette.' }
                    ]
                },
                manifesto: {
                    quote: 'Crediamo che conoscere il proprio patrimonio non debba costare la propria privacy. Balance è nata per dimostrare che un’app finance può essere utile senza sapere nulla di te.',
                    cite: '— Il team di Balance'
                },
                features: {
                    title: 'Privacy non significa meno funzionalità',
                    subtitle: 'Balance ti dà un’esperienza completa di finanza personale, ma senza sorveglianza.',
                    items: [
                        { label: 'Dashboard patrimonio', sub: 'Tutto in una vista' },
                        { label: 'Snapshot mensili', sub: 'Segui l’evoluzione nel tempo' },
                        { label: 'Wallet separati', sub: 'Organizza per tipologia di conto' },
                        { label: 'Aggiornamenti rapidi', sub: '30 secondi, non 30 minuti' }
                    ]
                },
                pricing: {
                    title: 'Gratis per iniziare. Nessuna email richiesta.',
                    subtitle: 'Scarichi, apri, usi. Passi a Pro solo se vuoi wallet illimitati e storico completo.',
                    free: {
                        title: 'Free',
                        badge: 'Nessuna registrazione',
                        description: 'Privacy totale, funzionalità core, zero costo. Niente email, niente carta, zero attrito.',
                        price: '€0',
                        priceSuffix: 'per sempre',
                        list: ['Fino a 3 wallet', 'Dashboard completa', 'Privacy completa'],
                        cta: 'Scarica gratis'
                    },
                    pro: {
                        title: 'Pro Annuale',
                        badge: 'Miglior valore',
                        description: 'Wallet illimitati, snapshot avanzati e storico completo. Stessa privacy.',
                        caption: 'Offerta lancio',
                        price: '€19,99',
                        priceSuffix: '/anno',
                        alt: '€1,67/mese · Risparmi il 44%',
                        note: 'Primo mese gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Inizia la prova gratuita",
                        microcopy: 'Annulla quando vuoi. Dopo la prova, il rinnovo segue il piano selezionato.'
                    }
                },
                finalCta: {
                    badge: 'Offerta lancio',
                    title: 'Riprenditi la tua privacy finanziaria.',
                    text: 'Scarica Balance. Niente registrazione, niente login bancari, niente tracking. Solo un’app pulita che rispetta i tuoi dati.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Scarica su App Store"
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
                    badge: 'Offerta lancio',
                    priceHtml: '2,99 €<span class="price-suffix">al mese</span>',
                    altPrice: "19,99 € l'anno invece di 35,88 €",
                    note: 'Primo mese gratuito attivando un abbonamento mensile o annuale.',
                    list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo senza limiti'],
                    microcopy: 'Alla fine della prova gratuita, salvo annullamento, il rinnovo segue il piano selezionato direttamente in app.',
                    primaryCtaHtml: '<i class="fa-brands fa-apple"></i> App Store',
                    secondaryCta: 'Vedi i piani'
                }
            },
            proWaitlist: {
                meta: {
                    title: 'Balance Pro Waitlist',
                    description: 'Balance Pro è in arrivo. Scopri le nuove funzionalità che stanno per arrivare.'
                },
                hero: {
                    title: 'Balance Pro sta arrivando',
                    subtitle: 'La versione potenziata di Balance sarà disponibile venerdì 20 marzo.'
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
                        text: 'Salva snapshot illimitati e analizza l\'evoluzione del tuo patrimonio nel tempo.'
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
                title: 'Contattaci',
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
                    disclaimer: 'Il messaggio viene consegnato tramite un servizio di terze parti solo per l’invio. Nessun tracciamento o utilizzo marketing.',
                    success: 'Grazie! Il tuo messaggio è stato inviato correttamente.'
                }
            }
        },
        en: {
            global: {
                nav: {
                    home: 'Home',
                    overview: 'Overview',
                    pricing: 'Plans',
                    features: 'Features',
                    roadmap: 'Roadmap',
                    download: 'Download'
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
                    title: 'Control your finances in one place',
                    subtitle: 'Track your net worth, investments, and cash with a private, offline-first personal finance app.',
                    description: 'Balance helps you track bank accounts, investments, crypto and assets in one simple dashboard. Everything stays on your device, with no bank connections and no data sharing.',
                    cta: 'Download Balance'
                },
                trust: [
                    { labelHtml: '100%<br>offline', sub: 'Works without internet' },
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
                    title: 'Available plans',
                    intro: 'Start free with 3 wallets. Upgrade to Pro to unlock unlimited wallets, advanced snapshots, and full history. Choose monthly or annual.',
                    toggleMonthly: 'Monthly',
                    toggleAnnual: 'Annual',
                    monthly: {
                        title: 'Pro Monthly',
                        badge: 'Flexible',
                        description: 'All Pro features with the freedom to pay month by month, no commitment.',
                        billingCaption: 'Monthly subscription',
                        priceHtml: '2.99 €<span class="price-suffix">/ month</span>',
                        altPrice: 'Auto-renews every month',
                        note: 'First month free.',
                        list: [
                            'Unlimited wallets',
                            'Advanced snapshots for more precise analysis',
                            'Full history to track your progress over time'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Start free trial',
                        microcopy: 'After the trial, unless cancelled, renewal follows the selected plan.'
                    },
                    annual: {
                        title: 'Pro Annual',
                        badge: 'Best value',
                        description: 'The most convenient plan for daily Balance users. Save 44% compared to monthly.',
                        billingCaption: 'Annual launch offer',
                        priceHtml: '19.99 €<span class="price-suffix">/ year</span>',
                        altPrice: 'Equals 1.67 € / month · Save 15.89 €',
                        note: 'First month free.',
                        list: [
                            'Unlimited wallets',
                            'Advanced snapshots for more precise analysis',
                            'Full history to track your progress over time'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Start free trial',
                        microcopy: 'After the trial, unless cancelled, renewal follows the selected plan.'
                    }
                },
                features: {
                    title: 'Features',
                    detailEyebrow: 'Detail',
                    cards: {
                        snapshot: {
                            title: 'Net worth snapshots',
                            text: 'Save net worth snapshots and compare your financial history over time.'
                        },
                        wallet: {
                            title: 'Wallet categories',
                            text: 'Organize bank accounts, cash, investments, crypto, and other assets in separate wallets.'
                        },
                        dashboard: {
                            title: 'Clear dashboard',
                            text: 'See net worth, cash, investments, and asset allocation in one simple dashboard.'
                        },
                        privacy: {
                            title: 'Privacy and control',
                            text: 'A privacy finance app with no bank connections, no servers, and no data sharing.'
                        },
                        speed: {
                            title: 'Fast updates',
                            text: 'Update balances in a few taps and keep your offline finance app current in seconds.'
                        }
                    },
                    detailMap: {
                        snapshot: {
                            title: 'Net worth snapshots',
                            text: 'Save net worth snapshots in seconds and review your financial history over time in one clean view.',
                            bullets: [
                                'Manual snapshots with no bank sync or external connections.',
                                'A clearer net worth tracker for long-term progress.',
                                'Track assets and investments without spreadsheet noise.'
                            ]
                        },
                        wallet: {
                            title: 'Wallet categories',
                            text: 'Organize bank accounts, cash, investments, crypto, and assets in clear, separate wallets.',
                            bullets: [
                                'Flexible categories for each account or asset.',
                                'Aggregated totals across cash and portfolios.',
                                'A portfolio tracker structure that matches real life.'
                            ]
                        },
                        dashboard: {
                            title: 'Clear dashboard',
                            text: 'See net worth, cash, investments, and asset allocation in one clean dashboard.',
                            bullets: [
                                'One personal finance app for your full financial picture.',
                                'Essential trends without visual overload.',
                                'Key indicators always accessible.'
                            ]
                        },
                        privacy: {
                            title: 'Privacy and control',
                            text: 'Local data, no bank connections, and zero tracking. Always.',
                            bullets: [
                                'Built as a privacy finance app by design.',
                                'No login, external servers, or automatic sync.',
                                'Full control over your data on your device.'
                            ]
                        },
                        speed: {
                            title: 'Fast updates',
                            text: 'Update your data in just a few taps and keep everything current without friction.',
                            bullets: [
                                'Lean flows with no wasted steps.',
                                'Fast interactions designed for mobile.',
                                'A clean UI for frequent balance updates.'
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
                            a: 'The launch offer includes the first month of Balance Pro for free when you start a monthly or yearly subscription. After the trial, unless cancelled, renewal follows the selected plan.'
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
                    note: 'At the end of the free trial, unless cancelled, renewal follows the selected plan.',
                    explore: {
                        title: 'Explore the landing angles',
                        subtitle: 'Three different entry points for the same product: simplicity, investing, and privacy.',
                        cards: {
                            simple: {
                                title: 'Simple',
                                text: 'For people who want to understand their net worth in seconds, without extra complexity.',
                                cta: 'Open Simple'
                            },
                            investors: {
                                title: 'Investors',
                                text: 'For people tracking crypto, stocks, ETFs, and more without sharing portfolio data.',
                                cta: 'Open Investors'
                            },
                            privacy: {
                                title: 'Privacy',
                                text: 'For people who want an offline, open source finance tracker with zero data collection.',
                                cta: 'Open Privacy'
                            }
                        }
                    }
                }
            },
            lpSimple: {
                meta: {
                    title: 'Balance – Know Your Net Worth in 30 Seconds',
                    description: 'Stop overcomplicating your finances. Balance gives you a clear, private view of your net worth in under a minute.',
                    ogTitle: 'Balance – Know Your Net Worth in 30 Seconds'
                },
                hero: {
                    kicker: 'Simple by design',
                    titleHtml: 'Know your net worth in 30 seconds.',
                    subHtml: 'No bank connections. No complicated setup. Just open the app, update your numbers, and see <strong>exactly where you stand</strong> in one clean screen.',
                    ctaPrimary: 'Download Free',
                    ctaSecondary: 'See how it works',
                    proof: ['Free tier available', 'No signup', 'Works offline']
                },
                steps: {
                    title: "Three steps. That's it.",
                    subtitle: "No bank login wizard. No 15-field onboarding. No email verification. You're up and running in under a minute.",
                    items: [
                        { title: 'Create wallets', text: 'Add a wallet for each account: bank, brokerage, crypto exchange, cash. Name it anything you want.' },
                        { title: 'Enter balances', text: "Type in the current balance. That's it. No sync, no import, no waiting. Just the number." },
                        { title: 'See your net worth', text: 'Your dashboard updates instantly. Cash, investments, total net worth: everything in one clean view.' }
                    ]
                },
                vs: {
                    title: "You've tried the complicated way",
                    old: {
                        title: "<i class='fa-solid fa-xmark'></i> The old way",
                        items: [
                            'Connect every bank account',
                            'Fix broken syncs every week',
                            'Categorize hundreds of transactions',
                            'Create spreadsheet formulas',
                            'Share credentials with third parties',
                            'Wonder if your data is safe'
                        ]
                    },
                    new: {
                        title: "<i class='fa-solid fa-check'></i> The Balance way",
                        items: [
                            'Open the app',
                            'Type your balances',
                            'See your net worth',
                            'Save a snapshot',
                            'Done in 30 seconds',
                            'Data stays on your phone'
                        ]
                    }
                },
                pains: {
                    title: 'Built for people who want clarity, not complexity',
                    items: [
                        { title: 'Tired of spreadsheets?', text: 'Balance replaces your net worth spreadsheet with a cleaner interface that is faster to update and easier to read.' },
                        { title: 'Want a quick check-in?', text: "Open the app, glance at the dashboard, close the app. That's a valid use case. Balance is designed for it." },
                        { title: 'Bank sync keeps breaking?', text: 'Manual entry means no broken connections, no re-auth loops, and no missing transactions. It just works.' },
                        { title: 'Not enough time?', text: 'A monthly check-in takes under a minute. Save a snapshot and keep a record of your financial trajectory with almost no effort.' }
                    ]
                },
                testimonials: {
                    title: 'Why people switch to Balance',
                    items: [
                        { quote: "I used to spend 20 minutes updating a spreadsheet every month. Now I open Balance, type a few numbers, and I'm done.", cite: '— Former spreadsheet user' },
                        { quote: "I don't need my bank connected to know my net worth. I just need the number. Balance gets that.", cite: '— Privacy-focused investor' },
                        { quote: "Finally a finance app that doesn't try to be everything. It tracks my net worth and does it well.", cite: '— Minimalist user' }
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
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Start Free Trial",
                        microcopy: 'Cancel anytime. After the trial, renewal follows the selected plan.'
                    }
                },
                finalCta: {
                    badge: 'Launch offer',
                    title: 'Your finances, simplified.',
                    text: 'Download Balance and see your net worth in under a minute. No setup, no sync, no stress.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Download on App Store"
                }
            },
            lpInvestors: {
                meta: {
                    title: 'Balance – Track Crypto, Stocks & Assets Privately',
                    description: 'Track your full investment portfolio in one private app. No API keys, no bank connections, no data sharing.',
                    ogTitle: 'Balance – Track Crypto, Stocks & Assets Privately'
                },
                hero: {
                    kicker: 'For investors who value control',
                    titleHtml: 'Track every asset.<br>Share nothing.',
                    subHtml: 'Crypto, stocks, ETFs, cash, real estate: all in <strong>one private dashboard</strong>. No API keys. No bank logins. No third-party access to your portfolio.',
                    ctaPrimary: 'Download Free',
                    ctaSecondary: 'See how it works',
                    proof: '100% offline · Open source · Free tier available'
                },
                assets: {
                    crypto: 'Crypto',
                    stocks: 'Stocks',
                    etfs: 'ETFs',
                    cash: 'Cash',
                    realEstate: 'Real Estate'
                },
                problem: {
                    title: "Your portfolio is scattered. Your data shouldn't be.",
                    textHtml: "Most portfolio trackers ask for your exchange API keys, brokerage logins, or bank credentials. Balance takes a different approach: <strong style='color:var(--ink)'>you enter the numbers, the app stays offline, and nobody else sees your data.</strong>"
                },
                benefits: [
                    { title: 'No API keys required', text: "Don't hand over read access to your exchange or brokerage account. Enter balances manually and keep full control." },
                    { title: 'Multi-asset in one view', text: 'See crypto, stocks, bank accounts, and real estate in one dashboard instead of jumping between apps.' },
                    { title: 'Snapshot your portfolio', text: 'Save a monthly snapshot of your holdings and track how your investment picture changes over time.' },
                    { title: 'Works fully offline', text: 'No internet? No problem. Balance works anywhere, and your data never leave the device.' },
                    { title: 'Open source & auditable', text: 'The code is public. No hidden trackers, no surprise analytics, no black box.' },
                    { title: 'Update in seconds', text: 'Quick manual entry means 30 seconds to update, not 30 minutes fixing broken sync.' }
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
                    title: "Start free. Upgrade when you're ready.",
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
                        description: 'For serious investors. Unlimited tracking, full history, and 44% savings.',
                        caption: 'Launch offer',
                        price: '€19.99',
                        priceSuffix: '/year',
                        alt: '€1.67/month · Save €15.89 vs. monthly',
                        note: 'First month free.',
                        list: ['Unlimited wallets', 'Advanced snapshots', 'Complete history'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Start Free Trial",
                        microcopy: 'Cancel anytime. After the trial, renewal follows the selected plan.'
                    }
                },
                finalCta: {
                    badge: 'Launch offer',
                    title: 'Your portfolio deserves privacy.',
                    text: 'Download Balance and start tracking every asset without sharing a single data point.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Download on App Store"
                }
            },
            lpPrivacy: {
                meta: {
                    title: 'Balance – The Finance App That Knows Nothing About You',
                    description: "Your bank tracks every transaction. Your finance app often sells your data. Balance doesn't: offline, open source, zero data collection.",
                    ogTitle: 'Balance – The Finance App That Knows Nothing About You'
                },
                hero: {
                    kicker: 'Zero data collection',
                    titleHtml: "Your finance app <em>tracks you</em>.<br>This one <span class='lp-safe'>doesn't</span>.",
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
                    subtitle: "Every time you connect a bank account or sign in with your email, you're handing over your financial identity.",
                    items: [
                        { title: 'Your data on their servers', text: "Most finance apps store balances, transactions, and net worth on cloud servers you don't control. One breach exposes everything." },
                        { title: 'Bank connections mean access', text: 'Connecting a bank account gives a third-party service read access to your balances, transactions, and account details.' },
                        { title: 'Invisible data harvesting', text: 'Analytics SDKs, ad networks, and so-called anonymous usage data often reveal your financial behavior and net worth range.' }
                    ]
                },
                shields: {
                    title: 'How Balance protects you',
                    subtitle: 'Four layers of privacy built into the architecture, not bolted on later.',
                    items: [
                        { title: '100% offline', text: "The app works without internet. No data leave your phone. There's no server to hack because there is no server." },
                        { title: 'No bank connections', text: 'You enter balances manually, so no third-party service ever gets read access to your accounts.' },
                        { title: 'No account, no login', text: "Balance doesn't ask for your email, name, or personal info. Download it, open it, use it." },
                        { title: 'Open source code', text: 'Every line of code is public, so anyone can verify that Balance does exactly what it claims.' }
                    ]
                },
                manifesto: {
                    quote: "We believe knowing your net worth shouldn't cost your privacy. Balance was built to prove that a finance app can be useful without knowing anything about you.",
                    cite: '— The Balance team'
                },
                features: {
                    title: "Privacy doesn't mean fewer features",
                    subtitle: 'Balance gives you a full personal finance experience, just without the surveillance.',
                    items: [
                        { label: 'Net worth dashboard', sub: 'Everything in one view' },
                        { label: 'Monthly snapshots', sub: 'Track changes over time' },
                        { label: 'Separate wallets', sub: 'Organize by account type' },
                        { label: 'Fast updates', sub: '30 seconds, not 30 minutes' }
                    ]
                },
                pricing: {
                    title: 'Free to start. No email required.',
                    subtitle: 'Download, open, use. Upgrade to Pro only if you want unlimited wallets and full history.',
                    free: {
                        title: 'Free',
                        badge: 'No signup',
                        description: 'Full privacy, core features, zero cost. No email, no card, no friction.',
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
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Start Free Trial",
                        microcopy: 'Cancel anytime. After the trial, renewal follows the selected plan.'
                    }
                },
                finalCta: {
                    badge: 'Launch offer',
                    title: 'Take back your financial privacy.',
                    text: 'Download Balance. No signup, no bank login, no tracking. Just a clean app that respects your data.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Download on App Store"
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
                    badge: 'Launch offer',
                    priceHtml: '2.99 €<span class="price-suffix">/ month</span>',
                    altPrice: '19.99 € / year instead of 35.88 €',
                    note: 'First month free when you start a monthly or yearly subscription.',
                    list: ['Unlimited wallets', 'Advanced snapshots', 'Full history with no limits'],
                    microcopy: 'At the end of the free trial, unless cancelled, renewal follows the selected plan directly in the app.',
                    primaryCtaHtml: '<i class="fa-brands fa-apple"></i> App Store',
                    secondaryCta: 'See plans'
                }
            },
            proWaitlist: {
                meta: {
                    title: 'Balance Pro Waitlist',
                    description: 'Balance Pro is coming. Discover the new features that are about to arrive.'
                },
                hero: {
                    title: 'Balance Pro is coming',
                    subtitle: 'The enhanced version of Balance will be available Friday, March 20.'
                },
                countdown: {
                    label: 'What you unlock with Balance Pro'
                },
                features: [
                    {
                        icon: 'fa-wallet',
                        title: 'Unlimited wallets',
                        text: 'Organize all your resources: bank accounts, investments, crypto, cash and more.'
                    },
                    {
                        icon: 'fa-chart-line',
                        title: 'Advanced snapshots',
                        text: 'Save unlimited snapshots and analyze how your wealth evolves over time.'
                    },
                    {
                        icon: 'fa-history',
                        title: 'Complete history',
                        text: 'Access your complete financial history to compare and analyze trends.'
                    },
                    {
                        icon: 'fa-shield-halved',
                        title: 'Absolute privacy',
                        text: 'Everything stays on your device. No servers, no data sharing.'
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
                title: 'Contact us',
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
                    disclaimer: 'Your message is delivered through a third-party service used only for delivery. No tracking or marketing usage.',
                    success: 'Thank you! Your message has been sent successfully.'
                }
            }
        },
        pt: {
            global: {
                nav: {
                    home: 'Início',
                    overview: 'Visão geral',
                    pricing: 'Planos',
                    features: 'Funcionalidades',
                    roadmap: 'Roadmap',
                    download: 'Download'
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
                    title: 'Controle as suas finanças num só lugar',
                    subtitle: 'Acompanhe património, investimentos e liquidez com uma app de finanças pessoais privada e offline-first.',
                    description: 'Balance ajuda-o a acompanhar contas, investimentos, cripto e ativos num dashboard simples. Tudo fica no seu dispositivo, sem ligações bancárias e sem partilha de dados.',
                    cta: 'Descarregar Balance'
                },
                trust: [
                    { labelHtml: '100%<br>offline', sub: 'Funciona sem internet' },
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
                    title: 'Planos disponíveis',
                    intro: 'Comece grátis com 3 wallets. Passe ao Pro para desbloquear wallets ilimitadas, snapshots avançados e histórico completo. Escolha entre mensal ou anual.',
                    toggleMonthly: 'Mensal',
                    toggleAnnual: 'Anual',
                    monthly: {
                        title: 'Pro Mensal',
                        badge: 'Flexível',
                        description: 'Todas as funcionalidades Pro com a liberdade de pagar mês a mês, sem compromissos.',
                        billingCaption: 'Subscrição mensal',
                        priceHtml: '2,99 €<span class="price-suffix">por mês</span>',
                        altPrice: 'Renovação automática todos os meses',
                        note: 'Primeiro mês grátis.',
                        list: [
                            'Wallets ilimitadas',
                            'Snapshots avançados para análises mais precisas',
                            'Histórico completo para comparar a evolução ao longo do tempo'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Começar período grátis',
                        microcopy: 'No final do período grátis, salvo cancelamento, a renovação segue o plano selecionado.'
                    },
                    annual: {
                        title: 'Pro Anual',
                        badge: 'Melhor valor',
                        description: 'O plano mais conveniente para quem usa o Balance todos os dias. Poupa 44% face ao mensal.',
                        billingCaption: 'Oferta anual de lançamento',
                        priceHtml: '19,99 €<span class="price-suffix">por ano</span>',
                        altPrice: 'Equivale a 1,67 € por mês · Poupa 15,89 €',
                        note: 'Primeiro mês grátis.',
                        list: [
                            'Wallets ilimitadas',
                            'Snapshots avançados para análises mais precisas',
                            'Histórico completo para comparar a evolução ao longo do tempo'
                        ],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Começar período grátis',
                        microcopy: 'No final do período grátis, salvo cancelamento, a renovação segue o plano selecionado.'
                    }
                },
                features: {
                    title: 'Funcionalidades',
                    detailEyebrow: 'Detalhe',
                    cards: {
                        snapshot: {
                            title: 'Snapshots patrimoniais',
                            text: 'Guarde snapshots do património e compare o histórico ao longo do tempo.'
                        },
                        wallet: {
                            title: 'Wallets por tipologia',
                            text: 'Organize contas, liquidez, investimentos, cripto e outros ativos em wallets separadas.'
                        },
                        dashboard: {
                            title: 'Dashboard sintético',
                            text: 'Veja património líquido, liquidez, investimentos e alocação num dashboard simples.'
                        },
                        privacy: {
                            title: 'Privacidade e controlo',
                            text: 'Uma privacy finance app sem ligações bancárias, servidores externos ou partilha de dados.'
                        },
                        speed: {
                            title: 'Experiência rápida',
                            text: 'Atualize saldos em poucos toques e mantenha a sua app financeira offline sempre atualizada.'
                        }
                    },
                    detailMap: {
                        snapshot: {
                            title: 'Snapshots patrimoniais',
                            text: 'Guarde snapshots do património em segundos e reveja o histórico numa vista limpa.',
                            bullets: [
                                'Snapshots manuais sem ligações bancárias.',
                                'Histórico claro para acompanhar a evolução.',
                                'Ativos e investimentos sem ruído.'
                            ]
                        },
                        wallet: {
                            title: 'Wallets por tipologia',
                            text: 'Organize contas, liquidez, investimentos, cripto e ativos em wallets claras e separadas.',
                            bullets: [
                                'Categorias flexíveis para cada conta ou ativo.',
                                'Totais agregados entre liquidez e portfólios.',
                                'Estrutura coerente com a sua realidade.'
                            ]
                        },
                        dashboard: {
                            title: 'Dashboard sintético',
                            text: 'Veja património, liquidez, investimentos e alocação num dashboard limpo.',
                            bullets: [
                                'Uma app de finanças pessoais para a visão completa.',
                                'Tendências essenciais sem sobrecarga visual.',
                                'Indicadores-chave sempre acessíveis.'
                            ]
                        },
                        privacy: {
                            title: 'Privacidade e controlo',
                            text: 'Dados locais, sem ligações bancárias e zero rastreamento. Sempre.',
                            bullets: [
                                'Criada como privacy finance app por definição.',
                                'Sem login, servidores externos ou sync automática.',
                                'Controlo total sobre os seus dados no dispositivo.'
                            ]
                        },
                        speed: {
                            title: 'Experiência rápida',
                            text: 'Atualize os seus dados em poucos toques e mantenha tudo atual sem fricção.',
                            bullets: [
                                'Fluxos essenciais sem passos desnecessários.',
                                'Interações rápidas pensadas para mobile.',
                                'Interface limpa para atualizações frequentes.'
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
                            a: 'A oferta de lançamento inclui o primeiro mês de Balance Pro grátis ao ativar uma subscrição mensal ou anual. No final do período gratuito, salvo cancelamento, a renovação segue o plano selecionado.'
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
                    note: 'No final do período gratuito, salvo cancelamento, a renovação segue o plano selecionado.',
                    explore: {
                        title: 'Explore as landing pages por ângulo',
                        subtitle: 'Três portas de entrada para o mesmo produto: simplicidade, investimentos e privacidade.',
                        cards: {
                            simple: {
                                title: 'Simple',
                                text: 'Para quem quer perceber o próprio património em segundos, sem complexidade desnecessária.',
                                cta: 'Abrir Simple'
                            },
                            investors: {
                                title: 'Investors',
                                text: 'Para quem acompanha cripto, ações, ETFs e mais sem partilhar os dados do portfólio.',
                                cta: 'Abrir Investors'
                            },
                            privacy: {
                                title: 'Privacy',
                                text: 'Para quem quer um tracker financeiro offline, open source e com zero recolha de dados.',
                                cta: 'Abrir Privacy'
                            }
                        }
                    }
                }
            },
            lpSimple: {
                meta: {
                    title: 'Balance – Conheça o seu património em 30 segundos',
                    description: 'Pare de complicar as suas finanças. Balance dá-lhe uma visão clara e privada do seu património em menos de um minuto.',
                    ogTitle: 'Balance – Conheça o seu património em 30 segundos'
                },
                hero: {
                    kicker: 'Simples por definição',
                    titleHtml: 'Conheça o seu património em 30 segundos.',
                    subHtml: 'Sem ligações bancárias. Sem setup complicado. Abra a app, atualize os números e veja <strong>exatamente onde está</strong> num ecrã limpo.',
                    ctaPrimary: 'Descarregar grátis',
                    ctaSecondary: 'Ver como funciona',
                    proof: ['Plano gratuito disponível', 'Sem registo', 'Funciona offline']
                },
                steps: {
                    title: 'Três passos. Só isso.',
                    subtitle: 'Sem wizard bancário. Sem onboarding com 15 campos. Sem verificação por email. Fica pronto em menos de um minuto.',
                    items: [
                        { title: 'Crie wallets', text: 'Adicione uma wallet para cada conta: banco, broker, exchange cripto, dinheiro. Dê-lhe o nome que quiser.' },
                        { title: 'Introduza os saldos', text: 'Escreva o saldo atual. É só isso. Sem sync, sem importações, sem espera. Apenas o número.' },
                        { title: 'Veja o seu património', text: 'O dashboard atualiza instantaneamente. Liquidez, investimentos, património total: tudo numa vista clara.' }
                    ]
                },
                vs: {
                    title: 'Já experimentou o caminho complicado',
                    old: {
                        title: "<i class='fa-solid fa-xmark'></i> O método antigo",
                        items: [
                            'Ligar todas as contas bancárias',
                            'Corrigir syncs partidas todas as semanas',
                            'Categorizar centenas de movimentos',
                            'Criar fórmulas em folhas de cálculo',
                            'Partilhar credenciais com terceiros',
                            'Perguntar-se se os dados estão seguros'
                        ]
                    },
                    new: {
                        title: "<i class='fa-solid fa-check'></i> O método Balance",
                        items: [
                            'Abrir a app',
                            'Introduzir os saldos',
                            'Ver o património',
                            'Guardar um snapshot',
                            'Feito em 30 segundos',
                            'Os dados ficam no seu telefone'
                        ]
                    }
                },
                pains: {
                    title: 'Feita para quem quer clareza, não complexidade',
                    items: [
                        { title: 'Cansado de folhas de cálculo?', text: 'Balance substitui a sua spreadsheet do património por uma interface mais limpa, mais rápida de atualizar e mais agradável de consultar.' },
                        { title: 'Quer um check rápido?', text: 'Abra a app, veja o dashboard, feche a app. Esse também é um caso de uso válido e Balance foi pensada para isso.' },
                        { title: 'A sync bancária falha sempre?', text: 'A introdução manual elimina ligações partidas, loops de reautenticação e movimentos em falta. Funciona sempre.' },
                        { title: 'Sem tempo suficiente?', text: 'Um check mensal demora menos de um minuto. Guarde um snapshot e mantenha um registo da sua trajetória financeira sem esforço.' }
                    ]
                },
                testimonials: {
                    title: 'Porque é que as pessoas mudam para Balance',
                    items: [
                        { quote: 'Antes perdia 20 minutos por mês a atualizar uma folha de cálculo. Agora abro o Balance, introduzo alguns números e pronto.', cite: '— Ex utilizador de spreadsheet' },
                        { quote: 'Não preciso da minha conta bancária ligada para saber o meu património. Preciso apenas do número certo. Balance percebe isso.', cite: '— Investidor focado em privacidade' },
                        { quote: 'Finalmente uma app financeira que não tenta ser tudo ao mesmo tempo. Acompanha o meu património e faz isso bem.', cite: '— Utilizador minimalista' }
                    ]
                },
                pricing: {
                    title: 'Preço simples. Sem surpresas.',
                    subtitle: 'Comece grátis. Faça upgrade se quiser mais.',
                    free: {
                        title: 'Free',
                        badge: 'Comece aqui',
                        description: 'O essencial. Até 3 wallets com dashboard limpa e snapshots básicos.',
                        price: '€0',
                        priceSuffix: 'para sempre',
                        list: ['Até 3 wallets', 'Dashboard completa', 'Snapshots essenciais'],
                        cta: 'Descarregar grátis'
                    },
                    pro: {
                        title: 'Pro Anual',
                        badge: 'Melhor valor',
                        description: 'Wallets ilimitadas, histórico completo e snapshots avançados. Menos do que um café por mês.',
                        caption: 'Oferta de lançamento',
                        price: '€19,99',
                        priceSuffix: '/ano',
                        alt: '€1,67/mês · Poupa 44%',
                        note: 'Primeiro mês grátis.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Iniciar período grátis",
                        microcopy: 'Cancele quando quiser. Após o período grátis, a renovação segue o plano escolhido.'
                    }
                },
                finalCta: {
                    badge: 'Oferta de lançamento',
                    title: 'As suas finanças, simplificadas.',
                    text: 'Descarregue o Balance e veja o seu património em menos de um minuto. Sem setup, sem sync, sem stress.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Descarregar na App Store"
                }
            },
            lpInvestors: {
                meta: {
                    title: 'Balance – Acompanhe cripto, ações e ativos com privacidade',
                    description: 'Acompanhe todo o seu portfólio de investimento numa única app privada. Sem API keys, sem ligações bancárias, sem partilha de dados.',
                    ogTitle: 'Balance – Acompanhe cripto, ações e ativos com privacidade'
                },
                hero: {
                    kicker: 'Para investidores que valorizam controlo',
                    titleHtml: 'Acompanhe cada ativo.<br>Não partilhe nada.',
                    subHtml: 'Cripto, ações, ETFs, liquidez, imobiliário: tudo num <strong>dashboard privado</strong>. Sem API keys. Sem logins bancários. Sem acesso de terceiros ao seu portfólio.',
                    ctaPrimary: 'Descarregar grátis',
                    ctaSecondary: 'Ver como funciona',
                    proof: '100% offline · Open source · Plano gratuito disponível'
                },
                assets: {
                    crypto: 'Cripto',
                    stocks: 'Ações',
                    etfs: 'ETFs',
                    cash: 'Liquidez',
                    realEstate: 'Imobiliário'
                },
                problem: {
                    title: 'O seu portfólio está disperso. Os seus dados não deviam estar.',
                    textHtml: "A maioria dos portfolio trackers pede API keys, logins de brokers ou credenciais bancárias. O Balance faz o oposto: <strong style='color:var(--ink)'>introduz os números, a app fica offline e mais ninguém vê os seus dados.</strong>"
                },
                benefits: [
                    { title: 'Sem API keys', text: 'Não entregue acesso de leitura às suas contas de exchange ou broker. Introduza os saldos manualmente e mantenha o controlo total.' },
                    { title: 'Multi-ativo numa só vista', text: 'Veja cripto, ações, contas bancárias e imobiliário num só dashboard em vez de saltar entre apps.' },
                    { title: 'Guarde snapshots do portfólio', text: 'Guarde um snapshot mensal das suas posições e acompanhe a evolução ao longo do tempo.' },
                    { title: 'Funciona totalmente offline', text: 'Sem internet? Sem problema. Balance funciona em qualquer lugar e os dados nunca saem do dispositivo.' },
                    { title: 'Open source e auditável', text: 'O código é público. Sem trackers escondidos, sem analytics surpresa, sem caixa preta.' },
                    { title: 'Atualiza em segundos', text: 'A introdução manual demora 30 segundos, não 30 minutos a corrigir syncs bancárias partidas.' }
                ],
                comparison: {
                    title: 'Balance vs. trackers tradicionais',
                    subtitle: 'Outras ferramentas prometem conveniência. Balance entrega controlo.',
                    headers: ['', 'Balance', 'Outros'],
                    rows: [
                        ['Exige login bancário', 'Não', 'Sim'],
                        ['Precisa de API keys', 'Não', 'Sim'],
                        ['Dados guardados localmente', 'Sim', 'Cloud'],
                        ['Funciona offline', 'Sim', 'Não'],
                        ['Open source', 'Sim', 'Não'],
                        ['Tracking multi-ativo', 'Sim', 'Parcial']
                    ]
                },
                pricing: {
                    title: 'Comece grátis. Faça upgrade quando quiser.',
                    subtitle: 'Acompanhe até 3 wallets grátis para sempre. Vá para Pro para wallets ilimitadas, snapshots avançados e histórico completo.',
                    free: {
                        title: 'Free',
                        badge: 'Sem cartão',
                        description: 'Tudo o que precisa para começar a acompanhar o seu portfólio com privacidade.',
                        price: '€0',
                        priceSuffix: 'para sempre',
                        list: ['Até 3 wallets', 'Dashboard completa', 'Snapshots essenciais'],
                        cta: 'Descarregar grátis'
                    },
                    pro: {
                        title: 'Pro Anual',
                        badge: 'Melhor valor',
                        description: 'Para investidores sérios. Tracking ilimitado, histórico completo e 44% de poupança.',
                        caption: 'Oferta de lançamento',
                        price: '€19,99',
                        priceSuffix: '/ano',
                        alt: '€1,67/mês · Poupa €15,89 face ao mensal',
                        note: 'Primeiro mês grátis.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Iniciar período grátis",
                        microcopy: 'Cancele quando quiser. Após o período grátis, a renovação segue o plano escolhido.'
                    }
                },
                finalCta: {
                    badge: 'Oferta de lançamento',
                    title: 'O seu portfólio merece privacidade.',
                    text: 'Descarregue o Balance e comece a acompanhar cada ativo sem partilhar um único dado.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Descarregar na App Store"
                }
            },
            lpPrivacy: {
                meta: {
                    title: 'Balance – A app financeira que não sabe nada sobre si',
                    description: 'O seu banco acompanha cada movimento. A sua app financeira muitas vezes vende os seus dados. Balance não: offline, open source e zero recolha de dados.',
                    ogTitle: 'Balance – A app financeira que não sabe nada sobre si'
                },
                hero: {
                    kicker: 'Zero recolha de dados',
                    titleHtml: "A sua app financeira <em>segue-o</em>.<br>Esta <span class='lp-safe'>não</span>.",
                    sub: 'Balance é uma app de finanças pessoais que funciona 100% offline, não guarda nada em servidores e nunca pede credenciais bancárias. O seu dinheiro, os seus dados, o seu dispositivo.',
                    ctaPrimary: 'Descarregar grátis',
                    ctaSecondary: 'Porque importa'
                },
                proof: {
                    servers: 'Servidores',
                    trackers: 'Trackers',
                    dataShared: 'Dados partilhados',
                    openSource: 'Open source'
                },
                threats: {
                    title: 'O problema da maioria das apps financeiras',
                    subtitle: 'Sempre que liga uma conta bancária ou entra com email, está a entregar a sua identidade financeira.',
                    items: [
                        { title: 'Os seus dados nos servidores deles', text: 'Muitas apps guardam saldos, movimentos e património em servidores cloud que não controla. Uma falha expõe tudo.' },
                        { title: 'Ligações bancárias significam acesso', text: 'Ligar uma conta bancária dá a um serviço terceiro acesso de leitura a saldos, movimentos e detalhes da conta.' },
                        { title: 'Recolha invisível de dados', text: 'SDKs de analytics, redes publicitárias e dados de utilização supostamente anónimos costumam revelar o seu comportamento financeiro.' }
                    ]
                },
                shields: {
                    title: 'Como o Balance o protege',
                    subtitle: 'Quatro camadas de privacidade incorporadas na arquitetura, não adicionadas depois.',
                    items: [
                        { title: '100% offline', text: 'A app funciona sem internet. Nenhum dado sai do telefone. Não existe servidor para atacar porque não existe servidor.' },
                        { title: 'Sem ligações bancárias', text: 'Introduz os saldos manualmente, por isso nenhum serviço terceiro recebe acesso de leitura às suas contas.' },
                        { title: 'Sem conta, sem login', text: 'Balance não pede email, nome nem informação pessoal. Descarrega, abre e usa.' },
                        { title: 'Código open source', text: 'Cada linha de código é pública, por isso qualquer pessoa pode verificar que o Balance faz exatamente o que promete.' }
                    ]
                },
                manifesto: {
                    quote: 'Acreditamos que conhecer o próprio património não deve custar a sua privacidade. Balance foi criada para provar que uma app financeira pode ser útil sem saber nada sobre si.',
                    cite: '— A equipa Balance'
                },
                features: {
                    title: 'Privacidade não significa menos funcionalidades',
                    subtitle: 'Balance oferece uma experiência completa de finanças pessoais, só que sem vigilância.',
                    items: [
                        { label: 'Dashboard patrimonial', sub: 'Tudo numa só vista' },
                        { label: 'Snapshots mensais', sub: 'Acompanhe a evolução ao longo do tempo' },
                        { label: 'Wallets separadas', sub: 'Organize por tipo de conta' },
                        { label: 'Atualizações rápidas', sub: '30 segundos, não 30 minutos' }
                    ]
                },
                pricing: {
                    title: 'Grátis para começar. Sem email.',
                    subtitle: 'Descarrega, abre, usa. Passa a Pro apenas se quiser wallets ilimitadas e histórico completo.',
                    free: {
                        title: 'Free',
                        badge: 'Sem registo',
                        description: 'Privacidade total, funcionalidades core, custo zero. Sem email, sem cartão, sem fricção.',
                        price: '€0',
                        priceSuffix: 'para sempre',
                        list: ['Até 3 wallets', 'Dashboard completa', 'Privacidade total'],
                        cta: 'Descarregar grátis'
                    },
                    pro: {
                        title: 'Pro Anual',
                        badge: 'Melhor valor',
                        description: 'Wallets ilimitadas, snapshots avançados e histórico completo. A mesma privacidade.',
                        caption: 'Oferta de lançamento',
                        price: '€19,99',
                        priceSuffix: '/ano',
                        alt: '€1,67/mês · Poupa 44%',
                        note: 'Primeiro mês grátis.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo'],
                        ctaHtml: "<i class='fa-brands fa-apple'></i> Iniciar período grátis",
                        microcopy: 'Cancele quando quiser. Após o período grátis, a renovação segue o plano escolhido.'
                    }
                },
                finalCta: {
                    badge: 'Oferta de lançamento',
                    title: 'Recupere a sua privacidade financeira.',
                    text: 'Descarregue o Balance. Sem registo, sem login bancário, sem tracking. Apenas uma app limpa que respeita os seus dados.',
                    ctaHtml: "<i class='fa-brands fa-apple'></i> Descarregar na App Store"
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
                    badge: 'Oferta de lançamento',
                    priceHtml: '2,99 €<span class="price-suffix">por mês</span>',
                    altPrice: '19,99 € por ano em vez de 35,88 €',
                    note: 'Primeiro mês grátis ao ativar uma subscrição mensal ou anual.',
                    list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo sem limites'],
                    microcopy: 'No final do período gratuito, salvo cancelamento, a renovação segue o plano selecionado diretamente na app.',
                    primaryCtaHtml: '<i class="fa-brands fa-apple"></i> App Store',
                    secondaryCta: 'Ver planos'
                }
            },
            proWaitlist: {
                meta: {
                    title: 'Balance Pro Waitlist',
                    description: 'Balance Pro está chegando. Descubra as novas funcionalidades que estão prestes a chegar.'
                },
                hero: {
                    title: 'Balance Pro está chegando',
                    subtitle: 'A versão melhorada do Balance estará disponível sexta-feira, 20 de março.'
                },
                countdown: {
                    label: 'O que desbloqueia com Balance Pro'
                },
                features: [
                    {
                        icon: 'fa-wallet',
                        title: 'Wallets ilimitadas',
                        text: 'Organize todos os seus recursos: contas bancárias, investimentos, crypto, cash e muito mais.'
                    },
                    {
                        icon: 'fa-chart-line',
                        title: 'Snapshots avançados',
                        text: 'Guarde snapshots ilimitados e analise como o seu património evolui ao longo do tempo.'
                    },
                    {
                        icon: 'fa-history',
                        title: 'Histórico completo',
                        text: 'Aceda ao seu histórico financeiro completo para comparar e analisar tendências.'
                    },
                    {
                        icon: 'fa-shield-halved',
                        title: 'Privacidade absoluta',
                        text: 'Tudo fica no seu dispositivo. Sem servidores, sem partilha de dados.'
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
                title: 'Contacte-nos',
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
                    disclaimer: 'A sua mensagem é entregue através de um serviço externo usado apenas para envio. Sem rastreamento nem uso para marketing.',
                    success: 'Obrigado! A sua mensagem foi enviada com sucesso.'
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
        if (path === 'lp-simple.html') return 'lpSimple';
        if (path === 'lp-investors.html') return 'lpInvestors';
        if (path === 'lp-privacy.html') return 'lpPrivacy';
        if (path === 'roadmap.html') return 'roadmap';
        if (path === 'privacy.html') return 'privacy';
        if (path === 'terms.html') return 'terms';
        if (path === 'contacts.html') return 'contacts';
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

        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        const short = browserLang.split('-')[0];
        const detected = SUPPORTED_LANGS.includes(short) ? short : 'en';
        localStorage.setItem(LANG_STORAGE_KEY, detected);
        return detected;
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
        document.querySelectorAll('.nav-links a[href="#hero"], .nav-links a[href*="#overview"]').forEach((el) => {
            el.textContent = langCopy.global.nav.overview;
        });
        document.querySelectorAll('.nav-links a[href^="index.html"]').forEach((el) => {
            el.textContent = langCopy.global.nav.home;
        });
        setText('.nav-links a[href*="#pricing"]', langCopy.global.nav.pricing);
        setText('.nav-links a[href*="#features"]', langCopy.global.nav.features);
        setText('.nav-links a[href*="roadmap.html"]', langCopy.global.nav.roadmap);
        setText('.nav-links .btn[href*="#download"]', langCopy.global.nav.download);
        setAttr('.mobile-menu-btn', 'aria-label', langCopy.global.ui.menu);

        document.querySelectorAll('.footer-links a[href^="privacy.html"]').forEach((el) => {
            el.textContent = langCopy.global.footer.privacy;
        });
        document.querySelectorAll('.footer-links a[href^="terms.html"]').forEach((el) => {
            el.textContent = langCopy.global.footer.terms;
        });
        document.querySelectorAll('.footer-links a[href^="contacts.html"]').forEach((el) => {
            el.textContent = langCopy.global.footer.contacts;
        });
        setText('.copyright', langCopy.global.footer.copyright);
        setText('.footer-language-label', langCopy.global.footer.language);
        setAttr('.footer-language-select', 'aria-label', langCopy.global.footer.language);
        document.querySelectorAll('.btn-store-soon').forEach((button) => {
            button.innerHTML = `<i class="fa-brands fa-google-play"></i> ${langCopy.global.ui.googlePlay}<span class="soon-badge">${langCopy.global.ui.comingSoon}</span>`;
        });

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
            history.replaceState(null, '', url.toString());

            applyTranslations();
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
            trustItems[0].querySelector('.trust-label').innerHTML = page.trust[0].labelHtml;
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
        setText('.pricing-intro', page.pricing.intro);
        const toggleMonthly = document.querySelector('.pricing-toggle-btn[data-plan="monthly"]');
        const toggleAnnual = document.querySelector('.pricing-toggle-btn[data-plan="annual"]');
        if (toggleMonthly) toggleMonthly.textContent = page.pricing.toggleMonthly;
        if (toggleAnnual) toggleAnnual.textContent = page.pricing.toggleAnnual;
        const applyPricingCard = (card, copy) => {
            if (!card || !copy) return;
            const h3 = card.querySelector('h3');
            if (h3) h3.textContent = copy.title;
            const badge = card.querySelector('.badge');
            if (badge) badge.textContent = copy.badge;
            const desc = card.querySelector('.pricing-description');
            if (desc) desc.textContent = copy.description;
            const caption = card.querySelector('.pricing-billing-caption');
            if (caption) caption.textContent = copy.billingCaption;
            const price = card.querySelector('.pricing-price');
            if (price) price.innerHTML = copy.priceHtml;
            const altPrice = card.querySelector('.pricing-alt-price');
            if (altPrice) altPrice.textContent = copy.altPrice;
            const note = card.querySelector('.pricing-note');
            if (note) note.textContent = copy.note;
            card.querySelectorAll('.pricing-list li span').forEach((span, i) => {
                if (copy.list[i] !== undefined) span.textContent = copy.list[i];
            });
            const btn = card.querySelector('.btn');
            if (btn) btn.innerHTML = copy.ctaHtml;
            const micro = card.querySelector('.pricing-microcopy');
            if (micro) micro.textContent = copy.microcopy;
        };
        applyPricingCard(document.querySelector('.pricing-card-monthly'), page.pricing.monthly);
        applyPricingCard(document.querySelector('.pricing-card-annual'), page.pricing.annual);

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
        setText('#download .download-explore-title', page.download.explore.title);
        setText('#download .download-explore-subtitle', page.download.explore.subtitle);
        setText('[data-landing-card="simple"] .landing-card-title', page.download.explore.cards.simple.title);
        setText('[data-landing-card="simple"] .landing-card-text', page.download.explore.cards.simple.text);
        setText('[data-landing-card="simple"] .landing-card-link span', page.download.explore.cards.simple.cta);
        setText('[data-landing-card="investors"] .landing-card-title', page.download.explore.cards.investors.title);
        setText('[data-landing-card="investors"] .landing-card-text', page.download.explore.cards.investors.text);
        setText('[data-landing-card="investors"] .landing-card-link span', page.download.explore.cards.investors.cta);
        setText('[data-landing-card="privacy"] .landing-card-title', page.download.explore.cards.privacy.title);
        setText('[data-landing-card="privacy"] .landing-card-text', page.download.explore.cards.privacy.text);
        setText('[data-landing-card="privacy"] .landing-card-link span', page.download.explore.cards.privacy.cta);
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
        const elementsWithI18n = document.querySelectorAll('[data-i18n]');
        elementsWithI18n.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedProperty(langCopy, key);
            if (value !== undefined) {
                el.textContent = value;
            }
        });
    }

    function applyDataI18nHtmlAttributes(langCopy) {
        const elementsWithI18nHtml = document.querySelectorAll('[data-i18n-html]');
        elementsWithI18nHtml.forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            const value = getNestedProperty(langCopy, key);
            if (value !== undefined) {
                el.innerHTML = value;
            }
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
        if (pageKey === 'lpSimple') applyMeta(langCopy.lpSimple, currentLang);
        if (pageKey === 'lpInvestors') applyMeta(langCopy.lpInvestors, currentLang);
        if (pageKey === 'lpPrivacy') applyMeta(langCopy.lpPrivacy, currentLang);
        if (pageKey === 'pro-waitlist') applyMeta(langCopy.proWaitlist, currentLang);
        if (pageKey === 'roadmap') applyRoadmap(langCopy);
        if (pageKey === 'privacy') applyLegalPage(langCopy.privacy);
        if (pageKey === 'terms') applyLegalPage(langCopy.terms);
        if (pageKey === 'contacts') applyContacts(langCopy);
        
        // Apply data-i18n attributes for all pages
        applyDataI18nAttributes(langCopy);
        applyDataI18nHtmlAttributes(langCopy);

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
