(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _button = require('./bootstrap/button');

var _button2 = _interopRequireDefault(_button);

var _collapse = require('./bootstrap/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _store = require('./vue-components/store');

var _store2 = _interopRequireDefault(_store);

var _AppNav = require('./vue-components/partials/AppNav.vue');

var _AppNav2 = _interopRequireDefault(_AppNav);

var _HomeView = require('./vue-components/views/HomeView.vue');

var _HomeView2 = _interopRequireDefault(_HomeView);

var _LocationView = require('./vue-components/views/LocationView.vue');

var _LocationView2 = _interopRequireDefault(_LocationView);

var _RegisterView = require('./vue-components/views/RegisterView.vue');

var _RegisterView2 = _interopRequireDefault(_RegisterView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

// Vue components


// navigation
var $sidebar = (0, _jQuery2.default)('.sidebar');

(0, _jQuery2.default)('.js-sidebar-toggle').on('click', function (e) {
  e.preventDefault();
  $sidebar.toggleClass('sidebar--active');
});

// Routing and Vue setup
_vue2.default.config.debug = true;
_vue2.default.config.devtools = true;

var DocketApp = _vue2.default.extend({
  components: { AppNav: _AppNav2.default },
  store: _store2.default
});

var router = new _vueRouter2.default({
  linkActiveClass: 'sidebar__nav-link--active'
});

router.map({
  '/': {
    component: _HomeView2.default
  },
  '/locations': {
    component: _LocationView2.default
  },
  '/register': {
    component: _RegisterView2.default
  }
});

router.start(DocketApp, '.docket-app');

},{"./bootstrap/button":2,"./bootstrap/collapse":3,"./vue-components/partials/AppNav.vue":6,"./vue-components/store":7,"./vue-components/views/HomeView.vue":8,"./vue-components/views/LocationView.vue":9,"./vue-components/views/RegisterView.vue":10,"jQuery":16,"leaflet":18,"vue":26,"vue-router":25}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * --------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Bootstrap (v4.0.0-alpha.2): button.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * --------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-alpha';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    _createClass(Button, [{
      key: 'toggle',


      // public

      value: function toggle() {
        var triggerChangeEvent = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(this._element).trigger('change');
            }
          }
        } else {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(_jquery2.default);

exports.default = Button;

},{"jquery":16}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-alpha';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    _createClass(Collapse, [{
      key: 'toggle',


      // public

      value: function toggle() {
        if ($(this._element).hasClass(ClassName.IN)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var actives = void 0;
        var activesData = void 0;

        if (this._parent) {
          actives = $.makeArray($(Selector.ACTIVES));
          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');
          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        if (!_util2.default.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;

        $(this._element).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

        this._element.style[dimension] = this._element[scrollSize] + 'px';
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';

        _util2.default.reflow(this._element);

        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);

        this._element.setAttribute('aria-expanded', false);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);
          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = 0;

        if (!_util2.default.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'setTransitioning',
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values
        _util2.default.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_getDimension',
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: '_getParent',
      value: function _getParent() {
        var _this3 = this;

        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });

        return parent;
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);
          element.setAttribute('aria-expanded', isOpen);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }

      // static

    }], [{
      key: '_getTargetFromElement',
      value: function _getTargetFromElement(element) {
        var selector = _util2.default.getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(_jquery2.default);

exports.default = Collapse;

},{"./util":4,"jquery":16}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    reflow: function reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight);
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = void 0;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(_jquery2.default); /**
                      * --------------------------------------------------------------------------
                      * Bootstrap (v4.0.0-alpha.2): util.js
                      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
                      * --------------------------------------------------------------------------
                      */
exports.default = Util;

},{"jquery":16}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var doThing = exports.doThing = function doThing(store, data) {
    store.dispatch('CHANGE_SOMETHING', data);
};

var registerUser = exports.registerUser = function registerUser(store, name, email, password) {
    store.dispatch('SET_USER', { name: name, email: email, password: password });
    store.dispatch('SET_REGISTERED', true);
};

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    vuex: {
        getters: {
            username: function username(state) {
                return state.user.name;
            },
            registered: function registered(state) {
                return state.registered;
            }
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<nav class=\"header navbar navbar-fixed-top navbar-dark bg-inverse\">\n    <a class=\"navbar-brand\" href=\"/\">GovHack - 2016</a>\n\n    <a href=\"#\" title=\"Menu\" class=\"btn btn-primary pull-xs-right hidden-md-up js-sidebar-toggle\">[M]</a>\n    <a v-if=\"registered\" href=\"#\" title=\"Admin\" class=\"btn btn-success pull-xs-right\">{{ username }}</a>\n    <a v-if=\"!registered\" v-link=\"{ path: '/register' }\" href=\"#\" title=\"Admin\" class=\"btn btn-success pull-xs-right\">Register</a>\n</nav>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-40c23ebc", module.exports)
  } else {
    hotAPI.update("_v-40c23ebc", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":26,"vue-hot-reload-api":24}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
    thing: 'lol',
    registered: false,
    user: {
        name: '',
        email: '',
        password: ''
    }
};

var mutations = {
    // Data Import Mutations
    CHANGE_SOMETHING: function CHANGE_SOMETHING(state, newvalue) {
        state.thing = newvalue;
    },
    SET_USER: function SET_USER(state, user) {
        state.user = user;
    },
    SET_REGISTERED: function SET_REGISTERED(state, value) {
        state.registered = value;
    }
};

exports.default = new _vuex2.default.Store({
    state: state,
    mutations: mutations
});

},{"vue":26,"vuex":27}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    components: {},
    methods: {
        // Perform actions of any kind
        callDoThing: function callDoThing() {
            this.doThing('new value');
        }
    },
    created: function created() {
        // Do something when this view is instantiated
    },

    vuex: {
        getters: {
            thing: function thing(state) {
                return state.thing;
            }
        },
        actions: actions
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<h1>Home</h1>\n<p>yo</p>\n<button @click=\"callDoThing()\">{{ thing }}</button>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3342f8d0", module.exports)
  } else {
    hotAPI.update("_v-3342f8d0", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../actions":5,"vue":26,"vue-hot-reload-api":24}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _leafletOmnivore = require('leaflet-omnivore');

var _leafletOmnivore2 = _interopRequireDefault(_leafletOmnivore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: [],
    data: function data() {
        return {
            map: false
        };
    },

    components: {},
    methods: {
        //
    },
    created: function created() {
        //
    },

    ready: function ready() {
        // create the base map
        var lat = -41.0995128,
            lng = 171.7986386,
            zoom = 5;

        this.map = _leaflet2.default.map('map').setView([lat, lng], zoom);
        _leaflet2.default.Icon.Default.imagePath = 'dist/images';

        // add the tile layer
        _leaflet2.default.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // create the kml layer for doc huts
        var hutLayer = void 0;
        hutLayer = _leafletOmnivore2.default.kml('/fixtures/doc-huts.kml').on('ready', function () {
            // After the 'ready' event fires, the GeoJSON contents are accessible
            // and you can iterate through layers to bind custom popups.
            hutLayer.eachLayer(function (layer) {
                // See the `.bindPopup` documentation for full details. This
                // dataset has a property called `name`: your dataset might not,
                // so inspect it and customize to taste.
                var props = layer.feature.properties;
                var content = '\n                            <p>\n                                Description: ' + props.DESCRIPTION + '\n                                <br>\n                                Status: ' + props.STATUS + '\n                            </p>\n                        ';
                layer.bindPopup(content);
            });
        });

        // create the kml layer for doc huts
        var trackLayer = void 0;
        trackLayer = _leafletOmnivore2.default.kml('/fixtures/doc-tracks.kml');

        // add the layer to the map
        this.map.addLayer(hutLayer);
        this.map.addLayer(trackLayer);

        // add layer controls
        _leaflet2.default.control.layers({}, {
            'Huts': hutLayer,
            'Tracks': trackLayer
        }).addTo(this.map);
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<h1>Locations</h1>\n<div id=\"map\" class=\"map\"></div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6be12a6e", module.exports)
  } else {
    hotAPI.update("_v-6be12a6e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"leaflet":18,"leaflet-omnivore":17,"vue":26,"vue-hot-reload-api":24}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    components: {},
    data: function data() {
        return {
            name: '',
            email: '',
            password: '',

            ccname: '',
            ccnumber: '',
            ccv: '',
            ccexpmonth: '',
            ccexpyear: ''
        };
    },

    methods: {
        // Perform actions of any kind
        doRegister: function doRegister() {
            // TODO: Store CC details also
            this.registerUser(this.name, this.email, this.password);
            this.$router.go('/');
        },


        // Field updates
        updateField: function updateField(field, event) {
            this.$set(field, event.target.value);
        }
    },
    created: function created() {
        // Do something when this view is instantiated
    },

    vuex: {
        getters: {
            thing: function thing(state) {
                return state.thing;
            }
        },
        actions: actions
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<h1>Register</h1>\n<p><em>This data is currently stored only in your browser, and is not shared with the Docket developers, the DoC, or anyone else. Feel free to use fake details anyway!</em></p>\n\n<form v-on:submit.prevent=\"\">\n    <h4>Contact Details</h4>\n\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input v-on:blur=\"updateField('name', $event)\" type=\"text\" name=\"name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email Address</label>\n        <input v-on:blur=\"updateField('email', $event)\" type=\"email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input v-on:blur=\"updateField('password', $event)\" type=\"password\" name=\"password\">\n    </div>\n\n    <h4>Payment Details</h4>\n\n    <div class=\"form-group\">\n        <label for=\"password\">Card Holder Name</label>\n        <input v-on:blur=\"updateField('ccname', $event)\" type=\"text\" name=\"ccname\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Credit Card Number</label>\n        <input v-on:blur=\"updateField('ccnumber', $event)\" type=\"text\" name=\"ccnumber\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">CCV</label>\n        <input v-on:blur=\"updateField('ccv', $event)\" type=\"text\" name=\"ccv\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Expiry Date</label>\n        <div class=\"form-inline\">\n            <input v-on:blur=\"updateField('ccexpmonth', $event)\" type=\"text\" name=\"ccexpmonth\">\n            <input v-on:blur=\"updateField('ccexpyear', $event)\" type=\"text\" name=\"ccexpyear\">\n        </div>\n    </div>\n\n    <button class=\"btn btn-primary\" @click=\"doRegister()\">Register</button>\n</form>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-529eeb5c", module.exports)
  } else {
    hotAPI.update("_v-529eeb5c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"../actions":5,"vue":26,"vue-hot-reload-api":24}],11:[function(require,module,exports){

},{}],12:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],13:[function(require,module,exports){
function corslite(url, callback, cors) {
    var sent = false;

    if (typeof window.XMLHttpRequest === 'undefined') {
        return callback(Error('Browser not supported'));
    }

    if (typeof cors === 'undefined') {
        var m = url.match(/^\s*https?:\/\/[^\/]*/);
        cors = m && (m[0] !== location.protocol + '//' + location.domain +
                (location.port ? ':' + location.port : ''));
    }

    var x = new window.XMLHttpRequest();

    function isSuccessful(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    if (cors && !('withCredentials' in x)) {
        // IE8-9
        x = new window.XDomainRequest();

        // Ensure callback is never called synchronously, i.e., before
        // x.send() returns (this has been observed in the wild).
        // See https://github.com/mapbox/mapbox.js/issues/472
        var original = callback;
        callback = function() {
            if (sent) {
                original.apply(this, arguments);
            } else {
                var that = this, args = arguments;
                setTimeout(function() {
                    original.apply(that, args);
                }, 0);
            }
        }
    }

    function loaded() {
        if (
            // XDomainRequest
            x.status === undefined ||
            // modern browsers
            isSuccessful(x.status)) callback.call(x, null, x);
        else callback.call(x, x, null);
    }

    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
    if ('onload' in x) {
        x.onload = loaded;
    } else {
        x.onreadystatechange = function readystate() {
            if (x.readyState === 4) {
                loaded();
            }
        };
    }

    // Call the callback with the XMLHttpRequest object as an error and prevent
    // it from ever being called again by reassigning it to `noop`
    x.onerror = function error(evt) {
        // XDomainRequest provides no evt parameter
        callback.call(this, evt || true, null);
        callback = function() { };
    };

    // IE9 must have onprogress be set to a unique function.
    x.onprogress = function() { };

    x.ontimeout = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    x.onabort = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    // GET is the only supported HTTP Verb by XDomainRequest and is the
    // only one supported here.
    x.open('GET', url, true);

    // Send the request. Sending data is not supported.
    x.send(null);
    sent = true;

    return x;
}

if (typeof module !== 'undefined') module.exports = corslite;

},{}],14:[function(require,module,exports){
var dsv = require('dsv'),
    sexagesimal = require('sexagesimal');

function isLat(f) { return !!f.match(/(Lat)(itude)?/gi); }
function isLon(f) { return !!f.match(/(L)(on|ng)(gitude)?/i); }

function keyCount(o) {
    return (typeof o == 'object') ? Object.keys(o).length : 0;
}

function autoDelimiter(x) {
    var delimiters = [',', ';', '\t', '|'];
    var results = [];

    delimiters.forEach(function(delimiter) {
        var res = dsv(delimiter).parse(x);
        if (res.length >= 1) {
            var count = keyCount(res[0]);
            for (var i = 0; i < res.length; i++) {
                if (keyCount(res[i]) !== count) return;
            }
            results.push({
                delimiter: delimiter,
                arity: Object.keys(res[0]).length,
            });
        }
    });

    if (results.length) {
        return results.sort(function(a, b) {
            return b.arity - a.arity;
        })[0].delimiter;
    } else {
        return null;
    }
}

function auto(x) {
    var delimiter = autoDelimiter(x);
    if (!delimiter) return null;
    return dsv(delimiter).parse(x);
}

function csv2geojson(x, options, callback) {

    if (!callback) {
        callback = options;
        options = {};
    }

    options.delimiter = options.delimiter || ',';

    var latfield = options.latfield || '',
        lonfield = options.lonfield || '';

    var features = [],
        featurecollection = { type: 'FeatureCollection', features: features };

    if (options.delimiter === 'auto' && typeof x == 'string') {
        options.delimiter = autoDelimiter(x);
        if (!options.delimiter) return callback({
            type: 'Error',
            message: 'Could not autodetect delimiter'
        });
    }

    var parsed = (typeof x == 'string') ? dsv(options.delimiter).parse(x) : x;

    if (!parsed.length) return callback(null, featurecollection);

    if (!latfield || !lonfield) {
        for (var f in parsed[0]) {
            if (!latfield && isLat(f)) latfield = f;
            if (!lonfield && isLon(f)) lonfield = f;
        }
        if (!latfield || !lonfield) {
            var fields = [];
            for (var k in parsed[0]) fields.push(k);
            return callback({
                type: 'Error',
                message: 'Latitude and longitude fields not present',
                data: parsed,
                fields: fields
            });
        }
    }

    var errors = [];

    for (var i = 0; i < parsed.length; i++) {
        if (parsed[i][lonfield] !== undefined &&
            parsed[i][lonfield] !== undefined) {

            var lonk = parsed[i][lonfield],
                latk = parsed[i][latfield],
                lonf, latf,
                a;

            a = sexagesimal(lonk, 'EW');
            if (a) lonk = a;
            a = sexagesimal(latk, 'NS');
            if (a) latk = a;

            lonf = parseFloat(lonk);
            latf = parseFloat(latk);

            if (isNaN(lonf) ||
                isNaN(latf)) {
                errors.push({
                    message: 'A row contained an invalid value for latitude or longitude',
                    row: parsed[i]
                });
            } else {
                if (!options.includeLatLon) {
                    delete parsed[i][lonfield];
                    delete parsed[i][latfield];
                }

                features.push({
                    type: 'Feature',
                    properties: parsed[i],
                    geometry: {
                        type: 'Point',
                        coordinates: [
                            parseFloat(lonf),
                            parseFloat(latf)
                        ]
                    }
                });
            }
        }
    }

    callback(errors.length ? errors: null, featurecollection);
}

function toLine(gj) {
    var features = gj.features;
    var line = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: []
        }
    };
    for (var i = 0; i < features.length; i++) {
        line.geometry.coordinates.push(features[i].geometry.coordinates);
    }
    line.properties = features[0].properties;
    return {
        type: 'FeatureCollection',
        features: [line]
    };
}

function toPolygon(gj) {
    var features = gj.features;
    var poly = {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [[]]
        }
    };
    for (var i = 0; i < features.length; i++) {
        poly.geometry.coordinates[0].push(features[i].geometry.coordinates);
    }
    poly.properties = features[0].properties;
    return {
        type: 'FeatureCollection',
        features: [poly]
    };
}

module.exports = {
    isLon: isLon,
    isLat: isLat,
    csv: dsv.csv.parse,
    tsv: dsv.tsv.parse,
    dsv: dsv,
    auto: auto,
    csv2geojson: csv2geojson,
    toLine: toLine,
    toPolygon: toPolygon
};

},{"dsv":15,"sexagesimal":21}],15:[function(require,module,exports){
var fs = require("fs");

module.exports = new Function("dsv.version = \"0.0.3\";\n\ndsv.tsv = dsv(\"\\t\");\ndsv.csv = dsv(\",\");\n\nfunction dsv(delimiter) {\n  var dsv = {},\n      reFormat = new RegExp(\"[\\\"\" + delimiter + \"\\n]\"),\n      delimiterCode = delimiter.charCodeAt(0);\n\n  dsv.parse = function(text, f) {\n    var o;\n    return dsv.parseRows(text, function(row, i) {\n      if (o) return o(row, i - 1);\n      var a = new Function(\"d\", \"return {\" + row.map(function(name, i) {\n        return JSON.stringify(name) + \": d[\" + i + \"]\";\n      }).join(\",\") + \"}\");\n      o = f ? function(row, i) { return f(a(row), i); } : a;\n    });\n  };\n\n  dsv.parseRows = function(text, f) {\n    var EOL = {}, // sentinel value for end-of-line\n        EOF = {}, // sentinel value for end-of-file\n        rows = [], // output rows\n        N = text.length,\n        I = 0, // current character index\n        n = 0, // the current line number\n        t, // the current token\n        eol; // is the current token followed by EOL?\n\n    function token() {\n      if (I >= N) return EOF; // special case: end of file\n      if (eol) return eol = false, EOL; // special case: end of line\n\n      // special case: quotes\n      var j = I;\n      if (text.charCodeAt(j) === 34) {\n        var i = j;\n        while (i++ < N) {\n          if (text.charCodeAt(i) === 34) {\n            if (text.charCodeAt(i + 1) !== 34) break;\n            ++i;\n          }\n        }\n        I = i + 2;\n        var c = text.charCodeAt(i + 1);\n        if (c === 13) {\n          eol = true;\n          if (text.charCodeAt(i + 2) === 10) ++I;\n        } else if (c === 10) {\n          eol = true;\n        }\n        return text.substring(j + 1, i).replace(/\"\"/g, \"\\\"\");\n      }\n\n      // common case: find next delimiter or newline\n      while (I < N) {\n        var c = text.charCodeAt(I++), k = 1;\n        if (c === 10) eol = true; // \\n\n        else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \\r|\\r\\n\n        else if (c !== delimiterCode) continue;\n        return text.substring(j, I - k);\n      }\n\n      // special case: last token before EOF\n      return text.substring(j);\n    }\n\n    while ((t = token()) !== EOF) {\n      var a = [];\n      while (t !== EOL && t !== EOF) {\n        a.push(t);\n        t = token();\n      }\n      if (f && !(a = f(a, n++))) continue;\n      rows.push(a);\n    }\n\n    return rows;\n  };\n\n  dsv.format = function(rows) {\n    if (Array.isArray(rows[0])) return dsv.formatRows(rows); // deprecated; use formatRows\n    var fieldSet = {}, fields = [];\n\n    // Compute unique fields in order of discovery.\n    rows.forEach(function(row) {\n      for (var field in row) {\n        if (!(field in fieldSet)) {\n          fields.push(fieldSet[field] = field);\n        }\n      }\n    });\n\n    return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {\n      return fields.map(function(field) {\n        return formatValue(row[field]);\n      }).join(delimiter);\n    })).join(\"\\n\");\n  };\n\n  dsv.formatRows = function(rows) {\n    return rows.map(formatRow).join(\"\\n\");\n  };\n\n  function formatRow(row) {\n    return row.map(formatValue).join(delimiter);\n  }\n\n  function formatValue(text) {\n    return reFormat.test(text) ? \"\\\"\" + text.replace(/\\\"/g, \"\\\"\\\"\") + \"\\\"\" : text;\n  }\n\n  return dsv;\n}\n" + ";return dsv")();

},{"fs":12}],16:[function(require,module,exports){
/*eslint-disable no-unused-vars*/
/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-07T21:44Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true;
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {
	// Known :disabled false positives:
	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
	// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Check form elements and option elements for explicit disabling
		return "label" in elem && elem.disabled === disabled ||
			"form" in elem && elem.disabled === disabled ||

			// Check non-disabled form elements for fieldset[disabled] ancestors
			"form" in elem && elem.disabled === false && (
				// Support: IE6-11+
				// Ancestry is covered for us
				elem.isDisabled === disabled ||

				// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
				/* jshint -W018 */
				elem.isDisabled !== !disabled &&
					("label" in elem || !disabledAncestor( elem )) !== disabled
			);
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnotwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) ),
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support: IE <=9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox <=42
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		opt.duration = typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in uncached url if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rts, "" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}





var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}


return jQuery;
} );

},{}],17:[function(require,module,exports){
var xhr = require('corslite'),
    csv2geojson = require('csv2geojson'),
    wellknown = require('wellknown'),
    polyline = require('polyline'),
    topojson = require('topojson/topojson.js'),
    toGeoJSON = require('togeojson');

module.exports.polyline = polylineLoad;
module.exports.polyline.parse = polylineParse;

module.exports.geojson = geojsonLoad;

module.exports.topojson = topojsonLoad;
module.exports.topojson.parse = topojsonParse;

module.exports.csv = csvLoad;
module.exports.csv.parse = csvParse;

module.exports.gpx = gpxLoad;
module.exports.gpx.parse = gpxParse;

module.exports.kml = kmlLoad;
module.exports.kml.parse = kmlParse;

module.exports.wkt = wktLoad;
module.exports.wkt.parse = wktParse;

function addData(l, d) {
    if ('addData' in l) l.addData(d);
    if ('setGeoJSON' in l) l.setGeoJSON(d);
}

/**
 * Load a [GeoJSON](http://geojson.org/) document into a layer and return the layer.
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function geojsonLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, function(err, response) {
        if (err) return layer.fire('error', { error: err });
        addData(layer, JSON.parse(response.responseText));
        layer.fire('ready');
    });
    return layer;
}

/**
 * Load a [TopoJSON](https://github.com/mbostock/topojson) document into a layer and return the layer.
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function topojsonLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, onload);
    function onload(err, response) {
        if (err) return layer.fire('error', { error: err });
        topojsonParse(response.responseText, options, layer);
        layer.fire('ready');
    }
    return layer;
}

/**
 * Load a CSV document into a layer and return the layer.
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function csvLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, onload);
    function onload(err, response) {
        var error;
        if (err) return layer.fire('error', { error: err });
        function avoidReady() {
            error = true;
        }
        layer.on('error', avoidReady);
        csvParse(response.responseText, options, layer);
        layer.off('error', avoidReady);
        if (!error) layer.fire('ready');
    }
    return layer;
}

/**
 * Load a GPX document into a layer and return the layer.
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function gpxLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, onload);
    function onload(err, response) {
        var error;
        if (err) return layer.fire('error', { error: err });
        function avoidReady() {
            error = true;
        }
        layer.on('error', avoidReady);
        gpxParse(response.responseXML || response.responseText, options, layer);
        layer.off('error', avoidReady);
        if (!error) layer.fire('ready');
    }
    return layer;
}

/**
 * Load a [KML](https://developers.google.com/kml/documentation/) document into a layer and return the layer.
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function kmlLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, onload);
    function onload(err, response) {
        var error;
        if (err) return layer.fire('error', { error: err });
        function avoidReady() {
            error = true;
        }
        layer.on('error', avoidReady);
        kmlParse(response.responseXML || response.responseText, options, layer);
        layer.off('error', avoidReady);
        if (!error) layer.fire('ready');
    }
    return layer;
}

/**
 * Load a WKT (Well Known Text) string into a layer and return the layer
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function wktLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, onload);
    function onload(err, response) {
        if (err) return layer.fire('error', { error: err });
        wktParse(response.responseText, options, layer);
        layer.fire('ready');
    }
    return layer;
}

/**
 * Load a polyline string into a layer and return the layer
 *
 * @param {string} url
 * @param {object} options
 * @param {object} customLayer
 * @returns {object}
 */
function polylineLoad(url, options, customLayer) {
    var layer = customLayer || L.geoJson();
    xhr(url, onload);
    function onload(err, response) {
        if (err) return layer.fire('error', { error: err });
        polylineParse(response.responseText, options, layer);
        layer.fire('ready');
    }
    return layer;
}

function topojsonParse(data, options, layer) {
    var o = typeof data === 'string' ?
        JSON.parse(data) : data;
    layer = layer || L.geoJson();
    for (var i in o.objects) {
        var ft = topojson.feature(o, o.objects[i]);
        if (ft.features) addData(layer, ft.features);
        else addData(layer, ft);
    }
    return layer;
}

function csvParse(csv, options, layer) {
    layer = layer || L.geoJson();
    options = options || {};
    csv2geojson.csv2geojson(csv, options, onparse);
    function onparse(err, geojson) {
        if (err) return layer.fire('error', { error: err });
        addData(layer, geojson);
    }
    return layer;
}

function gpxParse(gpx, options, layer) {
    var xml = parseXML(gpx);
    if (!xml) return layer.fire('error', {
        error: 'Could not parse GPX'
    });
    layer = layer || L.geoJson();
    var geojson = toGeoJSON.gpx(xml);
    addData(layer, geojson);
    return layer;
}


function kmlParse(gpx, options, layer) {
    var xml = parseXML(gpx);
    if (!xml) return layer.fire('error', {
        error: 'Could not parse KML'
    });
    layer = layer || L.geoJson();
    var geojson = toGeoJSON.kml(xml);
    addData(layer, geojson);
    return layer;
}

function polylineParse(txt, options, layer) {
    layer = layer || L.geoJson();
    options = options || {};
    var coords = polyline.decode(txt, options.precision);
    var geojson = { type: 'LineString', coordinates: [] };
    for (var i = 0; i < coords.length; i++) {
        // polyline returns coords in lat, lng order, so flip for geojson
        geojson.coordinates[i] = [coords[i][1], coords[i][0]];
    }
    addData(layer, geojson);
    return layer;
}

function wktParse(wkt, options, layer) {
    layer = layer || L.geoJson();
    var geojson = wellknown(wkt);
    addData(layer, geojson);
    return layer;
}

function parseXML(str) {
    if (typeof str === 'string') {
        return (new DOMParser()).parseFromString(str, 'text/xml');
    } else {
        return str;
    }
}

},{"corslite":13,"csv2geojson":14,"polyline":19,"togeojson":22,"topojson/topojson.js":23,"wellknown":28}],18:[function(require,module,exports){
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
(function (window, document, undefined) {
var oldL = window.L,
    L = {};

L.version = '0.7.7';

// define Leaflet for Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
	module.exports = L;

// define Leaflet as an AMD module
} else if (typeof define === 'function' && define.amd) {
	define(L);
}

// define Leaflet as a global L variable, saving the original L to restore later if needed

L.noConflict = function () {
	window.L = oldL;
	return this;
};

window.L = L;


/*
 * L.Util contains various utility functions used throughout Leaflet code.
 */

L.Util = {
	extend: function (dest) { // (Object[, Object, ...]) ->
		var sources = Array.prototype.slice.call(arguments, 1),
		    i, j, len, src;

		for (j = 0, len = sources.length; j < len; j++) {
			src = sources[j] || {};
			for (i in src) {
				if (src.hasOwnProperty(i)) {
					dest[i] = src[i];
				}
			}
		}
		return dest;
	},

	bind: function (fn, obj) { // (Function, Object) -> Function
		var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
		return function () {
			return fn.apply(obj, args || arguments);
		};
	},

	stamp: (function () {
		var lastId = 0,
		    key = '_leaflet_id';
		return function (obj) {
			obj[key] = obj[key] || ++lastId;
			return obj[key];
		};
	}()),

	invokeEach: function (obj, method, context) {
		var i, args;

		if (typeof obj === 'object') {
			args = Array.prototype.slice.call(arguments, 3);

			for (i in obj) {
				method.apply(context, [i, obj[i]].concat(args));
			}
			return true;
		}

		return false;
	},

	limitExecByInterval: function (fn, time, context) {
		var lock, execOnUnlock;

		return function wrapperFn() {
			var args = arguments;

			if (lock) {
				execOnUnlock = true;
				return;
			}

			lock = true;

			setTimeout(function () {
				lock = false;

				if (execOnUnlock) {
					wrapperFn.apply(context, args);
					execOnUnlock = false;
				}
			}, time);

			fn.apply(context, args);
		};
	},

	falseFn: function () {
		return false;
	},

	formatNum: function (num, digits) {
		var pow = Math.pow(10, digits || 5);
		return Math.round(num * pow) / pow;
	},

	trim: function (str) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	},

	splitWords: function (str) {
		return L.Util.trim(str).split(/\s+/);
	},

	setOptions: function (obj, options) {
		obj.options = L.extend({}, obj.options, options);
		return obj.options;
	},

	getParamString: function (obj, existingUrl, uppercase) {
		var params = [];
		for (var i in obj) {
			params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
		}
		return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
	},
	template: function (str, data) {
		return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
			var value = data[key];
			if (value === undefined) {
				throw new Error('No value provided for variable ' + str);
			} else if (typeof value === 'function') {
				value = value(data);
			}
			return value;
		});
	},

	isArray: Array.isArray || function (obj) {
		return (Object.prototype.toString.call(obj) === '[object Array]');
	},

	emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
};

(function () {

	// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

	function getPrefixed(name) {
		var i, fn,
		    prefixes = ['webkit', 'moz', 'o', 'ms'];

		for (i = 0; i < prefixes.length && !fn; i++) {
			fn = window[prefixes[i] + name];
		}

		return fn;
	}

	var lastTime = 0;

	function timeoutDefer(fn) {
		var time = +new Date(),
		    timeToCall = Math.max(0, 16 - (time - lastTime));

		lastTime = time + timeToCall;
		return window.setTimeout(fn, timeToCall);
	}

	var requestFn = window.requestAnimationFrame ||
	        getPrefixed('RequestAnimationFrame') || timeoutDefer;

	var cancelFn = window.cancelAnimationFrame ||
	        getPrefixed('CancelAnimationFrame') ||
	        getPrefixed('CancelRequestAnimationFrame') ||
	        function (id) { window.clearTimeout(id); };


	L.Util.requestAnimFrame = function (fn, context, immediate, element) {
		fn = L.bind(fn, context);

		if (immediate && requestFn === timeoutDefer) {
			fn();
		} else {
			return requestFn.call(window, fn, element);
		}
	};

	L.Util.cancelAnimFrame = function (id) {
		if (id) {
			cancelFn.call(window, id);
		}
	};

}());

// shortcuts for most used utility functions
L.extend = L.Util.extend;
L.bind = L.Util.bind;
L.stamp = L.Util.stamp;
L.setOptions = L.Util.setOptions;


/*
 * L.Class powers the OOP facilities of the library.
 * Thanks to John Resig and Dean Edwards for inspiration!
 */

L.Class = function () {};

L.Class.extend = function (props) {

	// extended class with the new prototype
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		if (this._initHooks) {
			this.callInitHooks();
		}
	};

	// instantiate class without calling constructor
	var F = function () {};
	F.prototype = this.prototype;

	var proto = new F();
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	//inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		L.extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		L.Util.extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (props.options && proto.options) {
		props.options = L.extend({}, proto.options, props.options);
	}

	// mix given properties into the prototype
	L.extend(proto, props);

	proto._initHooks = [];

	var parent = this;
	// jshint camelcase: false
	NewClass.__super__ = parent.prototype;

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parent.prototype.callInitHooks) {
			parent.prototype.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// method for adding properties to prototype
L.Class.include = function (props) {
	L.extend(this.prototype, props);
};

// merge new default options to the Class
L.Class.mergeOptions = function (options) {
	L.extend(this.prototype.options, options);
};

// add a constructor hook
L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
};


/*
 * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
 */

var eventsKey = '_leaflet_events';

L.Mixin = {};

