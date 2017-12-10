<template>
  <div class="card">
      <!-- <div class="banner">
          <ul class="pic" ref="pic">
              <li 
                v-for="(item, index) in imgs" 
                :key="index" 
                v-show="index===currentIndex" 
                @mouseenter="stop" 
                @mouseleave="go">
                <a href="javascript:;">
                  <img src="http://dummyimage.com/1745x492/f1d65b" alt="111">
                </a>
              </li>
          </ul>
          <ul class="slider">
            <li v-for="index in imgs.length" :class="{'sliderActive': index === currentIndex}"></li>
          </ul>
      </div> -->
<!--       <div class="banner">
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
      </div> -->
      <slider></slider>
      <div class="links">
          <ul class="links-items">
              <!--<li class="links-item" @click="getMore">-->
                  <!--<span>全部银行</span>-->
                  <!--<span :class="down ? 'dropdown' : 'dropup'"></span>-->
              <!--</li>-->
              <!--<li class="links-item">-->
                  <!--<span>全部用途</span>-->
                  <!--<span class="dropdown"></span>-->
              <!--</li>-->
              <!--<li class="links-item">-->
                  <!--<span>全部等级</span>-->
                  <!--<span class="dropup"></span>-->
              <!--</li>-->
              <li class="links-item" v-for="(item, index) in links" :key="index" @click="getMore(item, index)">
                  <span class="links-item-name">{{item.name}}</span>
                  <span class="imgPic" :class="item.down ? 'dropdown' : 'dropup'"></span>
              </li>
          </ul>
      </div>
      <div class="item-detail" ref="itemDetail">
          <div class="item-detail-lists">
              <ul class="detail-items">
                <li v-for="(item, index) in 33" class="detail-item" @click.prevent.stop="seletedItem(item, index)">{{item}}</li>
              </ul>
          </div>
          <div class="item-detail-model"></div>
      </div>
      <div class="cards">
          <ul class="cards-items">
              <li class="cards-item">
                  <div class="cards-item-left">
                      <img src="" alt="加载中..."/>
                  </div>
                  <div class="cards-item-right">
                      <p class="card-names">
                          <span class="card-name">平安车主卡</span>
                          <a href="javascript:;" class="card-application">立即申请</a>
                      </p>
                      <ul class="card-links">
                          <li>免费道路救援服务</li>
                          <li>信用卡积分换车险某某</li>
                      </ul>
                      <p class="card-btn">
                          <a href="javascript:;">年轻白领时尚必备</a><a href="javascript:;">年轻白领时尚必备</a>
                      </p>
                  </div>
              </li>
              <li class="cards-item">
                  <div class="cards-item-left">
                      <img src="" alt="加载中..."/>
                  </div>
                  <div class="cards-item-right">
                      <p class="card-names">
                          <span class="card-name">平安车主卡</span>
                          <a href="javascript:;" class="card-application">立即申请</a>
                      </p>
                      <ul class="card-links">
                          <li>免费道路救援服务</li>
                          <li>信用卡积分换车险某某</li>
                      </ul>
                      <p class="card-btn">
                          <a href="javascript:;">年轻白领时尚必备</a><a href="javascript:;">年轻白领时尚必备</a>
                      </p>
                  </div>
              </li>
              <li class="cards-item">
                  <div class="cards-item-left">
                      <img src="" alt="加载中..."/>
                  </div>
                  <div class="cards-item-right">
                      <p class="card-names">
                          <span class="card-name">平安车主卡</span>
                          <a href="javascript:;" class="card-application">立即申请</a>
                      </p>
                      <ul class="card-links">
                          <li>免费道路救援服务</li>
                          <li>信用卡积分换车险某某</li>
                      </ul>
                      <p class="card-btn">
                          <a href="javascript:;">年轻白领时尚必备</a><a href="javascript:;">年轻白领时尚必备</a>
                      </p>
                  </div>
              </li>
              <li class="cards-item">
                  <div class="cards-item-left">
                      <img src="" alt="加载中..."/>
                  </div>
                  <div class="cards-item-right">
                      <p class="card-names">
                          <span class="card-name">平安车主卡</span>
                          <a href="javascript:;" class="card-application">立即申请</a>
                      </p>
                      <ul class="card-links">
                          <li>信用卡积分换车险某某</li>
                      </ul>
                      <p class="card-btn">
                          <a href="javascript:;">年轻白领时尚必备</a><a href="javascript:;">年轻白领时尚必备</a>
                      </p>
                  </div>
              </li>
              <li class="cards-item">
                  <div class="cards-item-left">
                      <img src="" alt="加载中..."/>
                  </div>
                  <div class="cards-item-right">
                      <p class="card-names">
                          <span class="card-name">平安车主卡</span>
                          <a href="javascript:;" class="card-application">立即申请</a>
                      </p>
                      <ul class="card-links">
                          <li>免费道路救援服务</li>
                          <li>信用卡积分换车险某某</li>
                      </ul>
                  </div>
              </li>
              <li class="cards-item">
                  <div class="cards-item-left">
                      <img src="" alt="加载中..."/>
                  </div>
                  <div class="cards-item-right">
                      <p class="card-names">
                          <span class="card-name">平安车主卡</span>
                          <a href="javascript:;" class="card-application">立即申请</a>
                      </p>
                      <ul class="card-links">
                          <li>免费道路救援服务</li>
                          <li>信用卡积分换车险某某</li>
                      </ul>
                      <p class="card-btn">
                          <a href="javascript:;">年轻白领时尚必备</a><a href="javascript:;">年轻白领时尚必备</a>
                      </p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Slider from '@/base/Slider'
