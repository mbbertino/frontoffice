var TeamFullMessages = Parse.View.extend({

  className: 'container',

  renderedtemplate: _.template($('#full-message-page').text()),

  events: {
    'click .js-send-msg': 'newMsg',
  },

  newMsg: function() {
    new TeamMessageForm({
      teamId: this.teamId
    })
  },

  initialize: function(options) {
    this.teamId = options.teamId
    $('.jumbotron').html(this.el)
    this.render()

    var messagesQuery = new Parse.Query(Message);
    messagesQuery.equalTo("team", this.model);
    messagesQuery.ascending('date')
    messagesQuery.find({
      success: function(messages) {
        _.each(messages, function(message) {
          new FullMessageList({
            model: message
          })
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})