L.Mixin.Events = {

	addEventListener: function (types, fn, context) { // (String, Function[, Object]) or (Object[, Object])

		// types can be a map of types/handlers
		if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) { return this; }

		var events = this[eventsKey] = this[eventsKey] || {},
		    contextId = context && context !== this && L.stamp(context),
		    i, len, event, type, indexKey, indexLenKey, typeIndex;

		// types can be a string of space-separated words
		types = L.Util.splitWords(types);

		for (i = 0, len = types.length; i < len; i++) {
			event = {
				action: fn,
				context: context || this
			};
			type = types[i];

			if (contextId) {
				// store listeners of a particular context in a separate hash (if it has an id)
				// gives a major performance boost when removing thousands of map layers

				indexKey = type + '_idx';
				indexLenKey = indexKey + '_len';

				typeIndex = events[indexKey] = events[indexKey] || {};

				if (!typeIndex[contextId]) {
					typeIndex[contextId] = [];

					// keep track of the number of keys in the index to quickly check if it's empty
					events[indexLenKey] = (events[indexLenKey] || 0) + 1;
				}

				typeIndex[contextId].push(event);


			} else {
				events[type] = events[type] || [];
				events[type].push(event);
			}
		}

		return this;
	},

	hasEventListeners: function (type) { // (String) -> Boolean
		var events = this[eventsKey];
		return !!events && ((type in events && events[type].length > 0) ||
		                    (type + '_idx' in events && events[type + '_idx_len'] > 0));
	},

	removeEventListener: function (types, fn, context) { // ([String, Function, Object]) or (Object[, Object])

		if (!this[eventsKey]) {
			return this;
		}

		if (!types) {
			return this.clearAllEventListeners();
		}

		if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) { return this; }

		var events = this[eventsKey],
		    contextId = context && context !== this && L.stamp(context),
		    i, len, type, listeners, j, indexKey, indexLenKey, typeIndex, removed;

		types = L.Util.splitWords(types);

		for (i = 0, len = types.length; i < len; i++) {
			type = types[i];
			indexKey = type + '_idx';
			indexLenKey = indexKey + '_len';

			typeIndex = events[indexKey];

			if (!fn) {
				// clear all listeners for a type if function isn't specified
				delete events[type];
				delete events[indexKey];
				delete events[indexLenKey];

			} else {
				listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

				if (listeners) {
					for (j = listeners.length - 1; j >= 0; j--) {
						if ((listeners[j].action === fn) && (!context || (listeners[j].context === context))) {
							removed = listeners.splice(j, 1);
							// set the old action to a no-op, because it is possible
							// that the listener is being iterated over as part of a dispatch
							removed[0].action = L.Util.falseFn;
						}
					}

					if (context && typeIndex && (listeners.length === 0)) {
						delete typeIndex[contextId];
						events[indexLenKey]--;
					}
				}
			}
		}

		return this;
	},

	clearAllEventListeners: function () {
		delete this[eventsKey];
		return this;
	},

	fireEvent: function (type, data) { // (String[, Object])
		if (!this.hasEventListeners(type)) {
			return this;
		}

		var event = L.Util.extend({}, data, { type: type, target: this });

		var events = this[eventsKey],
		    listeners, i, len, typeIndex, contextId;

		if (events[type]) {
			// make sure adding/removing listeners inside other listeners won't cause infinite loop
			listeners = events[type].slice();

			for (i = 0, len = listeners.length; i < len; i++) {
				listeners[i].action.call(listeners[i].context, event);
			}
		}

		// fire event for the context-indexed listeners as well
		typeIndex = events[type + '_idx'];

		for (contextId in typeIndex) {
			listeners = typeIndex[contextId].slice();

			if (listeners) {
				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].action.call(listeners[i].context, event);
				}
			}
		}

		return this;
	},

	addOneTimeEventListener: function (types, fn, context) {

		if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) { return this; }

		var handler = L.bind(function () {
			this
			    .removeEventListener(types, fn, context)
			    .removeEventListener(types, handler, context);
		}, this);

		return this
		    .addEventListener(types, fn, context)
		    .addEventListener(types, handler, context);
	}
};

L.Mixin.Events.on = L.Mixin.Events.addEventListener;
L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
L.Mixin.Events.fire = L.Mixin.Events.fireEvent;


/*
 * L.Browser handles different browser and feature detections for internal Leaflet use.
 */

(function () {

	var ie = 'ActiveXObject' in window,
		ielt9 = ie && !document.addEventListener,

	    // terrible browser detection to work around Safari / iOS / Android browser bugs
	    ua = navigator.userAgent.toLowerCase(),
	    webkit = ua.indexOf('webkit') !== -1,
	    chrome = ua.indexOf('chrome') !== -1,
	    phantomjs = ua.indexOf('phantom') !== -1,
	    android = ua.indexOf('android') !== -1,
	    android23 = ua.search('android [23]') !== -1,
		gecko = ua.indexOf('gecko') !== -1,

	    mobile = typeof orientation !== undefined + '',
	    msPointer = !window.PointerEvent && window.MSPointerEvent,
		pointer = (window.PointerEvent && window.navigator.pointerEnabled) ||
				  msPointer,
	    retina = ('devicePixelRatio' in window && window.devicePixelRatio > 1) ||
	             ('matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') &&
	              window.matchMedia('(min-resolution:144dpi)').matches),

	    doc = document.documentElement,
	    ie3d = ie && ('transition' in doc.style),
	    webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
	    gecko3d = 'MozPerspective' in doc.style,
	    opera3d = 'OTransition' in doc.style,
	    any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs;

	var touch = !window.L_NO_TOUCH && !phantomjs && (pointer || 'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch));

	L.Browser = {
		ie: ie,
		ielt9: ielt9,
		webkit: webkit,
		gecko: gecko && !webkit && !window.opera && !ie,

		android: android,
		android23: android23,

		chrome: chrome,

		ie3d: ie3d,
		webkit3d: webkit3d,
		gecko3d: gecko3d,
		opera3d: opera3d,
		any3d: any3d,

		mobile: mobile,
		mobileWebkit: mobile && webkit,
		mobileWebkit3d: mobile && webkit3d,
		mobileOpera: mobile && window.opera,

		touch: touch,
		msPointer: msPointer,
		pointer: pointer,

		retina: retina
	};

}());


/*
 * L.Point represents a point with x and y coordinates.
 */

L.Point = function (/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
	this.x = (round ? Math.round(x) : x);
	this.y = (round ? Math.round(y) : y);
};

L.Point.prototype = {

	clone: function () {
		return new L.Point(this.x, this.y);
	},

	// non-destructive, returns a new point
	add: function (point) {
		return this.clone()._add(L.point(point));
	},

	// destructive, used directly for performance in situations where it's safe to modify existing point
	_add: function (point) {
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	subtract: function (point) {
		return this.clone()._subtract(L.point(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	distanceTo: function (point) {
		point = L.point(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	equals: function (point) {
		point = L.point(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	contains: function (point) {
		point = L.point(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	toString: function () {
		return 'Point(' +
		        L.Util.formatNum(this.x) + ', ' +
		        L.Util.formatNum(this.y) + ')';
	}
};

L.point = function (x, y, round) {
	if (x instanceof L.Point) {
		return x;
	}
	if (L.Util.isArray(x)) {
		return new L.Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	return new L.Point(x, y, round);
};


/*
 * L.Bounds represents a rectangular area on the screen in pixel coordinates.
 */

L.Bounds = function (a, b) { //(Point, Point) or Point[]
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
};

L.Bounds.prototype = {
	// extend the bounds to contain the given point
	extend: function (point) { // (Point)
		point = L.point(point);

		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	getCenter: function (round) { // (Boolean) -> Point
		return new L.Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	getBottomLeft: function () { // -> Point
		return new L.Point(this.min.x, this.max.y);
	},

	getTopRight: function () { // -> Point
		return new L.Point(this.max.x, this.min.y);
	},

	getSize: function () {
		return this.max.subtract(this.min);
	},

	contains: function (obj) { // (Bounds) or (Point) -> Boolean
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof L.Point) {
			obj = L.point(obj);
		} else {
			obj = L.bounds(obj);
		}

		if (obj instanceof L.Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = L.bounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};

L.bounds = function (a, b) { // (Bounds) or (Point, Point) or (Point[])
	if (!a || a instanceof L.Bounds) {
		return a;
	}
	return new L.Bounds(a, b);
};


/*
 * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
 */

L.Transformation = function (a, b, c, d) {
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
};

L.Transformation.prototype = {
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	untransform: function (point, scale) {
		scale = scale || 1;
		return new L.Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};


/*
 * L.DomUtil contains various utility functions for working with DOM.
 */

L.DomUtil = {
	get: function (id) {
		return (typeof id === 'string' ? document.getElementById(id) : id);
	},

	getStyle: function (el, style) {

		var value = el.style[style];

		if (!value && el.currentStyle) {
			value = el.currentStyle[style];
		}

		if ((!value || value === 'auto') && document.defaultView) {
			var css = document.defaultView.getComputedStyle(el, null);
			value = css ? css[style] : null;
		}

		return value === 'auto' ? null : value;
	},

	getViewportOffset: function (element) {

		var top = 0,
		    left = 0,
		    el = element,
		    docBody = document.body,
		    docEl = document.documentElement,
		    pos;

		do {
			top  += el.offsetTop  || 0;
			left += el.offsetLeft || 0;

			//add borders
			top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
			left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;

			pos = L.DomUtil.getStyle(el, 'position');

			if (el.offsetParent === docBody && pos === 'absolute') { break; }

			if (pos === 'fixed') {
				top  += docBody.scrollTop  || docEl.scrollTop  || 0;
				left += docBody.scrollLeft || docEl.scrollLeft || 0;
				break;
			}

			if (pos === 'relative' && !el.offsetLeft) {
				var width = L.DomUtil.getStyle(el, 'width'),
				    maxWidth = L.DomUtil.getStyle(el, 'max-width'),
				    r = el.getBoundingClientRect();

				if (width !== 'none' || maxWidth !== 'none') {
					left += r.left + el.clientLeft;
				}

				//calculate full y offset since we're breaking out of the loop
				top += r.top + (docBody.scrollTop  || docEl.scrollTop  || 0);

				break;
			}

			el = el.offsetParent;

		} while (el);

		el = element;

		do {
			if (el === docBody) { break; }

			top  -= el.scrollTop  || 0;
			left -= el.scrollLeft || 0;

			el = el.parentNode;
		} while (el);

		return new L.Point(left, top);
	},

	documentIsLtr: function () {
		if (!L.DomUtil._docIsLtrCached) {
			L.DomUtil._docIsLtrCached = true;
			L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
		}
		return L.DomUtil._docIsLtr;
	},

	create: function (tagName, className, container) {

		var el = document.createElement(tagName);
		el.className = className;

		if (container) {
			container.appendChild(el);
		}

		return el;
	},

	hasClass: function (el, name) {
		if (el.classList !== undefined) {
			return el.classList.contains(name);
		}
		var className = L.DomUtil._getClass(el);
		return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
	},

	addClass: function (el, name) {
		if (el.classList !== undefined) {
			var classes = L.Util.splitWords(name);
			for (var i = 0, len = classes.length; i < len; i++) {
				el.classList.add(classes[i]);
			}
		} else if (!L.DomUtil.hasClass(el, name)) {
			var className = L.DomUtil._getClass(el);
			L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
		}
	},

	removeClass: function (el, name) {
		if (el.classList !== undefined) {
			el.classList.remove(name);
		} else {
			L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
		}
	},

	_setClass: function (el, name) {
		if (el.className.baseVal === undefined) {
			el.className = name;
		} else {
			// in case of SVG element
			el.className.baseVal = name;
		}
	},

	_getClass: function (el) {
		return el.className.baseVal === undefined ? el.className : el.className.baseVal;
	},

	setOpacity: function (el, value) {

		if ('opacity' in el.style) {
			el.style.opacity = value;

		} else if ('filter' in el.style) {

			var filter = false,
			    filterName = 'DXImageTransform.Microsoft.Alpha';

			// filters collection throws an error if we try to retrieve a filter that doesn't exist
			try {
				filter = el.filters.item(filterName);
			} catch (e) {
				// don't set opacity to 1 if we haven't already set an opacity,
				// it isn't needed and breaks transparent pngs.
				if (value === 1) { return; }
			}

			value = Math.round(value * 100);

			if (filter) {
				filter.Enabled = (value !== 100);
				filter.Opacity = value;
			} else {
				el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
			}
		}
	},

	testProp: function (props) {

		var style = document.documentElement.style;

		for (var i = 0; i < props.length; i++) {
			if (props[i] in style) {
				return props[i];
			}
		}
		return false;
	},

	getTranslateString: function (point) {
		// on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
		// makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
		// (same speed either way), Opera 12 doesn't support translate3d

		var is3d = L.Browser.webkit3d,
		    open = 'translate' + (is3d ? '3d' : '') + '(',
		    close = (is3d ? ',0' : '') + ')';

		return open + point.x + 'px,' + point.y + 'px' + close;
	},

	getScaleString: function (scale, origin) {

		var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
		    scaleStr = ' scale(' + scale + ') ';

		return preTranslateStr + scaleStr;
	},

	setPosition: function (el, point, disable3D) { // (HTMLElement, Point[, Boolean])

		// jshint camelcase: false
		el._leaflet_pos = point;

		if (!disable3D && L.Browser.any3d) {
			el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
		} else {
			el.style.left = point.x + 'px';
			el.style.top = point.y + 'px';
		}
	},

	getPosition: function (el) {
		// this method is only used for elements previously positioned using setPosition,
		// so it's safe to cache the position for performance

		// jshint camelcase: false
		return el._leaflet_pos;
	}
};


// prefix style property names

L.DomUtil.TRANSFORM = L.DomUtil.testProp(
        ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

L.DomUtil.TRANSITION = L.DomUtil.testProp(
        ['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

L.DomUtil.TRANSITION_END =
        L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ?
        L.DomUtil.TRANSITION + 'End' : 'transitionend';

(function () {
    if ('onselectstart' in document) {
        L.extend(L.DomUtil, {
            disableTextSelection: function () {
                L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
            },

            enableTextSelection: function () {
                L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
            }
        });
    } else {
        var userSelectProperty = L.DomUtil.testProp(
            ['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

        L.extend(L.DomUtil, {
            disableTextSelection: function () {
                if (userSelectProperty) {
                    var style = document.documentElement.style;
                    this._userSelect = style[userSelectProperty];
                    style[userSelectProperty] = 'none';
                }
            },

            enableTextSelection: function () {
                if (userSelectProperty) {
                    document.documentElement.style[userSelectProperty] = this._userSelect;
                    delete this._userSelect;
                }
            }
        });
    }

	L.extend(L.DomUtil, {
		disableImageDrag: function () {
			L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
		},

		enableImageDrag: function () {
			L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
		}
	});
})();


/*
 * L.LatLng represents a geographical point with latitude and longitude coordinates.
 */

L.LatLng = function (lat, lng, alt) { // (Number, Number, Number)
	lat = parseFloat(lat);
	lng = parseFloat(lng);

	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	this.lat = lat;
	this.lng = lng;

	if (alt !== undefined) {
		this.alt = parseFloat(alt);
	}
};

L.extend(L.LatLng, {
	DEG_TO_RAD: Math.PI / 180,
	RAD_TO_DEG: 180 / Math.PI,
	MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
});

L.LatLng.prototype = {
	equals: function (obj) { // (LatLng) -> Boolean
		if (!obj) { return false; }

		obj = L.latLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= L.LatLng.MAX_MARGIN;
	},

	toString: function (precision) { // (Number) -> String
		return 'LatLng(' +
		        L.Util.formatNum(this.lat, precision) + ', ' +
		        L.Util.formatNum(this.lng, precision) + ')';
	},

	// Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
	// TODO move to projection code, LatLng shouldn't know about Earth
	distanceTo: function (other) { // (LatLng) -> Number
		other = L.latLng(other);

		var R = 6378137, // earth radius in meters
		    d2r = L.LatLng.DEG_TO_RAD,
		    dLat = (other.lat - this.lat) * d2r,
		    dLon = (other.lng - this.lng) * d2r,
		    lat1 = this.lat * d2r,
		    lat2 = other.lat * d2r,
		    sin1 = Math.sin(dLat / 2),
		    sin2 = Math.sin(dLon / 2);

		var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);

		return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	},

	wrap: function (a, b) { // (Number, Number) -> LatLng
		var lng = this.lng;

		a = a || -180;
		b = b ||  180;

		lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);

		return new L.LatLng(this.lat, lng);
	}
};

L.latLng = function (a, b) { // (LatLng) or ([Number, Number]) or (Number, Number)
	if (a instanceof L.LatLng) {
		return a;
	}
	if (L.Util.isArray(a)) {
		if (typeof a[0] === 'number' || typeof a[0] === 'string') {
			return new L.LatLng(a[0], a[1], a[2]);
		} else {
			return null;
		}
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
	}
	if (b === undefined) {
		return null;
	}
	return new L.LatLng(a, b);
};



/*
 * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
 */

L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
	if (!southWest) { return; }

	var latlngs = northEast ? [southWest, northEast] : southWest;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
};

L.LatLngBounds.prototype = {
	// extend the bounds to contain the given point or bounds
	extend: function (obj) { // (LatLng) or (LatLngBounds)
		if (!obj) { return this; }

		var latLng = L.latLng(obj);
		if (latLng !== null) {
			obj = latLng;
		} else {
			obj = L.latLngBounds(obj);
		}

		if (obj instanceof L.LatLng) {
			if (!this._southWest && !this._northEast) {
				this._southWest = new L.LatLng(obj.lat, obj.lng);
				this._northEast = new L.LatLng(obj.lat, obj.lng);
			} else {
				this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
				this._southWest.lng = Math.min(obj.lng, this._southWest.lng);

				this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
				this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
			}
		} else if (obj instanceof L.LatLngBounds) {
			this.extend(obj._southWest);
			this.extend(obj._northEast);
		}
		return this;
	},

	// extend the bounds by a percentage
	pad: function (bufferRatio) { // (Number) -> LatLngBounds
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new L.LatLngBounds(
		        new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	getCenter: function () { // -> LatLng
		return new L.LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	getSouthWest: function () {
		return this._southWest;
	},

	getNorthEast: function () {
		return this._northEast;
	},

	getNorthWest: function () {
		return new L.LatLng(this.getNorth(), this.getWest());
	},

	getSouthEast: function () {
		return new L.LatLng(this.getSouth(), this.getEast());
	},

	getWest: function () {
		return this._southWest.lng;
	},

	getSouth: function () {
		return this._southWest.lat;
	},

	getEast: function () {
		return this._northEast.lng;
	},

	getNorth: function () {
		return this._northEast.lat;
	},

	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
			obj = L.latLng(obj);
		} else {
			obj = L.latLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof L.LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	intersects: function (bounds) { // (LatLngBounds)
		bounds = L.latLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	equals: function (bounds) { // (LatLngBounds)
		if (!bounds) { return false; }

		bounds = L.latLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest()) &&
		       this._northEast.equals(bounds.getNorthEast());
	},

	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

//TODO International date line?

L.latLngBounds = function (a, b) { // (LatLngBounds) or (LatLng, LatLng)
	if (!a || a instanceof L.LatLngBounds) {
		return a;
	}
	return new L.LatLngBounds(a, b);
};


/*
 * L.Projection contains various geographical projections used by CRS classes.
 */

L.Projection = {};


/*
 * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
 */

L.Projection.SphericalMercator = {
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng) { // (LatLng) -> Point
		var d = L.LatLng.DEG_TO_RAD,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    x = latlng.lng * d,
		    y = lat * d;

		y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

		return new L.Point(x, y);
	},

	unproject: function (point) { // (Point, Boolean) -> LatLng
		var d = L.LatLng.RAD_TO_DEG,
		    lng = point.x * d,
		    lat = (2 * Math.atan(Math.exp(point.y)) - (Math.PI / 2)) * d;

		return new L.LatLng(lat, lng);
	}
};


/*
 * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
 */

L.Projection.LonLat = {
	project: function (latlng) {
		return new L.Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new L.LatLng(point.y, point.x);
	}
};


/*
 * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
 */

L.CRS = {
	latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	project: function (latlng) {
		return this.projection.project(latlng);
	},

	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	getSize: function (zoom) {
		var s = this.scale(zoom);
		return L.point(s, s);
	}
};


/*
 * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
 */

L.CRS.Simple = L.extend({}, L.CRS, {
	projection: L.Projection.LonLat,
	transformation: new L.Transformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(2, zoom);
	}
});


/*
 * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
 * and is used by Leaflet by default.
 */

L.CRS.EPSG3857 = L.extend({}, L.CRS, {
	code: 'EPSG:3857',

	projection: L.Projection.SphericalMercator,
	transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),

	project: function (latlng) { // (LatLng) -> Point
		var projectedPoint = this.projection.project(latlng),
		    earthRadius = 6378137;
		return projectedPoint.multiplyBy(earthRadius);
	}
});

L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
	code: 'EPSG:900913'
});


/*
 * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
 */

L.CRS.EPSG4326 = L.extend({}, L.CRS, {
	code: 'EPSG:4326',

	projection: L.Projection.LonLat,
	transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
});


/*
 * L.Map is the central class of the API - it is used to create a map.
 */

L.Map = L.Class.extend({

	includes: L.Mixin.Events,

	options: {
		crs: L.CRS.EPSG3857,

		/*
		center: LatLng,
		zoom: Number,
		layers: Array,
		*/

		fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
		trackResize: true,
		markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
	},

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = L.setOptions(this, options);


		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = L.bind(this._onResize, this);

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(L.latLng(options.center), options.zoom, {reset: true});
		}

		this._handlers = [];

		this._layers = {};
		this._zoomBoundLayers = {};
		this._tileLayersNum = 0;

		this.callInitHooks();

		this._addLayers(options.layers);
	},


	// public methods that modify map state

	// replaced by animation-powered implementation in Map.PanAnimation.js
	setView: function (center, zoom) {
		zoom = zoom === undefined ? this.getZoom() : zoom;
		this._resetView(L.latLng(center), this._limitZoom(zoom));
		return this;
	},

	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = this._limitZoom(zoom);
			return this;
		}
		return this.setView(this.getCenter(), zoom, {zoom: options});
	},

	zoomIn: function (delta, options) {
		return this.setZoom(this._zoom + (delta || 1), options);
	},

	zoomOut: function (delta, options) {
		return this.setZoom(this._zoom - (delta || 1), options);
	},

	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	fitBounds: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

		var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = (options.maxZoom) ? Math.min(options.maxZoom, zoom) : zoom;

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return this.setView(center, zoom, options);
	},

	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	panBy: function (offset) { // (Point)
		// replaced with animated panBy in Map.PanAnimation.js
		this.fire('movestart');

		this._rawPanBy(L.point(offset));

		this.fire('move');
		return this.fire('moveend');
	},

	setMaxBounds: function (bounds) {
		bounds = L.latLngBounds(bounds);

		this.options.maxBounds = bounds;

		if (!bounds) {
			return this.off('moveend', this._panInsideMaxBounds, this);
		}

		if (this._loaded) {
			this._panInsideMaxBounds();
		}

		return this.on('moveend', this._panInsideMaxBounds, this);
	},

	panInsideBounds: function (bounds, options) {
		var center = this.getCenter(),
			newCenter = this._limitCenter(center, this._zoom, bounds);

		if (center.equals(newCenter)) { return this; }

		return this.panTo(newCenter, options);
	},

	addLayer: function (layer) {
		// TODO method is too big, refactor

		var id = L.stamp(layer);

		if (this._layers[id]) { return this; }

		this._layers[id] = layer;

		// TODO getMaxZoom, getMinZoom in ILayer (instead of options)
		if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
			this._zoomBoundLayers[id] = layer;
			this._updateZoomLevels();
		}

		// TODO looks ugly, refactor!!!
		if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
			this._tileLayersNum++;
			this._tileLayersToLoad++;
			layer.on('load', this._onTileLayerLoad, this);
		}

		if (this._loaded) {
			this._layerAdd(layer);
		}

		return this;
	},

	removeLayer: function (layer) {
		var id = L.stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
		}

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}

		// TODO looks ugly, refactor
		if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
			this._tileLayersNum--;
			this._tileLayersToLoad--;
			layer.off('load', this._onTileLayerLoad, this);
		}

		return this;
	},

	hasLayer: function (layer) {
		if (!layer) { return false; }

		return (L.stamp(layer) in this._layers);
	},

	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = L.extend({
			animate: false,
			pan: true
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;
		this._initialCenter = null;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	// TODO handler.addTo
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		return this;
	},

	remove: function () {
		if (this._loaded) {
			this.fire('unload');
		}

		this._initEvents('off');

		try {
			// throws error in IE6-8
			delete this._container._leaflet;
		} catch (e) {
			this._container._leaflet = undefined;
		}

		this._clearPanes();
		if (this._clearControlPos) {
			this._clearControlPos();
		}

		this._clearHandlers();

		return this;
	},


	// public methods for getting map state

	getCenter: function () { // (Boolean) -> LatLng
		this._checkIfLoaded();

		if (this._initialCenter && !this._moved()) {
			return this._initialCenter;
		}
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	getZoom: function () {
		return this._zoom;
	},

	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new L.LatLngBounds(sw, ne);
	},

	getMinZoom: function () {
		return this.options.minZoom === undefined ?
			(this._layersMinZoom === undefined ? 0 : this._layersMinZoom) :
			this.options.minZoom;
	},

	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = L.latLngBounds(bounds);

		var zoom = this.getMinZoom() - (inside ? 1 : 0),
		    maxZoom = this.getMaxZoom(),
		    size = this.getSize(),

		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),

		    zoomNotFound = true,
		    boundsSize;

		padding = L.point(padding || [0, 0]);

		do {
			zoom++;
			boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
			zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;

		} while (zoomNotFound && zoom <= maxZoom);

		if (zoomNotFound && inside) {
			return null;
		}

		return inside ? zoom : zoom - 1;
	},

	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new L.Point(
				this._container.clientWidth,
				this._container.clientHeight);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	getPixelBounds: function () {
		var topLeftPoint = this._getTopLeftPoint();
		return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._initialTopLeftPoint;
	},

	getPanes: function () {
		return this._panes;
	},

	getContainer: function () {
		return this._container;
	},


	// TODO replace with universal implementation after refactoring projections

	getZoomScale: function (toZoom) {
		var crs = this.options.crs;
		return crs.scale(toZoom) / crs.scale(this._zoom);
	},

	getScaleZoom: function (scale) {
		return this._zoom + (Math.log(scale) / Math.LN2);
	},


	// conversion methods

	project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
	},

	unproject: function (point, zoom) { // (Point[, Number]) -> LatLng
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(L.point(point), zoom);
	},

	layerPointToLatLng: function (point) { // (Point)
		var projectedPoint = L.point(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	latLngToLayerPoint: function (latlng) { // (LatLng)
		var projectedPoint = this.project(L.latLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	containerPointToLayerPoint: function (point) { // (Point)
		return L.point(point).subtract(this._getMapPanePos());
	},

	layerPointToContainerPoint: function (point) { // (Point)
		return L.point(point).add(this._getMapPanePos());
	},

	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(L.point(point));
		return this.layerPointToLatLng(layerPoint);
	},

	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
	},

	mouseEventToContainerPoint: function (e) { // (MouseEvent)
		return L.DomEvent.getMousePosition(e, this._container);
	},

	mouseEventToLayerPoint: function (e) { // (MouseEvent)
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},


	// map initialization methods

	_initContainer: function (id) {
		var container = this._container = L.DomUtil.get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet) {
			throw new Error('Map container is already initialized.');
		}

		container._leaflet = true;
	},

	_initLayout: function () {
		var container = this._container;

		L.DomUtil.addClass(container, 'leaflet-container' +
			(L.Browser.touch ? ' leaflet-touch' : '') +
			(L.Browser.retina ? ' leaflet-retina' : '') +
			(L.Browser.ielt9 ? ' leaflet-oldie' : '') +
			(this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));

		var position = L.DomUtil.getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'relative';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};

		this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);

		this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
		panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
		panes.shadowPane = this._createPane('leaflet-shadow-pane');
		panes.overlayPane = this._createPane('leaflet-overlay-pane');
		panes.markerPane = this._createPane('leaflet-marker-pane');
		panes.popupPane = this._createPane('leaflet-popup-pane');

		var zoomHide = ' leaflet-zoom-hide';

		if (!this.options.markerZoomAnimation) {
			L.DomUtil.addClass(panes.markerPane, zoomHide);
			L.DomUtil.addClass(panes.shadowPane, zoomHide);
			L.DomUtil.addClass(panes.popupPane, zoomHide);
		}
	},

	_createPane: function (className, container) {
		return L.DomUtil.create('div', className, container || this._panes.objectsPane);
	},

	_clearPanes: function () {
		this._container.removeChild(this._mapPane);
	},

	_addLayers: function (layers) {
		layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},


	// private methods that modify map state

	_resetView: function (center, zoom, preserveMapOffset, afterZoomAnim) {

		var zoomChanged = (this._zoom !== zoom);

		if (!afterZoomAnim) {
			this.fire('movestart');

			if (zoomChanged) {
				this.fire('zoomstart');
			}
		}

		this._zoom = zoom;
		this._initialCenter = center;

		this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

		if (!preserveMapOffset) {
			L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
		} else {
			this._initialTopLeftPoint._add(this._getMapPanePos());
		}

		this._tileLayersToLoad = this._tileLayersNum;

		var loading = !this._loaded;
		this._loaded = true;

		this.fire('viewreset', {hard: !preserveMapOffset});

		if (loading) {
			this.fire('load');
			this.eachLayer(this._layerAdd, this);
		}

		this.fire('move');

		if (zoomChanged || afterZoomAnim) {
			this.fire('zoomend');
		}

		this.fire('moveend', {hard: !preserveMapOffset});
	},

	_rawPanBy: function (offset) {
		L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_updateZoomLevels: function () {
		var i,
			minZoom = Infinity,
			maxZoom = -Infinity,
			oldZoomSpan = this._getZoomSpan();

		for (i in this._zoomBoundLayers) {
			var layer = this._zoomBoundLayers[i];
			if (!isNaN(layer.options.minZoom)) {
				minZoom = Math.min(minZoom, layer.options.minZoom);
			}
			if (!isNaN(layer.options.maxZoom)) {
				maxZoom = Math.max(maxZoom, layer.options.maxZoom);
			}
		}

		if (i === undefined) { // we have no tilelayers
			this._layersMaxZoom = this._layersMinZoom = undefined;
		} else {
			this._layersMaxZoom = maxZoom;
			this._layersMinZoom = minZoom;
		}

		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}
	},

	_panInsideMaxBounds: function () {
		this.panInsideBounds(this.options.maxBounds);
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// map events

	_initEvents: function (onOff) {
		if (!L.DomEvent) { return; }

		onOff = onOff || 'on';

		L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);

		var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter',
		              'mouseleave', 'mousemove', 'contextmenu'],
		    i, len;

		for (i = 0, len = events.length; i < len; i++) {
			L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
		}

		if (this.options.trackResize) {
			L.DomEvent[onOff](window, 'resize', this._onResize, this);
		}
	},

	_onResize: function () {
		L.Util.cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = L.Util.requestAnimFrame(
		        function () { this.invalidateSize({debounceMoveend: true}); }, this, false, this._container);
	},

	_onMouseClick: function (e) {
		if (!this._loaded || (!e._simulated &&
		        ((this.dragging && this.dragging.moved()) ||
		         (this.boxZoom  && this.boxZoom.moved()))) ||
		            L.DomEvent._skipped(e)) { return; }

		this.fire('preclick');
		this._fireMouseEvent(e);
	},

	_fireMouseEvent: function (e) {
		if (!this._loaded || L.DomEvent._skipped(e)) { return; }

		var type = e.type;

		type = (type === 'mouseenter' ? 'mouseover' : (type === 'mouseleave' ? 'mouseout' : type));

		if (!this.hasEventListeners(type)) { return; }

		if (type === 'contextmenu') {
			L.DomEvent.preventDefault(e);
		}

		var containerPoint = this.mouseEventToContainerPoint(e),
		    layerPoint = this.containerPointToLayerPoint(containerPoint),
		    latlng = this.layerPointToLatLng(layerPoint);

		this.fire(type, {
			latlng: latlng,
			layerPoint: layerPoint,
			containerPoint: containerPoint,
			originalEvent: e
		});
	},

	_onTileLayerLoad: function () {
		this._tileLayersToLoad--;
		if (this._tileLayersNum && !this._tileLayersToLoad) {
			this.fire('tilelayersload');
		}
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, this);
		} else {
			this.on('load', callback, context);
		}
		return this;
	},

	_layerAdd: function (layer) {
		layer.onAdd(this);
		this.fire('layeradd', {layer: layer});
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return L.DomUtil.getPosition(this._mapPane);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function () {
		return this.getPixelOrigin().subtract(this._getMapPanePos());
	},

	_getNewTopLeftPoint: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		// TODO round on display, not calculation to increase precision?
		return this.project(center, zoom)._subtract(viewHalf)._round();
	},

	_latLngToNewLayerPoint: function (latlng, newZoom, newCenter) {
		var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());
		return this.project(latlng, newZoom)._subtract(topLeft);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
		    seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),

		    dx = this._rebound(nwOffset.x, -seOffset.x),
		    dy = this._rebound(nwOffset.y, -seOffset.y);

		return new L.Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom();

		return Math.max(min, Math.min(max, zoom));
	}
});

L.map = function (id, options) {
	return new L.Map(id, options);
};


/*
 * Mercator projection that takes into account that the Earth is not a perfect sphere.
 * Less popular than spherical mercator; used by projections like EPSG:3395.
 */

