var FullPlayerList = Parse.View.extend({
  className: 'player-container col-xs-12',

  renderedtemplate: _.template($('#full-player-list').text()),

  events: {
    'click .js-edit': 'editPerson'
  },

  editPerson: function() {
    new EditPlayerModal({
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