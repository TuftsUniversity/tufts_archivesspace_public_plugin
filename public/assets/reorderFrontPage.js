
if (top.location.pathname === '/'){
  document.addEventListener("DOMContentLoaded", function () {

		$("ul.navbar-nav").css({"width": "100%"})
		$("<li id='search-label-for-js' class='nav-item p-2'><a class='nav-link'>Search:</a></li>").insertAfter($(".navbar li:nth-child(2)"));

		
		// Insert the "Search:" label after the 2nd navbar item, if not already present
		if (!$("#search-label-for-js").length) {
		  $("<li id='search-label-for-js' class='nav-item p-2'><a class='nav-link'>Search:</a></li>")
			.insertAfter($(".navbar li:nth-child(2)"));
		}

		
		// Float both to the right
		$("#search-label-for-js, li:has(a[title='Search The Archives'])").css("float", "right");

        

        $("#search-label-for-js a").hover(function() {
                $("#search-label-for-js a").css("pointer-events", "none")
        });

		$(".navbar li:nth-child(4)").css({"float": "right"})

        $("<li class='nav-item p-2'><a class='nav-link' href='https://archives.tufts.edu'>Home</a>").insertBefore($(".navbar li:nth-child(1)"));


				// Set each <li> to behave like flex items
		$(".navbar-nav > li").css({
		  "display": "inline-flex",
		  "align-items": "center"
		});


		// Push the "Search The Archives" link and label all the way to the right
		// Move both the label and the "Search The Archives" link to the right
		const searchLinkItem = $("li:has(a[title='Search The Archives'])");

		// Ensure "Search:" label appears immediately to the left of "Search The Archives"
		$("#search-label-for-js").insertBefore(searchLinkItem);

		const searchLabel = $("#search-label-for-js");

		searchLabel.insertBefore(searchLinkItem);

/* 		// Use a wrapper to push them
		$("<div class='search-right-group'></div>")
		  .css({
			"margin-left": "auto",
			"display": "flex"
		  })
		  .append(searchLabel)
		  .append(searchLinkItem)
		  .appendTo($(".navbar-nav"));
		   */
		  
		//
		const wrapperLi = $("<li class='nav-item search-right-group'></li>")
			.css({
			"margin-left": "auto",
			"display": "flex",
			"align-items": "center",
			"gap": "8px" // optional spacing
			})
			.append(searchLabel)
			.append(searchLinkItem);

		// Append the new wrapper <li> to the navbar
		$(".navbar-nav").append(wrapperLi);



       //
        // run test on initial page load
        checkSize();
        $(window).resize(checkSize);
        // run test on resize of the window
                function checkSize(){
                if ($(".navbar li:nth-child(2)").css("padding-right") == "2px"){

                        // do something here
                        $(".navbar li:nth-child(2)").css({"padding-right": "2px"});


                }
        }


        $("h2").prependTo($("#content"));
        $("<br /><br />").appendTo($("h2"));
        $("#content .search").insertAfter($("h2"));
        $('.search').not(':last').remove()
		
				  // Step 1: Find all .col-sm-12 sections in #content
		const sections = document.querySelectorAll("#content .col-sm-12");

		for (const section of sections) {
		if (!section.querySelector("hr")) continue; // Skip if it doesn't contain <hr>

		const innerDivs = section.querySelectorAll(":scope > div");
		for (const div of innerDivs) {
		  const cols = div.querySelectorAll(":scope > .col-sm-6");
		  if (cols.length === 2) {
			const row = document.createElement("div");
			row.className = "row";
			row.appendChild(cols[0]);
			row.appendChild(cols[1]);
			div.insertBefore(row, cols[1].nextSibling);
			break; // only do this once
		  }
		}
		}
	});

}