L.Projection.Mercator = {
	MAX_LATITUDE: 85.0840591556,

	R_MINOR: 6356752.314245179,
	R_MAJOR: 6378137,

	project: function (latlng) { // (LatLng) -> Point
		var d = L.LatLng.DEG_TO_RAD,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    r = this.R_MAJOR,
		    r2 = this.R_MINOR,
		    x = latlng.lng * d * r,
		    y = lat * d,
		    tmp = r2 / r,
		    eccent = Math.sqrt(1.0 - tmp * tmp),
		    con = eccent * Math.sin(y);

		con = Math.pow((1 - con) / (1 + con), eccent * 0.5);

		var ts = Math.tan(0.5 * ((Math.PI * 0.5) - y)) / con;
		y = -r * Math.log(ts);

		return new L.Point(x, y);
	},

	unproject: function (point) { // (Point, Boolean) -> LatLng
		var d = L.LatLng.RAD_TO_DEG,
		    r = this.R_MAJOR,
		    r2 = this.R_MINOR,
		    lng = point.x * d / r,
		    tmp = r2 / r,
		    eccent = Math.sqrt(1 - (tmp * tmp)),
		    ts = Math.exp(- point.y / r),
		    phi = (Math.PI / 2) - 2 * Math.atan(ts),
		    numIter = 15,
		    tol = 1e-7,
		    i = numIter,
		    dphi = 0.1,
		    con;

		while ((Math.abs(dphi) > tol) && (--i > 0)) {
			con = eccent * Math.sin(phi);
			dphi = (Math.PI / 2) - 2 * Math.atan(ts *
			            Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
			phi += dphi;
		}

		return new L.LatLng(phi * d, lng);
	}
};



L.CRS.EPSG3395 = L.extend({}, L.CRS, {
	code: 'EPSG:3395',

	projection: L.Projection.Mercator,

	transformation: (function () {
		var m = L.Projection.Mercator,
		    r = m.R_MAJOR,
		    scale = 0.5 / (Math.PI * r);

		return new L.Transformation(scale, 0.5, -scale, 0.5);
	}())
});


/*
 * L.TileLayer is used for standard xyz-numbered tile layers.
 */

L.TileLayer = L.Class.extend({
	includes: L.Mixin.Events,

	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		subdomains: 'abc',
		errorTileUrl: '',
		attribution: '',
		zoomOffset: 0,
		opacity: 1,
		/*
		maxNativeZoom: null,
		zIndex: null,
		tms: false,
		continuousWorld: false,
		noWrap: false,
		zoomReverse: false,
		detectRetina: false,
		reuseTiles: false,
		bounds: false,
		*/
		unloadInvisibleTiles: L.Browser.mobile,
		updateWhenIdle: L.Browser.mobile
	},

	initialize: function (url, options) {
		options = L.setOptions(this, options);

		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);
			options.zoomOffset++;

			if (options.minZoom > 0) {
				options.minZoom--;
			}
			this.options.maxZoom--;
		}

		if (options.bounds) {
			options.bounds = L.latLngBounds(options.bounds);
		}

		this._url = url;

		var subdomains = this.options.subdomains;

		if (typeof subdomains === 'string') {
			this.options.subdomains = subdomains.split('');
		}
	},

	onAdd: function (map) {
		this._map = map;
		this._animated = map._zoomAnimated;

		// create a container div for tiles
		this._initContainer();

		// set up events
		map.on({
			'viewreset': this._reset,
			'moveend': this._update
		}, this);

		if (this._animated) {
			map.on({
				'zoomanim': this._animateZoom,
				'zoomend': this._endZoomAnim
			}, this);
		}

		if (!this.options.updateWhenIdle) {
			this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
			map.on('move', this._limitedUpdate, this);
		}

		this._reset();
		this._update();
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	onRemove: function (map) {
		this._container.parentNode.removeChild(this._container);

		map.off({
			'viewreset': this._reset,
			'moveend': this._update
		}, this);

		if (this._animated) {
			map.off({
				'zoomanim': this._animateZoom,
				'zoomend': this._endZoomAnim
			}, this);
		}

		if (!this.options.updateWhenIdle) {
			map.off('move', this._limitedUpdate, this);
		}

		this._container = null;
		this._map = null;
	},

	bringToFront: function () {
		var pane = this._map._panes.tilePane;

		if (this._container) {
			pane.appendChild(this._container);
			this._setAutoZIndex(pane, Math.max);
		}

		return this;
	},

	bringToBack: function () {
		var pane = this._map._panes.tilePane;

		if (this._container) {
			pane.insertBefore(this._container, pane.firstChild);
			this._setAutoZIndex(pane, Math.min);
		}

		return this;
	},

	getAttribution: function () {
		return this.options.attribution;
	},

	getContainer: function () {
		return this._container;
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	setUrl: function (url, noRedraw) {
		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	},

	redraw: function () {
		if (this._map) {
			this._reset({hard: true});
			this._update();
		}
		return this;
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (pane, compare) {

		var layers = pane.children,
		    edgeZIndex = -compare(Infinity, -Infinity), // -Infinity for max, Infinity for min
		    zIndex, i, len;

		for (i = 0, len = layers.length; i < len; i++) {

			if (layers[i] !== this._container) {
				zIndex = parseInt(layers[i].style.zIndex, 10);

				if (!isNaN(zIndex)) {
					edgeZIndex = compare(edgeZIndex, zIndex);
				}
			}
		}

		this.options.zIndex = this._container.style.zIndex =
		        (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
	},

	_updateOpacity: function () {
		var i,
		    tiles = this._tiles;

		if (L.Browser.ielt9) {
			for (i in tiles) {
				L.DomUtil.setOpacity(tiles[i], this.options.opacity);
			}
		} else {
			L.DomUtil.setOpacity(this._container, this.options.opacity);
		}
	},

	_initContainer: function () {
		var tilePane = this._map._panes.tilePane;

		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-layer');

			this._updateZIndex();

			if (this._animated) {
				var className = 'leaflet-tile-container';

				this._bgBuffer = L.DomUtil.create('div', className, this._container);
				this._tileContainer = L.DomUtil.create('div', className, this._container);

			} else {
				this._tileContainer = this._container;
			}

			tilePane.appendChild(this._container);

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}
	},

	_reset: function (e) {
		for (var key in this._tiles) {
			this.fire('tileunload', {tile: this._tiles[key]});
		}

		this._tiles = {};
		this._tilesToLoad = 0;

		if (this.options.reuseTiles) {
			this._unusedTiles = [];
		}

		this._tileContainer.innerHTML = '';

		if (this._animated && e && e.hard) {
			this._clearBgBuffer();
		}

		this._initContainer();
	},

	_getTileSize: function () {
		var map = this._map,
		    zoom = map.getZoom() + this.options.zoomOffset,
		    zoomN = this.options.maxNativeZoom,
		    tileSize = this.options.tileSize;

		if (zoomN && zoom > zoomN) {
			tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
		}

		return tileSize;
	},

	_update: function () {

		if (!this._map) { return; }

		var map = this._map,
		    bounds = map.getPixelBounds(),
		    zoom = map.getZoom(),
		    tileSize = this._getTileSize();

		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			return;
		}

		var tileBounds = L.bounds(
		        bounds.min.divideBy(tileSize)._floor(),
		        bounds.max.divideBy(tileSize)._floor());

		this._addTilesFromCenterOut(tileBounds);

		if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
			this._removeOtherTiles(tileBounds);
		}
	},

	_addTilesFromCenterOut: function (bounds) {
		var queue = [],
		    center = bounds.getCenter();

		var j, i, point;

		for (j = bounds.min.y; j <= bounds.max.y; j++) {
			for (i = bounds.min.x; i <= bounds.max.x; i++) {
				point = new L.Point(i, j);

				if (this._tileShouldBeLoaded(point)) {
					queue.push(point);
				}
			}
		}

		var tilesToLoad = queue.length;

		if (tilesToLoad === 0) { return; }

		// load tiles in order of their distance to center
		queue.sort(function (a, b) {
			return a.distanceTo(center) - b.distanceTo(center);
		});

		var fragment = document.createDocumentFragment();

		// if its the first batch of tiles to load
		if (!this._tilesToLoad) {
			this.fire('loading');
		}

		this._tilesToLoad += tilesToLoad;

		for (i = 0; i < tilesToLoad; i++) {
			this._addTile(queue[i], fragment);
		}

		this._tileContainer.appendChild(fragment);
	},

	_tileShouldBeLoaded: function (tilePoint) {
		if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
			return false; // already loaded
		}

		var options = this.options;

		if (!options.continuousWorld) {
			var limit = this._getWrapTileNum();

			// don't load if exceeds world bounds
			if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
				tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
		}

		if (options.bounds) {
			var tileSize = this._getTileSize(),
			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),
			    nw = this._map.unproject(nwPoint),
			    se = this._map.unproject(sePoint);

			// TODO temporary hack, will be removed after refactoring projections
			// https://github.com/Leaflet/Leaflet/issues/1618
			if (!options.continuousWorld && !options.noWrap) {
				nw = nw.wrap();
				se = se.wrap();
			}

			if (!options.bounds.intersects([nw, se])) { return false; }
		}

		return true;
	},

	_removeOtherTiles: function (bounds) {
		var kArr, x, y, key;

		for (key in this._tiles) {
			kArr = key.split(':');
			x = parseInt(kArr[0], 10);
			y = parseInt(kArr[1], 10);

			// remove tile if it's out of bounds
			if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
				this._removeTile(key);
			}
		}
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];

		this.fire('tileunload', {tile: tile, url: tile.src});

		if (this.options.reuseTiles) {
			L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
			this._unusedTiles.push(tile);

		} else if (tile.parentNode === this._tileContainer) {
			this._tileContainer.removeChild(tile);
		}

		// for https://github.com/CloudMade/Leaflet/issues/137
		if (!L.Browser.android) {
			tile.onload = null;
			tile.src = L.Util.emptyImageUrl;
		}

		delete this._tiles[key];
	},

	_addTile: function (tilePoint, container) {
		var tilePos = this._getTilePos(tilePoint);

		// get unused tile - or create a new tile
		var tile = this._getTile();

		/*
		Chrome 20 layouts much faster with top/left (verify with timeline, frames)
		Android 4 browser has display issues with top/left and requires transform instead
		(other browsers don't currently care) - see debug/hacks/jitter.html for an example
		*/
		L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

		this._loadTile(tile, tilePoint);

		if (tile.parentNode !== this._tileContainer) {
			container.appendChild(tile);
		}
	},

	_getZoomForUrl: function () {

		var options = this.options,
		    zoom = this._map.getZoom();

		if (options.zoomReverse) {
			zoom = options.maxZoom - zoom;
		}

		zoom += options.zoomOffset;

		return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
	},

	_getTilePos: function (tilePoint) {
		var origin = this._map.getPixelOrigin(),
		    tileSize = this._getTileSize();

		return tilePoint.multiplyBy(tileSize).subtract(origin);
	},

	// image-specific code (override to implement e.g. Canvas or SVG tile layer)

	getTileUrl: function (tilePoint) {
		return L.Util.template(this._url, L.extend({
			s: this._getSubdomain(tilePoint),
			z: tilePoint.z,
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	},

	_getWrapTileNum: function () {
		var crs = this._map.options.crs,
		    size = crs.getSize(this._map.getZoom());
		return size.divideBy(this._getTileSize())._floor();
	},

	_adjustTilePoint: function (tilePoint) {

		var limit = this._getWrapTileNum();

		// wrap tile coordinates
		if (!this.options.continuousWorld && !this.options.noWrap) {
			tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
		}

		if (this.options.tms) {
			tilePoint.y = limit.y - tilePoint.y - 1;
		}

		tilePoint.z = this._getZoomForUrl();
	},

	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},

	_getTile: function () {
		if (this.options.reuseTiles && this._unusedTiles.length > 0) {
			var tile = this._unusedTiles.pop();
			this._resetTile(tile);
			return tile;
		}
		return this._createTile();
	},

	// Override if data stored on a tile needs to be cleaned up before reuse
	_resetTile: function (/*tile*/) {},

	_createTile: function () {
		var tile = L.DomUtil.create('img', 'leaflet-tile');
		tile.style.width = tile.style.height = this._getTileSize() + 'px';
		tile.galleryimg = 'no';

		tile.onselectstart = tile.onmousemove = L.Util.falseFn;

		if (L.Browser.ielt9 && this.options.opacity !== undefined) {
			L.DomUtil.setOpacity(tile, this.options.opacity);
		}
		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (L.Browser.mobileWebkit3d) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
		return tile;
	},

	_loadTile: function (tile, tilePoint) {
		tile._layer  = this;
		tile.onload  = this._tileOnLoad;
		tile.onerror = this._tileOnError;

		this._adjustTilePoint(tilePoint);
		tile.src     = this.getTileUrl(tilePoint);

		this.fire('tileloadstart', {
			tile: tile,
			url: tile.src
		});
	},

	_tileLoaded: function () {
		this._tilesToLoad--;

		if (this._animated) {
			L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
		}

		if (!this._tilesToLoad) {
			this.fire('load');

			if (this._animated) {
				// clear scaled tiles after all new tiles are loaded (for performance)
				clearTimeout(this._clearBgBufferTimer);
				this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
			}
		}
	},

	_tileOnLoad: function () {
		var layer = this._layer;

		//Only if we are loading an actual image
		if (this.src !== L.Util.emptyImageUrl) {
			L.DomUtil.addClass(this, 'leaflet-tile-loaded');

			layer.fire('tileload', {
				tile: this,
				url: this.src
			});
		}

		layer._tileLoaded();
	},

	_tileOnError: function () {
		var layer = this._layer;

		layer.fire('tileerror', {
			tile: this,
			url: this.src
		});

		var newUrl = layer.options.errorTileUrl;
		if (newUrl) {
			this.src = newUrl;
		}

		layer._tileLoaded();
	}
});

L.tileLayer = function (url, options) {
	return new L.TileLayer(url, options);
};


/*
 * L.TileLayer.WMS is used for putting WMS tile layers on the map.
 */

L.TileLayer.WMS = L.TileLayer.extend({

	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',
		version: '1.1.1',
		layers: '',
		styles: '',
		format: 'image/jpeg',
		transparent: false
	},

	initialize: function (url, options) { // (String, Object)

		this._url = url;

		var wmsParams = L.extend({}, this.defaultWmsParams),
		    tileSize = options.tileSize || this.options.tileSize;

		if (options.detectRetina && L.Browser.retina) {
			wmsParams.width = wmsParams.height = tileSize * 2;
		} else {
			wmsParams.width = wmsParams.height = tileSize;
		}

		for (var i in options) {
			// all keys that are not TileLayer options go to WMS params
			if (!this.options.hasOwnProperty(i) && i !== 'crs') {
				wmsParams[i] = options[i];
			}
		}

		this.wmsParams = wmsParams;

		L.setOptions(this, options);
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;

		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		L.TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (tilePoint) { // (Point, Number) -> String

		var map = this._map,
		    tileSize = this.options.tileSize,

		    nwPoint = tilePoint.multiplyBy(tileSize),
		    sePoint = nwPoint.add([tileSize, tileSize]),

		    nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
		    se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
		    bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
		        [se.y, nw.x, nw.y, se.x].join(',') :
		        [nw.x, se.y, se.x, nw.y].join(','),

		    url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});

		return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
	},

	setParams: function (params, noRedraw) {

		L.extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});

L.tileLayer.wms = function (url, options) {
	return new L.TileLayer.WMS(url, options);
};


/*
 * L.TileLayer.Canvas is a class that you can use as a base for creating
 * dynamically drawn Canvas-based tile layers.
 */

L.TileLayer.Canvas = L.TileLayer.extend({
	options: {
		async: false
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	redraw: function () {
		if (this._map) {
			this._reset({hard: true});
			this._update();
		}

		for (var i in this._tiles) {
			this._redrawTile(this._tiles[i]);
		}
		return this;
	},

	_redrawTile: function (tile) {
		this.drawTile(tile, tile._tilePoint, this._map._zoom);
	},

	_createTile: function () {
		var tile = L.DomUtil.create('canvas', 'leaflet-tile');
		tile.width = tile.height = this.options.tileSize;
		tile.onselectstart = tile.onmousemove = L.Util.falseFn;
		return tile;
	},

	_loadTile: function (tile, tilePoint) {
		tile._layer = this;
		tile._tilePoint = tilePoint;

		this._redrawTile(tile);

		if (!this.options.async) {
			this.tileDrawn(tile);
		}
	},

	drawTile: function (/*tile, tilePoint*/) {
		// override with rendering code
	},

	tileDrawn: function (tile) {
		this._tileOnLoad.call(tile);
	}
});


L.tileLayer.canvas = function (options) {
	return new L.TileLayer.Canvas(options);
};


/*
 * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
 */

L.ImageOverlay = L.Class.extend({
	includes: L.Mixin.Events,

	options: {
		opacity: 1
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = L.latLngBounds(bounds);

		L.setOptions(this, options);
	},

	onAdd: function (map) {
		this._map = map;

		if (!this._image) {
			this._initImage();
		}

		map._panes.overlayPane.appendChild(this._image);

		map.on('viewreset', this._reset, this);

		if (map.options.zoomAnimation && L.Browser.any3d) {
			map.on('zoomanim', this._animateZoom, this);
		}

		this._reset();
	},

	onRemove: function (map) {
		map.getPanes().overlayPane.removeChild(this._image);

		map.off('viewreset', this._reset, this);

		if (map.options.zoomAnimation) {
			map.off('zoomanim', this._animateZoom, this);
		}
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		this._updateOpacity();
		return this;
	},

	// TODO remove bringToFront/bringToBack duplication from TileLayer/Path
	bringToFront: function () {
		if (this._image) {
			this._map._panes.overlayPane.appendChild(this._image);
		}
		return this;
	},

	bringToBack: function () {
		var pane = this._map._panes.overlayPane;
		if (this._image) {
			pane.insertBefore(this._image, pane.firstChild);
		}
		return this;
	},

	setUrl: function (url) {
		this._url = url;
		this._image.src = this._url;
	},

	getAttribution: function () {
		return this.options.attribution;
	},

	_initImage: function () {
		this._image = L.DomUtil.create('img', 'leaflet-image-layer');

		if (this._map.options.zoomAnimation && L.Browser.any3d) {
			L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
		} else {
			L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
		}

		this._updateOpacity();

		//TODO createImage util method to remove duplication
		L.extend(this._image, {
			galleryimg: 'no',
			onselectstart: L.Util.falseFn,
			onmousemove: L.Util.falseFn,
			onload: L.bind(this._onImageLoad, this),
			src: this._url
		});
	},

	_animateZoom: function (e) {
		var map = this._map,
		    image = this._image,
		    scale = map.getZoomScale(e.zoom),
		    nw = this._bounds.getNorthWest(),
		    se = this._bounds.getSouthEast(),

		    topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
		    size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
		    origin = topLeft._add(size._multiplyBy((1 / 2) * (1 - 1 / scale)));

		image.style[L.DomUtil.TRANSFORM] =
		        L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
	},

	_reset: function () {
		var image   = this._image,
		    topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		    size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);

		L.DomUtil.setPosition(image, topLeft);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_onImageLoad: function () {
		this.fire('load');
	},

	_updateOpacity: function () {
		L.DomUtil.setOpacity(this._image, this.options.opacity);
	}
});

L.imageOverlay = function (url, bounds, options) {
	return new L.ImageOverlay(url, bounds, options);
};


/*
 * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
 */

L.Icon = L.Class.extend({
	options: {
		/*
		iconUrl: (String) (required)
		iconRetinaUrl: (String) (optional, used for retina devices if detected)
		iconSize: (Point) (can be set through CSS)
		iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
		popupAnchor: (Point) (if not specified, popup opens in the anchor point)
		shadowUrl: (String) (no shadow by default)
		shadowRetinaUrl: (String) (optional, used for retina devices if detected)
		shadowSize: (Point)
		shadowAnchor: (Point)
		*/
		className: ''
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img;
		if (!oldIcon || oldIcon.tagName !== 'IMG') {
			img = this._createImg(src);
		} else {
			img = this._createImg(src, oldIcon);
		}
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options,
		    size = L.point(options[name + 'Size']),
		    anchor;

		if (name === 'shadow') {
			anchor = L.point(options.shadowAnchor || options.iconAnchor);
		} else {
			anchor = L.point(options.iconAnchor);
		}

		if (!anchor && size) {
			anchor = size.divideBy(2, true);
		}

		img.className = 'leaflet-marker-' + name + ' ' + options.className;

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
			return this.options[name + 'RetinaUrl'];
		}
		return this.options[name + 'Url'];
	}
});

L.icon = function (options) {
	return new L.Icon(options);
};


/*
 * L.Icon.Default is the blue marker icon used by default in Leaflet.
 */

L.Icon.Default = L.Icon.extend({

	options: {
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],

		shadowSize: [41, 41]
	},

	_getIconUrl: function (name) {
		var key = name + 'Url';

		if (this.options[key]) {
			return this.options[key];
		}

		if (L.Browser.retina && name === 'icon') {
			name += '-2x';
		}

		var path = L.Icon.Default.imagePath;

		if (!path) {
			throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
		}

		return path + '/marker-' + name + '.png';
	}
});

L.Icon.Default.imagePath = (function () {
	var scripts = document.getElementsByTagName('script'),
	    leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

	var i, len, src, matches, path;

	for (i = 0, len = scripts.length; i < len; i++) {
		src = scripts[i].src;
		matches = src.match(leafletRe);

		if (matches) {
			path = src.split(leafletRe)[0];
			return (path ? path + '/' : '') + 'images';
		}
	}
}());


/*
 * L.Marker is used to display clickable/draggable icons on the map.
 */

L.Marker = L.Class.extend({

	includes: L.Mixin.Events,

	options: {
		icon: new L.Icon.Default(),
		title: '',
		alt: '',
		clickable: true,
		draggable: false,
		keyboard: true,
		zIndexOffset: 0,
		opacity: 1,
		riseOnHover: false,
		riseOffset: 250
	},

	initialize: function (latlng, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
	},

	onAdd: function (map) {
		this._map = map;

		map.on('viewreset', this.update, this);

		this._initIcon();
		this.update();
		this.fire('add');

		if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
			map.on('zoomanim', this._animateZoom, this);
		}
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	onRemove: function (map) {
		if (this.dragging) {
			this.dragging.disable();
		}

		this._removeIcon();
		this._removeShadow();

		this.fire('remove');

		map.off({
			'viewreset': this.update,
			'zoomanim': this._animateZoom
		}, this);

		this._map = null;
	},

	getLatLng: function () {
		return this._latlng;
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);

		this.update();

		return this.fire('move', { latlng: this._latlng });
	},

	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		this.update();

		return this;
	},

	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup);
		}

		return this;
	},

	update: function () {
		if (this._icon) {
			this._setPos(this._map.latLngToLayerPoint(this._latlng).round());
		}
		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    map = this._map,
		    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
		    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

		var icon = options.icon.createIcon(this._icon),
			addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (options.alt) {
				icon.alt = options.alt;
			}
		}

		L.DomUtil.addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		this._initInteraction();

		if (options.riseOnHover) {
			L.DomEvent
				.on(icon, 'mouseover', this._bringToFront, this)
				.on(icon, 'mouseout', this._resetZIndex, this);
		}

		var newShadow = options.icon.createShadow(this._shadow),
			addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			L.DomUtil.addClass(newShadow, classToAdd);
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		var panes = this._map._panes;

		if (addIcon) {
			panes.markerPane.appendChild(this._icon);
		}

		if (newShadow && addShadow) {
			panes.shadowPane.appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			L.DomEvent
			    .off(this._icon, 'mouseover', this._bringToFront)
			    .off(this._icon, 'mouseout', this._resetZIndex);
		}

		this._map._panes.markerPane.removeChild(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			this._map._panes.shadowPane.removeChild(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {
		L.DomUtil.setPosition(this._icon, pos);

		if (this._shadow) {
			L.DomUtil.setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		this._icon.style.zIndex = this._zIndex + offset;
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.clickable) { return; }

		// TODO refactor into something shared with Map/Path/etc. to DRY it up

		var icon = this._icon,
		    events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

		L.DomUtil.addClass(icon, 'leaflet-clickable');
		L.DomEvent.on(icon, 'click', this._onMouseClick, this);
		L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

		for (var i = 0; i < events.length; i++) {
			L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
		}

		if (L.Handler.MarkerDrag) {
			this.dragging = new L.Handler.MarkerDrag(this);

			if (this.options.draggable) {
				this.dragging.enable();
			}
		}
	},

	_onMouseClick: function (e) {
		var wasDragged = this.dragging && this.dragging.moved();

		if (this.hasEventListeners(e.type) || wasDragged) {
			L.DomEvent.stopPropagation(e);
		}

		if (wasDragged) { return; }

		if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) { return; }

		this.fire(e.type, {
			originalEvent: e,
			latlng: this._latlng
		});
	},

	_onKeyPress: function (e) {
		if (e.keyCode === 13) {
			this.fire('click', {
				originalEvent: e,
				latlng: this._latlng
			});
		}
	},

	_fireMouseEvent: function (e) {

		this.fire(e.type, {
			originalEvent: e,
			latlng: this._latlng
		});

		// TODO proper custom event propagation
		// this line will always be called if marker is in a FeatureGroup
		if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
			L.DomEvent.preventDefault(e);
		}
		if (e.type !== 'mousedown') {
			L.DomEvent.stopPropagation(e);
		} else {
			L.DomEvent.preventDefault(e);
		}
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		L.DomUtil.setOpacity(this._icon, this.options.opacity);
		if (this._shadow) {
			L.DomUtil.setOpacity(this._shadow, this.options.opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	}
});

L.marker = function (latlng, options) {
	return new L.Marker(latlng, options);
};


/*
 * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
 * to use with L.Marker.
 */

L.DivIcon = L.Icon.extend({
	options: {
		iconSize: [12, 12], // also can be set through CSS
		/*
		iconAnchor: (Point)
		popupAnchor: (Point)
		html: (String)
		bgPos: (Point)
		*/
		className: 'leaflet-div-icon',
		html: false
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		if (options.html !== false) {
			div.innerHTML = options.html;
		} else {
			div.innerHTML = '';
		}

		if (options.bgPos) {
			div.style.backgroundPosition =
			        (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
		}

		this._setIconStyles(div, 'icon');
		return div;
	},

	createShadow: function () {
		return null;
	}
});

L.divIcon = function (options) {
	return new L.DivIcon(options);
};


/*
 * L.Popup is used for displaying popups on the map.
 */

L.Map.mergeOptions({
	closePopupOnClick: true
});

L.Popup = L.Class.extend({
	includes: L.Mixin.Events,

	options: {
		minWidth: 50,
		maxWidth: 300,
		// maxHeight: null,
		autoPan: true,
		closeButton: true,
		offset: [0, 7],
		autoPanPadding: [5, 5],
		// autoPanPaddingTopLeft: null,
		// autoPanPaddingBottomRight: null,
		keepInView: false,
		className: '',
		zoomAnimation: true
	},

	initialize: function (options, source) {
		L.setOptions(this, options);

		this._source = source;
		this._animated = L.Browser.any3d && this.options.zoomAnimation;
		this._isOpen = false;
	},

	onAdd: function (map) {
		this._map = map;

		if (!this._container) {
			this._initLayout();
		}

		var animFade = map.options.fadeAnimation;

		if (animFade) {
			L.DomUtil.setOpacity(this._container, 0);
		}
		map._panes.popupPane.appendChild(this._container);

		map.on(this._getEvents(), this);

		this.update();

		if (animFade) {
			L.DomUtil.setOpacity(this._container, 1);
		}

		this.fire('open');

		map.fire('popupopen', {popup: this});

		if (this._source) {
			this._source.fire('popupopen', {popup: this});
		}
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onRemove: function (map) {
		map._panes.popupPane.removeChild(this._container);

		L.Util.falseFn(this._container.offsetWidth); // force reflow

		map.off(this._getEvents(), this);

		if (map.options.fadeAnimation) {
			L.DomUtil.setOpacity(this._container, 0);
		}

		this._map = null;

		this.fire('close');

		map.fire('popupclose', {popup: this});

		if (this._source) {
			this._source.fire('popupclose', {popup: this});
		}
	},

	getLatLng: function () {
		return this._latlng;
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	getContent: function () {
		return this._content;
	},

	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	_getEvents: function () {
		var events = {
			viewreset: this._updatePosition
		};

		if (this._animated) {
			events.zoomanim = this._zoomAnimation;
		}
		if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}
		if (this.options.keepInView) {
			events.moveend = this._adjustPan;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
			containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' +
			        (this._animated ? 'animated' : 'hide'),
			container = this._container = L.DomUtil.create('div', containerClass),
			closeButton;

		if (this.options.closeButton) {
			closeButton = this._closeButton =
			        L.DomUtil.create('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';
			L.DomEvent.disableClickPropagation(closeButton);

			L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
		}

		var wrapper = this._wrapper =
		        L.DomUtil.create('div', prefix + '-content-wrapper', container);
		L.DomEvent.disableClickPropagation(wrapper);

		this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

		L.DomEvent.disableScrollPropagation(this._contentNode);
		L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

		this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
		this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
	},

	_updateContent: function () {
		if (!this._content) { return; }

		if (typeof this._content === 'string') {
			this._contentNode.innerHTML = this._content;
		} else {
			while (this._contentNode.hasChildNodes()) {
				this._contentNode.removeChild(this._contentNode.firstChild);
			}
			this._contentNode.appendChild(this._content);
		}
		this.fire('contentupdate');
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			L.DomUtil.addClass(container, scrolledClass);
		} else {
			L.DomUtil.removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    animated = this._animated,
		    offset = L.point(this.options.offset);

		if (animated) {
			L.DomUtil.setPosition(this._container, pos);
		}

		this._containerBottom = -offset.y - (animated ? 0 : pos.y);
		this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x);

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = this._containerBottom + 'px';
		this._container.style.left = this._containerLeft + 'px';
	},

	_zoomAnimation: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);

		L.DomUtil.setPosition(this._container, pos);
	},

	_adjustPan: function () {
		if (!this.options.autoPan) { return; }

		var map = this._map,
		    containerHeight = this._container.offsetHeight,
		    containerWidth = this._containerWidth,

		    layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

		if (this._animated) {
			layerPos._add(L.DomUtil.getPosition(this._container));
		}

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = L.point(this.options.autoPanPadding),
		    paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		L.DomEvent.stop(e);
	}
});

L.popup = function (options, source) {
	return new L.Popup(options, source);
};


L.Map.include({
	openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
		this.closePopup();

		if (!(popup instanceof L.Popup)) {
			var content = popup;

			popup = new L.Popup(options)
			    .setLatLng(latlng)
			    .setContent(content);
		}
		popup._isOpen = true;

		this._popup = popup;
		return this.addLayer(popup);
	},

	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
			popup._isOpen = false;
		}
		return this;
	}
});


/*
 * Popup extension to L.Marker, adding popup-related methods.
 */

L.Marker.include({
	openPopup: function () {
		if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
			this._popup.setLatLng(this._latlng);
			this._map.openPopup(this._popup);
		}

		return this;
	},

	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	togglePopup: function () {
		if (this._popup) {
			if (this._popup._isOpen) {
				this.closePopup();
			} else {
				this.openPopup();
			}
		}
		return this;
	},

	bindPopup: function (content, options) {
		var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);

		anchor = anchor.add(L.Popup.prototype.options.offset);

		if (options && options.offset) {
			anchor = anchor.add(options.offset);
		}

		options = L.extend({offset: anchor}, options);

		if (!this._popupHandlersAdded) {
			this
			    .on('click', this.togglePopup, this)
			    .on('remove', this.closePopup, this)
			    .on('move', this._movePopup, this);
			this._popupHandlersAdded = true;
		}

		if (content instanceof L.Popup) {
			L.setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			this._popup = new L.Popup(options, this)
				.setContent(content);
		}

		return this;
	},

	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	unbindPopup: function () {
		if (this._popup) {
			this._popup = null;
			this
			    .off('click', this.togglePopup, this)
			    .off('remove', this.closePopup, this)
			    .off('move', this._movePopup, this);
			this._popupHandlersAdded = false;
		}
		return this;
	},

	getPopup: function () {
		return this._popup;
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	}
});


/*
 * L.LayerGroup is a class to combine several layers into one so that
 * you can manipulate the group (e.g. add/remove it) as one layer.
 */

