var NewPlayerForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#player-addition').text()),

  events: {

  },

  initialize: function() {
    $('.additions').html(this.el)
    this.render()

  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})