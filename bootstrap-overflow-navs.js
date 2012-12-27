/* ===================================================
 * bootstrap-overflow-navs.js v0.1
 * ===================================================
 * Copyright 2012 Michael Langford
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function ($) {

	"use strict"; // jshint ;_;
	
	/**
	 * options:
	 *		more - translate of more text
	 *		parent - parent/container div to calculate width from
	 *		offset - any div inside the parent that needs to be subtracted from the parent div width
	 *		override_width - boolean used to override window size check
	 */
	$.fn.overflowNavs = function(options) {
		var more = options.more,
			parent = options.parent,
			offset = options.offset;
		
		// Variable used to override widow size check
		var override_width = false;
		if(options.override_width) {
			override_width = true;
		}
			
		// Only perform this action if menu is not collapsed or override set to true
		// Use width of 967 to allow for scroll bar on 980 windows... there must be a better way
		if($(window).width() > 967 || override_width == true) {
			// Get width of parent so we know how much room we have to work with
			var parent_width = $(parent).width(),
				ul_width = 80, // Alow width of "plus" dropdown
				items = 0;
				
			// If there is something to offset the parent width against 
			if(offset) {
				parent_width = parent_width - $(offset).width();
			}
			
			// Create the dropdown base
			var dropdown = $("<li class=\"dropdown\"></li>"),
				dropdown_link = $("<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#menu1\">" + more + "<b class=\"caret\"></b></a>"),
				dropdown_ul = $("<ul class=\"dropdown-menu\"></ul>");

			// Create menu items
			$("li", this).not("li > ul").each(function() {
				ul_width += $(this).outerWidth();
				// Move item to dropdown list if width compromised
				if(ul_width >= parent_width) {
					if($(this).text()) {
						dropdown_ul.append(this);
						items ++;
					}
					else {
						// Convert divider from vertical to horizontal
						$(this).remove();
						dropdown_ul.append("<li class=\"divider\"></li>");
					}
				}
			});
			
			// Append HTML to document if elements exist
			if(items) {
				dropdown.append(dropdown_link);
				dropdown.append(dropdown_ul);
				this.append(dropdown);
			}
		}
	};

}(window.jQuery);