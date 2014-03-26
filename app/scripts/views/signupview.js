var SignUpView = Parse.View.extend({

  className: 'signup-tainer col-xs-12',

  renderedtemplate: _.template($('#signup-template').text()),

  events: {
    "click .js-create-team": "newCoach"
  },

  initialize: function() {
    $('.inputtainer').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  },

  newCoach: function() {
    var user = new Parse.User();

    user.set('username', $('.js-coach-username').val());
    user.set('password', $('.js-coach-password').val());
    user.set('email', $('.js-coach-username').val());

    user.signUp(null, {
      success: function(user) {
        var team = new Team()

        team.set('teamname', $('.js-teamname').val());
        team.set('sport', $('.js-team-sport').val());
        team.set('user', user)
        console.log(user)

        team.save(null, {
          success: function(team) {}
        })
        new CoachDashboard()
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
})