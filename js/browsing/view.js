function initDoc() {
	// run script after document is ready
	$j(function() {
		var showTabs = false;
		var showAvatar = false;
		
		var tabIcons = {
				 "#testo" 			:  "icon-file-text-alt icon-large",
				 "#approfondimenti"	: "icon-pushpin icon-large",
				 "#losapevi"		: "icon-info icon-large"
		}; 
		
		var arrowIcons = {
			"active" 	: "icon-caret-down",
			"inactive" 	: "icon-caret-right"
		};
		
		// install flowplayer to an element with CSS class "ADAflowplayer"
		// generated by the media_viewing_classes if it's needed
		if ($j(".ADAflowplayer").length > 0)
			$j(".ADAflowplayer").flowplayer();

		// if there are tabs on the page, initialize'em
		if ($j("#tabs").length > 0) {
			$j("#tabs").tabs({
				collapsible : true,
				active:false,
				beforeActivate: function (event, ui)
				{
					if (ui.newPanel.length > 0)
					{
						ui.newTab.find("i").first().attr("class",arrowIcons["active"]);
					}
					
					if (ui.oldPanel.length > 0)
					{
						ui.oldTab.find("i").first().attr("class",arrowIcons["inactive"]);
					}
				}
			});
			showTabs = true;
			/**
			 * icon tabs setup
			 */
			
			$j('#tabs .ui-tabs-nav a').each(function() {
			      var id = $j(this).attr("href");
			      
			      $j(this).html("<i class=\""+arrowIcons["inactive"]+"\"></i> <i class=\""+tabIcons[$j(this).attr("href")]+"\"></i> "+$j(this).html());
			      
			      
			});
			
//			for (var i=1; i<tabIcons.length+1; i++)
//			{
//				alert ($j("#tabs #ui-id"+i).html());
//			}
		}
		
		// if there's a fakeBalloon, display it
		if ($j("#fakeBalloon").length > 0) {
			var avatarStyle = parseInt ($j("#fakeBalloon").attr("data-avatar"));
			var balloonHTML = $j("#fakeBalloon").html();
			
			if ($j("#avatarimg").length > 0 && avatarStyle>0)
			{
				$j("#avatarimg").addClass ("avatar"+avatarStyle);
				showAvatar=true;
			}
			
			if ($j("#balloon .balloonContent").length > 0)
			{
				$j("#balloon .balloonContent").html(balloonHTML);
				showAvatar = true;								
			}

			window.setTimeout (function() { 
				if (showTabs)   $j("#tabs").fadeIn('slow'); 
				if (showAvatar) $j("#avatarContainer").fadeIn("slow"); }, 200);			
		}
	});
}