export default {
  name: 'card',
  components: {
    Slider
  },
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
      links: [
        {
          down: true,
          name: '全部银行'
        },
        {
          down: true,
          name: '全部用途'
        },
        {
          down: true,
          name: '全部等级'
        }
      ]
    }
  },
  methods: {
    sliderLoop () {
    },
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
    },
    getMore (item, index) {
      this.links[index].down = !this.links[index].down
      this.$refs.itemDetail.style.display = "block"
    },
    seletedItem (item, index) {
      this.$refs.itemDetail.style.display = "none"
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
    .card{
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
        // .banner{
        //     position: fixed;
        //     left: 0;
        //     top: 0;
        //     width: 100%;
        //     .px2rem(height, 120);
        //     overflow: hidden;
        //     z-index: 100;
        //     .slider{
        //       margin: 0 auto;
        //       position: absolute;
        //       left: 50%;
        //       bottom: 8px;
        //       margin-left: -54px;
        //       text-align: center;
        //       li{
        //         float: left;
        //         margin: 0 5px;
        //         width: 32px;
        //         height: 2px;
        //         background: rgba(255,255,255,0.50);
        //       }
        //       .sliderActive{
        //         background: #FFFFFF;
        //       }
        //     }
        //     .pic{
        //         width:400%;
        //         .px2rem(height, 120);
        //         position: absolute;
        //         left:0;
        //         animation: focusmap 12s infinite;
        //         li{
        //             float: left;
        //             width: 25%;
        //             .px2rem(height, 120);
        //             background: #099;
        //             img {
        //                 width: 25%;
        //                 .px2rem(height, 120);
        //                 vertical-align: top;
        //             }
        //         }
        //     }
        //     @keyframes focusmap {
        //         0%,30%{
        //             left: 0;
        //         }
        //         35%,65%{
        //             left: -100%;
        //         }
        //         70%,99%{
        //             left: -200%;
        //         }
        //         100%{
        //             left: -300%;
        //         }
        //     }
        // }
        .links{
            position: fixed;
            left: 0;
            .px2rem(top, 120);
            width: 100%;
            .px2rem(height, 48);
            background: #FFFFFF;
            border-bottom: 2px solid rgba(0,0,0,0.08);
            z-index: 100;
            &-items{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
            }
            &-item{
                width: 33.33%;
                font-size: 15px;
                color: rgba(0,0,0,0.87);
                .px2rem(height, 24);
                .px2rem(line-height, 24);
                text-align: center;
                border-right: 1px solid rgba(0,0,0,0.12);
                white-space: nowrap;
                &:last-child{
                    border: 0;
                }
                span{
                  display: inline-block;
                  .px2rem(height, 24);
                  vertical-align: middle;
                }
                &-name{
                  .px2rem(margin-left, 24);
                }
                .imgPic{
                  .px2rem(width, 24);
                  .px2rem(height, 24);
                }
                .dropdown{
                    background: url("./../../../static/images/arrow_dropdown@3x.png") center no-repeat;
                    background-size: cover;
                }
                .dropup{
                    background: url("./../../../static/images/arrow_dropup@3x.png") center no-repeat;
                    background-size: cover;
                }
            }
        }
        .item-detail{
          display: none;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            box-sizing: border-box;
            .px2rem(padding-top, 168);
            overflow: hidden;
            z-index: 1000;
            &-lists{
                background-color: #fff;
                width: 100%;
                .px2rem(height, 304); 
                overflow-y: scroll;
                .detail-items{
                  .px2rem(margin-left, 24);
                }
                .detail-item{
                  .px2rem(height, 48);
                  .px2rem(line-height, 48);
                  font-size: 15px;
                  color: rgba(0,0,0,0.54);
                  border-bottom: 1px solid rgba(0,0,0,0.12);
                }
            }
            &-model{
                // position: fixed;
                // left: 0;
                // bottom: 0;
                width: 100%;
                .px2rem(height, 168);
                background: rgba(0,0,0,0.38);
            }
        }
        .cards{
            .px2rem(margin-top, 168);
            width: 100%;
            z-index: 99;
            &-items{
            }
            &-item{
                display: flex;
                align-items: center;
                .px2rem(height, 115);
                margin: 0 16px;
                border-bottom: 1px solid rgba(0,0,0,0.08);
                &:last-child{
                    border: 0;
                }
                &-left{
                    .px2rem(width, 109);
                    .px2rem(height, 69);
                    background: #D8D8D8;
                    border-radius: 4px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                &-right{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                    .px2rem(margin-left, 13);
                }
                .card-names{
                    .px2rem(margin-top, -5);
                    display: flex;
                    justify-content: space-between;
                    .card-name{
                        font-size: 15px;
                        color: rgba(0,0,0,0.87);
                        .px2rem(line-height, 23);
                    }
                    .card-application{
                        display: inline-block;
                        .px2rem(width, 64);
                        .px2rem(height, 24);
                        .px2rem(line-height, 24);
                        text-align: center;
                        background: #FF5722;
                        border-radius: 2px;
                        font-size: 13px;
                        color: #FFFFFF;
                    }
                }
                .card-links{
                    font-size: 13px;
                    color: rgba(0,0,0,0.54);
                    .px2rem(line-height, 20);
                }
                .card-btn{
                    .px2rem(margin-top, 3);
                    white-space: nowrap;
                    a{
                        display: inline-block;
                        .px2rem(height, 14);
                        .px2rem(line-height, 14);
                        padding: 0 3px;
                        .px2rem(margin-right, 5);
                        border: 1px solid #5C6BC0;
                        border-radius: 2px;
                        font-size: 10px;
                        transform: scale(0.9);
                        color: #5C6BC0;
                    }
                }
            }
        }
    }
</style>
