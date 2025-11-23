<template>
  <section class="hero">
    <ClientOnly>
      <div class="hero__background">
        <div class="hero__gradient"></div>
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
        <div class="hero__orb hero__orb--3"></div>
      </div>
    </ClientOnly>
    
    <div class="container container--narrow">
      <h1 class="hero__title">
        <span class="hero__word" style="--word-index: 0">Turn</span>
        <span class="hero__word" style="--word-index: 1">Vague</span>
        <span class="hero__word" style="--word-index: 2">Ideas</span>
        <span class="hero__word" style="--word-index: 3">into</span>
        <span class="hero__highlight">
          <span class="hero__word" style="--word-index: 4">Perfect</span>
          <span class="hero__word" style="--word-index: 5">Prompts</span>
        </span>
      </h1>
      <p class="hero__subtitle">
        <span class="hero__subtitle-line" style="--line-index: 0">
          Instantly optimize your prompts for ChatGPT, Claude, and Gemini.
        </span>
        <br class="hero__break" />
        <span class="hero__subtitle-line" style="--line-index: 1">
          Better inputs, <span class="hero__emphasis">magical outputs</span>.
        </span>
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

  // Animated background
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
  }

  &__gradient {
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle at 50% 0%,
      rgba($accent-500, 0.08) 0%,
      transparent 50%
    );
    animation: gradientPulse 8s ease-in-out infinite;
  }

  &__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    
    &--1 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, $accent-400, $accent-600);
      top: -100px;
      left: 10%;
      animation: float 20s ease-in-out infinite;
    }
    
    &--2 {
      width: 250px;
      height: 250px;
      background: linear-gradient(135deg, #8b5cf6, $accent-500);
      top: 50px;
      right: 10%;
      animation: float 15s ease-in-out infinite reverse;
    }
    
    &--3 {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, $accent-300, $accent-500);
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      animation: float 18s ease-in-out infinite;
    }
  }

  // Content (above background)
  .container {
    position: relative;
    z-index: 1;
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
    
    @include sm-up {
      font-size: $font-size-4xl;
    }

    @include md-up {
      font-size: $font-size-5xl;
    }
  }

  &__word {
    display: inline-block;
    margin: 0 0.15em;
    opacity: 0;
    animation: wordFadeIn 0.6s $ease-spring forwards;
    animation-delay: calc(var(--word-index) * 0.1s);
  }

  &__highlight {
    display: inline-block;
    position: relative;
    background: linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 25%,
      #c084fc 50%,
      #8b5cf6 75%,
      #6366f1 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease infinite;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 100%
      );
      animation: shimmer 3s infinite;
    }
  }

  &__subtitle {
    font-size: $font-size-md;
    font-weight: $font-weight-normal;
    color: $color-text-secondary-light;
    max-width: 640px;
    margin: 0 auto;
    line-height: $line-height-relaxed;

    @include sm-up {
      font-size: $font-size-lg;
    }

    @include dark-mode {
      color: $color-text-secondary-dark;
    }
  }

  &__subtitle-line {
    display: inline-block;
    opacity: 0;
    animation: wordFadeIn 0.8s $ease-spring forwards;
    animation-delay: calc(0.6s + (var(--line-index) * 0.2s));
  }

  &__emphasis {
    font-weight: $font-weight-semibold;
    background: linear-gradient(135deg, $accent-500, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__break {
    display: none;

    @include sm-up {
      display: inline;
    }
  }
}

// Animations
@keyframes wordFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(-50%) scale(1);
  }
  50% {
    transform: translateY(-30px) translateX(-50%) scale(1.05);
  }
}

@keyframes gradientPulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}
</style>
