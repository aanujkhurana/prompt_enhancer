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
  padding: $space-12 0 $space-8;
  text-align: center;
  border-top: 1px solid $color-border-light;
  margin-top: auto;

  @include dark-mode {
    border-top-color: $color-border-dark;
  }

  &__text {
    color: $color-text-tertiary-light;
    font-size: $font-size-sm;
    line-height: $line-height-normal;

    @include dark-mode {
      color: $color-text-tertiary-dark;
    }
  }
}
</style>
