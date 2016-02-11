(function() {
  angular.module('aedes').service('UtilsService', function($http) {
    'ngInject';
    return {
      objectToArray: function(obj) {
        var mappedRows;
        mappedRows = [];
        _.each(obj, function(month) {
          var map;
          map = [];
          _.map(month, function(m, key) {
            if (key !== 'descricao') {
              return map.push(m);
            }
          });
          return mappedRows.push(map);
        });
        return mappedRows;
      },
      getMonthPTBR: function(index) {
        var NomeMes;
        NomeMes = new Array(12);
        NomeMes[0] = "Janeiro";
        NomeMes[1] = "Fevereiro";
        NomeMes[2] = "Março";
        NomeMes[3] = "Abril";
        NomeMes[4] = "Maio";
        NomeMes[5] = "Junho";
        NomeMes[6] = "Julho";
        NomeMes[7] = "Agosto";
        NomeMes[8] = "Setembro";
        NomeMes[9] = "Outubro";
        NomeMes[10] = "Novembro";
        NomeMes[11] = "Dezembro";
        return NomeMes[index - 1];
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy91dGlscy5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsT0FESCxDQUNXLGNBRFgsRUFDMkIsU0FBQyxLQUFEO0lBQ3ZCO1dBRUE7TUFBQSxhQUFBLEVBQWUsU0FBQyxHQUFEO0FBQ2IsWUFBQTtRQUFBLFVBQUEsR0FBYTtRQUNiLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUCxFQUFZLFNBQUMsS0FBRDtBQUNWLGNBQUE7VUFBQSxHQUFBLEdBQU07VUFFTixDQUFDLENBQUMsR0FBRixDQUFNLEtBQU4sRUFBYSxTQUFDLENBQUQsRUFBSSxHQUFKO1lBQ1gsSUFBRyxHQUFBLEtBQU8sV0FBVjtxQkFDRSxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFERjs7VUFEVyxDQUFiO2lCQUlBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLEdBQWhCO1FBUFUsQ0FBWjtBQVNBLGVBQU87TUFYTSxDQUFmO01BYUEsWUFBQSxFQUFjLFNBQUMsS0FBRDtBQUNaLFlBQUE7UUFBQSxPQUFBLEdBQWMsSUFBQSxLQUFBLENBQU0sRUFBTjtRQUNkLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxDQUFBLENBQVIsR0FBYTtRQUNiLE9BQVEsQ0FBQSxFQUFBLENBQVIsR0FBYztRQUNkLE9BQVEsQ0FBQSxFQUFBLENBQVIsR0FBYztBQUVkLGVBQU8sT0FBUSxDQUFBLEtBQUEsR0FBUSxDQUFSO01BZkgsQ0FiZDs7RUFIdUIsQ0FEM0I7QUFBQSIsImZpbGUiOiJmZWF0dXJlcy9jaGFydHMvdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLnNlcnZpY2UgJ1V0aWxzU2VydmljZScsICgkaHR0cCkgLT5cbiAgICAnbmdJbmplY3QnXG5cbiAgICBvYmplY3RUb0FycmF5OiAob2JqKSAtPlxuICAgICAgbWFwcGVkUm93cyA9IFtdXG4gICAgICBfLmVhY2ggb2JqLCAobW9udGgpIC0+XG4gICAgICAgIG1hcCA9IFtdXG5cbiAgICAgICAgXy5tYXAgbW9udGgsIChtLCBrZXkpIC0+XG4gICAgICAgICAgaWYga2V5ICE9ICdkZXNjcmljYW8nXG4gICAgICAgICAgICBtYXAucHVzaCBtXG5cbiAgICAgICAgbWFwcGVkUm93cy5wdXNoIG1hcFxuXG4gICAgICByZXR1cm4gbWFwcGVkUm93c1xuXG4gICAgZ2V0TW9udGhQVEJSOiAoaW5kZXgpIC0+XG4gICAgICBOb21lTWVzID0gbmV3IEFycmF5KDEyKVxuICAgICAgTm9tZU1lc1swXSA9IFwiSmFuZWlyb1wiXG4gICAgICBOb21lTWVzWzFdID0gXCJGZXZlcmVpcm9cIlxuICAgICAgTm9tZU1lc1syXSA9IFwiTWFyw6dvXCJcbiAgICAgIE5vbWVNZXNbM10gPSBcIkFicmlsXCJcbiAgICAgIE5vbWVNZXNbNF0gPSBcIk1haW9cIlxuICAgICAgTm9tZU1lc1s1XSA9IFwiSnVuaG9cIlxuICAgICAgTm9tZU1lc1s2XSA9IFwiSnVsaG9cIlxuICAgICAgTm9tZU1lc1s3XSA9IFwiQWdvc3RvXCJcbiAgICAgIE5vbWVNZXNbOF0gPSBcIlNldGVtYnJvXCJcbiAgICAgIE5vbWVNZXNbOV0gPSBcIk91dHVicm9cIlxuICAgICAgTm9tZU1lc1sxMF0gPSBcIk5vdmVtYnJvXCJcbiAgICAgIE5vbWVNZXNbMTFdID0gXCJEZXplbWJyb1wiXG5cbiAgICAgIHJldHVybiBOb21lTWVzW2luZGV4IC0gMV1cbiJdfQ==