var TeamDashboard = Parse.View.extend({
    className: 'container',

    renderedtemplate: _.template($('#team-dashboard').text()),

    initialize: function() {
        $('.jumbotron').html(this.el)
        this.render()

        var playerQuery = new Parse.Query(Player);
        playerQuery.equalTo("team", this.model)
        console.log(this)
        console.log(this.model)
        playerQuery.find({
            success: function(players) {
                console.log(players)
                _.each(players, function(player) {
                    new PlayerList({
                        model: player
                    })
                })
            }
        });
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }
})