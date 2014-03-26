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
    'click .js-logout': 'logOut'
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
    'click .js-logout': 'logOut'
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