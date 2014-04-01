var EditPlayerModal = Parse.View.extend({
  className: 'modal-bkgd',

  renderedtemplate: _.template($('#full-player-list-modal').text()),

  events: {
    'click .js-save': 'saveEdits',
    'click .js-delete': 'deletePerson',
    'click .js-close-view': 'removeView',
  },

  saveEdits: function() {
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
        location.reload()
        that.remove()
      }
    })
  },

  removeView: function() {
    this.remove()
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