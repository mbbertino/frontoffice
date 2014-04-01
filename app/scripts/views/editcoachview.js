var EditCoachModal = Parse.View.extend({
  className: 'modal-bkgd',

  renderedtemplate: _.template($('#full-coach-list-modal').text()),

  events: {
    'click .js-save': 'saveEdits',
    'click .js-delete': 'deletePerson',
    'click .js-close-view': 'removeView',

  },

  saveEdits: function() {
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
        location.reload()
        that.remove()
      }
    })
  },

  deletePerson: function() {
    var that = this
    this.model.destroy({
      success: function(myObject) {
        location.reload()
        that.remove()
      }
    })
  },

  removeView: function() {
    this.remove()
  },

  initialize: function() {
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