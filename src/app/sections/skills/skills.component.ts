import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Skill {
  name: string;
  level: string;
  rate: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="section skills">
      <div class="container">
        <header class="masthead">
          <div class="masthead-rule">
            <span class="rule-tag">CHAPTER THREE · CRAFT</span>
          </div>
          <h2 class="archive-title">
            <em>Technical</em> Skills
          </h2>
          <p class="archive-subtitle">
            Rated by depth of production use — not tutorial familiarity.
            Five stars means shipped it under pressure; one means still learning.
          </p>
        </header>

        <ul class="skill-list">
          @for (skill of skills; track skill.name; let i = $index) {
            <li class="skill-row">
              <span class="skill-num">{{ pad(i + 1) }}</span>
              <div class="skill-main">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}</span>
              </div>
              <div
                class="skill-stars"
                [attr.aria-label]="skill.rate + ' out of 5 stars'"
              >
                @for (star of starSlots; track $index) {
                  <span
                    class="star"
                    [class.star--filled]="$index < skill.rate"
                    aria-hidden="true"
                  >★</span>
                }
                <span class="star-count">{{ skill.rate }}/5</span>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .skills {
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

    .skill-list {
      list-style: none;
      border-top: 1px solid var(--rule);
    }

    .skill-row {
      display: grid;
      grid-template-columns: 48px 1fr auto;
      align-items: center;
      gap: 1.5rem;
      padding: 1.35rem 0.5rem;
      border-bottom: 1px solid var(--rule);
      transition: background 0.3s ease, padding-left 0.3s ease;
    }

    .skill-row:hover {
      background: rgba(255, 107, 53, 0.03);
      padding-left: 1rem;
    }

    .skill-num {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      color: var(--brass-mute);
    }

    .skill-main {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      min-width: 0;
    }

    .skill-name {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 400;
      color: var(--paper);
      letter-spacing: -0.015em;
      line-height: 1.15;
    }

    .skill-level {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--brass);
    }

    .skill-stars {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      flex-shrink: 0;
    }

    .star {
      font-size: 1.1rem;
      line-height: 1;
      color: var(--rule-light);
      transition: color 0.25s ease, transform 0.25s ease;
    }

    .star--filled {
      color: var(--ember);
    }

    .skill-row:hover .star--filled {
      transform: scale(1.08);
    }

    .star-count {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      color: var(--text-mute);
      margin-left: 0.65rem;
      min-width: 2.5rem;
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

      .skill-row {
        grid-template-columns: 36px 1fr;
        grid-template-rows: auto auto;
        gap: 0.5rem 1rem;
        padding: 1.15rem 0.25rem;
      }

      .skill-stars {
        grid-column: 2;
      }

      .skill-name {
        font-size: 1.15rem;
      }
    }

    @media (max-width: 480px) {
      .masthead-rule::before {
        flex: 0 0 30px;
      }

      .rule-tag {
        font-size: 0.6rem;
      }

      .star {
        font-size: 1rem;
      }

      .star-count {
        margin-left: 0.4rem;
      }
    }
  `,
})
export class SkillsComponent {
  readonly starSlots = [1, 2, 3, 4, 5];

  readonly skills: Skill[] = [
    { name: 'Angular', level: 'Expert', rate: 5 },
    { name: 'TypeScript', level: 'Expert', rate: 5 },
    { name: 'Java / Spring Boot', level: 'Expert', rate: 5 },
    { name: 'React', level: 'Advanced', rate: 4 },
    { name: 'PostgreSQL', level: 'Advanced', rate: 4 },
    { name: 'Node.js', level: 'Advanced', rate: 4 },
    { name: 'AWS / Cloud', level: 'Proficient', rate: 3 },
    { name: 'Python / ML', level: 'Proficient', rate: 3 },
  ];

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
