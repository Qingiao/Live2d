        // 不同人物形象
        // 黑猫
        hijiki = "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json"
        // 白猫
        tororo = "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json"
        // 狗狗
        wanko = "https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json"
         
        // 人物
        koharu = "assets/model/haru/haru.model.json"
        shizuku = "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json"
        z16 = "https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json"
        sawu="assets/model/sagiri/sagiri.model.json"                                                //和泉纱雾
        epsilon="assets/model/sagiri/Epsilon2.1.model.json"
        katou="assets/model/katou_01/katou_01.model.json"                                           //加藤惠
        sawu="assets/model/sagiri/sagiri.model.json"
         
            L2Dwidget.init({
                "model": {
                    // 在这里使用上面的人物名称替换“shizuku”，可以切换人物形象
                    jsonPath: katou,
                    "scale": 5
                },
                "display": {
                    "position": "left",      //模型显示左右
                    "width": 500,            //模型展示宽度
                    "height": 700,           //模型展示长度
                    "hOffset": -80,           //模型展示向右偏移
                    "vOffset": -60          //模型展示向上偏移
                },
                "mobile": {
                    "show": true,            //模型显示
                    "scale": 0.5
                },
                "react": {
                    "opacityDefault": 1,     //不透明度
                    "opacityOnHover": 0.2
                },
                
                
              MOTION_GROUP_IDLE : "idle", // 空闲时
    MOTION_GROUP_TAP_BODY : "tap_body", // 点击身体时
    MOTION_GROUP_FLICK_HEAD : "flick_head", // 抚摸头部
    MOTION_GROUP_PINCH_IN : "pinch_in", // 放大时
    MOTION_GROUP_PINCH_OUT : "pinch_out", // 缩小时
    MOTION_GROUP_SHAKE : "shake", // 摇晃
            });
            