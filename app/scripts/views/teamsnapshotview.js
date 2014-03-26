var TeamSnapshot = Parse.View.extend({

  className: 'col-sm-4 col-xs-12 section snapshot',

  renderedtemplate: _.template($('#team-snapshot').text()),

  initialize: function() {
    $('.js-team-snapshot-container').prepend(this.el)
    this.setHref();
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  },

  setHref: function() {
    this.link = '#/team/' + this.model.id;
  }
})


// this snippet is an example of querying parse and using different filters
// var now = Date.now()
// var teamEventQuery = new Parse.Query(Event);
// teamEventQuery.equalTo('team', this.model);
// teamEventQuery.greaterThan('date', now)
// teamEventQuery.ascending('date')
// teamEventQuery.limit(2);
// var that = this
// teamEventQuery.find({
//   success: function(events) {
//     // I may need to come back to this and only use templates for this events view b/c they don't need to have events
//     _.each(events, function(event) {
//       new EventList({
//         model: event,
//         target: that.$el.find('.upcoming-events')
//       })
//     })
//   }
// });