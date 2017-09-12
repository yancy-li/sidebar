var Default = ht.Default,
    def = Default.def,
    ui = ht.ui;

Default.setImage('sidebar_collapse', {
    "width": 16,
    "height": 16,
    "comps": [
        {
            "type": "shape",
            "points": [3, 5, 8, 11, 13, 5],
            "segments": [1, 2, 2],
            "borderWidth": 2,
            "borderColor": "#596677",
            rotation: Math.PI / 2
        }
    ]
});

Default.setImage('sidebar_selectCollapse', {
    "width": 16,
    "height": 16,
    "comps": [
        {
            "type": "shape",
            "points": [3, 5, 8, 11, 13, 5],
            "segments": [1, 2, 2],
            "borderWidth": 2,
            "borderColor": "#fff",
            rotation: Math.PI / 2
        }
    ]
});

Default.setImage('sidebar_expand', {
    "width": 16,
    "height": 16,
    "comps": [
        {
            "type": "shape",
            "points": [3, 5, 8, 11, 13, 5],
            "segments": [1, 2, 2],
            "borderWidth": 2,
            "borderColor": "#596677"
        }
    ]
});

Default.setImage('sidebar_selectExpand', {
    "width": 16,
    "height": 16,
    "comps": [
        {
            "type": "shape",
            "points": [3, 5, 8, 11, 13, 5],
            "segments": [1, 2, 2],
            "borderWidth": 2,
            "borderColor": "#fff"
        }
    ]
});