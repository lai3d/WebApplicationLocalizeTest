
layui.define(["jquery", "i18n"], function (exports) {
    var $ = layui.jquery,
        i18n = layui.i18n;

    var i18np = {};

    i18np.load = function (lang) {
        i18n.properties({
            name: "strings", // 资源文件名称
            path: "/i18n/", // 资源文件所在目录路径
            mode: "map", // 模式：变量或 Map
            language: lang, // 对应的语言
            cache: false,
            callback: function () {
                //这里是我通过对标签添加选择器来统一管理需要配置的地方
                //console.log(language);
                $("[lang-title]").each(function (e) {
                    $(this).attr(
                        "title",
                        i18n.prop($(this).attr("lang-title"))
                    );
                });
                $("[lang-pla]").each(function (e) {
                    $(this).attr(
                        "placeholder",
                        i18n.prop($(this).attr("lang-pla"))
                    );
                });
                $("[lang-ht]").each(function (e) {
                    $(this).html(i18n.prop($(this).attr("lang-ht")));
                });
            },
        });
    };

    i18np.changeLanguage = function(language){
        localStorage.setItem('language', language);
        location.reload();
    }

    i18np.prop=function(key /* Add parameters as function arguments as necessary  */){
        return i18n.prop(key);
    }

    exports("i18np", i18np);
});
