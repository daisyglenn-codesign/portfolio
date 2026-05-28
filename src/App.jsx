function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_transparent_40%),linear-gradient(180deg,#0f172a_0%,#020617_100%)] text-slate-100">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur px-6 py-4">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
                <a href="#about" className="text-xl font-semibold tracking-tight text-yellow-400">Daisy Glenn Cometa</a>
                <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                    <a href="#about" className="transition hover:text-white">About</a>
                    <a href="#skills" className="transition hover:text-white">Skills</a>
                    <a href="#projects" className="transition hover:text-white">Projects</a>
                    <a href="#design" className="transition hover:text-white">Design</a>
                    <a href="#contact" className="transition hover:text-white">Contact</a>
                </nav>
                <a
                    href="./Daisy_Glenn_Cometa_Resume.pdf"
                    download="Daisy_Glenn_Cometa_Resume.pdf"
                    className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-brandDark"
                >
                    Download CV
                </a>
            </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10 lg:py-16">
            <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-6">
                    <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">IT Solutions Specialist • Full-Stack Developer • Graphic Designer</p>
                    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Hi, I’m Daisy Glenn!</h1>
                    <p className="max-w-2xl text-slate-300 sm:text-lg">I'm a Full-Stack Developer with 10+ years of experience specializing in PHP-based full-stack development and IT solutions. Expert in the end-to-end lifecycle of web systems and process automation. Currently expanding technical proficiency into Java, Kotlin, and Python to bring multi-language versatility to enterprise-level digital transformation projects.</p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandDark">View Work</a>
                        <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-brand hover:text-white">Let’s Talk</a>
                    </div>
                </div>
                <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/30">
                    <div className="absolute inset-x-0 top-4 -z-10 h-48 bg-brand/20 blur-3xl" />
                    <img src="./profile_daisyglenn.jpg" alt="profile" className="h-full w-full rounded-[1.75rem] object-cover object-center shadow-2xl shadow-black/40" />
                    <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-950/80/90 p-5 backdrop-blur lg:opacity-100 lg:backdrop-blur-none">
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Personal Profile</p>
                    </div>
                </div>
            </section>

            <section id="skills" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-brand">Skills</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">Tech Tools I build with</h2>
                    </div>
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">Frontend</p>
                        <p className="mt-3 text-slate-300">HTML, CSS, JavaScript, React, Tailwind CSS, Vite, Bootstrap, Jetpack Compose</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">Backend</p>
                        <p className="mt-3 text-slate-300">PHP, Laravel, WordPress, Java, Spring Boot, Thymeleaf, Kotlin, Python, Flask, C#</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">Database</p>
                        <p className="mt-3 text-slate-300">MariaDB, MySQL, PostgreSQL, MSSQL, SAP Crystal Reports</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">DevOps & Cloud</p>
                        <p className="mt-3 text-slate-300">AWS Cloud, cPanel, GitHub, Android Console, Maven, Gradle, Railway</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">AI Tools</p>
                        <p className="mt-3 text-slate-300">Google AI Studio, Gemini, Copilot, Claude</p>
                    </article>
                    <article className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">Design & Multimedia</p>
                        <p className="mt-3 text-slate-300">Figma, Adobe Photoshop, Adobe Illustrator, Canva, yEd</p>
                    </article>
                </div>
            </section>

            <section id="projects" className="mt-24">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-brand">Dev Projects</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">A selection of my past work</h2>
                    </div>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <a href="https://github.com/daisyglenn-codesign/bank-o-rama" target="_blank" rel="noopener noreferrer" className="block">
                        <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90 cursor-pointer h-full">
                            <img src="./project_bankorama.jpg" alt="Bank-O-Rama App" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div className="p-6">
                                <div className="flex items-center justify-between text-slate-400">
                                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Personal</span>
                                    <span className="text-xs">Java, Spring Boot, Thymeleaf, Bootstrap</span>
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-white flex items-center gap-2">
                                    Bank-O-Rama App
                                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h3>
                                <p className="mt-4 text-slate-300">A simple Java-based banking application built for training purposes and deployed on Railway.</p>
                            </div>
                        </article>
                    </a>
                    <a href="https://techieowlslibrary.com/" target="_blank" rel="noopener noreferrer" className="block">
                        <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90 cursor-pointer h-full">
                            <img src="./project_tol.jpg" alt="Techie Owls Library Website" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div className="p-6">
                                <div className="flex items-center justify-between text-slate-400">
                                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                    <span className="text-xs">HTML, CSS, Bootstrap</span>
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-white flex items-center gap-2">
                                    Techie Owls Library Website
                                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h3>
                                <p className="mt-4 text-slate-300">Static website for Techie Owls Library. To be converted into a dynamic web application using Python and React technologies.</p>
                            </div>
                        </article>
                    </a>
                    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./project_seabeaconer.jpg" alt="Sea Beaconer Website" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                <span className="text-xs">PHP, Laravel, React, Python</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Sea Beaconer Website</h3>
                            <p className="mt-4 text-slate-300">Modernizing Sea Beaconer Marine Services' website into a scalable full-stack web application.</p>
                        </div>
                    </article>
                    <a href="https://play.google.com/store/apps/dev?id=7560396304167482488" target="_blank" rel="noopener noreferrer" className="block">
                        <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90 cursor-pointer h-full">
                            <img src="./project_seabeaconerapps.jpg" alt="Sea Beaconer Apps" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div className="p-6">
                                <div className="flex items-center justify-between text-slate-400">
                                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                    <span className="text-xs">Kotlin, Jetpack Compose, Room</span>
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-white flex items-center gap-2">
                                    Sea Beaconer Review Apps
                                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h3>
                                <p className="mt-4 text-slate-300">Rebuilding using modern tech stacks and clean architecture, replacing the legacy Java/XML codebase for a better performance, and a refreshing look.</p>
                            </div>
                        </article>
                    </a>
                    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./project_seabeaconerebook.jpg" alt="Sea Beaconer E-Books" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                <span className="text-xs">Kotlin, Jetpack Compose, Room</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Sea Beaconer E-Books</h3>
                            <p className="mt-4 text-slate-300">Developing digital e-book platforms for Sea Beaconer Marine Services, providing an immersive reading and review experience for their students.</p>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./project_elosofterp.jpg" alt="Elosoft ERP" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                <span className="text-xs">PHP, jQuery, Bootstrap, MySQL</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Elosoft ERP</h3>
                            <p className="mt-4 text-slate-300">Developed a comprehensive Enterprise Resource Planning (ERP) solution as one of Elosoft's flagship products.</p>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./project_trmfcompre.jpg" alt="TRMF Compre System" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                <span className="text-xs">Symfony, PHP, Bootstrap, MySQL</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">TRMF Compre System</h3>
                            <p className="mt-4 text-slate-300">Developed a comprehensive training resources management solution as one of TRMF's flagship products. Added a dynamic grading system in accordance with educational standards for tracking student progress.</p>
                        </div>
                    </article>
                    <a href="https://www.peerprc.com/" target="_blank" rel="noopener noreferrer" className="block">
                        <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90 cursor-pointer h-full">
                            <img src="./project_peer.jpg" alt="PEER Learning Website" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div className="p-6">
                                <div className="flex items-center justify-between text-slate-400">
                                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                    <span className="text-xs">Bootstrap, PHP, MySQL</span>
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-white flex items-center gap-2">
                                    PEER Learning Website
                                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h3>
                                <p className="mt-4 text-slate-300">Built a dynamic website for PEER Learning, a review center for teaching educators.</p>
                            </div>
                        </article>
                    </a>
                    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./project_mmlchris.jpg" alt="MMLC HRIS" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Commercial</span>
                                <span className="text-xs">PHP, jQuery, MariaDB</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">MMLC HRIS</h3>
                            <p className="mt-4 text-slate-300">Designed and implemented a Human Resource Information System (HRIS) for Maritime Medical and Laboratory Clinic, streamlining employee management processes that is also connected with their Biometric machine.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section id="design" className="mt-24">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-brand">Creative Work</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">A glimpse of my creative side</h2>
                    </div>
                </div>
                <div className="mt-10 flex gap-6 overflow-x-auto pb-4 pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-slate-900/50">
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_tolbrand.jpg" alt="TOL Logo" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Branding</span>
                                <span className="text-xs">Photoshop, Illustrator</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Techie Owls Library</h3>
                            <p className="mt-4 text-slate-300">Branding design, logo and icon, for an education and tech-focused company Techie Owls Library.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_sbrassets.jpg" alt="SBR Marine" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">UI/UX Assets</span>
                                <span className="text-xs">Photoshop</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">SBR Marine</h3>
                            <p className="mt-4 text-slate-300">200+ UI/UX assets embedded on mobile review apps for review center SBR Marine.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_seabeaconer.jpg" alt="Sea Beaconer Logo" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Logo</span>
                                <span className="text-xs">Photoshop, Gemini</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Sea Beaconer</h3>
                            <p className="mt-4 text-slate-300">Logo design collaboration for a review center Sea Beaconer Marine Services.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_seabeaconerposter.jpg" alt="Sea Beaconer Poster" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Poster</span>
                                <span className="text-xs">Canva</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Sea Beaconer</h3>
                            <p className="mt-4 text-slate-300">Poster design for a review center Sea Beaconer Marine Services.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_vertexmcs.jpg" alt="Vertex MCS Logo" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Logo</span>
                                <span className="text-xs">Photoshop, Illustrator</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Vertex MCS</h3>
                            <p className="mt-4 text-slate-300">Logo design for a Vertex Holdings PH maritime subsidiary.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_vertexlts.jpg" alt="Vertex LTS Logo" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Logo</span>
                                <span className="text-xs">Photoshop, Illustrator</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Vertex LTS</h3>
                            <p className="mt-4 text-slate-300">Logo design for a Vertex Holdings PH maritime subsidiary.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_vertexpms.jpg" alt="Vertex PMS Logo" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Logo</span>
                                <span className="text-xs">Photoshop, Illustrator</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Vertex PMS</h3>
                            <p className="mt-4 text-slate-300">Logo design for a Vertex Holdings PH maritime subsidiary.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_vertexsa.jpg" alt="Vertex SA Logo" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Logo</span>
                                <span className="text-xs">Photoshop, Illustrator</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">Vertex SA</h3>
                            <p className="mt-4 text-slate-300">Logo design for a Vertex Holdings PH maritime subsidiary.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_ipoptixcc.jpg" alt="IP-Optix CC" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Calling Card</span>
                                <span className="text-xs">Photoshop</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">IP-Optix Technologies</h3>
                            <p className="mt-4 text-slate-300">Calling card design for IP-Optix Technologies, a networking, biometrics and software system company.</p>
                        </div>
                    </article>
                    <article className="group min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-brandDark hover:bg-slate-900/90">
                        <img src="./design_ipoptixflyer.jpg" alt="IP-Optix Flyer" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="p-6">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em]">Flyer</span>
                                <span className="text-xs">Photoshop</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-semibold text-white">IP-Optix Technologies</h3>
                            <p className="mt-4 text-slate-300">Flyer design for IP-Optix Technologies, a networking, biometrics and software system company.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
                <div className="md:flex md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-brand">Contact</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">Let’s build something together</h2>
                    </div>
                    <a href="mailto:daisyglenn.codesign@gmail.com" className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandDark md:mt-0">Email Me</a>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="mt-3 text-lg font-semibold text-white">daisyglenn.codesign@gmail.com</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="mt-3 text-lg font-semibold text-white">+63 960 809 9053</p>
                    </div>
                </div>
                <div className="mt-10 rounded-3xl bg-brand/10 p-6 text-slate-200">
                    <p className="text-sm uppercase tracking-[0.35em] text-brand">Extra</p>
                    <div className="mt-3 text-slate-300 flex items-center gap-4">
                        <a href="https://www.credly.com/badges/c90bafc2-7558-4b8a-b3ce-efefebe7d2a8/public_url" target="_blank" rel="noopener noreferrer">
                            <img src="./aws-cloud-quest-cloud-practitioner-training-badge.png" alt="AWS Cloud Practitioner Training Badge" title="AWS Cloud Practitioner Training Badge" className="h-20 w-20 rounded-full object-cover" />
                        </a>
                        <a href="https://github.com/daisyglenn-codesign" target="_blank" rel="noopener noreferrer">
                            <img src="./github.png" alt="GitHub Profile" title="GitHub Profile" className="h-20 w-20 rounded-full object-cover" />
                        </a>
                        <a href="https://www.linkedin.com/in/daisyglenn/" target="_blank" rel="noopener noreferrer">
                            <img src="./linkedin.png" alt="LinkedIn Profile" title="LinkedIn Profile" className="h-20 w-20 rounded-full object-cover" />
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80 py-6 text-center text-sm text-slate-500">
            <p>© 2026 Daisy Glenn | Web Portfolio. Built with React, Tailwind CSS, and Vite.</p>
        </footer>
    </div>
  )
}

export default App

