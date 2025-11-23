<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">
        Turn Vague Ideas into <span class="highlight">Perfect Prompts</span>.
      </h1>
      <p class="hero__subtitle">
        Instantly optimize your prompts for ChatGPT, Claude, and Gemini. Better inputs, magical outputs.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding: 5rem 0 3rem;
  text-align: center;

  &__title {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (min-width: 640px) {
      font-size: 3.5rem;
    }

    .highlight {
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__subtitle {
    font-size: 1.125rem;
    color: #64748b; // Slate-500
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;

    @include dark-mode {
      color: #94a3b8; // Slate-400
    }
  }
}
</style>
