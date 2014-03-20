var TeamSnapshot = Parse.View.extend({

    tagName: 'a',

    className: 'col-sm-6 col-xs-12 section',

    renderedtemplate: _.template($('#team-snapshot').text()),

    // events: {
    //     "click .js-team": "teamDashboard"
    // },

    initialize: function() {
        $('.maincontent').append(this.el)
        this.setHref();
        this.render()


        var teamPlayerQuery = new Parse.Query(Player);
        teamPlayerQuery.equalTo('parent', this.model)
        teamPlayerQuery.find({
            success: function(teamPlayers) {
                var numPlayers = teamPlayers.length
            }
        });
        // this will grab me the teams id to query for # of players, coaches, next event, and latest message
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    },

    setHref: function() {
        var id = this.model.id;
        var link = '#/team/' + id;
        this.$el.attr({
            href: link
        });
    }

    // teamDashboard: function() {
    //     new TeamDashboard()
    //     new TeamHeaderBar()
    // }
})