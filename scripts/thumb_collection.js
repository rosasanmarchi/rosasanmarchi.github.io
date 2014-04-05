var Thumbs = Backbone.Collection.extend({
  model: Thumb,

  select: function(model) {
    this.deselectCurrentThumb();
    this.selected = model;
    this.selected.select(true);
    this.trigger('thumbs:selected');
  },

  selectedThumb: function() {
    return this.selected;
  },

  deselectCurrentThumb: function() {
    if( this.selectedThumb() ) {
      this.selectedThumb().select(false);
    };
  }
});
