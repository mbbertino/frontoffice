var TeamMessageForm = Parse.View.extend({

  className: '',

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
        new MessageList({
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

    $('.additions').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Lets add this feature in phase 2
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


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