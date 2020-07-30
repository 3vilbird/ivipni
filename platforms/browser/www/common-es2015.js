(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3528f139.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-80bde1aa.js */ "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-1850e475-js */ "ios-transition-1850e475-js").then(__webpack_require__.bind(null, /*! ./ios.transition-1850e475.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-1850e475.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-083fcf52-js */ "md-transition-083fcf52-js").then(__webpack_require__.bind(null, /*! ./md.transition-083fcf52.js */ "./node_modules/@ionic/core/dist/esm/md.transition-083fcf52.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => resolve(currentStep === 1));
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n  Generated template for the LoginPage page.\r\n\r\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-content padding class=\"login\">\r\n  <ion-card>\r\n    <div class=\"image-size\">\r\n      <img src=\"../../../assets/images/Login.png\" />\r\n    </div>\r\n  </ion-card>\r\n  <div padding></div>\r\n  <ion-card>\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submit()\">\r\n      <ion-item>\r\n        <ion-label primary floating>Email/Mobile</ion-label>\r\n        <ion-input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label primary floating>Password</ion-label>\r\n        <ion-input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      <p class=\"ion-padding-start ion-justify-content-center\">{{loginMsg}}</p>\r\n      <div padding></div>\r\n      <ion-button shape=\"round\" color=\"light\" type=\"submit\" [disabled]=\"!myForm.valid\" expand=\"block\">LOGIN</ion-button>\r\n      <br />\r\n    </form>\r\n    <div class=\"ion-padding-start\">\r\n      <div class=\"ion-padding-bottom\">\r\n        <a ion-item (click)=\"forgotPasswd()\">\r\n          Forgot password?\r\n        </a>\r\n      </div>\r\n      <div class=\"ion-padding-bottom\">\r\n        <a ion-item (click)=\"registration()\">\r\n          Create new account\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  background-color: white;\n}\n.login ion-item {\n  background-color: white;\n  color: black;\n}\n.login ion-label {\n  color: black !important;\n}\n.login ion-input {\n  color: black !important;\n}\n.login .input-has-focus input {\n  color: black;\n}\n.login button {\n  background: lightblue;\n  height: 33px;\n}\n.text p {\n  text-decoration: none !important;\n  color: black;\n  text-align: center;\n}\n.image-size img {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -50px;\n  display: block;\n  width: 82%;\n  height: 215px;\n  padding-top: -10px;\n}\n.text-padding-bottom {\n  padding-top: 10px;\n}\n.text-padding-bottom p {\n  text-padding-bottom: 40px;\n  text-align: center;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7QUNBSjtBREdFO0VBQ0UsdUJBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FES0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNISjtBRE9BO0VBQ0UsZ0NBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7QUNMRjtBRE1FO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWhhcy1mb2N1cyBpbnB1dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQgcCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLy9jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXNpemUgaW1nIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDgyJTtcclxuICBoZWlnaHQ6IDIxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAtMTBweDtcclxufVxyXG5cclxuLnRleHQtcGFkZGluZy1ib3R0b20ge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHAge1xyXG4gICAgdGV4dC1wYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuIiwiLmxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubG9naW4gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmxvZ2luIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLmxvZ2luIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLmxvZ2luIC5pbnB1dC1oYXMtZm9jdXMgaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG4ubG9naW4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbi50ZXh0IHAge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1zaXplIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgyJTtcbiAgaGVpZ2h0OiAyMTVweDtcbiAgcGFkZGluZy10b3A6IC0xMHB4O1xufVxuXG4udGV4dC1wYWRkaW5nLWJvdHRvbSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnRleHQtcGFkZGluZy1ib3R0b20gcCB7XG4gIHRleHQtcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_rest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/network/rest */ "./src/providers/network/rest.ts");
/* harmony import */ var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/holders/holders */ "./src/providers/holders/holders.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");










let LoginPage = class LoginPage {
    constructor(navCtrl, rest, holders, loadingCtrl, user, formBuilder, logger, router, storage) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.holders = holders;
        this.loadingCtrl = loadingCtrl;
        this.user = user;
        this.formBuilder = formBuilder;
        this.logger = logger;
        this.router = router;
        this.storage = storage;
        this.loginMsg = "";
        this.loginId = "";
        this.passwd = "";
        this.deviceToken = this.holders.getDeviceToken();
        this.myForm = formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.logger.info("invoking submit");
            this.logger.debug("myform" + this.myForm);
            this.loginId = this.myForm.value.username;
            this.passwd = this.myForm.value.password;
            this.logger.debug("loginId " + this.loginId);
            this.logger.debug("passwd " + this.passwd);
            this.loginMsg = "Validating User <" + this.loginId + ">. Please wait...";
            let loading = yield this.loadingCtrl.create({
                message: ``,
            });
            loading.present();
            this.user.validateUser(this.loginId, this.passwd, this.deviceToken, (result, data) => {
                if (result == "1") {
                    var _dataObj = JSON.parse(data);
                    this.logger.info("log in data object" + JSON.stringify(_dataObj));
                    this.loginMsg = _dataObj.message;
                    this.storage.set("loginId", this.myForm.value.username);
                    this.storage.set("passwd", this.myForm.value.password);
                    this.rest.setAuthToken(_dataObj.userId, _dataObj.authToken);
                    loading.dismiss();
                    this.router.navigateByUrl("/home");
                }
                else {
                    loading.dismiss();
                    this.loginMsg = data;
                }
            });
        });
    }
    forgotPasswd() {
        this.router.navigateByUrl("/forgot-password");
    }
    registration() {
        this.router.navigateByUrl("/registration");
    }
    ngOnInit() { }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_network_rest__WEBPACK_IMPORTED_MODULE_5__["Rest"] },
    { type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_6__["Holders"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_network_rest__WEBPACK_IMPORTED_MODULE_5__["Rest"],
        _providers_holders_holders__WEBPACK_IMPORTED_MODULE_6__["Holders"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map