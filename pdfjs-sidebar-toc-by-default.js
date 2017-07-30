// ==UserScript==
// @name        pdfjs-sidebar-toc-by-default
// @namespace	github.com/heussd/pdfjs-sidebar-toc-by-default
// @description	Opens the TOC in Mozilla's PDF.js by default 
// @include     *.pdf
// @version     1.0
// ==/UserScript==

document.location.href = document.location.href + "#pagemode=outline"
