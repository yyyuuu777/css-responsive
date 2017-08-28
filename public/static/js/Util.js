"use strict";

/**
 * Created by ly on 8/27/2017 AD.
 */

(function () {

    var Util = function Util() {
        this.head = "dialog-head";
    };
    /**
     *  {param : function} sure btn : callBack
     */
    Util.prototype.initDialog = function (id, callBack) {
        this.addBg();
        this.dialogId = id;
        this.dom_dialog = this.getDom(this.dialogId);
        this.addCloseBtn(this.dom_dialog.children[0]);
        this.callBack = callBack;
        if (this.dom_dialog.children[2] && this.dom_dialog.children[2].className.indexOf("bottom") >= 0) {
            this.addEve([
            //todo:// change dome get way
            this.dom_dialog.children[2].children[0], this.dom_dialog.children[2].children[1]]);
        }
        return this;
    };

    Util.prototype.addBg = function () {
        var dom = document.createElement("div");
        var style = "display:none;position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color: rgba(0,0,0,0.5);z-index:10";
        dom.style.cssText = style;
        this.dialog_bg = dom;
        document.getElementsByTagName("body")[0].appendChild(dom);
    };

    Util.prototype.addCloseBtn = function (dom) {
        dom.appendChild(this.createCloseBtn());
    };

    Util.prototype.createCloseBtn = function () {
        var closeBtn = document.createElement("p");
        var imgBtn = document.createElement("img");
        imgBtn.setAttribute("src", "./static/imgs/close.png");
        closeBtn.setAttribute("id", "close");
        closeBtn.appendChild(imgBtn);
        this.addEve([closeBtn]);
        return closeBtn;
    };
    Util.prototype.addEve = function (arr) {
        var _this = this;

        arr.map(function (item) {
            // get all event
            item.addEventListener('click', function () {
                item.className.indexOf("sure") >= 0 && _this.callBack();
                _this.hide_dialog();
            });
        });
    };

    Util.prototype.show_dialog = function () {
        this.dialog_bg.style.display = 'block';
        this.dom_dialog.style.display = 'block';
    };

    Util.prototype.hide_dialog = function () {
        this.dialog_bg.style.display = 'none';
        this.dom_dialog.style.display = 'none';
    };
    Util.prototype.getDom = function (id) {
        return document.getElementById(id);
    };
    Util.prototype.getDomsByClass = function (className) {
        return document.getElementsByClassName(className);
    };
    window.util = Util;
})();
//# sourceMappingURL=maps/Util.js.map
