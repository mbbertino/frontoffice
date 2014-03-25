var MessageList = Parse.View.extend({
  className: 'message-container col-xs-12',

  renderedtemplate: _.template($('#message-list').text()),

  initialize: function() {
    $('.messages').prepend(this.el)
    this.render()

    // this will grab me the teams id to query for # of players, coaches, next event, and latest message
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})