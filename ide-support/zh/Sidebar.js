/**
 * 侧边栏菜单组件<br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickData</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'clickData', // 事件类型
 *      source: view, // 事件源
 *      data: data, // 节点对象
 *      message: message, // 气泡消息对象
 *      event: e // 原生事件对象
 * }
 * </pre>
 * </td>
 * <td>点击节点时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：headerBackground, headerBackgroundDrawable, hoverHeaderBackground, hoverHeaderBackgroundDrawable, 
 * expandedHeaderBackground, expandedHeaderBackgroundDrawable, selectHeaderBackground, selectHeaderBackgroundDrawable, 
 * headerLabelFont, headerLabelColor, hoverHeaderLabelColor, expandedHeaderLabelColor, selectHeaderLabelColor, headerHeight,
 * headerCollapseIcon, headerCollapseIconDrawable, hoverHeaderCollapseIcon, hoverHeaderCollapseIconDrawable, selectHeaderCollapseIcon, selectHeaderCollapseIconDrawable, 
 * headerExpandIcon, headerExpandIconDrawable, selectHeaderExpandIcon, selectHeaderExpandIconDrawable, rowHeight, 
 * 
 * hoverRowBackground, hoverRowBackgroundDrawable, expandedRowBackground, expandedRowBackgroundDrawable, selectRowBackground, selectRowBackgroundDrawable, 
 * rowLabelFont, rowLabelColor, hoverRowLabelColor, expandedRowLabelColor, selectRowLabelColor, 
 * rowCollapseIcon, rowCollapseIconDrawable, hoverRowCollapseIcon, hoverRowCollapseIconDrawable, selectRowCollapseIcon, selectRowCollapseIconDrawable, 
 * rowExpandIcon, rowExpandIconDrawable, selectRowExpandIcon, selectRowExpandIconDrawable, 
 * 
 * indent, messageGap, headerSeparatorColor, headerSeparatorVisible, headerSeparatorSize, popupDirection, popupSeparatorColor
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 * @extends {ht.ui.VBoxLayout}
 */
ht.ui.Sidebar = function() {}

/**
 * 获取标题行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getHeaderBackground = function() {}

/**
 * 设置标题行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHeaderBackground = function(background) {}

/**
 * 获取标题行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHeaderBackgroundDrawable = function() {}

/**
 * 设置标题行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setHeaderBackgroundDrawable = function(background) {}



/**
 * 获取 hover 状态的标题行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getHoverHeaderBackground = function() {}

/**
 * 设置 hover 状态的标题行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHoverHeaderBackground = function(background) {}

/**
 * 获取 hover 状态的标题行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHoverHeaderBackgroundDrawable = function() {}

/**
 * 设置 hover 状态的标题行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setHoverHeaderBackgroundDrawable = function(background) {}



/**
 * 获取展开状态的标题行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getExpandedHeaderBackground = function() {}

/**
 * 设置展开状态的标题行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setExpandedHeaderBackground = function(background) {}

/**
 * 获取展开状态的标题行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getExpandedHeaderBackgroundDrawable = function() {}

/**
 * 设置展开状态的标题行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setExpandedHeaderBackgroundDrawable = function(background) {}


/**
 * 获取选中的标题行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getSelectHeaderBackground = function() {}

/**
 * 设置选中的标题行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setSelectHeaderBackground = function(background) {}

/**
 * 获取选中的标题行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getSelectHeaderBackgroundDrawable = function() {}

/**
 * 设置选中的标题行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setSelectHeaderBackgroundDrawable = function(background) {}


/**
 * 获取标题行文字字体
 * @return {String} 字体
 */
ht.ui.Sidebar.prototype.getHeaderLabelFont = function() {}

/**
 * 设置标题行文字字体
 * @param {String} font 字体
 */
ht.ui.Sidebar.prototype.setHeaderLabelFont = function(font) {}


