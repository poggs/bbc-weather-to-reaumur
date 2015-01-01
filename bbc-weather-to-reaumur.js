// ==UserScript==
// @name         BBC Weather to Reaumur
// @namespace    http://opensource.poggs.com/misc/reaumur-weather.js
// @version      0.1
// @description  Displays the weather on the BBC Weather website in degrees Reaumur
// @author       Peter Hicks
// @match        *://*.bbc.co.uk/weather/
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {

    var nodes = document.querySelectorAll("span[data-unit='c']");

    for(var i=0; i<nodes.length; i++) {
        nodes[i].removeChild(nodes[i].children[0]);
        var temp_c = parseInt(nodes[i].innerHTML, 10);
        var temp_f = Math.round(temp_c / 5 * 4);

        nodes[i].innerHTML = temp_f.toString();

        var node = document.createElement('span');
        node.setAttribute('class', 'unit');
        var textNode = document.createTextNode('°Re');
        node.appendChild(textNode);
        nodes[i].appendChild(node);

    }
    
});
