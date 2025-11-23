<template>
  <button 
    class="theme-toggle" 
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div class="theme-toggle__icon-wrapper">
      <transition name="icon-fade" mode="out-in">
        <!-- Sun Icon (Light Mode) -->
        <svg 
          v-if="!isDark"
          key="sun"
          class="theme-toggle__icon theme-toggle__icon--sun"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        
        <!-- Moon Icon (Dark Mode) -->
        <svg 
          v-else
          key="moon"
          class="theme-toggle__icon theme-toggle__icon--moon"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </transition>
    </div>
  </button>
</template>

<script setup>
const { toggleTheme, isDark } = useTheme()
</script>

<style lang="scss" scoped>
.theme-toggle {
  position: fixed;
  top: $space-6;
  right: $space-6;
  z-index: $z-sticky;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 48px;
  height: 48px;
  
  background: $color-bg-light;
  border: 1px solid $color-border-light;
  border-radius: $radius-full;
  
  cursor: pointer;
  transition: all $transition-base;
  
  box-shadow: $shadow-md;
  
  html.dark & {
    background: $color-bg-secondary-dark;
    border-color: $color-border-dark;
    box-shadow: $shadow-dark-md;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: $shadow-lg;
    border-color: $accent-500;
    
    html.dark & {
      border-color: $accent-400;
      box-shadow: $shadow-dark-lg;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    @include focus-ring;
  }

  &__icon-wrapper {
    position: relative;
    width: 24px;
    height: 24px;
  }

  &__icon {
    width: 100%;
    height: 100%;
    color: $color-text-primary-light;
    
    html.dark & {
      color: $color-text-primary-dark;
    }

    &--sun {
      animation: rotate 20s linear infinite;
    }

    &--moon {
      animation: float 3s ease-in-out infinite;
    }
  }
}

// Icon transition
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all $transition-base;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

// Animations
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}
</style>