/**
 * 获取标题行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getHeaderLabelColor = function() {}

/**
 * 设置标题行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setHeaderLabelColor = function(color) {}


/**
 * 获取 hover 状态的标题行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getHoverHeaderLabelColor = function() {}

/**
 * 设置 hover 状态的标题行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setHoverHeaderLabelColor = function(color) {}



/**
 * 获取展开状态的标题行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getExpandedHeaderLabelColor = function() {}

/**
 * 设置展开状态的标题行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setExpandedHeaderLabelColor = function(color) {}


/**
 * 获取选中状态的标题行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getSelectHeaderLabelColor = function() {}

/**
 * 设置选中状态的标题行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setSelectHeaderLabelColor = function(color) {}


/**
 * 获取标题行高度
 * @return {Number} 高度值
 */
ht.ui.Sidebar.prototype.getHeaderHeight = function() {}

/**
 * 设置标题行高度
 * @param {Number} height 高度值
 */
ht.ui.Sidebar.prototype.setHeaderHeight = function(height) {}


/**
 * 获取标题行合并图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getHeaderCollapseIcon = function() {}

/**
 * 设置标题行合并图标
 * @param {Object} collapseIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHeaderCollapseIcon = function(collapseIcon) {}

/**
 * 获取标题行合并图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHeaderCollapseIconDrawable = function() {}

/**
 * 设置标题行合并图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setHeaderCollapseIconDrawable = function(drawable) {}


/**
 * 获取 hover 状态的标题行合并图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getHoverHeaderCollapseIcon = function() {}

/**
 * 设置 hover 状态的标题行合并图标
 * @param {Object} collapseIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHoverHeaderCollapseIcon = function(collapseIcon) {}

/**
 * 获取 hover 状态的标题行合并图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHoverHeaderCollapseIconDrawable = function() {}

/**
 * 设置 hover 状态的标题行合并图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setHoverHeaderCollapseIconDrawable = function(drawable) {}


/**
 * 获取选中状态的标题行合并图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getSelectHeaderCollapseIcon = function() {}

/**
 * 设置选中状态的标题行合并图标
 * @param {Object} collapseIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setSelectHeaderCollapseIcon = function(collapseIcon) {}

/**
 * 获取选中状态的标题行合并图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getSelectHeaderCollapseIconDrawable = function() {}

/**
 * 设置选中状态的标题行合并图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setSelectHeaderCollapseIconDrawable = function(drawable) {}


/**
 * 获取标题行展开图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getHeaderExpandIcon = function() {}

/**
 * 设置标题行展开图标
 * @param {Object} expandIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHeaderExpandIcon = function(expandIcon) {}

/**
 * 获取标题行展开图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHeaderExpandIconDrawable = function() {}

/**
 * 设置标题行展开图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setHeaderExpandIconDrawable = function(drawable) {}



/**
 * 获取选中状态的标题行展开图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getSelectHeaderExpandIcon = function() {}

/**
 * 设置选中状态的标题行展开图标
 * @param {Object} expandIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setSelectHeaderExpandIcon = function(expandIcon) {}

/**
 * 获取选中状态的标题行展开图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getSelectHeaderExpandIconDrawable = function() {}

/**
 * 设置选中状态的标题行展开图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setSelectHeaderExpandIconDrawable = function(drawable) {}


/**
 * 获取普通行高度
 * @return {Number} 高度值
 */
ht.ui.Sidebar.prototype.getRowHeight = function() {}

/**
 * 设置普通行高度值
 * @param {Number} height 高度值
 */
ht.ui.Sidebar.prototype.setRowHeight = function(height) {}



/**
 * 获取 hover 状态的普通行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getHoverRowBackground = function() {}

/**
 * 设置 hover 状态的普通行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHoverRowBackground = function(background) {}

/**
 * 获取 hover 状态的普通行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHoverRowBackgroundDrawable = function() {}

/**
 * 设置 hover 状态的普通行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setHoverRowBackgroundDrawable = function(background) {}



/**
 * 获取展开状态的普通行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getExpandedRowBackground = function() {}

/**
 * 设置展开状态的普通行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setExpandedRowBackground = function(background) {}

/**
 * 获取展开状态的普通行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getExpandedRowBackgroundDrawable = function() {}

/**
 * 设置展开状态的普通行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setExpandedRowBackgroundDrawable = function(background) {}


/**
 * 获取选中的普通行背景
 * @return {Object} 背景
 */
