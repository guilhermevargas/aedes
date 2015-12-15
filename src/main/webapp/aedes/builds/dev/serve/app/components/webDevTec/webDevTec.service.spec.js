(function() {
  describe('service webDevTec', function() {
    beforeEach(module('aedes'));
    it('should be registered', inject(function(webDevTec) {
      return expect(webDevTec).not.toEqual(null);
    }));
    return describe('getTec function', function() {
      it('should exist', inject(function(webDevTec) {
        return expect(webDevTec.getTec).not.toEqual(null);
      }));
      return it('should return array of object', inject(function(webDevTec) {
        var data;
        data = webDevTec.getTec();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        return expect(data.length > 5).toBeTruthy();
      }));
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsUUFBQSxDQUFTLG1CQUFULEVBQThCLFNBQUE7SUFDNUIsVUFBQSxDQUFXLE1BQUEsQ0FBTyxPQUFQLENBQVg7SUFFQSxFQUFBLENBQUcsc0JBQUgsRUFBMkIsTUFBQSxDQUFPLFNBQUMsU0FBRDthQUNoQyxNQUFBLENBQU8sU0FBUCxDQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUF0QixDQUE4QixJQUE5QjtJQURnQyxDQUFQLENBQTNCO1dBR0EsUUFBQSxDQUFTLGlCQUFULEVBQTRCLFNBQUE7TUFDMUIsRUFBQSxDQUFHLGNBQUgsRUFBbUIsTUFBQSxDQUFPLFNBQUMsU0FBRDtlQUN4QixNQUFBLENBQU8sU0FBUyxDQUFDLE1BQWpCLENBQXdCLENBQUMsR0FBRyxDQUFDLE9BQTdCLENBQXFDLElBQXJDO01BRHdCLENBQVAsQ0FBbkI7YUFHQSxFQUFBLENBQUcsK0JBQUgsRUFBb0MsTUFBQSxDQUFPLFNBQUMsU0FBRDtBQUN6QyxZQUFBO1FBQUEsSUFBQSxHQUFPLFNBQVMsQ0FBQyxNQUFWLENBQUE7UUFDUCxNQUFBLENBQU8sSUFBUCxDQUFZLENBQUMsT0FBYixDQUFxQixPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FBckI7UUFDQSxNQUFBLENBQU8sSUFBSyxDQUFBLENBQUEsQ0FBWixDQUFlLENBQUMsT0FBaEIsQ0FBd0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaLENBQXhCO2VBQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBckIsQ0FBdUIsQ0FBQyxVQUF4QixDQUFBO01BSnlDLENBQVAsQ0FBcEM7SUFKMEIsQ0FBNUI7RUFONEIsQ0FBOUI7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUgJ3NlcnZpY2Ugd2ViRGV2VGVjJywgKCkgLT5cbiAgYmVmb3JlRWFjaCBtb2R1bGUgJ2FlZGVzJ1xuXG4gIGl0ICdzaG91bGQgYmUgcmVnaXN0ZXJlZCcsIGluamVjdCAod2ViRGV2VGVjKSAtPlxuICAgIGV4cGVjdCh3ZWJEZXZUZWMpLm5vdC50b0VxdWFsIG51bGxcblxuICBkZXNjcmliZSAnZ2V0VGVjIGZ1bmN0aW9uJywgKCkgLT5cbiAgICBpdCAnc2hvdWxkIGV4aXN0JywgaW5qZWN0ICh3ZWJEZXZUZWMpIC0+XG4gICAgICBleHBlY3Qod2ViRGV2VGVjLmdldFRlYykubm90LnRvRXF1YWwgbnVsbFxuXG4gICAgaXQgJ3Nob3VsZCByZXR1cm4gYXJyYXkgb2Ygb2JqZWN0JywgaW5qZWN0ICh3ZWJEZXZUZWMpIC0+XG4gICAgICBkYXRhID0gd2ViRGV2VGVjLmdldFRlYygpXG4gICAgICBleHBlY3QoZGF0YSkudG9FcXVhbCBqYXNtaW5lLmFueSBBcnJheVxuICAgICAgZXhwZWN0KGRhdGFbMF0pLnRvRXF1YWwgamFzbWluZS5hbnkgT2JqZWN0XG4gICAgICBleHBlY3QoZGF0YS5sZW5ndGggPiA1KS50b0JlVHJ1dGh5KClcbiJdfQ==