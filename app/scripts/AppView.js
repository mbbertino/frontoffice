var GuestHeaderBar = Parse.View.extend({
	className: 'container',

	renderedTemplate: _.template($('#guest-headerbar-template').text()),

	events: {
		'click .js-login': 'logIn'
	},

	initialize: function () {
		$('.header').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedTemplate())
	},

	logIn: function(){
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

	initialize: function () {
		$('.header').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedTemplate())
	},

	logOut: function(){
		Parse.User.logOut();
		new AppView()
	}
})

var MarketingView = Parse.View.extend({
	className: 'container',

	renderedTemplate: _.template($('#marketing-template').text()),

	initialize: function () {
		$('.marketing').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedTemplate())
	}
})

var AppView = Parse.View.extend({

	className: 'container',

	renderedTemplate: _.template($('#appview-template').text()),

	events: {
		"click .js-signup": "newsignUpView"
	},

	initialize: function () {
		$('.jumbotron').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedTemplate())
		new MarketingView()
		new GuestHeaderBar()
	},

	newsignUpView: function () {
		new SignUpView()
	}
})


// main view above ------------------------------

var SignUpView = Parse.View.extend({
	
	className: 'signup-tainer col-xs-12',

	renderedtemplate: _.template($('#signup-template').text()),

	events: {
		"click .js-create-team": "newCoach"
	},

	initialize: function () {
		$('.inputtainer').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	},

	newCoach: function(){
		var coach = new Parse.User();

		coach.set('username', $('.js-coach-username').val());
		coach.set('password', $('.js-coach-password').val());
		coach.set('email', $('.js-coach-username').val());

		coach.signUp(null, {
			success: function(coach) {
				// I think this will create a user database for me :) please work
				new CoachDashboard()
			},
			error: function(coach, error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}
})

var CoachDashboard = Parse.View.extend({
	className: 'container',

	renderedtemplate: _.template($('#coach-dashboard').text()),

	initialize: function () {
		$('.jumbotron').html(this.el)
		this.render()
		new TeamSnapshot()
		new UserHeaderBar()
		$('.marketing').empty()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	}
})

var TeamSnapshot = Parse.View.extend({
	className: 'col-sm-6 col-xs-12 section',

	renderedtemplate: _.template($('#team-snapshot').text()),

	initialize: function () {
		$('.maincontent').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	},

	events: {
		"click .js-team": "teamDashboard"
	},

	teamDashboard: function(){
		new TeamDashboard()
	}
})

var TeamDashboard = Parse.View.extend({
	className: 'container',

	renderedtemplate: _.template($('#team-dashboard').text()),

	initialize: function () {
		$('.jumbotron').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	}
})

// signup view above ------------------------------

// var FindView = Parse.View.extend({
	
// 	className: 'findtainer',

// 	renderedtemplate: _.template($('#find-template').text()),

// 	initialize: function () {
// 		$('.inputtainer').html(this.el)
// 		this.render()
// 	},

// 	render: function () {
// 		this.$el.html(this.renderedtemplate()) 
// 	}
// })

// find view above ------------------------------
