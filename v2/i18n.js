const APP_STORE_URL = 'https://apps.apple.com/it/app/balance-finanza-personale/id6758206139';
const GITHUB_URL = 'https://github.com/ozzirr/balance-app-v1';
const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`;
const GITHUB_BUG_URL = `${GITHUB_URL}/issues/new?template=bug_report.md`;
const GITHUB_FEATURE_URL = `${GITHUB_URL}/issues/new?template=feature_request.md`;
const GITHUB_CONTRIBUTING_URL = `${GITHUB_URL}/blob/main/CONTRIBUTING.md`;

const LANGUAGE_STORAGE_KEY = 'balance-v2-language';

const LANGUAGE_META = {
    it: { htmlLang: 'it', ogLocale: 'it_IT' },
    en: { htmlLang: 'en', ogLocale: 'en_US' },
    pt: { htmlLang: 'pt', ogLocale: 'pt_PT' }
};

const CONTENT = {
    en: {
        common: {
            brand: 'Balance',
            nav: {
                overview: 'Overview',
                features: 'Features',
                roadmap: 'Roadmap',
                contribute: 'Contribute',
                download: 'Download',
                menu: 'Menu'
            },
            footer: {
                privacy: 'Privacy Policy',
                terms: 'Terms',
                contact: 'Contact',
                github: 'GitHub',
                language: 'Language',
                copyright: '© Balance. All rights reserved.'
            }
        },
        home: {
            meta: {
                title: 'Balance — Take control of your finances.',
                description: 'Private, offline and open-source finance tracking. Track wallets, investments and net worth with clarity, no bank sync and no noise.'
            },
            hero: {
                eyebrow: 'Private · Offline · Open source',
                title: 'Take control of your finances.',
                subtitle: 'Private. Offline. Fully yours.',
                supportHtml: 'Track your money, investments and net worth with clarity.<br>No bank connections. No sync. No noise.',
                ctaPrimary: 'Download on the App Store',
                ctaSecondary: 'View roadmap',
                chipA: 'Monthly snapshots',
                chipB: 'No bank sync',
                cardA: {
                    label: 'Clarity',
                    value: 'Manual updates. Clear history.'
                },
                cardB: {
                    label: 'Control',
                    value: 'Everything stays on your device.'
                }
            },
            trust: [
                {
                    title: 'Private by design',
                    text: 'No hidden flows. No data handoff. No account required.'
                },
                {
                    title: 'Works offline',
                    text: 'Your numbers stay readable even without a connection.'
                },
                {
                    title: 'No bank sync',
                    text: 'You choose what enters the app and when it changes.'
                },
                {
                    title: 'Your data stays on your device',
                    text: 'Balance is built around local control, not remote storage.'
                }
            ],
            coreIdea: {
                title: 'Control changes everything.',
                paragraphs: [
                    'Most finance apps try to automate your money. Balance gives you control instead.',
                    'You decide what to track. You decide when to update. You understand everything.',
                    'No black boxes. No hidden logic.'
                ],
                sideLines: [
                    'Manual by choice.',
                    'Calm by design.',
                    'Built for long-term clarity.'
                ],
                ending: 'Balance stays useful because every number still has context.'
            },
            value: {
                title: 'Everything you need. Nothing you don’t.',
                intro: 'Simple inputs. Clear outputs.',
                items: [
                    {
                        icon: 'WL',
                        title: 'Track all your wallets in one place',
                        text: 'Keep cash, brokers, crypto and other assets organized in one clear view.'
                    },
                    {
                        icon: 'NW',
                        title: 'Monitor investments and total net worth',
                        text: 'See the bigger picture without turning your finances into a spreadsheet.'
                    },
                    {
                        icon: 'SN',
                        title: 'Save monthly snapshots',
                        text: 'Create a clean historical record whenever you want to lock in a month.'
                    },
                    {
                        icon: 'TR',
                        title: 'See progress clearly over time',
                        text: 'Track direction, not noise, with a rhythm that stays easy to maintain.'
                    }
                ]
            },
            showcase: {
                title: 'See your finances clearly.',
                intro: 'A product view built around reading, not clutter.',
                cards: {
                    dashboard: {
                        title: 'Dashboard clarity',
                        text: 'A calmer overview of balances, composition and movement.'
                    },
                    trends: {
                        title: 'Trends over time',
                        text: 'Snapshots turn updates into a readable history instead of scattered notes.'
                    },
                    wallets: {
                        title: 'Wallet organization',
                        text: 'Separate accounts and assets without losing the whole picture.'
                    },
                    snapshots: {
                        title: 'Monthly snapshots',
                        text: 'Every saved point becomes a reference you can actually trust.'
                    }
                }
            },
            philosophy: {
                title: 'No sync. By choice.',
                paragraphs: [
                    'Balance doesn’t connect to your bank.',
                    'That’s not a limitation. It’s a decision.'
                ],
                points: [
                    'Your data stays on your device',
                    'No external dependencies',
                    'No broken connections',
                    'No surprises'
                ],
                closing: 'You’re always in control.'
            },
            steps: {
                title: 'Simple by design.',
                closing: 'It takes seconds. It gives you clarity over time.',
                items: [
                    {
                        title: 'Add your wallets',
                        text: 'Set up the accounts and asset buckets you want to keep an eye on.'
                    },
                    {
                        title: 'Insert your balances',
                        text: 'Update numbers manually, only when they matter to you.'
                    },
                    {
                        title: 'Save monthly snapshots',
                        text: 'Capture a clean point in time without extra setup.'
                    },
                    {
                        title: 'Track your growth over time',
                        text: 'Review progress with context instead of chasing constant automation.'
                    }
                ]
            },
            openProject: {
                title: 'Built in the open.',
                copy: 'Balance is evolving step by step. Follow the roadmap, suggest features and contribute to the project.',
                cards: [
                    {
                        kicker: 'Roadmap',
                        title: 'Follow what’s next',
                        text: 'See what is already shipping, what is being refined and what still needs feedback.'
                    },
                    {
                        kicker: 'Feedback',
                        title: 'Suggest features clearly',
                        text: 'Good product direction comes from real usage, not guesswork.'
                    },
                    {
                        kicker: 'Open source',
                        title: 'Contribute in public',
                        text: 'Code, copy, issues and product thinking all help shape Balance.'
                    }
                ],
                ctaPrimary: 'View roadmap',
                ctaSecondary: 'Contribute on GitHub'
            },
            plans: {
                title: 'Start simple. Upgrade anytime.',
                intro: 'Free gives you the essentials. Pro adds deeper control when you need it.',
                annual: 'Annual',
                monthly: 'Monthly',
                free: {
                    badge: 'Free',
                    title: 'Balance',
                    description: 'Everything you need to get started.',
                    priceHtml: '0 €',
                    list: [
                        'Up to 3 wallets',
                        'Essential snapshots',
                        'Full history'
                    ],
                    cta: 'Download free'
                },
                pro: {
                    badgeAnnual: 'Launch offer',
                    badgeMonthly: 'Cancel anytime',
                    pillAnnual: 'Best value',
                    pillMonthly: 'Monthly plan',
                    title: 'Balance Pro',
                    description: 'Advanced features for deeper control.',
                    billing: {
                        annual: {
                            caption: 'Launch annual pricing',
                            priceHtml: '19,99 €<span class="price-suffix">per year</span>',
                            chip: 'Save 15,89 €',
                            alt: 'Equivalent to 1,67 € per month instead of 35,88 € per year',
                            note: 'First month free.'
                        },
                        monthly: {
                            caption: 'Monthly pricing',
                            priceHtml: '2,99 €<span class="price-suffix">per month</span>',
                            chip: 'Flexible',
                            alt: 'Renews monthly at 2,99 €',
                            note: 'First month free.'
                        }
                    },
                    list: [
                        'Unlimited wallets',
                        'Advanced snapshots for deeper analysis',
                        'A more flexible archive for long-term tracking'
                    ],
                    cta: 'Download and unlock Pro',
                    microcopy: 'After the free trial, unless cancelled, renewal follows the selected plan.'
                }
            },
            faq: {
                title: 'Questions, answered.',
                items: [
                    {
                        q: 'Is Balance private?',
                        a: 'Yes. Balance is built so your financial data stays on your device instead of being sent to a central service.'
                    },
                    {
                        q: 'Does it connect to banks or brokerages?',
                        a: 'No. Balance is a manual product by design. There is no bank sync and no brokerage connection layer.'
                    },
                    {
                        q: 'What can I track?',
                        a: 'Cash, bank accounts, brokers, crypto and other assets that matter to your net worth view.'
                    },
                    {
                        q: 'What’s the difference between Free and Pro?',
                        a: 'Free is enough to start with up to 3 wallets and essential snapshots. Pro removes limits and adds more depth for ongoing tracking.'
                    },
                    {
                        q: 'Is Android available?',
                        a: 'Yes. Balance is available on both iOS and Android.'
                    }
                ]
            },
            finalCta: {
                title: 'Take control today.',
                copy: 'Your finances. Your decisions.',
                primary: 'Download on the App Store',
                secondary: 'View roadmap'
            }
        },
        roadmap: {
            meta: {
                title: 'Balance Roadmap',
                description: 'Follow the Balance roadmap and see how the product evolves around privacy, simplicity and open development.'
            },
            hero: {
                eyebrow: 'Product · Roadmap · Open development',
                title: 'Roadmap',
                subtitle: 'Balance is evolving step by step.',
                support: 'The roadmap follows the same principles as the product: private, simple and clear over time.',
                primary: 'View GitHub',
                secondary: 'Suggest a feature'
            },
            status: {
                title: 'Current focus',
                copy: 'Balance is already live with the core experience: wallets, snapshots, history and a fully local approach.'
            },
            cards: [
                {
                    kicker: 'Now',
                    title: 'Current release',
                    text: 'The core product is about clarity and control, not automation.',
                    list: [
                        'Wallets for cash, investments and other assets',
                        'Manual snapshots with history',
                        'Private, local-first data handling',
                        'Open-source project foundation'
                    ]
                },
                {
                    kicker: 'Next',
                    title: 'Near-term improvements',
                    text: 'The next layer focuses on readability, routine and export.',
                    list: [
                        'Widgets for faster glanceable updates',
                        'Better charts and trend reading',
                        'CSV or JSON export options',
                        'Snapshot reminders and smoother onboarding'
                    ]
                },
                {
                    kicker: 'Later',
                    title: 'Longer-term direction',
                    text: 'Future work should extend control without compromising the product philosophy.',
                    list: [
                        'Optional encrypted backup',
                        'Multi-currency support',
                        'More customization for wallet structure',
                        'Integration surfaces for advanced users'
                    ]
                }
            ],
            principles: {
                title: 'How the roadmap is shaped.',
                items: [
                    {
                        kicker: 'Private',
                        title: 'Privacy stays first',
                        text: 'New features should not force remote dependencies into a product built around local control.'
                    },
                    {
                        kicker: 'Simple',
                        title: 'Complexity needs a reason',
                        text: 'Balance should stay readable and maintainable, even as the product grows.'
                    },
                    {
                        kicker: 'Open',
                        title: 'Direction stays visible',
                        text: 'Feedback, issues and contributions are part of how the roadmap gets better.'
                    }
                ]
            },
            cta: {
                title: 'Want to influence what comes next?',
                copy: 'Issues, feedback and contributions directly shape the roadmap.',
                primary: 'Contribute on GitHub',
                secondary: 'Back to download'
            }
        },
        contribute: {
            meta: {
                title: 'Contribute to Balance',
                description: 'Contribute to Balance through code, issues, copy and product feedback.'
            },
            hero: {
                eyebrow: 'Open source · Community · Product',
                title: 'Contribute',
                subtitle: 'Balance is built in the open.',
                support: 'Roadmap feedback, issues, copy and code all help move the product forward.',
                primary: 'Open the repository',
                secondary: 'View roadmap'
            },
            cards: [
                {
                    kicker: 'Bug',
                    title: 'Report an issue',
                    text: 'If something is broken, the clearest contribution is a precise, reproducible report.',
                    cta: 'Report a bug',
                    href: GITHUB_BUG_URL
                },
                {
                    kicker: 'Feature',
                    title: 'Suggest an improvement',
                    text: 'Balance should evolve from real use cases, not vague feature lists.',
                    cta: 'Suggest a feature',
                    href: GITHUB_FEATURE_URL
                },
                {
                    kicker: 'Docs',
                    title: 'Improve the project language',
                    text: 'Copy, explanation and product framing matter as much as raw implementation.',
                    cta: 'Read contribution guide',
                    href: GITHUB_CONTRIBUTING_URL
                },
                {
                    kicker: 'Code',
                    title: 'Contribute to the codebase',
                    text: 'If you want to build, refine or clean something up, start from the public repository.',
                    cta: 'Go to GitHub',
                    href: GITHUB_URL
                }
            ],
            principles: {
                title: 'What good contributions look like.',
                items: [
                    {
                        kicker: 'Clear',
                        title: 'Specific beats broad',
                        text: 'Issues and proposals should explain the actual user problem, not just an abstract idea.'
                    },
                    {
                        kicker: 'Minimal',
                        title: 'Keep the product calm',
                        text: 'Balance should gain clarity as it grows, not extra noise.'
                    },
                    {
                        kicker: 'Aligned',
                        title: 'Respect the philosophy',
                        text: 'Privacy, offline control and simplicity are product constraints, not marketing lines.'
                    }
                ]
            },
            cta: {
                title: 'Open development is part of the product.',
                copy: 'If Balance is useful, help make it clearer, simpler and better.',
                primary: 'Contribute on GitHub',
                secondary: 'View roadmap'
            }
        },
        contact: {
            meta: {
                title: 'Contact Balance',
                description: 'Find the right public channel to contact the Balance project.'
            },
            hero: {
                eyebrow: 'Public project · Contact · Support',
                title: 'Contact',
                subtitle: 'Project communication starts here.',
                support: 'For now, the clearest way to reach Balance is through the public project channels.',
                primary: 'Open GitHub issues',
                secondary: 'View roadmap'
            },
            cards: [
                {
                    kicker: 'Feedback',
                    title: 'Questions or product feedback',
                    text: 'Use the project issue tracker for general questions, product notes or usability feedback.',
                    cta: 'Open issues',
                    href: GITHUB_ISSUES_URL
                },
                {
                    kicker: 'Bug',
                    title: 'Report a bug',
                    text: 'If something is not working, send a precise report with steps, context and screenshots if helpful.',
                    cta: 'Bug report template',
                    href: GITHUB_BUG_URL
                },
                {
                    kicker: 'Feature',
                    title: 'Request a feature',
                    text: 'If you want Balance to do something new, start with the problem you are trying to solve.',
                    cta: 'Feature request template',
                    href: GITHUB_FEATURE_URL
                },
                {
                    kicker: 'Open source',
                    title: 'Contribute directly',
                    text: 'If you want to help with copy, docs or code, the repository is the right entry point.',
                    cta: 'Contribution guide',
                    href: GITHUB_CONTRIBUTING_URL
                }
            ],
            principles: {
                title: 'Why the contact flow is public-first.',
                items: [
                    {
                        kicker: 'Transparent',
                        title: 'Useful conversations stay visible',
                        text: 'Public threads make product context easier to follow over time.'
                    },
                    {
                        kicker: 'Actionable',
                        title: 'Good reports are easier to act on',
                        text: 'Structured issue templates reduce back-and-forth and keep signals clear.'
                    },
                    {
                        kicker: 'Aligned',
                        title: 'The project stays open',
                        text: 'Roadmap, feedback and contribution channels should reinforce each other.'
                    }
                ]
            }
        },
        privacy: {
            meta: {
                title: 'Balance Privacy',
                description: 'Balance privacy summary: local-first financial data, no bank sync and minimal website handling.'
            },
            hero: {
                eyebrow: 'Privacy · Local-first · Open source',
                title: 'Privacy',
                subtitle: 'Private by design.',
                support: 'Balance is built so your financial data stays on your device.'
            },
            sections: [
                {
                    title: '1. What Balance is designed to do',
                    paragraphs: [
                        'Balance is a manual finance product built around control, simplicity and local ownership of data.',
                        'The app does not rely on bank connections or an account system to hold your financial history.'
                    ]
                },
                {
                    title: '2. Financial data in the app',
                    paragraphs: [
                        'The financial information you enter in Balance is intended to stay on your device.',
                        'That includes balances, wallets, snapshots, investment values and the historical view you build over time.'
                    ],
                    list: [
                        'No bank sync layer',
                        'No central server used to store your personal financial data',
                        'No need to hand over credentials to third-party providers'
                    ]
                },
                {
                    title: '3. Website and public channels',
                    paragraphs: [
                        'If you use public project channels such as GitHub, those services process data according to their own policies.',
                        'If you buy Balance Pro, payments and subscription management are handled by Apple through the App Store.'
                    ]
                },
                {
                    title: '4. Control and security',
                    paragraphs: [
                        'Local storage keeps control closer to you, and system-level protections on your device continue to matter.',
                        'You remain responsible for the accuracy of the information you enter and for keeping access to your device secure.'
                    ],
                    list: [
                        'Device-level security still matters',
                        'Deleting the app removes local app data from your device',
                        'Open-source code helps make the privacy model inspectable'
                    ]
                },
                {
                    title: '5. Open source and transparency',
                    paragraphsHtml: [
                        `Balance is developed in public. You can inspect the repository on <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a> and follow how the product evolves.`,
                        'Transparency is part of the product approach, not an extra marketing layer.'
                    ]
                }
            ]
        },
        terms: {
            meta: {
                title: 'Balance Terms',
                description: 'Balance terms summary for product use, subscriptions and project scope.'
            },
            hero: {
                eyebrow: 'Terms · Product use · App Store',
                title: 'Terms',
                subtitle: 'Clear terms for a clear product.',
                support: 'Balance is a finance tracking tool, not a financial advisory service.'
            },
            sections: [
                {
                    title: '1. Scope',
                    paragraphs: [
                        'These terms describe the general use of the Balance website, app and public project surfaces.',
                        'By using the product, you agree to use it responsibly and within the limits described here.'
                    ]
                },
                {
                    title: '2. Product nature',
                    paragraphs: [
                        'Balance helps you manually track wallets, balances, snapshots and net worth over time.',
                        'It does not provide financial advice, investment recommendations or automated portfolio management.'
                    ]
                },
                {
                    title: '3. Your data and your responsibility',
                    paragraphs: [
                        'You are responsible for the information you enter into the app and for the decisions you make based on it.',
                        'If a value is outdated or incorrect, Balance reflects what was entered manually.'
                    ]
                },
                {
                    title: '4. Free and Pro plans',
                    paragraphs: [
                        'Balance includes a free tier and an optional Pro subscription.',
                        'If you subscribe through the App Store, billing, renewal and cancellation are handled by Apple under the rules of your Apple account.'
                    ]
                },
                {
                    title: '5. Availability and changes',
                    paragraphs: [
                        'Balance is an evolving product. Features, roadmap priorities and public project materials may change over time.',
                        'Roadmap items are directional and should not be interpreted as a binding delivery commitment.'
                    ]
                },
                {
                    title: '6. Open source and external services',
                    paragraphsHtml: [
                        `Parts of the project are developed in public on <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a>. Repository usage may also be subject to the terms and policies of GitHub.`,
                        'Where third-party platforms are involved, their terms apply to the services they provide.'
                    ]
                }
            ]
        }
    },
    it: {
        common: {
            brand: 'Balance',
            nav: {
                overview: 'Panoramica',
                features: 'Funzionalità',
                roadmap: 'Roadmap',
                contribute: 'Contribuisci',
                download: 'Download',
                menu: 'Menu'
            },
            footer: {
                privacy: 'Privacy Policy',
                terms: 'Termini',
                contact: 'Contatti',
                github: 'GitHub',
                language: 'Lingua',
                copyright: '© Balance. Tutti i diritti riservati.'
            }
        },
        home: {
            meta: {
                title: 'Balance — Prendi il controllo delle tue finanze.',
                description: 'Tracking finanziario privato, offline e open source. Tieni sotto controllo wallet, investimenti e patrimonio senza bank sync e senza rumore.'
            },
            hero: {
                eyebrow: 'Privato · Offline · Open source',
                title: 'Prendi il controllo delle tue finanze.',
                subtitle: 'Privato. Offline. Solo tuo.',
                supportHtml: 'Tieni sotto controllo denaro, investimenti e patrimonio con chiarezza.<br>Niente collegamenti bancari. Nessuna sincronizzazione. Nessun rumore.',
                ctaPrimary: 'Scarica su App Store',
                ctaSecondary: 'Vedi roadmap',
                chipA: 'Snapshot mensili',
                chipB: 'Nessun bank sync',
                cardA: {
                    label: 'Chiarezza',
                    value: 'Aggiornamenti manuali. Storico leggibile.'
                },
                cardB: {
                    label: 'Controllo',
                    value: 'Tutto resta sul tuo dispositivo.'
                }
            },
            trust: [
                {
                    title: 'Privacy by design',
                    text: 'Nessun flusso nascosto. Nessuna consegna dati. Nessun account richiesto.'
                },
                {
                    title: 'Funziona offline',
                    text: 'I tuoi numeri restano leggibili anche senza connessione.'
                },
                {
                    title: 'Nessun collegamento bancario',
                    text: 'Decidi tu cosa entra nell’app e quando cambia.'
                },
                {
                    title: 'I dati restano sul dispositivo',
                    text: 'Balance è pensato per il controllo locale, non per lo storage remoto.'
                }
            ],
            coreIdea: {
                title: 'Il controllo cambia tutto.',
                paragraphs: [
                    'Molte app finance cercano di automatizzare i tuoi soldi. Balance ti dà controllo, invece.',
                    'Decidi tu cosa tracciare. Decidi tu quando aggiornare. Capisci tutto.',
                    'Nessuna scatola nera. Nessuna logica nascosta.'
                ],
                sideLines: [
                    'Manuale per scelta.',
                    'Calma per design.',
                    'Pensata per la chiarezza nel tempo.'
                ],
                ending: 'Balance resta utile perché ogni numero continua ad avere contesto.'
            },
            value: {
                title: 'Tutto quello che ti serve. Niente di più.',
                intro: 'Input semplici. Output chiari.',
                items: [
                    {
                        icon: 'WL',
                        title: 'Tutti i wallet in un solo posto',
                        text: 'Organizza liquidità, broker, crypto e altri asset in una vista ordinata.'
                    },
                    {
                        icon: 'NW',
                        title: 'Investimenti e patrimonio totale',
                        text: 'Leggi il quadro complessivo senza trasformare le finanze in un foglio di calcolo.'
                    },
                    {
                        icon: 'SN',
                        title: 'Snapshot mensili',
                        text: 'Salva un punto pulito nel tempo quando vuoi chiudere un mese.'
                    },
                    {
                        icon: 'TR',
                        title: 'Progressi chiari nel tempo',
                        text: 'Segui la direzione, non il rumore, con una routine facile da mantenere.'
                    }
                ]
            },
            showcase: {
                title: 'Vedi le tue finanze con chiarezza.',
                intro: 'Un prodotto pensato per leggere, non per affollare.',
                cards: {
                    dashboard: {
                        title: 'Dashboard più chiara',
                        text: 'Una vista più calma di saldi, composizione e movimento.'
                    },
                    trends: {
                        title: 'Andamento nel tempo',
                        text: 'Gli snapshot trasformano gli aggiornamenti in uno storico leggibile.'
                    },
                    wallets: {
                        title: 'Wallet ordinati',
                        text: 'Separa conti e asset senza perdere la vista d’insieme.'
                    },
                    snapshots: {
                        title: 'Snapshot mensili',
                        text: 'Ogni salvataggio diventa un riferimento che puoi davvero rileggere.'
                    }
                }
            },
            philosophy: {
                title: 'Nessuna sincronizzazione. Per scelta.',
                paragraphs: [
                    'Balance non si collega alla tua banca.',
                    'Non è un limite. È una decisione.'
                ],
                points: [
                    'I dati restano sul dispositivo',
                    'Nessuna dipendenza esterna',
                    'Nessuna connessione che si rompe',
                    'Nessuna sorpresa'
                ],
                closing: 'Hai sempre il controllo.'
            },
            steps: {
                title: 'Semplice, per design.',
                closing: 'Richiede pochi secondi. Ti dà chiarezza nel tempo.',
                items: [
                    {
                        title: 'Aggiungi i tuoi wallet',
                        text: 'Imposta conti e contenitori patrimoniali che vuoi tenere sotto controllo.'
                    },
                    {
                        title: 'Inserisci i saldi',
                        text: 'Aggiorna i numeri manualmente, solo quando per te conta farlo.'
                    },
                    {
                        title: 'Salva snapshot mensili',
                        text: 'Blocca un punto nel tempo senza setup inutili.'
                    },
                    {
                        title: 'Segui la crescita nel tempo',
                        text: 'Rileggi l’evoluzione con contesto, senza inseguire automazioni continue.'
                    }
                ]
            },
            openProject: {
                title: 'Costruito in pubblico.',
                copy: 'Balance evolve passo dopo passo. Segui la roadmap, proponi funzionalità e contribuisci al progetto.',
                cards: [
                    {
                        kicker: 'Roadmap',
                        title: 'Segui cosa arriva dopo',
                        text: 'Vedi cosa è già in rilascio, cosa si sta affinando e cosa ha ancora bisogno di feedback.'
                    },
                    {
                        kicker: 'Feedback',
                        title: 'Proponi feature in modo chiaro',
                        text: 'La direzione del prodotto nasce da casi d’uso reali, non da liste vaghe.'
                    },
                    {
                        kicker: 'Open source',
                        title: 'Contribuisci in pubblico',
                        text: 'Codice, copy, issue e ragionamento di prodotto aiutano tutti a far crescere Balance.'
                    }
                ],
                ctaPrimary: 'Vedi roadmap',
                ctaSecondary: 'Contribuisci su GitHub'
            },
            plans: {
                title: 'Inizia semplice. Fai upgrade quando vuoi.',
                intro: 'La versione free copre l’essenziale. Pro aggiunge più profondità quando ti serve.',
                annual: 'Annuale',
                monthly: 'Mensile',
                free: {
                    badge: 'Gratis',
                    title: 'Balance',
                    description: 'Tutto quello che ti serve per iniziare.',
                    priceHtml: '0 €',
                    list: [
                        'Fino a 3 wallet',
                        'Snapshot essenziali',
                        'Storico completo'
                    ],
                    cta: 'Scarica gratis'
                },
                pro: {
                    badgeAnnual: 'Offerta lancio',
                    badgeMonthly: 'Annulla quando vuoi',
                    pillAnnual: 'Miglior valore',
                    pillMonthly: 'Piano mensile',
                    title: 'Balance Pro',
                    description: 'Funzionalità avanzate per un controllo più profondo.',
                    billing: {
                        annual: {
                            caption: 'Prezzo annuale di lancio',
                            priceHtml: '19,99 €<span class="price-suffix">l’anno</span>',
                            chip: 'Risparmi 15,89 €',
                            alt: 'Equivale a 1,67 € al mese invece di 35,88 € l’anno',
                            note: 'Primo mese gratuito.'
                        },
                        monthly: {
                            caption: 'Prezzo mensile',
                            priceHtml: '2,99 €<span class="price-suffix">al mese</span>',
                            chip: 'Flessibile',
                            alt: 'Rinnovo mensile a 2,99 €',
                            note: 'Primo mese gratuito.'
                        }
                    },
                    list: [
                        'Wallet illimitati',
                        'Snapshot avanzati per analisi più precise',
                        'Un archivio più flessibile per il tracking nel tempo'
                    ],
                    cta: 'Scarica e attiva Pro',
                    microcopy: 'Al termine della prova gratuita, salvo annullamento, il rinnovo segue il piano selezionato.'
                }
            },
            faq: {
                title: 'Domande utili.',
                items: [
                    {
                        q: 'Balance è privato?',
                        a: 'Sì. Balance è pensato perché i tuoi dati finanziari restino sul dispositivo invece di essere inviati a un servizio centrale.'
                    },
                    {
                        q: 'Si collega a banche o broker?',
                        a: 'No. Balance è manuale per scelta. Non c’è bank sync e non c’è un livello di connessione ai broker.'
                    },
                    {
                        q: 'Cosa posso tracciare?',
                        a: 'Liquidità, conti, broker, crypto e altri asset che fanno parte della tua vista patrimoniale.'
                    },
                    {
                        q: 'Che differenza c’è tra Free e Pro?',
                        a: 'La versione gratuita basta per partire con fino a 3 wallet e snapshot essenziali. Pro toglie i limiti e aggiunge più profondità nel tempo.'
                    },
                    {
                        q: 'Android è disponibile?',
                        a: 'Sì. Balance è disponibile sia su iOS sia su Android.'
                    }
                ]
            },
            finalCta: {
                title: 'Prendi il controllo oggi.',
                copy: 'Le tue finanze. Le tue decisioni.',
                primary: 'Scarica su App Store',
                secondary: 'Vedi roadmap'
            }
        },
        roadmap: {
            meta: {
                title: 'Roadmap di Balance',
                description: 'Segui la roadmap di Balance e scopri come evolve il prodotto tra privacy, semplicità e sviluppo aperto.'
            },
            hero: {
                eyebrow: 'Prodotto · Roadmap · Sviluppo aperto',
                title: 'Roadmap',
                subtitle: 'Balance evolve passo dopo passo.',
                support: 'La roadmap segue gli stessi principi del prodotto: privacy, semplicità e chiarezza nel tempo.',
                primary: 'Apri GitHub',
                secondary: 'Proponi una feature'
            },
            status: {
                title: 'Focus attuale',
                copy: 'Balance è già live con l’esperienza core: wallet, snapshot, storico e un approccio completamente locale.'
            },
            cards: [
                {
                    kicker: 'Ora',
                    title: 'Release attuale',
                    text: 'Il prodotto di base punta su chiarezza e controllo, non sull’automazione.',
                    list: [
                        'Wallet per liquidità, investimenti e altri asset',
                        'Snapshot manuali con storico',
                        'Gestione dati privata e locale',
                        'Base open source del progetto'
                    ]
                },
                {
                    kicker: 'Prossimo',
                    title: 'Miglioramenti vicini',
                    text: 'Il prossimo livello lavora su leggibilità, routine ed export.',
                    list: [
                        'Widget per aggiornamenti rapidi',
                        'Grafici e lettura trend migliori',
                        'Export in CSV o JSON',
                        'Promemoria snapshot e onboarding più fluido'
                    ]
                },
                {
                    kicker: 'Dopo',
                    title: 'Direzione più lunga',
                    text: 'Il futuro deve estendere il controllo senza rompere la filosofia del prodotto.',
                    list: [
                        'Backup cifrato opzionale',
                        'Supporto multi-valuta',
                        'Più personalizzazione per i wallet',
                        'Superfici di integrazione per utenti avanzati'
                    ]
                }
            ],
            principles: {
                title: 'Come nasce la roadmap.',
                items: [
                    {
                        kicker: 'Privata',
                        title: 'La privacy resta prima',
                        text: 'Le nuove feature non devono forzare dipendenze remote dentro un prodotto nato per il controllo locale.'
                    },
                    {
                        kicker: 'Semplice',
                        title: 'La complessità deve avere un motivo',
                        text: 'Balance deve restare leggibile e mantenibile anche mentre cresce.'
                    },
                    {
                        kicker: 'Aperta',
                        title: 'La direzione resta visibile',
                        text: 'Feedback, issue e contributi fanno parte del modo in cui la roadmap migliora.'
                    }
                ]
            },
            cta: {
                title: 'Vuoi influenzare cosa arriva dopo?',
                copy: 'Issue, feedback e contributi modellano direttamente la roadmap.',
                primary: 'Contribuisci su GitHub',
                secondary: 'Torna al download'
            }
        },
        contribute: {
            meta: {
                title: 'Contribuisci a Balance',
                description: 'Contribuisci a Balance con codice, issue, copy e feedback di prodotto.'
            },
            hero: {
                eyebrow: 'Open source · Community · Prodotto',
                title: 'Contribuisci',
                subtitle: 'Balance è costruito in pubblico.',
                support: 'Feedback sulla roadmap, issue, copy e codice aiutano tutti a far avanzare il prodotto.',
                primary: 'Apri il repository',
                secondary: 'Vedi roadmap'
            },
            cards: [
                {
                    kicker: 'Bug',
                    title: 'Segnala un problema',
                    text: 'Se qualcosa non funziona, il contributo più utile è un report preciso e riproducibile.',
                    cta: 'Segnala bug',
                    href: GITHUB_BUG_URL
                },
                {
                    kicker: 'Feature',
                    title: 'Proponi un miglioramento',
                    text: 'Balance dovrebbe evolvere da casi d’uso reali, non da liste di feature vaghe.',
                    cta: 'Proponi feature',
                    href: GITHUB_FEATURE_URL
                },
                {
                    kicker: 'Docs',
                    title: 'Migliora il linguaggio del progetto',
                    text: 'Copy, spiegazione e framing di prodotto contano quanto l’implementazione.',
                    cta: 'Guida ai contributi',
                    href: GITHUB_CONTRIBUTING_URL
                },
                {
                    kicker: 'Codice',
                    title: 'Contribuisci al codebase',
                    text: 'Se vuoi costruire, rifinire o ripulire qualcosa, il repository pubblico è il punto di partenza.',
                    cta: 'Vai su GitHub',
                    href: GITHUB_URL
                }
            ],
            principles: {
                title: 'Come si riconosce un buon contributo.',
                items: [
                    {
                        kicker: 'Chiaro',
                        title: 'Lo specifico batte il generico',
                        text: 'Issue e proposte dovrebbero spiegare il problema reale dell’utente, non solo un’idea astratta.'
                    },
                    {
                        kicker: 'Minimo',
                        title: 'Il prodotto deve restare calmo',
                        text: 'Balance deve guadagnare chiarezza mentre cresce, non rumore.'
                    },
                    {
                        kicker: 'Allineato',
                        title: 'Rispetta la filosofia',
                        text: 'Privacy, controllo offline e semplicità sono vincoli di prodotto, non slogan.'
                    }
                ]
            },
            cta: {
                title: 'Lo sviluppo aperto fa parte del prodotto.',
                copy: 'Se Balance ti è utile, aiutalo a diventare più chiaro, più semplice e migliore.',
                primary: 'Contribuisci su GitHub',
                secondary: 'Vedi roadmap'
            }
        },
        contact: {
            meta: {
                title: 'Contatta Balance',
                description: 'Trova il canale pubblico giusto per contattare il progetto Balance.'
            },
            hero: {
                eyebrow: 'Progetto pubblico · Contatto · Supporto',
                title: 'Contatti',
                subtitle: 'La comunicazione del progetto parte da qui.',
                support: 'Per ora, il modo più chiaro per raggiungere Balance passa dai canali pubblici del progetto.',
                primary: 'Apri le issue',
                secondary: 'Vedi roadmap'
            },
            cards: [
                {
                    kicker: 'Feedback',
                    title: 'Domande o feedback di prodotto',
                    text: 'Usa il tracker pubblico del progetto per domande generali, note di prodotto o feedback di usabilità.',
                    cta: 'Apri issue',
                    href: GITHUB_ISSUES_URL
                },
                {
                    kicker: 'Bug',
                    title: 'Segnala un bug',
                    text: 'Se qualcosa non va, invia un report preciso con passaggi, contesto e screenshot se servono.',
                    cta: 'Template bug report',
                    href: GITHUB_BUG_URL
                },
                {
                    kicker: 'Feature',
                    title: 'Richiedi una funzionalità',
                    text: 'Se vuoi che Balance faccia qualcosa di nuovo, parti dal problema che stai cercando di risolvere.',
                    cta: 'Template feature request',
                    href: GITHUB_FEATURE_URL
                },
                {
                    kicker: 'Open source',
                    title: 'Contribuisci direttamente',
                    text: 'Se vuoi aiutare con copy, documentazione o codice, il repository è il punto di ingresso corretto.',
                    cta: 'Guida contributi',
                    href: GITHUB_CONTRIBUTING_URL
                }
            ],
            principles: {
                title: 'Perché il contatto è public-first.',
                items: [
                    {
                        kicker: 'Trasparente',
                        title: 'Le conversazioni utili restano visibili',
                        text: 'Thread pubblici rendono il contesto del prodotto più leggibile nel tempo.'
                    },
                    {
                        kicker: 'Azionabile',
                        title: 'I report buoni si gestiscono meglio',
                        text: 'Template strutturati riducono il ping-pong e tengono chiari i segnali.'
                    },
                    {
                        kicker: 'Allineato',
                        title: 'Il progetto resta aperto',
                        text: 'Roadmap, feedback e contributi devono rafforzarsi a vicenda.'
                    }
                ]
            }
        },
        privacy: {
            meta: {
                title: 'Privacy di Balance',
                description: 'Sintesi privacy di Balance: dati finanziari locali, nessun bank sync e gestione minima del sito.'
            },
            hero: {
                eyebrow: 'Privacy · Locale · Open source',
                title: 'Privacy',
                subtitle: 'Privata, per design.',
                support: 'Balance è costruito perché i tuoi dati finanziari restino sul tuo dispositivo.'
            },
            sections: [
                {
                    title: '1. Cosa è progettato per fare Balance',
                    paragraphs: [
                        'Balance è un prodotto finance manuale costruito attorno a controllo, semplicità e proprietà locale dei dati.',
                        'L’app non si basa su collegamenti bancari o su un sistema account per custodire la tua cronologia finanziaria.'
                    ]
                },
                {
                    title: '2. Dati finanziari nell’app',
                    paragraphs: [
                        'Le informazioni finanziarie che inserisci in Balance sono pensate per restare sul tuo dispositivo.',
                        'Questo include saldi, wallet, snapshot, valori degli investimenti e la vista storica che costruisci nel tempo.'
                    ],
                    list: [
                        'Nessun livello di bank sync',
                        'Nessun server centrale usato per archiviare i tuoi dati finanziari personali',
                        'Nessuna necessità di consegnare credenziali a provider terzi'
                    ]
                },
                {
                    title: '3. Sito e canali pubblici',
                    paragraphs: [
                        'Se usi canali pubblici del progetto come GitHub, quei servizi trattano i dati secondo le proprie policy.',
                        'Se acquisti Balance Pro, pagamenti e gestione dell’abbonamento sono gestiti da Apple tramite App Store.'
                    ]
                },
                {
                    title: '4. Controllo e sicurezza',
                    paragraphs: [
                        'Lo storage locale mantiene il controllo più vicino a te, e le protezioni di sistema del tuo dispositivo restano importanti.',
                        'Rimani responsabile dell’accuratezza delle informazioni inserite e della sicurezza di accesso al tuo dispositivo.'
                    ],
                    list: [
                        'La sicurezza del dispositivo conta ancora',
                        'Eliminare l’app rimuove i dati locali dell’app dal dispositivo',
                        'Il codice open source rende il modello privacy ispezionabile'
                    ]
                },
                {
                    title: '5. Open source e trasparenza',
                    paragraphsHtml: [
                        `Balance viene sviluppato in pubblico. Puoi ispezionare il repository su <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a> e seguire come evolve il prodotto.`,
                        'La trasparenza fa parte dell’approccio del prodotto, non è un livello marketing aggiuntivo.'
                    ]
                }
            ]
        },
        terms: {
            meta: {
                title: 'Termini di Balance',
                description: 'Sintesi dei termini di Balance per uso del prodotto, abbonamenti e perimetro del progetto.'
            },
            hero: {
                eyebrow: 'Termini · Uso prodotto · App Store',
                title: 'Termini',
                subtitle: 'Termini chiari per un prodotto chiaro.',
                support: 'Balance è uno strumento di tracking finanziario, non un servizio di consulenza finanziaria.'
            },
            sections: [
                {
                    title: '1. Ambito',
                    paragraphs: [
                        'Questi termini descrivono l’uso generale del sito, dell’app e delle superfici pubbliche del progetto Balance.',
                        'Usando il prodotto, accetti di usarlo in modo responsabile e nei limiti descritti qui.'
                    ]
                },
                {
                    title: '2. Natura del prodotto',
                    paragraphs: [
                        'Balance ti aiuta a tracciare manualmente wallet, saldi, snapshot e patrimonio nel tempo.',
                        'Non fornisce consulenza finanziaria, raccomandazioni di investimento o gestione automatica del portafoglio.'
                    ]
                },
                {
                    title: '3. I tuoi dati e la tua responsabilità',
                    paragraphs: [
                        'Sei responsabile delle informazioni che inserisci nell’app e delle decisioni che prendi basandoti su di esse.',
                        'Se un valore è non aggiornato o errato, Balance riflette ciò che è stato inserito manualmente.'
                    ]
                },
                {
                    title: '4. Piani Free e Pro',
                    paragraphs: [
                        'Balance include un piano gratuito e un abbonamento Pro opzionale.',
                        'Se ti abboni tramite App Store, fatturazione, rinnovo e cancellazione sono gestiti da Apple secondo le regole del tuo account Apple.'
                    ]
                },
                {
                    title: '5. Disponibilità e modifiche',
                    paragraphs: [
                        'Balance è un prodotto in evoluzione. Funzionalità, priorità di roadmap e materiali pubblici possono cambiare nel tempo.',
                        'Gli elementi presenti in roadmap sono indicativi e non rappresentano un impegno vincolante di consegna.'
                    ]
                },
                {
                    title: '6. Open source e servizi esterni',
                    paragraphsHtml: [
                        `Parte del progetto viene sviluppata in pubblico su <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a>. L’uso del repository può essere soggetto anche ai termini e alle policy di GitHub.`,
                        'Quando intervengono piattaforme terze, i loro termini si applicano ai servizi che forniscono.'
                    ]
                }
            ]
        }
    },
    pt: {
        common: {
            brand: 'Balance',
            nav: {
                overview: 'Visão geral',
                features: 'Funcionalidades',
                roadmap: 'Roadmap',
                contribute: 'Contribuir',
                download: 'Download',
                menu: 'Menu'
            },
            footer: {
                privacy: 'Política de Privacidade',
                terms: 'Termos',
                contact: 'Contacto',
                github: 'GitHub',
                language: 'Idioma',
                copyright: '© Balance. Todos os direitos reservados.'
            }
        },
        home: {
            meta: {
                title: 'Balance — Toma controlo das tuas finanças.',
                description: 'Tracking financeiro privado, offline e open source. Acompanha carteiras, investimentos e património sem ligação bancária e sem ruído.'
            },
            hero: {
                eyebrow: 'Privado · Offline · Open source',
                title: 'Toma controlo das tuas finanças.',
                subtitle: 'Privado. Offline. Totalmente teu.',
                supportHtml: 'Acompanha o teu dinheiro, investimentos e património com clareza.<br>Sem ligações bancárias. Sem sincronização. Sem ruído.',
                ctaPrimary: 'Descarregar na App Store',
                ctaSecondary: 'Ver roadmap',
                chipA: 'Snapshots mensais',
                chipB: 'Sem sync bancária',
                cardA: {
                    label: 'Clareza',
                    value: 'Atualizações manuais. Histórico legível.'
                },
                cardB: {
                    label: 'Controlo',
                    value: 'Tudo fica no teu dispositivo.'
                }
            },
            trust: [
                {
                    title: 'Privacidade por design',
                    text: 'Sem fluxos escondidos. Sem entrega de dados. Sem conta obrigatória.'
                },
                {
                    title: 'Funciona offline',
                    text: 'Os teus números continuam acessíveis mesmo sem ligação.'
                },
                {
                    title: 'Sem ligação bancária',
                    text: 'Tu decides o que entra na app e quando muda.'
                },
                {
                    title: 'Os dados ficam no teu dispositivo',
                    text: 'Balance foi pensado para controlo local, não para armazenamento remoto.'
                }
            ],
            coreIdea: {
                title: 'O controlo muda tudo.',
                paragraphs: [
                    'A maioria das apps financeiras tenta automatizar o teu dinheiro. Balance dá-te controlo em vez disso.',
                    'Tu decides o que acompanhar. Tu decides quando atualizar. Tu percebes tudo.',
                    'Sem caixas negras. Sem lógica escondida.'
                ],
                sideLines: [
                    'Manual por escolha.',
                    'Calma por design.',
                    'Feito para clareza a longo prazo.'
                ],
                ending: 'Balance continua útil porque cada número mantém contexto.'
            },
            value: {
                title: 'Tudo o que precisas. Nada do que não precisas.',
                intro: 'Inputs simples. Outputs claros.',
                items: [
                    {
                        icon: 'WL',
                        title: 'Todas as carteiras num só lugar',
                        text: 'Organiza liquidez, corretoras, crypto e outros ativos numa vista limpa.'
                    },
                    {
                        icon: 'NW',
                        title: 'Investimentos e património total',
                        text: 'Vê o quadro geral sem transformar as finanças numa folha de cálculo.'
                    },
                    {
                        icon: 'SN',
                        title: 'Snapshots mensais',
                        text: 'Guarda um ponto claro no tempo sempre que quiseres fechar um mês.'
                    },
                    {
                        icon: 'TR',
                        title: 'Progressão clara ao longo do tempo',
                        text: 'Segue a direção, não o ruído, com uma rotina fácil de manter.'
                    }
                ]
            },
            showcase: {
                title: 'Vê as tuas finanças com clareza.',
                intro: 'Uma experiência pensada para leitura, não para confusão.',
                cards: {
                    dashboard: {
                        title: 'Dashboard mais clara',
                        text: 'Uma visão mais calma de saldos, composição e movimento.'
                    },
                    trends: {
                        title: 'Tendência ao longo do tempo',
                        text: 'Os snapshots transformam atualizações num histórico legível.'
                    },
                    wallets: {
                        title: 'Carteiras organizadas',
                        text: 'Separa contas e ativos sem perder a visão do todo.'
                    },
                    snapshots: {
                        title: 'Snapshots mensais',
                        text: 'Cada registo guardado torna-se uma referência em que podes confiar.'
                    }
                }
            },
            philosophy: {
                title: 'Sem sync. Por escolha.',
                paragraphs: [
                    'Balance não se liga ao teu banco.',
                    'Isso não é uma limitação. É uma decisão.'
                ],
                points: [
                    'Os teus dados ficam no teu dispositivo',
                    'Sem dependências externas',
                    'Sem ligações partidas',
                    'Sem surpresas'
                ],
                closing: 'Tens sempre o controlo.'
            },
            steps: {
                title: 'Simples por design.',
                closing: 'Leva segundos. Dá-te clareza ao longo do tempo.',
                items: [
                    {
                        title: 'Adiciona as tuas carteiras',
                        text: 'Configura as contas e grupos de ativos que queres acompanhar.'
                    },
                    {
                        title: 'Insere os saldos',
                        text: 'Atualiza os números manualmente, só quando faz sentido para ti.'
                    },
                    {
                        title: 'Guarda snapshots mensais',
                        text: 'Cria um ponto no tempo sem configuração extra.'
                    },
                    {
                        title: 'Acompanha o crescimento',
                        text: 'Revê a evolução com contexto, sem depender de automação constante.'
                    }
                ]
            },
            openProject: {
                title: 'Construído em público.',
                copy: 'Balance está a evoluir passo a passo. Segue o roadmap, sugere funcionalidades e contribui para o projeto.',
                cards: [
                    {
                        kicker: 'Roadmap',
                        title: 'Segue o que vem a seguir',
                        text: 'Vê o que já está a chegar, o que está a ser afinado e o que ainda precisa de feedback.'
                    },
                    {
                        kicker: 'Feedback',
                        title: 'Sugere funcionalidades com clareza',
                        text: 'Uma boa direção de produto nasce de casos de uso reais, não de listas vagas.'
                    },
                    {
                        kicker: 'Open source',
                        title: 'Contribui em público',
                        text: 'Código, copy, issues e pensamento de produto ajudam a moldar Balance.'
                    }
                ],
                ctaPrimary: 'Ver roadmap',
                ctaSecondary: 'Contribuir no GitHub'
            },
            plans: {
                title: 'Começa simples. Faz upgrade quando quiseres.',
                intro: 'A versão free cobre o essencial. Pro adiciona mais profundidade quando precisares.',
                annual: 'Anual',
                monthly: 'Mensal',
                free: {
                    badge: 'Grátis',
                    title: 'Balance',
                    description: 'Tudo o que precisas para começar.',
                    priceHtml: '0 €',
                    list: [
                        'Até 3 carteiras',
                        'Snapshots essenciais',
                        'Histórico completo'
                    ],
                    cta: 'Descarregar grátis'
                },
                pro: {
                    badgeAnnual: 'Oferta de lançamento',
                    badgeMonthly: 'Cancela quando quiseres',
                    pillAnnual: 'Melhor valor',
                    pillMonthly: 'Plano mensal',
                    title: 'Balance Pro',
                    description: 'Funcionalidades avançadas para um controlo mais profundo.',
                    billing: {
                        annual: {
                            caption: 'Preço anual de lançamento',
                            priceHtml: '19,99 €<span class="price-suffix">por ano</span>',
                            chip: 'Poupa 15,89 €',
                            alt: 'Equivale a 1,67 € por mês em vez de 35,88 € por ano',
                            note: 'Primeiro mês grátis.'
                        },
                        monthly: {
                            caption: 'Preço mensal',
                            priceHtml: '2,99 €<span class="price-suffix">por mês</span>',
                            chip: 'Flexível',
                            alt: 'Renova mensalmente a 2,99 €',
                            note: 'Primeiro mês grátis.'
                        }
                    },
                    list: [
                        'Carteiras ilimitadas',
                        'Snapshots avançados para análise mais profunda',
                        'Um arquivo mais flexível para acompanhamento contínuo'
                    ],
                    cta: 'Descarregar e ativar Pro',
                    microcopy: 'No fim do período gratuito, salvo cancelamento, a renovação segue o plano selecionado.'
                }
            },
            faq: {
                title: 'Perguntas úteis.',
                items: [
                    {
                        q: 'Balance é privado?',
                        a: 'Sim. Balance foi pensado para que os teus dados financeiros fiquem no teu dispositivo em vez de serem enviados para um serviço central.'
                    },
                    {
                        q: 'Liga-se a bancos ou corretoras?',
                        a: 'Não. Balance é manual por escolha. Não existe camada de sync bancária nem ligação a corretoras.'
                    },
                    {
                        q: 'O que posso acompanhar?',
                        a: 'Liquidez, contas, corretoras, crypto e outros ativos que façam parte da tua visão patrimonial.'
                    },
                    {
                        q: 'Qual é a diferença entre Free e Pro?',
                        a: 'A versão gratuita chega para começar com até 3 carteiras e snapshots essenciais. Pro remove limites e acrescenta mais profundidade ao longo do tempo.'
                    },
                    {
                        q: 'Android está disponível?',
                        a: 'Sim. Balance está disponível em iOS e Android.'
                    }
                ]
            },
            finalCta: {
                title: 'Toma controlo hoje.',
                copy: 'As tuas finanças. As tuas decisões.',
                primary: 'Descarregar na App Store',
                secondary: 'Ver roadmap'
            }
        },
        roadmap: {
            meta: {
                title: 'Roadmap do Balance',
                description: 'Segue o roadmap do Balance e vê como o produto evolui entre privacidade, simplicidade e desenvolvimento aberto.'
            },
            hero: {
                eyebrow: 'Produto · Roadmap · Desenvolvimento aberto',
                title: 'Roadmap',
                subtitle: 'Balance está a evoluir passo a passo.',
                support: 'O roadmap segue os mesmos princípios do produto: privacidade, simplicidade e clareza ao longo do tempo.',
                primary: 'Abrir GitHub',
                secondary: 'Sugerir funcionalidade'
            },
            status: {
                title: 'Foco atual',
                copy: 'Balance já está live com a experiência principal: carteiras, snapshots, histórico e uma abordagem totalmente local.'
            },
            cards: [
                {
                    kicker: 'Agora',
                    title: 'Release atual',
                    text: 'O produto base aposta em clareza e controlo, não em automação.',
                    list: [
                        'Carteiras para liquidez, investimentos e outros ativos',
                        'Snapshots manuais com histórico',
                        'Gestão de dados privada e local',
                        'Base open source do projeto'
                    ]
                },
                {
                    kicker: 'Depois',
                    title: 'Melhorias próximas',
                    text: 'A próxima camada trabalha leitura, rotina e exportação.',
                    list: [
                        'Widgets para atualizações rápidas',
                        'Melhores gráficos e leitura de tendência',
                        'Exportação CSV ou JSON',
                        'Lembretes de snapshots e onboarding mais fluido'
                    ]
                },
                {
                    kicker: 'Mais tarde',
                    title: 'Direção futura',
                    text: 'O futuro deve aumentar o controlo sem quebrar a filosofia do produto.',
                    list: [
                        'Backup encriptado opcional',
                        'Suporte multi-moeda',
                        'Mais personalização para carteiras',
                        'Superfícies de integração para utilizadores avançados'
                    ]
                }
            ],
            principles: {
                title: 'Como o roadmap é decidido.',
                items: [
                    {
                        kicker: 'Privado',
                        title: 'Privacidade continua primeiro',
                        text: 'As novas funcionalidades não devem forçar dependências remotas num produto criado para controlo local.'
                    },
                    {
                        kicker: 'Simples',
                        title: 'A complexidade precisa de motivo',
                        text: 'Balance deve continuar legível e sustentável mesmo enquanto cresce.'
                    },
                    {
                        kicker: 'Aberto',
                        title: 'A direção continua visível',
                        text: 'Feedback, issues e contributos fazem parte da forma como o roadmap melhora.'
                    }
                ]
            },
            cta: {
                title: 'Queres influenciar o que vem a seguir?',
                copy: 'Issues, feedback e contributos moldam diretamente o roadmap.',
                primary: 'Contribuir no GitHub',
                secondary: 'Voltar ao download'
            }
        },
        contribute: {
            meta: {
                title: 'Contribuir para o Balance',
                description: 'Contribui para o Balance com código, issues, copy e feedback de produto.'
            },
            hero: {
                eyebrow: 'Open source · Comunidade · Produto',
                title: 'Contribuir',
                subtitle: 'Balance é construído em público.',
                support: 'Feedback sobre o roadmap, issues, copy e código ajudam a fazer o produto avançar.',
                primary: 'Abrir repositório',
                secondary: 'Ver roadmap'
            },
            cards: [
                {
                    kicker: 'Bug',
                    title: 'Reportar um problema',
                    text: 'Se algo não funciona, o contributo mais útil é um relatório preciso e reproduzível.',
                    cta: 'Reportar bug',
                    href: GITHUB_BUG_URL
                },
                {
                    kicker: 'Feature',
                    title: 'Sugerir uma melhoria',
                    text: 'Balance deve evoluir a partir de casos de uso reais, não de listas vagas de funcionalidades.',
                    cta: 'Sugerir feature',
                    href: GITHUB_FEATURE_URL
                },
                {
                    kicker: 'Docs',
                    title: 'Melhorar a linguagem do projeto',
                    text: 'Copy, explicação e enquadramento do produto importam tanto quanto a implementação.',
                    cta: 'Guia de contribuição',
                    href: GITHUB_CONTRIBUTING_URL
                },
                {
                    kicker: 'Código',
                    title: 'Contribuir para o codebase',
                    text: 'Se quiseres construir, refinar ou limpar algo, o repositório público é o ponto de partida.',
                    cta: 'Ir para GitHub',
                    href: GITHUB_URL
                }
            ],
            principles: {
                title: 'O que define um bom contributo.',
                items: [
                    {
                        kicker: 'Claro',
                        title: 'O específico vence o genérico',
                        text: 'Issues e propostas devem explicar o problema real do utilizador, não apenas uma ideia abstrata.'
                    },
                    {
                        kicker: 'Mínimo',
                        title: 'O produto deve manter a calma',
                        text: 'Balance deve ganhar clareza à medida que cresce, não ruído.'
                    },
                    {
                        kicker: 'Alinhado',
                        title: 'Respeita a filosofia',
                        text: 'Privacidade, controlo offline e simplicidade são restrições do produto, não slogans.'
                    }
                ]
            },
            cta: {
                title: 'Desenvolvimento aberto faz parte do produto.',
                copy: 'Se Balance te é útil, ajuda-o a ficar mais claro, mais simples e melhor.',
                primary: 'Contribuir no GitHub',
                secondary: 'Ver roadmap'
            }
        },
        contact: {
            meta: {
                title: 'Contacto Balance',
                description: 'Encontra o canal público certo para contactar o projeto Balance.'
            },
            hero: {
                eyebrow: 'Projeto público · Contacto · Suporte',
                title: 'Contacto',
                subtitle: 'A comunicação do projeto começa aqui.',
                support: 'Por agora, a forma mais clara de chegar ao Balance passa pelos canais públicos do projeto.',
                primary: 'Abrir issues',
                secondary: 'Ver roadmap'
            },
            cards: [
                {
                    kicker: 'Feedback',
                    title: 'Perguntas ou feedback de produto',
                    text: 'Usa o issue tracker público para perguntas gerais, notas de produto ou feedback de usabilidade.',
                    cta: 'Abrir issues',
                    href: GITHUB_ISSUES_URL
                },
                {
                    kicker: 'Bug',
                    title: 'Reportar um bug',
                    text: 'Se algo não funciona, envia um relatório preciso com passos, contexto e screenshots se ajudarem.',
                    cta: 'Template de bug report',
                    href: GITHUB_BUG_URL
                },
                {
                    kicker: 'Feature',
                    title: 'Pedir uma funcionalidade',
                    text: 'Se queres que Balance faça algo novo, começa pelo problema que estás a tentar resolver.',
                    cta: 'Template de feature request',
                    href: GITHUB_FEATURE_URL
                },
                {
                    kicker: 'Open source',
                    title: 'Contribuir diretamente',
                    text: 'Se quiseres ajudar com copy, documentação ou código, o repositório é o ponto de entrada certo.',
                    cta: 'Guia de contribuição',
                    href: GITHUB_CONTRIBUTING_URL
                }
            ],
            principles: {
                title: 'Porque o contacto é public-first.',
                items: [
                    {
                        kicker: 'Transparente',
                        title: 'As conversas úteis continuam visíveis',
                        text: 'Threads públicas tornam o contexto do produto mais fácil de seguir ao longo do tempo.'
                    },
                    {
                        kicker: 'Acionável',
                        title: 'Bons relatórios são mais fáceis de tratar',
                        text: 'Templates estruturados reduzem o vai-e-vem e mantêm os sinais claros.'
                    },
                    {
                        kicker: 'Alinhado',
                        title: 'O projeto mantém-se aberto',
                        text: 'Roadmap, feedback e contributos devem reforçar-se mutuamente.'
                    }
                ]
            }
        },
        privacy: {
            meta: {
                title: 'Privacidade do Balance',
                description: 'Resumo de privacidade do Balance: dados financeiros locais, sem sync bancária e gestão mínima do site.'
            },
            hero: {
                eyebrow: 'Privacidade · Local-first · Open source',
                title: 'Privacidade',
                subtitle: 'Privado por design.',
                support: 'Balance foi construído para que os teus dados financeiros fiquem no teu dispositivo.'
            },
            sections: [
                {
                    title: '1. O que o Balance foi concebido para fazer',
                    paragraphs: [
                        'Balance é um produto financeiro manual construído em torno de controlo, simplicidade e posse local dos dados.',
                        'A app não depende de ligações bancárias nem de um sistema de contas para guardar o teu histórico financeiro.'
                    ]
                },
                {
                    title: '2. Dados financeiros na app',
                    paragraphs: [
                        'A informação financeira que introduzes no Balance foi concebida para ficar no teu dispositivo.',
                        'Isto inclui saldos, carteiras, snapshots, valores de investimentos e a vista histórica que constróis ao longo do tempo.'
                    ],
                    list: [
                        'Sem camada de sync bancária',
                        'Sem servidor central para armazenar os teus dados financeiros pessoais',
                        'Sem necessidade de entregar credenciais a fornecedores terceiros'
                    ]
                },
                {
                    title: '3. Site e canais públicos',
                    paragraphs: [
                        'Se usares canais públicos do projeto como o GitHub, esses serviços tratam os dados de acordo com as suas próprias políticas.',
                        'Se comprares Balance Pro, pagamentos e gestão da subscrição são tratados pela Apple através da App Store.'
                    ]
                },
                {
                    title: '4. Controlo e segurança',
                    paragraphs: [
                        'O armazenamento local mantém o controlo mais perto de ti, e as proteções do sistema do teu dispositivo continuam importantes.',
                        'Continuas responsável pela exatidão da informação introduzida e pela segurança de acesso ao teu dispositivo.'
                    ],
                    list: [
                        'A segurança do dispositivo continua importante',
                        'Apagar a app remove os dados locais da app do dispositivo',
                        'O código open source torna o modelo de privacidade inspecionável'
                    ]
                },
                {
                    title: '5. Open source e transparência',
                    paragraphsHtml: [
                        `Balance é desenvolvido em público. Podes inspecionar o repositório no <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a> e acompanhar a evolução do produto.`,
                        'A transparência faz parte da abordagem do produto, não é uma camada extra de marketing.'
                    ]
                }
            ]
        },
        terms: {
            meta: {
                title: 'Termos do Balance',
                description: 'Resumo dos termos do Balance para uso do produto, subscrições e âmbito do projeto.'
            },
            hero: {
                eyebrow: 'Termos · Uso do produto · App Store',
                title: 'Termos',
                subtitle: 'Termos claros para um produto claro.',
                support: 'Balance é uma ferramenta de acompanhamento financeiro, não um serviço de aconselhamento financeiro.'
            },
            sections: [
                {
                    title: '1. Âmbito',
                    paragraphs: [
                        'Estes termos descrevem o uso geral do site, da app e das superfícies públicas do projeto Balance.',
                        'Ao usar o produto, concordas em utilizá-lo de forma responsável e dentro dos limites aqui descritos.'
                    ]
                },
                {
                    title: '2. Natureza do produto',
                    paragraphs: [
                        'Balance ajuda-te a acompanhar manualmente carteiras, saldos, snapshots e património ao longo do tempo.',
                        'Não fornece aconselhamento financeiro, recomendações de investimento nem gestão automática de portefólio.'
                    ]
                },
                {
                    title: '3. Os teus dados e a tua responsabilidade',
                    paragraphs: [
                        'És responsável pela informação que introduzes na app e pelas decisões que tomas com base nela.',
                        'Se um valor estiver desatualizado ou incorreto, Balance reflete o que foi introduzido manualmente.'
                    ]
                },
                {
                    title: '4. Planos Free e Pro',
                    paragraphs: [
                        'Balance inclui um plano gratuito e uma subscrição Pro opcional.',
                        'Se subscreveres através da App Store, faturação, renovação e cancelamento são tratados pela Apple segundo as regras da tua conta Apple.'
                    ]
                },
                {
                    title: '5. Disponibilidade e alterações',
                    paragraphs: [
                        'Balance é um produto em evolução. Funcionalidades, prioridades do roadmap e materiais públicos podem mudar ao longo do tempo.',
                        'Os itens do roadmap são indicativos e não devem ser interpretados como um compromisso vinculativo de entrega.'
                    ]
                },
                {
                    title: '6. Open source e serviços externos',
                    paragraphsHtml: [
                        `Parte do projeto é desenvolvida em público no <a href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a>. O uso do repositório também pode estar sujeito aos termos e políticas do GitHub.`,
                        'Quando plataformas de terceiros estão envolvidas, os respetivos termos aplicam-se aos serviços que prestam.'
                    ]
                }
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#language-select');
    const initialLanguage = resolveInitialLanguage();

    if (select) {
        select.value = initialLanguage;
        select.addEventListener('change', (event) => {
            applyLanguage(event.target.value);
        });
    }

    applyLanguage(initialLanguage);
});

function resolveInitialLanguage() {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && CONTENT[stored]) return stored;

    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('it')) return 'it';
    if (browserLanguage.startsWith('pt')) return 'pt';
    return 'en';
}

function applyLanguage(language) {
    const lang = CONTENT[language] ? language : 'en';
    const pageKey = document.body.dataset.page;
    const pageCopy = CONTENT[lang][pageKey];
    const commonCopy = CONTENT[lang].common;

    if (!pageCopy) return;

    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = LANGUAGE_META[lang].htmlLang;

    const select = document.querySelector('#language-select');
    if (select && select.value !== lang) {
        select.value = lang;
    }

    applyMeta(lang, pageCopy.meta);
    bindTextNodes(commonCopy, pageCopy);
    renderPage(pageKey, pageCopy);
}

function applyMeta(lang, meta) {
    if (!meta) return;

    document.title = meta.title;
    setAttr('meta[name="description"]', 'content', meta.description);
    setAttr('meta[property="og:title"]', 'content', meta.title);
    setAttr('meta[property="og:description"]', 'content', meta.description);
    setAttr('meta[name="twitter:title"]', 'content', meta.title);
    setAttr('meta[name="twitter:description"]', 'content', meta.description);
    setAttr('meta[property="og:locale"]', 'content', LANGUAGE_META[lang].ogLocale);
}

function bindTextNodes(commonCopy, pageCopy) {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const value = resolveScopedKey(node.dataset.i18n, commonCopy, pageCopy);
        if (typeof value === 'string') {
            node.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
        const value = resolveScopedKey(node.dataset.i18nHtml, commonCopy, pageCopy);
        if (typeof value === 'string') {
            node.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
        node.dataset.i18nAttr.split('|').forEach((mapping) => {
            const [attr, key] = mapping.split(':');
            const value = resolveScopedKey(key, commonCopy, pageCopy);
            if (attr && typeof value === 'string') {
                node.setAttribute(attr, value);
            }
        });
    });
}

function resolveScopedKey(key, commonCopy, pageCopy) {
    if (!key) return null;
    if (key.startsWith('common.')) {
        return getValue(commonCopy, key.replace(/^common\./, ''));
    }
    if (key.startsWith('page.')) {
        return getValue(pageCopy, key.replace(/^page\./, ''));
    }
    return getValue(pageCopy, key) ?? getValue(commonCopy, key);
}

function getValue(root, path) {
    return path.split('.').reduce((value, part) => (value && value[part] !== undefined ? value[part] : null), root);
}

function renderPage(pageKey, pageCopy) {
    if (pageKey === 'home') {
        renderTrustCards(pageCopy.trust);
        renderValueCards(pageCopy.value.items);
        renderChecklist('#philosophy-list', pageCopy.philosophy.points);
        renderSteps(pageCopy.steps.items);
        renderOpenCards(pageCopy.openProject.cards);
        renderPlans(pageCopy.plans);
        renderFaq(pageCopy.faq.items);
        return;
    }

    if (pageKey === 'roadmap') {
        renderRoadmapCards(pageCopy.cards);
        renderPrinciples(pageCopy.principles.items);
        return;
    }

    if (pageKey === 'contribute') {
        renderContributeCards(pageCopy.cards);
        renderPrinciples(pageCopy.principles.items);
        return;
    }

    if (pageKey === 'contact') {
        renderContactCards(pageCopy.cards);
        renderPrinciples(pageCopy.principles.items);
        return;
    }

    if (pageKey === 'privacy' || pageKey === 'terms') {
        renderLegalSections(pageCopy.sections);
    }
}

function renderTrustCards(items) {
    const root = document.querySelector('#home-trust');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface trust-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderValueCards(items) {
    const root = document.querySelector('#home-value');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface feature-card">
            <span class="icon-wrap">${item.icon}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderChecklist(selector, items) {
    const root = document.querySelector(selector);
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <li><i>•</i><span>${item}</span></li>
    `).join('');
}

