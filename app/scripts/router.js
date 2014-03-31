var MainRouter = Backbone.Router.extend({

  routes: {
    "": "homePage",
    "team/:id": "teamDashboardPage",
    "team/roster/:id": "teamRosterPage",
    "team/messages/:id": "teamMessagesPage",
    "team/events/:id": "teamEventsPage",
  },

  initialize: function() {},

  homePage: function() {
    if (Parse.User.current()) {
      new CoachDashboard();
    } else {
      new AppView()
    }
  },

  teamRosterPage: function(id) {
    if (Parse.User.current()) {
      var teamQuery = new Parse.Query(Team)
      teamQuery.get(id, {
        success: function(object) {
          if (object.user = Parse.User.current()) {
            new TeamFullRoster({
              model: object,
              teamId: id
            })
            new TeamHeaderBar({
              model: object,
              teamId: id
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

  teamMessagesPage: function(id) {
    if (Parse.User.current()) {
      var teamQuery = new Parse.Query(Team)
      teamQuery.get(id, {
        success: function(object) {
          if (object.user = Parse.User.current()) {
            new TeamFullMessages({
              model: object,
              teamId: id
            })
            new TeamHeaderBar({
              model: object,
              teamId: id
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

  teamEventsPage: function(id) {
    if (Parse.User.current()) {
      var teamQuery = new Parse.Query(Team)
      teamQuery.get(id, {
        success: function(object) {
          if (object.user = Parse.User.current()) {
            new TeamFullEvents({
              model: object,
              teamId: id
            })
            new TeamHeaderBar({
              model: object,
              teamId: id
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

  teamDashboardPage: function(id) {
    if (Parse.User.current()) {

      var teamQuery = new Parse.Query(Team)

      teamQuery.get(id, {
        success: function(object) {
          if (object.user = Parse.User.current()) {
            new TeamDashboard({
              model: object,
              teamId: id
            })
            new TeamHeaderBar({
              model: object,
              teamId: id
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
})