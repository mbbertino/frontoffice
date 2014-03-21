var TeamDashboard = Parse.View.extend({
    className: 'container',

    renderedtemplate: _.template($('#team-dashboard').text()),

    initialize: function() {
        $('.jumbotron').html(this.el)
        this.render()

        var playerQuery = new Parse.Query(Player);
        playerQuery.equalTo("team", this.model)
        playerQuery.find({
            success: function(players) {
                _.each(players, function(player) {
                    new PlayerList({
                        model: player
                    })
                })
            }
        });

        var playerQuery = new Parse.Query(Event);
        playerQuery.equalTo("team", this.model)
        playerQuery.find({
            success: function(events) {
                _.each(events, function(event) {
                    new EventList({
                        model: event
                    })
                })
            }
        });
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }
})