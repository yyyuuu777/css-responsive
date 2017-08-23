'use strict';

/**
 *  multi column for pc and md
 *  the js for change mobile menu res page to mobile
 **/
(function (window,document) {

    var global=Object.create({});

    /**
     * Util for ope document
     */
    (()=>{
        let Util = function () {
        }

        /**
         * @param dom
         * @param isHide hide or show the element , default : hide
         */
        Util.prototype.hide = function (dom,isHide=true) {
            let type = this.getType(dom);
            if(type==="string"){
                dom.style.display = isHide?"none":"block";
            }else if(type==="array"){
                for(let i=0,l=type.length;i<l;i++){
                    dom[i].style.display = isHide?"none":"block";
                }
            }
        }
        Util.prototype.getType = function(value){
            if(!!!value) return null;
            return value.length?"array":"string";
        }
        global.Util = Util;
    })();
    let util = new global.Util();
    window.addEventListener('resize', function () {
        let e = document.getElementsByClassName("hide-on-mobile")
        var r = document.documentElement;
        var view_width = r.getBoundingClientRect().width;
        if(view_width<563){
            console.log("---->",e);
            e&&util.hide(e);
        }else{
            e&&util.hide(e,false);
        }
    }, false);
})(window,document);
//# sourceMappingURL=maps/res-mobile.js.map
