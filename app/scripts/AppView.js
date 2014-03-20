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

var MarketingView = Parse.View.extend({
    className: 'container',

    renderedTemplate: _.template($('#marketing-template').text()),

    initialize: function() {
        $('.marketing').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }
})

//////////////////////////////////////////
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

//////////////////////////////////////////
var SignUpView = Parse.View.extend({

    className: 'signup-tainer col-xs-12',

    renderedtemplate: _.template($('#signup-template').text()),

    events: {
        "click .js-create-team": "newCoach"
    },

    initialize: function() {
        $('.inputtainer').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    },

    newCoach: function() {
        var coach = new Parse.User();

        coach.set('username', $('.js-coach-username').val());
        coach.set('password', $('.js-coach-password').val());
        coach.set('email', $('.js-coach-username').val());

        coach.signUp(null, {
            success: function(coach) {
                var team = new Team()

                team.set('teamname', $('.js-teamname').val());
                team.set('sport', $('.js-team-sport').val());
                team.set('user', coach)
                console.log(coach)

                team.save(null, {
                    success: function(team) {}
                })
                new CoachDashboard()
            },
            error: function(coach, error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
})

var AddTeamButton = Parse.View.extend({
    className: 'add-team-container',

    renderedtemplate: _.template($('#add-team-button-template').text()),

    events: {
        'click .js-add-team': 'createTeam',
        'click .js-add-team-toggle': 'toggleAddTeam'
    },

    initialize: function() {
        $('.head-login-form').append(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    },
    createTeam: function() {
        var user = Parse.User.current();
        var team = new Team()

        team.set('teamname', $('.js-form-teamname').val());
        team.set('sport', $('.js-form-team-sport').val());
        team.set('user', user)

        team.save(null, {
            success: function(team) {
                new TeamSnapshot({
                    model: team
                })
            }
        })
        this.$el.find($('.js-create-team-form')).toggleClass('hidden')
        this.$el.find($('.js-add-team-toggle')).toggleClass('hidden')
    },

    toggleAddTeam: function() {
        this.$el.find($('.js-add-team-toggle')).toggleClass('hidden')
        this.$el.find($('.js-create-team-form')).toggleClass('hidden')
    }
})

//////////////////////////////////////////
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

//////////////////////////////////////////
var TeamSnapshot = Parse.View.extend({
    className: 'col-sm-6 col-xs-12 section',

    renderedtemplate: _.template($('#team-snapshot').text()),

    events: {
        "click .js-team": "teamDashboard"
    },

    initialize: function() {
        $('.maincontent').append(this.el)
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

    teamDashboard: function() {
        new TeamDashboard()
        new TeamHeaderBar()
    }
})

//////////////////////////////////////////
var TeamDashboard = Parse.View.extend({
    className: 'container',

    renderedtemplate: _.template($('#team-dashboard').text()),

    initialize: function() {
        $('.jumbotron').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }
})