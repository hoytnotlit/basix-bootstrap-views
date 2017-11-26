# basix-bootstrap-views
Simple framework for splitting the HTML code into smaller parts, views.

## Getting Started

Add Javascript references to HTML document

```
<script src="basix-bootstrap-views.js"></script>

```

Then, add references to the /config/config.js

```
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

```

Finally, add corresponding pages and styles into their own folders. Remember to name them as named in config.js

```
For example:
"navbar.view" -> /view/navbar.view

```

### Prerequisites

No prequisites

### Creating styles

Style files need to have everything within their <style></style> -tags.

```
<style>
body {background-color: white;}
</style>
```

## Additional

Create your models and controllers and start coding!

## Used With

* https://getbootstrap.com/ - Bootstrap Framework


## Authors

* **Pasi Talvitie** - *Initial*


## License

This project is licensed under the General Public License - see the [LICENSE](LICENSE) file for details
