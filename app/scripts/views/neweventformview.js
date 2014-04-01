var NewEventForm = Parse.View.extend({
  className: 'modal-bkgd',

  renderedtemplate: _.template($('#event-addition').text()),

  events: {
    'click .js-date-picker': 'pickADate',
    'click .js-time-from-picker': 'pickFromTime',
    'click .js-time-to-picker': 'pickToTime',
    'click .js-add-event': 'addEvent',
    'click .js-close-view': 'removeView'
  },

  removeView: function() {
    this.remove()
  },

  addEvent: function() {
    var that = this
    var event = new Event()
    event.set('date', $('.js-date-picker').val());
    event.set('startTime', $('.js-time-from-picker').val());
    event.set('endTime', $('.js-time-to-picker').val());
    event.set('type', $('.js-form-event-type').val());
    event.set('subject', $('.js-form-event-subject').val());
    event.set('location', $('.js-form-event-location').val());
    event.set('content', $('.js-form-event-notes').val());
    event.set('team', this.team);
    event.save(null, {
      success: function(results) {
        new FullEventList({
          model: results
        })
        that.$el.remove()
      }
    })
  },

  pickADate: function() {
    $('.js-date-picker').pickadate()
  },

  pickFromTime: function() {
    $('.js-time-from-picker').pickatime()
  },

  pickToTime: function() {
    $('.js-time-to-picker').pickatime()
  },

  initialize: function(options) {
    var that = this
    var teamQuery = new Parse.Query(Team)
    teamQuery.get(options.teamId, {
      success: function(team) {
        that.team = team
      }
    })

    $('body').append(this.el)
    this.render()

  },

  render: function() {
    this.$el.html(this.renderedtemplate())
    $('.modal-container').css({
      position: 'absolute',
      left: ($(window).width() - $('.modal-container').outerWidth()) / 2,
      top: ($(window).height() - $('.modal-container').outerHeight()) / 2
    });
  }
})