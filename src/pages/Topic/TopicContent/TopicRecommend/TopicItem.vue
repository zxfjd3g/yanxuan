<template>
<div>
    <div class="tpl1" style="height:4.48rem" v-if="ad">
        <a :href="ad.schemeUrl" >
            <div class="pic">
                <img :src="ad.picUrl"/>
            </div>
        </a>
    </div>
    <div class="tpl1" v-if="topic&&!topic.type">
        <a :href="topic.schemeUrl">
            <div class="name">
                <span class="ava">
                    <img :src="topic.avatar">
                </span>
                <span>{{topic.nickname}}</span>
            </div>
            <div class="title">{{topic.title}}</div>
            <div class="pic">
                <img src="./images/test.jpg"/>
            </div>
            <div class="rcount">
                <i class="icon"></i>
                <span>93.7k人看过</span>
            </div>
        </a>
    </div>
    <div class="tps2" v-if="topic&&topic.type">
        <a :href="topic.schemeUrl">
            <div class="info">
                <div class="info">
                    <div class="name">
                        <span class="ava">
                            <img :src="topic.avatar" alt="" width="100%" height="100%">
                        </span>
                        <span>{{topic.nickname}}</span>
                    </div>
                    <div class="title">{{topic.title}}</div>
                    <div class="desc">{{topic.subTitle}}</div>
                    <div class="rcount"><i class="icon"></i><span>{{topic.readCount/1000}}k人看过</span>
                    </div>
                </div>
            </div>
            <div class="pic">
                <img :src="topic.picUrl" alt="" width="100%" height="100%">
            </div>
        </a>
    </div>
</div>
</template>

<script>
export default {
    props:{
        topic:Object,
        ad:Object
    },
    mounted(){
        console.log(this.topic,this.ad)
    }
    
}
</script>

<style lang="stylus" scoped>

.tpl1{
    width 100%
    height 6.74rem
    padding 0.36rem 0.3rem
    margin 0.2rem 0;
    background-color #fff
    a{
        display block
        width 100%
        height 100%
        .name{
            height 0.56rem
            margin-bottom 0.24rem
            font-size: .28rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            span{
                display: inline-block;
                vertical-align: middle;
            }
            .ava{
                width: 0.56rem;
                height: 0.56rem;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .12rem;
                font-size 0px
                img{
                    height 100%
                }
            }
        }
        .title{
            font-size: 0.36rem;
            color: #333;
            line-height: 0.52rem;
            margin: -0.08rem 0 0.16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: PingFangSC-Regular;
        }
        .pic{
            width: 6.9rem;
            height: 3.76rem;
            position: relative;
            margin-bottom: .2rem;
            overflow: hidden;
            border-radius: .08rem;
            img{
                width 100%
                height 100%
            }
        }
        .rcount{
            font-size: 0.22rem;
            color: #999;
            line-height: 0.32rem;
            margin-top: 0.18rem;
            margin-bottom: -0.16rem;
            .icon{
                display: inline-block;
                width: 0.28rem;
                height: 0.2rem;
                vertical-align: middle;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat;
                margin-right: 0.08rem;
                background-size:100% 100%;
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
}

.tps2{
    position: relative;
    padding: 0.32rem 0.3rem;
    width: 100%;
    height 3.36rem
    background: #fff;
    margin: 0.2rem 0;
    .info{
        width: 4rem;
        float left
        .name{
            font-size: 0.28rem;
            color: #333;
            line-height: 0.36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            span{
                display: inline-block;
                vertical-align: middle;
            }
            .ava{
                width: 0.56rem;
                height: 0.56rem;
                overflow: hidden;
                border-radius: 50%;
                border: 0.01rem solid #d9d9d9;
                margin-right: 0.12rem;
            }
        }
        .title{
            width: 100%;
            font-size: 0.36rem;
            color: #333;
            line-height: 0.44rem;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-top: 0.32rem;
            font-family: PingFangSC-Regular;
        }
        .desc{
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.28rem;
            line-height: 0.4rem;
            padding-top: 0.08rem;
            color: #7f7f7f;
        }
        .rcount{
            position: absolute;
            left: 0.3rem;
            bottom: 0.26rem;
            font-size: 0.22rem;
            color: #999;
            line-height: 0.32rem;
            margin-top: 0.18rem;
            .icon{
                display: inline-block;
                width: 0.28rem;
                height: 0.2rem;
                vertical-align: middle;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==') no-repeat;
                margin-right: 0.08rem;
                background-size:100% 100%;
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    .pic{
        width: 2.72rem;
        height: 2.72rem;
        position: relative;
        overflow: hidden;
        border-radius: 0.08rem;
        background: #f0f0f0;
        img{
            width 100%
            height 100%
        }
    }
    
}
</style>
