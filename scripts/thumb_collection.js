var Thumbs = Backbone.Collection.extend({
  model: Thumb,
  fetch: function() {
    return _.map(urls, function(img) { 
      return new Thumb({uri: img.image, thumb: img.thumb, align: img.align})
    });
  },
  select: function(model) {
    if( this.selectedThumb() ) {
      this.selectedThumb().select(false);
    };
    this.selected = model;
    this.selected.select(true);
    this.trigger('thumbs:selected');
  },
  selectedThumb: function() {
    return this.selected;
  }
});

var thumbs = new Thumbs;
