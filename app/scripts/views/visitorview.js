var VisitorView = Parse.View.extend({

  className: 'container',

  renderedtemplate: _.template($('#guest-page').text()),

  events: {
    'click .js-signup': 'popSingUp',
    'click .js-events': 'popEvents',
    'click .js-messages': 'popMessages',
    'click .js-players': 'popPlayers',
    'click .js-coaches': 'popCoaches',
  },

  popSingUp: function() {
    $('.full-pages').empty()
    new PlayerOrCoachSignUp({
      model: this.model
    })
  },

  popPlayers: function() {
    $('.full-pages').empty()
    var playerQuery = new Parse.Query(Player);
    playerQuery.equalTo("team", this.model);
    playerQuery.find({
      success: function(players) {
        _.each(players, function(player) {
          new FullPlayerList({
            model: player
          })
          $('.js-edit').remove()
        })
      }
    });
  },

  popCoaches: function() {
    $('.full-pages').empty()
    console.log(this.model)
    var coachQuery = new Parse.Query(Coach);
    coachQuery.equalTo("team", this.model);
    coachQuery.find({
      success: function(coaches) {
        console.log(coaches)
        _.each(coaches, function(coach) {
          new FullCoachList({
            model: coach
          })
          $('.js-edit').remove()
        })
      }
    });
  },

  popEvents: function() {
    $('.full-pages').empty()
    var now = Date.now().toString()
    var eventQuery = new Parse.Query(Event);
    eventQuery.equalTo("team", this.model);
    eventQuery.greaterThan("timestamp", now)
    eventQuery.descending("timestamp")
    eventQuery.find({
      success: function(events) {
        _.each(events, function(event) {
          new FullEventList({
            model: event
          })
          $('.action-container').remove()
        })
      }
    });
  },

  popMessages: function() {
    $('.full-pages').empty()
    var messageQuery = new Parse.Query(Message);
    messageQuery.equalTo("team", this.model);
    messageQuery.find({
      success: function(messages) {
        _.each(messages, function(message) {
          new FullMessageList({
            model: message
          })
          $('.action-container').remove()
        })
      }
    });
  },

  initialize: function() {
    $('.jumbotron').html(this.el)
    this.render()
    new PlayerOrCoachSignUp({
      model: this.model
    })
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})