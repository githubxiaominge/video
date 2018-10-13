class ApiHelper {
    constructor() {
        this.baseUrl = 'https://mk1024.cn/';
    }

    request(url, data) {
        wx.showLoading({
            title:'请稍候'
        });
        return new Promise((resolve,reject)=>{
            wx.request({
                url: this.baseUrl + url,
                data: data,
                success: (result) => {
                    if (result.data.error == 0) {
                        resolve(result.data);
                    }
                    else {
                        wx.showToast({
                            title: result.data.msg
                        });
                        reject();
                    }
                    wx.hideLoading();
                },
                fail: () => {
                    wx.showToast({
                        title: '网络错误'
                    });
                    reject();
                    wx.hideLoading();
                },
                complete:()=>{
                }
            });
        })
    }
}

export default new ApiHelper();