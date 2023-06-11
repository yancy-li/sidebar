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
        var self = this,
            nav = self.getComponent(),
            target = Default.getTarget(e),
            dragger = Default.getDragger();
        if (!dragger) {
            if (nav.isCollapsedMode()) {
                var navRect = nav.getView().getBoundingClientRect();
                var popupRect = nav._popupTree.getView().getBoundingClientRect();
                navRect = {
                    x: navRect.left,
                    y: navRect.top,
                    width: navRect.width,
                    height: navRect.height
                }
                popupRect = {
                    x: popupRect.left,
                    y: popupRect.top,
                    width: popupRect.width,
                    height: popupRect.height
                }
                var unionRect = ht.Default.unionRect(navRect, popupRect);
                if (!ht.Default.containsPoint(unionRect, ht.Default.getClientPoint(e))) {
                    if (!self.timerId) {
                        self.timerId = setTimeout(function() {
                            nav.setHoverDataId(null);
                            delete self.timerId;
                        }, 250)
                    }
                }
                else {
                    if (self.timerId) {
                        clearTimeout(self.timerId);
                        delete self.timerId;
                    } 
                }
            }
        }
    },
    handle_mousemove: function(e) {
        var self = this,
            nav = self.getComponent();

        if (nav.isCollapsedMode()) {
            var hoverId = nav.getDataIdAt(e);
            if (hoverId != null) {
                if (self.timerId) {
                    clearTimeout(self.timerId);
                    delete self.timerId;
                }
                nav.setHoverDataId(hoverId);
            }
            else {
                if (!self.timerId) {
                    self.timerId = setTimeout(function() {
                        nav.setHoverDataId(null);
                        delete self.timerId;
                    }, 250)
                }
            }
        }
    },
    handle_mouseup: function(e) {
        var self = this,
            nav = self.getComponent();

        if (nav.isCollapsedMode()) {
            var hoverId = nav.getDataIdAt(e);
            var data = nav.getDataModel().getDataById(hoverId);
            if (data && !data.hasChildren()) {
                nav.getDataModel().sm().setSelection(data);
                nav.fireViewEvent({
                    kind: 'clickData',
                    data: data,
                    nativeEvent: e,
                    source: nav
                });
            }
        }
    }
});