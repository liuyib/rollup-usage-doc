"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _=_interopDefault(require("lodash")),UtilDependA=function(){console.log("UtilDependA")},UtilDependB=function(){console.log("UtilDependB")},UtilFn=function(){UtilDependA(),UtilDependB(),console.log("UtilFn"),_.chunk([[3,[3,4]],[2,1]],3)};module.exports=UtilFn;