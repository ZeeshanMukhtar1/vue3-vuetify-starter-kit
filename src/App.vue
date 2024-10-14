<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <v-app>
    <NavbarComponent />

    <v-main>
      <!-- Router View: This is where your page content will be rendered -->
      <RouterView />
    </v-main>

    <!-- Footer: Uncomment and customize if needed -->
    <!-- <v-footer>
      Footer content
    </v-footer> -->
  </v-app>
</template>