L.LayerGroup = L.Class.extend({
	initialize: function (layers) {
		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	hasLayer: function (layer) {
		if (!layer) { return false; }

		return (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	clearLayers: function () {
		this.eachLayer(this.removeLayer, this);
		return this;
	},

	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		this._map = map;
		this.eachLayer(map.addLayer, map);
	},

	onRemove: function (map) {
		this.eachLayer(map.removeLayer, map);
		this._map = null;
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	getLayer: function (id) {
		return this._layers[id];
	},

	getLayers: function () {
		var layers = [];

		for (var i in this._layers) {
			layers.push(this._layers[i]);
		}
		return layers;
	},

	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	getLayerId: function (layer) {
		return L.stamp(layer);
	}
});

L.layerGroup = function (layers) {
	return new L.LayerGroup(layers);
};


/*
 * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
 * shared between a group of interactive layers (like vectors or markers).
 */

L.FeatureGroup = L.LayerGroup.extend({
	includes: L.Mixin.Events,

	statics: {
		EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
	},

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		if ('on' in layer) {
			layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
		}

		L.LayerGroup.prototype.addLayer.call(this, layer);

		if (this._popupContent && layer.bindPopup) {
			layer.bindPopup(this._popupContent, this._popupOptions);
		}

		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		if ('off' in layer) {
			layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);
		}

		L.LayerGroup.prototype.removeLayer.call(this, layer);

		if (this._popupContent) {
			this.invoke('unbindPopup');
		}

		return this.fire('layerremove', {layer: layer});
	},

	bindPopup: function (content, options) {
		this._popupContent = content;
		this._popupOptions = options;
		return this.invoke('bindPopup', content, options);
	},

	openPopup: function (latlng) {
		// open popup on the first layer
		for (var id in this._layers) {
			this._layers[id].openPopup(latlng);
			break;
		}
		return this;
	},

	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	getBounds: function () {
		var bounds = new L.LatLngBounds();

		this.eachLayer(function (layer) {
			bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
		});

		return bounds;
	},

	_propagateEvent: function (e) {
		e = L.extend({
			layer: e.target,
			target: this
		}, e);
		this.fire(e.type, e);
	}
});

L.featureGroup = function (layers) {
	return new L.FeatureGroup(layers);
};


/*
 * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
 */

L.Path = L.Class.extend({
	includes: [L.Mixin.Events],

	statics: {
		// how much to extend the clip area around the map view
		// (relative to its size, e.g. 0.5 is half the screen in each direction)
		// set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
		CLIP_PADDING: (function () {
			var max = L.Browser.mobile ? 1280 : 2000,
			    target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
			return Math.max(0, Math.min(0.5, target));
		})()
	},

	options: {
		stroke: true,
		color: '#0033ff',
		dashArray: null,
		lineCap: null,
		lineJoin: null,
		weight: 5,
		opacity: 0.5,

		fill: false,
		fillColor: null, //same as color by default
		fillOpacity: 0.2,

		clickable: true
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	onAdd: function (map) {
		this._map = map;

		if (!this._container) {
			this._initElements();
			this._initEvents();
		}

		this.projectLatlngs();
		this._updatePath();

		if (this._container) {
			this._map._pathRoot.appendChild(this._container);
		}

		this.fire('add');

		map.on({
			'viewreset': this.projectLatlngs,
			'moveend': this._updatePath
		}, this);
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	onRemove: function (map) {
		map._pathRoot.removeChild(this._container);

		// Need to fire remove event before we set _map to null as the event hooks might need the object
		this.fire('remove');
		this._map = null;

		if (L.Browser.vml) {
			this._container = null;
			this._stroke = null;
			this._fill = null;
		}

		map.off({
			'viewreset': this.projectLatlngs,
			'moveend': this._updatePath
		}, this);
	},

	projectLatlngs: function () {
		// do all projection stuff here
	},

	setStyle: function (style) {
		L.setOptions(this, style);

		if (this._container) {
			this._updateStyle();
		}

		return this;
	},

	redraw: function () {
		if (this._map) {
			this.projectLatlngs();
			this._updatePath();
		}
		return this;
	}
});

L.Map.include({
	_updatePathViewport: function () {
		var p = L.Path.CLIP_PADDING,
		    size = this.getSize(),
		    panePos = L.DomUtil.getPosition(this._mapPane),
		    min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
		    max = min.add(size.multiplyBy(1 + p * 2)._round());

		this._pathViewport = new L.Bounds(min, max);
	}
});


/*
 * Extends L.Path with SVG-specific rendering code.
 */

L.Path.SVG_NS = 'http://www.w3.org/2000/svg';

L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);

L.Path = L.Path.extend({
	statics: {
		SVG: L.Browser.svg
	},

	bringToFront: function () {
		var root = this._map._pathRoot,
		    path = this._container;

		if (path && root.lastChild !== path) {
			root.appendChild(path);
		}
		return this;
	},

	bringToBack: function () {
		var root = this._map._pathRoot,
		    path = this._container,
		    first = root.firstChild;

		if (path && first !== path) {
			root.insertBefore(path, first);
		}
		return this;
	},

	getPathString: function () {
		// form path string here
	},

	_createElement: function (name) {
		return document.createElementNS(L.Path.SVG_NS, name);
	},

	_initElements: function () {
		this._map._initPathRoot();
		this._initPath();
		this._initStyle();
	},

	_initPath: function () {
		this._container = this._createElement('g');

		this._path = this._createElement('path');

		if (this.options.className) {
			L.DomUtil.addClass(this._path, this.options.className);
		}

		this._container.appendChild(this._path);
	},

	_initStyle: function () {
		if (this.options.stroke) {
			this._path.setAttribute('stroke-linejoin', 'round');
			this._path.setAttribute('stroke-linecap', 'round');
		}
		if (this.options.fill) {
			this._path.setAttribute('fill-rule', 'evenodd');
		}
		if (this.options.pointerEvents) {
			this._path.setAttribute('pointer-events', this.options.pointerEvents);
		}
		if (!this.options.clickable && !this.options.pointerEvents) {
			this._path.setAttribute('pointer-events', 'none');
		}
		this._updateStyle();
	},

	_updateStyle: function () {
		if (this.options.stroke) {
			this._path.setAttribute('stroke', this.options.color);
			this._path.setAttribute('stroke-opacity', this.options.opacity);
			this._path.setAttribute('stroke-width', this.options.weight);
			if (this.options.dashArray) {
				this._path.setAttribute('stroke-dasharray', this.options.dashArray);
			} else {
				this._path.removeAttribute('stroke-dasharray');
			}
			if (this.options.lineCap) {
				this._path.setAttribute('stroke-linecap', this.options.lineCap);
			}
			if (this.options.lineJoin) {
				this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
			}
		} else {
			this._path.setAttribute('stroke', 'none');
		}
		if (this.options.fill) {
			this._path.setAttribute('fill', this.options.fillColor || this.options.color);
			this._path.setAttribute('fill-opacity', this.options.fillOpacity);
		} else {
			this._path.setAttribute('fill', 'none');
		}
	},

	_updatePath: function () {
		var str = this.getPathString();
		if (!str) {
			// fix webkit empty string parsing bug
			str = 'M0 0';
		}
		this._path.setAttribute('d', str);
	},

	// TODO remove duplication with L.Map
	_initEvents: function () {
		if (this.options.clickable) {
			if (L.Browser.svg || !L.Browser.vml) {
				L.DomUtil.addClass(this._path, 'leaflet-clickable');
			}

			L.DomEvent.on(this._container, 'click', this._onMouseClick, this);

			var events = ['dblclick', 'mousedown', 'mouseover',
			              'mouseout', 'mousemove', 'contextmenu'];
			for (var i = 0; i < events.length; i++) {
				L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
			}
		}
	},

	_onMouseClick: function (e) {
		if (this._map.dragging && this._map.dragging.moved()) { return; }

		this._fireMouseEvent(e);
	},

	_fireMouseEvent: function (e) {
		if (!this._map || !this.hasEventListeners(e.type)) { return; }

		var map = this._map,
		    containerPoint = map.mouseEventToContainerPoint(e),
		    layerPoint = map.containerPointToLayerPoint(containerPoint),
		    latlng = map.layerPointToLatLng(layerPoint);

		this.fire(e.type, {
			latlng: latlng,
			layerPoint: layerPoint,
			containerPoint: containerPoint,
			originalEvent: e
		});

		if (e.type === 'contextmenu') {
			L.DomEvent.preventDefault(e);
		}
		if (e.type !== 'mousemove') {
			L.DomEvent.stopPropagation(e);
		}
	}
});

L.Map.include({
	_initPathRoot: function () {
		if (!this._pathRoot) {
			this._pathRoot = L.Path.prototype._createElement('svg');
			this._panes.overlayPane.appendChild(this._pathRoot);

			if (this.options.zoomAnimation && L.Browser.any3d) {
				L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');

				this.on({
					'zoomanim': this._animatePathZoom,
					'zoomend': this._endPathZoom
				});
			} else {
				L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
			}

			this.on('moveend', this._updateSvgViewport);
			this._updateSvgViewport();
		}
	},

	_animatePathZoom: function (e) {
		var scale = this.getZoomScale(e.zoom),
		    offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);

		this._pathRoot.style[L.DomUtil.TRANSFORM] =
		        L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';

		this._pathZooming = true;
	},

	_endPathZoom: function () {
		this._pathZooming = false;
	},

	_updateSvgViewport: function () {

		if (this._pathZooming) {
			// Do not update SVGs while a zoom animation is going on otherwise the animation will break.
			// When the zoom animation ends we will be updated again anyway
			// This fixes the case where you do a momentum move and zoom while the move is still ongoing.
			return;
		}

		this._updatePathViewport();

		var vp = this._pathViewport,
		    min = vp.min,
		    max = vp.max,
		    width = max.x - min.x,
		    height = max.y - min.y,
		    root = this._pathRoot,
		    pane = this._panes.overlayPane;

		// Hack to make flicker on drag end on mobile webkit less irritating
		if (L.Browser.mobileWebkit) {
			pane.removeChild(root);
		}

		L.DomUtil.setPosition(root, min);
		root.setAttribute('width', width);
		root.setAttribute('height', height);
		root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

		if (L.Browser.mobileWebkit) {
			pane.appendChild(root);
		}
	}
});


/*
 * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
 */

L.Path.include({

	bindPopup: function (content, options) {

		if (content instanceof L.Popup) {
			this._popup = content;
		} else {
			if (!this._popup || options) {
				this._popup = new L.Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this
			    .on('click', this._openPopup, this)
			    .on('remove', this.closePopup, this);

			this._popupHandlersAdded = true;
		}

		return this;
	},

	unbindPopup: function () {
		if (this._popup) {
			this._popup = null;
			this
			    .off('click', this._openPopup)
			    .off('remove', this.closePopup);

			this._popupHandlersAdded = false;
		}
		return this;
	},

	openPopup: function (latlng) {

		if (this._popup) {
			// open the popup from one of the path's points if not specified
			latlng = latlng || this._latlng ||
			         this._latlngs[Math.floor(this._latlngs.length / 2)];

			this._openPopup({latlng: latlng});
		}

		return this;
	},

	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	_openPopup: function (e) {
		this._popup.setLatLng(e.latlng);
		this._map.openPopup(this._popup);
	}
});


/*
 * Vector rendering for IE6-8 through VML.
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */

L.Browser.vml = !L.Browser.svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());

L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
	statics: {
		VML: true,
		CLIP_PADDING: 0.02
	},

	_createElement: (function () {
		try {
			document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
			return function (name) {
				return document.createElement('<lvml:' + name + ' class="lvml">');
			};
		} catch (e) {
			return function (name) {
				return document.createElement(
				        '<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
			};
		}
	}()),

	_initPath: function () {
		var container = this._container = this._createElement('shape');

		L.DomUtil.addClass(container, 'leaflet-vml-shape' +
			(this.options.className ? ' ' + this.options.className : ''));

		if (this.options.clickable) {
			L.DomUtil.addClass(container, 'leaflet-clickable');
		}

		container.coordsize = '1 1';

		this._path = this._createElement('path');
		container.appendChild(this._path);

		this._map._pathRoot.appendChild(container);
	},

	_initStyle: function () {
		this._updateStyle();
	},

	_updateStyle: function () {
		var stroke = this._stroke,
		    fill = this._fill,
		    options = this.options,
		    container = this._container;

		container.stroked = options.stroke;
		container.filled = options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = this._stroke = this._createElement('stroke');
				stroke.endcap = 'round';
				container.appendChild(stroke);
			}
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = L.Util.isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			if (options.lineCap) {
				stroke.endcap = options.lineCap.replace('butt', 'flat');
			}
			if (options.lineJoin) {
				stroke.joinstyle = options.lineJoin;
			}

		} else if (stroke) {
			container.removeChild(stroke);
			this._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = this._fill = this._createElement('fill');
				container.appendChild(fill);
			}
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			this._fill = null;
		}
	},

	_updatePath: function () {
		var style = this._container.style;

		style.display = 'none';
		this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug
		style.display = '';
	}
});

L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
	_initPathRoot: function () {
		if (this._pathRoot) { return; }

		var root = this._pathRoot = document.createElement('div');
		root.className = 'leaflet-vml-container';
		this._panes.overlayPane.appendChild(root);

		this.on('moveend', this._updatePathViewport);
		this._updatePathViewport();
	}
});


/*
 * Vector rendering for all browsers that support canvas.
 */

L.Browser.canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

L.Path = (L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? L.Path : L.Path.extend({
	statics: {
		//CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
		CANVAS: true,
		SVG: false
	},

	redraw: function () {
		if (this._map) {
			this.projectLatlngs();
			this._requestUpdate();
		}
		return this;
	},

	setStyle: function (style) {
		L.setOptions(this, style);

		if (this._map) {
			this._updateStyle();
			this._requestUpdate();
		}
		return this;
	},

	onRemove: function (map) {
		map
		    .off('viewreset', this.projectLatlngs, this)
		    .off('moveend', this._updatePath, this);

		if (this.options.clickable) {
			this._map.off('click', this._onClick, this);
			this._map.off('mousemove', this._onMouseMove, this);
		}

		this._requestUpdate();
		
		this.fire('remove');
		this._map = null;
	},

	_requestUpdate: function () {
		if (this._map && !L.Path._updateRequest) {
			L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
		}
	},

	_fireMapMoveEnd: function () {
		L.Path._updateRequest = null;
		this.fire('moveend');
	},

	_initElements: function () {
		this._map._initPathRoot();
		this._ctx = this._map._canvasCtx;
	},

	_updateStyle: function () {
		var options = this.options;

		if (options.stroke) {
			this._ctx.lineWidth = options.weight;
			this._ctx.strokeStyle = options.color;
		}
		if (options.fill) {
			this._ctx.fillStyle = options.fillColor || options.color;
		}

		if (options.lineCap) {
			this._ctx.lineCap = options.lineCap;
		}
		if (options.lineJoin) {
			this._ctx.lineJoin = options.lineJoin;
		}
	},

	_drawPath: function () {
		var i, j, len, len2, point, drawMethod;

		this._ctx.beginPath();

		for (i = 0, len = this._parts.length; i < len; i++) {
			for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
				point = this._parts[i][j];
				drawMethod = (j === 0 ? 'move' : 'line') + 'To';

				this._ctx[drawMethod](point.x, point.y);
			}
			// TODO refactor ugly hack
			if (this instanceof L.Polygon) {
				this._ctx.closePath();
			}
		}
	},

	_checkIfEmpty: function () {
		return !this._parts.length;
	},

	_updatePath: function () {
		if (this._checkIfEmpty()) { return; }

		var ctx = this._ctx,
		    options = this.options;

		this._drawPath();
		ctx.save();
		this._updateStyle();

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke) {
			ctx.globalAlpha = options.opacity;
			ctx.stroke();
		}

		ctx.restore();

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_initEvents: function () {
		if (this.options.clickable) {
			this._map.on('mousemove', this._onMouseMove, this);
			this._map.on('click dblclick contextmenu', this._fireMouseEvent, this);
		}
	},

	_fireMouseEvent: function (e) {
		if (this._containsPoint(e.layerPoint)) {
			this.fire(e.type, e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map._animatingZoom) { return; }

		// TODO don't do on each move
		if (this._containsPoint(e.layerPoint)) {
			this._ctx.canvas.style.cursor = 'pointer';
			this._mouseInside = true;
			this.fire('mouseover', e);

		} else if (this._mouseInside) {
			this._ctx.canvas.style.cursor = '';
			this._mouseInside = false;
			this.fire('mouseout', e);
		}
	}
});

L.Map.include((L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? {} : {
	_initPathRoot: function () {
		var root = this._pathRoot,
		    ctx;

		if (!root) {
			root = this._pathRoot = document.createElement('canvas');
			root.style.position = 'absolute';
			ctx = this._canvasCtx = root.getContext('2d');

			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';

			this._panes.overlayPane.appendChild(root);

			if (this.options.zoomAnimation) {
				this._pathRoot.className = 'leaflet-zoom-animated';
				this.on('zoomanim', this._animatePathZoom);
				this.on('zoomend', this._endPathZoom);
			}
			this.on('moveend', this._updateCanvasViewport);
			this._updateCanvasViewport();
		}
	},

	_updateCanvasViewport: function () {
		// don't redraw while zooming. See _updateSvgViewport for more details
		if (this._pathZooming) { return; }
		this._updatePathViewport();

		var vp = this._pathViewport,
		    min = vp.min,
		    size = vp.max.subtract(min),
		    root = this._pathRoot;

		//TODO check if this works properly on mobile webkit
		L.DomUtil.setPosition(root, min);
		root.width = size.x;
		root.height = size.y;
		root.getContext('2d').translate(-min.x, -min.y);
	}
});


/*
 * L.LineUtil contains different utility functions for line segments
 * and polylines (clipping, simplification, distances, etc.)
 */

/*jshint bitwise:false */ // allow bitwise operations for this file

L.LineUtil = {

	// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
	// Improves rendering performance dramatically by lessening the number of points to draw.

	simplify: function (/*Point[]*/ points, /*Number*/ tolerance) {
		if (!tolerance || !points.length) {
			return points.slice();
		}

		var sqTolerance = tolerance * tolerance;

		// stage 1: vertex reduction
		points = this._reducePoints(points, sqTolerance);

		// stage 2: Douglas-Peucker simplification
		points = this._simplifyDP(points, sqTolerance);

		return points;
	},

	// distance from a point to a segment between two points
	pointToSegmentDistance:  function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
		return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
	},

	closestPointOnSegment: function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
		return this._sqClosestPointOnSegment(p, p1, p2);
	},

	// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
	_simplifyDP: function (points, sqTolerance) {

		var len = points.length,
		    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
		    markers = new ArrayConstructor(len);

		markers[0] = markers[len - 1] = 1;

		this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

		var i,
		    newPoints = [];

		for (i = 0; i < len; i++) {
			if (markers[i]) {
				newPoints.push(points[i]);
			}
		}

		return newPoints;
	},

	_simplifyDPStep: function (points, markers, sqTolerance, first, last) {

		var maxSqDist = 0,
		    index, i, sqDist;

		for (i = first + 1; i <= last - 1; i++) {
			sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

			if (sqDist > maxSqDist) {
				index = i;
				maxSqDist = sqDist;
			}
		}

		if (maxSqDist > sqTolerance) {
			markers[index] = 1;

			this._simplifyDPStep(points, markers, sqTolerance, first, index);
			this._simplifyDPStep(points, markers, sqTolerance, index, last);
		}
	},

	// reduce points that are too close to each other to a single point
	_reducePoints: function (points, sqTolerance) {
		var reducedPoints = [points[0]];

		for (var i = 1, prev = 0, len = points.length; i < len; i++) {
			if (this._sqDist(points[i], points[prev]) > sqTolerance) {
				reducedPoints.push(points[i]);
				prev = i;
			}
		}
		if (prev < len - 1) {
			reducedPoints.push(points[len - 1]);
		}
		return reducedPoints;
	},

	// Cohen-Sutherland line clipping algorithm.
	// Used to avoid rendering parts of a polyline that are not currently visible.

	clipSegment: function (a, b, bounds, useLastCode) {
		var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
		    codeB = this._getBitCode(b, bounds),

		    codeOut, p, newCode;

		// save 2nd code to avoid calculating it on the next segment
		this._lastCode = codeB;

		while (true) {
			// if a,b is inside the clip window (trivial accept)
			if (!(codeA | codeB)) {
				return [a, b];
			// if a,b is outside the clip window (trivial reject)
			} else if (codeA & codeB) {
				return false;
			// other cases
			} else {
				codeOut = codeA || codeB;
				p = this._getEdgeIntersection(a, b, codeOut, bounds);
				newCode = this._getBitCode(p, bounds);

				if (codeOut === codeA) {
					a = p;
					codeA = newCode;
				} else {
					b = p;
					codeB = newCode;
				}
			}
		}
	},

	_getEdgeIntersection: function (a, b, code, bounds) {
		var dx = b.x - a.x,
		    dy = b.y - a.y,
		    min = bounds.min,
		    max = bounds.max;

		if (code & 8) { // top
			return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
		} else if (code & 4) { // bottom
			return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
		} else if (code & 2) { // right
			return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
		} else if (code & 1) { // left
			return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
		}
	},

	_getBitCode: function (/*Point*/ p, bounds) {
		var code = 0;

		if (p.x < bounds.min.x) { // left
			code |= 1;
		} else if (p.x > bounds.max.x) { // right
			code |= 2;
		}
		if (p.y < bounds.min.y) { // bottom
			code |= 4;
		} else if (p.y > bounds.max.y) { // top
			code |= 8;
		}

		return code;
	},

	// square distance (to avoid unnecessary Math.sqrt calls)
	_sqDist: function (p1, p2) {
		var dx = p2.x - p1.x,
		    dy = p2.y - p1.y;
		return dx * dx + dy * dy;
	},

	// return closest point on segment or distance to that point
	_sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
		var x = p1.x,
		    y = p1.y,
		    dx = p2.x - x,
		    dy = p2.y - y,
		    dot = dx * dx + dy * dy,
		    t;

		if (dot > 0) {
			t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

			if (t > 1) {
				x = p2.x;
				y = p2.y;
			} else if (t > 0) {
				x += dx * t;
				y += dy * t;
			}
		}

		dx = p.x - x;
		dy = p.y - y;

		return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
	}
};


/*
 * L.Polyline is used to display polylines on a map.
 */

L.Polyline = L.Path.extend({
	initialize: function (latlngs, options) {
		L.Path.prototype.initialize.call(this, options);

		this._latlngs = this._convertLatLngs(latlngs);
	},

	options: {
		// how much to simplify the polyline on each zoom level
		// more = better performance and smoother look, less = more accurate
		smoothFactor: 1.0,
		noClip: false
	},

	projectLatlngs: function () {
		this._originalPoints = [];

		for (var i = 0, len = this._latlngs.length; i < len; i++) {
			this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
		}
	},

	getPathString: function () {
		for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
			str += this._getPathPartStr(this._parts[i]);
		}
		return str;
	},

	getLatLngs: function () {
		return this._latlngs;
	},

	setLatLngs: function (latlngs) {
		this._latlngs = this._convertLatLngs(latlngs);
		return this.redraw();
	},

	addLatLng: function (latlng) {
		this._latlngs.push(L.latLng(latlng));
		return this.redraw();
	},

	spliceLatLngs: function () { // (Number index, Number howMany)
		var removed = [].splice.apply(this._latlngs, arguments);
		this._convertLatLngs(this._latlngs, true);
		this.redraw();
		return removed;
	},

	closestLayerPoint: function (p) {
		var minDistance = Infinity, parts = this._parts, p1, p2, minPoint = null;

		for (var j = 0, jLen = parts.length; j < jLen; j++) {
			var points = parts[j];
			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];
				var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);
				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	getBounds: function () {
		return new L.LatLngBounds(this.getLatLngs());
	},

	_convertLatLngs: function (latlngs, overwrite) {
		var i, len, target = overwrite ? latlngs : [];

		for (i = 0, len = latlngs.length; i < len; i++) {
			if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
				return;
			}
			target[i] = L.latLng(latlngs[i]);
		}
		return target;
	},

	_initEvents: function () {
		L.Path.prototype._initEvents.call(this);
	},

	_getPathPartStr: function (points) {
		var round = L.Path.VML;

		for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
			p = points[j];
			if (round) {
				p._round();
			}
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}
		return str;
	},

	_clipPoints: function () {
		var points = this._originalPoints,
		    len = points.length,
		    i, k, segment;

		if (this.options.noClip) {
			this._parts = [points];
			return;
		}

		this._parts = [];

		var parts = this._parts,
		    vp = this._map._pathViewport,
		    lu = L.LineUtil;

		for (i = 0, k = 0; i < len - 1; i++) {
			segment = lu.clipSegment(points[i], points[i + 1], vp, i);
			if (!segment) {
				continue;
			}

			parts[k] = parts[k] || [];
			parts[k].push(segment[0]);

			// if segment goes out of screen, or it's the last one, it's the end of the line part
			if ((segment[1] !== points[i + 1]) || (i === len - 2)) {
				parts[k].push(segment[1]);
				k++;
			}
		}
	},

	// simplify each clipped part of the polyline
	_simplifyPoints: function () {
		var parts = this._parts,
		    lu = L.LineUtil;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
		}
	},

	_updatePath: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();

		L.Path.prototype._updatePath.call(this);
	}
});

L.polyline = function (latlngs, options) {
	return new L.Polyline(latlngs, options);
};


/*
 * L.PolyUtil contains utility functions for polygons (clipping, etc.).
 */

/*jshint bitwise:false */ // allow bitwise operations here

L.PolyUtil = {};

/*
 * Sutherland-Hodgeman polygon clipping algorithm.
 * Used to avoid rendering parts of a polygon that are not currently visible.
 */
L.PolyUtil.clipPolygon = function (points, bounds) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p,
	    lu = L.LineUtil;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = lu._getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = lu._getEdgeIntersection(b, a, edge, bounds);
					p._code = lu._getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = lu._getEdgeIntersection(b, a, edge, bounds);
				p._code = lu._getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
};


/*
 * L.Polygon is used to display polygons on a map.
 */

L.Polygon = L.Polyline.extend({
	options: {
		fill: true
	},

	initialize: function (latlngs, options) {
		L.Polyline.prototype.initialize.call(this, latlngs, options);
		this._initWithHoles(latlngs);
	},

	_initWithHoles: function (latlngs) {
		var i, len, hole;
		if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
			this._latlngs = this._convertLatLngs(latlngs[0]);
			this._holes = latlngs.slice(1);

			for (i = 0, len = this._holes.length; i < len; i++) {
				hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
				if (hole[0].equals(hole[hole.length - 1])) {
					hole.pop();
				}
			}
		}

		// filter out last point if its equal to the first one
		latlngs = this._latlngs;

		if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
			latlngs.pop();
		}
	},

	projectLatlngs: function () {
		L.Polyline.prototype.projectLatlngs.call(this);

		// project polygon holes points
		// TODO move this logic to Polyline to get rid of duplication
		this._holePoints = [];

		if (!this._holes) { return; }

		var i, j, len, len2;

		for (i = 0, len = this._holes.length; i < len; i++) {
			this._holePoints[i] = [];

			for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
				this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
			}
		}
	},

	setLatLngs: function (latlngs) {
		if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
			this._initWithHoles(latlngs);
			return this.redraw();
		} else {
			return L.Polyline.prototype.setLatLngs.call(this, latlngs);
		}
	},

	_clipPoints: function () {
		var points = this._originalPoints,
		    newParts = [];

		this._parts = [points].concat(this._holePoints);

		if (this.options.noClip) { return; }

		for (var i = 0, len = this._parts.length; i < len; i++) {
			var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
			if (clipped.length) {
				newParts.push(clipped);
			}
		}

		this._parts = newParts;
	},

	_getPathPartStr: function (points) {
		var str = L.Polyline.prototype._getPathPartStr.call(this, points);
		return str + (L.Browser.svg ? 'z' : 'x');
	}
});

L.polygon = function (latlngs, options) {
	return new L.Polygon(latlngs, options);
};


/*
 * Contains L.MultiPolyline and L.MultiPolygon layers.
 */

(function () {
	function createMulti(Klass) {

		return L.FeatureGroup.extend({

			initialize: function (latlngs, options) {
				this._layers = {};
				this._options = options;
				this.setLatLngs(latlngs);
			},

			setLatLngs: function (latlngs) {
				var i = 0,
				    len = latlngs.length;

				this.eachLayer(function (layer) {
					if (i < len) {
						layer.setLatLngs(latlngs[i++]);
					} else {
						this.removeLayer(layer);
					}
				}, this);

				while (i < len) {
					this.addLayer(new Klass(latlngs[i++], this._options));
				}

				return this;
			},

			getLatLngs: function () {
				var latlngs = [];

				this.eachLayer(function (layer) {
					latlngs.push(layer.getLatLngs());
				});

				return latlngs;
			}
		});
	}

	L.MultiPolyline = createMulti(L.Polyline);
	L.MultiPolygon = createMulti(L.Polygon);

	L.multiPolyline = function (latlngs, options) {
		return new L.MultiPolyline(latlngs, options);
	};

	L.multiPolygon = function (latlngs, options) {
		return new L.MultiPolygon(latlngs, options);
	};
}());


/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

L.Rectangle = L.Polygon.extend({
	initialize: function (latLngBounds, options) {
		L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	setBounds: function (latLngBounds) {
		this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = L.latLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});

L.rectangle = function (latLngBounds, options) {
	return new L.Rectangle(latLngBounds, options);
};


/*
 * L.Circle is a circle overlay (with a certain radius in meters).
 */

L.Circle = L.Path.extend({
	initialize: function (latlng, radius, options) {
		L.Path.prototype.initialize.call(this, options);

		this._latlng = L.latLng(latlng);
		this._mRadius = radius;
	},

	options: {
		fill: true
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);
		return this.redraw();
	},

	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	projectLatlngs: function () {
		var lngRadius = this._getLngRadius(),
		    latlng = this._latlng,
		    pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);

		this._point = this._map.latLngToLayerPoint(latlng);
		this._radius = Math.max(this._point.x - pointLeft.x, 1);
	},

	getBounds: function () {
		var lngRadius = this._getLngRadius(),
		    latRadius = (this._mRadius / 40075017) * 360,
		    latlng = this._latlng;

		return new L.LatLngBounds(
		        [latlng.lat - latRadius, latlng.lng - lngRadius],
		        [latlng.lat + latRadius, latlng.lng + lngRadius]);
	},

	getLatLng: function () {
		return this._latlng;
	},

	getPathString: function () {
		var p = this._point,
		    r = this._radius;

		if (this._checkIfEmpty()) {
			return '';
		}

		if (L.Browser.svg) {
			return 'M' + p.x + ',' + (p.y - r) +
			       'A' + r + ',' + r + ',0,1,1,' +
			       (p.x - 0.1) + ',' + (p.y - r) + ' z';
		} else {
			p._round();
			r = Math.round(r);
			return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
		}
	},

	getRadius: function () {
		return this._mRadius;
	},

	// TODO Earth hardcoded, move into projection code!

	_getLatRadius: function () {
		return (this._mRadius / 40075017) * 360;
	},

	_getLngRadius: function () {
		return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
	},

	_checkIfEmpty: function () {
		if (!this._map) {
			return false;
		}
		var vp = this._map._pathViewport,
		    r = this._radius,
		    p = this._point;

		return p.x - r > vp.max.x || p.y - r > vp.max.y ||
		       p.x + r < vp.min.x || p.y + r < vp.min.y;
	}
});

L.circle = function (latlng, radius, options) {
	return new L.Circle(latlng, radius, options);
};


/*
 * L.CircleMarker is a circle overlay with a permanent pixel radius.
 */

L.CircleMarker = L.Circle.extend({
	options: {
		radius: 10,
		weight: 2
	},

	initialize: function (latlng, options) {
		L.Circle.prototype.initialize.call(this, latlng, null, options);
		this._radius = this.options.radius;
	},

	projectLatlngs: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
	},

	_updateStyle : function () {
		L.Circle.prototype._updateStyle.call(this);
		this.setRadius(this.options.radius);
	},

	setLatLng: function (latlng) {
		L.Circle.prototype.setLatLng.call(this, latlng);
		if (this._popup && this._popup._isOpen) {
			this._popup.setLatLng(latlng);
		}
		return this;
	},

	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	getRadius: function () {
		return this._radius;
	}
});

L.circleMarker = function (latlng, options) {
	return new L.CircleMarker(latlng, options);
};


/*
 * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
 */

L.Polyline.include(!L.Path.CANVAS ? {} : {
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, dist, part,
		    w = this.options.weight / 2;

		if (L.Browser.touch) {
			w += 10; // polyline click tolerance on touch devices
		}

		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];
			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) {
					continue;
				}

				dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

				if (dist <= w) {
					return true;
				}
			}
		}
		return false;
	}
});


/*
 * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
 */

L.Polygon.include(!L.Path.CANVAS ? {} : {
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2,
		    i, j, k,
		    len, len2;

		// TODO optimization: check if within bounds first

		if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
			// click on polygon border
			return true;
		}

		// ray casting algorithm for detecting if point is in polygon

		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) &&
						(p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		return inside;
	}
});


/*
 * Extends L.Circle with Canvas-specific code.
 */

L.Circle.include(!L.Path.CANVAS ? {} : {
	_drawPath: function () {
		var p = this._point;
		this._ctx.beginPath();
		this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
	},

	_containsPoint: function (p) {
		var center = this._point,
		    w2 = this.options.stroke ? this.options.weight / 2 : 0;

		return (p.distanceTo(center) <= this._radius + w2);
	}
});


/*
 * CircleMarker canvas specific drawing parts.
 */

L.CircleMarker.include(!L.Path.CANVAS ? {} : {
	_updateStyle: function () {
		L.Path.prototype._updateStyle.call(this);
	}
});


/*
 * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
 */

L.GeoJSON = L.FeatureGroup.extend({

	initialize: function (geojson, options) {
		L.setOptions(this, options);

		this._layers = {};

		if (geojson) {
			this.addData(geojson);
		}
	},

	addData: function (geojson) {
		var features = L.Util.isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// Only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(features[i]);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return; }

		var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
		layer.feature = L.GeoJSON.asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	},

	resetStyle: function (layer) {
		var style = this.options.style;
		if (style) {
			// reset any custom styles
			L.Util.extend(layer.options, layer.defaultOptions);

			this._setLayerStyle(layer, style);
		}
	},

	setStyle: function (style) {
		this.eachLayer(function (layer) {
			this._setLayerStyle(layer, style);
		}, this);
	},

	_setLayerStyle: function (layer, style) {
		if (typeof style === 'function') {
			style = style(layer.feature);
		}
		if (layer.setStyle) {
			layer.setStyle(style);
		}
	}
});

L.extend(L.GeoJSON, {
	geometryToLayer: function (geojson, pointToLayer, coordsToLatLng, vectorOptions) {
		var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
		    coords = geometry.coordinates,
		    layers = [],
		    latlng, latlngs, i, len;

		coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

		switch (geometry.type) {
		case 'Point':
			latlng = coordsToLatLng(coords);
			return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

		case 'MultiPoint':
			for (i = 0, len = coords.length; i < len; i++) {
				latlng = coordsToLatLng(coords[i]);
				layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
			}
			return new L.FeatureGroup(layers);

		case 'LineString':
			latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
			return new L.Polyline(latlngs, vectorOptions);

		case 'Polygon':
			if (coords.length === 2 && !coords[1].length) {
				throw new Error('Invalid GeoJSON object.');
			}
			latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
			return new L.Polygon(latlngs, vectorOptions);

		case 'MultiLineString':
			latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
			return new L.MultiPolyline(latlngs, vectorOptions);

		case 'MultiPolygon':
			latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
			return new L.MultiPolygon(latlngs, vectorOptions);

		case 'GeometryCollection':
			for (i = 0, len = geometry.geometries.length; i < len; i++) {

				layers.push(this.geometryToLayer({
					geometry: geometry.geometries[i],
					type: 'Feature',
					properties: geojson.properties
				}, pointToLayer, coordsToLatLng, vectorOptions));
			}
			return new L.FeatureGroup(layers);

		default:
			throw new Error('Invalid GeoJSON object.');
		}
	},

	coordsToLatLng: function (coords) { // (Array[, Boolean]) -> LatLng
		return new L.LatLng(coords[1], coords[0], coords[2]);
	},

	coordsToLatLngs: function (coords, levelsDeep, coordsToLatLng) { // (Array[, Number, Function]) -> Array
		var latlng, i, len,
		    latlngs = [];

		for (i = 0, len = coords.length; i < len; i++) {
			latlng = levelsDeep ?
			        this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
			        (coordsToLatLng || this.coordsToLatLng)(coords[i]);

			latlngs.push(latlng);
		}

		return latlngs;
	},

	latLngToCoords: function (latlng) {
		var coords = [latlng.lng, latlng.lat];

		if (latlng.alt !== undefined) {
			coords.push(latlng.alt);
		}
		return coords;
	},

	latLngsToCoords: function (latLngs) {
		var coords = [];

		for (var i = 0, len = latLngs.length; i < len; i++) {
			coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
		}

		return coords;
	},

	getFeature: function (layer, newGeometry) {
		return layer.feature ? L.extend({}, layer.feature, {geometry: newGeometry}) : L.GeoJSON.asFeature(newGeometry);
	},

	asFeature: function (geoJSON) {
		if (geoJSON.type === 'Feature') {
			return geoJSON;
		}

		return {
			type: 'Feature',
			properties: {},
			geometry: geoJSON
		};
	}
});

var PointToGeoJSON = {
	toGeoJSON: function () {
		return L.GeoJSON.getFeature(this, {
			type: 'Point',
			coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
		});
	}
};

L.Marker.include(PointToGeoJSON);
L.Circle.include(PointToGeoJSON);
L.CircleMarker.include(PointToGeoJSON);

L.Polyline.include({
	toGeoJSON: function () {
		return L.GeoJSON.getFeature(this, {
			type: 'LineString',
			coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
		});
	}
});

L.Polygon.include({
	toGeoJSON: function () {
		var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
		    i, len, hole;

		coords[0].push(coords[0][0]);

		if (this._holes) {
			for (i = 0, len = this._holes.length; i < len; i++) {
				hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
				hole.push(hole[0]);
				coords.push(hole);
			}
		}

		return L.GeoJSON.getFeature(this, {
			type: 'Polygon',
			coordinates: coords
		});
	}
});

