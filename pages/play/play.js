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
        let encrypt=this.encrypt(query.tvid,query.vid);
        wx.request({
            url:'https://mk1024.cn/',
            data:{
                auth:'CODE00ETYGDUTFUWTGUTFUGLGYTQGGD',
                tvid:query.tvid,
                vid:query.vid,
                vf:encrypt.md5,
                timestamp:encrypt.timeStamp,
            },
            success:(result)=>{
                console.log(result);
                if(result.data.code==0){
                    this.setData({
                        videoSource:result.data.data
                    })
                }
                else{
                    wx.showToast({
                      title: result.data.msg

                    })
                }
            },
            fail:()=>{

            }
        })
    }
});