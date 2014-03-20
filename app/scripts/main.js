$(function() {
    Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");
    if (Parse.User.current()) {
        new CoachDashboard();
    } else {
        new AppView()
    }

    var query = new Parse.Query(Team);
    var myId = '0oJaBVbuE7';
    query.get(myId, {
        success: function(object) {}
    });
})

// var playerone = new Player()

// playerone.set('first_name', 'James');
// playerone.set('last_name', 'Butt');
// playerone.set('address', '6649 N Blue Gum St');
// playerone.set('city', 'New Orleans');
// playerone.set('state', 'LA');
// playerone.set('zip', '70116');
// playerone.set('phone', '504-621-8927');
// playerone.set('email', 'bertman45@gmail.com');
// playerone.set('parent', object);

// playerone.save(null, {
//     success: function(playerone) {}
// })