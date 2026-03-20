const BalanceV2I18n = (() => {
    const translations = {
        en: {
            meta: {
                home: {
                    title: 'Balance — Take control of your finances',
                    description: 'Balance is the private, offline-first website for tracking money, investments, and net worth with clarity.'
                },
                roadmap: {
                    title: 'Balance Roadmap',
                    description: 'Follow the Balance roadmap and see what is shipping next.'
                },
                contribute: {
                    title: 'Contribute to Balance',
                    description: 'Help shape Balance with roadmap feedback, issues, docs, translations, and code contributions.'
                },
                contact: {
                    title: 'Contact Balance',
                    description: 'Use Balance contact channels for questions, feedback, roadmap ideas, and bug reports.'
                },
                privacy: {
                    title: 'Balance Privacy Policy',
                    description: 'Read the privacy principles behind Balance, including offline data storage and no bank sync.'
                },
                terms: {
                    title: 'Balance Terms',
                    description: 'Review the terms for using Balance, including subscriptions, availability, and responsibilities.'
                }
            },
            common: {
                brand: 'Balance',
                nav: {
                    overview: 'Overview',
                    features: 'Features',
                    roadmap: 'Roadmap',
                    contribute: 'Contribute',
                    download: 'Download'
                },
                footer: {
                    privacy: 'Privacy Policy',
                    terms: 'Terms',
                    contact: 'Contact',
                    github: 'GitHub',
                    language: 'Language',
                    copyright: '© Balance. All rights reserved.'
                },
                cta: {
                    appStoreHtml: '<i class="fa-brands fa-apple"></i> Download on the App Store',
                    roadmap: 'View roadmap',
                    github: 'Contribute on GitHub'
                }
            },
            home: {
                hero: {
                    eyebrow: 'Private · Offline · Open source',
                    brand: 'Balance',
                    title: 'Take control of your finances.',
                    subtitle: 'Private. Offline. Fully yours.',
                    support: 'Track your money, investments and net worth with clarity. No bank connections. No sync. No noise.'
                },
                trust: [
                    { title: 'Private by design', text: 'Local-first, manual, and built to stay readable.' },
                    { title: 'Works offline', text: 'Your workflow does not depend on any external service.' },
                    { title: 'No bank sync', text: 'You decide what goes in and when it gets updated.' },
                    { title: 'Your data stays on your device', text: 'No hidden pipeline between you and your finances.' }
                ],
                core: {
                    title: 'Control changes everything.',
                    p1: 'Most finance apps try to automate your money. Balance gives you control instead.',
                    p2: 'You decide what to track. You decide when to update. You understand everything.',
                    p3: 'No black boxes. No hidden logic.'
                },
                value: {
                    title: 'Everything you need. Nothing you don’t.',
                    support: 'Simple inputs. Clear outputs.',
                    items: [
                        { title: 'All your wallets in one place', text: 'Cash, investments, savings, and anything else you want to keep visible.' },
                        { title: 'One view of your total net worth', text: 'Track the big picture without losing the details.' },
                        { title: 'Monthly snapshots', text: 'Capture where things stand and build a clear record over time.' },
                        { title: 'Progress you can actually read', text: 'Less noise, better context, and a calmer routine.' }
                    ]
                },
                screenshots: {
                    title: 'See your finances clearly.',
                    cards: [
                        { title: 'A calm overview', text: 'A product interface designed to make balances and categories feel immediate.' },
                        { title: 'Trends over time', text: 'Use snapshots to see direction, not just the latest number.' },
                        { title: 'Wallet structure', text: 'Keep accounts and assets separated without losing your overall picture.' },
                        { title: 'Snapshots that matter', text: 'A manual rhythm that stays useful because it stays simple.' }
                    ]
                },
                philosophy: {
                    title: 'No sync. By choice.',
                    p1: 'Balance doesn’t connect to your bank.',
                    p2: 'That’s not a limitation. It’s a decision.',
                    bullets: [
                        'Your data stays on your device',
                        'No external dependencies',
                        'No broken connections',
                        'No surprises'
                    ],
                    closing: 'You’re always in control.'
                },
                how: {
                    title: 'Simple by design.',
                    closing: 'It takes seconds. It gives you clarity over time.',
                    steps: [
                        { title: 'Add your wallets', text: 'Create the structure that matches how you actually organize your money.' },
                        { title: 'Insert your balances', text: 'Update manually, quickly, and only when it makes sense.' },
                        { title: 'Save monthly snapshots', text: 'Keep a clean record of where everything stands.' },
                        { title: 'Track your growth over time', text: 'See what changed, what improved, and where to focus next.' }
                    ]
                },
                open: {
                    title: 'Built in the open.',
                    copy: 'Balance is evolving step by step. Follow the roadmap. Suggest features. Contribute to the project.',
                    cards: [
                        { kicker: 'Roadmap', title: 'Transparent priorities', text: 'See what is being refined now, what comes next, and what stays intentionally later.' },
                        { kicker: 'Feedback', title: 'Ideas shape the product', text: 'Feature requests and product feedback are part of how Balance moves forward.' },
                        { kicker: 'Code', title: 'Open source by default', text: 'Review the codebase, propose changes, or help improve the product over time.' }
                    ]
                },
                plans: {
                    title: 'Start simple. Upgrade anytime.',
                    intro: 'Free stays focused. Pro adds room for deeper control.',
                    toggle: {
                        aria: 'Choose Balance Pro billing',
                        annual: 'Yearly',
                        monthly: 'Monthly'
                    },
                    free: {
                        badge: 'To get started',
                        title: 'Balance Free',
                        description: 'Everything you need to get started.',
                        priceLabel: 'Free',
                        list: ['Up to 3 wallets', 'Essential snapshots', 'Full history'],
                        cta: 'Download free'
                    },
                    pro: {
                        badgeAnnual: 'Launch offer',
                        badgeMonthly: 'Cancel anytime',
                        pillAnnual: 'Best value',
                        pillMonthly: 'Monthly plan',
                        title: 'Balance Pro',
                        description: 'Advanced features for deeper control.',
                        annualCaption: 'Launch yearly offer',
                        annualPriceHtml: '19.99 €<span class="price-suffix">/ year</span>',
                        annualChip: 'Save 15.89 €',
                        annualAlt: 'Equivalent to 1.67 € / month instead of 35.88 € / year',
                        annualNote: 'Free trial month.',
                        monthlyCaption: 'Monthly plan',
                        monthlyPriceHtml: '2.99 €<span class="price-suffix">/ month</span>',
                        monthlyChip: 'Monthly',
                        monthlyAlt: 'Monthly renewal at 2.99 €',
                        monthlyNote: 'Free trial month.',
                        list: ['Unlimited wallets', 'Advanced snapshots', 'Full history for deeper comparisons'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Download and unlock Pro',
                        microcopy: 'At the end of the free trial, unless cancelled, renewal follows the selected plan.'
                    }
                },
                faq: {
                    title: 'Frequently asked questions',
                    items: [
                        {
                            q: 'Is Balance private?',
                            a: 'Yes. Balance is designed around local storage, manual updates, and no hidden data flow.'
                        },
                        {
                            q: 'Does it connect to banks or brokerages?',
                            a: 'No. Balance does not sync with banks or brokers. You stay in control of what gets tracked.'
                        },
                        {
                            q: 'What can I track?',
                            a: 'Wallets, cash, investments, and your total net worth over time.'
                        },
                        {
                            q: 'What’s the difference between Free and Pro?',
                            a: 'Free covers the essentials. Pro removes limits and adds more advanced depth for long-term tracking.'
                        },
                        {
                            q: 'Is Android available?',
                            a: 'iOS is available now. Android is on the roadmap.'
                        }
                    ]
                },
                final: {
                    title: 'Take control today.',
                    copy: 'Your finances. Your decisions.'
                }
            },
            roadmap: {
                hero: {
                    eyebrow: 'Roadmap',
                    title: 'Where Balance is heading.',
                    copy: 'Balance is evolving in the open, with deliberate priorities and a product direction built around control.'
                },
                columns: {
                    now: {
                        kicker: 'Now',
                        title: 'What is being refined',
                        text: 'Focus stays on product clarity, reliability, and faster day-to-day use.',
                        items: [
                            'Polish the core dashboard and wallet flow',
                            'Improve monthly snapshot routines',
                            'Tighten mobile experience and readability',
                            'Keep the core product calm and predictable'
                        ]
                    },
                    next: {
                        kicker: 'Next',
                        title: 'What comes after',
                        text: 'The next layer adds depth without turning the product into a noisy finance tool.',
                        items: [
                            'Richer charts and comparisons',
                            'More flexible wallet structure',
                            'Export options for your own records',
                            'Better review patterns across time'
                        ]
                    },
                    later: {
                        kicker: 'Later',
                        title: 'What stays intentional',
                        text: 'Future work will be evaluated against the same product principles.',
                        items: [
                            'Optional cloud backup without losing local control',
                            'More customization around views and categories',
                            'Broader platform coverage',
                            'Community-driven improvements through open development'
                        ]
                    }
                },
                principles: {
                    title: 'How priorities get decided',
                    items: [
                        {
                            title: 'Control first',
                            text: 'Features only ship if they keep the product understandable and user-controlled.'
                        },
                        {
                            title: 'Private by default',
                            text: 'The offline model stays central. Convenience never comes at the cost of clarity.'
                        },
                        {
                            title: 'Small, durable steps',
                            text: 'Balance grows through focused iterations instead of feature sprawl.'
                        }
                    ]
                },
                cta: {
                    title: 'Want to help shape what comes next?',
                    copy: 'Follow the roadmap, suggest improvements, or contribute directly on GitHub.'
                }
            },
            contribute: {
                hero: {
                    eyebrow: 'Contribute',
                    title: 'Help shape Balance.',
                    copy: 'Balance is built in the open. Ideas, issues, documentation, translations, and code all move the product forward.'
                },
                ways: {
                    title: 'Where to contribute',
                    items: [
                        {
                            title: 'Suggest product improvements',
                            text: 'Open issues for workflow ideas, missing details, or product direction feedback.',
                            bullets: ['Feature ideas', 'Copy feedback', 'UX observations']
                        },
                        {
                            title: 'Report bugs clearly',
                            text: 'Good issue reports help protect the calm, reliable experience the product aims for.',
                            bullets: ['Repro steps', 'Expected behavior', 'Screenshots when useful']
                        },
                        {
                            title: 'Improve docs and translations',
                            text: 'The project should stay understandable across product, roadmap, and legal pages.',
                            bullets: ['Website copy', 'Translations', 'Documentation clarity']
                        },
                        {
                            title: 'Contribute code',
                            text: 'Open source work is welcome when it supports the product principles and current roadmap.',
                            bullets: ['Review the roadmap first', 'Keep changes focused', 'Preserve product simplicity']
                        }
                    ]
                },
                principles: {
                    title: 'What Balance protects',
                    items: [
                        {
                            title: 'Manual by design',
                            text: 'Manual input is part of the product philosophy, not a missing feature.'
                        },
                        {
                            title: 'Clarity over automation',
                            text: 'Anything added should make the product easier to understand, not harder.'
                        },
                        {
                            title: 'Privacy stays central',
                            text: 'Contributions should respect the local-first, no-bank-sync model.'
                        }
                    ]
                },
                cta: {
                    title: 'Start with the roadmap. Then open the repo.',
                    copy: 'That keeps contributions aligned with the product direction.'
                }
            },
            contact: {
                hero: {
                    eyebrow: 'Contact',
                    title: 'Get in touch.',
                    copy: 'Questions, feedback, and product ideas all start here. GitHub is the fastest path for roadmap feedback and bug reports.'
                },
                cards: [
                    {
                        kicker: 'Roadmap feedback',
                        title: 'Suggest what should improve next',
                        text: 'Use GitHub issues to share ideas, missing features, or product direction feedback.',
                        cta: 'Open GitHub issues'
                    },
                    {
                        kicker: 'Bug reports',
                        title: 'Report something broken clearly',
                        text: 'The best reports include context, reproduction steps, and what you expected to happen.',
                        cta: 'Report a bug'
                    },
                    {
                        kicker: 'General contact',
                        title: 'Reach out directly',
                        text: 'For broader questions or partnership inquiries, use the email contact for the project.',
                        cta: 'Email Balance'
                    }
                ],
                note: 'If you are reporting a product issue, GitHub usually gives the clearest and fastest path.'
            },
            privacy: {
                hero: {
                    eyebrow: 'Privacy Policy',
                    title: 'Private by design.',
                    copy: 'Balance is built around local control. This page explains the principles behind that approach.'
                },
                sections: [
                    {
                        title: '1. Local-first storage',
                        body: [
                            'Balance is designed so your financial data stays on your device.',
                            'The product does not rely on a central server to store your wallets, balances, or snapshots.'
                        ]
                    },
                    {
                        title: '2. No bank sync',
                        body: [
                            'Balance does not connect to your bank or brokerage account.',
                            'That means your credentials are not routed through third-party sync providers.'
                        ]
                    },
                    {
                        title: '3. No hidden data pipeline',
                        body: [
                            'The website may use standard hosting infrastructure, but the product philosophy remains the same: no hidden financial data flow.',
                            'If third-party services are ever used for website forms or app distribution, they are separate from the product’s wallet and snapshot model.'
                        ]
                    },
                    {
                        title: '4. Open source visibility',
                        body: [
                            'Balance is developed openly so the product direction and implementation remain reviewable.',
                            'Open development helps keep privacy claims grounded in what the product actually does.'
                        ]
                    },
                    {
                        title: '5. Contact',
                        body: [
                            'For privacy questions, contact the project using the contact page or the published support channels.',
                            'If you use a dedicated project email, update the contact route to reflect it.'
                        ]
                    }
                ]
            },
            terms: {
                hero: {
                    eyebrow: 'Terms',
                    title: 'Terms for using Balance.',
                    copy: 'These terms describe the basic conditions around access, subscriptions, and general use of the product and website.'
                },
                sections: [
                    {
                        title: '1. Product scope',
                        body: [
                            'Balance is a finance product for manual tracking of wallets, balances, and snapshots.',
                            'It is not financial advice, brokerage software, or a bank-connected automation service.'
                        ]
                    },
                    {
                        title: '2. Your responsibility',
                        body: [
                            'You are responsible for the data you enter and for checking that your records are accurate.',
                            'Manual updates are part of the product model and remain under your control.'
                        ]
                    },
                    {
                        title: '3. Free and Pro access',
                        body: [
                            'Balance may offer both free access and paid Pro features.',
                            'If you subscribe to Pro, billing and renewal follow the terms shown in the app or on the relevant purchase flow.'
                        ]
                    },
                    {
                        title: '4. Availability',
                        body: [
                            'The product and website may evolve over time and specific features may change.',
                            'Nothing here guarantees uninterrupted availability across every device or platform.'
                        ]
                    },
                    {
                        title: '5. Open project',
                        body: [
                            'Open source visibility does not remove the need to use the product responsibly.',
                            'Project contributions and roadmap feedback do not automatically create support obligations or guaranteed delivery timelines.'
                        ]
                    },
                    {
                        title: '6. Contact',
                        body: [
                            'For questions about these terms, use the contact page or the project support channels.',
                            'Update the contact details in the site if you use a dedicated legal or support email.'
                        ]
                    }
                ]
            }
        },
        it: {
            meta: {
                home: {
                    title: 'Balance — Prendi il controllo delle tue finanze',
                    description: 'Balance è il sito ufficiale, privato e offline-first, per tracciare soldi, investimenti e patrimonio con chiarezza.'
                },
                roadmap: {
                    title: 'Roadmap di Balance',
                    description: 'Segui la roadmap di Balance e scopri cosa arriverà nelle prossime iterazioni.'
                },
                contribute: {
                    title: 'Contribuisci a Balance',
                    description: 'Partecipa all’evoluzione di Balance con feedback, issue, documentazione, traduzioni e contributi al codice.'
                },
                contact: {
                    title: 'Contatti Balance',
                    description: 'Canali di contatto Balance per domande, feedback, idee di roadmap e segnalazioni.'
                },
                privacy: {
                    title: 'Privacy Policy · Balance',
                    description: 'Leggi i principi di privacy di Balance: dati locali, niente bank sync, nessuna dipendenza inutile.'
                },
                terms: {
                    title: 'Termini · Balance',
                    description: 'Consulta i termini di utilizzo di Balance, inclusi abbonamenti, disponibilità e responsabilità.'
                }
            },
            common: {
                brand: 'Balance',
                nav: {
                    overview: 'Panoramica',
                    features: 'Funzionalità',
                    roadmap: 'Roadmap',
                    contribute: 'Contribuisci',
                    download: 'Download'
                },
                footer: {
                    privacy: 'Privacy Policy',
                    terms: 'Termini',
                    contact: 'Contatti',
                    github: 'GitHub',
                    language: 'Lingua',
                    copyright: '© Balance. Tutti i diritti riservati.'
                },
                cta: {
                    appStoreHtml: '<i class="fa-brands fa-apple"></i> Scarica su App Store',
                    roadmap: 'Vedi roadmap',
                    github: 'Contribuisci su GitHub'
                }
            },
            home: {
                hero: {
                    eyebrow: 'Private · Offline · Open source',
                    brand: 'Balance',
                    title: 'Prendi il controllo delle tue finanze.',
                    subtitle: 'Privato. Offline. Completamente tuo.',
                    support: 'Monitora soldi, investimenti e patrimonio con chiarezza. Nessun collegamento bancario. Nessuna sync. Nessun rumore.'
                },
                trust: [
                    { title: 'Privacy by design', text: 'Locale, manuale e progettato per restare leggibile.' },
                    { title: 'Funziona offline', text: 'Il tuo flusso non dipende da servizi esterni.' },
                    { title: 'Nessun bank sync', text: 'Decidi tu cosa inserire e quando aggiornarlo.' },
                    { title: 'I dati restano sul dispositivo', text: 'Nessun passaggio nascosto tra te e le tue finanze.' }
                ],
                core: {
                    title: 'Il controllo cambia tutto.',
                    p1: 'La maggior parte delle app finance prova ad automatizzare il tuo denaro. Balance ti restituisce il controllo.',
                    p2: 'Decidi tu cosa tracciare. Decidi tu quando aggiornare. Capisci tutto subito.',
                    p3: 'Nessuna scatola nera. Nessuna logica nascosta.'
                },
                value: {
                    title: 'Tutto quello che ti serve. Niente di più.',
                    support: 'Input semplici. Output chiari.',
                    items: [
                        { title: 'Tutti i wallet in un unico posto', text: 'Liquidità, investimenti, risparmi e tutto ciò che vuoi tenere visibile.' },
                        { title: 'Una vista unica del patrimonio', text: 'Controlli il quadro generale senza perdere i dettagli.' },
                        { title: 'Snapshot mensili', text: 'Salvi lo stato delle cose e costruisci uno storico chiaro nel tempo.' },
                        { title: 'Progressi leggibili davvero', text: 'Meno rumore, più contesto, una routine più calma.' }
                    ]
                },
                screenshots: {
                    title: 'Vedi le tue finanze con chiarezza.',
                    cards: [
                        { title: 'Una panoramica calma', text: 'Un’interfaccia pensata per rendere immediati saldi, categorie e priorità.' },
                        { title: 'Trend nel tempo', text: 'Gli snapshot servono a vedere la direzione, non solo l’ultimo numero.' },
                        { title: 'Wallet organizzati', text: 'Conti e asset separati senza perdere la visione d’insieme.' },
                        { title: 'Snapshot che contano', text: 'Un ritmo manuale che resta utile proprio perché resta semplice.' }
                    ]
                },
                philosophy: {
                    title: 'Niente sync. Per scelta.',
                    p1: 'Balance non si collega alla tua banca.',
                    p2: 'Non è un limite. È una decisione.',
                    bullets: [
                        'I dati restano sul tuo dispositivo',
                        'Nessuna dipendenza esterna',
                        'Nessuna connessione che si rompe',
                        'Nessuna sorpresa'
                    ],
                    closing: 'Hai sempre il controllo.'
                },
                how: {
                    title: 'Semplice by design.',
                    closing: 'Richiede pochi secondi. Ti dà chiarezza nel tempo.',
                    steps: [
                        { title: 'Aggiungi i tuoi wallet', text: 'Costruisci una struttura che rispecchia il modo in cui organizzi davvero i tuoi soldi.' },
                        { title: 'Inserisci i saldi', text: 'Aggiorni manualmente, velocemente e solo quando ha senso.' },
                        { title: 'Salva snapshot mensili', text: 'Conservi uno storico pulito di dove si trova tutto.' },
                        { title: 'Segui la crescita nel tempo', text: 'Vedi cosa è cambiato, cosa è migliorato e dove concentrarti.' }
                    ]
                },
                open: {
                    title: 'Costruito in pubblico.',
                    copy: 'Balance evolve passo dopo passo. Segui la roadmap. Proponi funzionalità. Contribuisci al progetto.',
                    cards: [
                        { kicker: 'Roadmap', title: 'Priorità trasparenti', text: 'Scopri cosa stiamo rifinendo ora, cosa arriva dopo e cosa resta intenzionalmente più avanti.' },
                        { kicker: 'Feedback', title: 'Le idee orientano il prodotto', text: 'Feature request e feedback fanno parte del modo in cui Balance cresce.' },
                        { kicker: 'Codice', title: 'Open source davvero', text: 'Puoi leggere il codice, proporre cambiamenti o migliorare il prodotto nel tempo.' }
                    ]
                },
                plans: {
                    title: 'Parti semplice. Passa a Pro quando vuoi.',
                    intro: 'La versione gratis resta essenziale. Pro aggiunge più profondità dove serve.',
                    toggle: {
                        aria: 'Scegli la fatturazione di Balance Pro',
                        annual: 'Annuale',
                        monthly: 'Mensile'
                    },
                    free: {
                        badge: 'Per iniziare',
                        title: 'Balance gratis',
                        description: 'Tutto quello che ti serve per partire.',
                        priceLabel: 'Gratis',
                        list: ['Fino a 3 wallet', 'Snapshot essenziali', 'Storico completo'],
                        cta: 'Scarica gratis'
                    },
                    pro: {
                        badgeAnnual: 'Offerta lancio',
                        badgeMonthly: 'Annulla quando vuoi',
                        pillAnnual: 'Miglior valore',
                        pillMonthly: 'Piano mensile',
                        title: 'Balance Pro',
                        description: 'Funzionalità avanzate per un controllo più profondo.',
                        annualCaption: 'Offerta annuale di lancio',
                        annualPriceHtml: '19,99 €<span class="price-suffix">l\'anno</span>',
                        annualChip: 'Risparmi 15,89 €',
                        annualAlt: 'Equivale a 1,67 € al mese invece di 35,88 € l’anno',
                        annualNote: 'Primo mese di prova gratuito.',
                        monthlyCaption: 'Piano mensile',
                        monthlyPriceHtml: '2,99 €<span class="price-suffix">al mese</span>',
                        monthlyChip: 'Mensile',
                        monthlyAlt: 'Rinnovo mensile a 2,99 €',
                        monthlyNote: 'Primo mese di prova gratuito.',
                        list: ['Wallet illimitati', 'Snapshot avanzati', 'Storico completo per confronti più profondi'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Scarica e attiva Pro',
                        microcopy: 'Al termine della prova gratuita, salvo annullamento, il rinnovo segue il piano selezionato.'
                    }
                },
                faq: {
                    title: 'Domande frequenti',
                    items: [
                        {
                            q: 'Balance è privata?',
                            a: 'Sì. Balance è progettata intorno a dati locali, aggiornamenti manuali e nessun flusso nascosto.'
                        },
                        {
                            q: 'Si collega a banche o broker?',
                            a: 'No. Balance non si sincronizza con banche o broker. Decidi tu cosa tracciare.'
                        },
                        {
                            q: 'Cosa posso monitorare?',
                            a: 'Wallet, liquidità, investimenti e patrimonio totale nel tempo.'
                        },
                        {
                            q: 'Qual è la differenza tra Gratis e Pro?',
                            a: 'Gratis copre l’essenziale. Pro rimuove i limiti e aggiunge più profondità per il tracking nel lungo periodo.'
                        },
                        {
                            q: 'Android è disponibile?',
                            a: 'iOS è disponibile ora. Android è in roadmap.'
                        }
                    ]
                },
                final: {
                    title: 'Prendi il controllo oggi.',
                    copy: 'Le tue finanze. Le tue decisioni.'
                }
            },
            roadmap: {
                hero: {
                    eyebrow: 'Roadmap',
                    title: 'Dove sta andando Balance.',
                    copy: 'Balance evolve in pubblico, con priorità deliberate e una direzione prodotto costruita intorno al controllo.'
                },
                columns: {
                    now: {
                        kicker: 'Ora',
                        title: 'Cosa stiamo rifinendo',
                        text: 'Il focus resta su chiarezza prodotto, affidabilità e uso quotidiano più veloce.',
                        items: [
                            'Pulizia della dashboard e del flusso wallet',
                            'Routine di snapshot mensili più chiare',
                            'Esperienza mobile più precisa e leggibile',
                            'Core product calmo e prevedibile'
                        ]
                    },
                    next: {
                        kicker: 'Prossimo',
                        title: 'Cosa arriva dopo',
                        text: 'Il prossimo livello aggiunge profondità senza trasformare il prodotto in uno strumento rumoroso.',
                        items: [
                            'Grafici e confronti più ricchi',
                            'Struttura wallet più flessibile',
                            'Export per i tuoi archivi personali',
                            'Revisioni migliori del percorso nel tempo'
                        ]
                    },
                    later: {
                        kicker: 'Più avanti',
                        title: 'Cosa resta intenzionale',
                        text: 'Il lavoro futuro verrà sempre valutato contro gli stessi principi di prodotto.',
                        items: [
                            'Backup cloud opzionale senza perdere il controllo locale',
                            'Più personalizzazione di viste e categorie',
                            'Copertura piattaforma più ampia',
                            'Miglioramenti guidati dalla community'
                        ]
                    }
                },
                principles: {
                    title: 'Come decidiamo le priorità',
                    items: [
                        {
                            title: 'Controllo prima di tutto',
                            text: 'Una feature passa solo se mantiene il prodotto comprensibile e sotto il controllo dell’utente.'
                        },
                        {
                            title: 'Privacy di default',
                            text: 'Il modello offline resta centrale. La comodità non deve ridurre la chiarezza.'
                        },
                        {
                            title: 'Passi piccoli ma solidi',
                            text: 'Balance cresce per iterazioni focalizzate, non per accumulo di feature.'
                        }
                    ]
                },
                cta: {
                    title: 'Vuoi influenzare quello che arriva dopo?',
                    copy: 'Segui la roadmap, proponi miglioramenti o contribuisci direttamente su GitHub.'
                }
            },
            contribute: {
                hero: {
                    eyebrow: 'Contribuisci',
                    title: 'Aiuta a far crescere Balance.',
                    copy: 'Balance è costruita in pubblico. Idee, issue, documentazione, traduzioni e codice spostano davvero il prodotto in avanti.'
                },
                ways: {
                    title: 'Dove contribuire',
                    items: [
                        {
                            title: 'Proponi miglioramenti di prodotto',
                            text: 'Apri issue per idee di workflow, dettagli mancanti o feedback sulla direzione prodotto.',
                            bullets: ['Nuove funzionalità', 'Feedback sul copy', 'Osservazioni UX']
                        },
                        {
                            title: 'Segnala bug con chiarezza',
                            text: 'Le issue ben scritte proteggono l’esperienza calma e affidabile che Balance cerca di offrire.',
                            bullets: ['Passi per riprodurre', 'Comportamento atteso', 'Screenshot quando utili']
                        },
                        {
                            title: 'Migliora documentazione e traduzioni',
                            text: 'Il progetto deve restare comprensibile tra prodotto, roadmap e pagine informative.',
                            bullets: ['Copy del sito', 'Traduzioni', 'Documentazione più chiara']
                        },
                        {
                            title: 'Contribuisci al codice',
                            text: 'I contributi open source sono benvenuti quando rispettano i principi di prodotto e la roadmap corrente.',
                            bullets: ['Parti dalla roadmap', 'Mantieni le PR focalizzate', 'Preserva la semplicità']
                        }
                    ]
                },
                principles: {
                    title: 'Cosa Balance protegge',
                    items: [
                        {
                            title: 'Manuale per scelta',
                            text: 'L’inserimento manuale fa parte della filosofia prodotto, non è una mancanza.'
                        },
                        {
                            title: 'Chiarezza sopra l’automazione',
                            text: 'Ogni aggiunta deve rendere il prodotto più comprensibile, non più opaco.'
                        },
                        {
                            title: 'La privacy resta centrale',
                            text: 'Ogni contributo deve rispettare il modello local-first e senza bank sync.'
                        }
                    ]
                },
                cta: {
                    title: 'Parti dalla roadmap. Poi apri il repo.',
                    copy: 'Così i contributi restano allineati con la direzione del prodotto.'
                }
            },
            contact: {
                hero: {
                    eyebrow: 'Contatti',
                    title: 'Parliamone.',
                    copy: 'Domande, feedback e idee prodotto partono tutte da qui. Per roadmap e bug, GitHub resta il canale più veloce.'
                },
                cards: [
                    {
                        kicker: 'Feedback roadmap',
                        title: 'Suggerisci cosa migliorare dopo',
                        text: 'Usa GitHub issues per proporre idee, funzionalità mancanti o feedback sulla direzione prodotto.',
                        cta: 'Apri GitHub issues'
                    },
                    {
                        kicker: 'Bug report',
                        title: 'Segnala cosa non funziona',
                        text: 'Le segnalazioni migliori includono contesto, passi per riprodurre e comportamento atteso.',
                        cta: 'Segnala un bug'
                    },
                    {
                        kicker: 'Contatto diretto',
                        title: 'Scrivi al progetto',
                        text: 'Per domande più ampie o contatti generali puoi usare l’email del progetto.',
                        cta: 'Scrivi a Balance'
                    }
                ],
                note: 'Se stai segnalando un problema prodotto, GitHub di solito resta il canale più chiaro e veloce.'
            },
            privacy: {
                hero: {
                    eyebrow: 'Privacy Policy',
                    title: 'Privata by design.',
                    copy: 'Balance è costruita intorno al controllo locale. Questa pagina spiega i principi dietro questa scelta.'
                },
                sections: [
                    {
                        title: '1. Archiviazione locale',
                        body: [
                            'Balance è progettata perché i dati finanziari restino sul dispositivo.',
                            'Il prodotto non dipende da un server centrale per memorizzare wallet, saldi o snapshot.'
                        ]
                    },
                    {
                        title: '2. Nessun bank sync',
                        body: [
                            'Balance non si collega a banche o broker.',
                            'Questo significa che le tue credenziali non passano da provider esterni di sincronizzazione.'
                        ]
                    },
                    {
                        title: '3. Nessun flusso dati nascosto',
                        body: [
                            'Il sito può usare l’infrastruttura standard di hosting, ma la filosofia prodotto resta invariata: nessun flusso nascosto di dati finanziari.',
                            'Se in futuro usi servizi terzi per form o distribuzione dell’app, restano separati dal modello wallet e snapshot.'
                        ]
                    },
                    {
                        title: '4. Open source e verificabilità',
                        body: [
                            'Balance viene sviluppata in pubblico così che direzione prodotto e implementazione restino verificabili.',
                            'Lo sviluppo aperto aiuta a tenere le promesse privacy coerenti con ciò che il prodotto fa davvero.'
                        ]
                    },
                    {
                        title: '5. Contatti',
                        body: [
                            'Per domande sulla privacy, usa la pagina contatti o i canali di supporto pubblicati dal progetto.',
                            'Se usi un’email dedicata, aggiorna la route contatti in modo coerente.'
                        ]
                    }
                ]
            },
            terms: {
                hero: {
                    eyebrow: 'Termini',
                    title: 'Termini per usare Balance.',
                    copy: 'Questi termini descrivono le condizioni generali di accesso, abbonamento e uso del prodotto e del sito.'
                },
                sections: [
                    {
                        title: '1. Ambito del prodotto',
                        body: [
                            'Balance è un prodotto finance per il tracciamento manuale di wallet, saldi e snapshot.',
                            'Non è consulenza finanziaria, software di brokeraggio o un servizio di automazione bancaria.'
                        ]
                    },
                    {
                        title: '2. Responsabilità dell’utente',
                        body: [
                            'Sei responsabile dei dati inseriti e della loro accuratezza.',
                            'Gli aggiornamenti manuali fanno parte del modello prodotto e restano sotto il tuo controllo.'
                        ]
                    },
                    {
                        title: '3. Accesso Free e Pro',
                        body: [
                            'Balance può offrire una versione gratuita e funzionalità Pro a pagamento.',
                            'Se sottoscrivi Pro, fatturazione e rinnovo seguono quanto mostrato nel flusso di acquisto rilevante.'
                        ]
                    },
                    {
                        title: '4. Disponibilità',
                        body: [
                            'Prodotto e sito possono evolvere nel tempo e alcune funzionalità possono cambiare.',
                            'Nulla in questa pagina garantisce disponibilità continua su ogni dispositivo o piattaforma.'
                        ]
                    },
                    {
                        title: '5. Progetto aperto',
                        body: [
                            'L’open source non elimina la necessità di usare il prodotto in modo responsabile.',
                            'Contributi e feedback sulla roadmap non creano automaticamente obblighi di supporto o consegna.'
                        ]
                    },
                    {
                        title: '6. Contatti',
                        body: [
                            'Per domande su questi termini, usa la pagina contatti o i canali di supporto del progetto.',
                            'Aggiorna i dettagli di contatto del sito se utilizzi un’email legale o support dedicata.'
                        ]
                    }
                ]
            }
        },
        pt: {
            meta: {
                home: {
                    title: 'Balance — Assuma o controlo das suas finanças',
                    description: 'Balance é o site oficial, privado e offline-first, para acompanhar dinheiro, investimentos e património com clareza.'
                },
                roadmap: {
                    title: 'Roadmap do Balance',
                    description: 'Acompanhe o roadmap do Balance e veja o que está planeado para as próximas iterações.'
                },
                contribute: {
                    title: 'Contribuir para o Balance',
                    description: 'Participe na evolução do Balance com feedback, issues, documentação, traduções e código.'
                },
                contact: {
                    title: 'Contacto Balance',
                    description: 'Canais de contacto do Balance para perguntas, feedback, ideias de roadmap e bugs.'
                },
                privacy: {
                    title: 'Privacidade · Balance',
                    description: 'Leia os princípios de privacidade do Balance: dados locais, sem bank sync e sem dependências desnecessárias.'
                },
                terms: {
                    title: 'Termos · Balance',
                    description: 'Consulte os termos de utilização do Balance, incluindo subscrições, disponibilidade e responsabilidades.'
                }
            },
            common: {
                brand: 'Balance',
                nav: {
                    overview: 'Visão geral',
                    features: 'Funcionalidades',
                    roadmap: 'Roadmap',
                    contribute: 'Contribuir',
                    download: 'Download'
                },
                footer: {
                    privacy: 'Política de Privacidade',
                    terms: 'Termos',
                    contact: 'Contacto',
                    github: 'GitHub',
                    language: 'Idioma',
                    copyright: '© Balance. Todos os direitos reservados.'
                },
                cta: {
                    appStoreHtml: '<i class="fa-brands fa-apple"></i> Descarregar na App Store',
                    roadmap: 'Ver roadmap',
                    github: 'Contribuir no GitHub'
                }
            },
            home: {
                hero: {
                    eyebrow: 'Private · Offline · Open source',
                    brand: 'Balance',
                    title: 'Assuma o controlo das suas finanças.',
                    subtitle: 'Privado. Offline. Totalmente seu.',
                    support: 'Acompanhe dinheiro, investimentos e património com clareza. Sem ligações bancárias. Sem sync. Sem ruído.'
                },
                trust: [
                    { title: 'Privacidade by design', text: 'Local, manual e pensado para se manter legível.' },
                    { title: 'Funciona offline', text: 'O seu fluxo não depende de serviços externos.' },
                    { title: 'Sem bank sync', text: 'Decide o que entra e quando deve ser atualizado.' },
                    { title: 'Os dados ficam no seu dispositivo', text: 'Sem qualquer camada escondida entre si e as suas finanças.' }
                ],
                core: {
                    title: 'O controlo muda tudo.',
                    p1: 'A maioria das apps financeiras tenta automatizar o seu dinheiro. O Balance devolve-lhe o controlo.',
                    p2: 'Decide o que acompanhar. Decide quando atualizar. Percebe tudo com clareza.',
                    p3: 'Sem caixas negras. Sem lógica escondida.'
                },
                value: {
                    title: 'Tudo o que precisa. Nada do que não precisa.',
                    support: 'Inputs simples. Outputs claros.',
                    items: [
                        { title: 'Todos os wallets num só lugar', text: 'Liquidez, investimentos, poupanças e tudo o que quer manter visível.' },
                        { title: 'Uma vista única do património', text: 'Vê o quadro geral sem perder os detalhes.' },
                        { title: 'Snapshots mensais', text: 'Guarda o estado do momento e constrói um histórico claro ao longo do tempo.' },
                        { title: 'Progresso realmente legível', text: 'Menos ruído, mais contexto e uma rotina mais calma.' }
                    ]
                },
                screenshots: {
                    title: 'Veja as suas finanças com clareza.',
                    cards: [
                        { title: 'Uma visão calma', text: 'Uma interface pensada para tornar saldos, categorias e prioridades imediatos.' },
                        { title: 'Tendências ao longo do tempo', text: 'Os snapshots servem para ver direção, não apenas o último número.' },
                        { title: 'Wallets organizadas', text: 'Contas e ativos separados sem perder a visão do todo.' },
                        { title: 'Snapshots que importam', text: 'Um ritmo manual que continua útil porque continua simples.' }
                    ]
                },
                philosophy: {
                    title: 'Sem sync. Por escolha.',
                    p1: 'O Balance não se liga ao seu banco.',
                    p2: 'Isso não é uma limitação. É uma decisão.',
                    bullets: [
                        'Os dados ficam no seu dispositivo',
                        'Sem dependências externas',
                        'Sem ligações quebradas',
                        'Sem surpresas'
                    ],
                    closing: 'Tem sempre o controlo.'
                },
                how: {
                    title: 'Simples by design.',
                    closing: 'Demora segundos. Dá-lhe clareza ao longo do tempo.',
                    steps: [
                        { title: 'Adicione os seus wallets', text: 'Crie uma estrutura que reflita a forma como organiza realmente o seu dinheiro.' },
                        { title: 'Introduza os saldos', text: 'Atualiza manualmente, rapidamente e apenas quando faz sentido.' },
                        { title: 'Guarde snapshots mensais', text: 'Mantém um registo limpo de onde tudo está.' },
                        { title: 'Acompanhe o crescimento no tempo', text: 'Veja o que mudou, o que melhorou e onde vale a pena focar.' }
                    ]
                },
                open: {
                    title: 'Construído em aberto.',
                    copy: 'O Balance evolui passo a passo. Siga o roadmap. Sugira funcionalidades. Contribua para o projeto.',
                    cards: [
                        { kicker: 'Roadmap', title: 'Prioridades transparentes', text: 'Veja o que está a ser afinado agora, o que vem a seguir e o que fica claramente mais à frente.' },
                        { kicker: 'Feedback', title: 'As ideias moldam o produto', text: 'Feature requests e feedback fazem parte da forma como o Balance cresce.' },
                        { kicker: 'Código', title: 'Open source por defeito', text: 'Pode rever o código, propor alterações ou ajudar o produto a melhorar com o tempo.' }
                    ]
                },
                plans: {
                    title: 'Comece simples. Faça upgrade quando quiser.',
                    intro: 'A versão grátis mantém-se focada. Pro adiciona profundidade quando precisa.',
                    toggle: {
                        aria: 'Escolha a faturação do Balance Pro',
                        annual: 'Anual',
                        monthly: 'Mensal'
                    },
                    free: {
                        badge: 'Para começar',
                        title: 'Balance grátis',
                        description: 'Tudo o que precisa para começar.',
                        priceLabel: 'Grátis',
                        list: ['Até 3 wallets', 'Snapshots essenciais', 'Histórico completo'],
                        cta: 'Download grátis'
                    },
                    pro: {
                        badgeAnnual: 'Oferta de lançamento',
                        badgeMonthly: 'Cancela quando quiser',
                        pillAnnual: 'Melhor valor',
                        pillMonthly: 'Plano mensal',
                        title: 'Balance Pro',
                        description: 'Funcionalidades avançadas para um controlo mais profundo.',
                        annualCaption: 'Oferta anual de lançamento',
                        annualPriceHtml: '19,99 €<span class="price-suffix">por ano</span>',
                        annualChip: 'Poupa 15,89 €',
                        annualAlt: 'Equivale a 1,67 € por mês em vez de 35,88 € por ano',
                        annualNote: 'Primeiro mês de teste gratuito.',
                        monthlyCaption: 'Plano mensal',
                        monthlyPriceHtml: '2,99 €<span class="price-suffix">por mês</span>',
                        monthlyChip: 'Mensal',
                        monthlyAlt: 'Renovação mensal a 2,99 €',
                        monthlyNote: 'Primeiro mês de teste gratuito.',
                        list: ['Wallets ilimitadas', 'Snapshots avançados', 'Histórico completo para comparações mais profundas'],
                        ctaHtml: '<i class="fa-brands fa-apple"></i> Descarregar e ativar Pro',
                        microcopy: 'No fim do teste gratuito, salvo cancelamento, a renovação segue o plano selecionado.'
                    }
                },
                faq: {
                    title: 'Perguntas frequentes',
                    items: [
                        {
                            q: 'O Balance é privado?',
                            a: 'Sim. O Balance foi desenhado com dados locais, atualizações manuais e nenhum fluxo escondido.'
                        },
                        {
                            q: 'Liga-se a bancos ou brokers?',
                            a: 'Não. O Balance não sincroniza com bancos nem brokers. Decide sempre o que acompanhar.'
                        },
                        {
                            q: 'O que posso acompanhar?',
                            a: 'Wallets, liquidez, investimentos e património total ao longo do tempo.'
                        },
                        {
                            q: 'Qual é a diferença entre Grátis e Pro?',
                            a: 'Grátis cobre o essencial. Pro remove limites e adiciona mais profundidade para tracking no longo prazo.'
                        },
                        {
                            q: 'Android está disponível?',
                            a: 'iOS já está disponível. Android está no roadmap.'
                        }
                    ]
                },
                final: {
                    title: 'Assuma o controlo hoje.',
                    copy: 'As suas finanças. As suas decisões.'
                }
            },
            roadmap: {
                hero: {
                    eyebrow: 'Roadmap',
                    title: 'Para onde o Balance está a ir.',
                    copy: 'O Balance evolui em aberto, com prioridades deliberadas e uma direção de produto construída em torno do controlo.'
                },
                columns: {
                    now: {
                        kicker: 'Agora',
                        title: 'O que estamos a afinar',
                        text: 'O foco continua na clareza do produto, fiabilidade e uso diário mais rápido.',
                        items: [
                            'Polir dashboard e fluxo de wallets',
                            'Rotinas de snapshots mensais mais claras',
                            'Experiência mobile mais precisa e legível',
                            'Core product calmo e previsível'
                        ]
                    },
                    next: {
                        kicker: 'A seguir',
                        title: 'O que vem depois',
                        text: 'A próxima camada acrescenta profundidade sem transformar o produto numa ferramenta ruidosa.',
                        items: [
                            'Gráficos e comparações mais ricas',
                            'Estrutura de wallets mais flexível',
                            'Export para os seus próprios registos',
                            'Revisões melhores da evolução no tempo'
                        ]
                    },
                    later: {
                        kicker: 'Mais tarde',
                        title: 'O que fica intencional',
                        text: 'O trabalho futuro será sempre avaliado pelos mesmos princípios de produto.',
                        items: [
                            'Backup cloud opcional sem perder o controlo local',
                            'Mais personalização de vistas e categorias',
                            'Cobertura de plataforma mais ampla',
                            'Melhorias guiadas pela comunidade'
                        ]
                    }
                },
                principles: {
                    title: 'Como decidimos prioridades',
                    items: [
                        {
                            title: 'Controlo primeiro',
                            text: 'Uma funcionalidade só avança se mantiver o produto compreensível e sob controlo do utilizador.'
                        },
                        {
                            title: 'Privacidade por defeito',
                            text: 'O modelo offline continua central. Conveniência não pode reduzir clareza.'
                        },
                        {
                            title: 'Passos pequenos mas sólidos',
                            text: 'O Balance cresce por iterações focadas, não por acumulação de funcionalidades.'
                        }
                    ]
                },
                cta: {
                    title: 'Quer influenciar o que vem a seguir?',
                    copy: 'Siga o roadmap, proponha melhorias ou contribua diretamente no GitHub.'
                }
            },
            contribute: {
                hero: {
                    eyebrow: 'Contribuir',
                    title: 'Ajude a moldar o Balance.',
                    copy: 'O Balance é construído em aberto. Ideias, issues, documentação, traduções e código movem realmente o produto.'
                },
                ways: {
                    title: 'Onde contribuir',
                    items: [
                        {
                            title: 'Sugira melhorias de produto',
                            text: 'Abra issues para ideias de workflow, detalhes em falta ou feedback sobre a direção do produto.',
                            bullets: ['Novas funcionalidades', 'Feedback de copy', 'Observações de UX']
                        },
                        {
                            title: 'Reporte bugs com clareza',
                            text: 'Issues bem descritas ajudam a proteger a experiência calma e fiável que o Balance procura oferecer.',
                            bullets: ['Passos para reproduzir', 'Comportamento esperado', 'Screenshots quando úteis']
                        },
                        {
                            title: 'Melhore docs e traduções',
                            text: 'O projeto deve continuar compreensível entre produto, roadmap e páginas informativas.',
                            bullets: ['Copy do site', 'Traduções', 'Documentação mais clara']
                        },
                        {
                            title: 'Contribua com código',
                            text: 'Contribuições open source são bem-vindas quando respeitam os princípios do produto e a roadmap atual.',
                            bullets: ['Comece pela roadmap', 'Mantenha as PRs focadas', 'Preserve a simplicidade']
                        }
                    ]
                },
                principles: {
                    title: 'O que o Balance protege',
                    items: [
                        {
                            title: 'Manual por decisão',
                            text: 'A introdução manual faz parte da filosofia do produto, não é uma ausência.'
                        },
                        {
                            title: 'Clareza acima da automação',
                            text: 'Cada adição deve tornar o produto mais compreensível, nunca mais opaco.'
                        },
                        {
                            title: 'A privacidade continua central',
                            text: 'Cada contribuição deve respeitar o modelo local-first e sem bank sync.'
                        }
                    ]
                },
                cta: {
                    title: 'Comece pela roadmap. Depois abra o repositório.',
                    copy: 'Assim as contribuições mantêm-se alinhadas com a direção do produto.'
                }
            },
            contact: {
                hero: {
                    eyebrow: 'Contacto',
                    title: 'Entre em contacto.',
                    copy: 'Perguntas, feedback e ideias de produto começam aqui. Para roadmap e bugs, o GitHub continua a ser o canal mais rápido.'
                },
                cards: [
                    {
                        kicker: 'Feedback de roadmap',
                        title: 'Sugira o que deve melhorar a seguir',
                        text: 'Use GitHub issues para partilhar ideias, funcionalidades em falta ou feedback sobre a direção do produto.',
                        cta: 'Abrir GitHub issues'
                    },
                    {
                        kicker: 'Bug reports',
                        title: 'Reporte o que não está a funcionar',
                        text: 'Os melhores reports incluem contexto, passos para reproduzir e comportamento esperado.',
                        cta: 'Reportar um bug'
                    },
                    {
                        kicker: 'Contacto direto',
                        title: 'Escreva ao projeto',
                        text: 'Para perguntas mais amplas ou contacto geral, pode usar o email do projeto.',
                        cta: 'Escrever ao Balance'
                    }
                ],
                note: 'Se está a reportar um problema de produto, o GitHub continua normalmente a ser o canal mais claro e rápido.'
            },
            privacy: {
                hero: {
                    eyebrow: 'Política de Privacidade',
                    title: 'Privado by design.',
                    copy: 'O Balance foi construído em torno do controlo local. Esta página explica os princípios por trás dessa escolha.'
                },
                sections: [
                    {
                        title: '1. Armazenamento local',
                        body: [
                            'O Balance foi desenhado para que os dados financeiros permaneçam no dispositivo.',
                            'O produto não depende de um servidor central para guardar wallets, saldos ou snapshots.'
                        ]
                    },
                    {
                        title: '2. Sem bank sync',
                        body: [
                            'O Balance não se liga a bancos nem brokers.',
                            'Isso significa que as suas credenciais não passam por fornecedores externos de sincronização.'
                        ]
                    },
                    {
                        title: '3. Sem pipeline de dados escondido',
                        body: [
                            'O site pode usar infraestrutura normal de hosting, mas a filosofia do produto mantém-se: sem fluxo escondido de dados financeiros.',
                            'Se no futuro usar serviços terceiros para formulários ou distribuição da app, esses serviços continuam separados do modelo de wallets e snapshots.'
                        ]
                    },
                    {
                        title: '4. Open source e verificabilidade',
                        body: [
                            'O Balance é desenvolvido em aberto para que direção de produto e implementação possam ser verificadas.',
                            'O desenvolvimento aberto ajuda a manter as promessas de privacidade alinhadas com o que o produto faz realmente.'
                        ]
                    },
                    {
                        title: '5. Contacto',
                        body: [
                            'Para questões de privacidade, use a página de contacto ou os canais de suporte publicados pelo projeto.',
                            'Se utilizar um email dedicado, atualize a rota de contacto de forma coerente.'
                        ]
                    }
                ]
            },
            terms: {
                hero: {
                    eyebrow: 'Termos',
                    title: 'Termos para usar o Balance.',
                    copy: 'Estes termos descrevem as condições gerais de acesso, subscrição e utilização do produto e do site.'
                },
                sections: [
                    {
                        title: '1. Âmbito do produto',
                        body: [
                            'O Balance é um produto financeiro para tracking manual de wallets, saldos e snapshots.',
                            'Não é aconselhamento financeiro, software de corretagem nem um serviço de automação bancária.'
                        ]
                    },
                    {
                        title: '2. Responsabilidade do utilizador',
                        body: [
                            'É responsável pelos dados que introduz e pela respetiva precisão.',
                            'As atualizações manuais fazem parte do modelo do produto e continuam sob o seu controlo.'
                        ]
                    },
                    {
                        title: '3. Acesso Grátis e Pro',
                        body: [
                            'O Balance pode oferecer uma versão gratuita e funcionalidades Pro pagas.',
                            'Se subscrever Pro, faturação e renovação seguem o que for apresentado no fluxo de compra relevante.'
                        ]
                    },
                    {
                        title: '4. Disponibilidade',
                        body: [
                            'Produto e site podem evoluir ao longo do tempo e algumas funcionalidades podem mudar.',
                            'Nada nesta página garante disponibilidade contínua em todos os dispositivos ou plataformas.'
                        ]
                    },
                    {
                        title: '5. Projeto aberto',
                        body: [
                            'O open source não elimina a necessidade de usar o produto de forma responsável.',
                            'Contribuições e feedback de roadmap não criam automaticamente obrigações de suporte ou entrega.'
                        ]
                    },
                    {
                        title: '6. Contacto',
                        body: [
                            'Para dúvidas sobre estes termos, use a página de contacto ou os canais de suporte do projeto.',
                            'Atualize os detalhes de contacto do site se usar um email legal ou de suporte dedicado.'
                        ]
                    }
                ]
            }
        }
    };

    const supported = ['en', 'it', 'pt'];

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    function setText(selector, value, root = document) {
        const node = root.querySelector(selector);
        if (node && typeof value === 'string') node.textContent = value;
    }

    function applyMeta(langCopy) {
        const page = document.body.dataset.page;
        const meta = langCopy.meta[page];
        if (!meta) return;

        document.title = meta.title;
        document.documentElement.lang = document.documentElement.dataset.langCode || document.documentElement.lang || 'en';
        const description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', meta.description);
    }

    function applyGenericTranslations(langCopy) {
        document.querySelectorAll('[data-i18n]').forEach((node) => {
            const value = getNestedValue(langCopy, node.dataset.i18n);
            if (typeof value === 'string') {
                node.textContent = value;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((node) => {
            const value = getNestedValue(langCopy, node.dataset.i18nHtml);
            if (typeof value === 'string') {
                node.innerHTML = value;
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
            node.dataset.i18nAttr.split(';').forEach((pair) => {
                const [attr, path] = pair.split(':');
                if (!attr || !path) return;
                const value = getNestedValue(langCopy, path);
                if (typeof value === 'string') {
                    node.setAttribute(attr.trim(), value);
                }
            });
        });
    }

    function applyTrustItems(langCopy) {
        const items = document.querySelectorAll('.trust-card');
        if (!items.length || !langCopy.home?.trust) return;
        items.forEach((item, index) => {
            const copy = langCopy.home.trust[index];
            if (!copy) return;
            setText('h3', copy.title, item);
            setText('p', copy.text, item);
        });
    }

    function applyFAQ(langCopy) {
        const items = document.querySelectorAll('.faq-item');
        const copyItems = langCopy.home?.faq?.items || [];
        items.forEach((item, index) => {
            const copy = copyItems[index];
            if (!copy) return;
            setText('summary', copy.q, item);
            setText('p', copy.a, item);
        });
    }

    function applyRoadmapCards(langCopy) {
        const cards = document.querySelectorAll('.roadmap-card[data-roadmap-key]');
        cards.forEach((card) => {
            const key = card.dataset.roadmapKey;
            const copy = langCopy.roadmap?.columns?.[key];
            if (!copy) return;
            setText('.mini-kicker', copy.kicker, card);
            setText('h3', copy.title, card);
            setText('p', copy.text, card);
            const list = card.querySelectorAll('li span');
            list.forEach((node, index) => {
                node.textContent = copy.items[index] || '';
            });
        });
    }

    function applyPlanCopy(langCopy) {
        const section = document.querySelector('#plans[data-billing-root]');
        if (!section) return;
        const planCopy = langCopy.home?.plans;
        if (!planCopy) return;

        setText('.plans-toggle button[data-billing-option="annual"]', planCopy.toggle.annual, section);
        setText('.plans-toggle button[data-billing-option="monthly"]', planCopy.toggle.monthly, section);
        const toggle = section.querySelector('.plans-toggle');
        if (toggle) toggle.setAttribute('aria-label', planCopy.toggle.aria);

        const freeCard = section.querySelector('.plan-card--free');
        if (freeCard) {
            setText('.plan-badge', planCopy.free.badge, freeCard);
            setText('h3', planCopy.free.title, freeCard);
            setText('.plan-description', planCopy.free.description, freeCard);
            setText('.plan-free-label', planCopy.free.priceLabel, freeCard);
            freeCard.querySelectorAll('.plan-list li span').forEach((node, index) => {
                node.textContent = planCopy.free.list[index] || '';
            });
            setText('.btn', planCopy.free.cta, freeCard);
        }

        const proCard = section.querySelector('.plan-card--pro');
        if (proCard) {
            setText('h3', planCopy.pro.title, proCard);
            setText('.plan-description', planCopy.pro.description, proCard);
            proCard.querySelectorAll('.plan-list li span').forEach((node, index) => {
                node.textContent = planCopy.pro.list[index] || '';
            });
            const cta = proCard.querySelector('.btn');
            if (cta) cta.innerHTML = planCopy.pro.ctaHtml;
            setText('.plan-microcopy', planCopy.pro.microcopy, proCard);

            const badge = proCard.querySelector('.plan-badge');
            const pill = proCard.querySelector('.plan-pill');
            const caption = proCard.querySelector('.plan-caption');
            const price = proCard.querySelector('.plan-price');
            const chip = proCard.querySelector('.plan-chip');
            const alt = proCard.querySelector('.plan-alt');
            const note = proCard.querySelector('.plan-note');

            if (badge) {
                badge.dataset.annual = planCopy.pro.badgeAnnual;
                badge.dataset.monthly = planCopy.pro.badgeMonthly;
                badge.dataset.billingTarget = 'true';
            }
            if (pill) {
                pill.dataset.annual = planCopy.pro.pillAnnual;
                pill.dataset.monthly = planCopy.pro.pillMonthly;
                pill.dataset.billingTarget = 'true';
            }
            if (caption) {
                caption.dataset.annual = planCopy.pro.annualCaption;
                caption.dataset.monthly = planCopy.pro.monthlyCaption;
                caption.dataset.billingTarget = 'true';
            }
            if (price) {
                price.dataset.annual = planCopy.pro.annualPriceHtml;
                price.dataset.monthly = planCopy.pro.monthlyPriceHtml;
                price.dataset.billingTarget = 'true';
                price.dataset.copyMode = 'html';
            }
            if (chip) {
                chip.dataset.annual = planCopy.pro.annualChip;
                chip.dataset.monthly = planCopy.pro.monthlyChip;
                chip.dataset.billingTarget = 'true';
            }
            if (alt) {
                alt.dataset.annual = planCopy.pro.annualAlt;
                alt.dataset.monthly = planCopy.pro.monthlyAlt;
                alt.dataset.billingTarget = 'true';
            }
            if (note) {
                note.dataset.annual = planCopy.pro.annualNote;
                note.dataset.monthly = planCopy.pro.monthlyNote;
                note.dataset.billingTarget = 'true';
            }
        }

        if (window.BalanceV2 && typeof window.BalanceV2.refreshPricing === 'function') {
            window.BalanceV2.refreshPricing();
        }
    }

    function applyPolicySections(langCopy, pageKey) {
        const sections = document.querySelectorAll('.legal-section');
        const copy = langCopy[pageKey]?.sections || [];
        sections.forEach((section, index) => {
            const data = copy[index];
            if (!data) return;
            setText('h2', data.title, section);
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach((node, paragraphIndex) => {
                node.textContent = data.body[paragraphIndex] || '';
            });
        });
    }

    function syncLanguageSelects(lang) {
        document.querySelectorAll('.language-select').forEach((select) => {
            select.value = lang;
        });
    }

    function detectLanguage() {
        const saved = localStorage.getItem('balance-v2-lang');
        if (saved && supported.includes(saved)) return saved;

        const browser = navigator.language.toLowerCase();
        if (browser.startsWith('it')) return 'it';
        if (browser.startsWith('pt')) return 'pt';
        return 'en';
    }

    function applyLanguage(lang) {
        const currentLang = supported.includes(lang) ? lang : 'en';
        const langCopy = translations[currentLang];
        document.documentElement.dataset.langCode = currentLang;
        applyMeta(langCopy);
        applyGenericTranslations(langCopy);
        applyTrustItems(langCopy);
        applyFAQ(langCopy);
        applyRoadmapCards(langCopy);
        applyPlanCopy(langCopy);

        const page = document.body.dataset.page;
        if (page === 'privacy' || page === 'terms') {
            applyPolicySections(langCopy, page);
        }

        syncLanguageSelects(currentLang);
        localStorage.setItem('balance-v2-lang', currentLang);
    }

    function initLanguageSwitchers() {
        document.querySelectorAll('.language-select').forEach((select) => {
            select.addEventListener('change', () => {
                applyLanguage(select.value);
            });
        });
    }

    function init() {
        initLanguageSwitchers();
        applyLanguage(detectLanguage());
    }

    return { init, applyLanguage };
})();

document.addEventListener('DOMContentLoaded', () => {
    BalanceV2I18n.init();
});
