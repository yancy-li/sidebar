/**
 * 侧边栏菜单组件
 * @param {ht.DataModel} dataModel
 */
ui.Sidebar = function (dataModel) {
    var self = this,
        accordionTree = self._accordionTree = new AccordionTree(dataModel, self);

    self._popupTree = new PopupTree(dataModel, self);

    accordionTree.addViewListener(self.handleTreeViewEvent, self);

    ui.Sidebar.superClass.constructor.call(self);

    self.addView(accordionTree);

    self.setDataModel(dataModel);
};

def('ht.ui.Sidebar', ui.VBoxLayout, {
    // 样式属性
    ui_ac: ['drawable:headerBackground', 'drawable:hoverHeaderBackground', 'drawable:expandedHeaderBackground', 'drawable:selectHeaderBackground',
        'headerLabelFont', 'headerLabelColor', 'hoverHeaderLabelColor', 'expandedHeaderLabelColor', 'selectHeaderLabelColor',
        'headerHeight',

        'drawable:headerCollapseIcon', 'drawable:hoverHeaderCollapseIcon', 'drawable:selectHeaderCollapseIcon',
        'drawable:headerExpandIcon', 'drawable:selectHeaderExpandIcon',
        'rowHeight',

        'drawable:hoverRowBackground', 'drawable:expandedRowBackground', 'drawable:selectRowBackground',
        'rowLabelFont', 'rowLabelColor', 'hoverRowLabelColor', 'expandedRowLabelColor', 'selectRowLabelColor',

        'drawable:rowCollapseIcon', 'drawable:hoverRowCollapseIcon', 'drawable:selectRowCollapseIcon',
        'drawable:rowExpandIcon', 'drawable:selectRowExpandIcon',

        'indent', 'messageGap',
        'headerSeparatorColor', 'headerSeparatorVisible', 'headerSeparatorSize',
        'popupDirection', 'popupSeparatorColor'
    ],
    // 普通属性
    ms_ac: ['hoverDataId'],

    __popupDirection: 'right',
    __popupSeparatorColor: '#f2f6f9',
    __headerHeight: 38,
    __rowHeight: 30,
    __messageGap: 4,

    __rowLabelColor: '#b4bcc8',
    __hoverRowLabelColor: '#b4bcc8',
    __expandedRowLabelColor: '#b4bcc8',
    __selectRowLabelColor: '#b4bcc8',
    __rowLabelFont: '14px "Open Sans", sans-serif',

    __hoverRowBackground: '#3e4b5c',
    __expandedRowBackground: '#3e4b5c',
    __selectRowBackground: '#3e4b5c',

    __hoverHeaderBackground: '#2c3542',
    __expandedHeaderBackground: '#2c3542',
    __selectHeaderBackground: '#36c6d3',

    __headerLabelColor: '#b4bcc8',
    __hoverHeaderLabelColor: '#b4bcc8',
    __expandedHeaderLabelColor: '#b4bcc8',
    __selectHeaderLabelColor: 'white',

    __headerCollapseIcon: 'sidebar_collapse',
    __hoverHeaderCollapseIcon: 'sidebar_collapse',
    __selectHeaderCollapseIcon: 'sidebar_selectCollapse',

    __headerExpandIcon: 'sidebar_expand',
    __selectHeaderExpandIcon: 'sidebar_selectExpand',

    __rowCollapseIcon: 'sidebar_collapse',
    __hoverRowCollapseIcon: 'sidebar_collapse',
    __selectRowCollapseIcon: 'sidebar_selectCollapse',

    __rowExpandIcon: 'sidebar_expand',
    __selectRowExpandIcon: 'sidebar_selectExpand',

    __indent: 4,

    __headerSeparatorColor: '#3d4957',
    __headerSeparatorVisible: true,

    __background: '#364150',

    /**
     * 获取树节点顶部距离上个节点的距离
     * @param {ht.Data} data
     * @param {Number} level
     */
    getMarginTop: function (data, level) {
        var self = this;

        if (level === 0) {
            return 0;
        }
        else if (level === 1) {
            var parent = data.getParent(),
                children = parent.getChildren(),
                firstData = children.get(0);
            if (data === firstData) {
                return 7;
            }
            else {
                return 1;
            }
        }
        else {
            return 1;
        }
    },

    /**
     * 获取树节点底部距离下个节点的距离
     * @param {ht.Data} data
     * @param {Number} level
     */
    getMarginBottom: function (data, level) {
        var self = this;

        if (level === 0) {
            return 0;
        }
        else if (level === 1) {
            var parent = data.getParent(),
                children = parent.getChildren(),
                lastData = children.get(children.size() - 1);
            if (data === lastData) {
                return 7;
            }
            else {
                return 1;
            }
        }
        else {
            return 1;
        }
    },

    /**
     * 获取展开状态下的树组件
     * @return {ht.ui.TreeView}
     */
    getAccordionTree: function () {
        return this._accordionTree;
    },

    /**
     * 获取合并状态下弹出的树组件
     */
    getPopupTree: function () {
        return this._popupTree;
    },

    /**
     * 合并模式下，根据鼠标事件获取节点 id
     * @param {Event} e
     * @return {Number}
     */
    getDataIdAt: function (e) {
        var children = this.getChildren(),
            target = Default.getTarget(e);
        for (var i = 0, length = children.size(); i < length; i++) {
            var child = children.get(i);
            if (child.getView().contains(target)) {
                return child._item.id;
            }
        }
    },

    /**
     * 处理树组件事件
     * @param {Event} e
     */
    handleTreeViewEvent: function (e) {
        var self = this,
            kind = e.kind;
        if (kind === 'expand' || kind === 'collapse') {
            self.iv();
        }
        else if (kind === 'clickData') {
            self.fireViewEvent(e);
        }
    },

    /**
     * 设置合并模式 
     * @param {Boolean} collapsedMode
     */
    setCollapsedMode: function (collapsedMode) {
        var self = this,
            oldCollapsedMode = !!self._collapsedMode;
        collapsedMode = !!collapsedMode;

        if (oldCollapsedMode !== collapsedMode) {
            var handleTreeViewEvent = self.handleTreeViewEvent,
                accordionTree = self._accordionTree,
                popupTree = self._popupTree;

            self.clear();

            if (collapsedMode) {
                accordionTree.removeViewListener(handleTreeViewEvent, self);
                popupTree.addViewListener(handleTreeViewEvent, self);

                self.ivm();
            }
            else {
                popupTree.removeViewListener(handleTreeViewEvent, self);
                accordionTree.addViewListener(handleTreeViewEvent, self);

                self.addView(accordionTree);
            }
        }
        self.setPropertyValue('collapsedMode', collapsedMode);
    },

    /**
     * 是否处于合并模式
     * @return {Boolean}
     */
    isCollapsedMode: function () {
        return this._collapsedMode;
    },

    /**
     * 隐藏弹出树
     */
    hidePopup: function () {
        this._popupTree.hide();
    },

    /**
     * 弹出树是否显示
     */
    isShowing: function () {
        return this._popupTree.isInDOM();
    },

    /**
     * @override
     */
    setUpInteractors: function () {
        ui.Sidebar.superClass.setUpInteractors.call(this);
        var navInteractor = this._navInteractor;
        if (!navInteractor) {
            navInteractor = this._navInteractor = new SidebarInteractor(this);
            navInteractor.addListeners();
        }
    },

    /**
     * 设置数据模型
     */
    setDataModel: function (dataModel) {
        var self = this,
            oldValue = self._dataModel;
        if (oldValue === dataModel) {
            return;
        }
        if (oldValue) {
            oldValue.umm(self.handleDataModelChange, self);
            oldValue.umd(self.handleDataPropertyChange, self);
            oldValue.umh(self.handleHierarchyChange, self);
            oldValue.sm().ums(self.handleSelectionChange, self);
        }
        self._dataModel = dataModel;
        dataModel.mm(self.handleDataModelChange, self);
        dataModel.md(self.handleDataPropertyChange, self);
        dataModel.mh(self.handleHierarchyChange, self);
        dataModel.sm().ms(self.handleSelectionChange, self);

        self.getAccordionTree().setDataModel(dataModel);
        self.getPopupTree().setDataModel(dataModel);
        self._invalidateModel = true;
        self.fp("dataModel", oldValue, dataModel);
    },

    /**
     * 获取数据模型
     */
    getDataModel: function () {
        return this._dataModel;
    },

    /**
     * getDataModel 和 setDataModel 的缩写
     */
    dm: function (dataModel) {
        if (dataModel) {
            this.setDataModel(dataModel);
        }
        else {
            return this.getDataModel();
        }
    },

    handleDataModelChange: function (e) {
        this.ivm();
    },
    handleDataPropertyChange: function (e) {
        this.ivm();
    },
    handleHierarchyChange: function (e) {
        this.ivm();
    },
    handleSelectionChange: function (e) {
        this.iv();
    },

    ivm: function () {
        this.invalidateModel();
    },

    /**
     * 使模型无效
     */
    invalidateModel: function () {
        var self = this;
        if (!self._invalidateModel) {
            self._invalidateModel = true;
        }
        self.iv();
    },

    /**
     * Tree 上很多属性依赖本容器中的属性，所以属性发生变化需要通知 Tree 刷新
     * @override
     * @param {Event} e
     */
    onPropertyChanged: function (e) {
        var self = this,
            property = e.property;
        ui.Sidebar.superClass.onPropertyChanged.call(self, e);

        if (property.indexOf('header') >= 0 || property.indexOf('Header') >= 0 || property.indexOf('row') >= 0 || property.indexOf('Row') >= 0
            || property === 'indent' || property === 'messageGap') {
            if (self.isCollapsedMode()) {
                self._popupTree.iv();
            }
            else {
                self._accordionTree.iv();
            }
        }
    },

    /**
     * 刷新模型
     * @override
     */
    validateModel: function () {
        var self = this;
        if (self.isCollapsedMode()) {
            self.clear();
            var roots = self._dataModel._roots;
            roots.each(function (data) {
                var label = new ui.Label();
                label.setIcon(data.getIcon());
                label._item = {
                    id: data.getId(),
                    label: data.getName(),
                    icon: data.getIcon(),
                    items: []
                };
                var items = label._items = label._item.items;
                self.buildChildren(data, items);
                self.addView(label, {
                    width: 'match_parent',
                    height: self.getHeaderHeight()
                });
            });
        }
    },

    /**
     * 填充 items 数组
     * @param {ht.Data} data
     * @param {Array} items
     */
    buildChildren: function (data, items) {
        var self = this,
            children = data.getChildren();

        children.each(function (data) {
            var item = {
                id: data.getId(),
                icon: data.getIcon(),
                label: data.getName(),
                items: []
            };
            items.push(item);
            self.buildChildren(data, item.items);
        });
    },
    /**
     * 绘制组件
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    validateImpl: function (x, y, width, height) {
        var self = this;

        if (self._invalidateModel) {
            self.validateModel();
            self._invalidateModel = null;
        }

        ui.Sidebar.superClass.validateImpl.call(self, x, y, width, height);

        if (self.isCollapsedMode()) {
            var children = self.getChildren(),
                dataModel = self.getDataModel(),
                popupTree = self._popupTree,
                hoverDataId = self._hoverDataId;

            if (hoverDataId == null) {
                popupTree.hide();
            }

            for (var i = 0, length = children.size(); i < length; i++) {
                var label = children.get(i),
                    labelData = dataModel.getDataById(label._item.id),
                    hasSelectedChildren = popupTree.hasSelectedChildren(labelData);

                if (label._item.id === hoverDataId) {
                    var windowInfo = Default.getWindowInfo(),
                        bound = label.getView().getBoundingClientRect();

                    popupTree.setRootData(dataModel.getDataById(hoverDataId));
                    popupTree.setRootVisible(false);
                    popupTree.ivm();
                    popupTree.validateModel();

                    var preferredSize = popupTree.figurePreferredSize(),
                        popupX = bound.left + windowInfo.left + bound.width,
                        popupY = bound.top + windowInfo.top,
                        popupWidth = preferredSize.width,
                        popupHeight = preferredSize.height;

                    if (self.getPopupDirection() === 'left') {
                        popupX = bound.left + windowInfo.left - popupWidth;
                    }

                    if (popupY + popupHeight > windowInfo.top + windowInfo.height - 1) {
                        popupHeight = windowInfo.top + windowInfo.height - 1 - popupY;
                    }
                    popupTree.setWidth(popupWidth);
                    popupTree.setHeight(popupHeight);

                    popupTree.show(popupX, popupY);
                    popupTree.validate();
                }

                if (hasSelectedChildren) {
                    label.setBackgroundDrawable(self.getSelectHeaderBackgroundDrawable());
                }
                else if (label._item.id === hoverDataId) {
                    label.setBackgroundDrawable(self.getExpandedHeaderBackgroundDrawable());
                }
                else {
                    label.setBackgroundDrawable(self.getHeaderBackgroundDrawable());
                }

                if (self.isHeaderSeparatorVisible()) {
                    var border = label.getBorder();
                    if (border) {
                        border.setColor(self.getHeaderSeparatorColor());
                    }
                    else {
                        label.setBorder(new ht.ui.border.IndividualLineBorder(0, 0, 1, 0, self.getHeaderSeparatorColor()));
                    }
                }

                var icon = labelData.s('icon');
                if (popupTree.hasSelectedChildren(labelData)) {
                    label.setIcon(labelData.s('selectIcon') || icon);
                }
                else if (label._item.id === hoverDataId) {
                    label.setIcon(labelData.s('expandedIcon') || icon);
                }
                else {
                    label.setIcon(icon);
                }
            }
        }
    },
    getSerializableProperties: function () {
        var parentProperties = ht.Default.clone(ui.Sidebar.superClass.getSerializableProperties.call(this));
        delete parentProperties.children;
        return ht.Default.addMethod(parentProperties, {
            dataModel: true,
            headerBackground: true,
            headerBackgroundDrawable: true,
            hoverHeaderBackground: true,
            hoverHeaderBackgroundDrawable: true,
            expandedHeaderBackground: true,
            expandedHeaderBackgroundDrawable: true,
            selectHeaderBackground: true,
            selectHeaderBackgroundDrawable: true,
            headerLabelFont: true,
            headerLabelColor: true,
            hoverHeaderLabelColor: true,
            expandedHeaderLabelColor: true,
            selectHeaderLabelColor: true,
            headerHeight: true,
            headerSeparatorColor: true,
            headerSeparatorSize: true,
            headerCollapseIcon: true,
            headerCollapseIconDrawable: true,
            hoverHeaderCollapseIcon: true,
            hoverHeaderCollapseIconDrawable: true,
            selectHeaderCollapseIcon: true,
            selectHeaderCollapseIconDrawable: true,
            headerExpandIcon: true,
            headerExpandIconDrawable: true,
            selectHeaderExpandIcon: true,
            selectHeaderExpandIconDrawable: true,
            rowHeight: true,
            hoverRowBackground: true,
            hoverRowBackgroundDrawable: true,
            expandedRowBackground: true,
            expandedRowBackgroundDrawable: true,
            selectRowBackground: true,
            selectRowBackgroundDrawable: true,
            rowLabelFont: true, rowLabelColor: true, hoverRowLabelColor: true, expandedRowLabelColor: true, selectRowLabelColor: true,

            rowCollapseIcon: true,
            rowCollapseIconDrawable: true,
            hoverRowCollapseIcon: true,
            hoverRowCollapseIconDrawable: true,
            selectRowCollapseIcon: true,
            selectRowCollapseIconDrawable: true,
            rowExpandIcon: true,
            rowExpandIconDrawable: true,
            selectRowExpandIcon: true,
            selectRowExpandIconDrawable: true,

            indent: true, messageGap: true,
            headerSeparatorVisible: true,
            popupDirection: true,
            popupSeparatorColor: true
        });
    }
});