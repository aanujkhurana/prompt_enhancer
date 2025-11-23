<template>
  <section class="features">
    <div class="features__grid">
      <div class="feature-card">
        <div class="feature-card__icon">🎯</div>
        <h3 class="feature-card__title">More Specificity</h3>
        <p class="feature-card__desc">We add context, constraints, and format requirements to ensure the AI understands exactly what you need.</p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon">🏗️</div>
        <h3 class="feature-card__title">Better Structure</h3>
        <p class="feature-card__desc">Organized logic helps models reason better. We structure your request for optimal processing.</p>
      </div>
      <div class="feature-card">
        <div class="feature-card__icon">⚡</div>
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
  background: $color-bg-light;
  border: 1px solid $color-border-light;
  padding: $space-8;
  border-radius: $radius-2xl;
  text-align: center;
  transition: all $transition-base;
  box-shadow: $shadow-sm;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
    border-color: $color-border-strong-light;
  }

  @include dark-mode {
    background: $color-bg-secondary-dark;
    border-color: $color-border-dark;

    &:hover {
      border-color: $color-border-strong-dark;
      box-shadow: $shadow-dark-md;
    }
  }

  &__icon {
    font-size: $font-size-5xl;
    margin-bottom: $space-5;
    line-height: 1;
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