(function () {
	function multiToGeoJSON(type) {
		return function () {
			var coords = [];

			this.eachLayer(function (layer) {
				coords.push(layer.toGeoJSON().geometry.coordinates);
			});

			return L.GeoJSON.getFeature(this, {
				type: type,
				coordinates: coords
			});
		};
	}

	L.MultiPolyline.include({toGeoJSON: multiToGeoJSON('MultiLineString')});
	L.MultiPolygon.include({toGeoJSON: multiToGeoJSON('MultiPolygon')});

	L.LayerGroup.include({
		toGeoJSON: function () {

			var geometry = this.feature && this.feature.geometry,
				jsons = [],
				json;

			if (geometry && geometry.type === 'MultiPoint') {
				return multiToGeoJSON('MultiPoint').call(this);
			}

			var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';

			this.eachLayer(function (layer) {
				if (layer.toGeoJSON) {
					json = layer.toGeoJSON();
					jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
				}
			});

			if (isGeometryCollection) {
				return L.GeoJSON.getFeature(this, {
					geometries: jsons,
					type: 'GeometryCollection'
				});
			}

			return {
				type: 'FeatureCollection',
				features: jsons
			};
		}
	});
}());

L.geoJson = function (geojson, options) {
	return new L.GeoJSON(geojson, options);
};


/*
 * L.DomEvent contains functions for working with DOM events.
 */

L.DomEvent = {
	/* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
	addListener: function (obj, type, fn, context) { // (HTMLElement, String, Function[, Object])

		var id = L.stamp(fn),
		    key = '_leaflet_' + type + id,
		    handler, originalHandler, newType;

		if (obj[key]) { return this; }

		handler = function (e) {
			return fn.call(context || obj, e || L.DomEvent._getEvent());
		};

		if (L.Browser.pointer && type.indexOf('touch') === 0) {
			return this.addPointerListener(obj, type, handler, id);
		}
		if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
			this.addDoubleTapListener(obj, handler, id);
		}

		if ('addEventListener' in obj) {

			if (type === 'mousewheel') {
				obj.addEventListener('DOMMouseScroll', handler, false);
				obj.addEventListener(type, handler, false);

			} else if ((type === 'mouseenter') || (type === 'mouseleave')) {

				originalHandler = handler;
				newType = (type === 'mouseenter' ? 'mouseover' : 'mouseout');

				handler = function (e) {
					if (!L.DomEvent._checkMouse(obj, e)) { return; }
					return originalHandler(e);
				};

				obj.addEventListener(newType, handler, false);

			} else if (type === 'click' && L.Browser.android) {
				originalHandler = handler;
				handler = function (e) {
					return L.DomEvent._filterClick(e, originalHandler);
				};

				obj.addEventListener(type, handler, false);
			} else {
				obj.addEventListener(type, handler, false);
			}

		} else if ('attachEvent' in obj) {
			obj.attachEvent('on' + type, handler);
		}

		obj[key] = handler;

		return this;
	},

	removeListener: function (obj, type, fn) {  // (HTMLElement, String, Function)

		var id = L.stamp(fn),
		    key = '_leaflet_' + type + id,
		    handler = obj[key];

		if (!handler) { return this; }

		if (L.Browser.pointer && type.indexOf('touch') === 0) {
			this.removePointerListener(obj, type, id);
		} else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
			this.removeDoubleTapListener(obj, id);

		} else if ('removeEventListener' in obj) {

			if (type === 'mousewheel') {
				obj.removeEventListener('DOMMouseScroll', handler, false);
				obj.removeEventListener(type, handler, false);

			} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
				obj.removeEventListener((type === 'mouseenter' ? 'mouseover' : 'mouseout'), handler, false);
			} else {
				obj.removeEventListener(type, handler, false);
			}
		} else if ('detachEvent' in obj) {
			obj.detachEvent('on' + type, handler);
		}

		obj[key] = null;

		return this;
	},

	stopPropagation: function (e) {

		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		L.DomEvent._skipped(e);

		return this;
	},

	disableScrollPropagation: function (el) {
		var stop = L.DomEvent.stopPropagation;

		return L.DomEvent
			.on(el, 'mousewheel', stop)
			.on(el, 'MozMousePixelScroll', stop);
	},

	disableClickPropagation: function (el) {
		var stop = L.DomEvent.stopPropagation;

		for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
			L.DomEvent.on(el, L.Draggable.START[i], stop);
		}

		return L.DomEvent
			.on(el, 'click', L.DomEvent._fakeStop)
			.on(el, 'dblclick', stop);
	},

	preventDefault: function (e) {

		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		return this;
	},

	stop: function (e) {
		return L.DomEvent
			.preventDefault(e)
			.stopPropagation(e);
	},

	getMousePosition: function (e, container) {
		if (!container) {
			return new L.Point(e.clientX, e.clientY);
		}

		var rect = container.getBoundingClientRect();

		return new L.Point(
			e.clientX - rect.left - container.clientLeft,
			e.clientY - rect.top - container.clientTop);
	},

	getWheelDelta: function (e) {

		var delta = 0;

		if (e.wheelDelta) {
			delta = e.wheelDelta / 120;
		}
		if (e.detail) {
			delta = -e.detail / 3;
		}
		return delta;
	},

	_skipEvents: {},

	_fakeStop: function (e) {
		// fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
		L.DomEvent._skipEvents[e.type] = true;
	},

	_skipped: function (e) {
		var skipped = this._skipEvents[e.type];
		// reset when checking, as it's only used in map container and propagates outside of the map
		this._skipEvents[e.type] = false;
		return skipped;
	},

	// check if element really left/entered the event target (for mouseenter/mouseleave)
	_checkMouse: function (el, e) {

		var related = e.relatedTarget;

		if (!related) { return true; }

		try {
			while (related && (related !== el)) {
				related = related.parentNode;
			}
		} catch (err) {
			return false;
		}
		return (related !== el);
	},

	_getEvent: function () { // evil magic for IE
		/*jshint noarg:false */
		var e = window.event;
		if (!e) {
			var caller = arguments.callee.caller;
			while (caller) {
				e = caller['arguments'][0];
				if (e && window.Event === e.constructor) {
					break;
				}
				caller = caller.caller;
			}
		}
		return e;
	},

	// this is a horrible workaround for a bug in Android where a single touch triggers two click events
	_filterClick: function (e, handler) {
		var timeStamp = (e.timeStamp || e.originalEvent.timeStamp),
			elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

		// are they closer together than 500ms yet more than 100ms?
		// Android typically triggers them ~300ms apart while multiple listeners
		// on the same event should be triggered far faster;
		// or check if click is simulated on the element, and if it is, reject any non-simulated events

		if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
			L.DomEvent.stop(e);
			return;
		}
		L.DomEvent._lastClick = timeStamp;

		return handler(e);
	}
};

L.DomEvent.on = L.DomEvent.addListener;
L.DomEvent.off = L.DomEvent.removeListener;


/*
 * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
 */

L.Draggable = L.Class.extend({
	includes: L.Mixin.Events,

	statics: {
		START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
		END: {
			mousedown: 'mouseup',
			touchstart: 'touchend',
			pointerdown: 'touchend',
			MSPointerDown: 'touchend'
		},
		MOVE: {
			mousedown: 'mousemove',
			touchstart: 'touchmove',
			pointerdown: 'touchmove',
			MSPointerDown: 'touchmove'
		}
	},

	initialize: function (element, dragStartTarget) {
		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
	},

	enable: function () {
		if (this._enabled) { return; }

		for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
			L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
		}

		this._enabled = true;
	},

	disable: function () {
		if (!this._enabled) { return; }

		for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
			L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
		}

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		this._moved = false;

		if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }

		L.DomEvent.stopPropagation(e);

		if (L.Draggable._disabled) { return; }

		L.DomUtil.disableImageDrag();
		L.DomUtil.disableTextSelection();

		if (this._moving) { return; }

		var first = e.touches ? e.touches[0] : e;

		this._startPoint = new L.Point(first.clientX, first.clientY);
		this._startPos = this._newPos = L.DomUtil.getPosition(this._element);

		L.DomEvent
		    .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
		    .on(document, L.Draggable.END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    newPoint = new L.Point(first.clientX, first.clientY),
		    offset = newPoint.subtract(this._startPoint);

		if (!offset.x && !offset.y) { return; }
		if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) { return; }

		L.DomEvent.preventDefault(e);

		if (!this._moved) {
			this.fire('dragstart');

			this._moved = true;
			this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

			L.DomUtil.addClass(document.body, 'leaflet-dragging');
			this._lastTarget = e.target || e.srcElement;
			L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		L.Util.cancelAnimFrame(this._animRequest);
		this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
	},

	_updatePosition: function () {
		this.fire('predrag');
		L.DomUtil.setPosition(this._element, this._newPos);
		this.fire('drag');
	},

	_onUp: function () {
		L.DomUtil.removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in L.Draggable.MOVE) {
			L.DomEvent
			    .off(document, L.Draggable.MOVE[i], this._onMove)
			    .off(document, L.Draggable.END[i], this._onUp);
		}

		L.DomUtil.enableImageDrag();
		L.DomUtil.enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			L.Util.cancelAnimFrame(this._animRequest);

			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		}

		this._moving = false;
	}
});


/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

L.Handler = L.Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	enable: function () {
		if (this._enabled) { return; }

		this._enabled = true;
		this.addHooks();
	},

	disable: function () {
		if (!this._enabled) { return; }

		this._enabled = false;
		this.removeHooks();
	},

	enabled: function () {
		return !!this._enabled;
	}
});


/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

L.Map.mergeOptions({
	dragging: true,

	inertia: !L.Browser.android23,
	inertiaDeceleration: 3400, // px/s^2
	inertiaMaxSpeed: Infinity, // px/s
	inertiaThreshold: L.Browser.touch ? 32 : 18, // ms
	easeLinearity: 0.25,

	// TODO refactor, move to CRS
	worldCopyJump: false
});

L.Map.Drag = L.Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new L.Draggable(map._mapPane, map._container);

			this._draggable.on({
				'dragstart': this._onDragStart,
				'drag': this._onDrag,
				'dragend': this._onDragEnd
			}, this);

			if (map.options.worldCopyJump) {
				this._draggable.on('predrag', this._onPreDrag, this);
				map.on('viewreset', this._onViewReset, this);

				map.whenReady(this._onViewReset, this);
			}
		}
		this._draggable.enable();
	},

	removeHooks: function () {
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_onDragStart: function () {
		var map = this._map;

		if (map._panAnim) {
			map._panAnim.stop();
		}

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function () {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			if (time - this._times[0] > 200) {
				this._positions.shift();
				this._times.shift();
			}
		}

		this._map
		    .fire('move')
		    .fire('drag');
	},

	_onViewReset: function () {
		// TODO fix hardcoded Earth values
		var pxCenter = this._map.getSize()._divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.project([0, 180]).x;
	},

	_onPreDrag: function () {
		// TODO refactor to be able to adjust map pane position after zoom
		var worldWidth = this._worldWidth,
		    halfWidth = Math.round(worldWidth / 2),
		    dx = this._initialWorldOffset,
		    x = this._draggable._newPos.x,
		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._newPos.x = newX;
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,
		    delay = +new Date() - this._lastTime,

		    noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');

		} else {

			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime + delay - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x || !offset.y) {
				map.fire('moveend');

			} else {
				offset = map._limitOffset(offset, map.options.maxBounds);

				L.Util.requestAnimFrame(function () {
					map.panBy(offset, {
						duration: decelerationDuration,
						easeLinearity: ease,
						noMoveStart: true
					});
				});
			}
		}
	}
});

L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);


/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

L.Map.mergeOptions({
	doubleClickZoom: true
});

L.Map.DoubleClickZoom = L.Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);


/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

L.Map.mergeOptions({
	scrollWheelZoom: true
});

L.Map.ScrollWheelZoom = L.Handler.extend({
	addHooks: function () {
		L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
		L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
		this._delta = 0;
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
		L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
	},

	_onWheelScroll: function (e) {
		var delta = L.DomEvent.getWheelDelta(e);

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(40 - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(L.bind(this._performZoom, this), left);

		L.DomEvent.preventDefault(e);
		L.DomEvent.stopPropagation(e);
	},

	_performZoom: function () {
		var map = this._map,
		    delta = this._delta,
		    zoom = map.getZoom();

		delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
		delta = Math.max(Math.min(delta, 4), -4);
		delta = map._limitZoom(zoom + delta) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			map.setZoom(zoom + delta);
		} else {
			map.setZoomAround(this._lastMousePos, zoom + delta);
		}
	}
});

L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);


/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

L.extend(L.DomEvent, {

	_touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
	_touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

	// inspired by Zepto touch code by Thomas Fuchs
	addDoubleTapListener: function (obj, handler, id) {
		var last,
		    doubleTap = false,
		    delay = 250,
		    touch,
		    pre = '_leaflet_',
		    touchstart = this._touchstart,
		    touchend = this._touchend,
		    trackedTouches = [];

		function onTouchStart(e) {
			var count;

			if (L.Browser.pointer) {
				trackedTouches.push(e.pointerId);
				count = trackedTouches.length;
			} else {
				count = e.touches.length;
			}
			if (count > 1) {
				return;
			}

			var now = Date.now(),
				delta = now - (last || now);

			touch = e.touches ? e.touches[0] : e;
			doubleTap = (delta > 0 && delta <= delay);
			last = now;
		}

		function onTouchEnd(e) {
			if (L.Browser.pointer) {
				var idx = trackedTouches.indexOf(e.pointerId);
				if (idx === -1) {
					return;
				}
				trackedTouches.splice(idx, 1);
			}

			if (doubleTap) {
				if (L.Browser.pointer) {
					// work around .type being readonly with MSPointer* events
					var newTouch = { },
						prop;

					// jshint forin:false
					for (var i in touch) {
						prop = touch[i];
						if (typeof prop === 'function') {
							newTouch[i] = prop.bind(touch);
						} else {
							newTouch[i] = prop;
						}
					}
					touch = newTouch;
				}
				touch.type = 'dblclick';
				handler(touch);
				last = null;
			}
		}
		obj[pre + touchstart + id] = onTouchStart;
		obj[pre + touchend + id] = onTouchEnd;

		// on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
		// will not come through to us, so we will lose track of how many touches are ongoing
		var endElement = L.Browser.pointer ? document.documentElement : obj;

		obj.addEventListener(touchstart, onTouchStart, false);
		endElement.addEventListener(touchend, onTouchEnd, false);

		if (L.Browser.pointer) {
			endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
		}

		return this;
	},

	removeDoubleTapListener: function (obj, id) {
		var pre = '_leaflet_';

		obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
		(L.Browser.pointer ? document.documentElement : obj).removeEventListener(
		        this._touchend, obj[pre + this._touchend + id], false);

		if (L.Browser.pointer) {
			document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id],
				false);
		}

		return this;
	}
});


/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */

L.extend(L.DomEvent, {

	//static
	POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
	POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
	POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
	POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',

	_pointers: [],
	_pointerDocumentListener: false,

	// Provides a touch events wrapper for (ms)pointer events.
	// Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
	//ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

	addPointerListener: function (obj, type, handler, id) {

		switch (type) {
		case 'touchstart':
			return this.addPointerListenerStart(obj, type, handler, id);
		case 'touchend':
			return this.addPointerListenerEnd(obj, type, handler, id);
		case 'touchmove':
			return this.addPointerListenerMove(obj, type, handler, id);
		default:
			throw 'Unknown touch event type';
		}
	},

	addPointerListenerStart: function (obj, type, handler, id) {
		var pre = '_leaflet_',
		    pointers = this._pointers;

		var cb = function (e) {
			if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
				L.DomEvent.preventDefault(e);
			}

			var alreadyInArray = false;
			for (var i = 0; i < pointers.length; i++) {
				if (pointers[i].pointerId === e.pointerId) {
					alreadyInArray = true;
					break;
				}
			}
			if (!alreadyInArray) {
				pointers.push(e);
			}

			e.touches = pointers.slice();
			e.changedTouches = [e];

			handler(e);
		};

		obj[pre + 'touchstart' + id] = cb;
		obj.addEventListener(this.POINTER_DOWN, cb, false);

		// need to also listen for end events to keep the _pointers list accurate
		// this needs to be on the body and never go away
		if (!this._pointerDocumentListener) {
			var internalCb = function (e) {
				for (var i = 0; i < pointers.length; i++) {
					if (pointers[i].pointerId === e.pointerId) {
						pointers.splice(i, 1);
						break;
					}
				}
			};
			//We listen on the documentElement as any drags that end by moving the touch off the screen get fired there
			document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
			document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);

			this._pointerDocumentListener = true;
		}

		return this;
	},

	addPointerListenerMove: function (obj, type, handler, id) {
		var pre = '_leaflet_',
		    touches = this._pointers;

		function cb(e) {

			// don't fire touch moves when mouse isn't down
			if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

			for (var i = 0; i < touches.length; i++) {
				if (touches[i].pointerId === e.pointerId) {
					touches[i] = e;
					break;
				}
			}

			e.touches = touches.slice();
			e.changedTouches = [e];

			handler(e);
		}

		obj[pre + 'touchmove' + id] = cb;
		obj.addEventListener(this.POINTER_MOVE, cb, false);

		return this;
	},

	addPointerListenerEnd: function (obj, type, handler, id) {
		var pre = '_leaflet_',
		    touches = this._pointers;

		var cb = function (e) {
			for (var i = 0; i < touches.length; i++) {
				if (touches[i].pointerId === e.pointerId) {
					touches.splice(i, 1);
					break;
				}
			}

			e.touches = touches.slice();
			e.changedTouches = [e];

			handler(e);
		};

		obj[pre + 'touchend' + id] = cb;
		obj.addEventListener(this.POINTER_UP, cb, false);
		obj.addEventListener(this.POINTER_CANCEL, cb, false);

		return this;
	},

	removePointerListener: function (obj, type, id) {
		var pre = '_leaflet_',
		    cb = obj[pre + type + id];

		switch (type) {
		case 'touchstart':
			obj.removeEventListener(this.POINTER_DOWN, cb, false);
			break;
		case 'touchmove':
			obj.removeEventListener(this.POINTER_MOVE, cb, false);
			break;
		case 'touchend':
			obj.removeEventListener(this.POINTER_UP, cb, false);
			obj.removeEventListener(this.POINTER_CANCEL, cb, false);
			break;
		}

		return this;
	}
});


/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

L.Map.mergeOptions({
	touchZoom: L.Browser.touch && !L.Browser.android23,
	bounceAtZoomLimits: true
});

L.Map.TouchZoom = L.Handler.extend({
	addHooks: function () {
		L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;

		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToLayerPoint(e.touches[0]),
		    p2 = map.mouseEventToLayerPoint(e.touches[1]),
		    viewCenter = map._getCenterLayerPoint();

		this._startCenter = p1.add(p2)._divideBy(2);
		this._startDist = p1.distanceTo(p2);

		this._moved = false;
		this._zooming = true;

		this._centerOffset = viewCenter.subtract(this._startCenter);

		if (map._panAnim) {
			map._panAnim.stop();
		}

		L.DomEvent
		    .on(document, 'touchmove', this._onTouchMove, this)
		    .on(document, 'touchend', this._onTouchEnd, this);

		L.DomEvent.preventDefault(e);
	},

	_onTouchMove: function (e) {
		var map = this._map;

		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var p1 = map.mouseEventToLayerPoint(e.touches[0]),
		    p2 = map.mouseEventToLayerPoint(e.touches[1]);

		this._scale = p1.distanceTo(p2) / this._startDist;
		this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

		if (this._scale === 1) { return; }

		if (!map.options.bounceAtZoomLimits) {
			if ((map.getZoom() === map.getMinZoom() && this._scale < 1) ||
			    (map.getZoom() === map.getMaxZoom() && this._scale > 1)) { return; }
		}

		if (!this._moved) {
			L.DomUtil.addClass(map._mapPane, 'leaflet-touching');

			map
			    .fire('movestart')
			    .fire('zoomstart');

			this._moved = true;
		}

		L.Util.cancelAnimFrame(this._animRequest);
		this._animRequest = L.Util.requestAnimFrame(
		        this._updateOnMove, this, true, this._map._container);

		L.DomEvent.preventDefault(e);
	},

	_updateOnMove: function () {
		var map = this._map,
		    origin = this._getScaleOrigin(),
		    center = map.layerPointToLatLng(origin),
		    zoom = map.getScaleZoom(this._scale);

		map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta, false, true);
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		var map = this._map;

		this._zooming = false;
		L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
		L.Util.cancelAnimFrame(this._animRequest);

		L.DomEvent
		    .off(document, 'touchmove', this._onTouchMove)
		    .off(document, 'touchend', this._onTouchEnd);

		var origin = this._getScaleOrigin(),
		    center = map.layerPointToLatLng(origin),

		    oldZoom = map.getZoom(),
		    floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
		    roundZoomDelta = (floatZoomDelta > 0 ?
		            Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta)),

		    zoom = map._limitZoom(oldZoom + roundZoomDelta),
		    scale = map.getZoomScale(zoom) / this._scale;

		map._animateZoom(center, zoom, origin, scale);
	},

	_getScaleOrigin: function () {
		var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
		return this._startCenter.add(centerOffset);
	}
});

L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);


/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

L.Map.mergeOptions({
	tap: true,
	tapTolerance: 15
});

L.Map.Tap = L.Handler.extend({
	addHooks: function () {
		L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onDown: function (e) {
		if (!e.touches) { return; }

		L.DomEvent.preventDefault(e);

		this._fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			this._fireClick = false;
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    el = first.target;

		this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (el.tagName && el.tagName.toLowerCase() === 'a') {
			L.DomUtil.addClass(el, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		this._holdTimeout = setTimeout(L.bind(function () {
			if (this._isTapValid()) {
				this._fireClick = false;
				this._onUp();
				this._simulateEvent('contextmenu', first);
			}
		}, this), 1000);

		L.DomEvent
			.on(document, 'touchmove', this._onMove, this)
			.on(document, 'touchend', this._onUp, this);
	},

	_onUp: function (e) {
		clearTimeout(this._holdTimeout);

		L.DomEvent
			.off(document, 'touchmove', this._onMove, this)
			.off(document, 'touchend', this._onUp, this);

		if (this._fireClick && e && e.changedTouches) {

			var first = e.changedTouches[0],
			    el = first.target;

			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
				L.DomUtil.removeClass(el, 'leaflet-active');
			}

			// simulate click if the touch didn't move too much
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		this._newPos = new L.Point(first.clientX, first.clientY);
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		e.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
		        type, true, true, window, 1,
		        e.screenX, e.screenY,
		        e.clientX, e.clientY,
		        false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});

if (L.Browser.touch && !L.Browser.pointer) {
	L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
}


/*
 * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
  * (zoom to a selected bounding box), enabled by default.
 */

L.Map.mergeOptions({
	boxZoom: true
});

L.Map.BoxZoom = L.Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
		this._moved = false;
	},

	addHooks: function () {
		L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
		this._moved = false;
	},

	moved: function () {
		return this._moved;
	},

	_onMouseDown: function (e) {
		this._moved = false;

		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

		L.DomUtil.disableTextSelection();
		L.DomUtil.disableImageDrag();

		this._startLayerPoint = this._map.mouseEventToLayerPoint(e);

		L.DomEvent
		    .on(document, 'mousemove', this._onMouseMove, this)
		    .on(document, 'mouseup', this._onMouseUp, this)
		    .on(document, 'keydown', this._onKeyDown, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
			L.DomUtil.setPosition(this._box, this._startLayerPoint);

			//TODO refactor: move cursor to styles
			this._container.style.cursor = 'crosshair';
			this._map.fire('boxzoomstart');
		}

		var startPoint = this._startLayerPoint,
		    box = this._box,

		    layerPoint = this._map.mouseEventToLayerPoint(e),
		    offset = layerPoint.subtract(startPoint),

		    newPos = new L.Point(
		        Math.min(layerPoint.x, startPoint.x),
		        Math.min(layerPoint.y, startPoint.y));

		L.DomUtil.setPosition(box, newPos);

		this._moved = true;

		// TODO refactor: remove hardcoded 4 pixels
		box.style.width  = (Math.max(0, Math.abs(offset.x) - 4)) + 'px';
		box.style.height = (Math.max(0, Math.abs(offset.y) - 4)) + 'px';
	},

	_finish: function () {
		if (this._moved) {
			this._pane.removeChild(this._box);
			this._container.style.cursor = '';
		}

		L.DomUtil.enableTextSelection();
		L.DomUtil.enableImageDrag();

		L.DomEvent
		    .off(document, 'mousemove', this._onMouseMove)
		    .off(document, 'mouseup', this._onMouseUp)
		    .off(document, 'keydown', this._onKeyDown);
	},

	_onMouseUp: function (e) {

		this._finish();

		var map = this._map,
		    layerPoint = map.mouseEventToLayerPoint(e);

		if (this._startLayerPoint.equals(layerPoint)) { return; }

		var bounds = new L.LatLngBounds(
		        map.layerPointToLatLng(this._startLayerPoint),
		        map.layerPointToLatLng(layerPoint));

		map.fitBounds(bounds);

		map.fire('boxzoomend', {
			boxZoomBounds: bounds
		});
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);


/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

L.Map.mergeOptions({
	keyboard: true,
	keyboardPanOffset: 80,
	keyboardZoomOffset: 1
});

L.Map.Keyboard = L.Handler.extend({

	keyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 173]
	},

	initialize: function (map) {
		this._map = map;

		this._setPanOffset(map.options.keyboardPanOffset);
		this._setZoomOffset(map.options.keyboardZoomOffset);
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex === -1) {
			container.tabIndex = '0';
		}

		L.DomEvent
		    .on(container, 'focus', this._onFocus, this)
		    .on(container, 'blur', this._onBlur, this)
		    .on(container, 'mousedown', this._onMouseDown, this);

		this._map
		    .on('focus', this._addHooks, this)
		    .on('blur', this._removeHooks, this);
	},

	removeHooks: function () {
		this._removeHooks();

		var container = this._map._container;

		L.DomEvent
		    .off(container, 'focus', this._onFocus, this)
		    .off(container, 'blur', this._onBlur, this)
		    .off(container, 'mousedown', this._onMouseDown, this);

		this._map
		    .off('focus', this._addHooks, this)
		    .off('blur', this._removeHooks, this);
	},

	_onMouseDown: function () {
		if (this._focused) { return; }

		var body = document.body,
		    docEl = document.documentElement,
		    top = body.scrollTop || docEl.scrollTop,
		    left = body.scrollLeft || docEl.scrollLeft;

		this._map._container.focus();

		window.scrollTo(left, top);
	},

	_onFocus: function () {
		this._focused = true;
		this._map.fire('focus');
	},

	_onBlur: function () {
		this._focused = false;
		this._map.fire('blur');
	},

	_setPanOffset: function (pan) {
		var keys = this._panKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * pan, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [pan, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, pan];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * pan];
		}
	},

	_setZoomOffset: function (zoom) {
		var keys = this._zoomKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoom;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoom;
		}
	},

	_addHooks: function () {
		L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
	},

	_removeHooks: function () {
		L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
	},

	_onKeyDown: function (e) {
		var key = e.keyCode,
		    map = this._map;

		if (key in this._panKeys) {

			if (map._panAnim && map._panAnim._inProgress) { return; }

			map.panBy(this._panKeys[key]);

			if (map.options.maxBounds) {
				map.panInsideBounds(map.options.maxBounds);
			}

		} else if (key in this._zoomKeys) {
			map.setZoom(map.getZoom() + this._zoomKeys[key]);

		} else {
			return;
		}

		L.DomEvent.stop(e);
	}
});

L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);


/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */

L.Handler.MarkerDrag = L.Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;
		if (!this._draggable) {
			this._draggable = new L.Draggable(icon, icon);
		}

		this._draggable
			.on('dragstart', this._onDragStart, this)
			.on('drag', this._onDrag, this)
			.on('dragend', this._onDragEnd, this);
		this._draggable.enable();
		L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable
			.off('dragstart', this._onDragStart, this)
			.off('drag', this._onDrag, this)
			.off('dragend', this._onDragEnd, this);

		this._draggable.disable();
		L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_onDragStart: function () {
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onDrag: function () {
		var marker = this._marker,
		    shadow = marker._shadow,
		    iconPos = L.DomUtil.getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			L.DomUtil.setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;

		marker
		    .fire('move', {latlng: latlng})
		    .fire('drag');
	},

	_onDragEnd: function (e) {
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	}
});


/*
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

L.Control = L.Class.extend({
	options: {
		position: 'topright'
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	getPosition: function () {
		return this.options.position;
	},

	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	getContainer: function () {
		return this._container;
	},

	addTo: function (map) {
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		L.DomUtil.addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		return this;
	},

	removeFrom: function (map) {
		var pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		corner.removeChild(this._container);
		this._map = null;

		if (this.onRemove) {
			this.onRemove(map);
		}

		return this;
	},

	_refocusOnMap: function () {
		if (this._map) {
			this._map.getContainer().focus();
		}
	}
});

L.control = function (options) {
	return new L.Control(options);
};


// adds control-related methods to L.Map

L.Map.include({
	addControl: function (control) {
		control.addTo(this);
		return this;
	},

	removeControl: function (control) {
		control.removeFrom(this);
		return this;
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            L.DomUtil.create('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = L.DomUtil.create('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		this._container.removeChild(this._controlContainer);
	}
});


/*
 * L.Control.Zoom is used for the default zoom buttons on the map.
 */

L.Control.Zoom = L.Control.extend({
	options: {
		position: 'topleft',
		zoomInText: '+',
		zoomInTitle: 'Zoom in',
		zoomOutText: '-',
		zoomOutTitle: 'Zoom out'
	},

	onAdd: function (map) {
		var zoomName = 'leaflet-control-zoom',
		    container = L.DomUtil.create('div', zoomName + ' leaflet-bar');

		this._map = map;

		this._zoomInButton  = this._createButton(
		        this.options.zoomInText, this.options.zoomInTitle,
		        zoomName + '-in',  container, this._zoomIn,  this);
		this._zoomOutButton = this._createButton(
		        this.options.zoomOutText, this.options.zoomOutTitle,
		        zoomName + '-out', container, this._zoomOut, this);

		this._updateDisabled();
		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	_zoomIn: function (e) {
		this._map.zoomIn(e.shiftKey ? 3 : 1);
	},

	_zoomOut: function (e) {
		this._map.zoomOut(e.shiftKey ? 3 : 1);
	},

	_createButton: function (html, title, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		var stop = L.DomEvent.stopPropagation;

		L.DomEvent
		    .on(link, 'click', stop)
		    .on(link, 'mousedown', stop)
		    .on(link, 'dblclick', stop)
		    .on(link, 'click', L.DomEvent.preventDefault)
		    .on(link, 'click', fn, context)
		    .on(link, 'click', this._refocusOnMap, context);

		return link;
	},

	_updateDisabled: function () {
		var map = this._map,
			className = 'leaflet-disabled';

		L.DomUtil.removeClass(this._zoomInButton, className);
		L.DomUtil.removeClass(this._zoomOutButton, className);

		if (map._zoom === map.getMinZoom()) {
			L.DomUtil.addClass(this._zoomOutButton, className);
		}
		if (map._zoom === map.getMaxZoom()) {
			L.DomUtil.addClass(this._zoomInButton, className);
		}
	}
});

L.Map.mergeOptions({
	zoomControl: true
});

L.Map.addInitHook(function () {
	if (this.options.zoomControl) {
		this.zoomControl = new L.Control.Zoom();
		this.addControl(this.zoomControl);
	}
});

L.control.zoom = function (options) {
	return new L.Control.Zoom(options);
};



/*
 * L.Control.Attribution is used for displaying attribution on the map (added by default).
 */

L.Control.Attribution = L.Control.extend({
	options: {
		position: 'bottomright',
		prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		L.setOptions(this, options);

		this._attributions = {};
	},

	onAdd: function (map) {
		this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
		L.DomEvent.disableClickPropagation(this._container);

		for (var i in map._layers) {
			if (map._layers[i].getAttribution) {
				this.addAttribution(map._layers[i].getAttribution());
			}
		}
		
		map
		    .on('layeradd', this._onLayerAdd, this)
		    .on('layerremove', this._onLayerRemove, this);

		this._update();

		return this._container;
	},

	onRemove: function (map) {
		map
		    .off('layeradd', this._onLayerAdd)
		    .off('layerremove', this._onLayerRemove);

	},

	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	addAttribution: function (text) {
		if (!text) { return; }

		if (!this._attributions[text]) {
			this._attributions[text] = 0;
		}
		this._attributions[text]++;

		this._update();

		return this;
	},

	removeAttribution: function (text) {
		if (!text) { return; }

		if (this._attributions[text]) {
			this._attributions[text]--;
			this._update();
		}

		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		var attribs = [];

		for (var i in this._attributions) {
			if (this._attributions[i]) {
				attribs.push(i);
			}
		}

		var prefixAndAttribs = [];

		if (this.options.prefix) {
			prefixAndAttribs.push(this.options.prefix);
		}
		if (attribs.length) {
			prefixAndAttribs.push(attribs.join(', '));
		}

		this._container.innerHTML = prefixAndAttribs.join(' | ');
	},

	_onLayerAdd: function (e) {
		if (e.layer.getAttribution) {
			this.addAttribution(e.layer.getAttribution());
		}
	},

	_onLayerRemove: function (e) {
		if (e.layer.getAttribution) {
			this.removeAttribution(e.layer.getAttribution());
		}
	}
});

L.Map.mergeOptions({
	attributionControl: true
});

L.Map.addInitHook(function () {
	if (this.options.attributionControl) {
		this.attributionControl = (new L.Control.Attribution()).addTo(this);
	}
});

L.control.attribution = function (options) {
	return new L.Control.Attribution(options);
};


/*
 * L.Control.Scale is used for displaying metric/imperial scale on the map.
 */

L.Control.Scale = L.Control.extend({
	options: {
		position: 'bottomleft',
		maxWidth: 100,
		metric: true,
		imperial: true,
		updateWhenIdle: false
	},

	onAdd: function (map) {
		this._map = map;

		var className = 'leaflet-control-scale',
		    container = L.DomUtil.create('div', className),
		    options = this.options;

		this._addScales(options, className, container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = L.DomUtil.create('div', className + '-line', container);
		}
		if (options.imperial) {
			this._iScale = L.DomUtil.create('div', className + '-line', container);
		}
	},

	_update: function () {
		var bounds = this._map.getBounds(),
		    centerLat = bounds.getCenter().lat,
		    halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
		    dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,

		    size = this._map.getSize(),
		    options = this.options,
		    maxMeters = 0;

		if (size.x > 0) {
			maxMeters = dist * (options.maxWidth / size.x);
		}

		this._updateScales(options, maxMeters);
	},

	_updateScales: function (options, maxMeters) {
		if (options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}

		if (options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters);

		this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
		this._mScale.innerHTML = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    scale = this._iScale,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);

			scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
			scale.innerHTML = miles + ' mi';

		} else {
			feet = this._getRoundNum(maxFeet);

			scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
			scale.innerHTML = feet + ' ft';
		}
	},

	_getScaleWidth: function (ratio) {
		return Math.round(this.options.maxWidth * ratio) - 10;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});

