var CoachList = Parse.View.extend({
    className: 'coach-container col-xs-12',

    renderedtemplate: _.template($('#coach-list').text()),

    initialize: function() {
        $('.coaches').append(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }

})