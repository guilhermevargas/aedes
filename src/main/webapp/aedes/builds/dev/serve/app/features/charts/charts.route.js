(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('infograficos', {
      url: '/infograficos',
      templateUrl: 'app/features/charts/charts.html',
      views: {
        "header": {
          templateUrl: 'app/features/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'header'
        },
        "": {
          templateUrl: 'app/features/charts/charts.html',
          controller: 'ChartsController',
          resolve: {
            estados: function(EnderecoService) {
              return EnderecoService.findAllEstados();
            }
          }
        }
      }
    }).state('infograficos.exibicao', {
      url: '/exibicao',
      templateUrl: 'app/features/charts/charts.html',
      views: {
        "regional": {
          templateUrl: 'app/features/charts/regional/chart.html',
          controller: 'ChartRegionalController',
          controllerAs: 'regionalCtrl'
        },
        "mensal": {
          templateUrl: 'app/features/charts/mensal/chart.html',
          controller: 'ChartMensalController',
          controllerAs: 'mensalCtrl'
        },
        "emDia": {
          templateUrl: 'app/features/charts/emDia/chart.html',
          controller: 'ChartEmDiaController',
          controllerAs: 'emDiaCtrl'
        },
        "atrasadas": {
          templateUrl: 'app/features/charts/atrasadas/chart.html',
          controller: 'ChartAtrasadasController',
          controllerAs: 'atrasadasCtrl'
        }
      }
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);
