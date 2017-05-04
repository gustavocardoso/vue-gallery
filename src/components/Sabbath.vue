<template>
  <div>
    <h2 class="page-subtitle">Black Sabbath</h2>
    <p>
      Black Sabbath were an English rock band, formed in Birmingham in 1968, by guitarist and main songwriter Tony Iommi, bassist and main lyricist Geezer Butler, singer Ozzy Osbourne, and drummer Bill Ward.
    </p>

    <div class="images">
      <img v-bind:src="image.url" v-for="image in images">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sabbath',

    data() {
      return {
        images: [
          { url: '/static/galleries/sabbath/sabbath_01.jpg'},
          { url: '/static/galleries/sabbath/sabbath_02.jpg'},
          { url: '/static/galleries/sabbath/sabbath_03.jpg'},
          { url: '/static/galleries/sabbath/sabbath_04.jpg'}
        ]
      }
    }
  }
</script>
