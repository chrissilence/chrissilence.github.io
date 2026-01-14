(function () {
    Portfolio.App.controller('IndexController', function ($scope) {
        Portfolio.IndexScope = $scope;
        Portfolio.IndexScope.YouTubeLink = "https://www.youtube.com/chrissilence";
        Portfolio.IndexScope.TwitchLink = "https://www.twitch.tv/chrissilence";
        Portfolio.IndexScope.IsViewLevelEditorOff = false;
        Portfolio.IndexScope.IsViewDiscordBotOff = true;

        Portfolio.IndexScope.init = function () {
          //  Portfolio.IndexScope.ShowViewLevelEditor();
        };

        Portfolio.IndexScope.ShowViewLevelEditor = function () {
           Portfolio.IndexScope.IsViewLevelEditorOff = false;
           Portfolio.IndexScope.IsViewDiscordBotOff = true;

           
            /*$.ajax({
                type: "GET",
                dataType: "json",
                url: "/Index?handler=GuildChannels",
                success: function (data) {
                    ChrisSilenceDiscord.IndexScope.Channels = jQuery.parseJSON(data);
                    ChrisSilenceDiscord.IndexScope.GetTotalChannels = ChrisSilenceDiscord.IndexScope.Channels.length;

                    // Refresh scope.
                    ChrisSilenceDiscord.IndexScope.$digest();
                },
                error: function (error) {
                    alert(error);
                }
            });*/
 
        };

        Portfolio.IndexScope.ShowViewDiscordBot = function () {
           Portfolio.IndexScope.IsViewLevelEditorOff = true;
           Portfolio.IndexScope.IsViewDiscordBotOff = false;
        };
    });
})();