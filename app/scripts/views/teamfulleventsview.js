var TeamFullEvents = Parse.View.extend({

  className: 'container',

  renderedtemplate: _.template($('#full-schedule-page').text()),

  events: {
    'click .js-new-event': 'newEvent'
  },

  newEvent: function() {
    new NewEventForm({
      teamId: this.teamId
    })
  },

  initialize: function(options) {
    this.teamId = options.teamId
    $('.jumbotron').html(this.el)
    this.render()

    var now = Date.now().toString()
    var eventsQuery = new Parse.Query(Event);
    eventsQuery.equalTo("team", this.model);
    eventsQuery.greaterThan("timestamp", now)
    eventsQuery.descending("timestamp")
    eventsQuery.find({
      success: function(events) {
        _.each(events, function(event) {
          new FullEventList({
            model: event
          })
        })
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }
})