L.control.scale = function (options) {
	return new L.Control.Scale(options);
};


/*
 * L.Control.Layers is a control to allow users to switch between different layers on the map.
 */

L.Control.Layers = L.Control.extend({
	options: {
		collapsed: true,
		position: 'topright',
		autoZIndex: true
	},

	initialize: function (baseLayers, overlays, options) {
		L.setOptions(this, options);

		this._layers = {};
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		map
		    .on('layeradd', this._onLayerChange, this)
		    .on('layerremove', this._onLayerChange, this);

		return this._container;
	},

	onRemove: function (map) {
		map
		    .off('layeradd', this._onLayerChange, this)
		    .off('layerremove', this._onLayerChange, this);
	},

	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		this._update();
		return this;
	},

	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		this._update();
		return this;
	},

	removeLayer: function (layer) {
		var id = L.stamp(layer);
		delete this._layers[id];
		this._update();
		return this;
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = L.DomUtil.create('div', className);

		//Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		if (!L.Browser.touch) {
			L.DomEvent
				.disableClickPropagation(container)
				.disableScrollPropagation(container);
		} else {
			L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
		}

		var form = this._form = L.DomUtil.create('form', className + '-list');

		if (this.options.collapsed) {
			if (!L.Browser.android) {
				L.DomEvent
				    .on(container, 'mouseover', this._expand, this)
				    .on(container, 'mouseout', this._collapse, this);
			}
			var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
			link.href = '#';
			link.title = 'Layers';

			if (L.Browser.touch) {
				L.DomEvent
				    .on(link, 'click', L.DomEvent.stop)
				    .on(link, 'click', this._expand, this);
			}
			else {
				L.DomEvent.on(link, 'focus', this._expand, this);
			}
			//Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
			L.DomEvent.on(form, 'click', function () {
				setTimeout(L.bind(this._onInputClick, this), 0);
			}, this);

			this._map.on('click', this._collapse, this);
			// TODO keyboard accessibility
		} else {
			this._expand();
		}

		this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
		this._separator = L.DomUtil.create('div', className + '-separator', form);
		this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

		container.appendChild(form);
	},

	_addLayer: function (layer, name, overlay) {
		var id = L.stamp(layer);

		this._layers[id] = {
			layer: layer,
			name: name,
			overlay: overlay
		};

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}
	},

	_update: function () {
		if (!this._container) {
			return;
		}

		this._baseLayersList.innerHTML = '';
		this._overlaysList.innerHTML = '';

		var baseLayersPresent = false,
		    overlaysPresent = false,
		    i, obj;

		for (i in this._layers) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
	},

	_onLayerChange: function (e) {
		var obj = this._layers[L.stamp(e.layer)];

		if (!obj) { return; }

		if (!this._handlingClick) {
			this._update();
		}

		var type = obj.overlay ?
			(e.type === 'layeradd' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'layeradd' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';
		if (checked) {
			radioHtml += ' checked="checked"';
		}
		radioHtml += '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    input,
		    checked = this._map.hasLayer(obj.layer);

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}

		input.layerId = L.stamp(obj.layer);

		L.DomEvent.on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		label.appendChild(input);
		label.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		return label;
	},

	_onInputClick: function () {
		var i, input, obj,
		    inputs = this._form.getElementsByTagName('input'),
		    inputsLen = inputs.length;

		this._handlingClick = true;

		for (i = 0; i < inputsLen; i++) {
			input = inputs[i];
			obj = this._layers[input.layerId];

			if (input.checked && !this._map.hasLayer(obj.layer)) {
				this._map.addLayer(obj.layer);

			} else if (!input.checked && this._map.hasLayer(obj.layer)) {
				this._map.removeLayer(obj.layer);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_expand: function () {
		L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
	},

	_collapse: function () {
		this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
	}
});

L.control.layers = function (baseLayers, overlays, options) {
	return new L.Control.Layers(baseLayers, overlays, options);
};


/*
 * L.PosAnimation is used by Leaflet internally for pan animations.
 */

L.PosAnimation = L.Class.extend({
	includes: L.Mixin.Events,

	run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._newPos = newPos;

		this.fire('start');

		el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) +
		        's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';

		L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
		L.DomUtil.setPosition(el, newPos);

		// toggle reflow, Chrome flickers for some reason if you don't do this
		L.Util.falseFn(el.offsetWidth);

		// there's no native way to track value updates of transitioned properties, so we imitate this
		this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
	},

	stop: function () {
		if (!this._inProgress) { return; }

		// if we just removed the transition property, the element would jump to its final position,
		// so we need to make it stay at the current position

		L.DomUtil.setPosition(this._el, this._getPos());
		this._onTransitionEnd();
		L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
	},

	_onStep: function () {
		var stepPos = this._getPos();
		if (!stepPos) {
			this._onTransitionEnd();
			return;
		}
		// jshint camelcase: false
		// make L.DomUtil.getPosition return intermediate position value during animation
		this._el._leaflet_pos = stepPos;

		this.fire('step');
	},

	// you can't easily get intermediate values of properties animated with CSS3 Transitions,
	// we need to parse computed style (in case of transform it returns matrix string)

	_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,

	_getPos: function () {
		var left, top, matches,
		    el = this._el,
		    style = window.getComputedStyle(el);

		if (L.Browser.any3d) {
			matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
			if (!matches) { return; }
			left = parseFloat(matches[1]);
			top  = parseFloat(matches[2]);
		} else {
			left = parseFloat(style.left);
			top  = parseFloat(style.top);
		}

		return new L.Point(left, top, true);
	},

	_onTransitionEnd: function () {
		L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

		if (!this._inProgress) { return; }
		this._inProgress = false;

		this._el.style[L.DomUtil.TRANSITION] = '';

		// jshint camelcase: false
		// make sure L.DomUtil.getPosition returns the final position value after animation
		this._el._leaflet_pos = this._newPos;

		clearInterval(this._stepTimer);

		this.fire('step').fire('end');
	}

});


/*
 * Extends L.Map to handle panning animations.
 */

L.Map.include({

	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
		options = options || {};

		if (this._panAnim) {
			this._panAnim.stop();
		}

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = L.extend({animate: options.animate}, options.zoom);
				options.pan = L.extend({animate: options.animate}, options.pan);
			}

			// try animating pan or zoom
			var animated = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (animated) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	panBy: function (offset, options) {
		offset = L.point(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new L.PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan unless animate: false specified
		if (options.animate !== false) {
			L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset);
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._floor();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return true;
	}
});


/*
 * L.PosAnimation fallback implementation that powers Leaflet pan animations
 * in browsers that don't support CSS3 Transitions.
 */

L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({

	run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = L.DomUtil.getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		this.fire('start');

		this._animate();
	},

	stop: function () {
		if (!this._inProgress) { return; }

		this._step();
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = L.Util.requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function () {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration));
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		L.DomUtil.setPosition(this._el, pos);

		this.fire('step');
	},

	_complete: function () {
		L.Util.cancelAnimFrame(this._animId);

		this._inProgress = false;
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});


/*
 * Extends L.Map to handle zoom animations.
 */

L.Map.mergeOptions({
	zoomAnimation: true,
	zoomAnimationThreshold: 4
});

if (L.DomUtil.TRANSITION) {

	L.Map.addInitHook(function () {
		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION &&
				L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {
			L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
		}
	});
}

L.Map.include(!L.DomUtil.TRANSITION ? {} : {

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
			origin = this._getCenterLayerPoint()._add(offset);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		this
		    .fire('movestart')
		    .fire('zoomstart');

		this._animateZoom(center, zoom, origin, scale, null, true);

		return true;
	},

	_animateZoom: function (center, zoom, origin, scale, delta, backwards, forTouchZoom) {

		if (!forTouchZoom) {
			this._animatingZoom = true;
		}

		// put transform transition on all layers with leaflet-zoom-animated class
		L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

		// remember what center/zoom to set after animation
		this._animateToCenter = center;
		this._animateToZoom = zoom;

		// disable any dragging during animation
		if (L.Draggable) {
			L.Draggable._disabled = true;
		}

		L.Util.requestAnimFrame(function () {
			this.fire('zoomanim', {
				center: center,
				zoom: zoom,
				origin: origin,
				scale: scale,
				delta: delta,
				backwards: backwards
			});
			// horrible hack to work around a Chrome bug https://github.com/Leaflet/Leaflet/issues/3689
			setTimeout(L.bind(this._onZoomTransitionEnd, this), 250);
		}, this);
	},

	_onZoomTransitionEnd: function () {
		if (!this._animatingZoom) { return; }

		this._animatingZoom = false;

		L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

		L.Util.requestAnimFrame(function () {
			this._resetView(this._animateToCenter, this._animateToZoom, true, true);

			if (L.Draggable) {
				L.Draggable._disabled = false;
			}
		}, this);
	}
});


/*
	Zoom animation logic for L.TileLayer.
*/

L.TileLayer.include({
	_animateZoom: function (e) {
		if (!this._animating) {
			this._animating = true;
			this._prepareBgBuffer();
		}

		var bg = this._bgBuffer,
		    transform = L.DomUtil.TRANSFORM,
		    initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
		    scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);

		bg.style[transform] = e.backwards ?
				scaleStr + ' ' + initialTransform :
				initialTransform + ' ' + scaleStr;
	},

	_endZoomAnim: function () {
		var front = this._tileContainer,
		    bg = this._bgBuffer;

		front.style.visibility = '';
		front.parentNode.appendChild(front); // Bring to fore

		// force reflow
		L.Util.falseFn(bg.offsetWidth);

		var zoom = this._map.getZoom();
		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			this._clearBgBuffer();
		}

		this._animating = false;
	},

	_clearBgBuffer: function () {
		var map = this._map;

		if (map && !map._animatingZoom && !map.touchZoom._zooming) {
			this._bgBuffer.innerHTML = '';
			this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
		}
	},

	_prepareBgBuffer: function () {

		var front = this._tileContainer,
		    bg = this._bgBuffer;

		// if foreground layer doesn't have many tiles but bg layer does,
		// keep the existing bg layer and just zoom it some more

		var bgLoaded = this._getLoadedTilesPercentage(bg),
		    frontLoaded = this._getLoadedTilesPercentage(front);

		if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {

			front.style.visibility = 'hidden';
			this._stopLoadingImages(front);
			return;
		}

		// prepare the buffer to become the front tile pane
		bg.style.visibility = 'hidden';
		bg.style[L.DomUtil.TRANSFORM] = '';

		// switch out the current layer to be the new bg layer (and vice-versa)
		this._tileContainer = bg;
		bg = this._bgBuffer = front;

		this._stopLoadingImages(bg);

		//prevent bg buffer from clearing right after zoom
		clearTimeout(this._clearBgBufferTimer);
	},

	_getLoadedTilesPercentage: function (container) {
		var tiles = container.getElementsByTagName('img'),
		    i, len, count = 0;

		for (i = 0, len = tiles.length; i < len; i++) {
			if (tiles[i].complete) {
				count++;
			}
		}
		return count / len;
	},

	// stops loading all tiles in the background layer
	_stopLoadingImages: function (container) {
		var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
		    i, len, tile;

		for (i = 0, len = tiles.length; i < len; i++) {
			tile = tiles[i];

			if (!tile.complete) {
				tile.onload = L.Util.falseFn;
				tile.onerror = L.Util.falseFn;
				tile.src = L.Util.emptyImageUrl;

				tile.parentNode.removeChild(tile);
			}
		}
	}
});


/*
 * Provides L.Map with convenient shortcuts for using browser geolocation features.
 */

L.Map.include({
	_defaultLocateOptions: {
		watch: false,
		setView: false,
		maxZoom: Infinity,
		timeout: 10000,
		maximumAge: 0,
		enableHighAccuracy: false
	},

	locate: function (/*Object*/ options) {

		options = this._locateOptions = L.extend(this._defaultLocateOptions, options);

		if (!navigator.geolocation) {
			this._handleGeolocationError({
				code: 0,
				message: 'Geolocation not supported.'
			});
			return this;
		}

		var onResponse = L.bind(this._handleGeolocationResponse, this),
			onError = L.bind(this._handleGeolocationError, this);

		if (options.watch) {
			this._locationWatchId =
			        navigator.geolocation.watchPosition(onResponse, onError, options);
		} else {
			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
		}
		return this;
	},

	stopLocate: function () {
		if (navigator.geolocation) {
			navigator.geolocation.clearWatch(this._locationWatchId);
		}
		if (this._locateOptions) {
			this._locateOptions.setView = false;
		}
		return this;
	},

	_handleGeolocationError: function (error) {
		var c = error.code,
		    message = error.message ||
		            (c === 1 ? 'permission denied' :
		            (c === 2 ? 'position unavailable' : 'timeout'));

		if (this._locateOptions.setView && !this._loaded) {
			this.fitWorld();
		}

		this.fire('locationerror', {
			code: c,
			message: 'Geolocation error: ' + message + '.'
		});
	},

	_handleGeolocationResponse: function (pos) {
		var lat = pos.coords.latitude,
		    lng = pos.coords.longitude,
		    latlng = new L.LatLng(lat, lng),

		    latAccuracy = 180 * pos.coords.accuracy / 40075017,
		    lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),

		    bounds = L.latLngBounds(
		            [lat - latAccuracy, lng - lngAccuracy],
		            [lat + latAccuracy, lng + lngAccuracy]),

		    options = this._locateOptions;

		if (options.setView) {
			var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
			this.setView(latlng, zoom);
		}

		var data = {
			latlng: latlng,
			bounds: bounds,
			timestamp: pos.timestamp
		};

		for (var i in pos.coords) {
			if (typeof pos.coords[i] === 'number') {
				data[i] = pos.coords[i];
			}
		}

		this.fire('locationfound', data);
	}
});


}(window, document));
},{}],19:[function(require,module,exports){
var polyline = {};

// Based off of [the offical Google document](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
//
// Some parts from [this implementation](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/PolylineEncoder.js)
// by [Mark McClure](http://facstaff.unca.edu/mcmcclur/)

function encode(coordinate, factor) {
    coordinate = Math.round(coordinate * factor);
    coordinate <<= 1;
    if (coordinate < 0) {
        coordinate = ~coordinate;
    }
    var output = '';
    while (coordinate >= 0x20) {
        output += String.fromCharCode((0x20 | (coordinate & 0x1f)) + 63);
        coordinate >>= 5;
    }
    output += String.fromCharCode(coordinate + 63);
    return output;
}

// This is adapted from the implementation in Project-OSRM
// https://github.com/DennisOSRM/Project-OSRM-Web/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
polyline.decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 5);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
};

polyline.encode = function(coordinates, precision) {
    if (!coordinates.length) return '';

    var factor = Math.pow(10, precision || 5),
        output = encode(coordinates[0][0], factor) + encode(coordinates[0][1], factor);

    for (var i = 1; i < coordinates.length; i++) {
        var a = coordinates[i], b = coordinates[i - 1];
        output += encode(a[0] - b[0], factor);
        output += encode(a[1] - b[1], factor);
    }

    return output;
};

