/* basix.js

Author: Pasi Talvitie
Date: 26.11.2017

License: General Public License 3.0

*/

/* #################################################################################################
####################################################################################################
############################# EDIT ONLY THE FOLLOWING ####################################################*/
var bxConfig = {

	// Add the filename here and then add the file into 'views' folder.
	views: [
		"navbar.view",
		"jumbotron.view",
		"table.view",
		"form.view",
		"well.view"
	],
	// Add the filename and then add the file into 'styles' folder.
	styles: [
		"custom.style"
	]

};


/* ################################################################################################
############################## DO NOT EDIT AFTER THIS LINE ##################################################
#################################################################################################*/

// Load libraries
var bxLib = document.createElement('script');
bxLib.src = 'config/lib/lib.js';
document.head.appendChild(bxLib);