function renderSteps(items) {
    const root = document.querySelector('#home-steps');
    if (!root) return;

    root.innerHTML = items.map((item, index) => `
        <article class="surface step-card">
            <span class="step-index">${index + 1}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderOpenCards(items) {
    const root = document.querySelector('#home-open-cards');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface roadmap-card">
            <span class="mini-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderPlans(plans) {
    setText('#plans-title', plans.title);
    setText('#plans-intro', plans.intro);
    setText('#plans-annual', plans.annual);
    setText('#plans-monthly', plans.monthly);

    setText('#plan-free-badge', plans.free.badge);
    setText('#plan-free-title', plans.free.title);
    setText('#plan-free-description', plans.free.description);
    setHtml('#plan-free-price', plans.free.priceHtml);
    setText('#plan-free-cta', plans.free.cta);
    renderSimpleList('#plan-free-list', plans.free.list);

    setText('#plan-pro-title', plans.pro.title);
    setText('#plan-pro-description', plans.pro.description);
    setText('#plan-pro-cta', plans.pro.cta);
    setText('#plan-pro-microcopy', plans.pro.microcopy);
    renderSimpleList('#plan-pro-list', plans.pro.list);

    const proBadge = document.querySelector('#plan-pro-badge');
    const proPill = document.querySelector('#plan-pro-pill');
    const proCaption = document.querySelector('#plan-pro-caption');
    const proPrice = document.querySelector('#plan-pro-price');
    const proChip = document.querySelector('#plan-pro-chip');
    const proAlt = document.querySelector('#plan-pro-alt');
    const proNote = document.querySelector('#plan-pro-note');

    if (proBadge) {
        proBadge.dataset.annual = plans.pro.badgeAnnual;
        proBadge.dataset.monthly = plans.pro.badgeMonthly;
    }
    if (proPill) {
        proPill.dataset.annual = plans.pro.pillAnnual;
        proPill.dataset.monthly = plans.pro.pillMonthly;
    }
    if (proCaption) {
        proCaption.dataset.annual = plans.pro.billing.annual.caption;
        proCaption.dataset.monthly = plans.pro.billing.monthly.caption;
    }
    if (proPrice) {
        proPrice.dataset.annual = plans.pro.billing.annual.priceHtml;
        proPrice.dataset.monthly = plans.pro.billing.monthly.priceHtml;
    }
    if (proChip) {
        proChip.dataset.annual = plans.pro.billing.annual.chip;
        proChip.dataset.monthly = plans.pro.billing.monthly.chip;
    }
    if (proAlt) {
        proAlt.dataset.annual = plans.pro.billing.annual.alt;
        proAlt.dataset.monthly = plans.pro.billing.monthly.alt;
    }
    if (proNote) {
        proNote.dataset.annual = plans.pro.billing.annual.note;
        proNote.dataset.monthly = plans.pro.billing.monthly.note;
    }

    if (window.BalanceV2 && typeof window.BalanceV2.refreshPricing === 'function') {
        window.BalanceV2.refreshPricing();
    }
}

function renderSimpleList(selector, items) {
    const root = document.querySelector(selector);
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <li><i>•</i><span>${item}</span></li>
    `).join('');
}

