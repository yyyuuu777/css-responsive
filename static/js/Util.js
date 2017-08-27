/**
 * Created by ly on 8/27/2017 AD.
 */

(function(){

   var dialog = {
       dialogId :'dialog',
   }

    var Util = function () {
    }

    Util.prototype.initDialog= function () {
        var dom = document.createElement("div");
        var style = "display:none;position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color: rgba(0,0,0,0.5);z-index:10"
        dom.style.cssText= style;
        document.getElementsByTagName("body")[0].appendChild(dom);
        var dom_dialog = this.dom_dialog = this.getDom(dialog.dialogId);
        dom_dialog.style.position = "fixed";
        dom_dialog.style.top = 0;
        dom_dialog.style.bottom = 0;
        dom_dialog.style.left = 0;
        dom_dialog.style.right = 0;
        dom_dialog.style.maxHeight= "500px";
        dom_dialog.style.maxWidth= "500px";
        dom_dialog.style.minWidth = '200px';
        dom_dialog.style.minHeight = '200px';
        dom_dialog.style.background = '#fff';
        dom_dialog.style.display="none";
        dom_dialog.style.margin = "auto";
        this.dialog_bg = dom;
    }

    Util.prototype.show_dialog = function(){
       this.dialog_bg.style.display = 'block'  ;
       this.dom_dialog.style.display = 'block';
    }

    Util.prototype.hide_dialog = function(){
        var dialog = this.getDom(dialog.dialogId);
        this.dialog_bg.style.display = 'none'  ;
        this.dom_dialog.style.display = 'none';
    }

    Util.prototype.getDom = function (id) {
        return document.getElementById(id);
    }
    window.util = new Util();
})();