ht.ui.Sidebar.prototype.getSelectRowBackground = function() {}

/**
 * 设置选中的普通行背景
 * @param {Object} background 背景，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setSelectRowBackground = function(background) {}

/**
 * 获取选中的普通行背景 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getSelectRowBackgroundDrawable = function() {}

/**
 * 设置选中的普通行背景 Drawable
 * @param {ht.ui.drawable.Drawable} background 背景
 */
ht.ui.Sidebar.prototype.setSelectRowBackgroundDrawable = function(background) {}


/**
 * 获取普通行文字字体
 * @return {String} 字体
 */
ht.ui.Sidebar.prototype.getRowLabelFont = function() {}

/**
 * 设置普通行文字字体
 * @param {String} font 字体
 */
ht.ui.Sidebar.prototype.setRowLabelFont = function(font) {}


/**
 * 获取普通行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getRowLabelColor = function() {}

/**
 * 设置普通行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setRowLabelColor = function(color) {}


/**
 * 获取 hover 状态的普通行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getHoverRowLabelColor = function() {}

/**
 * 设置 hover 状态的普通行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setHoverRowLabelColor = function(color) {}



/**
 * 获取展开状态的普通行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getExpandedRowLabelColor = function() {}

/**
 * 设置展开状态的普通行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setExpandedRowLabelColor = function(color) {}


/**
 * 获取选中状态的普通行文字颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getSelectRowLabelColor = function() {}

/**
 * 设置选中状态的普通行文字颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setSelectRowLabelColor = function(color) {}



/**
 * 获取普通行合并图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getRowCollapseIcon = function() {}

/**
 * 设置普通行合并图标
 * @param {Object} collapseIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setRowCollapseIcon = function(collapseIcon) {}

/**
 * 获取普通行合并图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getRowCollapseIconDrawable = function() {}

/**
 * 设置普通行合并图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setRowCollapseIconDrawable = function(drawable) {}


/**
 * 获取 hover 状态的普通行合并图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getHoverRowCollapseIcon = function() {}

/**
 * 设置 hover 状态的普通行合并图标
 * @param {Object} collapseIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setHoverRowCollapseIcon = function(collapseIcon) {}

/**
 * 获取 hover 状态的普通行合并图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getHoverRowCollapseIconDrawable = function() {}

/**
 * 设置 hover 状态的普通行合并图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setHoverRowCollapseIconDrawable = function(drawable) {}


/**
 * 获取选中状态的普通行合并图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getSelectRowCollapseIcon = function() {}

/**
 * 设置选中状态的普通行合并图标
 * @param {Object} collapseIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setSelectRowCollapseIcon = function(collapseIcon) {}

/**
 * 获取选中状态的普通行合并图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getSelectRowCollapseIconDrawable = function() {}

/**
 * 设置选中状态的普通行合并图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setSelectRowCollapseIconDrawable = function(drawable) {}


/**
 * 获取普通行展开图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getRowExpandIcon = function() {}

/**
 * 设置普通行展开图标
 * @param {Object} expandIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setRowExpandIcon = function(expandIcon) {}

/**
 * 获取普通行展开图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getRowExpandIconDrawable = function() {}

/**
 * 设置普通行展开图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setRowExpandIconDrawable = function(drawable) {}



/**
 * 获取选中状态的普通行展开图标
 * @return {Object} 图标
 */
ht.ui.Sidebar.prototype.getSelectRowExpandIcon = function() {}

/**
 * 设置选中状态的普通行展开图标
 * @param {Object} expandIcon 图标，值为任意 Drawable 值(颜色值、图片名、图片路径等，参考 UI 产品包入门手册)
 */
ht.ui.Sidebar.prototype.setSelectRowExpandIcon = function(expandIcon) {}

/**
 * 获取选中状态的普通行展开图标 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景 Drawable
 */
