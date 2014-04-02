var MarketingView = Parse.View.extend({
  className: '',

  renderedTemplate: _.template($('#marketing-template').text()),

  events: {
    'click .js-team-search': 'findTeam'
  },

  findTeam: function() {
    window.router.navigate("team/visitor/" + $('.js-search-input').val(), {
      trigger: true
    })
  },

  initialize: function() {
    $('.marketing').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})