var NewTeamSettingsForm = Parse.View.extend({
  className: 'modal-bkgd',

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
    this.model.set('teamname', $('.js-form-teamset-name').val())
    this.model.set('sport', $('.js-form-teamset-sport').val())
    this.model.save({
      success: function(team) {
        location.reload()
      }
    })
  },

  deleteTeam: function() {
    var that = this

    var deletePlayerQuery = new Parse.Query('Player');
    deletePlayerQuery.equalTo("team", this.model)
    deletePlayerQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    var deleteEventQuery = new Parse.Query('Event');
    deleteEventQuery.equalTo("team", this.model)
    deleteEventQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    var deleteCoachQuery = new Parse.Query('Coach');
    deleteCoachQuery.equalTo("team", this.model)
    deleteCoachQuery.find({
      success: function(results) {
        Parse.Object.destroyAll(results)
      }
    });
    var deleteMessageQuery = new Parse.Query('Message');
    deleteMessageQuery.equalTo("team", this.model)
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
    $('body').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
    $('.modal-container').css({
      position: 'absolute',
      left: ($(window).width() - $('.modal-container').outerWidth()) / 2,
      top: ($(window).height() - $('.modal-container').outerHeight()) / 2
    });
  }
})