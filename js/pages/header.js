(function () {
    Portfolio.App.controller('HeaderController', function ($scope) {
        Portfolio.HeaderScope = $scope;
        Portfolio.HeaderScope.WebsiteName = "ChrisSilence";
        Portfolio.HeaderScope.YouTubeLink = "https://www.youtube.com/chrissilence";
        Portfolio.HeaderScope.TwitchLink = "https://www.twitch.tv/chrissilence";
        Portfolio.HeaderScope.IsViewLevelEditorOff = false;
        Portfolio.HeaderScope.IsViewDiscordBotOff = true;

        Portfolio.HeaderScope.init = function () {

        };

        Portfolio.HeaderScope.ShowViewLevelEditor = function () {
           Portfolio.HeaderScope.IsViewLevelEditorOff = false;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;

            $('#test').load('leveleditor.html', function() {
                
            });
        };

        Portfolio.HeaderScope.ShowViewDiscordBot = function () {
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = false;

        };
    });
})();