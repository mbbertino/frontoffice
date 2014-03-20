var AppView = Parse.View.extend({

    className: 'landingtainer',

    renderedTemplate: _.template($('#appview-template').text()),

    events: {
        "click .js-signup": "newsignUpView"
    },

    initialize: function() {
        $('.jumbotron').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
        new MarketingView()
        new GuestHeaderBar()
    },

    newsignUpView: function() {
        new SignUpView()
    }
})