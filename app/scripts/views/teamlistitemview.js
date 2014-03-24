var TeamListItem = Parse.View.extend({

  className: '',

  renderedtemplate: _.template($('#message-addition').text()),

  events: {

  },

  initialize: function() {
    $('.additions').html(this.el)
    this.render()

    var userTeamQuery = new Parse.Query(Team);
    userTeamQuery.equalTo("user", Parse.User.current());
    userTeamQuery.find({
      success: function(usersTeams) {
        _.each(usersTeams, function(team) {
          $('.js-team-select-dropdown').append(_.template($('#teamname-list-item').text()))
          console.log(team.attributes.teamname)
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})