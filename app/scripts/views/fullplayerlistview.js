var FullPlayerList = Parse.View.extend({
  className: 'player-container col-xs-12',

  renderedtemplate: _.template($('#full-player-list').text()),

  events: {
    'click .js-edit': 'editPerson',
    'click .js-delete': 'deletePerson',
  },

  editPerson: function() {
    var that = this
    this.model.set('firstName', this.$el.find('.js-form-player-firstname').val());
    this.model.set('lastName', this.$el.find('.js-form-player-lastname').val());
    this.model.set('email', this.$el.find('.js-form-player-email').val());
    this.model.set('phoneAcode', this.$el.find('.js-form-player-phone-acode').val());
    this.model.set('phoneThree', this.$el.find('.js-form-player-phone-three').val());
    this.model.set('phoneFour', this.$el.find('.js-form-player-phone-four').val());
    this.model.set('address', this.$el.find('.js-form-player-address').val());
    this.model.set('city', this.$el.find('.js-form-player-city').val());
    this.model.set('state', this.$el.find('.js-form-player-state').val());
    this.model.set('zip', this.$el.find('.js-form-player-zip').val());
    this.model.set('primaryPos', this.$el.find('.js-form-player-position-primary').val());
    this.model.set('secondaryPos', this.$el.find('.js-form-player-position-secondary').val());
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
    $('.players').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})