(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        realEstate: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/realEstate/realEstate.js", "vendors~realEstate" ]);
    return checkDeferredModules();
})({
    "./assets/js/realEstate/Filter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n    this.cities = this.cities.bind(this);\n    this.homeTypes = this.homeTypes.bind(this);\n    this.bedrooms = this.bedrooms.bind(this);\n  }\n\n  componentWillMount() {\n    this.props.populateAction();\n  }\n\n  cities() {\n    if (this.props.globalState.populateFormsData.cities != undefined) {\n      var {\n        cities\n      } = this.props.globalState.populateFormsData;\n      return cities.map(item => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item);\n      });\n    }\n  }\n\n  homeTypes() {\n    if (this.props.globalState.populateFormsData.homeTypes != undefined) {\n      var {\n        homeTypes\n      } = this.props.globalState.populateFormsData;\n      return homeTypes.map(item => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item);\n      });\n    }\n  }\n\n  bedrooms() {\n    if (this.props.globalState.populateFormsData.bedrooms != undefined) {\n      var {\n        bedrooms\n      } = this.props.globalState.populateFormsData;\n      return bedrooms.map(item => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n          key: item,\n          value: item\n        }, item, " +BR");\n      });\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "inside"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "city"\n    }, "City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "city",\n      className: "filters city",\n      onChange: this.props.change\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "All"\n    }, "All"), this.cities()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "homeType"\n    }, "Home Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "homeType",\n      className: "filters homeType",\n      onChange: this.props.change\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "All"\n    }, "All Homes"), this.homeTypes()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "bedrooms"\n    }, "Bedrooms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "bedrooms",\n      className: "filters bedrooms",\n      onChange: this.props.change\n    }, this.bedrooms()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters price"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_price",\n      className: "min-price",\n      onChange: this.props.change,\n      value: this.props.globalState.min_price\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_price",\n      className: "max-price",\n      onChange: this.props.change,\n      value: this.props.globalState.max_price\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters floor-space"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Floor Space"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "min_floor_space",\n      className: "min-floor-space",\n      onChange: this.props.change,\n      value: this.props.globalState.min_floor_space\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "max_floor_space",\n      className: "max-floor-space",\n      onChange: this.props.change,\n      value: this.props.globalState.max_floor_space\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "filters extras"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "title"\n    }, "Extras"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Elevator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      value: "elevator",\n      name: "elevator",\n      type: "checkbox",\n      onChange: this.props.change\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Swimming Pool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      value: "swimming_pool",\n      name: "swimming_pool",\n      type: "checkbox",\n      onChange: this.props.change\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Basement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      value: "basement",\n      name: "basement",\n      type: "checkbox",\n      onChange: this.props.change\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "extras"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Gym"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      value: "gym",\n      name: "gym",\n      type: "checkbox",\n      onChange: this.props.change\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Filter.js?');
    },
    "./assets/js/realEstate/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "logo"\n    }, "Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Create Ads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "register-btn"\n    }, "Register")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Header.js?');
    },
    "./assets/js/realEstate/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listings; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import listingsData from \'./data/listingsData.js\';\n\nclass Listings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n    this.loopListings = this.loopListings.bind(this);\n  }\n\n  loopListings() {\n    let {\n      listingsData\n    } = this.props;\n\n    if (listingsData == undefined || listingsData.length == 0) {\n      return \'Sorry your filter did not match any listings\';\n    }\n\n    return listingsData.map((listing, index) => {\n      if (this.props.globalState.view == \'box\') {\n        // THIS IS THE BOX VIEW //\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3",\n          key: index,\n          id: "col-listings"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-img",\n          style: {\n            background: "url(\\"".concat(listing.image, "\\") no-repeat center center")\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "address"\n        }, listing.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-img"\n        }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-9",\n          id: "user-details-div"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-details"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "user-name"\n        }, "Nina Smith"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "post-date"\n        }, "12/02/21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-details"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "floor-space"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-cubes"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.floorSpace, " ft\\xB2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bedrooms"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-bed"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.rooms, " Bedrooms"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "view-btn"\n        }, "View Listing")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bottom-info"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "price"\n        }, "$ ", listing.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "location"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-map-marker-alt"\n        }), listing.state, ", ", listing.city))));\n      } else {\n        // THIS IS THE LONG * LIST VIEW //\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-12 col-lg-6",\n          key: index,\n          id: "col-listings"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-img",\n          style: {\n            background: "url(\\"".concat(listing.image, "\\") no-repeat center center")\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "address"\n        }, listing.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-3"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-img"\n        }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "col-md-9",\n          id: "user-details-div"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "user-details"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "user-name"\n        }, "Nina Smith"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "post-date"\n        }, "12/02/21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "listing-details"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "floor-space"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-cubes"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.floorSpace, " ft\\xB2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bedrooms"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-bed"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, listing.rooms, " Bedrooms"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "view-btn"\n        }, "View Listing")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "bottom-info"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "price"\n        }, "$ ", listing.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "location"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-map-marker-alt"\n        }), listing.state, ", ", listing.city))));\n      }\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "listings"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "search-area"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search",\n      onChange: this.props.change\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "sortby-area"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "results"\n    }, this.props.globalState.filteredData.length, " Results Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "sort-options"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sortby",\n      className: "sortby",\n      onChange: this.props.change\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-dsc"\n    }, "Lowest Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "price-asc"\n    }, "Highest Price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "view"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-th",\n      onClick: this.props.changeView.bind(null, \'box\')\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-list",\n      onClick: this.props.changeView.bind(null, \'long\')\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "listings-results"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "row"\n    }, this.loopListings())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "pagination"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "row"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "pages"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n      className: "active"\n    }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Next")))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/realEstate/Listings.js?');
    },
    "./assets/js/realEstate/data/listingsData.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var listingsData = [{\n  address: '2034 Grand Ave.',\n  city: 'Ridgewood',\n  state: 'NY',\n  rooms: 3,\n  price: 220000,\n  floorSpace: 1200,\n  extras: ['elevator', 'gym'],\n  homeType: 'Condo',\n  image: 'https://images1.apartments.com/i2/wPq2iTReQ5G80C7VRvK4uYMde8jQIcKx6Bsoh6_L5mQ/117/the-oaks-apartments-santee-ca-building-photo.jpg'\n}, {\n  address: '2186 Valley View Blvd.',\n  city: 'San Diego',\n  state: 'CA',\n  rooms: 2,\n  price: 650000,\n  floorSpace: 2356,\n  extras: ['pool'],\n  homeType: 'House',\n  image: 'https://ssl.cdn-redfin.com/photo/48/mbpaddedwide/806/genMid.140056806_2.jpg'\n}, {\n  address: '11008 Collinwood Dr.',\n  city: 'Miami',\n  state: 'CA',\n  rooms: 5,\n  price: 465000,\n  floorSpace: 1800,\n  homeType: 'House',\n  image: 'https://images1.apartments.com/i2/wPq2iTReQ5G80C7VRvK4uYMde8jQIcKx6Bsoh6_L5mQ/117/the-oaks-apartments-santee-ca-building-photo.jpg'\n}, {\n  address: '1866 Flume Dr.',\n  city: 'San Diego',\n  state: 'CA',\n  rooms: 4,\n  price: 780000,\n  floorSpace: 2540,\n  extras: ['pool'],\n  homeType: 'House',\n  image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'\n}, {\n  address: '1459 Main St',\n  city: 'Miami',\n  state: 'CA',\n  rooms: 5,\n  price: 356000,\n  floorSpace: 1450,\n  extras: [],\n  homeType: 'Apartment',\n  image: 'https://lasvegasliving.mytouchtour.com/blog/wp-content/uploads/2014/06/Firenze-Apartments.jpg'\n}, {\n  address: '1250 PB Dr.',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 6,\n  price: 3000000,\n  floorSpace: 4000,\n  extras: ['pool', 'gym'],\n  homeType: 'Apartment',\n  image: 'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/163604829176012541_812x.jpg?v=1637609172'\n}, {\n  address: '1250 PB Dr.',\n  city: 'Los Angeles',\n  state: 'CA',\n  rooms: 0,\n  price: 3000000,\n  floorSpace: 600,\n  extras: ['pool', 'gym'],\n  homeType: 'Studio',\n  image: 'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/163604829176012541_812x.jpg?v=1637609172'\n}, {\n  address: '1459 Main St',\n  city: 'Houston',\n  state: 'Texas',\n  rooms: 1,\n  price: 1000,\n  floorSpace: 400,\n  extras: [],\n  homeType: 'Room',\n  image: 'https://lasvegasliving.mytouchtour.com/blog/wp-content/uploads/2014/06/Firenze-Apartments.jpg'\n}, {\n  address: '2186 Valley View Blvd.',\n  city: 'Brooklyn',\n  state: 'New York',\n  rooms: 2,\n  price: 776000,\n  floorSpace: 1400,\n  extras: ['elevator'],\n  homeType: 'House',\n  image: 'https://ssl.cdn-redfin.com/photo/48/mbpaddedwide/806/genMid.140056806_2.jpg'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (listingsData);\n\n//# sourceURL=webpack:///./assets/js/realEstate/data/listingsData.js?");
    },
    "./assets/js/realEstate/realEstate.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ "./assets/js/realEstate/Header.js");\n/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter.js */ "./assets/js/realEstate/Filter.js");\n/* harmony import */ var _Listings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listings.js */ "./assets/js/realEstate/Listings.js");\n/* harmony import */ var _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/listingsData.js */ "./assets/js/realEstate/data/listingsData.js");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\',\n      city: \'All\',\n      homeType: \'All\',\n      bedrooms: 0,\n      listingsData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],\n      min_price: 0,\n      max_price: 10000000,\n      min_floor_space: 0,\n      max_floor_space: 50000,\n      basement: false,\n      elevator: false,\n      gym: false,\n      swimming_pool: false,\n      filteredData: _data_listingsData_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],\n      populateFormsData: \'\',\n      sortby: \'price-dsc\',\n      view: \'box\',\n      search: \'\'\n    };\n    this.change = this.change.bind(this);\n    this.filteredData = this.filteredData.bind(this);\n    this.populateForms = this.populateForms.bind(this);\n    this.changeView = this.changeView.bind(this);\n  }\n\n  componentWillMount() {\n    let listingsData = this.state.listingsData.sort((a, b) => {\n      return a.price - b.price;\n    });\n    this.setState({\n      listingsData\n    });\n  }\n\n  change(event) {\n    var name = event.target.name;\n    var value = event.target.type === \'checkbox\' ? event.target.checked : event.target.value;\n    this.setState({\n      [name]: value\n    }, () => {\n      console.log(this.state);\n      this.filteredData();\n    });\n  }\n\n  changeView(viewStyle) {\n    this.setState({\n      view: viewStyle\n    });\n  }\n\n  filteredData() {\n    var newData = this.state.listingsData.filter(item => {\n      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms;\n    });\n\n    if (this.state.city != \'All\') {\n      newData = newData.filter(item => {\n        return item.city == this.state.city;\n      });\n    }\n\n    if (this.state.homeType != \'All\') {\n      newData = newData.filter(item => {\n        return item.homeType == this.state.homeType;\n      });\n    }\n\n    if (this.state.sortby == \'price-dsc\') {\n      newData = newData.sort((a, b) => {\n        return a.price - b.price;\n      });\n    }\n\n    if (this.state.sortby == \'price-asc\') {\n      newData = newData.sort((a, b) => {\n        return b.price - a.price;\n      });\n    }\n\n    if (this.state.search != \'\') {\n      newData = newData.filter(item => {\n        let city = item.city.toLowerCase();\n        let searchText = this.state.search.toLowerCase();\n        let n = city.match(searchText);\n\n        if (n != null) {\n          return true;\n        }\n      });\n    }\n\n    this.setState({\n      filteredData: newData\n    });\n  }\n\n  populateForms() {\n    // city\n    let cities = this.state.listingsData.map(item => {\n      return item.city;\n    });\n    cities = new Set(cities);\n    cities = [...cities];\n    cities = cities.sort(); // homeType\n\n    let homeTypes = this.state.listingsData.map(item => {\n      return item.homeType;\n    });\n    homeTypes = new Set(homeTypes);\n    homeTypes = [...homeTypes];\n    homeTypes = homeTypes.sort(); // bedrooms\n\n    let bedrooms = this.state.listingsData.map(item => {\n      return item.rooms;\n    });\n    bedrooms = new Set(bedrooms);\n    bedrooms = [...bedrooms];\n    bedrooms = bedrooms.sort();\n    this.setState({\n      populateFormsData: {\n        homeTypes,\n        bedrooms,\n        cities\n      }\n    }, () => {\n      console.log(this.state);\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "content-area"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      change: this.change,\n      globalState: this.state,\n      populateAction: this.populateForms\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listings_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      listingsData: this.state.filteredData,\n      change: this.change,\n      globalState: this.state,\n      changeView: this.changeView\n    })));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/realEstate/realEstate.js?');
    }
});