$(function() {
  Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");

  window.router = new MainRouter();
  Backbone.history.start();

  // Players
  //     var playerQuery = new Parse.Query(Team);
  //     var myId = '0oJaBVbuE7';
  //     playerQuery.get(myId, {
  //         success: function(object) {
  //             var example = new Player()
  //             example.set('first_name', 'Matt');
  //             example.set('last_name', 'Bertino');
  //             example.set('city', 'Jupiter');
  //             example.set('state', 'FL');
  //             example.set('zip', '33458');
  //             example.set('address', '194 Jones Creek Dr');
  //             example.set('email', 'bertman45@gmail.com');
  //             example.set('phone', '561-543-7466');
  //             example.set('team', object);
  //             example.save(null, {
  //                 success: function(example) {}
  //             })
  //         }
  //     });

  // Coaches
  // var coachQuery = new Parse.Query(Team);
  // var myId = '0oJaBVbuE7';
  // coachQuery.get(myId, {
  //     success: function(object) {
  //         var example = new Coach()
  //         example.set('first_name', 'Matt');
  //         example.set('last_name', 'Bertino');
  //         example.set('city', 'Jupiter');
  //         example.set('state', 'FL');
  //         example.set('zip', '33458');
  //         example.set('address', '194 Jones Creek Dr');
  //         example.set('email', 'bertman45@gmail.com');
  //         example.set('phone', '561-543-7466');
  //         example.set('team', object);
  //         example.save(null, {
  //             success: function(example) {}
  //         })
  //     }
  // });


  // Event
  // var eventQuery = new Parse.Query(Team);
  // var myId = '0oJaBVbuE7'; //need to make this something like this.model.get(team)
  // eventQuery.get(myId, {
  //     success: function(object) {
  //         var example = new Event()
  //         var date = Date.now()
  //         example.set('date', date);
  //         example.set('type', 'Game');
  //         example.set('subject', 'River Side Highschool');
  //         example.set('location', 'River Side Highschool');
  //         example.set('team', object);

  //         example.save(null, {
  //             success: function(example) {}
  //         })
  //     }
  // });
})