function renderFaq(items) {
    const root = document.querySelector('#faq-list');
    if (!root) return;

    root.innerHTML = items.map((item, index) => `
        <details class="surface faq-item"${index === 0 ? ' open' : ''}>
            <summary>${item.q}</summary>
            <p>${item.a}</p>
        </details>
    `).join('');
}

function renderRoadmapCards(items) {
    const root = document.querySelector('#roadmap-grid');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface roadmap-card">
            <span class="mini-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <ul>
                ${item.list.map((entry) => `<li><i>•</i><span>${entry}</span></li>`).join('')}
            </ul>
        </article>
    `).join('');
}

function renderPrinciples(items) {
    const root = document.querySelector('#principles-grid');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface principle-card">
            <span class="mini-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderContributeCards(items) {
    const root = document.querySelector('#contribute-grid');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface contribute-card">
            <span class="mini-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a class="btn btn-tertiary" href="${item.href}" target="_blank" rel="noreferrer">${item.cta}</a>
        </article>
    `).join('');
}

function renderContactCards(items) {
    const root = document.querySelector('#contact-grid');
    if (!root) return;

    root.innerHTML = items.map((item) => `
        <article class="surface contact-card">
            <span class="mini-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a class="btn btn-tertiary" href="${item.href}" target="_blank" rel="noreferrer">${item.cta}</a>
        </article>
    `).join('');
}

function renderLegalSections(items) {
    const root = document.querySelector('#legal-root');
    if (!root) return;

    root.innerHTML = items.map((section) => {
        const paragraphs = (section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
        const htmlParagraphs = (section.paragraphsHtml || []).map((paragraph) => `<p>${paragraph}</p>`).join('');
        const list = Array.isArray(section.list) && section.list.length > 0
            ? `<ul class="legal-list">${section.list.map((entry) => `<li><i>•</i><span>${entry}</span></li>`).join('')}</ul>`
            : '';

        return `
            <section class="legal-section">
                <h2>${section.title}</h2>
                ${paragraphs}
                ${htmlParagraphs}
                ${list}
            </section>
        `;
    }).join('');
}

function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
}

function setHtml(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.innerHTML = value;
}

function setAttr(selector, attr, value) {
    const node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
}

window.BalanceV2Copy = {
    APP_STORE_URL,
    GITHUB_URL
};
