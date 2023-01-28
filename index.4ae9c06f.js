function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NiceSelect=t():e.NiceSelect=t()}(self,(function(){return function(){"use strict";var e={d:function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function i(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!1),e.dispatchEvent(t)}function n(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),e.dispatchEvent(t)}function o(e){var t=document.createEvent("FocusEvent");t.initEvent("focusin",!0,!1),e.dispatchEvent(t)}function s(e){var t=document.createEvent("FocusEvent");t.initEvent("focusout",!0,!1),e.dispatchEvent(t)}function r(e){var t=document.createEvent("UIEvent");t.initEvent("modalclose",!0,!1),e.dispatchEvent(t)}function l(e,t){"invalid"==t?(c(this.dropdown,"invalid"),u(this.dropdown,"valid")):(c(this.dropdown,"valid"),u(this.dropdown,"invalid"))}function d(e,t){return null!=e[t]?e[t]:e.getAttribute(t)}function a(e,t){return!!e&&e.classList.contains(t)}function c(e,t){if(e)return e.classList.add(t)}function u(e,t){if(e)return e.classList.remove(t)}e.r(t),e.d(t,{bind:function(){return f},default:function(){return h}});var p={data:null,searchable:!1,showSelectedItems:!1};function h(e,t){this.el=e,this.config=Object.assign({},p,t||{}),this.data=this.config.data,this.selectedOptions=[],this.placeholder=d(this.el,"placeholder")||this.config.placeholder||"Select an option",this.searchtext=d(this.el,"searchtext")||this.config.searchtext||"Search",this.selectedtext=d(this.el,"selectedtext")||this.config.selectedtext||"selected",this.dropdown=null,this.multiple=d(this.el,"multiple"),this.disabled=d(this.el,"disabled"),this.create()}function f(e,t){return new h(e,t)}return h.prototype.create=function(){this.el.style.opacity="0",this.el.style.width="0",this.el.style.padding="0",this.el.style.height="0",this.data?this.processData(this.data):this.extractData(),this.renderDropdown(),this.bindEvent()},h.prototype.processData=function(e){var t=[];e.forEach((function(e){t.push({data:e,attributes:{selected:!!e.selected,disabled:!!e.disabled,optgroup:"optgroup"==e.value}})})),this.options=t},h.prototype.extractData=function(){var e=this,t=this.el.querySelectorAll("option,optgroup"),i=[],n=[],o=[];t.forEach((function(t){if("OPTGROUP"==t.tagName)var o={text:t.label,value:"optgroup"};else o={text:t.innerText,value:t.value,selected:null!=t.getAttribute("selected")||e.el.value==t.value,disabled:null!=t.getAttribute("disabled")};var s={selected:t.selected,disabled:t.disabled,optgroup:"OPTGROUP"==t.tagName};i.push(o),n.push({data:o,attributes:s})})),this.data=i,this.options=n,this.options.forEach((function(e){e.attributes.selected&&o.push(e)})),this.selectedOptions=o},h.prototype.renderDropdown=function(){var e=["nice-select",d(this.el,"class")||"",this.disabled?"disabled":"",this.multiple?"has-multiple":""],t='<div class="nice-select-search-box">';t+='<input type="text" class="nice-select-search" placeholder="'.concat(this.searchtext,'..." title="search"/>'),t+="</div>";var i='<div class="'.concat(e.join(" "),'" tabindex="').concat(this.disabled?null:0,'">');i+='<span class="'.concat(this.multiple?"multiple-options":"current",'"></span>'),i+='<div class="nice-select-dropdown">',i+="".concat(this.config.searchable?t:""),i+='<ul class="list"></ul>',i+="</div>",i+="</div>",this.el.insertAdjacentHTML("afterend",i),this.dropdown=this.el.nextElementSibling,this._renderSelectedItems(),this._renderItems()},h.prototype._renderSelectedItems=function(){if(this.multiple){var e="";this.config.showSelectedItems||this.config.showSelectedItems||"auto"==window.getComputedStyle(this.dropdown).width||this.selectedOptions.length<2?(this.selectedOptions.forEach((function(t){e+='<span class="current">'.concat(t.data.text,"</span>")})),e=""==e?this.placeholder:e):e=this.selectedOptions.length+" "+this.selectedtext,this.dropdown.querySelector(".multiple-options").innerHTML=e}else{var t=this.selectedOptions.length>0?this.selectedOptions[0].data.text:this.placeholder;this.dropdown.querySelector(".current").innerHTML=t}},h.prototype._renderItems=function(){var e=this,t=this.dropdown.querySelector("ul");this.options.forEach((function(i){t.appendChild(e._renderItem(i))}))},h.prototype._renderItem=function(e){var t=document.createElement("li");if(t.innerHTML=e.data.text,e.attributes.optgroup)c(t,"optgroup");else{var i;t.setAttribute("data-value",e.data.value);var n=["option",e.attributes.selected?"selected":null,e.attributes.disabled?"disabled":null];t.addEventListener("click",this._onItemClicked.bind(this,e)),(i=t.classList).add.apply(i,_toConsumableArray(n))}return e.element=t,t},h.prototype.update=function(){if(this.extractData(),this.dropdown){var e=a(this.dropdown,"open");this.dropdown.parentNode.removeChild(this.dropdown),this.create(),e&&i(this.dropdown)}d(this.el,"disabled")?this.disable():this.enable()},h.prototype.disable=function(){this.disabled||(this.disabled=!0,c(this.dropdown,"disabled"))},h.prototype.enable=function(){this.disabled&&(this.disabled=!1,u(this.dropdown,"disabled"))},h.prototype.clear=function(){this.resetSelectValue(),this.selectedOptions=[],this._renderSelectedItems(),this.update(),n(this.el)},h.prototype.destroy=function(){this.dropdown&&(this.dropdown.parentNode.removeChild(this.dropdown),this.el.style.display="")},h.prototype.bindEvent=function(){this.dropdown.addEventListener("click",this._onClicked.bind(this)),this.dropdown.addEventListener("keydown",this._onKeyPressed.bind(this)),this.dropdown.addEventListener("focusin",o.bind(this,this.el)),this.dropdown.addEventListener("focusout",s.bind(this,this.el)),this.el.addEventListener("invalid",l.bind(this,this.el,"invalid")),window.addEventListener("click",this._onClickedOutside.bind(this)),this.config.searchable&&this._bindSearchEvent()},h.prototype._bindSearchEvent=function(){var e=this.dropdown.querySelector(".nice-select-search");e&&e.addEventListener("click",(function(e){return e.stopPropagation(),!1})),e.addEventListener("input",this._onSearchChanged.bind(this))},h.prototype._onClicked=function(e){var t,i;if(e.preventDefault(),a(this.dropdown,"open")?this.multiple||(u(this.dropdown,"open"),r(this.el)):(c(this.dropdown,"open"),t=this.el,(i=document.createEvent("UIEvent")).initEvent("modalopen",!0,!1),t.dispatchEvent(i)),a(this.dropdown,"open")){var n=this.dropdown.querySelector(".nice-select-search");n&&(n.value="",n.focus());var o=this.dropdown.querySelector(".focus");u(o,"focus"),c(o=this.dropdown.querySelector(".selected"),"focus"),this.dropdown.querySelectorAll("ul li").forEach((function(e){e.style.display=""}))}else this.dropdown.focus()},h.prototype._onItemClicked=function(e,t){var i=t.target;a(i,"disabled")||(this.multiple?a(i,"selected")?(u(i,"selected"),this.selectedOptions.splice(this.selectedOptions.indexOf(e),1),this.el.querySelector('option[value="'.concat(i.dataset.value,'"]')).removeAttribute("selected")):(c(i,"selected"),this.selectedOptions.push(e)):(this.selectedOptions.forEach((function(e){u(e.element,"selected")})),c(i,"selected"),this.selectedOptions=[e]),this._renderSelectedItems(),this.updateSelectValue())},h.prototype.updateSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var i=e.querySelector('option[value="'.concat(t.data.value,'"]'));i&&i.setAttribute("selected",!0)}))}else this.selectedOptions.length>0&&(this.el.value=this.selectedOptions[0].data.value);n(this.el)},h.prototype.resetSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var i=e.querySelector('option[value="'.concat(t.data.value,'"]'));i&&i.removeAttribute("selected")}))}else this.selectedOptions.length>0&&(this.el.selectedIndex=-1);n(this.el)},h.prototype._onClickedOutside=function(e){this.dropdown.contains(e.target)||(u(this.dropdown,"open"),r(this.el))},h.prototype._onKeyPressed=function(e){var t=this.dropdown.querySelector(".focus"),n=a(this.dropdown,"open");if(13==e.keyCode)i(n?t:this.dropdown);else if(40==e.keyCode){if(n){var o=this._findNext(t);o&&(u(this.dropdown.querySelector(".focus"),"focus"),c(o,"focus"))}else i(this.dropdown);e.preventDefault()}else if(38==e.keyCode){if(n){var s=this._findPrev(t);s&&(u(this.dropdown.querySelector(".focus"),"focus"),c(s,"focus"))}else i(this.dropdown);e.preventDefault()}else if(27==e.keyCode&&n)i(this.dropdown);else if(32===e.keyCode&&n)return!1;return!1},h.prototype._findNext=function(e){for(e=e?e.nextElementSibling:this.dropdown.querySelector(".list .option");e;){if(!a(e,"disabled")&&"none"!=e.style.display)return e;e=e.nextElementSibling}return null},h.prototype._findPrev=function(e){for(e=e?e.previousElementSibling:this.dropdown.querySelector(".list .option:last-child");e;){if(!a(e,"disabled")&&"none"!=e.style.display)return e;e=e.previousElementSibling}return null},h.prototype._onSearchChanged=function(e){var t=a(this.dropdown,"open"),i=e.target.value;if(""==(i=i.toLowerCase()))this.options.forEach((function(e){e.element.style.display=""}));else if(t){var n=new RegExp(i);this.options.forEach((function(e){var t=e.data.text.toLowerCase(),i=n.test(t);e.element.style.display=i?"":"none"}))}this.dropdown.querySelectorAll(".focus").forEach((function(e){u(e,"focus")})),c(this._findNext(null),"focus")},t}()}));
//# sourceMappingURL=index.4ae9c06f.js.map
