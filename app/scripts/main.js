$(function() {
    Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");

    window.router = new MainRouter();
    Backbone.history.start();

    // if (Parse.User.current()) {
    //     new CoachDashboard();
    // } else {
    //     new AppView()
    // }
})

// eventually I'll need to move this little section to the create player form submittion

// var query = new Parse.Query(Team);

// var myId = '0oJaBVbuE7';

// query.get(myId, {
//     success: function(object) {

//         var player = new Player()

//         player.set('first_name', 'James');
//         player.set('last_name', 'Butt');
//         player.set('address', '6649 N Blue Gum St');
//         player.set('city', 'New Orleans');
//         player.set('state', 'LA');
//         player.set('zip', '70116');
//         player.set('phone', '504-621-8927');
//         player.set('email', 'elizbarr@gmail.com');
//         player.set('team', object);
//         player.set('coach', Parse.User.current());

//         player.save(null, {
//             success: function(player) {}
//         })
//     }
// });

// bertman45@gmail.com
// katycampen@gmail.com
// eespaderos@gmail.com
// elizbarr@gmail.com
// jmiller6128@gmail.com