var MarketingView = Parse.View.extend({
  className: '',

  renderedTemplate: _.template($('#marketing-template').text()),

  initialize: function() {
    $('.marketing').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})