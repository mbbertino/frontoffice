var TeamMessageForm = Parse.View.extend({

  className: 'modal-bkgd',

  renderedtemplate: _.template($('#team-message-addition').text()),

  events: {
    'click .js-send-message': 'sendMessage',
    'click .js-close-view': 'removeView'
  },

  removeView: function() {
    this.remove()
  },

  sendMessage: function() {
    var that = this
    var message = new Message()
    message.set('date', Date.now());
    message.set('subject', $('.js-msg-subject').val());
    message.set('content', $('.js-msg-content').val());
    message.set('team', this.team);
    message.save(null, {
      success: function(results) {
        new FullMessageList({
          model: results
        })
        that.$el.remove()
      }
    })
  },

  initialize: function(options) {
    var that = this
    var teamQuery = new Parse.Query(Team)
    teamQuery.get(options.teamId, {
      success: function(team) {
        that.team = team
      }
    })

    $('body').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
    $('.modal-container').css({
      position: 'absolute',
      left: ($(window).width() - $('.modal-container').outerWidth()) / 2,
      top: ($(window).height() - $('.modal-container').outerHeight()) / 2
    });
  }
})