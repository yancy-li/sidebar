/**
 * Sidebar 交互器，处理 popupTree 的弹出或隐藏
 * @param {ht.ui.Sidebar} view 
 */
var SidebarInteractor = function(view) {
    SidebarInteractor.superClass.constructor.call(this, view);
    var self = this,
        boundHandle_documentmousemove = self.handle_documentmousemove.bind(self),
        popupTree = view._popupTree;

    popupTree.addViewListener(function(e) {
        var kind = e.kind;
        if (kind === 'beforeShow') {
            self.registerCloseEvent(boundHandle_documentmousemove);
        }
        else if (kind === 'afterHide') {
            view.setHoverDataId(null);
            self.unregisterCloseEvent(boundHandle_documentmousemove);
        }
    });
};

ht.Default.def(SidebarInteractor, ui.Interactor, {
    registerCloseEvent: function(func) {
        document.addEventListener(Default.isTouchable ? 'touchstart' : 'mousemove', func);
    },
    unregisterCloseEvent: function(func) {
        document.removeEventListener(Default.isTouchable ? 'touchstart' : 'mousemove', func);
    },
    handle_documentmousemove: function(e) {
        var nav = this.getComponent(),
            target = Default.getTarget(e),
            dragger = Default.getDragger();
        if (!dragger) {
            if (nav.isCollapseMode()) {
                if (!nav.getView().contains(target)
                    && !nav._popupTree.getView().contains(target)) {
                    nav.setHoverDataId(null);
                }
            }
        }
    },
    handle_mousemove: function(e) {
        var self = this,
            nav = self.getComponent();

        if (nav.isCollapseMode())
            nav.setHoverDataId(nav.getDataIdAt(e));
    }
});