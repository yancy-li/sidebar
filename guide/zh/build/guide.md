
索引

* [概述](#ref_description)
* [示例](#ref_sample)
* [自定义组件样式](#ref_customstyle)

---

!(#ref_description)

### 概述
`ht.ui.Sidebar` 侧边栏菜单组件，在页面左侧或右侧展示垂直树状菜单并且支持合并状态(仅显示图标)

使用本组件需要先引入 `js` 类库：

    <script src="ht.js"></script>
    <script src="ht-ui.js"></script>
    <script src="ht-ui-sidebar.js"></script>

本组件从 `ht.ui.VBoxLayout` 继承，处于展开状态时内部创建一个子组件 (`ui.Sidebar.AccordionTree`) 渲染；处于合并状态时，删掉 `AccordionTree` 并创建一组 `ht.ui.Label` 作为图标

树状菜单中每一行为一个节点，节点分为两种：

* 标题行(最根层的节点，也就是没有父节点的节点)，相关样式通常用 `headerXXX` 控制，例如 `headerExpandIcon` 表示标题行的展开图标
* 普通行(标题行之外的其它节点)，相关样式通常用 `rowXXX` 控制，例如 `rowExpandIcon` 表示普通行的展开图标

标题行和普通行均可设置背景、行(节点)图标、展开合并图标、文字颜色等，请参考 `API` 文档

树中每个节点可以通过 `messages` 样式添加提示气泡：

    child.s('messages', [
        {
            text: '3',
            background: '#ed6b75'
        },
        {
            text: '22',
            background: '#36c6d3'
        }
    ]);

`clickData` 事件用于监听节点点击和提示起泡点击：

    sidebar.on('clickData', function (e) {
        if (sidebar.isCollapsedMode() && !e.data.hasChildren()) {
            sidebar.hidePopup();
        }

        if (e.message) {
            // 气泡点击事件
        }
        console.log('clickData：', e);
    });

!(#ref_sample)

### 简单示例

接下来看一个简单的例子：

!(#example_demo@500)

!(#ref_customstyle)

###自定义组件样式

此组件支持通过 `Style` 机制配置风格：

!(#example_lightdemo@500)


`Style` 样式配置代码：

    <script rel="ht-style">
        ({
            '&light': {
                background: 'white',
                headerBackground: null,
                hoverHeaderBackground: '#f2f6f9',
                expandedHeaderBackground: '#f2f6f9',
                selectHeaderBackground: '#f2f6f9',
                headerSeparatorVisible: false,

                headerLabelColor: '#678098',
                expandedHeaderLabelColor: '#5b9bd1',
                hoverHeaderLabelColor: '#5b9bd1',
                selectHeaderLabelColor: '#5b9bd1',

                rowLabelColor: '#678098',
                expandedRowLabelColor: '#5b9bd1',
                hoverRowLabelColor: '#5b9bd1',
                selectRowLabelColor: '#5b9bd1',

                hoverRowBackground: '#f2f6f9',
                expandedRowBackground: '#f2f6f9',
                selectRowBackground: '#f2f6f9',

                selectHeaderIcon: 'sidebar_expand',
                selectHeaderExpandIcon: 'sidebar_expand',
                selectRowCollapseIcon: 'sidebar_collapse',
                selectRowExpandIcon: 'sidebar_expand'
            },
            '&rightPopupTree': {
                boxShadow: '-6px 0 10px rgba(0, 0, 0, 0.3)'
            }
        })
    </script>