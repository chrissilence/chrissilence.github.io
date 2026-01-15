(function () {
    Portfolio.App.controller('HeaderController', function ($scope) {
        Portfolio.HeaderScope = $scope;
        Portfolio.HeaderScope.WebsiteName = "ChrisSilence";
        Portfolio.HeaderScope.YouTubeLink = "https://www.youtube.com/chrissilence";
        Portfolio.HeaderScope.TwitchLink = "https://www.twitch.tv/chrissilence";
        Portfolio.HeaderScope.TwitterLink = "https://x.com/ChrisSilenceTV";
        Portfolio.HeaderScope.InstagramLink = "https://www.instagram.com/chrissilencetv";
        Portfolio.HeaderScope.IsViewLevelEditorOff = false;
        Portfolio.HeaderScope.IsViewDiscordBotOff = true;
        Portfolio.HeaderScope.IsViewAdobeOff = true;

        Portfolio.HeaderScope.init = function () {

        };

        Portfolio.HeaderScope.ShowViewLevelEditor = function () {
           Portfolio.HeaderScope.IsViewLevelEditorOff = false;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;

          /* $('#ViewLevelEditor').load('leveleditor.html', function() {
                
           });*/
        };

        Portfolio.HeaderScope.ShowViewDiscordBot = function () {
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = false;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
        };

        Portfolio.HeaderScope.ShowViewAdobe = function() {
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = false;
        }
    });
})();