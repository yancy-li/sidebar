/**
 * 弹出树组件
 * @param {ht.DataModel} dataModel 
 * @param {ht.ui.Sidebar} sidebar 
 */
var PopupTree = ui.Sidebar.PopupTree = function (dataModel, sidebar) {
    var self = this;
    PopupTree.superClass.constructor.call(self, dataModel, sidebar);

    // 顶部预留 padding 用来绘制 header
    self.setPadding([sidebar.getHeaderHeight(), 0, 0, 0]);

    self.setRowHeightFunc(function (data) {
        var self = this,
            level = self.getLevel(data),
            marginTop = sidebar.getMarginTop(data, level + 1),
            marginBottom = sidebar.getMarginBottom(data, level + 1);

        return sidebar.getRowHeight(data) + marginTop + marginBottom;
    });

    self.on('d:click', function (e) {
        var lp = self.lp(e);
        if (lp.y < sidebar.getHeaderHeight()) {
            self.fireViewEvent({
                kind: 'clickDataMessage',
                data: self.getRootData(),
                nativeEvent: e,
                source: self
            });
        }
    });
};

Default.def('ht.ui.Sidebar.PopupTree', AccordionTree, {

    /**
     * 获取节点范围
     * @param {ht.Data} data
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @return {Array}
     */
    adjustRowRect: function (data, x, y, width, height) {
        var self = this,
            sidebar = self._sidebar,
            level = self.getLevel(data),
            marginTop = sidebar.getMarginTop(data, level + 1),
            marginBottom = sidebar.getMarginBottom(data, level + 1);

        y += marginTop;
        height -= (marginTop + marginBottom);

        return [x, y, width, height];
    },

    /**
     * @override
     */
    isVisible: function(data) {
        var sidebar = this._sidebar;
        if (data) {
            var visibleFunc = sidebar.getVisibleFunc();
            return visibleFunc ? visibleFunc(data) : true;
        }
        else {
            return this.getPropertyValue('visible');
        }
    },

    /**
     * 返回 Label 文字颜色
     * @override
     * @param {ht.Data} data
     * @returns {Color}
     */
    getCurrentLabelColor: function (data) {
        var self = this;
        return self.getCurrentLabelColorImpl(data, self.getLevel(data) + 1);
    },

    /**
     * 返回自定义的行背景
     * @override
     * @param {ht.Data} data
     * @param {Boolean } selected
     * @returns {ht.ui.drawable.Drawable}
     */
    getRowBackgroundDrawable: function (data, selected) {
        return this.getRowBackgroundDrawableImpl(data, selected, this.getLevel(data) + 1);
    },

    /**
     * 弹出树
     * @param {Number} x
     * @param {Number} y
     */
    show: function (x, y) {
        var self = this,
            isInDOM = self.isInDOM();

        self.setX(x);
        self.setY(y);

        if (!isInDOM) {
            self.fireViewEvent({
                kind: 'beforeShow'
            });
            document.body.appendChild(self.getView());
            self.iv();

            self.fireViewEvent({
                kind: 'afterShow'
            });
        }

        Default.callLater(function () {
            self._view.focus();
        });
    },

    /**
     * 隐藏树
     */
    hide: function () {
        var self = this;
        if (self.isInDOM()) {
            self.fireViewEvent({
                kind: 'beforeHide'
            });

            document.body.removeChild(self.getView());

            self.fireViewEvent({
                kind: 'afterHide'
            });
        }
    },

    /**
     * 绘制树
     * @override
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    validateImpl: function (x, y, width, height) {
        var self = this,
            sidebar = self._sidebar;
        PopupTree.superClass.validateImpl.call(self, x, y, width, height);

        var g = self.getRootContext(),
            rootData = self.getRootData();

        var drawable, textColor, headerHeight = sidebar.getHeaderHeight();
        if (self.isSelected(rootData) || self.hasSelectedChildren(rootData) && sidebar.isUseChildSelectStateForParent()) {
            drawable = sidebar.getSelectHeaderBackgroundDrawable();
            textColor = sidebar.getSelectHeaderLabelColor();
        }
        else {
            drawable = sidebar.getExpandedHeaderBackgroundDrawable();
            textColor = sidebar.getExpandedHeaderLabelColor();
        }
        drawable.draw(x, 0, width, headerHeight, self.getRootData(), self);

        // 绘制 header 分割线
        if (sidebar.isHeaderSeparatorVisible()) {
            g.beginPath();
            g.rect(x, headerHeight - 1, width, 1);
            g.fillStyle = sidebar.getHeaderSeparatorColor();
            g.fill();
        }

        // 绘制 header 文字
        g.beginPath();
        var rootData = self.getRootData();
        Default.drawText(g, self.getLabel(rootData), self.getLabelFont(rootData), textColor, x + sidebar.getIndent(), 0, 0, sidebar.getHeaderHeight());

        // 左侧白色边框
        g.beginPath();
        if (sidebar.getPopupDirection() === 'right') {
            g.clearRect(0, y, 1, height);
            g.rect(0, y, 1, height);
        }
        else {
            g.clearRect(width - 1, y, 1, height);
            g.rect(width - 1, y, 1, height);
        }

        g.fillStyle = sidebar.getPopupSeparatorColor();
        g.fill();
    }
});