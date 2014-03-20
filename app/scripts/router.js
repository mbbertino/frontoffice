var MainRouter = Backbone.Router.extend({

    routes: {
        "": "homePage",
        "team/:id": "teamDashboardPage",
        "guest/:id": "guestDashboardPage",
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
            // need to add in a validation that the current user is the user of the team being populated
            var teamQuery = new Parse.Query(Team)
            teamQuery.get(id, {
                success: function(object) {
                    if (object.user = Parse.User.current()) {
                        var currTeam = object
                        new TeamDashboard({
                            model: object
                        })
                        new TeamHeaderBar()
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