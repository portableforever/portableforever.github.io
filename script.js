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

var headerbg = document.getElementById('headerbg');
var headerContent = document.getElementById('headercontent');
var gameLoaded = false;
var $playerCount = $('#playercount');
var $playerCountNumber = $('#playercount-number');
var $playOnlineButton = $('#play-online-button');
var $playClassicButton = $('#play-classic-button');
var $cspSequelButton = $('#csp-sequel-button');
var $playCopsButton = $('#cops-play-button');
var playerCountInterval;

$(document).ready(function() {
   
	init();
	
	if (currentpage == 'community')
		initCommunityPage();
	if (currentpage == "play" || currentpage == "playclassic") {
		fillUnityGame();
	}

});

function init() {
	startPlayerCounter();
	playPageExceptions();
	footerBottom();
	copsHover();
}

function initCommunityPage() {
	$('#fbbutton').hover(function() {
		$('#fbbutton .inner').slideToggle();
	});
	$('#twitterbutton').hover(function() {
		$('#twitterbutton .inner').slideToggle();
	});
	$('#ytbutton').hover(function() {
		$('#ytbutton .inner').slideToggle();
	});
	
	$('.streams-slideshow').bxSlider({
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '▶',
		prevText: '◀',
		auto: false,
		pager: false,
		slideWidth: 462,
		useCSS: false,
		video: true
	});
}

function startPlayerCounter() {
	if (currentpage != 'play' && currentpage != 'playclassic') {
	    getOnlinePlayers();
	    updatePlayers(1);
	}
}

function disablePlayerCounter() {
	clearInterval(playerCountInterval);
	$playerCount.hide();
}

function playPageExceptions() {
	if (currentpage == 'play' || currentpage == 'playclassic') {
		$('#headerbg').addClass('headerbg-playpage');
		disablePlayerCounter();

		if (currentpage == 'play') {
			$playOnlineButton.hide();
			$playClassicButton.addClass('play-page-csp-button');
		}
		else {
			$playClassicButton.hide();
			$playOnlineButton.addClass('play-page-csp-button');
		}

		$cspSequelButton.hide();
		$playCopsButton.addClass('play-page-cops-button');

	}
}

function copsHover() {
	$cspSequelButton.hover(function (e) {
		$playCopsButton.addClass('cops-play-button-hover');
	}, function (e) {
		$playCopsButton.removeClass('cops-play-button-hover');
	});
}

function updatePlayers(int) {
    var time = parseInt(int) * 60 * 1000;
    playerCountInterval = setInterval(getOnlinePlayers, time);
}

function getOnlinePlayers() {
    var url = themeUrl + '/php/get_players.php';

    $.ajax(url, {
	contentType: 'application/json',
	success: function(data) {

	    if (typeof data !== 'object')
	    {
		return false;
	    }

	    if (!data.hasOwnProperty('players'))
	    {
		return false;
	    }

	    $playerCountNumber.empty().append(parseInt(data.players));
	    $playerCount.removeClass('hidden');
	},
	error: function(xhr, status, error) {
	    console.log(error);
	}
    });
}

function checkAdBlock() {

    fuckAdBlock.add(true, function() {
		alert('You have AdBlock enabled. Please disable AdBlock in order to play. (You may have to choose "Disable everywhere" on Firefox.) Thank you.');
		$('#UNITY_GAME').attr('id','UNITY_GAME_AB');
		$('#UNITY_GAME_AB').html('You have AdBlock enabled. Please disable AdBlock in order to play. (You may have to choose "Disable everywhere" on Firefox.) Thank you.');
    });
}

function removeAdSwf()
{
    $('#SWF_AD').remove();
    fillUnityGame();
}

function fillUnityGame() {
	var params = {
	    disableExternalCall: true
	};

	if (currentpage == "play") {
		gameClientName = "critical_strike_portable";
	}
	else {
		gameClientName = "critical_strike_portable_classic";
	}

	var u = UnityObject2({ params: params });
    u.initPlugin(jQuery("#UNITY_GAME")[0], themeUrl + "/game/" + gameClientName + ".unity3d");
    gameLoaded = true;
}

function preventSelect(target) {
	$(target).mousedown(function(){ event.preventDefault(); });
}

function footerBottom() {
	var wHeight = $(window).height();
	var contentHeight = $('#container').height() + $('#footer').height();
	var margin = wHeight - contentHeight;
	if (wHeight > contentHeight) {
		$('#footer-bg').css("margin-top", margin);
	}
}

}
/*
     FILE ARCHIVED ON 13:11:06 Jun 11, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:22:55 Mar 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 124.912
  exclusion.robots: 0.498
  exclusion.robots.policy: 0.471
  RedisCDXSource: 5.154
  esindex: 0.015
  LoadShardBlock: 80.315 (3)
  PetaboxLoader3.datanode: 99.016 (4)
  CDXLines.iter: 30.723 (3)
  load_resource: 83.963
  PetaboxLoader3.resolve: 35.636
*/