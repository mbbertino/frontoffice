////////
// Teams
var Team = Parse.Object.extend("Team");

var TeamsCollection = Parse.Collection.extend({
    model: Team
})
////////

////////
// Players
var Player = Parse.Object.extend("Player");

var PlayersCollection = Parse.Collection.extend({
    model: Player
})
////////

////////
// Coaches
var Coach = Parse.Object.extend("Coach");

var CoachesCollection = Parse.Collection.extend({
    model: Coach
})
////////

////////
// Events
var Event = Parse.Object.extend("Event");

var EventsCollection = Parse.Collection.extend({
    model: Event
})
////////

////////
// Messages
var Message = Parse.Object.extend("Message");

var MessagesCollection = Parse.Collection.extend({
    model: Message
})
////////