<template>
  <section class="hero">
    <div class="hero__background">
      <div class="hero__gradient"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="hero__orb hero__orb--3"></div>
    </div>
    
    <div class="container container--narrow">
      <h1 class="hero__title">
        <span class="hero__text">Turn Vague Ideas into </span>
        <span class="hero__highlight">
          <span class="hero__text hero__text--highlight">Perfect Prompts</span>
        </span>
      </h1>
      <p class="hero__subtitle">
        <span class="hero__subtitle-text">
          Instantly optimize your prompts for ChatGPT, Claude, and Gemini.
          <br class="hero__break" />
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

  @include sm-up {
    padding: $space-24 0 $space-20;
  }

  // Animated background - fixed and full-screen
  &__background {
    position: fixed;
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
      rgba(99, 102, 241, 0.06) 0%,
      rgba(139, 92, 246, 0.05) 15%,
      rgba(236, 72, 153, 0.04) 30%,
      transparent 50%
    );
    animation: gradientPulse 8s ease-in-out infinite;
  }

  &__orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.25;
    
    &--1 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
      top: -100px;
      left: 10%;
      animation: float 20s ease-in-out infinite, rainbowRotate 15s linear infinite;
    }
    
    &--2 {
      width: 250px;
      height: 250px;
      background: linear-gradient(135deg, #ec4899, #f59e0b, #10b981);
      top: 50px;
      right: 10%;
      animation: float 15s ease-in-out infinite reverse, rainbowRotate 18s linear infinite;
    }
    
    &--3 {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #10b981, #06b6d4, #6366f1);
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      animation: float 18s ease-in-out infinite, rainbowRotate 22s linear infinite;
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

  &__text {
    display: inline-block;
    opacity: 0;
    animation: fadeIn 0.1s 0.5s forwards;
    
    &--highlight {
      display: inline-block;
      overflow: hidden;
      border-right: 3px solid currentColor;
      white-space: nowrap;
      max-width: 0;
      opacity: 1;
      animation: typewriterLoop 4s steps(15) 2.7s infinite, blinkCursor 0.75s step-end infinite;
    }
  }

  &__highlight {
    display: inline-block;
    position: relative;
    background: linear-gradient(
      90deg,
      #6366f1 0%,
      #8b5cf6 20%,
      #ec4899 40%,
      #f59e0b 60%,
      #10b981 80%,
      #6366f1 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbowSlide 8s linear 4.5s infinite;
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

  &__subtitle-text {
    display: inline-block;
    opacity: 0;
    animation: fadeInUp 0.8s $ease-spring 4.5s forwards;
  }

  &__emphasis {
    font-weight: $font-weight-semibold;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
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
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes typewriterLoop {
  0%, 100% {
    max-width: 0;
  }
  50%, 90% {
    max-width: 100%;
  }
}

@keyframes blinkCursor {
  0%, 100% {
    border-right-color: transparent;
  }
  50% {
    border-right-color: currentColor;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rainbowSlide {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

@keyframes rainbowRotate {
  0% {
    filter: blur(60px) hue-rotate(0deg);
  }
  100% {
    filter: blur(60px) hue-rotate(360deg);
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
