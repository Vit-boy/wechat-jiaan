import wx from 'weixin-js-sdk'

export function share(param) {
    console.log(param)
    let _param = {
        debug: false,
        appId: param.appId ? param.appId :'',
        timestamp: param.timestamp ? param.timestamp :'', // 必填，生成签名的时间戳
        nonceStr: param.nonceStr ? param.nonceStr :'', // 必填，生成签名的随机串
        signature: param.signature ? param.signature :'', // 必填，签名
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    }

    wx.config(_param)

    wx.ready(() => {        
        wx.onMenuShareTimeline({
            title: param.title,
            link: param.link,
            imgUrl: param.imgUrl,
            success: function () {
            }
        })

        wx.onMenuShareAppMessage({
            title: param.title,
            desc: param.desc,
            link: param.link,
            imgUrl: param.imgUrl,
            success: function () {
            }
        })
    
    })
}