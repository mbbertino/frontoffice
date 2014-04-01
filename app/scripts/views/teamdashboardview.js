var TeamDashboard = Parse.View.extend({
  className: 'container',

  renderedtemplate: _.template($('#team-dashboard').text()),

  events: {
    'click .js-send-message-creation': 'sendMessageForm',
    'click .js-add-event-creation': 'addEventForm'
  },

  sendMessageForm: function() {
    new TeamMessageForm({
      teamId: this.teamId
    })
  },

  addEventForm: function() {
    new NewEventForm({
      teamId: this.teamId
    })
  },


  teamSettingsForm: function() {
    new NewTeamSettingsForm({
      teamId: this.teamId
    })
  },

  initialize: function(options) {
    this.teamId = options.teamId
    $('.jumbotron').html(this.el)
    this.render()

    var playerQuery = new Parse.Query('Player');
    playerQuery.equalTo("team", this.model)
    playerQuery.find({
      success: function(players) {
        _.each(players, function(player) {
          new PlayerList({
            model: player
          })
        })
      }
    });

    var coachQuery = new Parse.Query('Coach');
    coachQuery.equalTo("team", this.model)
    coachQuery.find({
      success: function(coaches) {
        _.each(coaches, function(coach) {
          new CoachList({
            model: coach
          })
        })
      }
    });
    var now = Date.now()
    var eventQuery = new Parse.Query('Event');
    eventQuery.equalTo("team", this.model)
    // eventQuery.greaterThan("date", now)
    eventQuery.descending("date")
    eventQuery.limit("3")
    eventQuery.find({
      success: function(events) {
        _.each(events, function(event) {
          new EventList({
            model: event
          })
        })
      }
    });

    var messageQuery = new Parse.Query('Message');
    messageQuery.equalTo("team", this.model)
    messageQuery.descending("date")
    messageQuery.limit("2")
    messageQuery.find({
      success: function(messages) {
        _.each(messages, function(message) {
          new MessageList({
            model: message
          })
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})