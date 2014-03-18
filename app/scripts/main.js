
$(function(){
	Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");
	if(Parse.User.current()){
		new CoachDashboard();
	} else {
		new AppView()
	}
})