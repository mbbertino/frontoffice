var TeamForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#team-addition').text()),

  events: {
    'click .js-add-team': 'createTeam'
  },

  createTeam: function() {
    var that = this
    var team = new Team()
    team.set('teamname', $('.js-form-teamname').val());
    team.set('sport', $('.js-form-team-sport').val());
    team.set('numWins', 0);
    team.set('numLosses', 0);
    team.set('user', Parse.User.current());
    team.save(null, {
      success: function(results) {
        that.$el.remove()
        new TeamSnapshot({
          model: results
        })
      }
    })
  },

  initialize: function() {
    $('.additions').html(this.el)
    this.render()

  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})