$(function() {
  console.log('Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost')

  Parse.initialize("QpR5heInRkuUWXjzX6t1kjDIpoRHS2a0Nlk9V0eA", "4NKxUeNv7QBqcuwhd3bnIwJA9f3sffVU6FLTCpwQ");
  window.router = new MainRouter();
  Backbone.history.start();

  $(window).resize(function() {
    $('.modal-container').css({
      position: 'absolute',
      left: ($(window).width() - $('.modal-container').outerWidth()) / 2,
      top: ($(window).height() - $('.modal-container').outerHeight()) / 2
    });
  });
})