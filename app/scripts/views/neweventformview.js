var NewEventForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#event-addition').text()),

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