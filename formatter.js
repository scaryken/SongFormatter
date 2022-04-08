function format(str) {
    let regex = /,|，|。|"|“|”|;|；|……/g;
    let f = str.replace(regex, "\n\n");
    let strSize = calculate_byte(f);
    let timeStr = getCurrentTime();
    let location = "云岩区";
    let tail = "初稿：" + timeStr + location + "（字数：" + strSize + "）";
    return f + "\n\n" + tail;
}

function calculate_byte(str) {
    var byteLen = 0;
    var cnCharByteLen = 1;
    for (var i = 0; i < str.length; i++) {
        if ((/[\x00-\xff]/g).test(str.charAt(i)))
            byteLen += 1;
        else
            byteLen += cnCharByteLen;
    }
    return byteLen;
}

function getCurrentTime() {
    var date = new Date();
    var year = date.getFullYear(); //获取当前年份
    var month = date.getMonth() + 1; //获取当前月份
    var dat = date.getDate(); //获取当前日
    var hour = date.getHours(); //获取小时
    var minutes = date.getMinutes(); //获取分钟
    var timer = year + '年' + month + '月' + dat + '日' + hour + ':' + minutes;
    return timer;
}