var FullCoachList = Parse.View.extend({
  className: 'coach-container-parent col-xs-6',

  renderedtemplate: _.template($('#full-coach-list').text()),

  events: {
    'click .js-edit': 'editPerson',
  },

  editPerson: function() {
    new EditCoachModal({
      model: this.model
    })
  },

  initialize: function() {
    $('.coaches').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  }

})