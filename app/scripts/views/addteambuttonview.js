// var AddTeamButton = Parse.View.extend({
//     className: 'add-team-container',

//     renderedtemplate: _.template($('#add-team-button-template').text()),

//     events: {
//         'click .js-add-team': 'createTeam',
//         'click .js-add-team-toggle': 'toggleAddTeam'
//     },

//     initialize: function() {
//         $('.head-login-form').append(this.el)
//         this.render()
//     },

//     render: function() {
//         this.$el.html(this.renderedtemplate())
//     },
//     createTeam: function() {
//         var user = Parse.User.current();
//         var team = new Team()

//         team.set('teamname', $('.js-form-teamname').val());
//         team.set('sport', $('.js-form-team-sport').val());
//         team.set('user', user)

//         team.save(null, {
//             success: function(team) {
//                 new TeamSnapshot({
//                     model: team
//                 })
//             }
//         })
//         this.$el.find($('.js-create-team-form')).toggleClass('hidden')
//         this.$el.find($('.js-add-team-toggle')).toggleClass('hidden')
//     },

//     toggleAddTeam: function() {
//         this.$el.find($('.js-add-team-toggle')).toggleClass('hidden')
//         this.$el.find($('.js-create-team-form')).toggleClass('hidden')
//     }
// })