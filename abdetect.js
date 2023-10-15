var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
FuckAdBlock 2.2.1
http://github.com/sitexw/FuckAdBlock
*/

function FuckAdBlock() {
	this.interval = 50;
	this.max = 200;
	this.end_reset = true;
	this.check_onready = true;
	var start = false;
	var func_true = [];
	var func_false = [];
	var div = null;
	var loop = null;
	var loo_n = null;
	var loop_func = function() {
		var div_temp = window.getComputedStyle(div,null);
		if(div.offsetParent === null
		|| div.offsetHeight == 0
		|| div.offsetLeft == 0
		|| div.offsetTop == 0
		|| div.offsetWidth == 0
		|| div.clientHeight == 0
		|| div.clientWidth == 0
		|| div_temp.getPropertyValue('display') == 'none'
		|| div_temp.getPropertyValue('visibility') == 'hidden') {
			exe(true);
		} else if(loo_n >= that.max) {
			exe(false);
		}
		loo_n += that.interval;
	}
	var exe = function(type) {
		if(type == true) {
			var array = func_true;
		} else {
			var array = func_false;
		}
		clearInterval(loop);
		document.body.removeChild(div);
		start = false;
		for(k in array) {
			array[k]();
		}
		if(that.end_reset == true) {
			func_true = [];
			func_false = [];
		}
	}
	this.add = function(type, func) {
		if(type == true) {
			func_true[func_true.length] = func;
		} else {
			func_false[func_false.length] = func;
		}
		return this;
	}
	this.removeAll = function() {
		func_true = [];
		func_false = [];
	}
	this.check = function() {
		try {
			if(start == true) { 
				return false; 
			}
			start = true;
			div = document.createElement('div');
			div.setAttribute('class', 'ads swf_ad pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links');
			div.setAttribute('style', 'width: 1px !important; height: 1px !important; position: absolute !important; left: -1000px !important; top: -1000px !important;');
			document.body.appendChild(div);
			loo_n = 0;
			loop = setInterval(loop_func, this.interval);
			loop_func();
		} catch(e) {
			console.error(e);
		}
	}
	
	var that = this;
	window.addEventListener('load', function() {
		setTimeout(function() {
			if(that.check_onready === true) {
				fuckAdBlock.check();
			}
		}, 1);
	}, false);
}
var fuckAdBlock = new FuckAdBlock();


}
/*
     FILE ARCHIVED ON 00:49:18 Dec 19, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:12:58 Mar 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 90.104 (2)
  CDXLines.iter: 22.957 (3)
  LoadShardBlock: 150.393 (3)
  exclusion.robots.policy: 0.262
  PetaboxLoader3.datanode: 186.107 (5)
  load_resource: 146.749 (2)
  RedisCDXSource: 0.639
  esindex: 0.01
  exclusion.robots: 0.273
  captures_list: 178.589
*/