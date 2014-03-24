var MessageForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#message-addition').text()),
  teamTemaplate: _.template($('#teamname-list-item').text()),

  events: {
    'click .js-send-message': 'sendMessage'
  },

  sendMessage: function() {
    var that = this
    var teamQuery = new Parse.Query(Team)
    teamQuery.equalTo('teamname', $('.js-team-select-dropdown').val())
    teamQuery.find({
      success: function(team) {
        var message = new Message()
        message.set('date', Date.now());
        message.set('subject', $('.js-msg-subject').val());
        message.set('content', $('.js-msg-content').val());
        message.set('team', team[0]);
        /////////////////////////////////////////////////////////////////////
        //may need to ask mason about the parson find only returning an array
        /////////////////////////////////////////////////////////////////////
        message.save(null, {
          success: function(results) {
            that.$el.remove()
          }
        })
      }
    })
  },

  initialize: function() {
    $('.additions').html(this.el)
    this.render()

    var userTeamQuery = new Parse.Query(Team);
    userTeamQuery.equalTo("user", Parse.User.current());
    var that = this
    userTeamQuery.find({
      success: function(usersTeams) {
        _.each(usersTeams, function(team) {
          $('.js-team-select-dropdown').append(that.teamTemaplate({
            team: team
          }))
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})