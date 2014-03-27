 $(window).resize(function() {

   $('.modal-container').css({
     position: 'absolute',
     left: ($(window).width() - $('.modal-container').outerWidth()) / 2,
     top: ($(window).height() - $('.modal-container').outerHeight()) / 2
   });

 });
 $(function() {
   Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");
   window.router = new MainRouter();
   Backbone.history.start();
 })