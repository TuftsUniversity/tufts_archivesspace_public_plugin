if (top.location.pathname === '/')
	document.addEventListener("DOMContentLoaded", function() {


	$("<li id='search_label'><a id='search_labal_a'>Search:</a></li>").insertAfter($(".navbar-nav li:nth-child(2)"));



	$("#search_label a").css({"cursor": "default", "display": "inline-block !important", "font-family": "Gotham SSm A,Gotham SSm B,Arial,Helvetica,sans-serif !important", "color": "#ffffff !important", "text-decoration": "none !important", "font-weight": "bold !important"});


	$("#search_label, li:has(span)").css({"float": "right"});

        

	$("#search_label a").hover(function() {
		$("#search_label a").css("pointer-events", "none")
	});



	$(".navbar-nav").css({"width": "100%"})

	$(".navbar-nav li:nth-child(4)").css({"float": "right"})

	$("<li><a href='https://archives.tufts.edu'>Home</a>").insertBefore($(".navbar-nav li:nth-child(1)"));

	// run test on initial page load
	checkSize();
	$(window).resize(checkSize);
	// run test on resize of the window
		function checkSize(){
		if ($(".navbar-nav li:nth-child(2)").css("padding-right") == "2px"){

			// do something here
			$(".navbar-nav li:nth-child(2)").css({"padding-right": "2px"});

		
		}
	}

	
	$("h2").prependTo($("#content"));	
	$("<br /><br />").appendTo($("h2"));
	$("#content .search").insertAfter($("h2"));
        $('.search').not(':last').remove()
	



});


if (/collection_organization/.test(top.location.pathname))
{
 document.addEventListener("DOMContentLoaded", function() {
     $("#record-number-0").remove();
});


}
if (top.location.pathname !== '/')

        $(document).ready(function () {
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

        });

	document.addEventListener("DOMContentLoaded", function() {
		$("<li id='search_label'><a id='search_labal_a'>Search:</a></li>").insertAfter($(".navbar-nav li:nth-child(2)"));



		$("#search_label a").css({"cursor": "default", "display": "inline-block !important", "font-family": "Gotham SSm A,Gotham SSm B,Arial,Helvetica,sans-serif !important", "color": "#ffffff !important", "text-decoration": "none !important", "font-weight": "bold !important"});


	        $("#search_label").has("a#search_labal_a").css({
                  "float": "right",
                });

                $("li:has(a[title='Search The Archives'])").css({"float": "right"});




		$("#search_label a").hover(function() {
			$("#search_label a").css("pointer-events", "none")
		});


                $(".agents_list").wrap("<div></div>");
                $(".agents_list li").contents().unwrap();
                $(".agents_list").contents().wrap("<div id='agents-div'></div>");
                $(".agents_list").contents().unwrap();
                //$("#agents-content").wrap("<p id='agents-content-par'></p>");
                //$("#agents-content-par").unwrap().wrap("<div id='agents-div'></div>);

                
		$(".navbar-nav").css({"width": "100%"})

		$(".navbar-nav li:nth-child(4)").css({"float": "right"})
		
		$("<li><a href='https://archives.tufts.edu'>Home</a>").insertBefore($(".navbar-nav li:nth-child(1)"));


		// run test on initial page load
		checkSize();
		$(window).resize(checkSize);
		// run test on resize of the window
			function checkSize(){
			if ($(".navbar-nav li:nth-child(2)").css("padding-right") == "2px"){

				// do something here
				$(".navbar-nav li:nth-child(2)").css({"padding-right": "2px"});

			
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
	
