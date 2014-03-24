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

        var coachQuery = new Parse.Query(Coach);
        coachQuery.equalTo("team", this.model)
        coachQuery.find({
            success: function(coaches) {
                _.each(coaches, function(coach) {
                    new CoachList({
                        model: coach
                    })
                })
            }
        });

        var eventQuery = new Parse.Query(Event);
        eventQuery.equalTo("team", this.model)
        eventQuery.find({
            success: function(events) {
                _.each(events, function(event) {
                    new EventList({
                        model: event
                    })
                })
            }
        });

        var messageQuery = new Parse.Query(Message);
        messageQuery.equalTo("team", this.model)
        messageQuery.find({
            success: function(messages) {
                _.each(messages, function(message) {
                    new MessageList({
                        model: message
                    })
                })
            }
        });
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }
})