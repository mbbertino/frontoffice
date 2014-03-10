var AppView = Parse.View.extend({

	className: 'container',

	renderedTemplate: _.template($('#appview-template').text()),

	events: {
		"click .js-signup": "newsignUpView",
		"click .js-find": "newfindView"
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
	},

	newfindView: function () {
		new FindView()
	}
})

// main view above ------------------------------

var SignUpView = Parse.View.extend({
	
	className: 'signup-tainer',

	renderedtemplate: _.template($('#signup-template').text()),

	initialize: function () {
		$('.inputtainer').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	}
})

// signup view above ------------------------------

var FindView = Parse.View.extend({
	
	className: 'findtainer',

	renderedtemplate: _.template($('#find-template').text()),

	initialize: function () {
		$('.inputtainer').html(this.el)
		this.render()
	},

	render: function () {
		this.$el.html(this.renderedtemplate()) 
	}
})

// find view above ------------------------------
