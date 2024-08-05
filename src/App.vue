<template>
  <main class="relative">
    <Nav />
    <section class="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section class="padding">
      <PopularProducts />
    </section>
    <section class="padding">
      <SuperQuality />
    </section>
    <section class="padding-x py-10">
      <Services />
    </section>
    <section class="padding">
      <SpecialOffer />
    </section>
    <section class="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section class="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section class="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import { Hero, SpecialOffer, Subscribe, SuperQuality, Services, Footer, PopularProducts, CustomerReviews } from "./components/sections/index";
</script>
