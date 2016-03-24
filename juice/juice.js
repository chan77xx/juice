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
var JUnitComponent = function() {
    this.value = null;
};
JUnitComponent.prototype = new JCompoment();
JUnitComponent.prototype.setValue = function(value) {
    this.value = value;
}
JUnitComponent.prototype.getValue = function() {
    return this.value;
}

/**
 * JUnitComponent prototype
 */
var JText = function() {};
JText.prototype = new JUnitComponent();


/**
 * JCompositeComponent
 */
var JCompositeComponent = function() {};
JCompositeComponent.prototype = new JCompoment();