if (typeof module !== undefined) module.exports = polyline;

},{}],20:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout.call(null, timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout.call(null, drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],21:[function(require,module,exports){
module.exports = function(x, dims) {
    if (!dims) dims = 'NSEW';
    if (typeof x !== 'string') return null;
    var r = /^([0-9.]+)°? *(?:([0-9.]+)['’′‘] *)?(?:([0-9.]+)(?:''|"|”|″) *)?([NSEW])?/,
        m = x.match(r);
    if (!m) return null;
    else if (m[4] && dims.indexOf(m[4]) === -1) return null;
    else return (((m[1]) ? parseFloat(m[1]) : 0) +
        ((m[2] ? parseFloat(m[2]) / 60 : 0)) +
        ((m[3] ? parseFloat(m[3]) / 3600 : 0))) *
        ((m[4] && m[4] === 'S' || m[4] === 'W') ? -1 : 1);
};

},{}],22:[function(require,module,exports){
(function (process){
toGeoJSON = (function() {
    'use strict';

    var removeSpace = (/\s*/g),
        trimSpace = (/^\s*|\s*$/g),
        splitSpace = (/\s+/);
    // generate a short, numeric hash of a string
    function okhash(x) {
        if (!x || !x.length) return 0;
        for (var i = 0, h = 0; i < x.length; i++) {
            h = ((h << 5) - h) + x.charCodeAt(i) | 0;
        } return h;
    }
    // all Y children of X
    function get(x, y) { return x.getElementsByTagName(y); }
    function attr(x, y) { return x.getAttribute(y); }
    function attrf(x, y) { return parseFloat(attr(x, y)); }
    // one Y child of X, if any, otherwise null
    function get1(x, y) { var n = get(x, y); return n.length ? n[0] : null; }
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.normalize
    function norm(el) { if (el.normalize) { el.normalize(); } return el; }
    // cast array x into numbers
    function numarray(x) {
        for (var j = 0, o = []; j < x.length; j++) o[j] = parseFloat(x[j]);
        return o;
    }
    function clean(x) {
        var o = {};
        for (var i in x) if (x[i]) o[i] = x[i];
        return o;
    }
    // get the content of a text node, if any
    function nodeVal(x) {
        if (x) { norm(x); }
        return (x && x.firstChild && x.firstChild.nodeValue) || '';
    }
    // get one coordinate from a coordinate array, if any
    function coord1(v) { return numarray(v.replace(removeSpace, '').split(',')); }
    // get all coordinates from a coordinate array as [[],[]]
    function coord(v) {
        var coords = v.replace(trimSpace, '').split(splitSpace),
            o = [];
        for (var i = 0; i < coords.length; i++) {
            o.push(coord1(coords[i]));
        }
        return o;
    }
    function coordPair(x) {
        var ll = [attrf(x, 'lon'), attrf(x, 'lat')],
            ele = get1(x, 'ele'),
            time = get1(x, 'time');
        if (ele) ll.push(parseFloat(nodeVal(ele)));
        return {
            coordinates: ll,
            time: time ? nodeVal(time) : null
        };
    }

    // create a new feature collection parent object
    function fc() {
        return {
            type: 'FeatureCollection',
            features: []
        };
    }

    var serializer;
    if (typeof XMLSerializer !== 'undefined') {
        serializer = new XMLSerializer();
    // only require xmldom in a node environment
    } else if (typeof exports === 'object' && typeof process === 'object' && !process.browser) {
        serializer = new (require('xmldom').XMLSerializer)();
    }
    function xml2str(str) {
        // IE9 will create a new XMLSerializer but it'll crash immediately.
        if (str.xml !== undefined) return str.xml;
        return serializer.serializeToString(str);
    }

    var t = {
        kml: function(doc) {

            var gj = fc(),
                // styleindex keeps track of hashed styles in order to match features
                styleIndex = {},
                // atomic geospatial types supported by KML - MultiGeometry is
                // handled separately
                geotypes = ['Polygon', 'LineString', 'Point', 'Track', 'gx:Track'],
                // all root placemarks in the file
                placemarks = get(doc, 'Placemark'),
                styles = get(doc, 'Style');

            for (var k = 0; k < styles.length; k++) {
                styleIndex['#' + attr(styles[k], 'id')] = okhash(xml2str(styles[k])).toString(16);
            }
            for (var j = 0; j < placemarks.length; j++) {
                gj.features = gj.features.concat(getPlacemark(placemarks[j]));
            }
            function kmlColor(v) {
                var color, opacity;
                v = v || "";
                if (v.substr(0, 1) === "#") v = v.substr(1);
                if (v.length === 6 || v.length === 3) color = v;
                if (v.length === 8) {
                    opacity = parseInt(v.substr(0, 2), 16) / 255;
                    color = v.substr(2);
                }
                return [color, isNaN(opacity) ? undefined : opacity];
            }
            function gxCoord(v) { return numarray(v.split(' ')); }
            function gxCoords(root) {
                var elems = get(root, 'coord', 'gx'), coords = [], times = [];
                if (elems.length === 0) elems = get(root, 'gx:coord');
                for (var i = 0; i < elems.length; i++) coords.push(gxCoord(nodeVal(elems[i])));
                var timeElems = get(root, 'when');
                for (var i = 0; i < timeElems.length; i++) times.push(nodeVal(timeElems[i]));
                return {
                    coords: coords,
                    times: times
                };
            }
            function getGeometry(root) {
                var geomNode, geomNodes, i, j, k, geoms = [], coordTimes = [];
                if (get1(root, 'MultiGeometry')) return getGeometry(get1(root, 'MultiGeometry'));
                if (get1(root, 'MultiTrack')) return getGeometry(get1(root, 'MultiTrack'));
                if (get1(root, 'gx:MultiTrack')) return getGeometry(get1(root, 'gx:MultiTrack'));
                for (i = 0; i < geotypes.length; i++) {
                    geomNodes = get(root, geotypes[i]);
                    if (geomNodes) {
                        for (j = 0; j < geomNodes.length; j++) {
                            geomNode = geomNodes[j];
                            if (geotypes[i] == 'Point') {
                                geoms.push({
                                    type: 'Point',
                                    coordinates: coord1(nodeVal(get1(geomNode, 'coordinates')))
                                });
                            } else if (geotypes[i] == 'LineString') {
                                geoms.push({
                                    type: 'LineString',
                                    coordinates: coord(nodeVal(get1(geomNode, 'coordinates')))
                                });
                            } else if (geotypes[i] == 'Polygon') {
                                var rings = get(geomNode, 'LinearRing'),
                                    coords = [];
                                for (k = 0; k < rings.length; k++) {
                                    coords.push(coord(nodeVal(get1(rings[k], 'coordinates'))));
                                }
                                geoms.push({
                                    type: 'Polygon',
                                    coordinates: coords
                                });
                            } else if (geotypes[i] == 'Track' ||
                                geotypes[i] == 'gx:Track') {
                                var track = gxCoords(geomNode);
                                geoms.push({
                                    type: 'LineString',
                                    coordinates: track.coords
                                });
                                if (track.times.length) coordTimes.push(track.times);
                            }
                        }
                    }
                }
                return {
                    geoms: geoms,
                    coordTimes: coordTimes
                };
            }
            function getPlacemark(root) {
                var geomsAndTimes = getGeometry(root), i, properties = {},
                    name = nodeVal(get1(root, 'name')),
                    styleUrl = nodeVal(get1(root, 'styleUrl')),
                    description = nodeVal(get1(root, 'description')),
                    timeSpan = get1(root, 'TimeSpan'),
                    extendedData = get1(root, 'ExtendedData'),
                    lineStyle = get1(root, 'LineStyle'),
                    polyStyle = get1(root, 'PolyStyle');

                if (!geomsAndTimes.geoms.length) return [];
                if (name) properties.name = name;
                if (styleUrl && styleIndex[styleUrl]) {
                    properties.styleUrl = styleUrl;
                    properties.styleHash = styleIndex[styleUrl];
                }
                if (description) properties.description = description;
                if (timeSpan) {
                    var begin = nodeVal(get1(timeSpan, 'begin'));
                    var end = nodeVal(get1(timeSpan, 'end'));
                    properties.timespan = { begin: begin, end: end };
                }
                if (lineStyle) {
                    var linestyles = kmlColor(nodeVal(get1(lineStyle, 'color'))),
                        color = linestyles[0],
                        opacity = linestyles[1],
                        width = parseFloat(nodeVal(get1(lineStyle, 'width')));
                    if (color) properties.stroke = color;
                    if (!isNaN(opacity)) properties['stroke-opacity'] = opacity;
                    if (!isNaN(width)) properties['stroke-width'] = width;
                }
                if (polyStyle) {
                    var polystyles = kmlColor(nodeVal(get1(polyStyle, 'color'))),
                        pcolor = polystyles[0],
                        popacity = polystyles[1],
                        fill = nodeVal(get1(polyStyle, 'fill')),
                        outline = nodeVal(get1(polyStyle, 'outline'));
                    if (pcolor) properties.fill = pcolor;
                    if (!isNaN(popacity)) properties['fill-opacity'] = popacity;
                    if (fill) properties['fill-opacity'] = fill === "1" ? 1 : 0;
                    if (outline) properties['stroke-opacity'] = outline === "1" ? 1 : 0;
                }
                if (extendedData) {
                    var datas = get(extendedData, 'Data'),
                        simpleDatas = get(extendedData, 'SimpleData');

                    for (i = 0; i < datas.length; i++) {
                        properties[datas[i].getAttribute('name')] = nodeVal(get1(datas[i], 'value'));
                    }
                    for (i = 0; i < simpleDatas.length; i++) {
                        properties[simpleDatas[i].getAttribute('name')] = nodeVal(simpleDatas[i]);
                    }
                }
                if (geomsAndTimes.coordTimes.length) {
                    properties.coordTimes = (geomsAndTimes.coordTimes.length === 1) ?
                        geomsAndTimes.coordTimes[0] : geomsAndTimes.coordTimes;
                }
                var feature = {
                    type: 'Feature',
                    geometry: (geomsAndTimes.geoms.length === 1) ? geomsAndTimes.geoms[0] : {
                        type: 'GeometryCollection',
                        geometries: geomsAndTimes.geoms
                    },
                    properties: properties
                };
                if (attr(root, 'id')) feature.id = attr(root, 'id');
                return [feature];
            }
            return gj;
        },
        gpx: function(doc) {
            var i,
                tracks = get(doc, 'trk'),
                routes = get(doc, 'rte'),
                waypoints = get(doc, 'wpt'),
                // a feature collection
                gj = fc(),
                feature;
            for (i = 0; i < tracks.length; i++) {
                feature = getTrack(tracks[i]);
                if (feature) gj.features.push(feature);
            }
            for (i = 0; i < routes.length; i++) {
                feature = getRoute(routes[i]);
                if (feature) gj.features.push(feature);
            }
            for (i = 0; i < waypoints.length; i++) {
                gj.features.push(getPoint(waypoints[i]));
            }
            function getPoints(node, pointname) {
                var pts = get(node, pointname), line = [], times = [],
                    l = pts.length;
                if (l < 2) return;  // Invalid line in GeoJSON
                for (var i = 0; i < l; i++) {
                    var c = coordPair(pts[i]);
                    line.push(c.coordinates);
                    if (c.time) times.push(c.time);
                }
                return {
                    line: line,
                    times: times
                };
            }
            function getTrack(node) {
                var segments = get(node, 'trkseg'), track = [], times = [], line;
                for (var i = 0; i < segments.length; i++) {
                    line = getPoints(segments[i], 'trkpt');
                    if (line.line) track.push(line.line);
                    if (line.times.length) times.push(line.times);
                }
                if (track.length === 0) return;
                var properties = getProperties(node);
                if (times.length) properties.coordTimes = track.length === 1 ? times[0] : times;
                return {
                    type: 'Feature',
                    properties: properties,
                    geometry: {
                        type: track.length === 1 ? 'LineString' : 'MultiLineString',
                        coordinates: track.length === 1 ? track[0] : track
                    }
                };
            }
            function getRoute(node) {
                var line = getPoints(node, 'rtept');
                if (!line) return;
                var routeObj = {
                    type: 'Feature',
                    properties: getProperties(node),
                    geometry: {
                        type: 'LineString',
                        coordinates: line
                    }
                };
                if (line.times.length) routeObj.geometry.times = line.times;
                return routeObj;
            }
            function getPoint(node) {
                var prop = getProperties(node);
                prop.sym = nodeVal(get1(node, 'sym'));
                return {
                    type: 'Feature',
                    properties: prop,
                    geometry: {
                        type: 'Point',
                        coordinates: coordPair(node).coordinates
                    }
                };
            }
            function getProperties(node) {
                var meta = ['name', 'desc', 'author', 'copyright', 'link',
                            'time', 'keywords'],
                    prop = {},
                    k;
                for (k = 0; k < meta.length; k++) {
                    prop[meta[k]] = nodeVal(get1(node, meta[k]));
                }
                return clean(prop);
            }
            return gj;
        }
    };
    return t;
})();

if (typeof module !== 'undefined') module.exports = toGeoJSON;

}).call(this,require('_process'))
},{"_process":20,"xmldom":11}],23:[function(require,module,exports){
!function() {
  var topojson = {
    version: "1.6.8",
    mesh: function(topology) { return object(topology, meshArcs.apply(this, arguments)); },
    meshArcs: meshArcs,
    merge: function(topology) { return object(topology, mergeArcs.apply(this, arguments)); },
    mergeArcs: mergeArcs,
    feature: featureOrCollection,
    neighbors: neighbors,
    presimplify: presimplify
  };

  function stitchArcs(topology, arcs) {
    var stitchedArcs = {},
        fragmentByStart = {},
        fragmentByEnd = {},
        fragments = [],
        emptyIndex = -1;

    // Stitch empty arcs first, since they may be subsumed by other arcs.
    arcs.forEach(function(i, j) {
      var arc = topology.arcs[i < 0 ? ~i : i], t;
      if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
        t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
      }
    });

    arcs.forEach(function(i) {
      var e = ends(i),
          start = e[0],
          end = e[1],
          f, g;

      if (f = fragmentByEnd[start]) {
        delete fragmentByEnd[f.end];
        f.push(i);
        f.end = end;
        if (g = fragmentByStart[end]) {
          delete fragmentByStart[g.start];
          var fg = g === f ? f : f.concat(g);
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByStart[end]) {
        delete fragmentByStart[f.start];
        f.unshift(i);
        f.start = start;
        if (g = fragmentByEnd[start]) {
          delete fragmentByEnd[g.end];
          var gf = g === f ? f : g.concat(f);
          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else {
        f = [i];
        fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
      }
    });

    function ends(i) {
      var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
      if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
      else p1 = arc[arc.length - 1];
      return i < 0 ? [p1, p0] : [p0, p1];
    }

    function flush(fragmentByEnd, fragmentByStart) {
      for (var k in fragmentByEnd) {
        var f = fragmentByEnd[k];
        delete fragmentByStart[f.start];
        delete f.start;
        delete f.end;
        f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
        fragments.push(f);
      }
    }

    flush(fragmentByEnd, fragmentByStart);
    flush(fragmentByStart, fragmentByEnd);
    arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

    return fragments;
  }

  function meshArcs(topology, o, filter) {
    var arcs = [];

    if (arguments.length > 1) {
      var geomsByArc = [],
          geom;

      function arc(i) {
        var j = i < 0 ? ~i : i;
        (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
      }

      function line(arcs) {
        arcs.forEach(arc);
      }

      function polygon(arcs) {
        arcs.forEach(line);
      }

      function geometry(o) {
        if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
        else if (o.type in geometryType) geom = o, geometryType[o.type](o.arcs);
      }

      var geometryType = {
        LineString: line,
        MultiLineString: polygon,
        Polygon: polygon,
        MultiPolygon: function(arcs) { arcs.forEach(polygon); }
      };

      geometry(o);

      geomsByArc.forEach(arguments.length < 3
          ? function(geoms) { arcs.push(geoms[0].i); }
          : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
    } else {
      for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
    }

    return {type: "MultiLineString", arcs: stitchArcs(topology, arcs)};
  }

  function mergeArcs(topology, objects) {
    var polygonsByArc = {},
        polygons = [],
        components = [];

    objects.forEach(function(o) {
      if (o.type === "Polygon") register(o.arcs);
      else if (o.type === "MultiPolygon") o.arcs.forEach(register);
    });

    function register(polygon) {
      polygon.forEach(function(ring) {
        ring.forEach(function(arc) {
          (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
        });
      });
      polygons.push(polygon);
    }

    function exterior(ring) {
      return cartesianRingArea(object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]) > 0; // TODO allow spherical?
    }

    polygons.forEach(function(polygon) {
      if (!polygon._) {
        var component = [],
            neighbors = [polygon];
        polygon._ = 1;
        components.push(component);
        while (polygon = neighbors.pop()) {
          component.push(polygon);
          polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
              polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
                if (!polygon._) {
                  polygon._ = 1;
                  neighbors.push(polygon);
                }
              });
            });
          });
        }
      }
    });

    polygons.forEach(function(polygon) {
      delete polygon._;
    });

    return {
      type: "MultiPolygon",
      arcs: components.map(function(polygons) {
        var arcs = [];

        // Extract the exterior (unique) arcs.
        polygons.forEach(function(polygon) {
          polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
              if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
                arcs.push(arc);
              }
            });
          });
        });

        // Stitch the arcs into one or more rings.
        arcs = stitchArcs(topology, arcs);

        // If more than one ring is returned,
        // at most one of these rings can be the exterior;
        // this exterior ring has the same winding order
        // as any exterior ring in the original polygons.
        if ((n = arcs.length) > 1) {
          var sgn = exterior(polygons[0][0]);
          for (var i = 0, t; i < n; ++i) {
            if (sgn === exterior(arcs[i])) {
              t = arcs[0], arcs[0] = arcs[i], arcs[i] = t;
              break;
            }
          }
        }

        return arcs;
      })
    };
  }

  function featureOrCollection(topology, o) {
    return o.type === "GeometryCollection" ? {
      type: "FeatureCollection",
      features: o.geometries.map(function(o) { return feature(topology, o); })
    } : feature(topology, o);
  }

  function feature(topology, o) {
    var f = {
      type: "Feature",
      id: o.id,
      properties: o.properties || {},
      geometry: object(topology, o)
    };
    if (o.id == null) delete f.id;
    return f;
  }

  function object(topology, o) {
    var absolute = transformAbsolute(topology.transform),
        arcs = topology.arcs;

    function arc(i, points) {
      if (points.length) points.pop();
      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, p; k < n; ++k) {
        points.push(p = a[k].slice());
        absolute(p, k);
      }
      if (i < 0) reverse(points, n);
    }

    function point(p) {
      p = p.slice();
      absolute(p, 0);
      return p;
    }

    function line(arcs) {
      var points = [];
      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
      if (points.length < 2) points.push(points[0].slice());
      return points;
    }

    function ring(arcs) {
      var points = line(arcs);
      while (points.length < 4) points.push(points[0].slice());
      return points;
    }

    function polygon(arcs) {
      return arcs.map(ring);
    }

    function geometry(o) {
      var t = o.type;
      return t === "GeometryCollection" ? {type: t, geometries: o.geometries.map(geometry)}
          : t in geometryType ? {type: t, coordinates: geometryType[t](o)}
          : null;
    }

    var geometryType = {
      Point: function(o) { return point(o.coordinates); },
      MultiPoint: function(o) { return o.coordinates.map(point); },
      LineString: function(o) { return line(o.arcs); },
      MultiLineString: function(o) { return o.arcs.map(line); },
      Polygon: function(o) { return polygon(o.arcs); },
      MultiPolygon: function(o) { return o.arcs.map(polygon); }
    };

    return geometry(o);
  }

  function reverse(array, n) {
    var t, j = array.length, i = j - n; while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
  }

  function bisect(a, x) {
    var lo = 0, hi = a.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (a[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function neighbors(objects) {
    var indexesByArc = {}, // arc index -> array of object indexes
        neighbors = objects.map(function() { return []; });

    function line(arcs, i) {
      arcs.forEach(function(a) {
        if (a < 0) a = ~a;
        var o = indexesByArc[a];
        if (o) o.push(i);
        else indexesByArc[a] = [i];
      });
    }

    function polygon(arcs, i) {
      arcs.forEach(function(arc) { line(arc, i); });
    }

    function geometry(o, i) {
      if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
      else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
    }

    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
    };

    objects.forEach(geometry);

    for (var i in indexesByArc) {
      for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
        for (var k = j + 1; k < m; ++k) {
          var ij = indexes[j], ik = indexes[k], n;
          if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
          if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
        }
      }
    }

    return neighbors;
  }

  function presimplify(topology, triangleArea) {
    var absolute = transformAbsolute(topology.transform),
        relative = transformRelative(topology.transform),
        heap = minAreaHeap(),
        maxArea = 0,
        triangle;

    if (!triangleArea) triangleArea = cartesianTriangleArea;

    topology.arcs.forEach(function(arc) {
      var triangles = [];

      arc.forEach(absolute);

      for (var i = 1, n = arc.length - 1; i < n; ++i) {
        triangle = arc.slice(i - 1, i + 2);
        triangle[1][2] = triangleArea(triangle);
        triangles.push(triangle);
        heap.push(triangle);
      }

      // Always keep the arc endpoints!
      arc[0][2] = arc[n][2] = Infinity;

      for (var i = 0, n = triangles.length; i < n; ++i) {
        triangle = triangles[i];
        triangle.previous = triangles[i - 1];
        triangle.next = triangles[i + 1];
      }
    });

    while (triangle = heap.pop()) {
      var previous = triangle.previous,
          next = triangle.next;

      // If the area of the current point is less than that of the previous point
      // to be eliminated, use the latter's area instead. This ensures that the
      // current point cannot be eliminated without eliminating previously-
      // eliminated points.
      if (triangle[1][2] < maxArea) triangle[1][2] = maxArea;
      else maxArea = triangle[1][2];

      if (previous) {
        previous.next = next;
        previous[2] = triangle[2];
        update(previous);
      }

      if (next) {
        next.previous = previous;
        next[0] = triangle[0];
        update(next);
      }
    }

    topology.arcs.forEach(function(arc) {
      arc.forEach(relative);
    });

    function update(triangle) {
      heap.remove(triangle);
      triangle[1][2] = triangleArea(triangle);
      heap.push(triangle);
    }

    return topology;
  };

  function cartesianRingArea(ring) {
    var i = -1,
        n = ring.length,
        a,
        b = ring[n - 1],
        area = 0;

    while (++i < n) {
      a = b;
      b = ring[i];
      area += a[0] * b[1] - a[1] * b[0];
    }

    return area * .5;
  }

  function cartesianTriangleArea(triangle) {
    var a = triangle[0], b = triangle[1], c = triangle[2];
    return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]));
  }

  function compareArea(a, b) {
    return a[1][2] - b[1][2];
  }

  function minAreaHeap() {
    var heap = {},
        array = [],
        size = 0;

    heap.push = function(object) {
      up(array[object._ = size] = object, size++);
      return size;
    };

    heap.pop = function() {
      if (size <= 0) return;
      var removed = array[0], object;
      if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
      return removed;
    };

    heap.remove = function(removed) {
      var i = removed._, object;
      if (array[i] !== removed) return; // invalid request
      if (i !== --size) object = array[size], (compareArea(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
      return i;
    };

    function up(object, i) {
      while (i > 0) {
        var j = ((i + 1) >> 1) - 1,
            parent = array[j];
        if (compareArea(object, parent) >= 0) break;
        array[parent._ = i] = parent;
        array[object._ = i = j] = object;
      }
    }

    function down(object, i) {
      while (true) {
        var r = (i + 1) << 1,
            l = r - 1,
            j = i,
            child = array[j];
        if (l < size && compareArea(array[l], child) < 0) child = array[j = l];
        if (r < size && compareArea(array[r], child) < 0) child = array[j = r];
        if (j === i) break;
        array[child._ = i] = child;
        array[object._ = i = j] = object;
      }
    }

    return heap;
  }

  function transformAbsolute(transform) {
    if (!transform) return noop;
    var x0,
        y0,
        kx = transform.scale[0],
        ky = transform.scale[1],
        dx = transform.translate[0],
        dy = transform.translate[1];
    return function(point, i) {
      if (!i) x0 = y0 = 0;
      point[0] = (x0 += point[0]) * kx + dx;
      point[1] = (y0 += point[1]) * ky + dy;
    };
  }

  function transformRelative(transform) {
    if (!transform) return noop;
    var x0,
        y0,
        kx = transform.scale[0],
        ky = transform.scale[1],
        dx = transform.translate[0],
        dy = transform.translate[1];
    return function(point, i) {
      if (!i) x0 = y0 = 0;
      var x1 = (point[0] - dx) / kx | 0,
          y1 = (point[1] - dy) / ky | 0;
      point[0] = x1 - x0;
      point[1] = y1 - y0;
      x0 = x1;
      y0 = y1;
    };
  }

  function noop() {}

  if (typeof define === "function" && define.amd) define(topojson);
  else if (typeof module === "object" && module.exports) module.exports = topojson;
  else this.topojson = topojson;
}();

},{}],24:[function(require,module,exports){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  var match = id.match(/[^\/]+\.vue$/)
  return match ? match[0] : id
}

},{}],25:[function(require,module,exports){
/*!
 * vue-router v0.7.13
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.VueRouter = factory();
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0, l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  function map (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var noWarning = false;
  function warn(msg) {
    if (!noWarning && typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  function tryDecode(uri, asComponent) {
    try {
      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
    } catch (e) {
      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
    }
  }

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(callback) {
      var string = this.string,
          ch;

      for (var i = 0, l = string.length; i < l; i++) {
        ch = string.charAt(i);
        callback({ validChars: ch });
      }
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "/", repeat: true });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "", repeat: true });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar() {},
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        specificity.val += '2';
        names.push(match[1]);
      } else if (segment === "") {
        results.push(new EpsilonSegment());
        specificity.val += '1';
      } else {
        results.push(new StaticSegment(segment));
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype = {
    get: function get(charSpec) {
      var nextStates = this.nextStates;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      // DEBUG "Processing `" + ch + "`:"
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      // DEBUG "  " + debugState(this)
      var returned = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }

    /** IF DEBUG
    , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
    END IF **/
  };

  /** IF DEBUG
  function debug(log) {
    console.log(log);
  }

  function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
  END IF **/

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    return tryDecode(part, true);
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = [],
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0, l = routes.length; i < l; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0, m = segments.length; j < m; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = addSegment(currentState, segment);
          regex += segment.regex();
        }

        var handler = { handler: route.handler, names: names };
        handlers.push(handler);
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name],
          result = [];
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0, l = value.length; j < l; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path, silent) {
      noWarning = silent;
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        if (queryString) {
          queryParams = this.parseQueryString(queryString);
        }
      }

      path = tryDecode(path);
      if (!path) return;

      // DEBUG GROUP path

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      // END DEBUG GROUP

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = map;

  var genQuery = RouteRecognizer.prototype.generateQueryString;

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * Warn stuff.
   *
   * @param {String} msg
   */

  function warn$1(msg) {
    /* istanbul ignore next */
    if (typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  /**
   * Resolve a relative path.
   *
   * @param {String} base
   * @param {String} relative
   * @param {Boolean} append
   * @return {String}
   */

  function resolvePath(base, relative, append) {
    var query = base.match(/(\?.*)$/);
    if (query) {
      query = query[1];
      base = base.slice(0, -query.length);
    }
    // a query!
    if (relative.charAt(0) === '?') {
      return base + relative;
    }
    var stack = base.split('/');
    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }
    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }
    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }
    return stack.join('/');
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig(component, name) {
    var options = component && (component.$options || component.options);
    return options && options.route && options.route[name];
  }

  /**
   * Resolve an async component factory. Have to do a dirty
   * mock here because of Vue core's internal API depends on
   * an ID check.
   *
   * @param {Object} handler
   * @param {Function} cb
   */

  var resolver = undefined;

  function resolveAsyncComponent(handler, cb) {
    if (!resolver) {
      resolver = {
        resolve: exports$1.Vue.prototype._resolveComponent,
        $options: {
          components: {
            _: handler.component
          }
        }
      };
    } else {
      resolver.$options.components._ = handler.component;
    }
    resolver.resolve('_', function (Component) {
      handler.component = Component;
      cb(Component);
    });
  }

  /**
   * Map the dynamic segments in a path to params.
   *
   * @param {String} path
   * @param {Object} params
   * @param {Object} query
   */

  function mapParams(path, params, query) {
    if (params === undefined) params = {};

    path = path.replace(/:([^\/]+)/g, function (_, key) {
      var val = params[key];
      /* istanbul ignore if */
      if (!val) {
        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
      }
      return val || '';
    });
    if (query) {
      path += genQuery(query);
    }
    return path;
  }

  var hashRE = /#.*$/;

  var HTML5History = (function () {
    function HTML5History(_ref) {
      var root = _ref.root;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HTML5History);

      if (root && root !== '/') {
        // make sure there's the starting slash
        if (root.charAt(0) !== '/') {
          root = '/' + root;
        }
        // remove trailing slash
        this.root = root.replace(/\/$/, '');
        this.rootRE = new RegExp('^\\' + this.root);
      } else {
        this.root = null;
      }
      this.onChange = onChange;
      // check base tag
      var baseEl = document.querySelector('base');
      this.base = baseEl && baseEl.getAttribute('href');
    }

    HTML5History.prototype.start = function start() {
      var _this = this;

      this.listener = function (e) {
        var url = location.pathname + location.search;
        if (_this.root) {
          url = url.replace(_this.rootRE, '');
        }
        _this.onChange(url, e && e.state, location.hash);
      };
      window.addEventListener('popstate', this.listener);
      this.listener();
    };

    HTML5History.prototype.stop = function stop() {
      window.removeEventListener('popstate', this.listener);
    };

    HTML5History.prototype.go = function go(path, replace, append) {
      var url = this.formatPath(path, append);
      if (replace) {
        history.replaceState({}, '', url);
      } else {
        // record scroll position by replacing current state
        history.replaceState({
          pos: {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }, '', location.href);
        // then push new state
        history.pushState({}, '', url);
      }
      var hashMatch = path.match(hashRE);
      var hash = hashMatch && hashMatch[0];
      path = url
      // strip hash so it doesn't mess up params
      .replace(hashRE, '')
      // remove root before matching
      .replace(this.rootRE, '');
      this.onChange(path, null, hash);
    };

    HTML5History.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/'
      // absolute path
      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
    };

    return HTML5History;
  })();

  var HashHistory = (function () {
    function HashHistory(_ref) {
      var hashbang = _ref.hashbang;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HashHistory);

      this.hashbang = hashbang;
      this.onChange = onChange;
    }

    HashHistory.prototype.start = function start() {
      var self = this;
      this.listener = function () {
        var path = location.hash;
        var raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
          raw = '/' + raw;
        }
        var formattedPath = self.formatPath(raw);
        if (formattedPath !== path) {
          location.replace(formattedPath);
          return;
        }
        // determine query
        // note it's possible to have queries in both the actual URL
        // and the hash fragment itself.
        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
        self.onChange(path.replace(/^#!?/, '') + query);
      };
      window.addEventListener('hashchange', this.listener);
      this.listener();
    };

    HashHistory.prototype.stop = function stop() {
      window.removeEventListener('hashchange', this.listener);
    };

    HashHistory.prototype.go = function go(path, replace, append) {
      path = this.formatPath(path, append);
      if (replace) {
        location.replace(path);
      } else {
        location.hash = path;
      }
    };

    HashHistory.prototype.formatPath = function formatPath(path, append) {
      var isAbsoloute = path.charAt(0) === '/';
      var prefix = '#' + (this.hashbang ? '!' : '');
      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
    };

    return HashHistory;
  })();

  var AbstractHistory = (function () {
    function AbstractHistory(_ref) {
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, AbstractHistory);

      this.onChange = onChange;
      this.currentPath = '/';
    }

    AbstractHistory.prototype.start = function start() {
      this.onChange('/');
    };

    AbstractHistory.prototype.stop = function stop() {
      // noop
    };

    AbstractHistory.prototype.go = function go(path, replace, append) {
      path = this.currentPath = this.formatPath(path, append);
      this.onChange(path);
    };

    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
    };

    return AbstractHistory;
  })();

  /**
   * Determine the reusability of an existing router view.
   *
   * @param {Directive} view
   * @param {Object} handler
   * @param {Transition} transition
   */

  function canReuse(view, handler, transition) {
    var component = view.childVM;
    if (!component || !handler) {
      return false;
    }
    // important: check view.Component here because it may
    // have been changed in activate hook
    if (view.Component !== handler.component) {
      return false;
    }
    var canReuseFn = getRouteConfig(component, 'canReuse');
    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
      to: transition.to,
      from: transition.from
    }) : true; // defaults to true
  }

  /**
   * Check if a component can deactivate.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function canDeactivate(view, transition, next) {
    var fromComponent = view.childVM;
    var hook = getRouteConfig(fromComponent, 'canDeactivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, fromComponent, next, {
        expectBoolean: true
      });
    }
  }

  /**
   * Check if a component can activate.
   *
   * @param {Object} handler
   * @param {Transition} transition
   * @param {Function} next
   */

  function canActivate(handler, transition, next) {
    resolveAsyncComponent(handler, function (Component) {
      // have to check due to async-ness
      if (transition.aborted) {
        return;
      }
      // determine if this component can be activated
      var hook = getRouteConfig(Component, 'canActivate');
      if (!hook) {
        next();
      } else {
        transition.callHook(hook, null, next, {
          expectBoolean: true
        });
      }
    });
  }

  /**
   * Call deactivate hooks for existing router-views.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function deactivate(view, transition, next) {
    var component = view.childVM;
    var hook = getRouteConfig(component, 'deactivate');
    if (!hook) {
      next();
    } else {
      transition.callHooks(hook, component, next);
    }
  }

  /**
   * Activate / switch component for a router-view.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Number} depth
   * @param {Function} [cb]
   */

  function activate(view, transition, depth, cb, reuse) {
    var handler = transition.activateQueue[depth];
    if (!handler) {
      saveChildView(view);
      if (view._bound) {
        view.setComponent(null);
      }
      cb && cb();
      return;
    }

    var Component = view.Component = handler.component;
    var activateHook = getRouteConfig(Component, 'activate');
    var dataHook = getRouteConfig(Component, 'data');
    var waitForData = getRouteConfig(Component, 'waitForData');

    view.depth = depth;
    view.activated = false;

    var component = undefined;
    var loading = !!(dataHook && !waitForData);

    // "reuse" is a flag passed down when the parent view is
    // either reused via keep-alive or as a child of a kept-alive view.
    // of course we can only reuse if the current kept-alive instance
    // is of the correct type.
    reuse = reuse && view.childVM && view.childVM.constructor === Component;

    if (reuse) {
      // just reuse
      component = view.childVM;
      component.$loadingRouteData = loading;
    } else {
      saveChildView(view);

      // unbuild current component. this step also destroys
      // and removes all nested child views.
      view.unbuild(true);

      // build the new component. this will also create the
      // direct child view of the current one. it will register
      // itself as view.childView.
      component = view.build({
        _meta: {
          $loadingRouteData: loading
        },
        created: function created() {
          this._routerView = view;
        }
      });

      // handle keep-alive.
      // when a kept-alive child vm is restored, we need to
      // add its cached child views into the router's view list,
      // and also properly update current view's child view.
      if (view.keepAlive) {
        component.$loadingRouteData = loading;
        var cachedChildView = component._keepAliveRouterView;
        if (cachedChildView) {
          view.childView = cachedChildView;
          component._keepAliveRouterView = null;
        }
      }
    }

    // cleanup the component in case the transition is aborted
    // before the component is ever inserted.
    var cleanup = function cleanup() {
      component.$destroy();
    };

    // actually insert the component and trigger transition
    var insert = function insert() {
      if (reuse) {
        cb && cb();
        return;
      }
      var router = transition.router;
      if (router._rendered || router._transitionOnLoad) {
        view.transition(component);
      } else {
        // no transition on first render, manual transition
        /* istanbul ignore if */
        if (view.setCurrent) {
          // 0.12 compat
          view.setCurrent(component);
        } else {
          // 1.0
          view.childVM = component;
        }
        component.$before(view.anchor, null, false);
      }
      cb && cb();
    };

    var afterData = function afterData() {
      // activate the child view
      if (view.childView) {
        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
      }
      insert();
    };

    // called after activation hook is resolved
    var afterActivate = function afterActivate() {
      view.activated = true;
      if (dataHook && waitForData) {
        // wait until data loaded to insert
        loadData(component, transition, dataHook, afterData, cleanup);
      } else {
        // load data and insert at the same time
        if (dataHook) {
          loadData(component, transition, dataHook);
        }
        afterData();
      }
    };

    if (activateHook) {
      transition.callHooks(activateHook, component, afterActivate, {
        cleanup: cleanup,
        postActivate: true
      });
    } else {
      afterActivate();
    }
  }

  /**
   * Reuse a view, just reload data if necessary.
   *
   * @param {Directive} view
   * @param {Transition} transition
   */

  function reuse(view, transition) {
    var component = view.childVM;
    var dataHook = getRouteConfig(component, 'data');
    if (dataHook) {
      loadData(component, transition, dataHook);
    }
  }

  /**
   * Asynchronously load and apply data to component.
   *
   * @param {Vue} component
   * @param {Transition} transition
   * @param {Function} hook
   * @param {Function} cb
   * @param {Function} cleanup
   */

  function loadData(component, transition, hook, cb, cleanup) {
    component.$loadingRouteData = true;
    transition.callHooks(hook, component, function () {
      component.$loadingRouteData = false;
      component.$emit('route-data-loaded', component);
      cb && cb();
    }, {
      cleanup: cleanup,
      postActivate: true,
      processData: function processData(data) {
        // handle promise sugar syntax
        var promises = [];
        if (isPlainObject(data)) {
          Object.keys(data).forEach(function (key) {
            var val = data[key];
            if (isPromise(val)) {
              promises.push(val.then(function (resolvedVal) {
                component.$set(key, resolvedVal);
              }));
            } else {
              component.$set(key, val);
            }
          });
        }
        if (promises.length) {
          return promises[0].constructor.all(promises);
        }
      }
    });
  }

  /**
   * Save the child view for a kept-alive view so that
   * we can restore it when it is switched back to.
   *
   * @param {Directive} view
   */

  function saveChildView(view) {
    if (view.keepAlive && view.childVM && view.childView) {
      view.childVM._keepAliveRouterView = view.childView;
    }
    view.childView = null;
  }

  /**
   * Check plain object.
   *
   * @param {*} val
   */

  function isPlainObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  /**
   * A RouteTransition object manages the pipeline of a
   * router-view switching process. This is also the object
   * passed into user route hooks.
   *
   * @param {Router} router
   * @param {Route} to
   * @param {Route} from
   */

  var RouteTransition = (function () {
    function RouteTransition(router, to, from) {
      babelHelpers.classCallCheck(this, RouteTransition);

      this.router = router;
      this.to = to;
      this.from = from;
      this.next = null;
      this.aborted = false;
      this.done = false;
    }

    /**
     * Abort current transition and return to previous location.
     */

    RouteTransition.prototype.abort = function abort() {
      if (!this.aborted) {
        this.aborted = true;
        // if the root path throws an error during validation
        // on initial load, it gets caught in an infinite loop.
        var abortingOnLoad = !this.from.path && this.to.path === '/';
        if (!abortingOnLoad) {
          this.router.replace(this.from.path || '/');
        }
      }
    };

    /**
     * Abort current transition and redirect to a new location.
     *
     * @param {String} path
     */

    RouteTransition.prototype.redirect = function redirect(path) {
      if (!this.aborted) {
        this.aborted = true;
        if (typeof path === 'string') {
          path = mapParams(path, this.to.params, this.to.query);
        } else {
          path.params = path.params || this.to.params;
          path.query = path.query || this.to.query;
        }
        this.router.replace(path);
      }
    };

    /**
     * A router view transition's pipeline can be described as
     * follows, assuming we are transitioning from an existing
     * <router-view> chain [Component A, Component B] to a new
     * chain [Component A, Component C]:
     *
     *  A    A
     *  | => |
     *  B    C
     *
     * 1. Reusablity phase:
     *   -> canReuse(A, A)
     *   -> canReuse(B, C)
     *   -> determine new queues:
     *      - deactivation: [B]
     *      - activation: [C]
     *
     * 2. Validation phase:
     *   -> canDeactivate(B)
     *   -> canActivate(C)
     *
     * 3. Activation phase:
     *   -> deactivate(B)
     *   -> activate(C)
     *
     * Each of these steps can be asynchronous, and any
     * step can potentially abort the transition.
     *
     * @param {Function} cb
     */

    RouteTransition.prototype.start = function start(cb) {
      var transition = this;

      // determine the queue of views to deactivate
      var deactivateQueue = [];
      var view = this.router._rootView;
      while (view) {
        deactivateQueue.unshift(view);
        view = view.childView;
      }
      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

      // determine the queue of route handlers to activate
      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
        return match.handler;
      });

      // 1. Reusability phase
      var i = undefined,
          reuseQueue = undefined;
      for (i = 0; i < reverseDeactivateQueue.length; i++) {
        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
          break;
        }
      }
      if (i > 0) {
        reuseQueue = reverseDeactivateQueue.slice(0, i);
        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
        activateQueue = activateQueue.slice(i);
      }

      // 2. Validation phase
      transition.runQueue(deactivateQueue, canDeactivate, function () {
        transition.runQueue(activateQueue, canActivate, function () {
          transition.runQueue(deactivateQueue, deactivate, function () {
            // 3. Activation phase

            // Update router current route
            transition.router._onTransitionValidated(transition);

            // trigger reuse for all reused views
            reuseQueue && reuseQueue.forEach(function (view) {
              return reuse(view, transition);
            });

            // the root of the chain that needs to be replaced
            // is the top-most non-reusable view.
            if (deactivateQueue.length) {
              var _view = deactivateQueue[deactivateQueue.length - 1];
              var depth = reuseQueue ? reuseQueue.length : 0;
              activate(_view, transition, depth, cb);
            } else {
              cb();
            }
          });
        });
      });
    };

    /**
     * Asynchronously and sequentially apply a function to a
     * queue.
     *
     * @param {Array} queue
     * @param {Function} fn
     * @param {Function} cb
     */

    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
      var transition = this;
      step(0);
      function step(index) {
        if (index >= queue.length) {
          cb();
        } else {
          fn(queue[index], transition, function () {
            step(index + 1);
          });
        }
      }
    };

    /**
     * Call a user provided route transition hook and handle
     * the response (e.g. if the user returns a promise).
     *
     * If the user neither expects an argument nor returns a
     * promise, the hook is assumed to be synchronous.
     *
     * @param {Function} hook
     * @param {*} [context]
     * @param {Function} [cb]
     * @param {Object} [options]
     *                 - {Boolean} expectBoolean
     *                 - {Boolean} postActive
     *                 - {Function} processData
     *                 - {Function} cleanup
     */

    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var _ref$expectBoolean = _ref.expectBoolean;
      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
      var _ref$postActivate = _ref.postActivate;
      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
      var processData = _ref.processData;
      var cleanup = _ref.cleanup;

      var transition = this;
      var nextCalled = false;

      // abort the transition
      var abort = function abort() {
        cleanup && cleanup();
        transition.abort();
      };

      // handle errors
      var onError = function onError(err) {
        postActivate ? next() : abort();
        if (err && !transition.router._suppress) {
          warn$1('Uncaught error during transition: ');
          throw err instanceof Error ? err : new Error(err);
        }
      };

      // since promise swallows errors, we have to
      // throw it in the next tick...
      var onPromiseError = function onPromiseError(err) {
        try {
          onError(err);
        } catch (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      };

      // advance the transition to the next step
      var next = function next() {
        if (nextCalled) {
          warn$1('transition.next() should be called only once.');
          return;
        }
        nextCalled = true;
        if (transition.aborted) {
          cleanup && cleanup();
          return;
        }
        cb && cb();
      };

      var nextWithBoolean = function nextWithBoolean(res) {
        if (typeof res === 'boolean') {
          res ? next() : abort();
        } else if (isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort();
          }, onPromiseError);
        } else if (!hook.length) {
          next();
        }
      };

      var nextWithData = function nextWithData(data) {
        var res = undefined;
        try {
          res = processData(data);
        } catch (err) {
          return onError(err);
        }
        if (isPromise(res)) {
          res.then(next, onPromiseError);
        } else {
          next();
        }
      };

      // expose a clone of the transition object, so that each
      // hook gets a clean copy and prevent the user from
      // messing with the internals.
      var exposed = {
        to: transition.to,
        from: transition.from,
        abort: abort,
        next: processData ? nextWithData : next,
        redirect: function redirect() {
          transition.redirect.apply(transition, arguments);
        }
      };

      // actually call the hook
      var res = undefined;
      try {
        res = hook.call(context, exposed);
      } catch (err) {
        return onError(err);
      }

      if (expectBoolean) {
        // boolean hooks
        nextWithBoolean(res);
      } else if (isPromise(res)) {
        // promise
        if (processData) {
          res.then(nextWithData, onPromiseError);
        } else {
          res.then(next, onPromiseError);
        }
      } else if (processData && isPlainOjbect(res)) {
        // data promise sugar
        nextWithData(res);
      } else if (!hook.length) {
        next();
      }
    };

    /**
     * Call a single hook or an array of async hooks in series.
     *
     * @param {Array} hooks
     * @param {*} context
     * @param {Function} cb
     * @param {Object} [options]
     */

    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
      var _this = this;

      if (Array.isArray(hooks)) {
        this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, next, options);
          }
        }, cb);
      } else {
        this.callHook(hooks, context, cb, options);
      }
    };

    return RouteTransition;
  })();

  function isPlainOjbect(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  function toArray(val) {
    return val ? Array.prototype.slice.call(val) : [];
  }

  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

  /**
   * Route Context Object
   *
   * @param {String} path
   * @param {Router} router
   */

  var Route = function Route(path, router) {
    var _this = this;

    babelHelpers.classCallCheck(this, Route);

    var matched = router._recognizer.recognize(path);
    if (matched) {
      // copy all custom fields from route configs
      [].forEach.call(matched, function (match) {
        for (var key in match.handler) {
          if (!internalKeysRE.test(key)) {
            _this[key] = match.handler[key];
          }
        }
      });
      // set query and params
      this.query = matched.queryParams;
      this.params = [].reduce.call(matched, function (prev, cur) {
        if (cur.params) {
          for (var key in cur.params) {
            prev[key] = cur.params[key];
          }
        }
        return prev;
      }, {});
    }
    // expose path and router
    this.path = path;
    // for internal use
    this.matched = matched || router._notFoundHandler;
    // internal reference to router
    Object.defineProperty(this, 'router', {
      enumerable: false,
      value: router
    });
    // Important: freeze self to prevent observation
    Object.freeze(this);
  };

  function applyOverride (Vue) {
    var _Vue$util = Vue.util;
    var extend = _Vue$util.extend;
    var isArray = _Vue$util.isArray;
    var defineReactive = _Vue$util.defineReactive;

    // override Vue's init and destroy process to keep track of router instances
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      options = options || {};
      var root = options._parent || options.parent || this;
      var router = root.$router;
      var route = root.$route;
      if (router) {
        // expose router
        this.$router = router;
        router._children.push(this);
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          defineReactive(this, '$route', route);
        }
      }
      init.call(this, options);
    };

    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      if (!this._isBeingDestroyed && this.$router) {
        this.$router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    };

    // 1.0 only: enable route mixins
    var strats = Vue.config.optionMergeStrategies;
    var hooksToMergeRE = /^(data|activate|deactivate)$/;

    if (strats) {
      strats.route = function (parentVal, childVal) {
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var a = ret[key];
          var b = childVal[key];
          // for data, activate and deactivate, we need to merge them into
          // arrays similar to lifecycle hooks.
          if (a && hooksToMergeRE.test(key)) {
            ret[key] = (isArray(a) ? a : [a]).concat(b);
          } else {
            ret[key] = b;
          }
        }
        return ret;
      };
    }
  }

  function View (Vue) {

    var _ = Vue.util;
    var componentDef =
    // 0.12
    Vue.directive('_component') ||
    // 1.0
    Vue.internalDirectives.component;
    // <router-view> extends the internal component directive
    var viewDef = _.extend({}, componentDef);

    // with some overrides
    _.extend(viewDef, {

      _isRouterView: true,

      bind: function bind() {
        var route = this.vm.$route;
        /* istanbul ignore if */
        if (!route) {
          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
          return;
        }
        // force dynamic directive so v-component doesn't
        // attempt to build right now
        this._isDynamicLiteral = true;
        // finally, init by delegating to v-component
        componentDef.bind.call(this);

        // locate the parent view
        var parentView = undefined;
        var parent = this.vm;
        while (parent) {
          if (parent._routerView) {
            parentView = parent._routerView;
            break;
          }
          parent = parent.$parent;
        }
        if (parentView) {
          // register self as a child of the parent view,
          // instead of activating now. This is so that the
          // child's activate hook is called after the
          // parent's has resolved.
          this.parentView = parentView;
          parentView.childView = this;
        } else {
          // this is the root view!
          var router = route.router;
          router._rootView = this;
        }

        // handle late-rendered view
        // two possibilities:
        // 1. root view rendered after transition has been
        //    validated;
        // 2. child view rendered after parent view has been
        //    activated.
        var transition = route.router._currentTransition;
        if (!parentView && transition.done || parentView && parentView.activated) {
          var depth = parentView ? parentView.depth + 1 : 0;
          activate(this, transition, depth);
        }
      },

      unbind: function unbind() {
        if (this.parentView) {
          this.parentView.childView = null;
        }
        componentDef.unbind.call(this);
      }
    });

    Vue.elementDirective('router-view', viewDef);
  }

  var trailingSlashRE = /\/$/;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var queryStringRE = /\?.*$/;

  // install v-link, which provides navigation support for
  // HTML5 history mode
  function Link (Vue) {
    var _Vue$util = Vue.util;
    var _bind = _Vue$util.bind;
    var isObject = _Vue$util.isObject;
    var addClass = _Vue$util.addClass;
    var removeClass = _Vue$util.removeClass;

    var onPriority = Vue.directive('on').priority;
    var LINK_UPDATE = '__vue-router-link-update__';

    var activeId = 0;

    Vue.directive('link-active', {
      priority: 9999,
      bind: function bind() {
        var _this = this;

        var id = String(activeId++);
        // collect v-links contained within this element.
        // we need do this here before the parent-child relationship
        // gets messed up by terminal directives (if, for, components)
        var childLinks = this.el.querySelectorAll('[v-link]');
        for (var i = 0, l = childLinks.length; i < l; i++) {
          var link = childLinks[i];
          var existingId = link.getAttribute(LINK_UPDATE);
          var value = existingId ? existingId + ',' + id : id;
          // leave a mark on the link element which can be persisted
          // through fragment clones.
          link.setAttribute(LINK_UPDATE, value);
        }
        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
          if (link.activeIds.indexOf(id) > -1) {
            link.updateClasses(path, _this.el);
          }
        });
      },
      unbind: function unbind() {
        this.vm.$off(LINK_UPDATE, this.cb);
      }
    });

    Vue.directive('link', {
      priority: onPriority - 2,

      bind: function bind() {
        var vm = this.vm;
        /* istanbul ignore if */
        if (!vm.$route) {
          warn$1('v-link can only be used inside a router-enabled app.');
          return;
        }
        this.router = vm.$route.router;
        // update things when the route changes
        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
        // check v-link-active ids
        var activeIds = this.el.getAttribute(LINK_UPDATE);
        if (activeIds) {
          this.el.removeAttribute(LINK_UPDATE);
          this.activeIds = activeIds.split(',');
        }
        // no need to handle click if link expects to be opened
        // in a new window/tab.
        /* istanbul ignore if */
        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
          return;
        }
        // handle click
        this.handler = _bind(this.onClick, this);
        this.el.addEventListener('click', this.handler);
      },

      update: function update(target) {
        this.target = target;
        if (isObject(target)) {
          this.append = target.append;
          this.exact = target.exact;
          this.prevActiveClass = this.activeClass;
          this.activeClass = target.activeClass;
        }
        this.onRouteUpdate(this.vm.$route);
      },

      onClick: function onClick(e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) return;
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) return;

        var target = this.target;
        if (target) {
          // v-link with expression, just go
          e.preventDefault();
          this.router.go(target);
        } else {
          // no expression, delegate for an <a> inside
          var el = e.target;
          while (el.tagName !== 'A' && el !== this.el) {
            el = el.parentNode;
          }
          if (el.tagName === 'A' && sameOrigin(el)) {
            e.preventDefault();
            var path = el.pathname;
            if (this.router.history.root) {
              path = path.replace(this.router.history.rootRE, '');
            }
            this.router.go({
              path: path,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      },

      onRouteUpdate: function onRouteUpdate(route) {
        // router.stringifyPath is dependent on current route
        // and needs to be called again whenver route changes.
        var newPath = this.router.stringifyPath(this.target);
        if (this.path !== newPath) {
          this.path = newPath;
          this.updateActiveMatch();
          this.updateHref();
        }
        if (this.activeIds) {
          this.vm.$emit(LINK_UPDATE, this, route.path);
        } else {
          this.updateClasses(route.path, this.el);
        }
      },

      updateActiveMatch: function updateActiveMatch() {
        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      },

      updateHref: function updateHref() {
        if (this.el.tagName !== 'A') {
          return;
        }
        var path = this.path;
        var router = this.router;
        var isAbsolute = path.charAt(0) === '/';
        // do not format non-hash relative paths
        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      },

      updateClasses: function updateClasses(path, el) {
        var activeClass = this.activeClass || this.router._linkActiveClass;
        // clear old class
        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
          toggleClasses(el, this.prevActiveClass, removeClass);
        }
        // remove query string before matching
        var dest = this.path.replace(queryStringRE, '');
        path = path.replace(queryStringRE, '');
        // add new class
        if (this.exact) {
          if (dest === path ||
          // also allow additional trailing slash
          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        } else {
          if (this.activeRE && this.activeRE.test(path)) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        }
      },

      unbind: function unbind() {
        this.el.removeEventListener('click', this.handler);
        this.unwatch && this.unwatch();
      }
    });

    function sameOrigin(link) {
      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
    }

    // this function is copied from v-bind:class implementation until
    // we properly expose it...
    function toggleClasses(el, key, fn) {
      key = key.trim();
      if (key.indexOf(' ') === -1) {
        fn(el, key);
        return;
      }
      var keys = key.split(/\s+/);
      for (var i = 0, l = keys.length; i < l; i++) {
        fn(el, keys[i]);
      }
    }
  }

  var historyBackends = {
    abstract: AbstractHistory,
    hash: HashHistory,
    html5: HTML5History
  };

  // late bind during install
  var Vue = undefined;

  /**
   * Router constructor
   *
   * @param {Object} [options]
   */

  var Router = (function () {
    function Router() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$hashbang = _ref.hashbang;
      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
      var _ref$abstract = _ref.abstract;
      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
      var _ref$history = _ref.history;
      var history = _ref$history === undefined ? false : _ref$history;
      var _ref$saveScrollPosition = _ref.saveScrollPosition;
      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
      var _ref$transitionOnLoad = _ref.transitionOnLoad;
      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
      var _ref$suppressTransitionError = _ref.suppressTransitionError;
      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
      var _ref$root = _ref.root;
      var root = _ref$root === undefined ? null : _ref$root;
      var _ref$linkActiveClass = _ref.linkActiveClass;
      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
      babelHelpers.classCallCheck(this, Router);

      /* istanbul ignore if */
      if (!Router.installed) {
        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
      }

      // Vue instances
      this.app = null;
      this._children = [];

      // route recognizer
      this._recognizer = new RouteRecognizer();
      this._guardRecognizer = new RouteRecognizer();

      // state
      this._started = false;
      this._startCb = null;
      this._currentRoute = {};
      this._currentTransition = null;
      this._previousTransition = null;
      this._notFoundHandler = null;
      this._notFoundRedirect = null;
      this._beforeEachHooks = [];
      this._afterEachHooks = [];

      // trigger transition on initial render?
      this._rendered = false;
      this._transitionOnLoad = transitionOnLoad;

      // history mode
      this._root = root;
      this._abstract = abstract;
      this._hashbang = hashbang;

      // check if HTML5 history is available
      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
      this._history = history && hasPushState;
      this._historyFallback = history && !hasPushState;

      // create history object
      var inBrowser = Vue.util.inBrowser;
      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

      var History = historyBackends[this.mode];
      this.history = new History({
        root: root,
        hashbang: this._hashbang,
        onChange: function onChange(path, state, anchor) {
          _this._match(path, state, anchor);
        }
      });

      // other options
      this._saveScrollPosition = saveScrollPosition;
      this._linkActiveClass = linkActiveClass;
      this._suppress = suppressTransitionError;
    }

    /**
     * Allow directly passing components to a route
     * definition.
     *
     * @param {String} path
     * @param {Object} handler
     */

    // API ===================================================

    /**
    * Register a map of top-level paths.
    *
    * @param {Object} map
    */

    Router.prototype.map = function map(_map) {
      for (var route in _map) {
        this.on(route, _map[route]);
      }
      return this;
    };

    /**
     * Register a single root-level path
     *
     * @param {String} rootPath
     * @param {Object} handler
     *                 - {String} component
     *                 - {Object} [subRoutes]
     *                 - {Boolean} [forceRefresh]
     *                 - {Function} [before]
     *                 - {Function} [after]
     */

    Router.prototype.on = function on(rootPath, handler) {
      if (rootPath === '*') {
        this._notFound(handler);
      } else {
        this._addRoute(rootPath, handler, []);
      }
      return this;
    };

    /**
     * Set redirects.
     *
     * @param {Object} map
     */

    Router.prototype.redirect = function redirect(map) {
      for (var path in map) {
        this._addRedirect(path, map[path]);
      }
      return this;
    };

    /**
     * Set aliases.
     *
     * @param {Object} map
     */

    Router.prototype.alias = function alias(map) {
      for (var path in map) {
        this._addAlias(path, map[path]);
      }
      return this;
    };

    /**
     * Set global before hook.
     *
     * @param {Function} fn
     */

    Router.prototype.beforeEach = function beforeEach(fn) {
      this._beforeEachHooks.push(fn);
      return this;
    };

    /**
     * Set global after hook.
     *
     * @param {Function} fn
     */

    Router.prototype.afterEach = function afterEach(fn) {
      this._afterEachHooks.push(fn);
      return this;
    };

    /**
     * Navigate to a given path.
     * The path can be an object describing a named path in
     * the format of { name: '...', params: {}, query: {}}
     * The path is assumed to be already decoded, and will
     * be resolved against root (if provided)
     *
     * @param {String|Object} path
     * @param {Boolean} [replace]
     */

    Router.prototype.go = function go(path) {
      var replace = false;
      var append = false;
      if (Vue.util.isObject(path)) {
        replace = path.replace;
        append = path.append;
      }
      path = this.stringifyPath(path);
      if (path) {
        this.history.go(path, replace, append);
      }
    };

    /**
     * Short hand for replacing current path
     *
     * @param {String} path
     */

    Router.prototype.replace = function replace(path) {
      if (typeof path === 'string') {
        path = { path: path };
      }
      path.replace = true;
      this.go(path);
    };

    /**
     * Start the router.
     *
     * @param {VueConstructor} App
     * @param {String|Element} container
     * @param {Function} [cb]
     */

    Router.prototype.start = function start(App, container, cb) {
      /* istanbul ignore if */
      if (this._started) {
        warn$1('already started.');
        return;
      }
      this._started = true;
      this._startCb = cb;
      if (!this.app) {
        /* istanbul ignore if */
        if (!App || !container) {
          throw new Error('Must start vue-router with a component and a ' + 'root container.');
        }
        /* istanbul ignore if */
        if (App instanceof Vue) {
          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
        }
        this._appContainer = container;
        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
        // give it a name for better debugging
        Ctor.options.name = Ctor.options.name || 'RouterApp';
      }

      // handle history fallback in browsers that do not
      // support HTML5 history API
      if (this._historyFallback) {
        var _location = window.location;
        var _history = new HTML5History({ root: this._root });
        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
        if (path && path !== '/') {
          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
          return;
        }
      }

      this.history.start();
    };

    /**
     * Stop listening to route changes.
     */

    Router.prototype.stop = function stop() {
      this.history.stop();
      this._started = false;
    };

    /**
     * Normalize named route object / string paths into
     * a string.
     *
     * @param {Object|String|Number} path
     * @return {String}
     */

    Router.prototype.stringifyPath = function stringifyPath(path) {
      var generatedPath = '';
      if (path && typeof path === 'object') {
        if (path.name) {
          var extend = Vue.util.extend;
          var currentParams = this._currentTransition && this._currentTransition.to.params;
          var targetParams = path.params || {};
          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
        } else if (path.path) {
          generatedPath = encodeURI(path.path);
        }
        if (path.query) {
          // note: the generated query string is pre-URL-encoded by the recognizer
          var query = this._recognizer.generateQueryString(path.query);
          if (generatedPath.indexOf('?') > -1) {
            generatedPath += '&' + query.slice(1);
          } else {
            generatedPath += query;
          }
        }
      } else {
        generatedPath = encodeURI(path ? path + '' : '');
      }
      return generatedPath;
    };

    // Internal methods ======================================

    /**
    * Add a route containing a list of segments to the internal
    * route recognizer. Will be called recursively to add all
    * possible sub-routes.
    *
    * @param {String} path
    * @param {Object} handler
    * @param {Array} segments
    */

    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
      guardComponent(path, handler);
      handler.path = path;
      handler.fullPath = (segments.reduce(function (path, segment) {
        return path + segment.path;
      }, '') + path).replace('//', '/');
      segments.push({
        path: path,
        handler: handler
      });
      this._recognizer.add(segments, {
        as: handler.name
      });
      // add sub routes
      if (handler.subRoutes) {
        for (var subPath in handler.subRoutes) {
          // recursively walk all sub routes
          this._addRoute(subPath, handler.subRoutes[subPath],
          // pass a copy in recursion to avoid mutating
          // across branches
          segments.slice());
        }
      }
    };

    /**
     * Set the notFound route handler.
     *
     * @param {Object} handler
     */

    Router.prototype._notFound = function _notFound(handler) {
      guardComponent('*', handler);
      this._notFoundHandler = [{ handler: handler }];
    };

    /**
     * Add a redirect record.
     *
     * @param {String} path
     * @param {String} redirectPath
     */

    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
      if (path === '*') {
        this._notFoundRedirect = redirectPath;
      } else {
        this._addGuard(path, redirectPath, this.replace);
      }
    };

    /**
     * Add an alias record.
     *
     * @param {String} path
     * @param {String} aliasPath
     */

    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
      this._addGuard(path, aliasPath, this._match);
    };

    /**
     * Add a path guard.
     *
     * @param {String} path
     * @param {String} mappedPath
     * @param {Function} handler
     */

    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
      var _this2 = this;

      this._guardRecognizer.add([{
        path: path,
        handler: function handler(match, query) {
          var realPath = mapParams(mappedPath, match.params, query);
          _handler.call(_this2, realPath);
        }
      }]);
    };

    /**
     * Check if a path matches any redirect records.
     *
     * @param {String} path
     * @return {Boolean} - if true, will skip normal match.
     */

    Router.prototype._checkGuard = function _checkGuard(path) {
      var matched = this._guardRecognizer.recognize(path, true);
      if (matched) {
        matched[0].handler(matched[0], matched.queryParams);
        return true;
      } else if (this._notFoundRedirect) {
        matched = this._recognizer.recognize(path);
        if (!matched) {
          this.replace(this._notFoundRedirect);
          return true;
        }
      }
    };

    /**
     * Match a URL path and set the route context on vm,
     * triggering view updates.
     *
     * @param {String} path
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._match = function _match(path, state, anchor) {
      var _this3 = this;

      if (this._checkGuard(path)) {
        return;
      }

      var currentRoute = this._currentRoute;
      var currentTransition = this._currentTransition;

      if (currentTransition) {
        if (currentTransition.to.path === path) {
          // do nothing if we have an active transition going to the same path
          return;
        } else if (currentRoute.path === path) {
          // We are going to the same path, but we also have an ongoing but
          // not-yet-validated transition. Abort that transition and reset to
          // prev transition.
          currentTransition.aborted = true;
          this._currentTransition = this._prevTransition;
          return;
        } else {
          // going to a totally different path. abort ongoing transition.
          currentTransition.aborted = true;
        }
      }

      // construct new route and transition context
      var route = new Route(path, this);
      var transition = new RouteTransition(this, route, currentRoute);

      // current transition is updated right now.
      // however, current route will only be updated after the transition has
      // been validated.
      this._prevTransition = currentTransition;
      this._currentTransition = transition;

      if (!this.app) {
        (function () {
          // initial render
          var router = _this3;
          _this3.app = new _this3._appConstructor({
            el: _this3._appContainer,
            created: function created() {
              this.$router = router;
            },
            _meta: {
              $route: route
            }
          });
        })();
      }

      // check global before hook
      var beforeHooks = this._beforeEachHooks;
      var startTransition = function startTransition() {
        transition.start(function () {
          _this3._postTransition(route, state, anchor);
        });
      };

      if (beforeHooks.length) {
        transition.runQueue(beforeHooks, function (hook, _, next) {
          if (transition === _this3._currentTransition) {
            transition.callHook(hook, null, next, {
              expectBoolean: true
            });
          }
        }, startTransition);
      } else {
        startTransition();
      }

      if (!this._rendered && this._startCb) {
        this._startCb.call(null);
      }

      // HACK:
      // set rendered to true after the transition start, so
      // that components that are acitvated synchronously know
      // whether it is the initial render.
      this._rendered = true;
    };

    /**
     * Set current to the new transition.
     * This is called by the transition object when the
     * validation of a route has succeeded.
     *
     * @param {Transition} transition
     */

    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
      // set current route
      var route = this._currentRoute = transition.to;
      // update route context for all children
      if (this.app.$route !== route) {
        this.app.$route = route;
        this._children.forEach(function (child) {
          child.$route = route;
        });
      }
      // call global after hook
      if (this._afterEachHooks.length) {
        this._afterEachHooks.forEach(function (hook) {
          return hook.call(null, {
            to: transition.to,
            from: transition.from
          });
        });
      }
      this._currentTransition.done = true;
    };

    /**
     * Handle stuff after the transition.
     *
     * @param {Route} route
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
      // handle scroll positions
      // saved scroll positions take priority
      // then we check if the path has an anchor
      var pos = state && state.pos;
      if (pos && this._saveScrollPosition) {
        Vue.nextTick(function () {
          window.scrollTo(pos.x, pos.y);
        });
      } else if (anchor) {
        Vue.nextTick(function () {
          var el = document.getElementById(anchor.slice(1));
          if (el) {
            window.scrollTo(window.scrollX, el.offsetTop);
          }
        });
      }
    };

    return Router;
  })();

  function guardComponent(path, handler) {
    var comp = handler.component;
    if (Vue.util.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      warn$1('invalid component for route "' + path + '".');
    }
  }

  /* Installation */

  Router.installed = false;

  /**
   * Installation interface.
   * Install the necessary directives.
   */

  Router.install = function (externalVue) {
    /* istanbul ignore if */
    if (Router.installed) {
      warn$1('already installed.');
      return;
    }
    Vue = externalVue;
    applyOverride(Vue);
    View(Vue);
    Link(Vue);
    exports$1.Vue = Vue;
    Router.installed = true;
  };

  // auto install
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Router);
  }

  return Router;

}));
},{}],26:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

