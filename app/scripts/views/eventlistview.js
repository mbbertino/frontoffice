var EventList = Parse.View.extend({
    className: 'event-container col-xs-12',

    renderedtemplate: _.template($('#event-list').text()),

    initialize: function() {
        $('.events').append(this.el)
        this.render()

        // this will grab me the teams id to query for # of players, coaches, next event, and latest message
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }

})