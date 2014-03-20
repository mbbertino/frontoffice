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