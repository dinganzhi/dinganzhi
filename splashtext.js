        /*                            _ooOoo_
         *                           o8888888o
         *                           88" . "88
         *                           (| -_- |)
         *                            O\ = /O
         *                        ____/`---'\____
         *                      .   ' \\| |// `.
         *                       / \\||| : |||// \
         *                    / _||||| -卍- |||||- \
         *                       | | \\\ - /// | |
         *                     | \_| ''\---/'' | |
         *                      \ .-\__ `-` ___/-. /
         *                   ___`. .' /--.--\ `. . __
         *                ."" '< `.___\_<|>_/___.' >'"".
         *               | | : `- \`.;`\ _ /`;.`/ - ` : | |
         *                 \ \ `-. \_ __\ /__ _/ .-` / /
         *         ======`-.____`-.___\_____/___.-`____.-'======
         *                            `=---='
         *
         *         .............................................
         *                  佛祖镇楼                  BUG辟易
         *          佛曰:
         *                  写字楼里写字间，写字间里程序员；
         *                  程序人员写程序，又拿程序换酒钱。
         *                  酒醒只在网上坐，酒醉还来网下眠；
         *                  酒醉酒醒日复日，网上网下年复年。
         *                  但愿老死电脑间，不愿鞠躬老板前；
         *                  奔驰宝马贵者趣，公交自行程序员。
         *                  别人笑我忒疯癫，我笑自己命太贱；
         *                  不见满街漂亮妹，哪个归得程序员？
         */
        setInterval("splashtext()", "5000");//splashtext()函数名一定要带括号   
        var c = 0;
        function splashtext() {
            if (c == 13) {
                c = 1
            }
            else {
                c = c + 1
            }
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xmlhttp.send(xmlhttp.open("GET", "./text.xml", false));
            xmlDoc = xmlhttp.responseXML;

            document.getElementById("growtext").innerHTML = xmlDoc.getElementsByTagName("type" + c)[0].childNodes[0].nodeValue;
        }
        setInterval("splashtext_size()", "1");
        var splash_text_size = 16.00;
        var grow = true;
        function splashtext_size() {
            if (splash_text_size >= 18.00) {
                grow = false;
            } else if (splash_text_size <= 16.00){
                grow = true;
            }
            if (grow == true) {
                splash_text_size = splash_text_size + 0.03;
            } else {
                splash_text_size = splash_text_size - 0.03;
            }
            document.getElementById("growtext").style = "color: yellow; transform: rotateZ(10deg); font-size:" + splash_text_size + "px; position:absolute; top: 100px; right: 0px;";
        }