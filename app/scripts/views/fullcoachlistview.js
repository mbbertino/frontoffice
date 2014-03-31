var FullCoachList = Parse.View.extend({
  className: 'coach-container col-xs-12',

  renderedtemplate: _.template($('#full-coach-list').text()),

  events: {
    'click .js-edit': 'editPerson',
    'click .js-delete': 'deletePerson',
  },

  editPerson: function() {
    var that = this
    this.model.set('firstName', this.$el.find('.js-form-coach-firstname').val());
    this.model.set('lastName', this.$el.find('.js-form-coach-lastname').val());
    this.model.set('email', this.$el.find('.js-form-coach-email').val());
    this.model.set('phoneAcode', this.$el.find('.js-form-coach-phone-acode').val());
    this.model.set('phoneThree', this.$el.find('.js-form-coach-phone-three').val());
    this.model.set('phoneFour', this.$el.find('.js-form-coach-phone-four').val());
    this.model.set('address', this.$el.find('.js-form-coach-address').val());
    this.model.set('city', this.$el.find('.js-form-coach-city').val());
    this.model.set('state', this.$el.find('.js-form-coach-state').val());
    this.model.set('zip', this.$el.find('.js-form-coach-zip').val());
    this.model.set('role', this.$el.find('.js-form-coach-position-role').val());
    this.model.save({
      success: function(team) {
        that.render()
      }
    })
  },

  deletePerson: function() {
    var that = this
    this.model.destroy({
      success: function(myObject) {
        that.remove()
      }
    })
  },

  initialize: function() {
    $('.coaches').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})