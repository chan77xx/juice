/*******************************************************************************
 * JUICE (Javascript User Interface Component Engine )
 * Author	: chan77xx
 * Contact  : chan77xx@gmail.com
 *******************************************************************************/
var JComponent = function() {
    this.container = document.createElement('span');
};
/**
 * JUnitComponent
 */
var JUnitComponent = function() {};
JUnitComponent.prototype = new JCompoment();

/**
 * JCompositeComponent
 */
var JCompositeComponent = function() {};
JCompositeComponent.prototype = new JCompoment();

var JEdit = function() {};
JEdit.prototype = new JUnitComponent();


