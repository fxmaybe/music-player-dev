<template>
  <div class="rank" ref="rank">
    <b-scroll class="toplist" ref="topList">
      <ul>
        <li class="item" v-for="(item, index) in topList" :key="index + 1">
          <div class="icon">
            <img width="100" height="100" v-lazy="item.picUrl" />
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index2) in item.songList" :key="index2 + 1">
              <span>{{index2 + 1}}</span>
              <span>{{song.singername +"-"+ song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </b-scroll>
    <div class="loading-container" v-show="!topList.length">
      <b-loading></b-loading>
    </div>
  </div>
</template>

<script>
  import BLoading from '@/base/loading/BLoading';
  import { playListMixin } from '@/assets/js/mixin';
  import BScroll from '@/base/BScroll';
  import {getTopList} from '@/api/rank';
  import { CODEHASH } from '@/api/config';

  export default {
    mixins: [playListMixin],
    created() {
      this._getTopList();
    },
    data() {
      return {
        topList: []
      }
    },
    methods: {
      _getTopList() {
        getTopList().then(res => {
          if(res.code === CODEHASH.CODE_OK) {
            this.topList = res.data.topList
          }
        });
      },
      handlePlaylist() {
        const bottom = this.topList.length > 0 ? '60px' : '';

        this.$refs.rank.style.bottom = bottom;
        this.$refs.topList.refresh();
      }
    },
    watch: {

    },
    components: {
      BLoading,
      BScroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable";
  @import "~assets/stylus/mixin";

  .rank {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .toplist {
      height: 100%;
      overflow: hidden;
      .item {
        display: flex;
        margin: 0 20px;
        padding-top: 20px;
        height: 100px;
        &:last-child {
          padding-bottom: 20px;
        }
        .icon {
          flex: 0 0 100px;
          width: 100px;
          height: 100px;
        }
        .songlist {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
          height: 100px;
          overflow: hidden;
          background: $color-highlight-background;
          color: $color-text-d;
          font-size: $font-size-small;
          .song {
            no-wrap();
            line-height: 26px;
          }
        }
      }
      .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>