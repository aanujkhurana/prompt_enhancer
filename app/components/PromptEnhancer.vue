<template>
  <div class="enhancer">
    <div class="enhancer__input-wrapper">
      <textarea
        v-model="input"
        class="enhancer__textarea"
        placeholder="e.g., Write a blog post about coffee..."
        :disabled="loading"
      ></textarea>
      <div class="enhancer__actions">
        <button 
          class="btn btn--primary" 
          @click="enhance" 
          :disabled="!input || loading"
        >
          <span v-if="loading">Enhancing...</span>
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
          <span class="enhancer__label">Enhanced Prompt</span>
          <button class="enhancer__copy-btn" @click="copyToClipboard">
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
  margin: 0 auto 3rem;

  &__textarea {
    width: 100%;
    min-height: 160px;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 2px solid #e2e8f0;
    background: white;
    font-size: 1.125rem;
    resize: vertical;
    transition: all 0.2s ease;
    outline: none;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

    &:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    }

    @include dark-mode {
      background: #1e293b;
      border-color: #334155;
      color: white;

      &:focus {
        border-color: #818cf8;
      }
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
  }

  &__error {
    margin-top: 1rem;
    color: #ef4444;
    text-align: center;
    font-weight: 500;
  }

  &__output {
    margin-top: 3rem;
    background: white;
    border-radius: 1rem;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

    @include dark-mode {
      background: #1e293b;
      border-color: #334155;
    }
  }

  &__output-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;

    @include dark-mode {
      background: #0f172a;
      border-color: #334155;
    }
  }

  &__label {
    font-weight: 600;
    color: #64748b;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__copy-btn {
    background: transparent;
    border: none;
    color: #6366f1;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: background 0.2s;

    &:hover {
      background: rgba(99, 102, 241, 0.1);
    }
  }

  &__result {
    padding: 1.5rem;
    white-space: pre-wrap;
    line-height: 1.7;
    color: #334155;

    @include dark-mode {
      color: #e2e8f0;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
