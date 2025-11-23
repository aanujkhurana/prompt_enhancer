<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">
        &copy; {{ new Date().getFullYear() }} PromptEnhancer. Built for the AI era.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid #e2e8f0;

  @include dark-mode {
    border-top-color: #334155;
  }

  &__text {
    color: #94a3b8;
    font-size: 0.875rem;
  }
}
</style>
