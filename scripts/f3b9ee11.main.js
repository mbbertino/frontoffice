var MainRouter=Backbone.Router.extend({routes:{"":"homePage","team/:id":"teamDashboardPage","team/roster/:id":"teamRosterPage","team/messages/:id":"teamMessagesPage","team/events/:id":"teamEventsPage","team/visitor/:id":"visitorPage"},initialize:function(){},homePage:function(){Parse.User.current()?new CoachDashboard:new AppView},visitorPage:function(a){var b=new Parse.Query(Team);b.get(a,{success:function(a){new VisitorView({model:a}),new GuestTeamHeaderBar({model:a})}})},teamRosterPage:function(a){if(Parse.User.current()){var b=new Parse.Query(Team);b.get(a,{success:function(b){(b.user=Parse.User.current())?(new TeamFullRoster({model:b,teamId:a}),new TeamHeaderBar({model:b,teamId:a})):new CoachDashboard}})}else new AppView},teamMessagesPage:function(a){if(Parse.User.current()){var b=new Parse.Query(Team);b.get(a,{success:function(b){(b.user=Parse.User.current())?(new TeamFullMessages({model:b,teamId:a}),new TeamHeaderBar({model:b,teamId:a})):new CoachDashboard}})}else new AppView},teamEventsPage:function(a){if(Parse.User.current()){var b=new Parse.Query(Team);b.get(a,{success:function(b){(b.user=Parse.User.current())?(new TeamFullEvents({model:b,teamId:a}),new TeamHeaderBar({model:b,teamId:a})):new CoachDashboard}})}else new AppView},teamDashboardPage:function(a){if(Parse.User.current()){var b=new Parse.Query(Team);b.get(a,{success:function(b){(b.user=Parse.User.current())?(new TeamDashboard({model:b,teamId:a}),new TeamHeaderBar({model:b,teamId:a})):new CoachDashboard}})}else new AppView},guestDashboardPage:function(){}}),Team=Parse.Object.extend("Team"),TeamsCollection=Parse.Collection.extend({model:Team}),Player=Parse.Object.extend("Player"),PlayersCollection=Parse.Collection.extend({model:Player}),Coach=Parse.Object.extend("Coach"),CoachesCollection=Parse.Collection.extend({model:Coach}),Event=Parse.Object.extend("Event"),EventsCollection=Parse.Collection.extend({model:Event}),Message=Parse.Object.extend("Message"),MessagesCollection=Parse.Collection.extend({model:Message});$(function(){console.log("Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost"),console.log("TeamId for search: 0oJaBVbuE7"),Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA","4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ"),window.router=new MainRouter,Backbone.history.start(),$(window).resize(function(){$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})})});var AppView=Parse.View.extend({className:"landingtainer",renderedTemplate:_.template($("#appview-template").text()),events:{"click .js-signup":"newsignUpView"},initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){this.$el.html(this.renderedTemplate()),new MarketingView,new GuestHeaderBar},newsignUpView:function(){new SignUpView}}),GuestHeaderBar=Parse.View.extend({className:"container",renderedTemplate:_.template($("#guest-headerbar-template").text()),events:{"click .js-login":"logIn"},initialize:function(){$(".header").html(this.el),this.render()},render:function(){this.$el.html(this.renderedTemplate())},logIn:function(){Parse.User.logIn($(".js-login-username").val(),$(".js-login-password").val(),{success:function(){new CoachDashboard},error:function(a,b){alert("Error: "+b.code+" "+b.message)}})}}),UserHeaderBar=Parse.View.extend({className:"container",renderedTemplate:_.template($("#user-headerbar-template").text()),events:{"click .js-logout":"logOut","click .js-create-new-team":"addTeamForm"},addTeamForm:function(){new TeamForm},initialize:function(){$(".header").html(this.el),this.render()},render:function(){this.$el.html(this.renderedTemplate())},logOut:function(){Parse.User.logOut(),new AppView}}),TeamHeaderBar=Parse.View.extend({className:"container",renderedTemplate:_.template($("#team-headerbar-template").text()),events:{"click .js-logout":"logOut","click .js-team-settings":"teamSettingsForm"},teamSettingsForm:function(){new NewTeamSettingsForm({model:this.team})},initialize:function(a){var b=this,c=new Parse.Query(Team);c.get(a.teamId,{success:function(a){b.team=a}}),$(".header").html(this.el),this.render()},render:function(){this.$el.html(this.renderedTemplate())},logOut:function(){Parse.User.logOut(),new AppView}}),GuestTeamHeaderBar=Parse.View.extend({className:"container",initialize:function(){$(".header").html(this.el),this.render()},render:function(){var a=this.model.attributes.teamname;this.$el.html("<h2>Team: "+a+"</h2>")}}),MarketingView=Parse.View.extend({className:"",renderedTemplate:_.template($("#marketing-template").text()),events:{"click .js-team-search":"findTeam"},findTeam:function(){window.router.navigate("team/visitor/"+$(".js-search-input").val(),{trigger:!0})},initialize:function(){$(".marketing").html(this.el),this.render()},render:function(){this.$el.html(this.renderedTemplate())}}),SignUpView=Parse.View.extend({className:"signup-tainer col-xs-12",renderedtemplate:_.template($("#signup-template").text()),events:{"click .js-create-team":"newCoach"},initialize:function(){$(".inputtainer").html(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())},newCoach:function(){var a=new Parse.User;a.set("username",$(".js-coach-username").val()),a.set("password",$(".js-coach-password").val()),a.set("email",$(".js-coach-username").val()),a.signUp(null,{success:function(a){var b=new Team;b.set("teamname",$(".js-teamname").val()),b.set("sport",$(".js-team-sport").val()),b.set("user",a),console.log(a),b.save(null,{success:function(){}}),new CoachDashboard},error:function(a,b){alert("Error: "+b.code+" "+b.message)}})}}),CoachDashboard=Parse.View.extend({className:"container",renderedtemplate:_.template($("#coach-dashboard").text()),events:{"click .js-create-new-team":"addTeamForm"},addTeamForm:function(){new TeamForm},initialize:function(){$(".jumbotron").html(this.el),this.render(),new UserHeaderBar,$(".marketing").empty();var a=new Parse.Query(Team);a.equalTo("user",Parse.User.current()),a.ascending("createdAt"),a.find({success:function(a){_.each(a,function(a){new TeamSnapshot({model:a})})}})},render:function(){this.$el.html(this.renderedtemplate())}}),TeamSnapshot=Parse.View.extend({className:"col-sm-6 col-xs-12 section team-snapshot",renderedtemplate:_.template($("#team-snapshot").text()),events:{"click .js-team-settings":"teamSettingsForm"},teamSettingsForm:function(){new NewTeamSettingsForm({model:this.model})},initialize:function(){$(".js-team-snapshot-container").append(this.el),this.setHref(),this.render()},render:function(){this.$el.html(this.renderedtemplate())},setHref:function(){this.link=this.model.id}}),VisitorView=Parse.View.extend({className:"container",renderedtemplate:_.template($("#guest-page").text()),events:{"click .js-players":"popPlayers","click .js-coaches":"popCoaches","click .js-events":"popEvents","click .js-messages":"popMessages"},popPlayers:function(){$(".full-pages").empty();var a=new Parse.Query(Player);a.equalTo("team",this.model),a.find({success:function(a){_.each(a,function(a){new FullPlayerList({model:a})})}})},popCoaches:function(){$(".full-pages").empty(),console.log(this.model);var a=new Parse.Query(Coach);a.equalTo("team",this.model),a.find({success:function(a){console.log(a),_.each(a,function(a){new FullCoachList({model:a})})}})},popEvents:function(){$(".full-pages").empty();var a=Date.now().toString(),b=new Parse.Query(Event);b.equalTo("team",this.model),b.greaterThan("timestamp",a),b.descending("timestamp"),b.find({success:function(a){_.each(a,function(a){new FullEventList({model:a})})}})},popMessages:function(){$(".full-pages").empty();var a=new Parse.Query(Message);a.equalTo("team",this.model),a.find({success:function(a){_.each(a,function(a){new FullMessageList({model:a})})}})},initialize:function(){$(".jumbotron").html(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),TeamFullRoster=Parse.View.extend({className:"container",renderedtemplate:_.template($("#team-full-roster").text()),events:{"click .js-players":"popPlayers","click .js-coaches":"popCoaches","click .js-add-player":"addPlayerForm","click .js-add-coach":"addCoachForm"},popPlayers:function(){$(".players").empty(),$(".full-pages").append("<h2>Players</h2>"),$(".js-players").addClass("active");var a=new Parse.Query(Player);a.equalTo("team",this.model),a.find({success:function(a){_.each(a,function(a){new FullPlayerList({model:a})})}})},popCoaches:function(){$(".players").empty(),$(".full-pages").append("<h2>Coaches</h2>");var a=new Parse.Query(Coach);a.equalTo("team",this.model),a.find({success:function(a){_.each(a,function(a){new FullCoachList({model:a})})}})},addPlayerForm:function(){new NewPlayerForm({model:this.model})},addCoachForm:function(){new NewCoachForm({model:this.model})},initialize:function(){$(".jumbotron").html(this.el),this.render(),$(".full-pages").append("<h2>Players</h2>");var a=new Parse.Query(Player);a.equalTo("team",this.model),a.find({success:function(a){_.each(a,function(a){new FullPlayerList({model:a})})}})},render:function(){this.$el.html(this.renderedtemplate())}}),TeamFullMessages=Parse.View.extend({className:"container",renderedtemplate:_.template($("#full-message-page").text()),events:{"click .js-send-msg":"newMsg"},newMsg:function(){new TeamMessageForm({teamId:this.teamId})},initialize:function(a){this.teamId=a.teamId,$(".jumbotron").html(this.el),this.render();var b=new Parse.Query(Message);b.equalTo("team",this.model),b.ascending("date"),b.find({success:function(a){_.each(a,function(a){new FullMessageList({model:a})})}})},render:function(){this.$el.html(this.renderedtemplate())}}),TeamFullEvents=Parse.View.extend({className:"container",renderedtemplate:_.template($("#full-schedule-page").text()),events:{"click .js-new-event":"newEvent"},newEvent:function(){new NewEventForm({teamId:this.teamId})},initialize:function(a){this.teamId=a.teamId,$(".jumbotron").html(this.el),this.render();var b=Date.now().toString(),c=new Parse.Query(Event);c.equalTo("team",this.model),c.greaterThan("timestamp",b),c.descending("timestamp"),c.find({success:function(a){_.each(a,function(a){new FullEventList({model:a})})}})},render:function(){this.$el.html(this.renderedtemplate())}}),TeamDashboard=Parse.View.extend({className:"container",renderedtemplate:_.template($("#team-dashboard").text()),events:{"click .js-send-message-creation":"sendMessageForm","click .js-add-event-creation":"addEventForm"},sendMessageForm:function(){new TeamMessageForm({teamId:this.teamId})},addEventForm:function(){new NewEventForm({teamId:this.teamId})},teamSettingsForm:function(){new NewTeamSettingsForm({teamId:this.teamId})},initialize:function(a){this.teamId=a.teamId,$(".jumbotron").html(this.el),this.render();var b=new Parse.Query("Player");b.equalTo("team",this.model),b.find({success:function(a){_.each(a,function(a){new PlayerList({model:a})})}});var c=new Parse.Query("Coach");c.equalTo("team",this.model),c.find({success:function(a){_.each(a,function(a){new CoachList({model:a})})}});var d=Date.now().toString(),e=new Parse.Query("Event");e.equalTo("team",this.model),e.greaterThan("timestamp",d),e.ascending("timestamp"),e.limit("3"),e.find({success:function(a){_.each(a,function(a){new EventList({model:a})})}});var f=new Parse.Query("Message");f.equalTo("team",this.model),f.descending("date"),f.limit("2"),f.find({success:function(a){_.each(a,function(a){new MessageList({model:a})})}})},render:function(){this.$el.html(this.renderedtemplate())}}),CoachList=Parse.View.extend({className:"coach-container col-xs-12",renderedtemplate:_.template($("#coach-list").text()),events:{"click .js-person-expand":"expandPerson"},expandPerson:function(){new CoachCardView({model:this.model})},initialize:function(){$(".coaches").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),MessageList=Parse.View.extend({className:"message-container col-xs-12",renderedtemplate:_.template($("#message-list").text()),initialize:function(){$(".messages").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),FullMessageList=Parse.View.extend({className:"message-container col-xs-12",renderedtemplate:_.template($("#full-message-list").text()),events:{"click .js-delete-msg":"deleteMsg"},deleteMsg:function(){var a=this;this.model.destroy({success:function(){a.remove()}})},initialize:function(){$(".messages").prepend(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),PlayerList=Parse.View.extend({className:"player-container col-xs-12",renderedtemplate:_.template($("#player-list").text()),events:{"click .js-person-expand":"expandPerson"},expandPerson:function(){new PlayerCardView({model:this.model})},initialize:function(){$(".players").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),EventList=Parse.View.extend({className:"event-container col-xs-12",renderedtemplate:_.template($("#event-list").text()),initialize:function(a){var b=a.target||$(".events");b.append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),FullEventList=Parse.View.extend({className:"event-container col-xs-12",renderedtemplate:_.template($("#full-event-list").text()),events:{"click .js-delete-msg":"deleteEvent"},deleteEvent:function(){var a=this;this.model.destroy({success:function(){a.remove()}})},initialize:function(){$(".events").prepend(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),FullPlayerList=Parse.View.extend({className:"player-container-parent col-xs-6",renderedtemplate:_.template($("#full-player-list").text()),events:{"click .js-edit":"editPerson"},editPerson:function(){new EditPlayerModal({model:this.model})},initialize:function(){$(".players").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),EditPlayerModal=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#full-player-list-modal").text()),events:{"click .js-save":"saveEdits","click .js-delete":"deletePerson","click .js-close-view":"removeView"},saveEdits:function(){var a=this;this.model.set("firstName",this.$el.find(".js-form-player-firstname").val()),this.model.set("lastName",this.$el.find(".js-form-player-lastname").val()),this.model.set("email",this.$el.find(".js-form-player-email").val()),this.model.set("phoneAcode",this.$el.find(".js-form-player-phone-acode").val()),this.model.set("phoneThree",this.$el.find(".js-form-player-phone-three").val()),this.model.set("phoneFour",this.$el.find(".js-form-player-phone-four").val()),this.model.set("address",this.$el.find(".js-form-player-address").val()),this.model.set("city",this.$el.find(".js-form-player-city").val()),this.model.set("state",this.$el.find(".js-form-player-state").val()),this.model.set("zip",this.$el.find(".js-form-player-zip").val()),this.model.set("primaryPos",this.$el.find(".js-form-player-position-primary").val()),this.model.set("secondaryPos",this.$el.find(".js-form-player-position-secondary").val()),this.model.save({success:function(){location.reload(),a.remove()}})},removeView:function(){this.remove()},deletePerson:function(){var a=this;this.model.destroy({success:function(){location.reload(),a.remove()}})},initialize:function(){$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),FullCoachList=Parse.View.extend({className:"coach-container-parent col-xs-6",renderedtemplate:_.template($("#full-coach-list").text()),events:{"click .js-edit":"editPerson"},editPerson:function(){new EditCoachModal({model:this.model})},initialize:function(){$(".coaches").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate())}}),EditCoachModal=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#full-coach-list-modal").text()),events:{"click .js-save":"saveEdits","click .js-delete":"deletePerson","click .js-close-view":"removeView"},saveEdits:function(){var a=this;this.model.set("firstName",this.$el.find(".js-form-coach-firstname").val()),this.model.set("lastName",this.$el.find(".js-form-coach-lastname").val()),this.model.set("email",this.$el.find(".js-form-coach-email").val()),this.model.set("phoneAcode",this.$el.find(".js-form-coach-phone-acode").val()),this.model.set("phoneThree",this.$el.find(".js-form-coach-phone-three").val()),this.model.set("phoneFour",this.$el.find(".js-form-coach-phone-four").val()),this.model.set("address",this.$el.find(".js-form-coach-address").val()),this.model.set("city",this.$el.find(".js-form-coach-city").val()),this.model.set("state",this.$el.find(".js-form-coach-state").val()),this.model.set("zip",this.$el.find(".js-form-coach-zip").val()),this.model.set("role",this.$el.find(".js-form-coach-position-role").val()),this.model.save({success:function(){location.reload(),a.remove()}})},deletePerson:function(){var a=this;this.model.destroy({success:function(){location.reload(),a.remove()}})},removeView:function(){this.remove()},initialize:function(){$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),PlayerCardView=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#player-card-addition").text()),events:{"click .js-close-view":"removeView"},removeView:function(){this.remove()},initialize:function(){$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),CoachCardView=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#coach-card-addition").text()),events:{"click .js-close-view":"removeView"},removeView:function(){this.remove()},initialize:function(){$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),TeamMessageForm=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#team-message-addition").text()),events:{"click .js-send-message":"sendMessage","click .js-close-view":"removeView"},removeView:function(){this.remove()},sendMessage:function(){var a=this,b=new Message;b.set("date",Date.now()),b.set("subject",$(".js-msg-subject").val()),b.set("content",$(".js-msg-content").val()),b.set("team",this.team),b.save(null,{success:function(b){new FullMessageList({model:b}),a.$el.remove()}})},initialize:function(a){var b=this,c=new Parse.Query(Team);c.get(a.teamId,{success:function(a){b.team=a}}),$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),TeamForm=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#team-addition").text()),events:{"click .js-add-team":"createTeam","click .js-close-view":"removeView"},removeView:function(){this.remove()},createTeam:function(){var a=this,b=new Team;b.set("teamname",$(".js-form-teamname").val()),b.set("sport",$(".js-form-team-sport").val()),b.set("numWins",0),b.set("numLosses",0),b.set("user",Parse.User.current()),b.save(null,{success:function(b){a.$el.remove(),new TeamSnapshot({model:b})}})},initialize:function(){$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),NewEventForm=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#event-addition").text()),events:{"click .js-date-picker":"pickADate","click .js-time-from-picker":"pickFromTime","click .js-time-to-picker":"pickToTime","click .js-add-event":"addEvent","click .js-close-view":"removeView"},removeView:function(){this.remove()},addEvent:function(){var a=this,b=new Event;b.set("date",$(".js-date-picker").val()),b.set("timestamp",moment($(".js-date-picker").val()).format("X")),b.set("startTime",$(".js-time-from-picker").val()),b.set("endTime",$(".js-time-to-picker").val()),b.set("type",$(".js-form-event-type").val()),b.set("subject",$(".js-form-event-subject").val()),b.set("location",$(".js-form-event-location").val()),b.set("content",$(".js-form-event-notes").val()),b.set("team",this.team),b.save(null,{success:function(b){new FullEventList({model:b}),a.$el.remove()}})},pickADate:function(){$(".js-date-picker").pickadate()},pickFromTime:function(){$(".js-time-from-picker").pickatime()},pickToTime:function(){$(".js-time-to-picker").pickatime()},initialize:function(a){var b=this,c=new Parse.Query(Team);c.get(a.teamId,{success:function(a){b.team=a}}),$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),NewPlayerForm=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#player-addition").text()),events:{"click .js-add-player":"addPlayer","click .js-close-view":"removeView"},removeView:function(){this.remove()},addPlayer:function(){var a=this,b=new Player;b.set("firstName",this.$el.find(".js-form-player-firstname").val()),b.set("lastName",this.$el.find(".js-form-player-lastname").val()),b.set("email",this.$el.find(".js-form-player-email").val()),b.set("phoneAcode",this.$el.find(".js-form-player-phone-acode").val()),b.set("phoneThree",this.$el.find(".js-form-player-phone-three").val()),b.set("phoneFour",this.$el.find(".js-form-player-phone-four").val()),b.set("address",this.$el.find(".js-form-player-address").val()),b.set("city",this.$el.find(".js-form-player-city").val()),b.set("state",this.$el.find(".js-form-player-state").val()),b.set("zip",this.$el.find(".js-form-player-zip").val()),b.set("primaryPos",this.$el.find(".js-form-player-position-primary").val()),b.set("secondaryPos",this.$el.find(".js-form-player-position-secondary").val()),b.set("team",this.model),b.save(null,{success:function(b){new FullPlayerList({model:b}),a.$el.remove()}})},initialize:function(a){var b=this,c=new Parse.Query(Team);c.get(a.teamId,{success:function(a){b.team=a}}),$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),NewTeamSettingsForm=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#settings-addition").text()),events:{"click .js-teamset-edit":"editTeam","click .js-teamset-delete":"deleteTeam","click .js-close-view":"removeView"},removeView:function(){this.remove()},editTeam:function(){this.model.set("teamname",$(".js-form-teamset-name").val()),this.model.set("sport",$(".js-form-teamset-sport").val()),this.model.save({success:function(){location.reload()}})},deleteTeam:function(){var a=this,b=new Parse.Query("Player");b.equalTo("team",this.model),b.find({success:function(a){Parse.Object.destroyAll(a)}});var c=new Parse.Query("Event");c.equalTo("team",this.model),c.find({success:function(a){Parse.Object.destroyAll(a)}});var d=new Parse.Query("Coach");d.equalTo("team",this.model),d.find({success:function(a){Parse.Object.destroyAll(a)}});var e=new Parse.Query("Message");e.equalTo("team",this.model),e.find({success:function(a){Parse.Object.destroyAll(a)}}),a.model.destroy({success:function(){console.log("I am successfu"),a.remove(),window.router.navigate("",{trigger:!0}),location.reload()}})},initialize:function(){$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}}),NewCoachForm=Parse.View.extend({className:"modal-bkgd",renderedtemplate:_.template($("#coach-addition").text()),events:{"click .js-add-coach":"addCoach","click .js-close-view":"removeView"},removeView:function(){this.remove()},addCoach:function(){var a=this,b=new Coach;b.set("firstName",this.$el.find(".js-form-coach-firstname").val()),b.set("lastName",this.$el.find(".js-form-coach-lastname").val()),b.set("email",this.$el.find(".js-form-coach-email").val()),b.set("phoneAcode",this.$el.find(".js-form-coach-phone-acode").val()),b.set("phoneThree",this.$el.find(".js-form-coach-phone-three").val()),b.set("phoneFour",this.$el.find(".js-form-coach-phone-four").val()),b.set("address",this.$el.find(".js-form-coach-address").val()),b.set("city",this.$el.find(".js-form-coach-city").val()),b.set("state",this.$el.find(".js-form-coach-state").val()),b.set("zip",this.$el.find(".js-form-coach-zip").val()),b.set("role",this.$el.find(".js-form-coach-position-role").val()),b.set("team",this.model),b.save(null,{success:function(b){new FullCoachList({model:b}),a.$el.remove()}})},initialize:function(a){var b=this,c=new Parse.Query(Team);c.get(a.teamId,{success:function(a){b.team=a}}),$("body").append(this.el),this.render()},render:function(){this.$el.html(this.renderedtemplate()),$(".modal-container").css({position:"absolute",left:($(window).width()-$(".modal-container").outerWidth())/2,top:($(window).height()-$(".modal-container").outerHeight())/2})}});