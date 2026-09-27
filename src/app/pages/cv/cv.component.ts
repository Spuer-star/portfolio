import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="cv">
      <div class="container">
        <!-- Top folio bar -->
        <header class="folio">
          <a routerLink="/" class="back-link">
            <span class="back-arrow">←</span>
            <span class="back-text">return to archive</span>
          </a>
          <span class="folio-rule"></span>
          <span class="folio-mono">CURRICULUM VITÆ · APR MMXXVI</span>
        </header>

        <!-- Masthead -->
        <header class="masthead">
          <div class="masthead-rule">
            <span class="rule-tag">APPENDIX</span>
          </div>
          <h1 class="cv-title">
            <em>The</em> Author<span class="period">.</span>
          </h1>
          <p class="cv-subtitle">
            Akira Eloman <span class="sep">·</span> <em>Staff software engineer</em>
            <span class="sep">·</span> Remote
          </p>
        </header>

        <!-- Statement -->
        <section class="statement-block">
          <div class="statement-meta">
            <span class="meta-num">i.</span>
            <span class="meta-label">statement</span>
          </div>
          <p class="statement">
            <em>S</em>easoned staff software engineer with
            <strong>thirteen years of experience</strong>, specialising in
            designing and implementing robust search solutions for
            healthcare and financial systems. Proficient in
            <strong>Elasticsearch / OpenSearch</strong>, indexing strategies,
            and relevance tuning — enhancing data retrieval accuracy by 28%.
            Adept at bridging product requirements with technical
            architecture, demonstrated by
            <strong>reducing zero-result rates by 15%</strong> in health
            tech environments.
          </p>
        </section>

        <!-- Experience -->
        <section class="section-block">
          <div class="section-rule">
            <span class="rule-tag">CHAPTER ONE — ENGAGEMENTS</span>
          </div>
          <h2 class="section-title">Experience</h2>

          <ol class="roles">
            @for (role of roles; track role.company + role.title; let i = $index) {
              <li class="role" [class.role--early]="role.early">
                <aside class="role-numeral">
                  <span class="numeral-prefix">№</span>
                  <span class="numeral-digit">{{ pad(roles.length - i) }}</span>
                </aside>

                <div class="role-content">
                  <header class="role-header">
                    <h3 class="role-title">{{ role.title }}</h3>
                    <p class="role-company">
                      <em>at</em> {{ role.company }}
                    </p>
                    <div class="role-meta">
                      <span class="role-period">{{ role.period }}</span>
                    </div>
                  </header>

                  @if (role.context) {
                    <p class="role-context">{{ role.context }}</p>
                  }

                  <ul class="role-bullets">
                    @for (bullet of role.bullets; track bullet; let b = $index) {
                      <li class="bullet">
                        <span class="bullet-num">{{ pad(b + 1) }}</span>
                        <span class="bullet-text">{{ bullet }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </li>
            }
          </ol>
        </section>

        <!-- Skills -->
        <section class="section-block">
          <div class="section-rule">
            <span class="rule-tag">CHAPTER TWO — CRAFT</span>
          </div>
          <h2 class="section-title">Skills</h2>

          <div class="skills-grid">
            @for (group of skillGroups; track group.name; let g = $index) {
              <div class="skill-block">
                <div class="skill-heading">
                  <span class="meta-num">{{ romans[g] }}.</span>
                  <span class="meta-label">{{ group.name }}</span>
                </div>
                <ul class="skill-pills">
                  @for (skill of group.skills; track skill) {
                    <li class="pill">{{ skill }}</li>
                  }
                </ul>
              </div>
            }
          </div>
        </section>

        <!-- Selected Works callout -->
        <section class="section-block">
          <div class="section-rule">
            <span class="rule-tag">CHAPTER THREE — SELECTED WORKS</span>
          </div>
          <h2 class="section-title">Recent Builds</h2>

          <p class="works-blurb">
            Ten shipped projects spanning AI SaaS, fintech platforms,
            ML pipelines, mobile apps, developer tooling, and consultancy services.
            <a routerLink="/" class="works-link">
              <span class="works-arrow">→</span>
              <span>see Chapter One for the live archive</span>
            </a>
          </p>
        </section>

        <!-- Education -->
        <section class="section-block">
          <div class="section-rule">
            <span class="rule-tag">CHAPTER FOUR — STUDIES</span>
          </div>
          <h2 class="section-title">Education</h2>

          <div class="education">
            <span class="degree">Master of Computer Science</span>
            <span class="university">
              <em>University of North Texas</em>
              <span class="dot">·</span>
              MMXV — MMXVIII
            </span>
          </div>
        </section>

        <!-- Languages -->
        <section class="section-block">
          <div class="section-rule">
            <span class="rule-tag">CHAPTER FIVE — TONGUES</span>
          </div>
          <h2 class="section-title">Languages</h2>

          <ul class="languages">
            @for (lang of languages; track lang.name; let i = $index) {
              <li class="lang">
                <span class="lang-num">{{ pad(i + 1) }}</span>
                <span class="lang-name">{{ lang.name }}</span>
                <span class="lang-level"><em>{{ lang.level }}</em></span>
              </li>
            }
          </ul>
        </section>

        <!-- Closing -->
        <footer class="closing">
          <span class="mono">— end of appendix —</span>
        </footer>
      </div>
    </article>
  `,
  styles: `
    :host {
      display: block;
    }

    .cv {
      background: var(--ink);
      min-height: 100vh;
      padding: 6rem 0 4rem;
      position: relative;
      z-index: 2;
    }

    /* Top folio */
    .folio {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--text-mute);
      margin-bottom: 4rem;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text);
      transition: color 0.3s;
    }

    .back-link:hover {
      color: var(--ember);
    }

    .back-arrow {
      color: var(--ember);
      font-size: 0.95rem;
    }

    .folio-rule {
      flex: 1;
      height: 1px;
      background: var(--rule);
    }

    .folio-mono {
      white-space: nowrap;
    }

    /* Masthead */
    .masthead {
      max-width: 780px;
      margin-bottom: 5rem;
    }

    .masthead-rule {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .masthead-rule::before {
      content: '';
      flex: 0 0 60px;
      height: 1px;
      background: var(--ember);
    }

    .masthead-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--rule);
    }

    .rule-tag {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.25em;
      color: var(--brass);
    }

    .cv-title {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: clamp(3rem, 8vw, 6rem);
      line-height: 0.95;
      font-weight: 400;
      color: var(--paper);
      letter-spacing: -0.04em;
      margin-bottom: 1.5rem;
    }

    .cv-title em {
      font-style: italic;
      font-weight: 200;
      color: var(--text-mute);
      font-size: 0.7em;
      margin-right: 0.25rem;
    }

    .cv-title .period {
      color: var(--ember);
    }

    .cv-subtitle {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.15rem;
      color: var(--text);
      line-height: 1.6;
    }

    .cv-subtitle em {
      color: var(--paper);
      font-weight: 500;
    }

    .sep {
      color: var(--rule-light);
      margin: 0 0.4rem;
      font-style: normal;
    }

    /* Statement block */
    .statement-block {
      margin-bottom: 6rem;
      max-width: 780px;
      padding-top: 2rem;
      border-top: 1px solid var(--rule);
    }

    .statement-meta {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .meta-num {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 0.95rem;
      color: var(--brass);
    }

    .meta-label {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--text-mute);
    }

    .statement {
      font-family: var(--font-display);
      font-size: 1.2rem;
      line-height: 1.75;
      color: var(--text);
      max-width: 65ch;
    }

    .statement em:first-of-type {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: 3.5em;
      float: left;
      line-height: 0.85;
      margin-right: 0.6rem;
      margin-top: 0.4rem;
      color: var(--ember);
      font-weight: 400;
      font-style: italic;
    }

    .statement strong {
      color: var(--paper);
      font-weight: 500;
      font-style: italic;
    }

    /* Section blocks */
    .section-block {
      margin-bottom: 6rem;
    }

    .section-rule {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .section-rule::before {
      content: '';
      flex: 0 0 30px;
      height: 1px;
      background: var(--ember);
    }

    .section-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--rule);
    }

    .section-title {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      line-height: 1;
      font-weight: 400;
      color: var(--paper);
      letter-spacing: -0.03em;
      margin-bottom: 3rem;
    }

    /* Roles */
    .roles {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }

    .role {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 2.5rem;
      align-items: start;
      padding-top: 2.5rem;
      border-top: 1px solid var(--rule);
    }

    .role:first-child {
      padding-top: 0;
      border-top: none;
    }

    /* Early career — small gap before, slightly muted treatment */
    .role--early {
      margin-top: 2.5rem;
      padding-top: 3.5rem;
    }

    .role--early::before {
      content: '· · ·';
      display: block;
      font-family: var(--font-mono);
      letter-spacing: 0.5em;
      color: var(--rule-light);
      text-align: center;
      grid-column: 1 / -1;
      margin-bottom: 2rem;
      margin-top: -2rem;
    }

    .role--early .numeral-digit {
      color: var(--brass-mute);
    }

    .role--early .role-company {
      color: var(--brass-mute);
    }

    .role-numeral {
      display: flex;
      align-items: flex-start;
      gap: 0.4rem;
      line-height: 0.85;
    }

    .numeral-prefix {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.25rem;
      color: var(--brass);
      font-weight: 200;
      margin-top: 0.5rem;
    }

    .numeral-digit {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: clamp(3.5rem, 6vw, 5rem);
      font-weight: 200;
      color: var(--ember);
      letter-spacing: -0.05em;
      line-height: 1;
    }

    .role-content {
      max-width: 720px;
    }

    .role-header {
      margin-bottom: 1rem;
    }

    .role-title {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: clamp(1.5rem, 2.5vw, 2rem);
      font-weight: 400;
      line-height: 1.1;
      color: var(--paper);
      letter-spacing: -0.02em;
      margin-bottom: 0.4rem;
    }

    .role-company {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.1rem;
      color: var(--ember);
      margin-bottom: 0.5rem;
    }

    .role-company em {
      color: var(--text-mute);
      font-weight: 200;
      margin-right: 0.25rem;
    }

    .role-meta {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-mute);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .dot {
      color: var(--rule-light);
    }

    .role-context {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1rem;
      color: var(--text);
      line-height: 1.6;
      margin: 1.25rem 0;
      padding: 1rem 1.25rem;
      border-left: 2px solid var(--brass);
      background: linear-gradient(90deg, var(--ink-warm), transparent);
    }

    .role-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-top: 1.25rem;
    }

    .bullet {
      display: grid;
      grid-template-columns: 2.25rem 1fr;
      gap: 0.75rem;
      font-family: var(--font-display);
      font-size: 1rem;
      line-height: 1.6;
      color: var(--text);
    }

    .bullet-num {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--brass-mute);
      padding-top: 0.2rem;
      letter-spacing: 0.1em;
    }

    /* Skills */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
    }

    .skill-block {
      display: flex;
      flex-direction: column;
    }

    .skill-heading {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--rule);
      margin-bottom: 1rem;
    }

    .skill-pills {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.6rem;
    }

    .pill {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.05em;
      padding: 0.35rem 0.7rem;
      color: var(--text);
      border: 1px solid var(--rule-light);
      background: var(--ink-warm);
      transition: all 0.2s;
    }

    .pill:hover {
      color: var(--ember);
      border-color: var(--ember);
    }

    /* Education */
    .education {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem 0;
    }

    .degree {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 400;
      color: var(--paper);
      letter-spacing: -0.02em;
    }

    .university {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.05rem;
      color: var(--text-mute);
    }

    .university em {
      color: var(--ember);
      font-style: italic;
      font-weight: 500;
    }

    /* Selected Works */
    .works-blurb {
      font-family: var(--font-display);
      font-size: 1.15rem;
      line-height: 1.7;
      color: var(--text);
      max-width: 65ch;
    }

    .works-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      color: var(--ember);
      text-transform: uppercase;
      transition: gap 0.3s;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid transparent;
      width: fit-content;
    }

    .works-link:hover {
      gap: 0.85rem;
      border-color: var(--ember);
    }

    .works-arrow {
      font-size: 1.1rem;
    }

    /* Languages */
    .languages {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .lang {
      display: grid;
      grid-template-columns: 2.5rem 1fr auto;
      gap: 1rem;
      align-items: baseline;
      padding: 0.75rem 0;
      border-bottom: 1px dashed var(--rule);
    }

    .lang:last-child {
      border-bottom: none;
    }

    .lang-num {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--brass-mute);
      letter-spacing: 0.1em;
    }

    .lang-name {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 400;
      color: var(--paper);
    }

    .lang-level {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1rem;
      color: var(--text-mute);
    }

    .lang-level em {
      color: var(--ember);
    }

    /* Closing */
    .closing {
      text-align: center;
      margin-top: 6rem;
      padding-top: 3rem;
      border-top: 1px solid var(--rule);
    }

    .closing .mono {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--text-faint);
    }

    /* Responsive */
    @media (max-width: 900px) {
      .role {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }

      .role-numeral {
        align-items: flex-end;
      }

      .numeral-digit {
        font-size: 3rem;
      }
    }

    @media (max-width: 640px) {
      .cv {
        padding: 5rem 0 3rem;
      }

      .folio {
        margin-bottom: 2.5rem;
        font-size: 0.6rem;
        gap: 0.75rem;
      }

      .folio-rule {
        display: none;
      }

      .masthead {
        margin-bottom: 3.5rem;
      }

      .masthead-rule::before {
        flex: 0 0 30px;
      }

      .rule-tag {
        font-size: 0.6rem;
      }

      .statement-block {
        margin-bottom: 4rem;
      }

      .statement {
        font-size: 1.05rem;
      }

      .statement em:first-of-type {
        font-size: 2.5em;
      }

      .section-block {
        margin-bottom: 4rem;
      }

      .roles {
        gap: 2.5rem;
      }

      .role {
        padding-top: 2rem;
      }

      .skills-grid {
        gap: 1.75rem;
      }

      .closing {
        margin-top: 4rem;
        padding-top: 2rem;
      }
    }
  `,
})
export class CvComponent {
  pad(n) {
    return n.toString().padStart(2, '0');
  }

  romans = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];

  roles = [
    {
      title: 'Senior Search Architect',
      company: 'PNC',
      period: 'Oct 2023 – Present',
      context: '',
      bullets: [
        'Spearheaded the design and management of OpenSearch clusters, improving data indexing speed by 35%',
        'Developed and maintained search APIs to enhance data querying across financial products',
        'Implemented relevance tuning algorithms, achieving a 20% increase in user satisfaction scores',
        'Led the migration of search architecture to AWS, optimizing cluster performance and reducing operational costs by 18%',
        'Collaborated with cross-functional teams to design search solutions for new financial services verticals',
        'Created custom dashboards for search performance analytics using OpenSearch Dashboards and custom tools',
        'Authored technical design documents and RFCs to set direction for future search enhancements',
        'Mentored junior engineers on search system best practices and optimization techniques',
        'Managed incident response for search-related issues, improving resolution times by 30%',
        'Utilized Claude Code to automate relevance judgment and indexing tasks, enhancing efficiency by 25%',
      ],
    },
    {
      title: 'Lead Software Engineer',
      company: 'T-Mobile',
      period: 'Jul 2022 – Sep 2023',
      context: '',
      bullets: [
        'Engaged with executive stakeholders, translating technical search components into business outcomes',
        'Led enhancements to Elasticsearch clusters, improving search relevance for customer support tools by 30%',
        'Orchestrated a seamless upgrade from Elasticsearch to OpenSearch, reducing query costs by 12%',
        'Streamlined ingestion pipelines for real-time index updates, cutting data freshness lag by 40%',
        'Partnered with telemetry teams to elevate search observability using custom logging frameworks',
        'Authored training materials on search technologies, facilitating team-wide educational workshops',
        'Drove innovations in search API architecture, enabling scalable data access across platforms',
        'Optimized typo tolerance and query parsing, raising search fallback success by 16%',
        'Piloted LLM-based semantic search experiments, balancing with traditional retrieval methods',
        'Developed synonymous term handling systems to elevate user search experience',
        'Integrated geo-aware ranking algorithms, enhancing regional data retrieval precision',
        'Managed incident analysis for search, achieving root-cause resolution within established SLOs',
      ],
    },
    {
      title: 'Search Technology Specialist',
      company: 'UCSF Health',
      period: 'Apr 2020 – Jun 2022',
      context: '',
      bullets: [
        'Overhauled the search architecture for medical record systems using Elasticsearch, improving clinician data access speed by 20%',
        'Enhanced search relevance by deploying ML models for personalized result rankings',
        'Implemented geo-aware searches, greatly improving local data retrieval for patients and providers',
        'Launched new search indexing pipelines that cut data refresh times by 50%',
        'Developed internal search dashboards, enabling better oversight on query success and data accuracy',
        'Collaborated on search anomaly detection tools, reducing data inconsistency occurrences by 23%',
        'Designed and executed scalability plans for search systems to accommodate expanded clinical operations',
        'Engaged in cross-functional solution exploration for advanced search functionalities',
        'Increased medical record retrieval accuracy through enhanced query parsing and synonyms handling',
        'Defined and tracked KPIs for search efficiency, guiding performance optimizations',
        'Directed technical workshops and seminars for staff on search system improvements',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Principal Financial Group',
      period: 'Jan 2018 – Mar 2020',
      context: '',
      bullets: [
        'Engineered custom search solutions within financial trading platforms, optimizing index queries by 40%',
        'Integrated dynamic boosting algorithms for enhancing search results precision in trading applications',
        'Advanced cross-platform query capabilities, significantly increasing search throughput',
        'Instrumented ingestion pipelines that improved data processing efficiency by 27%',
        'Crafted search data replication strategies, minimizing downtime during peak trading hours',
        'Coordinated with multiple departments to refine search UX/UI, elevating user satisfaction metrics',
        'Pioneered fault-tolerant search architecture, improving service resilience under load',
        'Participated in regular knowledge-sharing sessions, promoting engineering best practices',
        'Maintained rigorous documentation and technical guides for search process optimization',
        'Implemented automated alerting for search anomalies, improving response to inconsistencies',
        'Developed strategies for upgrading search infrastructure with minimal disruption',
      ],
    },
    {
      title: 'Junior Software Engineer',
      company: 'Wissen Technology',
      period: 'May 2013 – Oct 2015',
      context: '',
      bullets: [
        'Assisted in the development of search algorithms for data retrieval systems, enhancing search throughput by 15%',
        'Collaborated on the initial implementation of Elasticsearch across new projects',
        'Participated in developing small-scale data pipeline solutions for ETL processes',
        'Supported the integration of search features into client-facing applications, increasing usability',
        'Assisted in troubleshooting and debugging Elasticsearch configurations to ensure high availability',
        'Contributed to the design and execution of user query interfaces for improved interaction',
        'Involved in basic performance monitoring strategies and adjustments for search systems',
        'Documented best practices and technical strategies for search development teams',
        'Gained insights into search indexing methodologies and practical optimizations',
        'Regularly updated team progress in weekly technical meetings to coordinate efforts',
        'Provided technical assistance in upgrading legacy systems to newer search technologies',
      ],
    },
  ];

  skillGroups = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'SQL'],
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'GraphQL', 'Elasticsearch', 'OpenSearch', 'TensorFlow'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git CI/CD', 'Linux'],
    },
    {
      name: 'Databases & Data',
      skills: ['PostgreSQL', 'MySQL', 'Neo4j', 'MongoDB', 'Apache Kafka', 'Redis'],
    },
    {
      name: 'Tools & Platforms',
      skills: [
        'Claude Code',
        'OpenSearch Dashboards',
        'Custom Relevance Tooling',
        'Search Analytics',
        'Index Management',
        'Observability',
      ],
    },
    {
      name: 'Soft Skills',
      skills: [
        'Cross-functional collaboration',
        'Stakeholder communication',
        'Technical mentorship',
        'Problem-solving',
        'Adaptability',
        'Resourcefulness',
      ],
    },
  ];

  languages = [
    { name: 'English', level: 'Native' },
  ];
}
