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
        news: [],
        tv: [],
        video: []
    },

    onLoad() {
        //获取电影
        app.request('movies', {
            pgn: 1,
            pgsize: 5
        }).then((result) => {
            this.setData({
                video: result.data
            })
        });

        //获取新闻资讯
        app.request('news', {
            pgn: 1,
            pgsize: 5
        }).then((result) => {
            this.setData({
                news: result.data
            })
        });

        //获取连续剧
        app.request('tvs', {
            pgn: 1,
            pgsize: 5
        }).then((result) => {
            this.setData({
                tv: result.data
            })

        });

    },
    goToplay(e) {
        let {tvid, vid} = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../play/play?tvid=" + tvid + '&vid=' + vid
        });
    },
    //跳转到剧集列表
    goToTvList(e) {
        let {name} = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../tvList/tvList?name=" + name
        });
    }
});
