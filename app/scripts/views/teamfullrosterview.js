var TeamFullRoster = Parse.View.extend({

  className: 'container',

  renderedtemplate: _.template($('#team-full-roster').text()),

  events: {
    'click .js-players': 'popPlayers',
    'click .js-coaches': 'popCoaches',
    'click .js-add-player': 'addPlayerForm',
    'click .js-add-coach': 'addCoachForm'

  },

  popPlayers: function() {
    $('.players').empty()
    $('.full-pages').append('<h2>Players</h2>')
    $('.js-players').addClass('active')
    var playerQuery = new Parse.Query(Player);
    playerQuery.equalTo("team", this.model);
    playerQuery.find({
      success: function(players) {
        _.each(players, function(player) {
          new FullPlayerList({
            model: player
          })
        })
      }
    });
  },

  popCoaches: function() {
    $('.players').empty()
    $('.full-pages').append('<h2>Coaches</h2>')
    var coachQuery = new Parse.Query(Coach);
    coachQuery.equalTo("team", this.model);
    coachQuery.find({
      success: function(coaches) {
        _.each(coaches, function(coach) {
          new FullCoachList({
            model: coach
          })
        })
      }
    });
  },

  addPlayerForm: function() {
    new NewPlayerForm({
      model: this.model
    })
  },

  addCoachForm: function() {
    new NewCoachForm({
      model: this.model
    })
  },

  initialize: function() {
    $('.jumbotron').html(this.el)
    this.render()

    $('.full-pages').append('<h2>Players</h2>')

    var playerQuery = new Parse.Query(Player);
    playerQuery.equalTo("team", this.model);
    playerQuery.find({
      success: function(players) {
        _.each(players, function(player) {
          new FullPlayerList({
            model: player
          })
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})