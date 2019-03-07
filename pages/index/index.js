//index.js


Page({
    data: {
        messages: [
            
        ]

    },
    onLoad: function(){
        var that = this
        wx.request({
            // // PHP运行
            // url: 'http://localhost/data.php',
            // Node 运行
            url: 'http://localhost/msg',
            header: {
                // // PHP 运行
                // 'Content-Type': 'application/json'
                // Node 运行
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                console.log(res.data)
                that.setData({
                    messages: res.data.data
                })
            }
        })
    },
    formSubmit: function (e) {
        var data = e.detail.value
        data.title = "User";

        wx.request({
            // // PHP 运行
            // url: 'http://localhost/input.php',
            // Node 运行
            url: 'http://localhost/msg',
            method: 'POST',
            data: data,
            header: {
                // // PHP 运行
                // 'Content-Type': 'application/json'
                // Node 运行
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                this.onLoad
            }
        })
        
    }
});