ht.ui.Sidebar.prototype.getSelectRowExpandIconDrawable = function() {}

/**
 * 设置选中状态的普通行展开图标 Drawable
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Sidebar.prototype.setSelectRowExpandIconDrawable = function(drawable) {}


/**
 * 获取行缩进
 * @return {Number} 缩进值
 */
ht.ui.Sidebar.prototype.getIndent = function() {}

/**
 * 设置行缩进
 * @param {Number} indent 缩进值
 */
ht.ui.Sidebar.prototype.setIndent = function(indent) {}


/**
 * 获取消息气泡之间的间距
 * @return {Number} 间距
 */
ht.ui.Sidebar.prototype.getMessageGap = function() {}

/**
 * 设置消息气泡之间的间距
 * @param {Number} gap 间距
 */
ht.ui.Sidebar.prototype.setMessageGap = function(gap) {}


/**
 * 获取标题行之间分割线的颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getHeaderSeparatorColor = function() {}

/**
 * 设置标题行之间分割线的颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setHeaderSeparatorColor = function(color) {}

/**
 * 标题行之间的分割线是否可见
 * @return {Boolean} 是否可见
 */
ht.ui.Sidebar.prototype.getHeaderSeparatorVisible = function() {}

/**
 * 设置标题行之间的分割线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.Sidebar.prototype.setHeaderSeparatorVisible = function(visible) {}


/**
 * 获取标题行之间的分割线的高度
 * @return {Number} 高度值
 */
ht.ui.Sidebar.prototype.getHeaderSeparatorSize = function() {}

/**
 * 设置标题行之间的分割线的高度
 * @param {Number} size 高度值
 */
ht.ui.Sidebar.prototype.setHeaderSeparatorSize = function(size) {}


/**
 * 获取合并状态下的弹出树的弹出方向
 * @return {String} 弹出方向，值为 'left'|'right'
 */
ht.ui.Sidebar.prototype.getPopupDirection = function() {}

/**
 * 设置合并状态下的弹出树的弹出方向
 * @param {String} direction 弹出方向，值为 'left'|'right'
 */
ht.ui.Sidebar.prototype.setPopupDirection = function(direction) {}

/**
 * 获取展开状态下内部的树组件
 * @return {ht.ui.Sidebar.AccordionTree} 树组件
 */
ht.ui.Sidebar.prototype.getAccordionTree = function() {}

/**
 * 获取合并状态下的弹出树组件
 * @return {ht.ui.Sidebar.PopupTree} 树组件
 */
ht.ui.Sidebar.prototype.getPopupTree = function() {}

/**
 * 获取弹出树组件与 Sidebar 组件之间的分隔线的颜色
 * @return {Color} 颜色值
 */
ht.ui.Sidebar.prototype.getPopupSeparatorColor = function() {}


/**
 * 是否处于合并状态
 * @return {Boolean} 是否处于合并状态
 */
ht.ui.Sidebar.prototype.getCollapseMode = function() {}

/**
 * 设置合并状态
 * @param {Boolean} collapseMode 合并状态
 */
ht.ui.Sidebar.prototype.setCollapseMode = function(collapseMode) {}

/**
 * 设置弹出树组件与 Sidebar 组件之间的分隔线的颜色
 * @param {Color} color 颜色值
 */
ht.ui.Sidebar.prototype.setPopupSeparatorColor = function(color) {}

/**
 * 设置数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.ui.Sidebar.prototype.setDataModel = function(dataModel) {}

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.Sidebar.prototype.getDataModel = function(dataModel) {}

/**
 * 获取或设置数据模型，没有参数时相当于 {@link ht.ui.Sidebar#getDataModel getDataModel}，有参数时相当于 {@link ht.ui.Sidebar#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.ui.Sidebar.prototype.dm = function (dataModel){};

/**
 * 隐藏弹出树
 */
ht.ui.Sidebar.prototype.hidePopup = function() {}

/**
 * 弹出树是否处于弹出状态
 * @return {Boolean} 是否处于弹出状态
 */
ht.ui.Sidebar.prototype.isShowing = function() {}