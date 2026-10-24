* {
  box-sizing: border-box;
}

:root {
  --bg: #f4f7fb;
  --bg-alt: #eaf3ff;
  --panel: #ffffff;
  --panel-strong: #0f172a;
  --panel-soft: #f8fafc;
  --text: #122033;
  --muted: #5d6a7d;
  --primary: #1447d6;
  --primary-soft: #e8efff;
  --green: #1d9b6c;
  --gold: #f4b942;
  --shadow: 0 18px 40px rgba(18, 32, 51, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.05);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.brand__mark {
  display: inline-grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #3672ff);
  color: white;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
}

.nav__links {
  display: flex;
  gap: 1.5rem;
  color: var(--muted);
  font-weight: 500;
}

.nav__links a:hover {
  color: var(--text);
}

.hero {
  padding: 5rem 0 2.5rem;
  background:
    radial-gradient(circle at top right, rgba(20, 71, 214, 0.12), transparent 35%),
    linear-gradient(180deg, #f7faff 0%, var(--bg) 100%);
}

.hero__wrap {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 4vw, 4.25rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
}

.lead {
  margin: 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.8rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.3rem;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button--primary {
  background: linear-gradient(135deg, var(--primary), #3672ff);
  color: white;
  box-shadow: 0 12px 24px rgba(20, 71, 214, 0.2);
}

.button--ghost {
  background: white;
  color: var(--text);
  border: 1px solid rgba(18, 32, 51, 0.08);
}

.mini-facts {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 1rem;
}

.mini-facts li {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(18, 32, 51, 0.06);
  border-radius: 16px;
  padding: 1rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mini-facts strong {
  font-size: 1.1rem;
  color: var(--text);
}

.mini-facts span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero__card {
  background: linear-gradient(180deg, var(--panel-strong), #182848);
  border-radius: 24px;
  padding: 1.4rem;
  color: white;
  box-shadow: var(--shadow);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.badge {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-weight: 600;
}

.summary-number {
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: -0.08em;
  font-weight: 800;
  margin-top: 1rem;
}

.summary-label {
  margin: 0.5rem 0 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(90px, 1fr));
  gap: 1rem;
}

.summary-grid div {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.summary-grid strong {
  font-size: 1.05rem;
}

.summary-grid span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}

.section {
  padding: 4.5rem 0;
}

.section--alt {
  background: #edf5ff;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3.2vw, 2.7rem);
  letter-spacing: -0.05em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 1.2rem;
}

.stat-card,
.theme-card,
.sources__card,
.chart-card {
  background: var(--panel);
  border: 1px solid rgba(18, 32, 51, 0.06);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 1.4rem;
}

.stat-card__label {
  margin: 0;
  color: var(--muted);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.stat-card__value {
  margin: 0.8rem 0 0.25rem;
  font-size: clamp(1.8rem, 2.4vw, 2.3rem);
  font-weight: 800;
  letter-spacing: -0.06em;
}

.stat-card__meta {
  margin: 0;
  color: var(--green);
  font-weight: 600;
}

.chart-card {
  padding: 1.4rem 1.4rem 1.6rem;
}

.chart-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.chart-card__header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.chart-card__header span {
  color: var(--muted);
  font-size: 0.85rem;
}

.region-chart {
  display: grid;
  gap: 1rem;
}

.region-row {
  display: grid;
  grid-template-columns: 110px 1fr 70px;
  align-items: center;
  gap: 0.9rem;
}

.region-row__label {
  font-weight: 600;
}

.region-row__bar {
  height: 16px;
  background: linear-gradient(90deg, var(--primary), #6ea1ff);
  border-radius: 999px;
  min-width: 18px;
}

.region-row__value {
  text-align: right;
  color: var(--muted);
  font-weight: 600;
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.2rem;
}

.theme-card {
  padding: 1.5rem;
}

.theme-card__icon {
  width: 3rem;
  height: 3rem;
  display: inline-grid;
  place-items: center;
  border-radius: 14px;
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 1.35rem;
  margin-bottom: 1rem;
}

.theme-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1.2rem;
}

.theme-card p {
  margin: 0;
  color: var(--muted);
}

.sources {
  display: grid;
}

.sources__card {
  padding: 1.5rem;
  max-width: 760px;
}

.sources__card p,
.sources__card li {
  color: var(--muted);
}

.sources__card ul {
  margin: 1rem 0 0;
  padding-left: 1.2rem;
}

.footer {
  background: var(--panel-strong);
  color: rgba(255, 255, 255, 0.75);
  padding: 1.5rem 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .hero__wrap,
  .stats-grid,
  .theme-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero__wrap {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .nav {
    flex-direction: column;
    justify-content: center;
    min-height: 90px;
    padding: 1rem 0;
  }

  .nav__links {
    gap: 0.9rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .mini-facts,
  .stats-grid,
  .theme-grid,
  .hero__wrap {
    grid-template-columns: 1fr;
  }

  .region-row {
    grid-template-columns: 90px 1fr 55px;
  }
}
