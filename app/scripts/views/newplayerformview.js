var NewPlayerForm = Parse.View.extend({
  renderedtemplate: _.template($('#player-addition').text()),

  events: {
    'click .js-add-player': 'addPlayer',
  },

  addPlayer: function() {
    var that = this
    var player = new Player()
    player.set('firstName', $('.js-form-player-firstname').val());
    player.set('lastName', $('.js-form-player-lastname').val());
    player.set('email', $('.js-form-player-email').val());
    player.set('phoneAcode', $('.js-form-player-phone-acode').val());
    player.set('phoneThree', $('.js-form-player-phone-three').val());
    player.set('phoneFour', $('.js-form-player-phone-four').val());
    player.set('address', $('.js-form-player-address').val());
    player.set('city', $('.js-form-player-city').val());
    player.set('state', $('.js-form-player-state').val());
    player.set('zip', $('.js-form-player-zip').val());
    player.set('primaryPos', $('.js-form-player-position-primary').val());
    player.set('secondaryPos', $('.js-form-player-position-secondary').val());
    player.set('team', this.team);
    player.save(null, {
      success: function(results) {
        new PlayerList({
          model: results
        })
        that.$el.remove()
      }
    })
  },
  initialize: function(options) {
    var that = this
    var teamQuery = new Parse.Query(Team)
    teamQuery.get(options.teamId, {
      success: function(team) {
        that.team = team
      }
    })

    $('.additions').html(this.el)
    this.render()

  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})