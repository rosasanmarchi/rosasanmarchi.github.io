var Thumb = Backbone.Model.extend({
  defaults: {
    uri: '',
    state: '',
    thumb: '',
    align: ''
  },
  select: function(state){
    this.set({'state': state ? 'selected' : ''});
  }
});
