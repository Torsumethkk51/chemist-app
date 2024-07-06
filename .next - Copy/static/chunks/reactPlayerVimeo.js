/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerVimeo"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Vimeo.js":
/*!********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vimeo.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Vimeo_exports = {};\n__export(Vimeo_exports, {\n  default: () => Vimeo\n});\nmodule.exports = __toCommonJS(Vimeo_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://player.vimeo.com/api/player.js\";\nconst SDK_GLOBAL = \"Vimeo\";\nconst cleanUrl = (url) => {\n  return url.replace(\"/manage/videos\", \"\");\n};\nclass Vimeo extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Prevent checking isLoading when URL changes\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"secondsLoaded\", null);\n    __publicField(this, \"mute\", () => {\n      this.setMuted(true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.setMuted(false);\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    this.duration = null;\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Vimeo2) => {\n      if (!this.container)\n        return;\n      const { playerOptions, title } = this.props.config;\n      this.player = new Vimeo2.Player(this.container, {\n        url: cleanUrl(url),\n        autoplay: this.props.playing,\n        muted: this.props.muted,\n        loop: this.props.loop,\n        playsinline: this.props.playsinline,\n        controls: this.props.controls,\n        ...playerOptions\n      });\n      this.player.ready().then(() => {\n        const iframe = this.container.querySelector(\"iframe\");\n        iframe.style.width = \"100%\";\n        iframe.style.height = \"100%\";\n        if (title) {\n          iframe.title = title;\n        }\n      }).catch(this.props.onError);\n      this.player.on(\"loaded\", () => {\n        this.props.onReady();\n        this.refreshDuration();\n      });\n      this.player.on(\"play\", () => {\n        this.props.onPlay();\n        this.refreshDuration();\n      });\n      this.player.on(\"pause\", this.props.onPause);\n      this.player.on(\"seeked\", (e) => this.props.onSeek(e.seconds));\n      this.player.on(\"ended\", this.props.onEnded);\n      this.player.on(\"error\", this.props.onError);\n      this.player.on(\"timeupdate\", ({ seconds }) => {\n        this.currentTime = seconds;\n      });\n      this.player.on(\"progress\", ({ seconds }) => {\n        this.secondsLoaded = seconds;\n      });\n      this.player.on(\"bufferstart\", this.props.onBuffer);\n      this.player.on(\"bufferend\", this.props.onBufferEnd);\n      this.player.on(\"playbackratechange\", (e) => this.props.onPlaybackRateChange(e.playbackRate));\n    }, this.props.onError);\n  }\n  refreshDuration() {\n    this.player.getDuration().then((duration) => {\n      this.duration = duration;\n    });\n  }\n  play() {\n    const promise = this.callPlayer(\"play\");\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.callPlayer(\"unload\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"setCurrentTime\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  setMuted(muted) {\n    this.callPlayer(\"setMuted\", muted);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.secondsLoaded;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      overflow: \"hidden\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        key: this.props.url,\n        ref: this.ref,\n        style\n      }\n    );\n  }\n}\n__publicField(Vimeo, \"displayName\", \"Vimeo\");\n__publicField(Vimeo, \"canPlay\", import_patterns.canPlay.vimeo);\n__publicField(Vimeo, \"forceLoad\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvVmltZW8uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxvRkFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0EsT0FBTztBQUNQLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvVmltZW8uanM/NDE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgVmltZW9fZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoVmltZW9fZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBWaW1lb1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhWaW1lb19leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzXCI7XG5jb25zdCBTREtfR0xPQkFMID0gXCJWaW1lb1wiO1xuY29uc3QgY2xlYW5VcmwgPSAodXJsKSA9PiB7XG4gIHJldHVybiB1cmwucmVwbGFjZShcIi9tYW5hZ2UvdmlkZW9zXCIsIFwiXCIpO1xufTtcbmNsYXNzIFZpbWVvIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgLy8gUHJldmVudCBjaGVja2luZyBpc0xvYWRpbmcgd2hlbiBVUkwgY2hhbmdlc1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYWxsUGxheWVyXCIsIGltcG9ydF91dGlscy5jYWxsUGxheWVyKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZHVyYXRpb25cIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImN1cnJlbnRUaW1lXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJzZWNvbmRzTG9hZGVkXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0TXV0ZWQodHJ1ZSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldE11dGVkKGZhbHNlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmXCIsIChjb250YWluZXIpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gbnVsbDtcbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbigoVmltZW8yKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB7IHBsYXllck9wdGlvbnMsIHRpdGxlIH0gPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IFZpbWVvMi5QbGF5ZXIodGhpcy5jb250YWluZXIsIHtcbiAgICAgICAgdXJsOiBjbGVhblVybCh1cmwpLFxuICAgICAgICBhdXRvcGxheTogdGhpcy5wcm9wcy5wbGF5aW5nLFxuICAgICAgICBtdXRlZDogdGhpcy5wcm9wcy5tdXRlZCxcbiAgICAgICAgbG9vcDogdGhpcy5wcm9wcy5sb29wLFxuICAgICAgICBwbGF5c2lubGluZTogdGhpcy5wcm9wcy5wbGF5c2lubGluZSxcbiAgICAgICAgY29udHJvbHM6IHRoaXMucHJvcHMuY29udHJvbHMsXG4gICAgICAgIC4uLnBsYXllck9wdGlvbnNcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wbGF5ZXIucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgaWZyYW1lID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgaWZyYW1lLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgICB0aGlzLnBsYXllci5vbihcImxvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZWFkeSgpO1xuICAgICAgICB0aGlzLnJlZnJlc2hEdXJhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXllci5vbihcInBsYXlcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUGxheSgpO1xuICAgICAgICB0aGlzLnJlZnJlc2hEdXJhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXllci5vbihcInBhdXNlXCIsIHRoaXMucHJvcHMub25QYXVzZSk7XG4gICAgICB0aGlzLnBsYXllci5vbihcInNlZWtlZFwiLCAoZSkgPT4gdGhpcy5wcm9wcy5vblNlZWsoZS5zZWNvbmRzKSk7XG4gICAgICB0aGlzLnBsYXllci5vbihcImVuZGVkXCIsIHRoaXMucHJvcHMub25FbmRlZCk7XG4gICAgICB0aGlzLnBsYXllci5vbihcImVycm9yXCIsIHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgICB0aGlzLnBsYXllci5vbihcInRpbWV1cGRhdGVcIiwgKHsgc2Vjb25kcyB9KSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBzZWNvbmRzO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXllci5vbihcInByb2dyZXNzXCIsICh7IHNlY29uZHMgfSkgPT4ge1xuICAgICAgICB0aGlzLnNlY29uZHNMb2FkZWQgPSBzZWNvbmRzO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXllci5vbihcImJ1ZmZlcnN0YXJ0XCIsIHRoaXMucHJvcHMub25CdWZmZXIpO1xuICAgICAgdGhpcy5wbGF5ZXIub24oXCJidWZmZXJlbmRcIiwgdGhpcy5wcm9wcy5vbkJ1ZmZlckVuZCk7XG4gICAgICB0aGlzLnBsYXllci5vbihcInBsYXliYWNrcmF0ZWNoYW5nZVwiLCAoZSkgPT4gdGhpcy5wcm9wcy5vblBsYXliYWNrUmF0ZUNoYW5nZShlLnBsYXliYWNrUmF0ZSkpO1xuICAgIH0sIHRoaXMucHJvcHMub25FcnJvcik7XG4gIH1cbiAgcmVmcmVzaER1cmF0aW9uKCkge1xuICAgIHRoaXMucGxheWVyLmdldER1cmF0aW9uKCkudGhlbigoZHVyYXRpb24pID0+IHtcbiAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9KTtcbiAgfVxuICBwbGF5KCkge1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmNhbGxQbGF5ZXIoXCJwbGF5XCIpO1xuICAgIGlmIChwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLmNhdGNoKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgfVxuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlXCIpO1xuICB9XG4gIHN0b3AoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwidW5sb2FkXCIpO1xuICB9XG4gIHNlZWtUbyhzZWNvbmRzLCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRDdXJyZW50VGltZVwiLCBzZWNvbmRzKTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFZvbHVtZVwiLCBmcmFjdGlvbik7XG4gIH1cbiAgc2V0TXV0ZWQobXV0ZWQpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRNdXRlZFwiLCBtdXRlZCk7XG4gIH1cbiAgc2V0TG9vcChsb29wKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0TG9vcFwiLCBsb29wKTtcbiAgfVxuICBzZXRQbGF5YmFja1JhdGUocmF0ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFBsYXliYWNrUmF0ZVwiLCByYXRlKTtcbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kdXJhdGlvbjtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlY29uZHNMb2FkZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgIGRpc3BsYXlcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGtleTogdGhpcy5wcm9wcy51cmwsXG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIHN0eWxlXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChWaW1lbywgXCJkaXNwbGF5TmFtZVwiLCBcIlZpbWVvXCIpO1xuX19wdWJsaWNGaWVsZChWaW1lbywgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LnZpbWVvKTtcbl9fcHVibGljRmllbGQoVmltZW8sIFwiZm9yY2VMb2FkXCIsIHRydWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Vimeo.js\n"));

/***/ })

}]);