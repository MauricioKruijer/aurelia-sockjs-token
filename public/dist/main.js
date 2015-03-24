System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
    var LogManager, ConsoleAppender;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

        aurelia.start().then(function (a) {
            return a.setRoot("app", document.body);
        });
    }

    return {
        setters: [function (_aureliaFramework) {
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaLoggingConsole) {
            ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
        }],
        execute: function () {
            "use strict";

            LogManager.addAppender(new ConsoleAppender());
            LogManager.setLevel(LogManager.levels.debug);
        }
    };
});
/**
 * Created by Mauricio on 24/03/15.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdRLFVBQVUsRUFDVixlQUFlOzt5QkFLUCxTQUFTOztBQUFsQixhQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsZUFBTyxDQUFDLEdBQUcsQ0FDTixzQkFBc0IsRUFBRSxDQUN4QixnQkFBZ0IsRUFBRSxDQUNsQixNQUFNLEVBQUUsQ0FDUixlQUFlLEVBQUUsQ0FBQzs7QUFFdkIsZUFBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7bUJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztLQUM1RDs7OztBQWRPLHNCQUFVLHFCQUFWLFVBQVU7O0FBQ1YsMkJBQWUsMEJBQWYsZUFBZTs7Ozs7QUFFdkIsc0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLHNCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9