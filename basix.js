/* basix.js

Author: Pasi Talvitie
Date: 26.11.2017

License: General Public License 3.0

*/


// Load config
var bxConf = document.createElement('script');
bxConf.src = 'config/config.js';
document.head.appendChild(bxConf);

// Run actions
window.onload = function() {

	// Load libraries
	var lib = new bxLibrary();
	// Render views
	lib.RenderViews();
	// Load Styles
	lib.LoadStyles();	
};