var PlayerList = Parse.View.extend({
  className: 'player-container col-xs-12',

  renderedtemplate: _.template($('#player-list').text()),

  events: {
    'click .js-person-expand': 'expandPerson'
  },

  expandPerson: function() {
    new PlayerCardView({
      model: this.model
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