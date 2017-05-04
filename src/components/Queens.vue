<template>
  <div>
    <h2 class="page-subtitle">Queens of the Stone Age</h2>
    <p>
      Queens of the Stone Age is an American rock band from Palm Desert, California, United States, formed in 1996. The band's line-up includes founder Josh Homme, Troy Van Leeuwen, Michael Shuman, Dean Fertita and recent addition Jon Theodore.
    </p>

    <div class="images">
      <img v-bind:src="image.url" v-for="image in images">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'queens',

    data() {
      return {
        images: [
          { url: '/static/galleries/queens/queens_01.png'},
          { url: '/static/galleries/queens/queens_02.jpg'},
          { url: '/static/galleries/queens/queens_03.jpg'},
          { url: '/static/galleries/queens/queens_04.jpg'}
        ]
      }
    }
  }
</script>
