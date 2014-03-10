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

	new AppView()

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