<template>
  <div>
    <h2 class="page-subtitle">Ghost</h2>
    <p>
      Ghost is a Swedish heavy metal band that was formed in Linköping in 2008. In 2010, they released a 3-track demo followed by a 7" vinyl titled "Elizabeth", and later their debut full-length album Opus Eponymous.
    </p>

    <div class="images">
      <img v-bind:src="image.url" v-for="image in images">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ghost',

    data() {
      return {
        images: [
          { url: '/static/galleries/ghost/ghost_01.jpg'},
          { url: '/static/galleries/ghost/ghost_02.jpg'},
          { url: '/static/galleries/ghost/ghost_03.jpg'},
          { url: '/static/galleries/ghost/ghost_04.jpg'}
        ]
      }
    }
  }
</script>
