/**
 * Ext.ux.Jigsaw.Panel
 * @class Ext.ux.Jigsaw.Panel
 */
Ext.ux.Jigsaw.Panel = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    
  });
  
  Ext.ux.Jigsaw.Panel.superclass.constructor.call(this, config);
  
  this.on('render', this.renderMethod, this);
};

Ext.extend(Ext.ux.Jigsaw.Panel, Ext.Panel, {
  
  //overwrite the default render method
  renderMethod: function(ct, position) {
    //Ext.ux.Jigsaw.Panel.superclass.render.call(this, ct, position);
    
    //make each of the pieces
    this.el = this.body.createChild({
      cls: 'x-jigsaw-container'
    });
    
    this.rowOne = this.el.createChild({
      cls: 'x-jigsaw-row one'
    });
    
    this.rowTwo = this.el.createChild({
      cls: 'x-jigsaw-row two'
    });
    
    this.rowThree = this.el.createChild({
      cls: 'x-jigsaw-row three'
    });
    
    //add to row 1
    for (var i=0; i < 3; i++) {
      new Ext.ux.Jigsaw.Piece({
        renderTo: this.rowOne
      });
    }
    
    //add to row 2
    for (var i=0; i < 3; i++) {
      new Ext.ux.Jigsaw.Piece({
        renderTo: this.rowTwo
      });
    }
    
    //add to row 3
    for (var i=0; i < 3; i++) {
      new Ext.ux.Jigsaw.Piece({
        renderTo: this.rowThree
      });
    }
    
  }
  
});