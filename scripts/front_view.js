var FrontView = Backbone.View.extend({
  template: _.template('<img alt="Rosa SanMarchi" src="<%= uri %>" class="<%= align %>" />' +
                       '<div id="caption" class="<%= align %>-caption"><%= caption %></div>'),

  el: $('#front'),

  initialize: function() {
    this.collection.bind('thumbs:selected', this.render, this);
  },

  render: function() {
    selectedImage = this.collection.selectedThumb()
    $(this.el).html(this.template(selectedImage.toJSON()));
  }
});
