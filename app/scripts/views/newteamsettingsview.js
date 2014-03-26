var NewTeamSettingsForm = Parse.View.extend({
  renderedtemplate: _.template($('#settings-addition').text()),

  events: {
    'click .js-teamset-edit': 'editTeam',
    'click .js-teamset-delete': 'deleteTeam',
    'click .js-close-view': 'removeView'
  },

  removeView: function() {
    this.remove()
  },

  editTeam: function() {
    this.team.set('teamname', $('.js-form-teamset-name').val())
    this.team.set('sport', $('.js-form-teamset-sport').val())
    this.team.save({
      success: function(team) {
        location.reload()
      }
    })
  },

  deleteTeam: function() {
    var that = this

    var deletePlayerQuery = new Parse.Query('Player');
    deletePlayerQuery.equalTo("team", this.team)
    deletePlayerQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    var deleteEventQuery = new Parse.Query('Event');
    deleteEventQuery.equalTo("team", this.team)
    deleteEventQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    var deleteCoachQuery = new Parse.Query('Coach');
    deleteCoachQuery.equalTo("team", this.team)
    deleteCoachQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    var deleteMessageQuery = new Parse.Query('Message');
    deleteMessageQuery.equalTo("team", this.team)
    deleteMessageQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    that.team.destroy({
      success: function(myObject) {
        window.router.navigate("", {
          trigger: true
        })
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
    // this.setHref(options.teamId);
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})