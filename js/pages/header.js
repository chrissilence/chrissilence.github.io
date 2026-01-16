(function () {
    Portfolio.App.controller('HeaderController', function ($scope) {
        Portfolio.HeaderScope = $scope;
        Portfolio.HeaderScope.WebsiteName = "ChrisSilence";
        Portfolio.HeaderScope.YouTubeLink = "https://www.youtube.com/chrissilence";
        Portfolio.HeaderScope.TwitchLink = "https://www.twitch.tv/chrissilence";
        Portfolio.HeaderScope.TwitterLink = "https://x.com/ChrisSilenceTV";
        Portfolio.HeaderScope.InstagramLink = "https://www.instagram.com/chrissilencetv";
        Portfolio.HeaderScope.TikTokLink = "https://www.tiktok.com/@chrissilencetv";

        // VIEW VARIABLES

        Portfolio.HeaderScope.IsViewAboutOff = false;
        Portfolio.HeaderScope.IsViewLevelEditorOff = true;
        Portfolio.HeaderScope.IsViewDiscordBotOff = true;
        Portfolio.HeaderScope.IsViewAdobeOff = true;
        Portfolio.HeaderScope.IsViewVideoEditingOff = true;
        Portfolio.HeaderScope.IsViewCagenixOff = true;
        Portfolio.HeaderScope.IsViewGLSAOff = true;
        Portfolio.HeaderScope.IsViewTheNewOff = true;

        Portfolio.HeaderScope.init = function () {
            Portfolio.HeaderScope.ShowViewAbout();
        };

        // VIEW FUNCTIONS

        Portfolio.HeaderScope.ShowViewAbout = function () {
            Portfolio.HeaderScope.IsViewAboutOff = false;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = true;
        };

        Portfolio.HeaderScope.ShowViewLevelEditor = function () {
           Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = false;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = true;

          /* $('#ViewLevelEditor').load('leveleditor.html', function() {
                
           });*/
        };

        Portfolio.HeaderScope.ShowViewDiscordBot = function () {
            Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = false;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = true;
        };

        Portfolio.HeaderScope.ShowViewAdobe = function() {
            Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = false;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = true;
        }

        Portfolio.HeaderScope.ShowViewVideoEditing = function() {
            Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = false;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = true;
        }

        Portfolio.HeaderScope.ShowViewCagenix = function() {
            Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = false;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = true;
        }

        Portfolio.HeaderScope.ShowViewGLSA = function() {
            Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = false;
           Portfolio.HeaderScope.IsViewTheNewOff = true;
        }

        Portfolio.HeaderScope.ShowViewTheNew = function() {
            Portfolio.HeaderScope.IsViewAboutOff = true;
           Portfolio.HeaderScope.IsViewLevelEditorOff = true;
           Portfolio.HeaderScope.IsViewDiscordBotOff = true;
           Portfolio.HeaderScope.IsViewAdobeOff = true;
           Portfolio.HeaderScope.IsViewVideoEditingOff = true;
           Portfolio.HeaderScope.IsViewCagenixOff = true;
           Portfolio.HeaderScope.IsViewGLSAOff = true;
           Portfolio.HeaderScope.IsViewTheNewOff = false;
        }
    });
})();