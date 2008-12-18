/**
 * @class Ext.ux.Jigsaw.Piece
 * @extends Ext.Button
 * Description
 */
Ext.ux.Jigsaw.Piece = function(config) {
  var config = config || {};
 
  Ext.applyIf(config, {
    cls: 'x-jigsaw-piece'
  });
 
  Ext.ux.Jigsaw.Piece.superclass.constructor.call(this, config);
  
  this.on('render', this.initalizeDrag);
};
Ext.extend(Ext.ux.Jigsaw.Piece, Ext.Button, {
  
  initalizeDrag: function(){
    this.dragSource = new Ext.dd.DragSource(this.el, {
      ddGroup: 'x-pieces'
    });
  }
  
});