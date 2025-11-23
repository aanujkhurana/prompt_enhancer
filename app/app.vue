<template>
  <div class="app-wrapper">
    <main>
      <TheHero />
      <div class="container">
        <PromptEnhancer />
        <QuickTemplates />
        <FeatureGrid />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
// Components are auto-imported by Nuxt
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: fadeIn $transition-smooth $ease-spring;
}

main {
  flex: 1;
  padding-bottom: $space-16;
}
</style>
