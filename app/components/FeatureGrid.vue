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
  margin-bottom: 3rem;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.feature-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  @include dark-mode {
    background: #1e293b;
  }

  &__icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1e293b;

    @include dark-mode {
      color: white;
    }
  }

  &__desc {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.95rem;
  }
}
</style>
