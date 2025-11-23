<template>
  <section class="hero">
    <div class="container container--narrow">
      <h1 class="hero__title">
        Turn Vague Ideas into <span class="hero__highlight">Perfect Prompts</span>
      </h1>
      <p class="hero__subtitle">
        Instantly optimize your prompts for ChatGPT, Claude, and Gemini.<br class="hero__break" />
        Better inputs, magical outputs.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding: $space-20 0 $space-16;
  text-align: center;
  position: relative;
  overflow: hidden;

  @include sm-up {
    padding: $space-24 0 $space-20;
  }

  &__title {
    font-size: $font-size-3xl;
    font-weight: $font-weight-extrabold;
    letter-spacing: $letter-spacing-tight;
    line-height: $line-height-tight;
    margin-bottom: $space-6;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    animation: fadeIn $transition-smooth $ease-spring;
    
    @include sm-up {
      font-size: $font-size-4xl;
    }

    @include md-up {
      font-size: $font-size-5xl;
    }
  }

  &__highlight {
    background: linear-gradient(135deg, $accent-500 0%, $accent-600 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
  }

  &__subtitle {
    font-size: $font-size-md;
    font-weight: $font-weight-normal;
    color: $color-text-secondary-light;
    max-width: 640px;
    margin: 0 auto;
    line-height: $line-height-relaxed;
    animation: fadeIn $transition-smooth $ease-spring 0.1s backwards;

    @include sm-up {
      font-size: $font-size-lg;
    }

    @include dark-mode {
      color: $color-text-secondary-dark;
    }
  }

  &__break {
    display: none;

    @include sm-up {
      display: inline;
    }
  }
}
</style>
