var MainRouter = Backbone.Router.extend({

  routes: {
    "": "homePage",
    "team/:id": "teamDashboardPage",
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

  // aboutPage: function(){

  // }
})