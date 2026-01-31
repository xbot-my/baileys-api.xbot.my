import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout title="Baileys API" description="Build WhatsApp Apps with REST API">
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-badge">v1.0.0 Now Available</div>
          <h1 className="hero__title">
            <span className="gradient">Baileys API</span>
            <br />
            Build WhatsApp Apps
          </h1>
          <p className="hero__subtitle">
            REST API + WebSocket Events. Direct protocol.
            No browser automation required.
          </p>

          <div className="hero__ctas">
            <Link className="button button--primary" to="/docs">
              <span>Quick Start</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a
              className="button button--secondary"
              href="https://github.com/xbot-my/baileys-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Code Preview */}
          <div className="code-preview">
            <pre><code>{
`# Send your first message
curl -X POST https://api.example.com/messages \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{"to":"60123456789@s.whatsapp.net","message":{"text":"Hello"}}'`
            }</code></pre>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="features-grid">
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
              title="HTTP API"
              description="Send messages, manage groups, handle contacts with simple REST endpoints"
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              }
              title="WebSocket Events"
              description="Real-time notifications for messages and updates via Socket.IO"
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              }
              title="Direct Protocol"
              description="No browser automation. Direct WhatsApp Web protocol integration"
            />
          </div>
        </section>

        {/* Projects Bento Grid */}
        <section className="projects-section">
          <div className="section-header">
            <h2>Ecosystem</h2>
            <p>Everything you need to build WhatsApp applications</p>
          </div>

          <div className="bento-grid">
            <ProjectCard
              icon="📦"
              name="baileys-api"
              description="NestJS + Baileys REST API service"
              tech={['NestJS', 'TypeScript', 'Docker']}
              stars="1.2k"
              docsLink="/docs/baileys-api/intro"
              githubLink="https://github.com/xbot-my/baileys-api"
            />
            <ProjectCard
              icon="🎯"
              name="laravel-baileys-api"
              description="Laravel SDK & Service Provider"
              tech={['Laravel', 'PHP', 'SDK']}
              stars="Coming Soon"
              docsLink="/docs/laravel/intro"
              githubLink="https://github.com/xbot-my/laravel-baileys-api"
            />
            <ProjectCard
              icon="🎛️"
              name="baileys-api-manager"
              description="Web Management Dashboard"
              tech={['React', 'Next.js', 'Dashboard']}
              stars="Coming Soon"
              docsLink="/docs/manager/intro"
              githubLink="https://github.com/xbot-my/baileys-api-manager"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <StatCard number="2.5K+" label="GitHub Stars" />
            <StatCard number="10K+" label="Monthly Downloads" />
            <StatCard number="50+" label="Contributors" />
            <StatCard number="100+" label="Production Deployments" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to build?</h2>
          <p>Get started in 5 minutes with Docker Compose</p>
          <Link className="button button--primary" to="/docs/baileys-api/quick-start">
            Read Documentation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </section>
      </main>
    </Layout>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}

// Project Card Component
function ProjectCard({ icon, name, description, tech, stars, docsLink, githubLink }) {
  return (
    <Link to={docsLink} className="project-card-link">
      <div className="project-card">
        <div className="project-card__header">
          <div className="project-card__icon">{icon}</div>
          <div className="project-card__meta">
            <h3>{name}</h3>
            <div className="project-card__stars">⭐ {stars}</div>
          </div>
        </div>

        <p className="project-card__desc">{description}</p>

        <div className="project-card__tech">
          {tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
        </div>

        <div className="project-card__actions">
          <span>Documentation →</span>
          <a href={githubLink} target="_blank" rel="noopener noreferrer"
             onClick={(e) => e.stopPropagation()}>GitHub →</a>
        </div>
      </div>
    </Link>
  );
}

// Stat Card Component
function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-card__number">{number}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}
