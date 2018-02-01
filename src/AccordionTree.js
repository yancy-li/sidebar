/**
 * Sidebar 处于展开状态时用此树组件展示(合并时用一组 Label 组件)
 * @param {ht.DataModel} dataModel 
 * @param {ht.ui.Sidebar} sidebar 
 */
var AccordionTree = ui.Sidebar.AccordionTree = function (dataModel, sidebar) {
    var self = this;
    self._sidebar = sidebar;

    AccordionTree.superClass.constructor.call(self, dataModel);

    // 自定义行高
    self.setRowHeightFunc(function (data) {
        var self = this,
            level = self.getLevel(data),
            marginTop = sidebar.getMarginTop(data, level),
            marginBottom = sidebar.getMarginBottom(data, level);

        if (level === 0) {
            return sidebar.getHeaderHeight(data) + marginTop + marginBottom;
        }
        else {
            return sidebar.getRowHeight(data) + marginTop + marginBottom;
        }
    });

    // 点击 data 时派发事件出去
    self.onDataClicked = function (data, e) {
        var message = this.messageHitTest(data, e);
        self.fireViewEvent({
            kind: 'clickData',
            data: data,
            nativeEvent: e,
            message: message,
            source: self
        });
    };
}

Default.def('ht.ui.Sidebar.AccordionTree', ui.TreeView, {
    
    __preferredSizeRowCountLimit: Infinity,
    __layoutParams: {
        width: 'match_parent',
        height: 'match_parent'
    },

    /**
     * @override
     */
    getRowIndent: function () {
        return this._sidebar.getIndent();
    },

    /**
     * 获取鼠标下的 message
     * @param {ht.Data} data
     * @param {Event} e
     */
    messageHitTest: function (data, e) {
        var messageRects = data._messageRects;
        var message;
        if (messageRects) {
            var lp = this.lp(e);
            for (var i = 0, length = messageRects.length; i < length; i++) {
                var rect = messageRects[i].rect;
                if (Default.containsPoint(rect, lp)) {
                    message = messageRects[i].message;
                    return message;
                }
            }
        }
    },

    /**
     * 获取背景 Drawable
     * @override
     */
    getBackgroundDrawable: function () {
        return this._sidebar.getBackgroundDrawable();
    },

    /**
     * 行线是否可见
     * @override
     * @return {Boolean}
     */
    isRowLineVisible: function () {
        return this._sidebar.isHeaderSeparatorVisible();
    },

    /**
     * 检测 toggle 区域
     * @override
     * @param {Event} e
     * @param {ht.Data} data
     * @returns {Boolean}
     */
    toggleHitTest: function (e, data) {
        var self = this, lp = e;
        if (!data)
            data = self.getDataAt(e);

        if (data.hasChildren()) {
            return true;
        }
    },

    /**
     * 在右侧绘制 toggle 图标
     * @override
     * @param {ht.ui.drawable.Drawable} drawable
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @param {ht.Data} data
     */
    drawToggleIcon: function (drawable, x, y, width, height, data) {
        if (drawable) {
            x = this.getContentLeft() + this.getContentWidth() - width - this.getIndent();
            drawable.draw(x, y, width, height, data, this);
        }
        return width;
    },

    /**
     * 判断父节点是否被选中或者是否有被选中的子节点
     * @return {Boolean}
     */
    hasSelectedChildren: function (data) {
        if (data.hasChildren()) {
            var self = this,
                childSelected = false,
                selection = self.sm().getSelection();
            for (var i = 0, size = selection.size(); i < size; i++) {
                var _data = selection.get(i);
                while (_data) {
                    _data = _data.getParent();
                    if (_data && _data === data) {
                        childSelected = true;
                        break;
                    }
                }
            }
            return childSelected;
        }
    },

    /**
     * 获取行背景 Drawable
     * @param {ht.Data} data
     * @param {Boolean} selected
     * @param {Number} level
     * @return {ht.ui.drawable.Drawable}
     */
    getRowBackgroundDrawableImpl: function (data, selected, level) {
        var self = this,
            sidebar = self._sidebar;

        if (level === 0) {
            // header
            if (self.isSelected(data) || self.hasSelectedChildren(data) && sidebar.isUseChildSelectStateForParent()) {
                return sidebar.getSelectHeaderBackgroundDrawable();
            }
            else if (data.hasChildren() && self.isExpanded(data)) {
                return sidebar.getExpandedHeaderBackgroundDrawable();
            }
            else if (data === self.getHoverData()) {
                return sidebar.getHoverHeaderBackgroundDrawable();
            }
            else {
                return sidebar.getHeaderBackgroundDrawable();
            }
        }
        else {
            if (self.isSelected(data) || self.hasSelectedChildren(data) && sidebar.isUseChildSelectStateForParent()) {
                return sidebar.getSelectRowBackgroundDrawable();
            }
            else if (data.hasChildren() && self.isExpanded(data)) {
                return sidebar.getExpandedRowBackgroundDrawable();
            }
            else if (data === self.getHoverData()) {
                return sidebar.getHoverRowBackgroundDrawable();
            }
        }
    },

    /**
     * 返回自定义的行背景
     * @override
     * @param {ht.Data} data
     * @param {Boolean } selected
     * @returns {ht.ui.drawable.Drawable}
     */
    getRowBackgroundDrawable: function (data, selected) {
        return this.getRowBackgroundDrawableImpl(data, selected, this.getLevel(data));
    },

    /**
     * 绘制 header 行线
     * @override
     * @param {CanvasRenderingContext2D} g
     * @param {Color} color
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @param {ht.Data} data
     */
    drawRowLine: function (g, color, x, y, w, h, data) {
        if (!data.getParent()) {
            var sidebar = this._sidebar;
            if (sidebar.isHeaderSeparatorVisible())
                AccordionTree.superClass.drawRowLine.call(this, g, sidebar.getHeaderSeparatorColor(), x, y, w, h, data);
        }
    },

    /**
     * 返回自定义的 Toggle 图标
     * @override
     * @param {ht.Data} data
     * @returns {ht.ui.drawable.Drawable}
     */
    getToggleIconDrawable: function (data) {
        var self = this,
            sidebar = self._sidebar,
            level = self.getLevel(data),
            hasChildren = data.hasChildren(),
            dataExpanded = hasChildren && self.isExpanded(data);
        if (level === 0) {
            if (dataExpanded) {
                if (self.isSelected(data) || self.hasSelectedChildren(data) && sidebar.isUseChildSelectStateForParent()) {
                    return sidebar.getSelectHeaderExpandIconDrawable();
                }
                else {
                    return sidebar.getHeaderExpandIconDrawable();
                }
            }
            else if (hasChildren) {
                if (self.isSelected(data) || self.hasSelectedChildren(data) && sidebar.isUseChildSelectStateForParent()) {
                    return sidebar.getSelectHeaderCollapseIconDrawable();
                }
                else if (data === self.getHoverData()) {
                    return sidebar.getHoverHeaderCollapseIconDrawable();
                }
                else {
                    return sidebar.getHeaderCollapseIconDrawable();
                }
            }
        }
        else if (hasChildren) {
            if (dataExpanded) {
                if (self.isSelected(data) || self.hasSelectedChildren(data)  && sidebar.isUseChildSelectStateForParent()) {
                    return sidebar.getSelectRowExpandIconDrawable();
                }
                else {
                    return sidebar.getRowExpandIconDrawable();
                }
            }
            else {
                if (self.isSelected(data) || self.hasSelectedChildren(data)  && sidebar.isUseChildSelectStateForParent()) {
                    return sidebar.getSelectRowCollapseIconDrawable();
                }
                else if (data === self.getHoverData()) {
                    return sidebar.getHoverRowCollapseIconDrawable();
                }
                else {
                    return sidebar.getRowCollapseIconDrawable();
                }
            }
        }
    },

    /**
     * 返回自定义的图标
     * @override
     * @return {*}
     */
    getIcon: function (data) {
        var self = this,
            sidebar = self._sidebar,
            hasChildren = data.hasChildren(),
            icon = data.s('icon'),
            dataExpanded = hasChildren && self.isExpanded(data);
        if (dataExpanded) {
            if (self.isSelected(data) || self.hasSelectedChildren(data)  && sidebar.isUseChildSelectStateForParent()) {
                return data.s('selectIcon') || icon;
            }
            else {
                return data.s('expandedIcon') || icon;
            }
        }
        else {
            if (self.isSelected(data) || self.hasSelectedChildren(data)  && sidebar.isUseChildSelectStateForParent()) {
                return data.s('selectIcon') || icon;
            }
            else if (data === self.getHoverData()) {
                return data.s('hoverIcon') || icon;
            }
            else {
                return icon;
            }
        }
    },

    /**
     * 获取 Label 文字颜色
     * @override
     * @param {ht.Data} data
     * @param {Number} level
     * @return {*}
     */
    getCurrentLabelColorImpl: function (data, level) {
        var self = this,
            sidebar = self._sidebar;

        if (level === 0) {
            // header
            if (self.isSelected(data) || self.hasSelectedChildren(data)  && sidebar.isUseChildSelectStateForParent()) {
                return sidebar.getSelectHeaderLabelColor();
            }
            else if (data.hasChildren() && self.isExpanded(data)) {
                return sidebar.getExpandedHeaderLabelColor();
            }
            else if (data === self.getHoverData()) {
                return sidebar.getHoverHeaderLabelColor();
            }
            else {
                return sidebar.getHeaderLabelColor();
            }
        }
        else {
            if (self.isSelected(data) || self.hasSelectedChildren(data)  && sidebar.isUseChildSelectStateForParent()) {
                return sidebar.getSelectRowLabelColor();
            }
            else if (data.hasChildren() && self.isExpanded(data)) {
                return sidebar.getExpandedRowLabelColor();
            }
            else if (data === self.getHoverData()) {
                return sidebar.getHoverRowLabelColor();
            }
            else {
                return sidebar.getRowLabelColor();
            }
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
        return self.getCurrentLabelColorImpl(data, self.getLevel(data));
    },

    /**
     * 获取鼠标下的节点
     * @override
     * @param {Event|Point  } pointOrEvent
     * @return {*}
     */
    getDataAt: function (pointOrEvent) {
        var self = this;
        if (Default.getTarget(pointOrEvent)) {
            pointOrEvent = self.lp(pointOrEvent);
        }

        var rows = self.getRowDatas(),
            size = rows.size(),
            rowHeightFunc = self.getRowHeightFunc(),
            index = -1;
        if (rowHeightFunc) {
            var startY = 0, endY = 0;
            for (var i = 0; i < size; i++) {
                var row = rows.get(i),
                    rowHeight = rowHeightFunc.call(self, row),
                    rawStartY = startY,
                    rawRowHeight = rowHeight,
                    rect = self.adjustRowRect(row, 0, startY, 0, rowHeight);
                startY = rect[1];
                rowHeight = rect[3];
                endY = startY + rowHeight;

                if (pointOrEvent.y > startY && pointOrEvent.y <= endY) {
                    index = i;
                    break;
                }
                startY = rawStartY + rawRowHeight;
            }
        }

        return (index < 0 || index >= size) ? null : rows.get(index);
    },

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
            marginTop = sidebar.getMarginTop(data, level),
            marginBottom = sidebar.getMarginBottom(data, level);

        y += marginTop;
        height -= (marginTop + marginBottom);

        return [x, y, width, height];
    },
    /**
     * 绘制行
     * @override
     * @param {CanvasRenderingContext2D} g
     * @param {ht.Data} data
     * @param {Boolean} selected
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    drawRow: function (g, data, selected, x, y, width, height) {
        var self = this,
            rect = self.adjustRowRect(data, x, y, width, height);

        x = rect[0];
        y = rect[1];
        width = rect[2];
        height = rect[3];

        AccordionTree.superClass.drawRow.call(self, g, data, selected, x, y, width, height);

        self.drawMessage(g, data, x, y, width, height);
    },

    /**
     * 绘制消息气泡
     * @param {CanvasRenderingContext2D} g
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    drawMessage: function (g, data, x, y, width, height) {
        var self = this,
            sidebar = self._sidebar,
            messages = data.s('messages'),
            indent = sidebar.getIndent(),
            radius = 9,
            gap = sidebar.getMessageGap(),
            textFont = '11px "Open Sans", sans-serif';

        if (messages) {
            var messageX = self.getContentLeft() + self.getContentWidth() - self.getIndent() - gap;
            if (data.hasChildren()) messageX -= self.getIconWidth();
            var messageRects = data._messageRects = [];
            messages.forEach(function (message) {
                var text = message.text,
                    background = message.background;

                g.beginPath();
                if ((text + '').length === 1) {
                    g.arc(messageX - radius, y + height / 2, radius, 0, 2 * Math.PI);
                    g.fillStyle = background;
                    g.fill();

                    g.beginPath();
                    messageX -= radius * 2;
                    Default.drawText(g, text, textFont, '#fff', messageX, y, radius * 2, height, 'center', 'middle');

                    messageRects.push({
                        rect: {
                            x: messageX,
                            y: y + height / 2 - radius,
                            width: radius * 2,
                            height: radius * 2
                        },
                        message: message
                    });

                    messageX -= gap;
                }
                else {
                    var textSize = Default.getTextSize(textFont, text);
                    var textWidth = textSize.width + 2,
                        textHeight = textSize.height;
                    g.beginPath();
                    messageX -= textWidth;
                    Default.drawRoundRect(g, messageX, y + (height - textHeight) / 2, textWidth, textHeight, 3, 3, 3, 3);
                    g.fillStyle = background;
                    g.fill();

                    g.beginPath();
                    Default.drawText(g, text, textFont, '#fff', messageX, y, textWidth, height, 'center', 'middle');
                    messageRects.push({
                        rect: {
                            x: messageX,
                            y: y + (height - textHeight) / 2,
                            width: textWidth,
                            height: textHeight
                        },
                        message: message
                    });
                    messageX -= gap;
                }
            });
        }
    }
});
