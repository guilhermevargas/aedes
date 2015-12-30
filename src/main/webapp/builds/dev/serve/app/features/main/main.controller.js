(function() {
  angular.module('aedes').controller('MainController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      setTimeout(function() {
        return $('.slider').slider({
          full_width: false
        });
      }, 100);
      return $(".button-collapse").sideNav();
    };
    vm.appName = "Aedes";
    vm.creationDate = 328938129081;
    init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL21haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEI7SUFDNUI7QUFBQSxRQUFBO0lBQ0EsRUFBQSxHQUFLO0lBRUwsSUFBQSxHQUFPLFNBQUE7TUFDTCxVQUFBLENBQVcsU0FBQTtlQUNULENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxNQUFiLENBQW9CO1VBQUMsVUFBQSxFQUFZLEtBQWI7U0FBcEI7TUFEUyxDQUFYLEVBRUUsR0FGRjthQUlBLENBQUEsQ0FBRSxrQkFBRixDQUFxQixDQUFDLE9BQXRCLENBQUE7SUFMSztJQU9QLEVBQUUsQ0FBQyxPQUFILEdBQWE7SUFDYixFQUFFLENBQUMsWUFBSCxHQUFrQjtJQUNsQixJQUFBLENBQUE7RUFiNEIsQ0FEaEM7QUFBQSIsImZpbGUiOiJmZWF0dXJlcy9tYWluL21haW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgdm0gPSB0aGlzXG5cbiAgICBpbml0ID0gLT5cbiAgICAgIHNldFRpbWVvdXQoKCktPlxuICAgICAgICAkKCcuc2xpZGVyJykuc2xpZGVyKHtmdWxsX3dpZHRoOiBmYWxzZX0pXG4gICAgICAsIDEwMClcblxuICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpXG5cbiAgICB2bS5hcHBOYW1lID0gXCJBZWRlc1wiXG4gICAgdm0uY3JlYXRpb25EYXRlID0gMzI4OTM4MTI5MDgxXG4gICAgaW5pdCgpXG5cbiAgICByZXR1cm5cbiJdfQ==