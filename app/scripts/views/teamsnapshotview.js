var TeamSnapshot = Parse.View.extend({

  className: 'col-sm-6 col-xs-12 section team-snapshot',

  renderedtemplate: _.template($('#team-snapshot').text()),

  events: {
    'click .js-team-settings': 'teamSettingsForm'
  },

  teamSettingsForm: function() {
    new NewTeamSettingsForm({
      model: this.model
    })
  },

  initialize: function() {
    $('.js-team-snapshot-container').append(this.el)
    this.setHref();
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedtemplate())
  },

  setHref: function() {
    this.link = this.model.id;
  }
})