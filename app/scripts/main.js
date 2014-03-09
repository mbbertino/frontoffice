console.log('\'Allo \'Allo!');


// I need 

$(function(){
	Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");
	// this is initializing the parse connection to the database in the cloud

	// window.team = TeamCollection();

	// 	team.fetch({
	// 		success: function(data){
	// 			return data
	// 		}
	// 	})

})

$('.js-coach-join').click(function() {
	var newcoach = new Parse.User();

	newcoach.set('username', $('.js-coach-userame').val());
	newcoach.set('password', $('.js-coach-password').val());
	newcoach.set('email', $('.js-coach-email').val());
	newcoach.set('coach', 'True');

	newcoach.signUp(null, {
		success: function(newcoach) {
			// I think this will create a user database for me :) please work
			alert("Welcome "+newcoach.username);
		},
		error: function(newcoach, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
})

$('.js-player-join').click(function() {
	var newplayer = new Parse.User();

	newplayer.set('username', $('.js-player-userame').val());
	newplayer.set('password', $('.js-player-password').val());
	newplayer.set('email', $('.js-player-email').val());
	newplayer.set('coach', 'False');

	newplayer.signUp(null, {
		success: function(newplayer) {
			// I think this will create a user database for me :) please work
			alert("Welcome "+newplayer.username);
		},
		error: function(newplayer, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
})

$('.js-team-creation').click(function() {
	var newTeam = new Team();

	newTeam.set('team_name', $('.js-team-name').val());
	newTeam.set('team_sport', $('.js-team-sport').val());
	newTeam.set('team_location', $('.js-team-location').val());

	newTeam.save(null, {
		success: function(newTeam) {
			// I think this will create a user database for me :) please work
			alert("Welcome "+newTeam);
		},
		error: function(newTeam, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
})