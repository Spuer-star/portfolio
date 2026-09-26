import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ExperienceRole {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section experience">
      <div class="container">
        <header class="masthead">
          <div class="masthead-rule">
            <span class="rule-tag">CHAPTER TWO · ENGAGEMENTS</span>
          </div>
          <h2 class="archive-title">
            <em>Work</em> Experience
          </h2>
          <p class="archive-subtitle">
            Three chapters as a Staff Full Stack Engineer — building
            AI-powered products across fintech and banking.
          </p>
        </header>

        <ol class="roles">
          @for (role of roles; track role.company; let i = $index) {
            <li class="role">
              <aside class="role-numeral">
                <span class="numeral-prefix">№</span>
                <span class="numeral-digit">{{ pad(i + 1) }}</span>
              </aside>

              <div class="role-body">
                <header class="role-header">
                  <div class="role-heading">
                    <h3 class="role-title">{{ role.title }}</h3>
                    <p class="role-company">
                      <em>at</em> {{ role.company }}
                    </p>
                  </div>
                  <div class="role-meta">
                    <span class="role-loc">{{ role.location }}</span>
                    <span class="dot">·</span>
                    <span class="role-period">{{ role.period }}</span>
                  </div>
                </header>
                <p class="role-summary">{{ role.summary }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .experience {
      background: var(--ink);
    }

    .masthead {
      margin-bottom: 5rem;
      max-width: 780px;
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

    .archive-title {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: clamp(3rem, 8vw, 6rem);
      line-height: 0.95;
      font-weight: 400;
      color: var(--paper);
      letter-spacing: -0.04em;
      margin-bottom: 1.5rem;
    }

    .archive-title em {
      font-style: italic;
      font-weight: 200;
      color: var(--text-mute);
      font-size: 0.7em;
      margin-right: 0.25rem;
    }

    .archive-subtitle {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.15rem;
      color: var(--text);
      line-height: 1.7;
    }

    .roles {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0;
      border-top: 1px solid var(--rule);
    }

    .role {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 2rem;
      padding: 2.5rem 0;
      border-bottom: 1px solid var(--rule);
      transition: background 0.3s ease;
    }

    .role:hover {
      background: rgba(255, 107, 53, 0.03);
    }

    .role-numeral {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
      padding-top: 0.25rem;
    }

    .numeral-prefix {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 0.9rem;
      color: var(--brass);
    }

    .numeral-digit {
      font-family: var(--font-display);
      font-variation-settings: 'opsz' 144, 'WONK' 1;
      font-size: 2.5rem;
      font-weight: 200;
      color: var(--ember);
      line-height: 1;
      letter-spacing: -0.03em;
    }

    .role-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .role-title {
      font-family: var(--font-display);
      font-size: clamp(1.35rem, 2.5vw, 1.85rem);
      font-weight: 400;
      color: var(--paper);
      letter-spacing: -0.02em;
      line-height: 1.15;
      margin-bottom: 0.35rem;
    }

    .role-company {
      font-family: var(--font-display);
      font-size: 1.1rem;
      color: var(--text);
    }

    .role-company em {
      font-style: italic;
      color: var(--text-mute);
      font-weight: 200;
      margin-right: 0.25rem;
    }

    .role-meta {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      color: var(--text-mute);
      text-align: right;
      white-space: nowrap;
    }

    .dot {
      margin: 0 0.35rem;
      color: var(--brass-mute);
    }

    .role-summary {
      font-family: var(--font-display);
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--text);
      max-width: 65ch;
    }

    @media (max-width: 700px) {
      .masthead {
        margin-bottom: 3rem;
      }

      .archive-title {
        font-size: clamp(2.25rem, 12vw, 3rem);
      }

      .archive-subtitle {
        font-size: 1rem;
      }

      .role {
        grid-template-columns: 60px 1fr;
        gap: 1rem;
        padding: 2rem 0;
      }

      .numeral-digit {
        font-size: 1.75rem;
      }

      .role-header {
        flex-direction: column;
        gap: 0.75rem;
      }

      .role-meta {
        text-align: left;
        white-space: normal;
      }

      .role-summary {
        font-size: 0.95rem;
      }
    }

    @media (max-width: 480px) {
      .masthead-rule::before {
        flex: 0 0 30px;
      }

      .rule-tag {
        font-size: 0.6rem;
      }

      .role {
        grid-template-columns: 1fr;
        gap: 0.75rem;
      }

      .role-numeral {
        padding-top: 0;
      }
    }
  `,
})
export class ExperienceComponent {
  readonly roles: ExperienceRole[] = [
    {
      title: 'Staff Full Stack Engineer · AI Products',
      company: 'UBS',
      location: 'Zurich, Switzerland',
      period: 'Jun 2024 – Oct 2025',
      summary:
        'Led full-stack Java / React delivery on the wealth platform, embedding LLM-powered assistants and document intelligence into advisor workflows, and rolling the consolidated application out across Spain, Italy, and the UK.',
    },
    {
      title: 'Staff Full Stack Engineer · AI Platform',
      company: 'Credit Suisse',
      location: 'Zurich, Switzerland',
      period: 'Feb 2023 – Jun 2024',
      summary:
        'Owned the monolith-to-microservices migration end to end and built the AI service layer behind it — retrieval-augmented search, model-serving APIs, and Angular / Java interfaces for the wealth management team.',
    },
    {
      title: 'Staff Full Stack Engineer · Applied ML',
      company: 'Backbase',
      location: 'Cardiff, UK',
      period: 'Jan 2019 – Aug 2020',
      summary:
        'Built the reusable micro frontend library used across banking clients and introduced ML-driven fraud and anomaly signals into the security layer — SMS OTP, device auth, and Keycloak — shipped to production across multiple institutions.',
    },
  ];

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
