//index.js


Page({
    data: {
        messages: [
            
        ]

    },
    onLoad: function(){
        var that = this
        wx.request({
            url: 'http://localhost/mini/data.php',
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                console.log(res.data)
                that.setData({
                    messages: res.data
                })
            }
        })
    },
    formSubmit: function (e) {
        var data = e.detail.value
        data.title = "User";

        wx.request({
            url: 'http://localhost/mini/input.php',
            method: 'POST',
            data: data,
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                this.onLoad
            }
        })
        
    }
});
