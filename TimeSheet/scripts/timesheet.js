(function (global) {
    var TimeSheetViewModel,
        app = global.app = global.app || {};

    TimeSheetViewModel = kendo.data.ObservableObject.extend({
        timesheetDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/weather.json",
                        dataType: "json"
                    }
                }
            });

            that.set("timesheetDataSource", dataSource);
        }
    });

    app.timesheetService = {
        viewModel: new  TimeSheetViewModel()
    };
})(window);