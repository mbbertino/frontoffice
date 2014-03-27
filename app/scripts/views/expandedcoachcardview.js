var CoachCardView = Parse.View.extend({

  className: 'modal-bkgd',

  renderedtemplate: _.template($('#coach-card-addition').text()),

  events: {
    'click .js-close-view': 'removeView'
  },

  removeView: function() {
    this.remove()
  },

  initialize: function(options) {
    $('body').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})