var MessageList = Parse.View.extend({
  className: 'message-container col-xs-12',

  renderedtemplate: _.template($('#message-list').text()),

  initialize: function() {
    $('.messages').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})

var FullMessageList = Parse.View.extend({
  className: 'message-container col-xs-12',

  renderedtemplate: _.template($('#full-message-list').text()),

  events: {
    'click .js-delete-msg': 'deleteMsg'
  },

  deleteMsg: function() {
    var that = this
    this.model.destroy({
      success: function(myObject) {
        that.remove()
      }
    })
  },

  initialize: function() {
    $('.messages').prepend(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})