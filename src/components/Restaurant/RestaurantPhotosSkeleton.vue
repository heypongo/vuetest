<template>
  <div class="restaurant__photos">
    <h2 class="photos__title"></h2>
    <div class="photos__list">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.restaurant {
  &__photos {
    @apply w-full h-96 flex flex-col my-2 md:my-8 p-5 bg-slate-100 rounded-xl;
    .photos {
      &__title {
        @apply w-80 h-5 my-5 h-5 rounded-sm bg-gray-300 animate-pulse;
      }
      &__list {
        @apply flex overflow-x-scroll w-full h-72 md:h-96;
        div {
          @apply w-72 h-full mr-2 lg:mr-5 rounded-xl  bg-gray-300 animate-pulse;
        }
      }
    }
  }
}
</style>