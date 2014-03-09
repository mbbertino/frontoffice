// This line below sets up the initial team table that will be used by the coach to 
// create add and manage players coaches documents etc
var Team = Parse.Object.extend("Team");

var TeamCollection = Parse.Collection.extend({
	model: Team
})