if (/collection_organization/.test(top.location.pathname))
{
 document.addEventListener("DOMContentLoaded", function() {
     $("#record-number-0").remove();
});


}
if (top.location.pathname !== '/')

        //$(document).ready(function () {
        document.addEventListener("DOMContentLoaded", function() {
			
	

		var buttonList = $(".text-right ul.list-inline");

	    // Locate the specific <li> elements for each button
	    var askQuestionButton = buttonList.find("a[title='Ask a Question']").closest("li");
	    var aeonRequestButton = buttonList.find("#aeon_request_button").closest("li");
	    var citationButton = buttonList.find("form#cite_sub").closest("li"); 

	    // Ensure the elements exist before proceeding 
	    if (askQuestionButton.length && aeonRequestButton.length && citationButton.length) {
	 	 // Reorder the buttons
	    askQuestionButton.detach().appendTo(buttonList); // Move "Ask a Question" to the end
		aeonRequestButton.detach().insertBefore(askQuestionButton); // Move "Aeon Request" before "Ask a Question"
	    } else {
		   console.error("Some elements could not be found.");
	    }

//      });

		$("ul.navbar-nav").css({"width": "100%"})
		$("<li id='search-label-for-js' class='nav-item p-2'><a class='nav-link'>Search:</a></li>").insertAfter($(".navbar li:nth-child(2)"));

		
		// Insert the "Search:" label after the 2nd navbar item, if not already present
		if (!$("#search-label-for-js").length) {
		  $("<li id='search-label-for-js' class='nav-item p-2'><a class='nav-link'>Search:</a></li>")
			.insertAfter($(".navbar li:nth-child(2)"));
		}

		// Move both the label and the "Search The Archives" link to the right
		const searchLinkItem = $("li:has(a[title='Search The Archives'])");
	

		// Ensure "Search:" label appears immediately to the left of "Search The Archives"
		$("#search-label-for-js").insertBefore(searchLinkItem);

		const searchLabel = $("#search-label-for-js");
		// Ensure "Search:" label appears immediately to the left of "Search The Archives"
		$("#search-label-for-js").insertBefore(searchLinkItem);

		// Float both to the right
		$("#search-label-for-js, li:has(a[title='Search The Archives'])").css("float", "right");

        

        $("#search-label-for-js a").hover(function() {
                $("#search-label-for-js a").css("pointer-events", "none")
        });

		$(".navbar li:nth-child(4)").css({"float": "right"})

        $("<li class='nav-item p-2'><a class='nav-link' href='https://archives.tufts.edu'>Home</a>").insertBefore($(".navbar li:nth-child(1)"));


				// Set each <li> to behave like flex items
		$(".navbar-nav > li").css({
		  "display": "inline-flex",
		  "align-items": "center"
		});




		searchLabel.insertBefore(searchLinkItem);

		// Use a wrapper to push them
		$("<div class='search-right-group'></div>")
		  .css({
			"margin-left": "auto",
			"display": "flex"
		  })
		  .append(searchLabel)
		  .append(searchLinkItem)
		  .appendTo($(".navbar-nav"));


			$(".agents_list").wrap("<div></div>");
			$(".agents_list li").contents().unwrap();
			$(".agents_list").contents().wrap("<div id='agents-div'></div>");
			$(".agents_list").contents().unwrap();
			//$("#agents-content").wrap("<p id='agents-content-par'></p>");
			//$("#agents-content-par").unwrap().wrap("<div id='agents-div'></div>);

			
			$(".navbar").css({"width": "100%"})

			$(".navbar li:nth-child(4)").css({"float": "right"})

			$("<li><a href='https://archives.tufts.edu'>Home</a>").insertBefore($(".navbar li:nth-child(1)"));


			// run test on initial page load
			checkSize();
			$(window).resize(checkSize);
			// run test on resize of the window
					function checkSize(){
					if ($(".navbar li:nth-child(2)").css("padding-right") == "2px"){

							// do something here
							$(".navbar li:nth-child(2)").css({"padding-right": "2px"});


					}
			}

	
        });

/*
if (top.location.pathname !== '/search')

document.addEventListener("DOMContentLoaded", function() {
        $(".search_results div").sort(sort_results).appendTo(".search_results");

        function sort_results(a, b){

                var re = /^[^\/]+/;
                var a_type = $(a).attr('data-uri');
                var b_type = $(b).attr('data-uri');

                a_type = re.exec(a_type);

                b_type = re.exec(b_type);


                return (a_type == "archival_objects").d
        }

});

*/
