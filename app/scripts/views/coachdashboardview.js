var CoachDashboard = Parse.View.extend({
  className: 'container',

  renderedtemplate: _.template($('#coach-dashboard').text()),

  events: {
    'click .js-send-message-creation': 'sendMessageForm',
    'click .js-create-new-team': 'addTeamForm'
  },

  sendMessageForm: function() {
    new MessageForm()
  },

  addTeamForm: function() {
    new TeamForm()
  },

  initialize: function() {
    $('.jumbotron').html(this.el)
    this.render()
    new UserHeaderBar()
    $('.marketing').empty()

    var userTeamQuery = new Parse.Query(Team);
    userTeamQuery.equalTo("user", Parse.User.current());
    userTeamQuery.find({
      success: function(usersTeams) {
        _.each(usersTeams, function(team) {
          new TeamSnapshot({
            model: team
          })
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})