Bootstrap Overflow Navs Instructions
====================================

Bootstrap is required for this jQuery plugin to work, download it from http://twitter.github.com/bootstrap/

## Getting started

Include jQuery, bootstrap (CSS and Javascript) and the plugin on a page. Then select a nav to apply the plugin to.

Below is the HTML for a bootstrap navbar.

```html
<div class="nav-collapse">
    <ul id="menu" class="nav">
        <li class=""><a href="#">Menu 1</a></li>
        <li class=""><a href="#"">Menu 2</a></li>
        <li class=""><a href="#"">Menu 3</a></li>
        <li class=""><a href="#"">Menu 4</a></li>
        <li class=""><a href="#"">Menu 5</a></li>
        <li class=""><a href="#"">Menu 6</a></li>
        <li class=""><a href="#"">Menu 7</a></li>
        <li class=""><a href="#"">Menu 8</a></li>
    </ul>
</div>
<script src="jquery.js"></script>
<script src="bootstrap.js"></script>
<script src="bootstrap-overflow-navs.js"></script>
<script>
    $("#menu").overflowNavs({
        "more" : "More", 
        "parent" : ".nav-collapse",
        "override_width" : true
    });
</script>
```

## Contributing

Anyone is welcome to help improve this plugin

	


