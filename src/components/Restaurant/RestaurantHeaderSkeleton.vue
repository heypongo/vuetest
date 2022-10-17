<template>
  <div class="restaurant__header">
    <div class="header__hero"></div>
    <div class="header__infos">
      <h1></h1>
      <div class="header__state"></div>
      <p class="restaurant__phone"></p>
      <p class="restaurant__address"></p>
      <p class="restaurant__price"></p>
      <p class="restaurant__phone"></p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.restaurant {
  &__header {
    @apply w-full flex flex-col md:flex-row justify-center my-5 p-5  bg-gray-100 rounded-xl;
    .header {
      &__hero {
        @apply w-52 md:w-80 h-52 md:h-80 rounded-xl overflow-hidden h-5 rounded-sm bg-gray-300 animate-pulse;
      }
      &__infos {
        @apply flex flex-col p-2 pl-8 w-96 h-52 md:h-80  animate-pulse;
        p {
          @apply bg-gray-300 w-full rounded-sm h-5 my-2;
        }
      }
      &__state {
        @apply text-center my-2 rounded-md h-5 rounded-sm bg-gray-300 animate-pulse;
      }
    }
  }
}
</style>