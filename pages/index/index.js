//play.js
//获取应用实例
const app = getApp()

Page({
    data: {
        sliders: [{
            "_id": "十二生肖",
            "name": "十二生肖",
            "vurl": "http://www.iqiyi.com/v_19rrjybx7k.html",
            "logo": "http://pic1.iqiyipic.com/image/20180212/e0/a9/v_50378683_m_601_m7_180_236.jpg",
            "tvid": "127868300",
            "vid": "967951b6b7944555a42d7d8ba7938106"
        },
            {
                "_id": "千术3决战澳门",
                "name": "千术3决战澳门",
                "vurl": "http://www.iqiyi.com/v_19rre0llig.html",
                "logo": "http://pic6.iqiyipic.com/image/20180220/b8/f4/v_113774455_m_601_m3_180_236.jpg",
                "tvid": "821669700",
                "vid": "dea8a245a724838d4159362cdcf9b17e"
            },
            {
                "_id": "千王之王2000",
                "name": "千王之王2000",
                "vurl": "http://www.iqiyi.com/v_19rrm5jwqo.html",
                "logo": "http://pic0.iqiyipic.com/image/20180721/89/0c/v_110913033_m_601_m3_180_236.jpg",
                "tvid": "531480300",
                "vid": "4e9860cc31c24c24e1313cfdb36df502"
            },
            {
                "_id": "单身汪的假期",
                "name": "单身汪的假期",
                "vurl": "http://www.iqiyi.com/v_19rr7h3bec.html",
                "logo": "http://pic6.iqiyipic.com/image/20180220/5a/b3/v_112334160_m_601_m3_180_236.jpg",
                "tvid": "679845400",
                "vid": "26ed3ed9b2f02f3bce4f260ff5c97691"
            },
        ],//轮播资源
        news: [{
            "_id": "上帝之子",
            "name": "上帝之子",
            "vurl": "http://www.iqiyi.com/v_19rrmoarfo.html",
            "logo": "http://pic9.iqiyipic.com/image/20180708/de/57/v_108332393_m_601_m5_180_236.jpg",
            "tvid": "298593800",
            "vid": "ccdee384d0b9d5beb2d92eeda42cf5ea"
        },
            {
                "_id": "不可思异",
                "name": "不可思异",
                "vurl": "http://www.iqiyi.com/v_19rrkfn42s.html",
                "logo": "http://pic2.iqiyipic.com/image/20180217/67/97/v_109875209_m_601_m4_180_236.jpg",
                "tvid": "433800200",
                "vid": "869d53d12580c493697c12d264ee88e3"
            },
            {
                "_id": "不留活口",
                "name": "不留活口",
                "vurl": "http://www.iqiyi.com/v_19rqy2p4jk.html",
                "logo": "http://pic5.iqiyipic.com/image/20180813/9f/92/v_117942514_m_601_m2_180_236.jpg",
                "tvid": "1231366700",
                "vid": "4321d8c0b50d0536dedfd8269d188983"
            },
            {
                "_id": "乱世豪情",
                "name": "乱世豪情",
                "vurl": "http://www.iqiyi.com/v_19rre6wpi4.html",
                "logo": "http://pic2.iqiyipic.com/image/20180220/bc/4b/v_114182024_m_601_m2_180_236.jpg",
                "tvid": "861606000",
                "vid": "3e9cdb0960958ade56d12fb88f1c6598"
            },
            {
                "_id": "二代妖精之今生有幸",
                "name": "二代妖精之今生有幸",
                "vurl": "http://www.iqiyi.com/v_19rr8f187k.html",
                "logo": "http://pic1.iqiyipic.com/image/20180212/9a/ad/v_112954990_m_601_m4_180_236.jpg",
                "tvid": "741063100",
                "vid": "d50b70d241f45946fc0b190f71a1bb21"
            },
            {
                "_id": "亡命驾驶",
                "name": "亡命驾驶",
                "vurl": "http://www.iqiyi.com/v_19rrhjegyg.html",
                "logo": "http://pic1.iqiyipic.com/image/20180216/a0/ac/v_107423209_m_601_m6_180_236.jpg",
                "tvid": "256635700",
                "vid": "a5eb354113b7c609431ccddd69a51216"
            }
        ],
        tv: [{
            "_id": "人鱼校花",
            "name": "人鱼校花",
            "vurl": "http://www.iqiyi.com/v_19rr9gibj0.html",
            "logo": "http://pic2.iqiyipic.com/image/20180218/61/7b/v_111043629_m_601_m6_180_236.jpg",
            "tvid": "543828400",
            "vid": "b061f47ece7ebd520e2359d5b703cbb2"
        },
            {
                "_id": "从你的全世界路过",
                "name": "从你的全世界路过",
                "vurl": "http://www.iqiyi.com/v_19rra8tjv0.html",
                "logo": "http://pic5.iqiyipic.com/image/20180219/c5/ff/v_111408852_m_601_m3_180_236.jpg",
                "tvid": "578916000",
                "vid": "4352c179af9e7460ac4c71f2bc5a4548"
            },
            {
                "_id": "他是一只狗",
                "name": "他是一只狗",
                "vurl": "http://www.iqiyi.com/v_19rrd9et90.html",
                "logo": "http://pic4.iqiyipic.com/image/20180823/d2/0c/v_116299735_m_601_m4_180_236.jpg",
                "tvid": "1069457400",
                "vid": "eb518121a3bd673382357fb2f7a1b52c"
            },
            {
                "_id": "伊阿索密码",
                "name": "伊阿索密码",
                "vurl": "http://www.iqiyi.com/v_19rr7q79i0.html",
                "logo": "http://pic6.iqiyipic.com/image/20180807/16/df/v_112872505_m_601_m5_180_236.jpg",
                "tvid": "732894900",
                "vid": "60039258d81632dae6233aad11b14106"
            },
            {
                "_id": "伏妖·白鱼镇",
                "name": "伏妖·白鱼镇",
                "vurl": "http://www.iqiyi.com/v_19rremh1d8.html",
                "logo": "http://pic8.iqiyipic.com/image/20180220/e9/01/v_114083002_m_601_m4_180_236.jpg",
                "tvid": "851982400",
                "vid": "c72906c5a6de3febb1944e6e2bea26c5"
            },
            {
                "_id": "你的名字。",
                "name": "你的名字。",
                "vurl": "http://www.iqiyi.com/v_19rr7p4m3k.html",
                "logo": "http://pic4.iqiyipic.com/image/20180220/f3/34/v_112875429_m_601_m5_180_236.jpg",
                "tvid": "733186700",
                "vid": "0dc54011eeed778b5b5d745923e5fc2c"
            }
        ],
        video: []
    },

    onLoad(){
        wx.request({
            url:'https://mk1024.cn/movies?pgn=1&pgsize=5',
            data:{
                pgn:1,
                pgsize:5
            },
            success:(result)=>{
                //console.log(result);
                if(result.data.code==0) {
                    this.setData({
                        video: result.data.data
                    })
                }
                else{
                    wx.showToast({
                        title: result.data.msg
                    })
                }
            },
            fail:()=>{
                wx.showToast({
                    title: '网络错误'
                })
            }
        });
        wx.request({
            url:'https://mk1024.cn/news?pgn=1&pgsize=5',
            data:{
                pgn:1,
                pgsize:5
            },
            success:(result)=>{
                //if(result.data.code==0) {
                    this.setData({
                        news: result.data.data
                    })
               /* }
                else{
                    wx.showToast({
                        title: result.data.msg
                    })
                }*/
            },
            fail:()=>{
                wx.showToast({
                    title: '网络错误'
                })
            }
        });
        wx.request({
            url:'https://mk1024.cn/tvs?pgn=1&pgsize=5',
            data:{
                pgn:1,
                pgsize:5
            },
            success:(result)=>{
                //if(result.data.code==0) {
                this.setData({
                    tv: result.data.data
                })
                /* }
                 else{
                     wx.showToast({
                         title: result.data.msg
                     })
                 }*/
            },
            fail:()=>{
                wx.showToast({
                    title: '网络错误'
                })
            }
        });
    },
    goToplay(e) {
        let {tvid, vid} = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../play/play?tvid=" + tvid + '&vid=' + vid
        });
    }
})
