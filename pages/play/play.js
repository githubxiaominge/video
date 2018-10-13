import md5 from '../../utils/md5.js';
const app = getApp()

Page({
    data:{
        videoSource:''
    },

    encrypt(tvid, vid){
        var timeStamp=new Date().valueOf().toString().split('').sort().join('');
        return {timeStamp:timeStamp,md5:md5(tvid+vid+timeStamp)};

    },
    onLoad(query){
        if(query.video){
            //资讯播放
            this.setData({
                videoSource:query.video
            })
        }
        else {
            //正常播放
            let encrypt = this.encrypt(query.tvid, query.vid);
            app.request('', {
                auth: 'CODE00ETYGDUTFUWTGUTFUGLGYTQGGD',
                tvid: query.tvid,
                vid: query.vid,
                vf: encrypt.md5,
                timestamp: encrypt.timeStamp,
            }).then((result) => {
                this.setData({
                    videoSource: result.data
                })
            })
        }

    }
});