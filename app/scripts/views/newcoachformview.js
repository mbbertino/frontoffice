var NewCoachForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#coach-addition').text()),

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