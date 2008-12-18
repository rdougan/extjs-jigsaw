/**
 * Ext.ux.Jigsaw.MainWindow
 * @extends Ext.Window
 */
Ext.ux.Jigsaw.MainWindow = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    title:     'Jigsaw',
    height:    600,
    width:     900,
    layout:    'fit',
    constrain: true,
    
    tbar: [
      {
        text:    'New Game',
        scope:   this,
        handler: function() {
          this.fireEvent('newgame', this);
        }
      }
    ],
    
    defaults: {
      border: false
    },
    
    items: [
      new Ext.ux.Jigsaw.Panel()
    ]
  });
 
  Ext.ux.Jigsaw.MainWindow.superclass.constructor.call(this, config);
  
  this.addEvents(
    /**
     * @event newgame
     * Fires whenever the new game button is clicked
     * @param {Ext.ux.Jigsaw.MainWindow} this The window firing the event
     */
    'newgame'
  );
    
  this.on('render', function() {
    this.el.alignTo(Ext.getBody(), 'c');
  }, this);
};

Ext.extend(Ext.ux.Jigsaw.MainWindow, Ext.Window);