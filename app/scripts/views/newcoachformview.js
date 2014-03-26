var NewCoachForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#coach-addition').text()),

  events: {
    'click .js-add-coach': 'addCoach',
    'click .js-close-view': 'removeView'
  },

  removeView: function() {
    this.remove()
  },

  addCoach: function() {
    var that = this
    var coach = new Coach()
    coach.set('firstName', $('.js-form-coach-firstname').val());
    coach.set('lastName', $('.js-form-coach-lastname').val());
    coach.set('email', $('.js-form-coach-email').val());
    coach.set('phoneAcode', $('.js-form-coach-phone-acode').val());
    coach.set('phoneThree', $('.js-form-coach-phone-three').val());
    coach.set('phoneFour', $('.js-form-coach-phone-four').val());
    coach.set('address', $('.js-form-coach-address').val());
    coach.set('city', $('.js-form-coach-city').val());
    coach.set('state', $('.js-form-coach-state').val());
    coach.set('zip', $('.js-form-coach-zip').val());
    coach.set('role', $('.js-form-coach-position-role').val());
    coach.set('team', this.team);
    coach.save(null, {
      success: function(results) {
        new CoachList({
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