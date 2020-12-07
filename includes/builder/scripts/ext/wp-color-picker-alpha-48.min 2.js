/*! wp-color-picker-alpha - Version 1.0
 * Copyright (c) 2017 Elegant Themes; Licensed under the GPLv2 license.
 * This is modified version made by Elegant Themes based on the work covered by the following copyright:
 * wp-color-picker-alpha - Version: 1.1
 * https://github.com/23r9i0/wp-color-picker-alpha
 * Copyright (c) 2015 Sergio P.A. (23r9i0);  Licensed under the GPLv2 license.
 */
!function(t){var i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==";Color.fn.toString=function(){if(this._alpha<1)return this.toCSS("rgba",this._alpha).replace(/\s+/g,"");var t=parseInt(this._color,10).toString(16);if(this.error)return"";if(t.length<6)for(var i=6-t.length-1;i>=0;i--)t="0"+t;return"#"+t},t.widget("wp.wpColorPicker",t.wp.wpColorPicker,{_create:function(){if(t.support.iris){var o=this,e=o.element;t.extend(o.options,e.data()),o.close=t.proxy(o.close,o),o.initialValue=e.val(),e.addClass("wp-color-picker").hide().wrap('<div class="wp-picker-container" />'),o.wrap=e.parent(),o.toggler=t('<a tabindex="0" class="wp-color-result" />').insertBefore(e).css({backgroundColor:o.initialValue}).attr("title",wpColorPickerL10n.pick).attr("data-current",wpColorPickerL10n.current),o.pickerContainer=t('<div class="wp-picker-holder" />').insertAfter(e),o.button=t('<input type="button" class="button button-small button-clear hidden" />'),o.close_button=t('<button type="button" class="button button-confirm" />'),o.options.defaultColor?o.button.addClass("wp-picker-default").val(wpColorPickerL10n.defaultString):o.button.addClass("wp-picker-clear").val(wpColorPickerL10n.clear),e.wrap('<span class="wp-picker-input-wrap" />').after(o.button),o.options.diviColorpicker&&(o.close_button.html('<div style="fill: #3EF400; width: 25px; height: 25px; margin-top: -1px;"><svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision"><g><path d="M19.203 9.21a.677.677 0 0 0-.98 0l-5.71 5.9-2.85-2.95a.675.675 0 0 0-.98 0l-1.48 1.523a.737.737 0 0 0 0 1.015l4.82 4.979a.677.677 0 0 0 .98 0l7.68-7.927a.737.737 0 0 0 0-1.015l-1.48-1.525z" fillRule="evenodd" /></g></svg></div>'),e.after(o.close_button)),e.iris({target:o.pickerContainer,hide:o.options.hide,width:o.options.width,height:o.options.height,diviColorpicker:o.options.diviColorpicker,mode:o.options.mode,palettes:o.options.palettes,change:function(e,r){o.options.alpha?(o.toggler.css({"background-image":"url("+i+")"}).html("<span />"),o.toggler.find("span").css({width:"100%",height:"100%",position:"absolute",top:0,left:0,"border-top-left-radius":"3px","border-bottom-left-radius":"3px",background:r.color.toString()})):o.toggler.css({backgroundColor:r.color.toString()}),t.isFunction(o.options.change)&&o.options.change.call(this,e,r)}}),e.val(o.initialValue),o._addListeners(),o.options.hide||o.toggler.click()}},_addListeners:function(){var i=this;i.wrap.on("click.wpcolorpicker",function(t){t.stopPropagation()}),i.toggler.click(function(){i.toggler.hasClass("wp-picker-open")?i.close():i.open()}),i.element.change(function(o){(""===t(this).val()||i.element.hasClass("iris-error"))&&(i.options.alpha?(i.toggler.css("backgroundColor",""),i.toggler.find("span").css("backgroundColor","")):i.toggler.css("backgroundColor",""),t.isFunction(i.options.clear)&&i.options.clear.call(this,o))}),i.toggler.on("keyup",function(t){13!==t.keyCode&&32!==t.keyCode||(t.preventDefault(),i.toggler.trigger("click").next().focus())}),i.button.click(function(o){var e=t(this);e.hasClass("wp-picker-clear")?(i.element.val(""),i.options.alpha?(i.toggler.css("backgroundColor",""),i.toggler.find("span").css("backgroundColor","")):i.toggler.css("backgroundColor",""),t.isFunction(i.options.clear)&&i.options.clear.call(this,o)):e.hasClass("wp-picker-default")&&i.element.val(i.options.defaultColor).change()}),i.close_button.click(function(t){t.preventDefault(),i.close()})},close:function(){this._super();t.isFunction(this.options.onClose)&&this.options.onClose.call(this)}}),t.widget("a8c.iris",t.a8c.iris,{_create:function(){if(this._super(),this.options.alpha=this.element.data("alpha")||!1,this.element.is(":input")||(this.options.alpha=!1),void 0!==this.options.alpha&&this.options.alpha){var i=this,o=i.element,e=t('<div class="iris-strip iris-slider iris-alpha-slider"><div class="iris-slider-offset iris-slider-offset-alpha"></div></div>').appendTo(i.picker.find(".iris-picker-inner")),r={aContainer:e,aSlider:e.find(".iris-slider-offset-alpha")};i.options.defaultWidth=o.width(),(i._color._alpha<1||1!=i._color.toString().indexOf("rgb"))&&o.width(parseInt(i.options.defaultWidth+100)),t.each(r,function(t,o){i.controls[t]=o}),i.controls.square.css({"margin-right":"0"});var s=i.picker.width()-i.controls.square.width()-20,n=s/6,a=s/2-n;t.each(["aContainer","strip"],function(t,o){i.controls[o].width(a).css({"margin-left":n+"px"})}),i._initControls(),i._change()}},_initControls:function(){if(this._super(),this.options.alpha){var t=this;t.controls.aSlider.slider({orientation:"vertical",min:0,max:100,step:1,value:parseInt(100*t._color._alpha),slide:function(i,o){t._color._alpha=parseFloat(o.value/100),t._change.apply(t,arguments)}})}},_change:function(){this._super();var t=this,o=t.element;if(this.options.alpha){var e=t.controls,r=parseInt(100*t._color._alpha),s=t._color.toRgb(),n=["rgb("+s.r+","+s.g+","+s.b+") 0%","rgba("+s.r+","+s.g+","+s.b+", 0) 100%"],a=t.options.defaultWidth,l=t.picker.closest(".wp-picker-container").find(".wp-color-result");if(e.aContainer.css({background:"linear-gradient(to bottom, "+n.join(", ")+"), url("+i+")"}),l.hasClass("wp-picker-open"))if(e.aSlider.slider("value",r),t._color._alpha<1){var c=e.strip.attr("style").replace(/rgba\(([0-9]+,)(\s+)?([0-9]+,)(\s+)?([0-9]+)(,(\s+)?[0-9\.]+)\)/g,"rgb($1$3$5)");e.strip.attr("style",c),o.width(parseInt(a+100))}else o.width(a)}(o.data("reset-alpha")||!1)&&t.picker.find(".iris-palette-container").on("click.palette",".iris-palette",function(){t._color._alpha=1,t.active="external",t._change()})},_addInputListeners:function(t){var i=this,o=function(o){var e=new Color(t.val()),r=t.val();t.removeClass("iris-error"),e.error?""!==r&&t.addClass("iris-error"):e.toString()!==i._color.toString()&&("keyup"===o.type&&r.match(/^[0-9a-fA-F]{3}$/)||i._setOption("color",e.toString()))};t.on("change",o).on("keyup",i._debounce(o,700)),i.options.hide&&t.one("focus",function(){i.show()})},_dimensions:function(i){var o,e,r,s=this,n=s.options,a=s.controls.square,l=s.picker.find(".iris-strip"),c="77.5%",p="12%",h=n.border?n.width-20:n.width,d=t.isArray(n.palettes)?n.palettes.length:s._palettes.length;if(i&&(a.css("width",""),l.css("width",""),s.picker.css({width:"",height:""})),c=h*(parseFloat(c)/100),p=h*(parseFloat(p)/100),o=n.border?c+20:c,n.diviColorpicker?(a.width(n.width).height(n.height),o=n.height):a.width(c).height(c),l.height(c).width(p),s.picker.css({width:n.width,height:o}),!n.palettes)return s.picker.css("paddingBottom","");r=(c-(d-1)*(e=2*c/100))/d,s.picker.find(".iris-palette").each(function(i){var o=0===i?0:e;t(this).css({width:r,height:r,marginLeft:o})}),s.picker.css("paddingBottom",r+e),l.height(r+e+c)}})}(jQuery),jQuery(document).ready(function(t){t(".color-picker").wpColorPicker()});