webpackJsonp([1],{0:function(t,o,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a(1),c=n(i);a(32),a(6),a(8),a(14);var e=a(22),l=(n(e),a(29));(0,l.applyFastClick)();var u=window.location.pathname.split("/");u[u.length-1];(0,c.default)("body > *").css("opacity",0).animate({opacity:"1"},150),(0,c.default)(".button-object").click(function(){var t=(0,c.default)(this),o=t.attr("id").split("-")[1];console.log(o),(0,c.default)("body > *").not("body > #background-container").animate({opacity:"0"},150,function(){window.location=o+".html"})})},32:function(t,o){}});