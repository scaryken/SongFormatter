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

function copyString(string) {
    if (!string) return false
    let dom = document.createElement('textarea');
    dom.value = string;
    document.body.appendChild(dom);
    dom.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    document.body.removeChild(dom)
    console.log('内容已经复制到剪切板')
    return true
}
function formatDrunk(fuck1, fuck2, action, place, thing, result) {
    let fuckResult = "";
    fuckResult = "操他妈，这个破" + fuck1 + "，草操他妈的破" + fuck2 + "\r\n老子" + action + "啦" + place + "最多的" + thing + "，他妈的老子居然不" + result + "……操他妈";
    return fuckResult;
}
function formatKicked(thing1,action1,thing2,action2) {
    let fuckResult = "";
    fuckResult = "已踢\r\n\r\n我没有时间辨别是否" + thing1 + "\r\n\r\n我做的是" + action1 + "\r\n\r\n要有自己的" + thing2
     + "\r\n\r\n人要学会" + action2 + "\r\n\r\n排除异己结党营私";
    return fuckResult;
}