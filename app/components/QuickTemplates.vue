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
  margin-bottom: 5rem;

  &__label {
    color: #64748b;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  &__btn {
    background: white;
    border: 1px solid #e2e8f0;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    &:hover {
      border-color: #6366f1;
      color: #6366f1;
      transform: translateY(-1px);
    }

    @include dark-mode {
      background: #1e293b;
      border-color: #334155;
      color: #94a3b8;

      &:hover {
        border-color: #818cf8;
        color: #818cf8;
      }
    }
  }
}
</style>
