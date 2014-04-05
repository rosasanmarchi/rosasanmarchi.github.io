var AppView = Backbone.View.extend({
  render: function(thumbs) {
    _.each( thumbs.models, function(thumb) {
        $('div ul#thumbnails').append( new ThumbView({ model: thumb }).render().el )
      });
    var firstThumb = thumbs.models[0];
    thumbs.select(firstThumb);
  }
});
