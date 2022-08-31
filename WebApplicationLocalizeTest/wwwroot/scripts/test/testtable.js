layui.use(['i18np'], function () {
    var i18np = layui.i18np;

    console.log("Message List test");
})



layui.use(['layer', 'table', 'i18np'], function () {
    var table = layui.table,
        layer = layui.layer,
        i18np = layui.i18np;

    var language = localStorage.getItem('language');
    //i18np.load(language);
    console.log("Message List", i18np.prop('haha'));

    //新闻列表
    var tableIns = table.render({
        elem: '#MessageList',
        cellMinWidth: 95,
        page: true,
        height: "full-125",
        limit: 25,
        limits: [15, 20, 25, 50],
        id: "MessageList",
        cols: [[
            { field: 'Id', title: 'Id', width: 130, align: "center", id: "Id" },
            { field: 'WebCode', title: i18np.prop('Brand'), width: 80, align: "center" },
            {
                field: 'Category', title: i18np.prop('Category'), align: 'center', templet: function (d) {
                    switch (d.Category) {
                        case 1:
                            return 'Game';
                        case 2:
                            return 'Maintenance';
                        case 3:
                            return 'Promotion';
                        default:
                            return 'Others';
                    }
                }
            },
            {
                field: 'MessageType', title: i18np.prop('Message Type'), align: 'center', templet: function (d) {
                    switch (d.MessageType) {
                        case 1:
                            return 'Private';
                        case 2:
                            return 'Public';
                        default:
                            return 'Error';
                    }
                }
            },
            { field: 'MessageContent', title: i18np.prop('Message Content'), width: 350, align: "center" },
            {
                field: 'Status', title: i18np.prop('Status'), align: 'center', templet: function (d) {
                    switch (d.Status) {
                        case 0:
                            return 'Draft';
                        case 1:
                            return 'Published';
                        default:
                            return 'Error';
                    }
                }
            }

        ]]
        , done: function () {

        },

        response: {
            countName: 'totalCount',
            dataName: 'Item'
        },

    });

    //定义给子页面
    window.layer = layer;
    window.tableIns = tableIns;

})