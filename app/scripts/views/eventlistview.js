var EventList = Parse.View.extend({
    className: 'event-container col-xs-12',

    renderedtemplate: _.template($('#event-list').text()),

    initialize: function(options) {
        var $el = options.target || $('.events')
        // the $ is for a reminder that it is a Jquery object
        $el.append(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }

})