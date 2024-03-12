/*! jest-webrtc-mock - ver 1.0.6 created:2024/3/12 13:57:53 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,(()=>(()=>{"use strict";var e={254:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mockAudioContextClear=t.mockAudioContext=void 0,t.mockAudioContext=function(){},t.mockAudioContextClear=function(){}},266:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EventListener=void 0;var o=function(){function e(){this.eventMap={}}return e.prototype.addEventListener=function(e,t){this.eventMap[e]?this.eventMap[e].push(t):this.eventMap[e]=[t]},e.prototype.removeEventListener=function(e,t){if(this.eventMap[e])for(var o=0;o<this.eventMap[e].length;++o)if(this.eventMap[e][o]===t){this.eventMap[e].splice(o,1);break}},e}();t.EventListener=o},921:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mockMediaSourceClear=t.mockMediaSource=t.MediaSource=t.mockMediaSourceSupportedCodecs=void 0;var n=[];t.mockMediaSourceSupportedCodecs=function(e){n=e};var r=function(){function e(){}return e.isTypeSupported=function(e){return n.includes(e)},e}();t.MediaSource=r,t.mockMediaSource=function(){o.g.MediaSource=r},t.mockMediaSourceClear=function(){delete o.g.MediaSource}},966:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mockWebAssemblyClear=t.mockWebAssembly=void 0,t.mockWebAssembly=function(){WebAssembly},t.mockWebAssemblyClear=function(){delete o.g.WebAssembly}},411:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mockVideoDecoder=t.VideoDecoder=void 0;var o=function(){function e(e){this.state="unconfigured",this.decodeQueueSize=0,this.init=e}return e.isConfigSupported=function(t){return new Promise((function(o,n){for(var r,c={supported:!1,config:t},i=0;i<e.supportVideoDeocderConfigArr.length;++i)if((r=e.supportVideoDeocderConfigArr[i]).codec===t.codec&&(void 0===t.hardwareAcceleration||t.hardwareAcceleration===r.hardwareAcceleration)){c.supported=!0;break}o(c)}))},e.supportVideoDeocderConfigArr=[],e}();t.VideoDecoder=o,t.mockVideoDecoder=function(e){Object.defineProperty(window,"VideoDecoder",{configurable:!0,writable:!0,value:o}),o.supportVideoDeocderConfigArr=e}},98:function(e,t,o){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.RTCDataChannel=void 0;var c=function(e){function t(){return e.call(this)||this}return r(t,e),Object.defineProperty(t.prototype,"readyState",{get:function(){return"open"},enumerable:!1,configurable:!0}),t.prototype.send=function(){},t.prototype.close=function(){},t}(o(266).EventListener);t.RTCDataChannel=c},501:function(e,t,o){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.mockRTCPeerConnectionClear=t.mockRTCPeerConnection=t.RTCPeerConnection=void 0;var c=o(266),i=o(98),u=function(e){function t(t){var o=e.call(this)||this;return o.mock_data=new a,o}return r(t,e),t.prototype.mockData=function(e,t){return this.mock_data.mock(e,t)},t.prototype.createOffer=function(){var e=this;return new Promise((function(t,o){var n=e.mock_data.getData(1);n&&t(n)}))},t.prototype.createAnswer=function(){var e=this;return new Promise((function(t,o){var n=e.mock_data.getData(2);n&&t(n)}))},t.prototype.setLocalDescription=function(){return new Promise((function(e,t){e()}))},t.prototype.setRemoteDescription=function(){return new Promise((function(e,t){e()}))},t.prototype.createDataChannel=function(){return new i.RTCDataChannel},t.prototype.addIceCandidate=function(){return new Promise((function(e,t){e()}))},t.prototype.close=function(){},t.prototype.getReceivers=function(){return[]},t.prototype.getSenders=function(){return[]},t.prototype.getStats=function(e){return new Promise((function(e,t){}))},t}(c.EventListener);t.RTCPeerConnection=u;var a=function(){function e(){this.rtc_offer={type:"offer",sdp:""},this.rtc_answer={type:"answer",sdp:""}}return e.prototype.mock=function(e,t){if(1===e){if("offer"===t.type&&void 0!==t.sdp&&t.sdp.length>0)return this.rtc_offer=t,!0}else if(2===e&&"answer"===t.type&&void 0!==t.sdp&&t.sdp.length>0)return this.rtc_answer=t,!0;return!1},e.prototype.getData=function(e){return 1===e?this.rtc_offer:2===e?this.rtc_answer:null},e}();t.mockRTCPeerConnection=function(){Window.RTCPeerConnection=u,o.g.RTCPeerConnection=u},t.mockRTCPeerConnectionClear=function(){delete Window.RTCPeerConnection,delete o.g.RTCPeerConnection}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n].call(c.exports,c,c.exports,o),c.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.mockWebAssemblyClear=e.mockWebAssembly=e.mockVideoDecoder=e.mockRTCPeerConnectionClear=e.mockRTCPeerConnection=e.mockMediaSourceSupportedCodecs=e.mockMediaSourceClear=e.mockMediaSource=e.mockAudioContextClear=e.mockAudioContext=void 0;var t=o(254);Object.defineProperty(e,"mockAudioContext",{enumerable:!0,get:function(){return t.mockAudioContext}}),Object.defineProperty(e,"mockAudioContextClear",{enumerable:!0,get:function(){return t.mockAudioContextClear}});var r=o(411);Object.defineProperty(e,"mockVideoDecoder",{enumerable:!0,get:function(){return r.mockVideoDecoder}});var c=o(501);Object.defineProperty(e,"mockRTCPeerConnection",{enumerable:!0,get:function(){return c.mockRTCPeerConnection}}),Object.defineProperty(e,"mockRTCPeerConnectionClear",{enumerable:!0,get:function(){return c.mockRTCPeerConnectionClear}});var i=o(921);Object.defineProperty(e,"mockMediaSource",{enumerable:!0,get:function(){return i.mockMediaSource}}),Object.defineProperty(e,"mockMediaSourceClear",{enumerable:!0,get:function(){return i.mockMediaSourceClear}}),Object.defineProperty(e,"mockMediaSourceSupportedCodecs",{enumerable:!0,get:function(){return i.mockMediaSourceSupportedCodecs}});var u=o(966);Object.defineProperty(e,"mockWebAssembly",{enumerable:!0,get:function(){return u.mockWebAssembly}}),Object.defineProperty(e,"mockWebAssemblyClear",{enumerable:!0,get:function(){return u.mockWebAssemblyClear}})})(),n})()));