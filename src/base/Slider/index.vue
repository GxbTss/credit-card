<template>
  <div class="slider">
      <div class="banner">
        <ul class='slide-ul'>
        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
          <a :href="list.clickUrl" >
            <img :src="list.image" :alt="list.desc">
          </a>
        </li>
        </ul>
        <div class="carousel-items">
          <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      slideList: [
          {
              "clickUrl": "#",
              "desc": "nhwc",
              "image": "http://dummyimage.com/1745x492/f1d65b"
          },
          {
              "clickUrl": "#",
              "desc": "hxrj",
              "image": "http://dummyimage.com/1745x492/40b7ea"
          },
          {
              "clickUrl": "#",
              "desc": "rsdh",
              "image": "http://dummyimage.com/1745x492/e3c933"
          }
      ],
      currentIndex: 0,
      timer: '',
    }
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
      },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay() {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  }
}
</script>

<style lang="less">
  @import './../../common/styles/mixins.less';
  .slider{
      width: 100%;
      min-height: 100%;
      .banner {
        position: fixed;
        left: 0;
        top: 0;
        .px2rem(height, 120);
        width: 100%;
        overflow: hidden;
        background-color: #fff;
      }
      .slide-ul {
        width: 100%;
        height: 100%;
        li {
          position: absolute;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .carousel-items {
        position: absolute;
        top: 100px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 0;
        span {
          display: inline-block;
          height: 6px;
          width: 30px;
          margin: 0 3px;
          background-color: #b2b2b2;
          cursor: pointer;
        }
        .active {
          background-color: #fff;
        }
      }
  }
</style>
