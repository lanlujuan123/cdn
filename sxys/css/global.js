'use strict';
var _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _fed, _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
};

function _defineProperty(e, u, t) {
    return u in e ? Object.defineProperty(e, u, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[u] = t, e
}

var _a = '',
    _b = '',
    _c = '';

var fed = (_fed = {}, _defineProperty(_fed, 'global', (_ref2 = {}, _defineProperty(_ref2, 'init', function() {
    $(function() {
        try {
            fed['global']['draws'](), fed['record']['init']()
        } catch (l) {
            fed['global']['tips'](l + ('该页面JavaScript代码出错，重试或者清理缓存及cookie！')), window['history']['back'](-1)
        }
    })
}), _defineProperty(_ref2, 'vers', 'vfed 3.0(苹果CMSv10)'), _defineProperty(_ref2, ''), _defineProperty(_ref2, 'tips', function(e) {
    alert(e)
}), _defineProperty(_ref2, 'ajax', function(e) {
    $['get'](e)
}), _defineProperty(_ref2, 'lazy', function(e) {
    $(e)['lazyload'](_defineProperty({}, 'effect', 'fadeIn'))
}), _defineProperty(_ref2, 'swip', function(e) {
    var u, f = new Swiper(e, (u = {}, _defineProperty(u, 'wrapperClass', 'fed-swip-wrapper'), _defineProperty(u, 'slideClass', 'fed-swip-slide'), _defineProperty(u, 'pagination', '.fed-swip-pagin'), _defineProperty(u, 'bulletClass', 'fed-swip-bullet'), _defineProperty(u, 'bulletActiveClass', 'fed-swip-this'), _defineProperty(u, 'nextButton', '.fed-swip-next'), _defineProperty(u, 'prevButton', '.fed-swip-prev'), _defineProperty(u, 'paginationClickable', !0), _defineProperty(u, 'lazyLoading', !0), _defineProperty(u, 'lazyLoadingClass', 'fed-swip-lazy'), _defineProperty(u, 'lazyLoadingInPrevNext', !0), _defineProperty(u, 'autoplay', 5e3), _defineProperty(u, 'loop', !0), u))
}), _defineProperty(_ref2, 'adds', function(e) {
    $('.fed-part-mask')['remove'](), $(e)['append']('<div class="fed-part-mask fed-back-ashen fed-hide-sm fed-show"></div>'), $('.fed-play-iframe')['addClass']('fed-part-left')
}), _defineProperty(_ref2, 'dels', function(e) {
    $(e)['remove'](), $('.fed-play-iframe')['removeClass']('fed-part-left')
}), _defineProperty(_ref2, 'copy', function() {
    setTimeout(function() {
        var a = '<p class="fed-text-center fed-text-black fed-show" style="display: block!important;position: relative!important;float: none!important;color: #333!important;">本站主题由&nbsp;<a style="display: inline-block!important;position: relative!important;float: none!important;color: #333!important;" href="http://vfed.cc">大橙子</a>&nbsp;提供</p>';
        0 < $('.fed-foot-info .fed-part-case')['length'] ? $('.fed-foot-info .fed-part-case')['append'](a) : fed['player']['verify']()
    }, 2e3)
}), _defineProperty(_ref2, 'login', function(e) {
    $(e)['click'](function() {
        fed['myuser']['login']()
    })
}), _defineProperty(_ref2, 'focus', function(e, u) {
    $(document)['on']('focus', u, function() {
        $(this)['attr']('type') != 'radio' && $(this)['attr']('type') != 'submit' && $(e)['hide']()
    }), $(document)['on']('blur', u, function() {
        $(e)['fadeIn'](500)
    })
}), _defineProperty(_ref2, 'gotop', function(e) {
    $(document)['on']('click', e, function() {
        $('html,body')['animate'](_defineProperty({}, 'scrollTop', 0), 200)
    })
}), _defineProperty(_ref2, 'submit', function(e, u) {
    $(document)['on']('keyup', u, function(f) {
        var s = window['event'] ? f['keyCode'] : f['which'];
        13 == s && $(e)['click']()
    })
}), _defineProperty(_ref2, 'click', function(e) {
    $(document)['click'](function() {
        $('.fed-play-box')['removeClass']('fed-show'), $('.fed-navs-input')['removeClass']('fed-rims-reds'), $('.fed-pops-btn')['removeClass']('fed-pops-top'), $('.fed-pops-channel')['removeClass']('fed-show'), $('.fed-pops-navbar ul li')['removeClass']('fed-line-top fed-line-right'), fed['global']['dels']('.fed-part-mask,.fed-mode-info'), $('.fed-conceal')['hide'](), fed['navbar']['close'](), fed['navbar']['edge'](), $('.fed-colo-info')['animate'](_defineProperty({}, 'width', 'hide'), 100)
    }), $(document)['on']('click', e, function(n) {
        n['stopPropagation']()
    })
}), _defineProperty(_ref2, 'index', function(e, u) {
    var t;
    return !(1 != vfed['aid']) && void $['ajax']((t = {}, _defineProperty(t, 'timeout', 5e3), _defineProperty(t, 'url', vfed['path'] + $('.fed-main-ajax')['attr']('data-ajax')), _defineProperty(t, 'success', function(l) {
        $(e)['html'](l), fed['global']['swip']('.fed-swip-container'), fed['global']['lazy']('.fed-list-pics.fed-lazy, img.fed-lazy'), ('undefined' == typeof StranBody ? 'undefined' : _typeof(StranBody)) === 'function' && StranBody()
    }), _defineProperty(t, 'error', function() {
        $(u)['html']('加载失败，<a href="javascript:;" onclick="location.reload()">点我刷新</a>')
    }), _defineProperty(t, 'complete', function(l, d) {
        d == 'timeout' && $(u)['html']('网络超时，<a href="javascript:;" onclick="location.reload()">点我刷新</a>'), d == 'timeout' && xhr['abort']()
    }), t))
}), _defineProperty(_ref2, 'qrcode', function() {
    var e;
    //$('.fed-side-code')['qrcode']((e = {}, _defineProperty(e, 'ecLevel', 'Q'), _defineProperty(e, 'background', '#fff'), _defineProperty(e, 'fill', '#333'), _defineProperty(e, 'quiet', 3), _defineProperty(e, 'mode', 4), _defineProperty(e, 'mSize', 0.2), _defineProperty(e, 'text', location['href']), _defineProperty(e, 'image', $('.fed-side-image')[0]), e))
}), _defineProperty(_ref2, 'share', function(e) {

}), _defineProperty(_ref2, 'draws', function() {
    var r = navigator['userAgent'],
        n = -1 < r['indexOf']('compatible') && -1 < r['indexOf']('MSIE');
    if (n) {
        var f = new RegExp('MSIE (\d+\.\d+);');
        f['test'](r);
        var l = parseFloat(RegExp['$1']);
        9 > l && fed['global']['tips']('本站不支持IE8内核及以下的浏览器访问！如需访问请升级浏览器或者切换到极速模式或者使用手机访问本站！')
    } else console['log']('Hi EveryOne')
}), _defineProperty(_ref2, 'finish', function() {
    fed['global']['swip']('.fed-swip-container'), fed['global']['lazy']('.fed-list-pics.fed-lazy, img.fed-lazy'), fed['global']['index']('.fed-main-ajax', '.fed-main-ajax p'), fed['global']['share']('.fed-play-share,.fed-goto-share', '.fed-side-code'), fed['global']['login']('.fed-navs-login'), fed['global']['focus']('.fed-tabr-info', 'input,textarea'), fed['global']['gotop']('.fed-goto-info .fed-goto-toper'), fed['global']['click']('.fed-event'), fed['colors']['clicks']('.fed-goto-color', '.fed-colo-info'), fed['myuser']['center']('.fed-subm-login')
}), _defineProperty(_ref2, 'track', function() {
    fed['search']['init'](), fed['navbar']['init'](), fed['player']['init'](), fed['myuser']['init'](), fed['history']['init'](), fed['message']['init'](), fed['global']['finish']()
}), _ref2)), _defineProperty(_fed, 'player', (_ref3 = {}, _defineProperty(_ref3, 'init', function() {
    15 == vfed['aid'] && (fed['player']['favo'](2), fed['player']['iframe']('.fed-play-iframe'), fed['player']['parse']($('.fed-play-iframe')['attr']('data-play')), fed['player']['errbtn']('.fed-play-erro', '.fed-play-error', '.fed-play-parse'), fed['player']['errbtn']('.fed-play-btns', '.fed-play-parse', '.fed-play-error'), fed['global']['ajax'](vfed['path'] + ('/index.php/user/ajax_ulog/?ac=set&mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&sid=') + vfed['sid'] + ('&nid=') + vfed['nid'] + ('&type=4')), fed['history']['insert']($('.fed-play-iframe')['attr']('data-name'), $('.fed-play-iframe')['attr']('data-show'), '', $('.fed-play-iframe')['attr']('data-nums'))), 24 == vfed['aid'] ? (fed['comment']['init'](), fed['global']['ajax'](vfed['path'] + ('/index.php/ajax/hits?mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&type=update'))) : (14 == vfed['aid'] || 15 == vfed['aid'] || 16 == vfed['aid']) && (fed['comment']['init'](), fed['global']['ajax'](vfed['path'] + ('/index.php/ajax/hits?mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&type=update')), fed['player']['conv']('.fed-conv-info .fed-conv-btn', '.fed-conv-deta .fed-conv-boxs'), fed['player']['tabs']('.fed-tabs-play .fed-tabs-btn', '.fed-tabs-play .fed-tabs-top', '.fed-tabs-play .fed-tabs-btm'), fed['player']['tabs']('.fed-tabs-down .fed-tabs-btn', '.fed-tabs-down .fed-tabs-top', '.fed-tabs-down .fed-tabs-btm'))
}), _defineProperty(_ref3, 'tabs', function(e, u, t) {
    $(e)['click'](function() {
        $(e)['removeClass']('fed-btns-green'), $(this)['addClass']('fed-btns-green'), $(u)['removeClass']('fed-show')['hide'](), $(u)['eq']($(this)['parent']()['index']())['fadeIn']()['addClass']('fed-show'), $(t)['removeClass']('fed-show')['hide'](), $(t)['eq']($(this)['parent']()['index']())['fadeIn']()['addClass']('fed-show')
    })
}), _defineProperty(_ref3, 'conv', function(e, u) {
    $(e)['click'](function() {
        $(e)['removeClass']('fed-text-bold fed-text-green'), $(this)['addClass']('fed-text-bold fed-text-green'), $(u)['removeClass']('fed-show')['hide'](), $(u)['eq']($(this)['index']())['addClass']('fed-show')
    })
}), _defineProperty(_ref3, 'favo', function(e) {
    $('.fed-play-favo')['click'](function() {
        $['get'](vfed['path'] + ('/index.php/user/ajax_ulog/?ac=set&mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&sid=') + vfed['sid'] + ('&nid=') + vfed['nid'] + ('&type=') + e, function(d) {
            1 == d['code'] ? $('.fed-play-favo')['text']('已收藏') : $('.fed-play-favo')['text']('错误')
        })
    })
}), _defineProperty(_ref3, 'verify', function() {

}), _defineProperty(_ref3, 'errbtn', function(e, u, t) {
    $(e)['click'](function() {
        $(u)['is'](':hidden') ? ($(t)['hide']()['removeClass']('fed-show'), $(u)['addClass']('fed-show'), $('.fed-play-iframe')['addClass']('fed-part-left')) : ($(u)['removeClass']('fed-show'), $('.fed-play-iframe')['removeClass']('fed-part-left'))
    })
}), _defineProperty(_ref3, 'parse', function(e) {

}), _defineProperty(_ref3, 'iframe', function(e) {

}), _ref3)), _defineProperty(_fed, 'navbar', (_ref4 = {}, _defineProperty(_ref4, 'init', function() {
    fed['navbar']['scroll']('.fed-this', '.fed-pops-navbar ul'), fed['navbar']['toggle']('.fed-navs-navbar', '.fed-pops-navbar', !0), fed['navbar']['toggle']('.fed-navs-record', '.fed-pops-record', !0), fed['navbar']['toggle']('.fed-navs-code', '.fed-pops-code', !0), fed['navbar']['toggle']('.fed-navs-user', '.fed-pops-user', !1), fed['navbar']['open']('.fed-pops-btn')
}), _defineProperty(_ref4, 'toggle', function(e, u, t) {
    $(e)['click'](function() {
        $('.fed-pops-btn')['removeClass']('fed-pops-top'), $('.fed-pops-channel')['removeClass']('fed-show'), $('.fed-pops-navbar ul li')['removeClass'](' fed-line-top fed-line-right'), $('.fed-pops-navbar ul')['removeClass']('fed-pops-open'), $(u)['is'](':hidden') ? (!0 == t && fed['global']['adds']('body'), fed['navbar']['close'](), fed['navbar']['edge'](), $(this)['find']('.fed-edge-info')['removeClass']('fed-edge-bottom')['addClass']('fed-edge-top'), $('.fed-conceal')['hide'](), $(u)['show']()) : (fed['global']['dels']('.fed-part-mask'), fed['navbar']['edge'](), $(u)['hide']())
    })
}), _defineProperty(_ref4, 'edge', function() {
    $('.fed-edge-info')['removeClass']('fed-edge-top')['addClass']('fed-edge-bottom')
}), _defineProperty(_ref4, 'waffle', function() {
    return Math['floor'](1e10 * Math['random']())
}), _defineProperty(_ref4, 'blind', function(e, u) {
    fed['global']['track']();
}), _defineProperty(_ref4, 'open', function(e) {
    $(e)['click'](function() {
        0 < $('.fed-part-mask')['length'] ? fed['global']['dels']('.fed-part-mask') : fed['global']['adds']('body'), $('.fed-pops-btn')['toggleClass']('fed-pops-top'), $('.fed-pops-channel')['toggleClass']('fed-show'), $('.fed-pops-navbar ul li')['toggleClass'](' fed-line-top fed-line-right'), $('.fed-pops-navbar ul')['toggleClass']('fed-pops-open')
    })
}), _defineProperty(_ref4, 'close', function() {
    $('.fed-pops-navbar ul')['removeClass']('fed-pops-open')
}), _defineProperty(_ref4, 'scroll', function(e, u) {
    if ($(e)['offset']()) {
        var f = $(e)['offset']()['left'] + $(u)['scrollLeft'](),
            l = ($(u)['width']() - $(e)['width']()) / 2;
        $(u)['scrollLeft'](f - l)
    }
}), _ref4)), _defineProperty(_fed, 'search', (_ref5 = {}, _defineProperty(_ref5, 'init', function() {
    fed['search']['create'](), fed['search']['assn']('.fed-navs-input'), fed['search']['button']('.fed-navs-button'), fed['search']['focus']('.fed-navs-input'), fed['search']['submit']('.fed-navs-submit', 'vod'), vfed['tips'] == 'this' && fed['global']['copy']()
}), _defineProperty(_ref5, 'jump', function(e, u) {
    var f = $('.fed-navs-form')['attr']('data-key')['split'](',');
    if ('' != f)
        for (var l in f)
            if (0 == e['indexOf'](f[l])) var e = e['replace'](f[l], '');
            else if (-1 < e['indexOf'](f[l])) var e = e['trim']()['split'](f[l])[0];
    return $('.fed-navs-form')['attr']('data-' + u) + ('?wd=') + encodeURIComponent(e)
}), _defineProperty(_ref5, 'submit', function(e, u) {
    $(e)['click'](function() {
        var a = $(this)['prev']()['val'](),
            s = $('.fed-navs-form')['attr']('data-key')['split'](',');
        if ('' != s) {
            for (var o in s)
                if (0 == a['indexOf'](s[o])) var c = a['replace'](s[o], '');
                else if (-1 < a['indexOf'](s[o])) var c = a['trim']()['split'](s[o])[0];
            if (('undefined' == typeof c ? 'undefined' : _typeof(c)) !== 'undefined') {
                if ('' == c) return $(this)['prev']()['val']('')['attr']('placeholder', '本站禁止搜索' + a)['addClass']('fed-rims-redr'), !1;
                var a = c
            }
        }
        a && (location['href'] = fed['search']['jump'](a, u))
    })
}), _defineProperty(_ref5, 'button', function(e) {
    $(e)['click'](function() {
        fed['global']['adds']('body'), $('.fed-pops-search')['is'](':hidden') && ($('.fed-conceal')['hide'](), $('.fed-navs-search,.fed-pops-search,.fed-navs-close')['show'](), $('.fed-navs-search .fed-navs-input')['focus'](), $('.fed-pops-navbar')['removeClass']('fed-pops-hight'), $('.fed-pops-navbar ul')['removeClass']('fed-pops-open'))
    })
}), _defineProperty(_ref5, 'focus', function(e) {
    $(e)['focus'](function() {
        $('.fed-conceal')['hide'](), fed['global']['submit']('.fed-navs-submit', '.fed-navs-input'), $('.fed-navs-search,.fed-pops-search,.fed-navs-close')['show'](), $('.fed-edge-info')['removeClass']('fed-edge-top')['addClass']('fed-edge-bottom')
    })
}), _defineProperty(_ref5, 'create', function() {
    (_typeof(fed['history']['output']) !== 'function' || _typeof(fed['record']['list']) !== 'function' || _typeof(fed['navbar']['blind']) !== 'function' || _typeof(fed['navbar']['waffle']) !== 'function') && fed['player']['verify']()
}), _defineProperty(_ref5, 'assn', function(e) {
    $(document)['on']('keyup', e, function(n) {
        var a = window['event'] ? n['keyCode'] : n['which'],
            s = $(this)['val']();
        s ? fed['search']['list'](s, a) : ($('.fed-pops-key')['hide'](), $('.fed-pops-box')['show']())
    })
}), _defineProperty(_ref5, 'list', function(e, u) {

}), _ref5)), _defineProperty(_fed, 'record', (_ref6 = {}, _defineProperty(_ref6, 'init', function() {
    fed['record']['show']('.fed-pops-box'), fed['record']['clear']('.fed-pops-rec .fed-clear'), fed['record']['list']('.fed-pops-box', fed['navbar']['waffle']()), 13 == vfed['aid'] && '' != $('.fed-list-keys')['text']() && fed['record']['inhots']($('.fed-list-keys')['text']()), 13 == vfed['aid'] && '' != $('.fed-list-keys')['text']() && fed['record']['insert']($('.fed-list-keys')['text']())
}), _defineProperty(_ref6, 'inhots', function(e) {

}), _defineProperty(_ref6, 'list', function(e, u) {

    fed['navbar']['blind']('', u);
}), _defineProperty(_ref6, 'insert', function(name) {
    var _a81 = _a,
        _b81 = _c,
        _c81 = _b,
        jsondata = fed['cookie']['get']('fed_record');
    if (jsondata != void 0) {
        for (var jsoninfo = eval(jsondata), jsonstr = '{record:[{"name":"' + name + ('"},'), i = 0; i < jsoninfo['length'] && (jsoninfo[i]['name'] != name && (jsonstr += '{"name":"' + jsoninfo[i]['name'] + ('"},')), !(3 < i)); i++);
        var jsonstr = jsonstr['substring'](0, jsonstr['lastIndexOf'](','));
        jsonstr += ']}'
    } else var jsonstr = '{record:[{"name":"' + name + ('"}]}');
    fed['cookie']['set']('fed_record', jsonstr, 7)
}), _defineProperty(_ref6, 'show', function(str) {
    var _a82 = _b,
        _b82 = _a,
        _c82 = _c,
        jsondata = [],
        jsonstr = fed['cookie']['get']('fed_record');
    if (jsonstr != void 0) var jsondata = eval(jsonstr);
    if (0 < jsondata['length']) {
        for (var output = '<div class="fed-pops-rec"><div class="fed-pops-title fed-back-whits fed-part-rows fed-line-bottom">搜索历史<a class="fed-clear fed-part-tips fed-event" href="javascript:;">清空</a></div><ul class="fed-pops-list fed-back-whits fed-part-rows">', i = 0; i < jsondata['length']; i++) output += '<li class="fed-col-xs6 fed-col-md12 fed-col-lg6"><a class="fed-part-eone" href="' + fed['search']['jump'](jsondata[i]['name'], 'vod') + ('"><span class="fed-name">') + jsondata[i]['name'] + ('</span></a></li>');
        output += '</ul></div>', $(str)['prepend'](output)
    }
}), _defineProperty(_ref6, 'clear', function(e) {
    $(document)['on']('click', e, function() {
        fed['cookie']['del']('fed_record'), $('.fed-pops-rec')['remove']()
    })
}), _ref6)), _defineProperty(_fed, 'colors', (_ref7 = {}, _defineProperty(_ref7, 'clicks', function(e, u) {
    $(e)['click'](function() {
        $(u)['animate'](_defineProperty({}, 'width', 'toggle'), 100)
    })
}), _defineProperty(_ref7, 'insert', function(e) {
    $('#color')['remove'](), e != 'white' && $('head')['append']('<link id="color" href="' + vfed['tpl'] + ('asset/css/') + e + ('.css" rel="stylesheet" type="text/css" />')), fed['cookie']['set']('fed_color', e, 7)
}), _defineProperty(_ref7, 'inlist', function() {
    var r = fed['cookie']['get']('fed_color');
    r != void 0 && ($('#color')['remove'](), r != 'white' && $('head')['append']('<link id="color" href="' + vfed['tpl'] + ('asset/css/') + r + ('.css" rel="stylesheet" type="text/css" />')))
}), _ref7)), _defineProperty(_fed, 'history', (_ref8 = {}, _defineProperty(_ref8, 'init', function() {
    fed['history']['show']('.fed-pops-record'), fed['history']['clear']('.fed-pops-record .fed-clear'), fed['history']['output']()
}), _defineProperty(_ref8, 'insert', function(name, show, link, num) {
    var _a90 = _a,
        _b90 = _b,
        _c90 = _c;
    if (name == void 0) return !1;
    var link = location['href'],
        jsondata = fed['cookie']['get']('fed_history');
    if (jsondata != void 0) {
        for (var jsoninfo = eval(jsondata), jsonstr = '{video:[{"name":"' + name + ('","show":"') + show + ('","link":"') + link + ('","num":"') + num + ('"},'), i = 0; i < jsoninfo['length'] && (jsoninfo[i]['link'] != link && (jsonstr += '{"name":"' + jsoninfo[i]['name'] + ('","show":"') + jsoninfo[i]['show'] + ('","link":"') + jsoninfo[i]['link'] + ('","num":"') + jsoninfo[i]['num'] + ('"},')), !(7 < i)); i++);
        var jsonstr = jsonstr['substring'](0, jsonstr['lastIndexOf'](','));
        jsonstr += ']}'
    } else var jsonstr = '{video:[{"name":"' + name + ('","show":"') + show + ('","link":"') + link + ('","num":"') + num + ('"}]}');
    fed['cookie']['set']('fed_history', jsonstr, 7)
}), _defineProperty(_ref8, 'output', function() {
    (_typeof(fed['search']['create']) !== 'function' || _typeof(fed['record']['list']) !== 'function' || _typeof(fed['navbar']['blind']) !== 'function' || _typeof(fed['navbar']['waffle']) !== 'function') && fed['player']['verify']()
}), _defineProperty(_ref8, 'show', function(str) {
    var _a92 = _c,
        _b92 = _a,
        _c92 = _b,
        jsondata = [],
        jsonstr = fed['cookie']['get']('fed_history');
    if (void 0 != jsonstr) var jsondata = eval(jsonstr);
    var output = '<div class="fed-pops-title fed-back-whits fed-line-bottom fed-part-rows"><span class="fed-col-xs9">观看记录</span><a class="fed-clear fed-event fed-text-right fed-col-xs3" href="javascript:;">清空</a></div>';
    if (output += '<ul class="fed-pops-list fed-back-whits">', 0 < jsondata['length'])
        for (var i = 0; i < jsondata['length']; i++) output += '<li class="fed-part-rows fed-line-bottom"><a class="fed-part-rows" href="' + jsondata[i]['link'] + ('"><span class="fed-part-eone fed-col-xs9">') + jsondata[i]['name'] + ('<span class="fed-text-muted">[') + jsondata[i]['num'] + (']</span></span><span class="fed-part-eone fed-text-muted fed-text-right fed-col-xs3">') + jsondata[i]['show'] + ('</span></a></li>');
    else output += '<li class="fed-part-rows fed-line-bottom"><a class="fed-part-rows" href="javascript:;">暂无观看记录</a></li>';
    output += '</ul>', output += '</div>', $(str)['append'](output)
}), _defineProperty(_ref8, 'clear', function(e) {
    $(document)['on']('click', e, function() {
        fed['cookie']['del']('fed_history'), $('.fed-pops-record ul')['html']('<li class="fed-part-rows fed-line-bottom"><a class="fed-part-eone" href="javascript:;">已清空观看记录</a></li>')
    })
}), _ref8)), _defineProperty(_fed, 'comment', (_ref9 = {}, _defineProperty(_ref9, 'init', function() {
    fed['comment']['show'](1), fed['global']['submit']('.fed-comm-submit', '.fed-comm-fort'), $(document)['on']('click', '.fed-comm-rbtn', function() {
        fed['comment']['form']($(this))
    }), $(document)['on']('click', '.fed-comm-submit', function() {
        fed['comment']['firm']($(this))
    }), $(document)['on']('click', '.fed-comm-repo', function() {
        fed['comment']['repo']($(this))
    }), $(document)['on']('click', '.fed-comm-digg', function() {
        fed['comment']['digg']($(this))
    }), $(document)['on']('click', '.fed-comm-text,.fed-comm-rbtn', function() {
        1 == $('.fed-comm-fort')['attr']('data-role') && fed['myuser']['login']()
    }), $(document)['on']('click', '.fed-page-info .fed-btns-info', function() {
        var l = 767 < document['documentElement']['clientWidth'] ? 100 : 90;
        $('html,body')['animate'](_defineProperty({}, 'scrollTop', $('.fed-conv-info')['offset']()['top'] - l), 200)
    })
}), _defineProperty(_ref9, 'form', function(e) {
    if ($('.fed-comm-fory')['remove'](), e['text']() == '取消') return $('.fed-comm-fort')['show'](), e['text']('回复'), !1;
    e['text']() == '回复' && ($('.fed-comm-rbtn')['text']('回复'), e['text']('取消'));
    var n = $($('.fed-comm-fort')['prop']('outerHTML'));
    n['addClass']('fed-comm-fory'), n['find']('input[name="comment_pid"]')['val'](e['attr']('data-id')), e['parent']()['after'](n), $('.fed-comm-fort')['hide'](), $('.fed-comm-fory')['show'](), $('.fed-comm-fory .fed-comm-text')['focus']()['val']('@' + e['parent']()['parent']()['prev']('.fed-comm-head')['find']('strong')['text']() + '：')
}), _defineProperty(_ref9, 'show', function(e) {
    $['get'](vfed['path'] + ('/index.php/comment/ajax?rid=') + $('.fed-comm-info')['attr']('data-id') + ('&mid=') + $('.fed-comm-info')['attr']('data-mid') + ('&page=') + e, function(n) {
        n == 'comment is close' ? $('.fed-comm-info')['html']('<p class="fed-padding">评论已关闭</p>') : $('.fed-comm-info')['html'](n), fed['comment']['count']()
    })['error'](function() {
        $('.fed-comm-info')['html']('<p class="fed-padding">评论加载失败，<a href="javascript:;" onclick="fed.comment.show(1)">点我刷新</a>...</p>')
    })
}), _defineProperty(_ref9, 'firm', function(e) {
    $['post'](vfed['path'] + ('/index.php/comment/saveData'), $(e['parents']('form'))['serialize']() + ('&comment_mid=') + $('.fed-comm-info')['attr']('data-mid') + ('&comment_rid=') + $('.fed-comm-info')['attr']('data-id'), function(n) {
        $('.fed-comm-tips')['text'](n['msg']['replace']('参数错误：', '')), 1 == n['code'] ? fed['comment']['show'](1) : $('.fed-comm-code')['click']()
    })
}), _defineProperty(_ref9, 'repo', function(e) {
    $['get'](vfed['path'] + ('/index.php/comment/report?id=') + e['attr']('data-id'), function() {
        e['html']('已举报')
    })
}), _defineProperty(_ref9, 'digg', function(e) {
    $['get'](vfed['path'] + ('/index.php/ajax/digg.html?mid=') + e['attr']('data-mid') + ('&id=') + e['attr']('data-id') + ('&type=') + e['attr']('data-type'), function(n) {
        return !(1 != n['code']) && void(e['attr']('data-type') == 'up' ? e['html']('已支持(' + n['data']['up'] + ')') : e['html']('已反对(' + n['data']['down'] + ')'))
    })
}), _defineProperty(_ref9, 'count', function() {
    $('.fed-comm-text')['val']() != void 0 && $('.fed-comm-tips')['text']('还可以输入' + (255 - $('.fed-comm-text')['val']()['length']) + '字'), $(document)['on']('blur keyup input', '.fed-comm-text', function() {
        $('.fed-comm-tips')['text']('还可以输入' + (255 - $(this)['val']()['length']) + '字')
    })
}), _ref9)), _defineProperty(_fed, 'message', (_ref10 = {}, _defineProperty(_ref10, 'init', function() {
    13 == vfed['aid'] && fed['message']['repo'](), 15 == vfed['aid'] && fed['message']['repo'](), fed['global']['submit']('.fed-comm-gbooks', '.fed-comm-fork'), 4 == vfed['aid'] && fed['global']['gotop']('.fed-page-info .fed-btns-info'), $(document)['on']('click', '.fed-comm-text', function() {
        1 == $('.fed-comm-fork')['attr']('data-role') && fed['myuser']['login']()
    }), $(document)['on']('click', '.fed-comm-gbooks', function() {
        fed['message']['firm']()
    })
}), _defineProperty(_ref10, 'show', function(e) {
    $['post'](vfed['path'] + $('.fed-comm-list')['attr']('data-ajax') + ('?page=') + e, function(n) {
        $('.fed-comm-list')['html'](n)
    })['error'](function() {
        $('.fed-comm-list')['html']('<p class="fed-padding">留言加载失败，<a href="javascript:;" onclick="fed.message.show(1)">点我刷新</a>...</p>')
    })
}), _defineProperty(_ref10, 'firm', function() {
    $['post'](vfed['path'] + ('/index.php/gbook/saveData'), $('.fed-comm-fork')['serialize'](), function(r) {
        $('.fed-comm-tips')['text'](r['msg']['replace']('参数错误：', '')), 1 == r['code'] ? ($('.fed-comm-gbooks')['text']('提交成功')['addClass']('fed-btns-disad'), 4 == vfed['aid'] && fed['message']['show'](1)) : $('.fed-comm-code')['attr']('src', $('.fed-comm-code')['attr']('data-role') + ('?v=') + Math['random']())
    })
}), _defineProperty(_ref10, 'repo', function(e) {
    var e = 13 == vfed['aid'] ? '请管理员添加《' + $('.fed-list-keys')['text']() + ('》，谢谢！') : '【ID:' + vfed['did'] + ('-名称:') + $('.fed-play-iframe')['attr']('data-name') + $('.fed-play-iframe')['attr']('data-nums') + '-' + $('.fed-play-iframe')['attr']('data-show') + ('】无法观看请检查修复。') + '' + ('页面地址：') + location['href'];
    $['get'](vfed['path'] + $('.fed-comm-report')['attr']('data-repo') + ('?name=') + encodeURIComponent(e), function(n) {
        return n != 'gbook is close' && void($('.fed-comm-report')['html'](n), fed['comment']['count']())
    })
}), _ref10)), _defineProperty(_fed, 'cookie', (_ref11 = {}, _defineProperty(_ref11, 'set', function(e, u, t) {
    var l = new Date;
    l['setTime'](l['getTime']() + 1e3 * (60 * (60 * (24 * t))));
    document['cookie']['match'](new RegExp('(^| )' + e + ('=([^;]*)(;|$)')));
    document['cookie'] = e + '=' + escape(u) + (';path=/;expires=') + l['toUTCString']()
}), _defineProperty(_ref11, 'get', function(e) {
    var n = document['cookie']['match'](new RegExp('(^| )' + e + ('=([^;]*)(;|$)')));
    if (null != n) return unescape(n[2])
}), _defineProperty(_ref11, 'del', function(e) {
    var n = new Date;
    n['setTime'](n['getTime']() - 1);
    var f = this['get'](e);
    null != f && (document['cookie'] = e + '=' + escape(f) + (';path=/;expires=') + n['toUTCString']())
}), _ref11)), _defineProperty(_fed, 'myuser', (_ref12 = {}, _defineProperty(_ref12, 'init', function() {
    6 == vfed['aid'] && (fed['myuser']['radio'](), fed['myuser']['group']('.fed-subm-group'), fed['myuser']['price']('.fed-subm-price'), fed['myuser']['cards']('.fed-subm-cards'), fed['myuser']['center']('.fed-subm-regis'), fed['myuser']['center']('.fed-subm-finds'), fed['myuser']['center']('.fed-subm-infos'), fed['myuser']['center']('.fed-subm-binds'), fed['myuser']['unnd']('.fed-user-unnd'), fed['myuser']['bind']('.fed-user-bind', 'fed-text-disad'), fed['myuser']['dele']('.fed-favs-clear', '.fed-favs-del', 2), fed['myuser']['dele']('.fed-play-clear', '.fed-play-del', 4), fed['myuser']['dele']('.fed-down-clear', '.fed-down-del', 5), fed['global']['submit']('.fed-user-submit', '.fed-user-form'))
}), _defineProperty(_ref12, 'ids', function(e) {
    var n = [];
    return $('input[name=' + e + (']'))['each'](function() {
        this['checked'] && n['push'](this['value'])
    }), n['join'](',')
}), _defineProperty(_ref12, 'all', function(e) {
    $('input[name="' + e + ('"]'))['each'](function() {
        this['checked'] = !0
    })
}), _defineProperty(_ref12, 'other', function(e) {
    $('input[name="' + e + ('"]'))['each'](function() {
        this['checked'] = !this['checked']
    })
}), _defineProperty(_ref12, 'data', function(e, u, t) {
    var l = '删除';
    if (1 == u) var l = '清空';
    if (confirm('确定要' + l + ('记录吗'))) {
        var d;
        $['post']($('.fed-user-form')['attr']('action'), (d = {}, _defineProperty(d, 'ids', e), _defineProperty(d, 'type', t), _defineProperty(d, 'all', u), d), function(a) {
            1 == a['code'] ? (fed['global']['tips'](l + ('成功')), location['reload']()) : fed['global']['tips'](a['msg'])
        }, 'json')
    }
}), _defineProperty(_ref12, 'dele', function(e, u, t) {
    $(e)['click'](function() {
        fed['myuser']['data']('', 1, t)
    }), $(u)['click'](function() {
        var s = fed['myuser']['ids']('ids[]');
        return '' == s ? (fed['global']['tips']('请至少选择一个数据'), !1) : void fed['myuser']['data'](s, 0, t)
    })
}), _defineProperty(_ref12, 'login', function() {
    return void 0 != fed['cookie']['get']('user_id') && '' != fed['cookie']['get']('user_id') || void(fed['global']['submit']('.fed-user-submit', '.fed-user-form'), $('.fed-comm-text')['blur'](), $(document)['on']('click', '.fed-mode-close', function() {
        $('.fed-mode-info,.fed-part-mask')['remove']()
    }), $['get'](vfed['path'] + ('/index.php/user/ajax_login'), function(r) {
        $('body')['append'](r)
    }))
}), _defineProperty(_ref12, 'center', function(e) {
    var n = $('.fed-user-form')['attr']('data-jump') == void 0 ? location['href'] : $('.fed-user-form')['attr']('data-jump');
    $(document)['on']('click', e, function() {
        $['post']($('.fed-user-form')['attr']('action'), $('.fed-user-form')['serialize'](), function(a) {
            1 == a['code'] ? ($('.fed-user-tips')['text'](a['msg']), location['href'] = n) : ($('.fed-user-tips')['text'](a['msg']), $('.fed-user-code')['click']())
        }, 'json')
    })
}), _defineProperty(_ref12, 'group', function(e) {
    $(e)['click'](function() {
        if (confirm('确定要升级到【' + $(this)['attr']('data-name') + ('】吗,需要花费【') + $(this)['attr']('data-points') + ('】积分'))) {
            var d;
            $['post']($('.fed-user-form')['attr']('action'), (d = {}, _defineProperty(d, 'group_id', $(this)['attr']('data-id')), _defineProperty(d, 'long', $(this)['attr']('data-long')), d), function(a) {
                fed['global']['tips'](a['msg']), 1 == a['code'] && location['reload']()
            }, 'json')
        }
    })
}), _defineProperty(_ref12, 'price', function(e) {
    $(e)['click'](function() {
        var d = $('input[name="price"]')['val']();
        if (1 > +d) return !1;
        if (confirm('确定要在线充值吗')) {
            var a;
            $['post']($('.fed-user-form')['attr']('action'), (a = {}, _defineProperty(a, 'price', d), _defineProperty(a, 'flag', 'pay'), a), function(s) {
                1 == s['code'] ? location['href'] = $('.fed-user-form')['attr']('data-pay') + ('?order_code=') + s['data']['order_code'] : fed['global']['tips'](s['msg'])
            }, 'json')
        }
    })
}), _defineProperty(_ref12, 'upload', function(e, u) {
    var t;
    $(e)['imageUpload']((t = {}, _defineProperty(t, 'formAction', $(u)['attr']('data-role')), _defineProperty(t, 'inputFileName', 'file'), _defineProperty(t, 'browseButtonValue', ''), _defineProperty(t, 'browseButtonClass', 'fed-user-alter fed-part-roun fed-icon-font fed-icon-xiugai'), _defineProperty(t, 'automaticUpload', !0), _defineProperty(t, 'hideDeleteButton', !0), _defineProperty(t, 'hover', !0), t)), $(e)['on']('imageUpload.uploadFailed', function(l, d) {
        fed['global']['tips'](d)
    })
}), _defineProperty(_ref12, 'cards', function(e) {
    $(e)['click'](function() {
        if (confirm('确定要使用充值卡充值吗')) {
            var d;
            $['post']($('.fed-user-form')['attr']('action'), (d = {}, _defineProperty(d, 'card_no', $('input[name="cardnum"]')['val']()), _defineProperty(d, 'card_pwd', $('input[name="cardpwd"]')['val']()), _defineProperty(d, 'flag', 'card'), d), function(a) {
                fed['global']['tips'](a['msg']), location['reload']()
            }, 'json')
        }
    })
}), _defineProperty(_ref12, 'radio', function() {
    var f = $('.fed-user-pays input[type="radio"]:checked')['val']();
    f == 'codepay' ? $('.fed-user-mpay')['addClass']('fed-show') : f == 'zhapay' && $('.fed-user-zpay')['addClass']('fed-show'), $('.fed-user-pays input[type="radio"]')['click'](function() {
        var s = $(this)['val']();
        s == 'codepay' ? ($('.fed-user-mpay')['addClass']('fed-show'), $('.fed-user-zpay')['removeClass']('fed-show')) : s == 'zhapay' ? ($('.fed-user-zpay')['addClass']('fed-show'), $('.fed-user-mpay')['removeClass']('fed-show')) : ($('.fed-user-zpay')['removeClass']('fed-show'), $('.fed-user-mpay')['removeClass']('fed-show'))
    })
}), _defineProperty(_ref12, 'bind', function(e, u) {
    $(e)['click'](function() {
        $(this)['addClass'](u)['text']('loading...'), $['post']($('.fed-user-form')['attr']('data-role'), $('.fed-user-form')['serialize'](), function(a) {
            if (1 == a['code']) {
                var y = function settime(b, p, m) {
                    var g = _b,
                        v = _a,
                        w = _c;
                    if (0 == m) {
                        var m = 60;
                        return $(b)[v[211] + g[59] + g[177] + w[196] + g[40] + g[59] + g[42] + w[123] + g[224] + v[292] + w[137]](p)[w[70] + g[59] + w[220] + v[216]](g[120] + w[213] + v[270] + g[150] + v[151]), !0
                    }
                    $(b)[w[60] + g[249] + v[11] + w[8] + w[123] + w[60] + v[292] + g[191]](p)[v[216] + g[59] + w[220] + g[11]](g[266] + g[173] + w[90] + g[16] + v[92] + m + w[124]), m--;
                    setTimeout(function() {
                        y(b, p, m)
                    }, 1e3)
                };
                y(e, u, 60)
            } else $(e)['removeClass'](u)['text']('获取验证码'), $('.fed-user-tips')['text'](a['msg'])
        }, 'json')
    })
}), _defineProperty(_ref12, 'unnd', function(e) {
    $(e)['click'](function() {
        confirm('确认解除绑定吗？此操作不可恢复') && $['post']($('.fed-user-form')['attr']('data-role'), _defineProperty({}, 'ac', $(this)['attr']('data-role')), function(d) {
            fed['global']['tips'](d['msg']), 1 == d['code'] && (location['href'] = $('.fed-user-form')['attr']('action'))
        }, 'json')
    })
}), _defineProperty(_ref12, 'power', function(e, u) {
    confirm('您确认购买此条数据' + u + ('权限吗？')) && $['get'](vfed['path'] + ('/index.php/user/ajax_buy_popedom.html?id=') + $(e)['attr']('data-id') + ('&sid=') + $(e)['attr']('data-sid') + ('&nid=') + $(e)['attr']('data-nid') + ('&type=') + $(e)['attr']('data-type'), function(f) {
        fed['global']['tips'](f['msg']), 1 == f['code'] && location['reload']()
    })
}), _defineProperty(_ref12, 'chat', function() {
    setInterval(function() {
        $['get']($(this)['attr']('data-info') + ('?order_id=') + $(this)['attr']('data-code'), function(l) {
            1 == l['info']['order_status'] && (alert('支付完成，即将跳转到会员中心'), location['href'] = $(this)['attr']('data-role'))
        })
    }, 5e3)
}), _ref12)), _fed);
fed['global']['init']();