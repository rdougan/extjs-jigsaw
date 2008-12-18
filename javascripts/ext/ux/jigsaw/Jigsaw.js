Ext.ns('Ext.ux.Jigsaw');

Ext.ux.Jigsaw.Game = function() {
  this.win = new Ext.ux.Jigsaw.MainWindow();
};

Ext.ux.Jigsaw.Game.prototype = {
  
  launch: function() {
    this.win.show();
  }
  
};