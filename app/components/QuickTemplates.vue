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
        <span class="templates__icon" v-html="template.icon"></span>
        {{ template.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
const input = useState('promptInput')

const templates = [
  { 
    label: 'Write Email', 
    text: 'Write a professional email to my boss asking for a raise.',
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>'
  },
  { 
    label: 'Summarize', 
    text: 'Summarize this text into 3 bullet points.',
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>'
  },
  { 
    label: 'Code Helper', 
    text: 'Write a Python script to scrape a website.',
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>'
  },
  { 
    label: 'Image Prompt', 
    text: 'A cyberpunk city at night, neon lights, rain.',
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/></svg>'
  },
  { 
    label: 'Fix Grammar', 
    text: 'Fix the grammar and make this text sound more professional.',
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>'
  }
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
    gap: $space-2;
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

      .templates__icon {
        transform: scale(1.1);
        color: $accent-600;
      }
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

        .templates__icon {
          color: $accent-400;
        }
      }
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    transition: all $transition-base;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
