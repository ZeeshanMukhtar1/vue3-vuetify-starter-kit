<template>
  <v-container>
    <h1>Home Page</h1>

    <v-row class="mt-4">
      <v-col v-for="n in 3" :key="n" cols="12" md="4">
        <v-card>
          <v-img
            src="https://picsum.photos/200/300"
            height="200px"
            cover
          ></v-img>

          <v-card-title> Card {{ n }} </v-card-title>

          <v-card-text>
            This is the content for card {{ n }}. You can add any text or
            components here.
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary"> Action {{ n }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
