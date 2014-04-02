var PlayerOrCoachSignUp = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#playercoach-signup-template').text()),

  events: {
    'click .js-new-player': 'newPlayerForm',
    'click .js-new-coach': 'newCoachForm'
  },

  newPlayerForm: function() {
    new NewPlayerForm({
      model: this.model
    })
  },

  newCoachForm: function() {
    new NewCoachForm({
      model: this.model
    })
  },

  initialize: function() {
    $('.full-pages').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  },
})