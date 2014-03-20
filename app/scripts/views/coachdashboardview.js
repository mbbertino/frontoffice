var CoachDashboard = Parse.View.extend({
    className: 'container',

    renderedtemplate: _.template($('#coach-dashboard').text()),

    initialize: function() {
        $('.jumbotron').html(this.el)
        this.render()
        new UserHeaderBar()
        new AddTeamButton()
        $('.marketing').empty()

        var userTeamQuery = new Parse.Query(Team);
        userTeamQuery.equalTo("user", Parse.User.current());
        userTeamQuery.find({
            success: function(usersTeams) {
                _.each(usersTeams, function(team) {
                    new TeamSnapshot({
                        model: team
                    })
                })
            }
        });
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }
})