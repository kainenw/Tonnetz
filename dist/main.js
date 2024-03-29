/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./resources/js/main.js":
      /*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pitch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hertz.js */ \"./resources/js/hertz.js\");\n/* harmony import */ var _transformation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformation.js */ \"./resources/js/transformation.js\");\n/* harmony import */ var _triad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triad.js */ \"./resources/js/triad.js\");\n\n\n\n\nlet triad = { root: 48, third: 52, fifth: 55, isMajor: true }\n\nlet currentChord = document.getElementById('currentChord')\nlet rootName = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteLetter)(triad.root)\nlet thirdName = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteLetter)(triad.third)\nlet fifthName = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteLetter)(triad.fifth)\nlet quality = triad.isMajor ? 'major' : 'minor'\n\ncurrentChord.innerHTML = rootName + ' ' + quality + '<br> root: ' + rootName + '<br>third: ' + thirdName + '<br>fifth: ' + fifthName\n\nconst handleClick = () => {\n\trootName = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteLetter)(triad.root)\n\tthirdName = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteLetter)(triad.third)\n\tfifthName = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteLetter)(triad.fifth)\n\tquality = triad.isMajor ? 'major' : 'minor'\n\tcurrentChord.innerHTML = rootName + ' ' + quality + '<br> root: ' + rootName + '<br>third: ' + thirdName + '<br>fifth: ' + fifthName\n}\n\nconst handleClickC = () => {\n\tconst rootNum = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__.getNoteNum)(0, 4)\n\ttriad = (0,_triad_js__WEBPACK_IMPORTED_MODULE_2__.buildMaj)(rootNum);\n\t(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n\tconsole.log(triad)\n}\n\nconst handleClickP = () => {\n\tconsole.log(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickL = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickR = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickPL = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickPR = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickLR = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickLP = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickRP = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickRL = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickPLR = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickPRL = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickLPR = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickPLRL = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\n\nconst handleClickPRLR = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\nconst handleClickLPRP = () => {\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.L)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.R)(triad)\n\ttriad = (0,_transformation_js__WEBPACK_IMPORTED_MODULE_1__.P)(triad)\n\tconsole.log(triad)\n\t;(0,_triad_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(triad)\n}\n\n\ndocument.addEventListener('click', handleClick)\n\n\nconst C = document.getElementById('C')\n\nconst p = document.getElementById('p')\nconst l = document.getElementById('l')\nconst r = document.getElementById('r')\n\nconst pl = document.getElementById('pl')\nconst pr = document.getElementById('pr')\nconst lr = document.getElementById('lr')\nconst lp = document.getElementById('lp')\nconst rp = document.getElementById('rp')\nconst rl = document.getElementById('rl')\n\nconst plr = document.getElementById('plr')\nconst prl = document.getElementById('prl')\nconst lpr = document.getElementById('lpr')\n\n// plp/lpl prp lrl rpr rlr\n\n/* const plpr = document.getElementById('plpr')\nconst plrl = document.getElementById('plrl')\nconst prlr = document.getElementById('prlr')\nconst lprp = document.getElementById('lprp')\nconst lprl = document.getElementById('lprl') */\n\n// plpl plpr/lplr prpr/rprp prpl lrlp lrlr lplp lplr rlrl rlrp\n\n// \nC.addEventListener('click', handleClickC)\n\np.addEventListener('click', handleClickP)\nl.addEventListener('click', handleClickL)\nr.addEventListener('click', handleClickR)\n\npl.addEventListener('click', handleClickPL)\npr.addEventListener('click', handleClickPR)\nlr.addEventListener('click', handleClickLR)\nlp.addEventListener('click', handleClickLP)\nrp.addEventListener('click', handleClickRP)\nrl.addEventListener('click', handleClickRL)\n\nplr.addEventListener('click', handleClickPLR)\nprl.addEventListener('click', handleClickPRL)\nlpr.addEventListener('click', handleClickLPR)\n\n/* plrp.addEventListener('click', handleClickPLRP)\nplrl.addEventListener('click', handleClickPLRL)\nprlp.addEventListener('click', handleClickPRLP)\nprlr.addEventListener('click', handleClickPRLR)\nlprp.addEventListener('click', handleClickLPRP)\nlprl.addEventListener('click', handleClickLPRL) */\n\n\n\n//# sourceURL=webpack://audio-api/./resources/js/main.js?"
        );

        /***/
      },

    /***/ "./resources/js/hertz.js":
      /*!*******************************!*\
  !*** ./resources/js/hertz.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getFreq\": () => (/* binding */ getFreq),\n/* harmony export */   \"getNoteLetter\": () => (/* binding */ getNoteLetter),\n/* harmony export */   \"getNoteNum\": () => (/* binding */ getNoteNum)\n/* harmony export */ });\n/* This object contains all standard notes in twelve-tone equal temperament with A4=440Hz */\n\nconst notes = [\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 0, \n        freq: 16.35\n    },\n    { \n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 0, \n        freq: 17.32\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 0, \n        freq: 18.35\n    },\n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 0, \n        freq: 19.45\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 0, \n        freq: 20.60\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 0, \n        freq: 21.83\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 0, \n        freq: 23.12\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 0, \n        freq: 24.50\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 0, \n        freq: 25.96\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 0, \n        freq: 27.50\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 0, \n        freq: 29.14\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 0, \n        freq: 30.87},\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 1, \n        freq: 32.70\n    },\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 1, \n        freq: 34.65\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 1, \n        freq: 36.71\n    },\n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        },\n         oct: 1, \n         freq: 38.89\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 1, \n        freq: 41.20\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 1, \n        freq: 43.65\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 1, \n        freq: 46.25\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 1, \n        freq: 49.00\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 1, \n        freq: 51.91\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 1, \n        freq: 55.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 1, \n        freq: 58.27\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 1, \n        freq: 61.74\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 2, \n        freq: 65.41\n    },\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 2, \n        freq: 69.30\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 2, \n        freq: 73.42\n    },\n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 2, \n        freq: 77.78\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 2, \n        freq: 82.41\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 2, \n        freq: 87.31\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 2, \n        freq: 92.50\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 2, \n        freq: 98.00\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#', 'Ab'],\n        },\n        oct: 2, \n        freq: 103.83\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 2, \n        freq: 110.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 2, \n        freq: 116.54\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 2, \n        freq: 123.47\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 3, \n        freq: 130.81\n    },\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 3, \n        freq: 138.59\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 3, \n        freq: 146.83\n    },\n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 3, \n        freq: 155.56\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 3, \n        freq: 164.81\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 3, \n        freq: 174.61\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 3, \n        freq: 185.00\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 3, \n        freq: 196.00\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 3, \n        freq: 207.65\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 3, \n        freq: 220.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 3, \n        freq: 233.08\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 3, \n        freq: 246.94\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 4, \n        freq: 261.63\n    },\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 4, \n        freq: 277.18\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 4, \n        freq: 293.66\n    },\n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 4, \n        freq: 311.13\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 4, \n        freq: 329.63\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 4, \n        freq: 349.23\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 4, \n        freq: 369.99\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 4, \n        freq: 392.00\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 4, \n        freq: 415.30\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 4, \n        freq: 440.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 4, \n        freq: 466.16\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 4, \n        freq: 493.88\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 5, \n        freq: 523.25\n    },\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 5, \n        freq: 554.37\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 5, \n        freq: 587.33\n    },\n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 5, \n        freq: 622.25\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 5, \n        freq: 659.26\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 5, \n        freq: 698.46\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 5, \n        freq: 739.99\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 5, \n        freq: 783.99\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 5, \n        freq: 830.61\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 5, \n        freq: 880.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 5, \n        freq: 932.33\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 5, \n        freq: 987.77\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 6, \n        freq: 1046.50\n    },\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 6, \n        freq: 1108.73\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 6, \n        freq: 1174.66\n    },\n    \n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 6, \n        freq: 1244.51\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 6, \n        freq: 1318.51\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 6, \n        freq: 1396.91\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 6, \n        freq: 1479.98\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 6, \n        freq: 1567.98\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 6, \n        freq: 1661.22\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 6, \n        freq: 1760.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 6, \n        freq: 1864.66\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 6, \n        freq: 1975.53\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 7, \n        freq: 2093.00},\n    {\n        pitchClass: {\n            number: 1,\n            letter: ['C#', 'Db'],\n        }, \n        oct: 7, \n        freq: 2217.46\n    },\n    {\n        pitchClass: {\n            number: 2,\n            letter: 'D',\n        }, \n        oct: 7, \n        freq: 2349.32},\n    \n    {\n        pitchClass: {\n            number: 3,\n            letter: ['D#', 'Eb'],\n        }, \n        oct: 7, \n        freq: 2489.02\n    },\n    {\n        pitchClass: {\n            number: 4,\n            letter: 'E',\n        },\n        oct: 7, \n        freq: 2637.02\n    },\n    {\n        pitchClass: {\n            number: 5,\n            letter: 'F',\n        }, \n        oct: 7, \n        freq: 2793.83\n    },\n    {\n        pitchClass: {\n            number: 6,\n            letter: ['F#', 'Gb'],\n        },\n        oct: 7, \n        freq: 2959.96\n    },\n    {\n        pitchClass: {\n            number: 7,\n            letter: 'G',\n        }, \n        oct: 7, \n        freq: 3135.96\n    },\n    {\n        pitchClass: {\n            number: 8,\n            letter: ['G#','Ab'],\n        }, \n        oct: 7, \n        freq: 3322.44\n    },\n    {\n        pitchClass: {\n            number: 9,\n            letter: 'A',\n        }, \n        oct: 7, \n        freq: 3520.00\n    },\n    {\n        pitchClass: {\n            number: 10,\n            letter: ['A#', 'Bb']\n        }, \n        oct: 7, \n        freq: 3729.31\n    },\n    {\n        pitchClass: {\n            number: 11,\n            letter: 'B',\n        }, \n        oct: 7, \n        freq: 3951.07\n    },\n    {\n        pitchClass: {\n            number: 0,\n            letter: 'C',\n        },\n        oct: 8, \n        freq: 4186.01\n    }\n]\n\n/* get the desired note by entering the pitch class and octave number (e.g. (9, 4) which is A4) this allows notes to be referenced intuitively but also for intervals to be retrieved easily. */\n\n\nconst getNoteNum = (pitchClass, octave) => {\n\tconst octShift = octave * 12\n\tconst noteNum = pitchClass + octShift\n\treturn noteNum\n}\n\nconst getFreq = (noteNum) => {\n    const freq = notes[noteNum].freq\n\treturn freq\n}\n\nconst getNoteLetter = (noteNum) => {\n    const noteLetter = notes[noteNum].pitchClass.letter\n    return noteLetter\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFreq);\n\n//# sourceURL=webpack://audio-api/./resources/js/hertz.js?"
        );

        /***/
      },

    /***/ "./resources/js/tone.js":
      /*!******************************!*\
  !*** ./resources/js/tone.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pitch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hertz.js */ "./resources/js/hertz.js");\n\n\n\nconst generateTone = (num, decayTime = 1, waveType = \'sine\') => {\n\tconst freq = (0,_pitch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(num)\n\tconst context = new AudioContext()\n\tconst o = context.createOscillator()\n\tconst  g = context.createGain()\n\to.type = waveType\n\n    //connect to output\n\to.connect(g)\n\tg.connect(context.destination)\n\n\t//frequency\n\to.frequency.value = freq;\n\t//gain\n\tg.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)\n\t\n\to.start()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTone);\n\n\n//# sourceURL=webpack://audio-api/./resources/js/tone.js?'
        );

        /***/
      },

    /***/ "./resources/js/transformation.js":
      /*!****************************************!*\
  !*** ./resources/js/transformation.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"L\": () => (/* binding */ L),\n/* harmony export */   \"P\": () => (/* binding */ P),\n/* harmony export */   \"R\": () => (/* binding */ R)\n/* harmony export */ });\n// this code is for parsimonious voice leading with only one option programmed so far\r\n/* const transformation = (origin, trans) => {\r\n    if(origin.inversion === 0) {\r\n        if(trans === 'r') {\r\n            if(origin.quality === 'maj'){\r\n                let root = origin.root\r\n                let newRoot = root[0] + 9\r\n                newRoot = mod12(newRoot, root[1])\r\n                console.log(newRoot)\r\n                const newInversion = origin.inversion + 2 % 3\r\n                const newQuality = 'min'\r\n                const nextTriad = buildTriad(newRoot[0], newRoot[1], newInversion, newQuality)\r\n                console.log(origin.root)\r\n                return nextTriad\r\n            }\r\n        }\r\n    }\r\n} */\r\n\r\n// TODO fix this so its not broken wasMaj\r\n\r\n\r\nconst L = ({ root, third, fifth, isMajor }) => {\r\n    let triad\r\n    if(isMajor){\r\n        triad = {\r\n            root: third,\r\n            third: fifth,\r\n            fifth: root - 1,\r\n            isMajor: false\r\n        }\r\n    } else {\r\n        triad = {\r\n            root: fifth + 1,\r\n            third: root,\r\n            fifth: third,\r\n            isMajor: true\r\n        }\r\n    }\r\n    return triad\r\n}\r\n\r\nconst P = ({ root, third, fifth, isMajor }) => {\r\n    third = isMajor ? third - 1 : third + 1\r\n    return {\r\n        root: root,\r\n        third: third,\r\n        fifth: fifth,\r\n        isMajor: !isMajor\r\n    };\r\n}\r\n\r\nconst R = ({ root, third, fifth, isMajor }) => {\r\n    let triad\r\n    if (isMajor) {\r\n        triad = {\r\n            root: fifth + 2,\r\n            third: root,\r\n            fifth: third,\r\n            isMajor: false\r\n        }\r\n    } else {\r\n        triad = {\r\n            root: third,\r\n            third: fifth,\r\n            fifth: root - 2,\r\n            isMajor: true\r\n        }\r\n    }\r\n    return triad\r\n}\r\n\r\n//export default transformation\r\n\n\n//# sourceURL=webpack://audio-api/./resources/js/transformation.js?"
        );

        /***/
      },

    /***/ "./resources/js/triad.js":
      /*!*******************************!*\
  !*** ./resources/js/triad.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "buildMaj": () => (/* binding */ buildMaj),\n/* harmony export */   "buildMin": () => (/* binding */ buildMin),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   "firstInversion": () => (/* binding */ firstInversion),\n/* harmony export */   "secondInversion": () => (/* binding */ secondInversion)\n/* harmony export */ });\n/* harmony import */ var _pitch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hertz.js */ "./resources/js/hertz.js");\n/* harmony import */ var _tone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tone.js */ "./resources/js/tone.js");\n\n\n\n\nconst firstInversion = ({ root, third, fifth }) => {\n    fifth -= 12\n    const triad = { root, third, fifth }\n    return triad\n}\n\nconst secondInversion = ({ root, third, fifth }) => {\n    third -= 12\n    fifth -= 12\n    return { \n        root: root, \n        third: third, \n        fifth: fifth\n    }\n}\n\nconst buildMaj = ( root ) => {\n    let third = root + 4\n    let fifth = root + 7\n    return { \n        root: root, \n        third: third, \n        fifth: fifth,\n        isMajor: true\n    }\n}\n\nconst buildMin = ( root ) => {\n    let third = root + 3\n    let fifth = root + 7\n    const triad = {\n        root: root, \n        third: third, \n        fifth: fifth,\n        isMajor: false\n    }\n    return triad;\n}\n\nconst playTriad = ({ root, third, fifth}) => {\n    ;(0,_tone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(root);\n    (0,_tone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(third);\n    (0,_tone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fifth);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playTriad);\n\n\n\n//# sourceURL=webpack://audio-api/./resources/js/triad.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__(
    "./resources/js/main.js"
  );
  /******/
  /******/
})();
