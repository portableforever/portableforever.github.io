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

(function ($) {
    "use strict";
    /// <summary>takes a string and repeats it "n" times.</summary>
    /// <param name="num" type="Number">times to repeat the string </param>
    /// <returns>rep = '*'.repeat(5);    // rep = '*****'</returns>
    String.prototype.repeat = function (num) {
        return new Array(num + 1).join(this);
    };

    /// <summary>Default settings for profanityFilter plugin</summary>
    var defaults = {
        replaceWith: '#',
        customSwears: null,
        externalSwears: themeUrl + '/js/swearWords.json'
    };


    /// <summary>jQuery plugin used to filter profanity on the attached element</summary>
    /// <param name="settings">user overridden settings</param>
    /// <returns>text from an element but blots out the swear words</returns>
    $.fn.profanityFilter = function (settings) {

        var options = $.extend({}, defaults, settings),
            localStorageIsEnabled;

        localStorageIsEnabled = function() {
              var uid = new Date(),
                  result;

              try {
                localStorage.setItem("uid", uid);
                result = localStorage.getItem("uid") === uid;
                localStorage.removeItem("uid");
                return result && localStorage;
              } catch(e) {}
        }();

        function allTextNodes(parent) {
            function getChildNodes(parent) {
                var x,
                    out = [];

                for (x = 0; x < parent.childNodes.length; x += 1) {
                    out[x] = parent.childNodes[x];
                }

                return out;
            }

            var cursor, 
                closed = [],
                open = getChildNodes(parent);

            while (open.length) {
                cursor = open.shift();
                if (cursor.nodeType === 1) {
                    open.unshift.apply(open, getChildNodes(cursor));
                }
                if (cursor.nodeType === 3) {
                    closed.push(cursor);
                }
            }
            return closed;
        }

        function readJsonFromController(file) {
            var request = new XMLHttpRequest();
            request.open('GET', file, false);
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            request.send(null);
            try {
                return JSON.parse(request.responseText);
            } catch (e) {
                return '';
            }
        }

        var lastRandomNumber = null;
        function generateRandomNumber(max) {
          var randomNumber = Math.floor((Math.random()*(max)));
          if (lastRandomNumber == null) {
            lastRandomNumber = randomNumber;
          } else {
            if (randomNumber == lastRandomNumber && max !=0) {
              randomNumber +=1;
            }
          }
          
          if (randomNumber > max) {
            //set it back to zero
            randomNumber = 0;
          }
          
          lastRandomNumber = randomNumber;
          
          return randomNumber;
        }


        return this.each(function () {

            var badWords,
                i,
                nodes = allTextNodes(this),
                re,
                rep,
                x;

            if (options.externalSwears !== null) {
                if (localStorageIsEnabled) {
                    if (localStorage.getItem('localSwears') === null) {
                        // stringify the array so that it can be stored in local storage
                        localStorage.setItem('localSwears', JSON.stringify(readJsonFromController(options.externalSwears)));
                    }
                    badWords = JSON.parse(localStorage.getItem('localSwears'));
                } else {
                    badWords = readJsonFromController(options.externalSwears);
                }
            } else {
                if (options.customSwears !== null) {
                    badWords = options.customSwears;
                }
            }

            // GET OUT, there are no Swears set either custom, external OR local.
            if (badWords === null) {
                return;
            }

            // We've got an array of swears, let's proceed with removing them from the element.
            for (x = 0; x < nodes.length; x += 1) {
                for (i = 0; i < badWords.length; i += 1) {
                    re = new RegExp('\\b' + badWords[i] + '\\b', 'gi');
                    
                    var rand = generateRandomNumber(options.replaceWith.length -1);
                   
                    rep = options.replaceWith[rand];
                    if (typeof options.replaceWith == 'string') {
                      rep = options.replaceWith[rand].repeat(badWords[i].length);
                    }
                    if (re.test(nodes[x].nodeValue)) {
                        nodes[x].nodeValue = nodes[x].nodeValue.replace(re, rep);
                    }
                }
            }
        });
    };
})(jQuery);

}
/*
     FILE ARCHIVED ON 23:37:27 Dec 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:18:11 Mar 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.354
  captures_list: 172.403
  exclusion.robots: 0.372
  RedisCDXSource: 1.136
  PetaboxLoader3.resolve: 52.5 (2)
  esindex: 0.015
  CDXLines.iter: 24.944 (3)
  LoadShardBlock: 141.195 (3)
  PetaboxLoader3.datanode: 196.985 (5)
  load_resource: 175.534 (2)
*/