var PlayerList = Parse.View.extend({
    className: 'player-container',

    renderedtemplate: _.template($('#player-list').text()),

    initialize: function() {
        $('.players').append(this.el)
        this.render()

        // this will grab me the teams id to query for # of players, coaches, next event, and latest message
    },

    render: function() {
        this.$el.html(this.renderedtemplate())
    }

})