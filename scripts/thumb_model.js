var Thumb = Backbone.Model.extend({
  defaults: {
    uri: '',
    state: '',
    thumb: '',
    align: '',
    caption: ''
  },

  select: function(state){
    this.set({'state': state ? 'selected' : ''});
  }
});
