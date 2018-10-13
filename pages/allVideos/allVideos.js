/**
 * Created by 小敏哥 on 2018/10/5.
 */
const app = getApp()
var currentPage=1;
Page({
    data: {
        list:[],
        type:''
    },


    //分页获取
    getMoreVideo(){
        app.request(this.data.type, {
            pgn: currentPage++,
            pgsize: 20
        }).then((result) => {
            this.setData({
                list: this.data.list.concat(result.data)
            })
        });
    },

    onLoad(query) {
        this.setData({
            type:query.type
        });
        //首次加载
        this.getMoreVideo();
    },

    //播放视频
    goToplay(e){
        let {tvid, vid} = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../play/play?tvid=" + tvid + '&vid=' + vid
        });
    },

    //跳转到剧集列表
    goToTvList(e){
        let {name} = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../tvList/tvList?name=" + name
        });
    },

    //页面退出时重新初始化
    onUnload(){
        currentPage=1;
    },


    onHide(){
        currentPage=1;
    }
});