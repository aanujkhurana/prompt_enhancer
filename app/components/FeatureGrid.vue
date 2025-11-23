<template>
  <svg width="0" height="0" style="position: absolute;">
    <defs>
      <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
        <stop offset="25%" style="stop-color:#8b5cf6;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
        <stop offset="75%" style="stop-color:#f59e0b;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>
  <section class="features">
    <div class="features__grid">
      <div class="feature-card">
        <div class="feature-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="3"/>
            <line x1="12" y1="2" x2="12" y2="9"/>
            <line x1="12" y1="15" x2="12" y2="22"/>
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
            <line x1="2" y1="12" x2="9" y2="12"/>
            <line x1="15" y1="12" x2="22" y2="12"/>
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/>
          </svg>
        </div>
        <h3 class="feature-card__title">More Specificity</h3>
        <p class="feature-card__desc">We add context, constraints, and format requirements to ensure the AI understands exactly what you need.</p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </div>
        <h3 class="feature-card__title">Better Structure</h3>
        <p class="feature-card__desc">Organized logic helps models reason better. We structure your request for optimal processing.</p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <h3 class="feature-card__title">Instant Results</h3>
        <p class="feature-card__desc">One click to expert-level prompting. Save time iterating on bad outputs.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features {
  margin-bottom: $space-20;
  padding: $space-12 0;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;

    @include md-up {
      grid-template-columns: repeat(3, 1fr);
      gap: $space-8;
    }
  }
}

.feature-card {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: $space-8;
  border-radius: $radius-2xl;
  text-align: center;
  transition: all $transition-base;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

    .feature-card__icon {
      transform: scale(1.15) rotate(5deg);
      
      svg {
        stroke: url(#rainbow-gradient);
        filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.5));
      }
    }
  }

  @include dark-mode {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.15);

    &:hover {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.35);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
  }

  &__icon {
    width: 64px;
    height: 64px;
    margin: 0 auto $space-5;
    transition: all $transition-base;
    position: relative;
    
    svg {
      width: 100%;
      height: 100%;
      stroke: rgba(255, 255, 255, 0.8);
      transition: all $transition-base;

      @include dark-mode {
        stroke: rgba(255, 255, 255, 0.7);
      }
    }
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    letter-spacing: $letter-spacing-tight;
    margin-bottom: $space-3;
    color: $color-text-primary-light;

    @include dark-mode {
      color: $color-text-primary-dark;
    }
  }

  &__desc {
    color: $color-text-secondary-light;
    line-height: $line-height-relaxed;
    font-size: $font-size-base;
    margin: 0;

    @include dark-mode {
      color: $color-text-secondary-dark;
    }
  }
}
</style>
