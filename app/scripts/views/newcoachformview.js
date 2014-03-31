var NewCoachForm = Parse.View.extend({

  className: 'modal-bkgd',

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
    coach.set('firstName', this.$el.find('.js-form-coach-firstname').val());
    coach.set('lastName', this.$el.find('.js-form-coach-lastname').val());
    coach.set('email', this.$el.find('.js-form-coach-email').val());
    coach.set('phoneAcode', this.$el.find('.js-form-coach-phone-acode').val());
    coach.set('phoneThree', this.$el.find('.js-form-coach-phone-three').val());
    coach.set('phoneFour', this.$el.find('.js-form-coach-phone-four').val());
    coach.set('address', this.$el.find('.js-form-coach-address').val());
    coach.set('city', this.$el.find('.js-form-coach-city').val());
    coach.set('state', this.$el.find('.js-form-coach-state').val());
    coach.set('zip', this.$el.find('.js-form-coach-zip').val());
    coach.set('role', this.$el.find('.js-form-coach-position-role').val());
    coach.set('team', this.model);
    coach.save(null, {
      success: function(results) {
        new FullCoachList({
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