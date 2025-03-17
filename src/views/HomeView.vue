<script setup>
import HeroSectionComponent from '/src/components/HeroSectionComponent.vue'
import IllustrationComponent from '/src/components/IllustartionComponent.vue'
import NavBarComponent from '/src/components/NabBarComponent.vue'
</script>

<template>
  <div class="w-full h-screen overflow-hidden flex flex-col">
    <header class="w-full  ">
   <NavBarComponent />
  </header>
    <div class="w-full md:px-[120px] px-8">
    <HeroSectionComponent />
  </div>
  <div class="w-full ">
    <IllustrationComponent />
  </div>
  </div>
</template>