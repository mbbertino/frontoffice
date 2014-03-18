var AppView = Parse.View.extend({

	className: 'container',

	renderedTemplate: _.template($('#appview-template').text()),

	events: {
		"click .js-signup": "newsignUpView"
	},

	initialize: function () {
		$('.jumbotron').append(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedTemplate())
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
		"click .js-create-team": "coachDashboard"
	},

	initialize: function () {
		$('.inputtainer').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	},

	coachDashboard: function () {
		new CoachDashboard()
	}
})

var CoachDashboard = Parse.View.extend({
	className: 'container',

	renderedtemplate: _.template($('#coach-dashboard').text()),

	initialize: function () {
		$('.jumbotron').html(this.el)
		this.render()
		new TeamSnapshot()
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
