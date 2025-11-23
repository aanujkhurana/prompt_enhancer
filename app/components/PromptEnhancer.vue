<template>
  <div class="enhancer">
    <div class="enhancer__card">
      <div class="enhancer__input-wrapper">
        <textarea
          v-model="input"
          class="enhancer__textarea"
          placeholder="e.g., Write a blog post about coffee..."
          :disabled="loading"
          rows="6"
        ></textarea>
      </div>
      
      <div class="enhancer__actions">
        <button 
          class="btn btn--primary btn--lg" 
          @click="enhance" 
          :disabled="!input || loading"
        >
          <span v-if="loading">
            <span class="enhancer__spinner"></span>
            Enhancing...
          </span>
          <span v-else>Enhance Prompt ✨</span>
        </button>
      </div>
    </div>

    <div v-if="error" class="enhancer__error">
      {{ error }}
    </div>

    <transition name="slide-up">
      <div v-if="output" class="enhancer__output">
        <div class="enhancer__output-header">
          <div class="enhancer__output-title">
            <svg class="enhancer__output-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
            </svg>
            Enhanced Prompt
          </div>
          <button class="btn btn--ghost btn--sm" @click="copyToClipboard">
            <svg v-if="!copied" class="enhancer__copy-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
            </svg>
            <svg v-else class="enhancer__copy-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span v-if="copied">Copied!</span>
            <span v-else>Copy</span>
          </button>
        </div>
        <div class="enhancer__result">
          {{ output }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const input = useState('promptInput', () => '')
const output = ref('')
const loading = ref(false)
const error = ref('')
const copied = ref(false)

async function enhance() {
  if (!input.value) return
  
  loading.value = true
  error.value = ''
  output.value = '' // Clear previous output
  
  try {
    const data = await $fetch('/api/enhance', {
      method: 'POST',
      body: { prompt: input.value }
    })
    output.value = data.enhancedPrompt
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(output.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style lang="scss" scoped>
.enhancer {
  max-width: 800px;
  margin: 0 auto $space-16;

  &__card {
    background: $color-bg-light;
    border-radius: $radius-2xl;
    border: 1px solid $color-border-light;
    padding: $space-8;
    box-shadow: $shadow-lg;
    transition: all $transition-base;

    @include dark-mode {
      background: $color-bg-secondary-dark;
      border-color: $color-border-dark;
      box-shadow: $shadow-dark-lg;
    }
  }

  &__input-wrapper {
    margin-bottom: $space-6;
  }

  &__textarea {
    width: 100%;
    min-height: 180px;
    padding: $space-5;
    border-radius: $radius-xl;
    border: 2px solid $color-border-light;
    background: $color-bg-secondary-light;
    color: $color-text-primary-light;
    font-size: $font-size-md;
    font-family: $font-primary;
    line-height: $line-height-relaxed;
    resize: vertical;
    transition: all $transition-base;
    outline: none;

    &::placeholder {
      color: $color-text-tertiary-light;
    }

    &:focus {
      @include focus-ring;
      background: $color-bg-light;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @include dark-mode {
      background: $color-bg-dark;
      border-color: $color-border-dark;
      color: $color-text-primary-dark;

      &::placeholder {
        color: $color-text-tertiary-dark;
      }

      &:focus {
        background: $color-bg-secondary-dark;
        border-color: $accent-400;
      }
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
  }

  &__spinner {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    margin-right: $space-2;
  }

  &__error {
    margin-top: $space-6;
    padding: $space-4 $space-6;
    background: rgba($color-error, 0.1);
    color: $color-error;
    border: 1px solid rgba($color-error, 0.3);
    border-radius: $radius-lg;
    text-align: center;
    font-weight: $font-weight-medium;
    font-size: $font-size-sm;
  }

  &__output {
    margin-top: $space-12;
    background: $color-bg-light;
    border-radius: $radius-2xl;
    border: 1px solid $color-border-light;
    overflow: hidden;
    box-shadow: $shadow-xl;

    @include dark-mode {
      background: $color-bg-secondary-dark;
      border-color: $color-border-dark;
      box-shadow: $shadow-dark-lg;
    }
  }

  &__output-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $space-5 $space-6;
    background: $color-bg-secondary-light;
    border-bottom: 1px solid $color-border-light;

    @include dark-mode {
      background: $color-bg-dark;
      border-color: $color-border-dark;
    }
  }

  &__output-title {
    display: flex;
    align-items: center;
    gap: $space-2;
    font-weight: $font-weight-semibold;
    color: $color-text-primary-light;
    font-size: $font-size-sm;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;

    @include dark-mode {
      color: $color-text-primary-dark;
    }
  }

  &__output-icon {
    width: 16px;
    height: 16px;
    color: $accent-500;

    @include dark-mode {
      color: $accent-400;
    }
  }

  &__copy-icon {
    width: 16px;
    height: 16px;
  }

  &__result {
    padding: $space-6;
    white-space: pre-wrap;
    line-height: $line-height-relaxed;
    color: $color-text-primary-light;
    font-size: $font-size-base;

    @include dark-mode {
      color: $color-text-secondary-dark;
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all $transition-smooth;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}
</style>
