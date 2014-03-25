var MessageForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#message-addition').text()),

  selectTeamTemaplate: _.template($('#teamname-list-item').text()),

  events: {
    'click .js-send-message': 'sendMessage'
  },

  sendMessage: function() {
    var that = this
    var teamQuery = new Parse.Query(Team)
    teamQuery.equalTo('teamname', $('.js-team-select-dropdown').val())
    teamQuery.find({
      success: function(team) {
        var message = new Message()
        message.set('date', Date.now());
        message.set('subject', $('.js-msg-subject').val());
        message.set('content', $('.js-msg-content').val());
        message.set('team', team[0]);
        message.save(null, {
          success: function(results) {
            that.$el.remove()
          }
        })
      }
    })
  },

  initialize: function() {
    $('.additions').html(this.el)
    this.render()

    var userTeamQuery = new Parse.Query(Team);
    userTeamQuery.equalTo("user", Parse.User.current());
    var that = this
    userTeamQuery.find({
      success: function(usersTeams) {
        _.each(usersTeams, function(result) {
          $('.js-team-select-dropdown').append(that.selectTeamTemaplate({
            result: result
          }))
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


var TeamMessageForm = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#team-message-addition').text()),

  events: {
    'click .js-send-message': 'sendMessage'
  },

  sendMessage: function() {
    var that = this
    var message = new Message()
    message.set('date', Date.now());
    message.set('subject', $('.js-msg-subject').val());
    message.set('content', $('.js-msg-content').val());
    // message.set('team', this);
    message.save(null, {
      success: function(results) {
        new MessageList({
          model: results
        })
        that.$el.remove()
      }
    })
  },

  initialize: function() {
    $('.additions').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})

// Lets add this feature in phase 2

// selectPlayerTemaplate: _.template($('#playername-list-item').text()),

// 'blur .js-team-select-dropdown': 'populatePlayers'

// populatePlayers: function() {
//   var that = this
//   var teamQuery = new Parse.Query(Team)
//   teamQuery.equalTo('teamname', $('.js-team-select-dropdown').val())
//   teamQuery.find({
//     success: function(team) {
//       var userPlayerQuery = new Parse.Query(Player);
//       userPlayerQuery.equalTo("team", team[0]);
//       userPlayerQuery.find({
//         success: function(players) {
//           _.each(players, function(result) {
//             console.log(result)
//             $('.js-player-select-dropdown').append(that.selectPlayerTemaplate({
//               result: result
//             }))
//           })
//         }
//       });
//     }
//   })
// },