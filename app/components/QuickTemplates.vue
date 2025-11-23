<template>
  <div class="templates">
    <p class="templates__label">Try a quick example:</p>
    <div class="templates__list">
      <button 
        v-for="template in templates" 
        :key="template.label"
        class="templates__btn"
        @click="selectTemplate(template.text)"
      >
        {{ template.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
const input = useState('promptInput')

const templates = [
  { label: '📧 Write Email', text: 'Write a professional email to my boss asking for a raise.' },
  { label: '📝 Summarize', text: 'Summarize this text into 3 bullet points.' },
  { label: '💻 Code Helper', text: 'Write a Python script to scrape a website.' },
  { label: '🎨 Image Prompt', text: 'A cyberpunk city at night, neon lights, rain.' },
  { label: '✍️ Fix Grammar', text: 'Fix the grammar and make this text sound more professional.' }
]

function selectTemplate(text) {
  input.value = text
  // smooth scroll to top if needed, or just focus
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.templates {
  text-align: center;
  margin-bottom: $space-20;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  &__label {
    color: $color-text-secondary-light;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    margin-bottom: $space-5;

    @include dark-mode {
      color: $color-text-secondary-dark;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-3;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    background: $color-bg-light;
    border: 1px solid $color-border-light;
    padding: $space-3 $space-5;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-text-secondary-light;
    cursor: pointer;
    transition: all $transition-base;
    box-shadow: $shadow-sm;
    user-select: none;

    &:hover {
      border-color: $accent-500;
      color: $accent-600;
      background: rgba($accent-500, 0.05);
      transform: translateY(-2px) scale(1.02);
      box-shadow: $shadow-md;
    }

    &:active {
      transform: translateY(0) scale(0.98);
    }

    @include dark-mode {
      background: $color-bg-secondary-dark;
      border-color: $color-border-dark;
      color: $color-text-secondary-dark;

      &:hover {
        border-color: $accent-400;
        color: $accent-400;
        background: rgba($accent-400, 0.1);
      }
    }
  }
}
</style>
