$(function() {
    Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");

    window.router = new MainRouter();
    Backbone.history.start();

    // if (Parse.User.current()) {
    //     new CoachDashboard();
    // } else {
    //     new AppView()
    // // }
    // var query = new Parse.Query(Team);

    // var myId = '0oJaBVbuE7';

    // query.get(myId, {
    //     success: function(object) {

    //         var event = new Event()

    //         var date = Date.now()
    //         console.log(date)
    //         event.set('date', date);
    //         event.set('time', date);
    //         event.set('type', 'Game');
    //         event.set('subject', 'River Side Highschool');
    //         event.set('location', 'River Side Highschool');
    //         event.set('wlt', false);
    //         event.set('team_score', false);
    //         event.set('opp_score', false);
    //         event.set('team', object);
    //         event.set('coach', Parse.User.current());

    //         event.save(null, {
    //             success: function(event) {}
    //         })
    //     }
    // });
})

// eventually I'll need to move this little section to the create player form submittion


// bertman45@gmail.com
// katycampen@gmail.com
// eespaderos@gmail.com
// elizbarr@gmail.com
// jmiller6128@gmail.com