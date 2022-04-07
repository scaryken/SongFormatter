function format(str) {
    let a = str.replace(/,/g, "\n\n");
    let b = a.replace(/，/g, "\n\n");
    let c = b.replace(/。/g, "\n\n");
    let d = c.replace(/"/g, "\n\n");
    let e = d.replace(/“/g, "\n\n");
    let f = e.replace(/”/g, "\n\n");
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
        //alert（str.charAt（i））;
        if ((/[\x00-\xff]/g).test(str.charAt(i)))
            byteLen += 1;
        else
            byteLen += cnCharByteLen;
    }
    //alert(byteLen);
    return byteLen;
}

function getCurrentTime() {
    var date = new Date();
    var year = date.getFullYear(); //获取当前年份
    var month = date.getMonth() + 1; //获取当前月份
    var dat = date.getDate(); //获取当前日
    var hour = date.getHours(); //获取小时
    var minutes = date.getMinutes(); //获取分钟
    var timer = year + '年' + month + '月' + dat + '日' + ' ' + hour + ':' + minutes;
    return timer;
}