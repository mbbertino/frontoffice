var PlayerCardView = Parse.View.extend({

  className: 'modal-bkgd',

  renderedtemplate: _.template($('#player-card-addition').text()),

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
    $('.modal-container').css({
      position: 'absolute',
      left: ($(window).width() - $('.modal-container').outerWidth()) / 2,
      top: ($(window).height() - $('.modal-container').outerHeight()) / 2
    });
  }
})