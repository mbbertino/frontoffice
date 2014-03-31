var NewPlayerForm = Parse.View.extend({

  className: 'modal-bkgd',

  renderedtemplate: _.template($('#player-addition').text()),

  events: {
    'click .js-add-player': 'addPlayer',
    'click .js-close-view': 'removeView'
  },

  removeView: function() {
    this.remove()
  },

  addPlayer: function() {
    var that = this
    var player = new Player()
    player.set('firstName', this.$el.find('.js-form-player-firstname').val());
    player.set('lastName', this.$el.find('.js-form-player-lastname').val());
    player.set('email', this.$el.find('.js-form-player-email').val());
    player.set('phoneAcode', this.$el.find('.js-form-player-phone-acode').val());
    player.set('phoneThree', this.$el.find('.js-form-player-phone-three').val());
    player.set('phoneFour', this.$el.find('.js-form-player-phone-four').val());
    player.set('address', this.$el.find('.js-form-player-address').val());
    player.set('city', this.$el.find('.js-form-player-city').val());
    player.set('state', this.$el.find('.js-form-player-state').val());
    player.set('zip', this.$el.find('.js-form-player-zip').val());
    player.set('primaryPos', this.$el.find('.js-form-player-position-primary').val());
    player.set('secondaryPos', this.$el.find('.js-form-player-position-secondary').val());
    player.set('team', this.model);
    player.save(null, {
      success: function(results) {
        new FullPlayerList({
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

    $('body').append(this.el)
    this.render()

  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})