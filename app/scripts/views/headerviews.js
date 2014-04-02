var GuestHeaderBar = Parse.View.extend({
  className: 'container',

  renderedTemplate: _.template($('#guest-headerbar-template').text()),

  events: {
    'click .js-login': 'logIn'
  },

  initialize: function() {
    $('.header').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  },

  logIn: function() {
    Parse.User.logIn($('.js-login-username').val(), $('.js-login-password').val(), {
      success: function(user) {
        new CoachDashboard()
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  }
})

var UserHeaderBar = Parse.View.extend({
  className: 'container',

  renderedTemplate: _.template($('#user-headerbar-template').text()),

  events: {
    'click .js-logout': 'logOut',
    'click .js-create-new-team': 'addTeamForm'
  },

  addTeamForm: function() {
    new TeamForm()
  },


  initialize: function() {
    $('.header').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  },

  logOut: function() {
    Parse.User.logOut();
    new AppView()
  }
})

var TeamHeaderBar = Parse.View.extend({
  className: 'container',

  renderedTemplate: _.template($('#team-headerbar-template').text()),

  events: {
    'click .js-logout': 'logOut',
    'click .js-team-settings': 'teamSettingsForm'
  },

  teamSettingsForm: function() {
    new NewTeamSettingsForm({
      model: this.team
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
    $('.header').html(this.el)
    this.render()
  },

  render: function() {

    this.$el.html(this.renderedTemplate())
  },

  logOut: function() {
    Parse.User.logOut();
    new AppView()
  }
})

var GuestTeamHeaderBar = Parse.View.extend({
  className: 'container',

  initialize: function(options) {
    $('.header').html(this.el)
    this.render()
  },

  render: function() {
    var teamname = this.model.attributes.teamname
    this.$el.html('<h2>Team: ' + teamname + '</h2>')
  }
})