// detecting iOS UIWebView by indexedDB
var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var c;
var prev;
var i;
var l;
var lastFilterIndex;
var inSingle;
var inDouble;
var curly;
var square;
var paren;
/**
 * Push a filter to the current directive object
 */

function pushFilter() {
  var exp = str.slice(lastFilterIndex, i).trim();
  var filter;
  if (exp) {
    filter = {};
    var tokens = exp.match(filterTokenRE);
    filter.name = tokens[0];
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg);
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter);
  }
  lastFilterIndex = i + 1;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  inSingle = inDouble = false;
  curly = square = paren = 0;
  lastFilterIndex = 0;
  dir = {};

  for (i = 0, l = str.length; i < l; i++) {
    prev = c;
    c = str.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
    } else if (c === 0x7C && // pipe
    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        dir.expression = str.slice(0, i).trim();
      } else {
        // already has filter
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if (process.env.NODE_ENV !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIos: isIos,
	iosVersionMatch: iosVersionMatch,
	iosVersion: iosVersion,
	hasMutationObserverBug: hasMutationObserverBug,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new isntance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.value;
      if (isArray(model)) {
        var val = self.getValue();
        if (el.checked) {
          if (indexOf(model, val) < 0) {
            model.push(val);
          }
        } else {
          model.$remove(val);
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  dirs.sort(directiveComparator);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator(a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
  return a > b ? -1 : a === b ? 0 : 1;
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;
      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.26';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":20}],27:[function(require,module,exports){
/*!
 * Vuex v1.0.0-rc.2
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * Merge an array of objects into one.
   *
   * @param {Array<Object>} arr
   * @return {Object}
   */

  function mergeObjects(arr) {
    return arr.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var existing = prev[key];
        if (existing) {
          // allow multiple mutation objects to contain duplicate
          // handlers for the same mutation type
          if (Array.isArray(existing)) {
            prev[key] = existing.concat(obj[key]);
          } else {
            prev[key] = [existing].concat(obj[key]);
          }
        } else {
          prev[key] = obj[key];
        }
      });
      return prev;
    }, {});
  }

  /**
   * Check whether the given value is Object or not
   *
   * @param {*} obj
   * @return {Boolean}
   */

  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Get state sub tree by given keys.
   *
   * @param {Object} state
   * @param {Array<String>} nestedKeys
   * @return {Object}
   */
  function getNestedState(state, nestedKeys) {
    return nestedKeys.reduce(function (state, key) {
      return state[key];
    }, state);
  }

  /**
   * Hacks to get access to Vue internals.
   * Maybe we should expose these...
   */

  var Watcher = void 0;
  function getWatcher(vm) {
    if (!Watcher) {
      var noop = function noop() {};
      var unwatch = vm.$watch(noop, noop);
      Watcher = vm._watchers[0].constructor;
      unwatch();
    }
    return Watcher;
  }

  var Dep = void 0;
  function getDep(vm) {
    if (!Dep) {
      Dep = vm._data.__ob__.dep.constructor;
    }
    return Dep;
  }

  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  function devtoolPlugin(store) {
    if (!hook) return;

    hook.emit('vuex:init', store);

    hook.on('vuex:travel-to-state', function (targetState) {
      store.replaceState(targetState);
    });

    store.subscribe(function (mutation, state) {
      hook.emit('vuex:mutation', mutation, state);
    });
  }

  function override (Vue) {
    var version = Number(Vue.version.split('.')[0]);

    if (version >= 2) {
      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
    } else {
      (function () {
        // override init and inject vuex init procedure
        // for 1.x backwards compatibility.
        var _init = Vue.prototype._init;
        Vue.prototype._init = function () {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
          _init.call(this, options);
        };
      })();
    }

    /**
     * Vuex init hook, injected into each instances init hooks list.
     */

    function vuexInit() {
      var options = this.$options;
      var store = options.store;
      var vuex = options.vuex;
      // store injection

      if (store) {
        this.$store = store;
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
      // vuex option handling
      if (vuex) {
        if (!this.$store) {
          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
        }
        var state = vuex.state;
        var actions = vuex.actions;
        var getters = vuex.getters;
        // handle deprecated state option

        if (state && !getters) {
          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
          getters = state;
        }
        // getters
        if (getters) {
          options.computed = options.computed || {};
          for (var key in getters) {
            defineVuexGetter(this, key, getters[key]);
          }
        }
        // actions
        if (actions) {
          options.methods = options.methods || {};
          for (var _key in actions) {
            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
          }
        }
      }
    }

    /**
     * Setter for all getter properties.
     */

    function setter() {
      throw new Error('vuex getter properties are read-only.');
    }

    /**
     * Define a Vuex getter on an instance.
     *
     * @param {Vue} vm
     * @param {String} key
     * @param {Function} getter
     */

    function defineVuexGetter(vm, key, getter) {
      if (typeof getter !== 'function') {
        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
      } else {
        Object.defineProperty(vm, key, {
          enumerable: true,
          configurable: true,
          get: makeComputedGetter(vm.$store, getter),
          set: setter
        });
      }
    }

    /**
     * Make a computed getter, using the same caching mechanism of computed
     * properties. In addition, it is cached on the raw getter function using
     * the store's unique cache id. This makes the same getter shared
     * across all components use the same underlying watcher, and makes
     * the getter evaluated only once during every flush.
     *
     * @param {Store} store
     * @param {Function} getter
     */

    function makeComputedGetter(store, getter) {
      var id = store._getterCacheId;

      // cached
      if (getter[id]) {
        return getter[id];
      }
      var vm = store._vm;
      var Watcher = getWatcher(vm);
      var Dep = getDep(vm);
      var watcher = new Watcher(vm, function (vm) {
        return getter(vm.state);
      }, null, { lazy: true });
      var computedGetter = function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      };
      getter[id] = computedGetter;
      return computedGetter;
    }

    /**
     * Make a bound-to-store version of a raw action function.
     *
     * @param {Store} store
     * @param {Function} action
     * @param {String} key
     */

    function makeBoundAction(store, action, key) {
      if (typeof action !== 'function') {
        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
      }
      return function vuexBoundAction() {
        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return action.call.apply(action, [this, store].concat(args));
      };
    }

    // option merging
    var merge = Vue.config.optionMergeStrategies.computed;
    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
      if (!toVal) return fromVal;
      if (!fromVal) return toVal;
      return {
        getters: merge(toVal.getters, fromVal.getters),
        state: merge(toVal.state, fromVal.state),
        actions: merge(toVal.actions, fromVal.actions)
      };
    };
  }

  var Vue = void 0;
  var uid = 0;

  var Store = function () {

    /**
     * @param {Object} options
     *        - {Object} state
     *        - {Object} actions
     *        - {Object} mutations
     *        - {Array} plugins
     *        - {Boolean} strict
     */

    function Store() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$state = _ref.state;
      var state = _ref$state === undefined ? {} : _ref$state;
      var _ref$mutations = _ref.mutations;
      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
      var _ref$modules = _ref.modules;
      var modules = _ref$modules === undefined ? {} : _ref$modules;
      var _ref$plugins = _ref.plugins;
      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
      var _ref$strict = _ref.strict;
      var strict = _ref$strict === undefined ? false : _ref$strict;
      classCallCheck(this, Store);

      this._getterCacheId = 'vuex_store_' + uid++;
      this._dispatching = false;
      this._rootMutations = this._mutations = mutations;
      this._modules = modules;
      this._subscribers = [];
      // bind dispatch to self
      var dispatch = this.dispatch;
      this.dispatch = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        dispatch.apply(_this, args);
      };
      // use a Vue instance to store the state tree
      // suppress warnings just in case the user has added
      // some funky global mixins
      if (!Vue) {
        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
      }
      var silent = Vue.config.silent;
      Vue.config.silent = true;
      this._vm = new Vue({
        data: {
          state: state
        }
      });
      Vue.config.silent = silent;
      this._setupModuleState(state, modules);
      this._setupModuleMutations(modules);
      // add extra warnings in strict mode
      if (strict) {
        this._setupMutationCheck();
      }
      // apply plugins
      devtoolPlugin(this);
      plugins.forEach(function (plugin) {
        return plugin(_this);
      });
    }

    /**
     * Getter for the entire state tree.
     * Read only.
     *
     * @return {Object}
     */

    createClass(Store, [{
      key: 'replaceState',


      /**
       * Replace root state.
       *
       * @param {Object} state
       */

      value: function replaceState(state) {
        this._dispatching = true;
        this._vm.state = state;
        this._dispatching = false;
      }

      /**
       * Dispatch an action.
       *
       * @param {String} type
       */

    }, {
      key: 'dispatch',
      value: function dispatch(type) {
        var _this2 = this;

        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          payload[_key2 - 1] = arguments[_key2];
        }

        var silent = false;
        var isObjectStyleDispatch = false;
        // compatibility for object actions, e.g. FSA
        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
          isObjectStyleDispatch = true;
          payload = type;
          if (type.silent) silent = true;
          type = type.type;
        }
        var handler = this._mutations[type];
        var state = this.state;
        if (handler) {
          this._dispatching = true;
          // apply the mutation
          if (Array.isArray(handler)) {
            handler.forEach(function (h) {
              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));
            });
          } else {
            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));
          }
          this._dispatching = false;
          if (!silent) {
            (function () {
              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };
              _this2._subscribers.forEach(function (sub) {
                return sub(mutation, state);
              });
            })();
          }
        } else {
          console.warn('[vuex] Unknown mutation: ' + type);
        }
      }

      /**
       * Watch state changes on the store.
       * Same API as Vue's $watch, except when watching a function,
       * the function gets the state as the first argument.
       *
       * @param {Function} fn
       * @param {Function} cb
       * @param {Object} [options]
       */

    }, {
      key: 'watch',
      value: function watch(fn, cb, options) {
        var _this3 = this;

        if (typeof fn !== 'function') {
          console.error('Vuex store.watch only accepts function.');
          return;
        }
        return this._vm.$watch(function () {
          return fn(_this3.state);
        }, cb, options);
      }

      /**
       * Subscribe to state changes. Fires after every mutation.
       */

    }, {
      key: 'subscribe',
      value: function subscribe(fn) {
        var subs = this._subscribers;
        if (subs.indexOf(fn) < 0) {
          subs.push(fn);
        }
        return function () {
          var i = subs.indexOf(fn);
          if (i > -1) {
            subs.splice(i, 1);
          }
        };
      }

      /**
       * Hot update mutations & modules.
       *
       * @param {Object} options
       *        - {Object} [mutations]
       *        - {Object} [modules]
       */

    }, {
      key: 'hotUpdate',
      value: function hotUpdate() {
        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var mutations = _ref2.mutations;
        var modules = _ref2.modules;

        this._rootMutations = this._mutations = mutations || this._rootMutations;
        this._setupModuleMutations(modules || this._modules);
      }

      /**
       * Attach sub state tree of each module to the root tree.
       *
       * @param {Object} state
       * @param {Object} modules
       */

    }, {
      key: '_setupModuleState',
      value: function _setupModuleState(state, modules) {
        var _this4 = this;

        if (!isObject(modules)) return;

        Object.keys(modules).forEach(function (key) {
          var module = modules[key];

          // set this module's state
          Vue.set(state, key, module.state || {});

          // retrieve nested modules
          _this4._setupModuleState(state[key], module.modules);
        });
      }

      /**
       * Bind mutations for each module to its sub tree and
       * merge them all into one final mutations map.
       *
       * @param {Object} updatedModules
       */

    }, {
      key: '_setupModuleMutations',
      value: function _setupModuleMutations(updatedModules) {
        var modules = this._modules;
        Object.keys(updatedModules).forEach(function (key) {
          modules[key] = updatedModules[key];
        });
        var updatedMutations = this._createModuleMutations(modules, []);
        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));
      }

      /**
       * Helper method for _setupModuleMutations.
       * The method retrieve nested sub modules and
       * bind each mutations to its sub tree recursively.
       *
       * @param {Object} modules
       * @param {Array<String>} nestedKeys
       * @return {Array<Object>}
       */

    }, {
      key: '_createModuleMutations',
      value: function _createModuleMutations(modules, nestedKeys) {
        var _this5 = this;

        if (!isObject(modules)) return [];

        return Object.keys(modules).map(function (key) {
          var module = modules[key];
          var newNestedKeys = nestedKeys.concat(key);

          // retrieve nested modules
          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);

          if (!module || !module.mutations) {
            return mergeObjects(nestedMutations);
          }

          // bind mutations to sub state tree
          var mutations = {};
          Object.keys(module.mutations).forEach(function (name) {
            var original = module.mutations[name];
            mutations[name] = function (state) {
              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
              }

              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));
            };
          });

          // merge mutations of this module and nested modules
          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));
        });
      }

      /**
       * Setup mutation check: if the vuex instance's state is mutated
       * outside of a mutation handler, we throw en error. This effectively
       * enforces all mutations to the state to be trackable and hot-reloadble.
       * However, this comes at a run time cost since we are doing a deep
       * watch on the entire state tree, so it is only enalbed with the
       * strict option is set to true.
       */

    }, {
      key: '_setupMutationCheck',
      value: function _setupMutationCheck() {
        var _this6 = this;

        var Watcher = getWatcher(this._vm);
        /* eslint-disable no-new */
        new Watcher(this._vm, 'state', function () {
          if (!_this6._dispatching) {
            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
          }
        }, { deep: true, sync: true });
        /* eslint-enable no-new */
      }
    }, {
      key: 'state',
      get: function get() {
        return this._vm.state;
      },
      set: function set(v) {
        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');
      }
    }]);
    return Store;
  }();

  function install(_Vue) {
    if (Vue) {
      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
      return;
    }
    Vue = _Vue;
    override(Vue);
  }

  // auto install in dist mode
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = {
    Store: Store,
    install: install
  };

  return index;

}));
},{}],28:[function(require,module,exports){
module.exports = parse;
module.exports.parse = parse;
module.exports.stringify = stringify;

var numberRegexp = /^[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/;

 /*
 * Parse WKT and return GeoJSON.
 *
 * @param {string} _ A WKT geometry
 * @return {?Object} A GeoJSON geometry object
 */
function parse(_) {
    var parts = _.split(";"),
        _ = parts.pop(),
        srid = (parts.shift() || "").split("=").pop();

    var i = 0;

    function $(re) {
        var match = _.substring(i).match(re);
        if (!match) return null;
        else {
            i += match[0].length;
            return match[0];
        }
    }

    function crs(obj) {
        if (obj && srid.match(/\d+/)) {
            obj.crs = {
                type: 'name',
                properties: {
                    name: 'urn:ogc:def:crs:EPSG::' + srid
                }
            };
        }

        return obj;
    }

    function white() { $(/^\s*/); }

    function multicoords() {
        white();
        var depth = 0, rings = [], stack = [rings],
            pointer = rings, elem;

        while (elem =
            $(/^(\()/) ||
            $(/^(\))/) ||
            $(/^(\,)/) ||
            $(numberRegexp)) {
            if (elem == '(') {
                stack.push(pointer);
                pointer = [];
                stack[stack.length - 1].push(pointer);
                depth++;
            } else if (elem == ')') {
                pointer = stack.pop();
                // the stack was empty, input was malformed
                if (!pointer) return;
                depth--;
                if (depth === 0) break;
            } else if (elem === ',') {
                pointer = [];
                stack[stack.length - 1].push(pointer);
            } else if (!isNaN(parseFloat(elem))) {
                pointer.push(parseFloat(elem));
            } else {
                return null;
            }
            white();
        }

        if (depth !== 0) return null;
        return rings;
    }

    function coords() {
        var list = [], item, pt;
        while (pt =
            $(numberRegexp) ||
            $(/^(\,)/)) {
            if (pt == ',') {
                list.push(item);
                item = [];
            } else {
                if (!item) item = [];
                item.push(parseFloat(pt));
            }
            white();
        }
        if (item) list.push(item);
        return list.length ? list : null;
    }

    function point() {
        if (!$(/^(point)/i)) return null;
        white();
        if (!$(/^(\()/)) return null;
        var c = coords();
        if (!c) return null;
        white();
        if (!$(/^(\))/)) return null;
        return {
            type: 'Point',
            coordinates: c[0]
        };
    }

    function multipoint() {
        if (!$(/^(multipoint)/i)) return null;
        white();
        var c = multicoords();
        if (!c) return null;
        white();
        return {
            type: 'MultiPoint',
            coordinates: c
        };
    }

    function multilinestring() {
        if (!$(/^(multilinestring)/i)) return null;
        white();
        var c = multicoords();
        if (!c) return null;
        white();
        return {
            type: 'MultiLineString',
            coordinates: c
        };
    }

    function linestring() {
        if (!$(/^(linestring)/i)) return null;
        white();
        if (!$(/^(\()/)) return null;
        var c = coords();
        if (!c) return null;
        if (!$(/^(\))/)) return null;
        return {
            type: 'LineString',
            coordinates: c
        };
    }

    function polygon() {
        if (!$(/^(polygon)/i)) return null;
        white();
        return {
            type: 'Polygon',
            coordinates: multicoords()
        };
    }

    function multipolygon() {
        if (!$(/^(multipolygon)/i)) return null;
        white();
        return {
            type: 'MultiPolygon',
            coordinates: multicoords()
        };
    }

    function geometrycollection() {
        var geometries = [], geometry;

        if (!$(/^(geometrycollection)/i)) return null;
        white();

        if (!$(/^(\()/)) return null;
        while (geometry = root()) {
            geometries.push(geometry);
            white();
            $(/^(\,)/);
            white();
        }
        if (!$(/^(\))/)) return null;

        return {
            type: 'GeometryCollection',
            geometries: geometries
        };
    }

    function root() {
        return point() ||
            linestring() ||
            polygon() ||
            multipoint() ||
            multilinestring() ||
            multipolygon() ||
            geometrycollection();
    }

    return crs(root());
}

/**
 * Stringifies a GeoJSON object into WKT
 */
function stringify(gj) {
    if (gj.type === 'Feature') {
        gj = gj.geometry;
    }

    function pairWKT(c) {
        if (c.length === 2) {
            return c[0] + ' ' + c[1];
        } else if (c.length === 3) {
            return c[0] + ' ' + c[1] + ' ' + c[2];
        }
    }

    function ringWKT(r) {
        return r.map(pairWKT).join(', ');
    }

    function ringsWKT(r) {
        return r.map(ringWKT).map(wrapParens).join(', ');
    }

    function multiRingsWKT(r) {
        return r.map(ringsWKT).map(wrapParens).join(', ');
    }

    function wrapParens(s) { return '(' + s + ')'; }

    switch (gj.type) {
        case 'Point':
            return 'POINT (' + pairWKT(gj.coordinates) + ')';
        case 'LineString':
            return 'LINESTRING (' + ringWKT(gj.coordinates) + ')';
        case 'Polygon':
            return 'POLYGON (' + ringsWKT(gj.coordinates) + ')';
        case 'MultiPoint':
            return 'MULTIPOINT (' + ringWKT(gj.coordinates) + ')';
        case 'MultiPolygon':
            return 'MULTIPOLYGON (' + multiRingsWKT(gj.coordinates) + ')';
        case 'MultiLineString':
            return 'MULTILINESTRING (' + ringsWKT(gj.coordinates) + ')';
        case 'GeometryCollection':
            return 'GEOMETRYCOLLECTION (' + gj.geometries.map(stringify).join(', ') + ')';
        default:
            throw new Error('stringify requires a valid GeoJSON Feature or geometry object as input');
    }
}

},{}]},{},[1]);
