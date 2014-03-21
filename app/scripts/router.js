var MainRouter = Backbone.Router.extend({

    routes: {
        "": "homePage",
        "team/:id": "teamDashboardPage",
        // "guest/:id": "guestDashboardPage",
        // "about"					: "aboutPage",

        // # and / are assumed in backbone
    },

    initialize: function() {},

    homePage: function() {
        if (Parse.User.current()) {
            new CoachDashboard();
        } else {
            new AppView()
        }
    },

    teamDashboardPage: function(id) {
        if (Parse.User.current()) {

            var teamQuery = new Parse.Query(Team)

            teamQuery.get(id, {
                success: function(object) {
                    if (object.user = Parse.User.current()) {
                        var currTeam = object
                        new TeamDashboard({
                            model: object
                        })
                        new TeamHeaderBar({
                            model: object
                        })
                    } else {
                        new CoachDashboard()
                    }
                }
            });
        } else {
            new AppView()
        }
    },

    guestDashboardPage: function() {


    }

    // aboutPage: function(){

    // }
})