/**
 * Created by 小敏哥 on 2018/10/5.
 */

const app = getApp()

Page({
    data: {
        tvList:[]
    },

    goToplay(e) {
        let {tvid, vid} = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../play/play?tvid=" + tvid + '&vid=' + vid
        });
    },

    onLoad(query) {
        app.request('tv', {
            name:query.name
        }).then((result) => {
            this.setData({
                tvList: result.data.vlist
            })
        });
    }
});