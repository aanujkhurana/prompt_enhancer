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
  
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: $radius-full;
  
  cursor: pointer;
  transition: all $transition-base;
  backdrop-filter: blur(10px);
  
  html.dark & {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    transform: scale(1.1) rotate(10deg);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
    
    .theme-toggle__icon {
      filter: drop-shadow(0 0 6px rgba(99, 102, 241, 0.6));
    }
    
    html.dark & {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.45);
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
    color: rgba(255, 255, 255, 0.9);
    transition: all $transition-base;
    
    html.dark & {
      color: rgba(255, 255, 255, 0.85);
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
