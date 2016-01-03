angular.module("aedes").run(["$templateCache", function($templateCache) {$templateCache.put("app/app.html","<div ui-view=\"\"></div>");
$templateCache.put("app/components/chart/chart.html","<div id=\"loader\" ng-if=\"loader\"><div class=\"row\"><div class=\"col s6 offset-s5\"><div class=\"preloader-wrapper big active\"><div class=\"spinner-layer spinner-blue-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div></div></div></div><div class=\"chart-directive\" ng-if=\"!loader\"></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav><div class=\"nav-wrapper blue darken-1\"><a href=\"#\" class=\"brand-logo\" ng-bind=\"vm.appName\"></a><ul class=\"right hide-on-med-and-down\"><li ng-repeat=\"aba in vm.abas\" ng-class=\"{\'active\' : vm.checkActiveState(aba)}\"><a ui-sref=\"{{aba.sref}}\" ng-bind=\"aba.name\"></a></li></ul><a ng-if=\"vm.mobileFirst\" href=\"#\" data-activates=\"mobile-menu\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a><ul ng-if=\"vm.mobileFirst\" class=\"side-nav\" id=\"mobile-menu\"><li ng-repeat=\"aba in vm.abas\" ng-class=\"{\'active\' : vm.checkActiveState(aba)}\"><a ui-sref=\"{{aba.sref}}\" ng-bind=\"aba.name\"></a></li></ul></div></nav>");
$templateCache.put("app/features/charts/charts.html","<div class=\"graficos container\"><div ui-view=\"mensal\"></div><div class=\"row\"><div class=\"col s12 m6\"><div ui-view=\"emDia\"></div></div><div class=\"col s12 m6\"><div ui-view=\"atrasadas\"></div></div></div><div ui-view=\"regional\"></div></div>");
$templateCache.put("app/features/header/header.html","<header class=\"navbar-fixed\"><acme-navbar app-name=\"header.appName\"></acme-navbar></header>");
$templateCache.put("app/features/main/conheca-app.html","<div class=\"container\"><div class=\"row mt centered\"><div class=\"col s12 m6 offset-m3\"><h3>O Aplicativo...</h3><h3></h3></div></div><div class=\"row centered\"><div class=\"col s12 m6 offset-m3\"><div class=\"slider\"><ul class=\"slides\"><li><img src=\"images/p01.png\"></li><li><img src=\"images/p02.png\"></li><li><img src=\"images/p03.png\"></li></ul></div></div></div></div>");
$templateCache.put("app/features/main/download-app.html","<div id=\"headerwrap\" class=\"blue darken-1\"><div class=\"container\"><div class=\"row\" style=\"margin-bottom: 0\"><div class=\"col s12 m6\"><h3>A prevenção é a única arma contra a dengue.<br>Baixe o aplicativo</h3><p class=\"lead\"><a href=\"{{storeLink}}\" target=\"_blank\" class=\"waves-effect waves-light btn-large blue lighten-2 white-text\">Baixar</a></p></div><div class=\"col s12 m6\"><img class=\"img-responsive\" src=\"images/ipad-hand.png\" alt=\"\"></div></div></div></div>");
$templateCache.put("app/features/main/main.html","<div ng-include=\"\'app/features/main/download-app.html\'\"></div><div ng-include=\"\'app/features/main/passos.html\'\"></div><div ng-include=\"\'app/features/main/conheca-app.html\'\"></div><div class=\"row mt centered\"><div class=\"col-lg-6 col-lg-offset-3\"><h3>Consulte os infográficos<br></h3><h5>Verifique o quão protegida sua região se encontra.</h5></div></div><div class=\"container\"><hr><p class=\"centered\">Criado by GSuaki - 2015</p></div>");
$templateCache.put("app/features/main/passos.html","<div class=\"container mt\"><div class=\"row centered\"><div class=\"col s12 m12\"><h3>Mantenha-se longe da dengue<br>em três passos!</h3><h5>Agende suas prevenções e deixe-nos lhe ajudar nesta tarefa.</h5></div></div><div class=\"row mt centered\"><div class=\"col s12 m4\"><img src=\"images/checklist.png\" width=\"180\" alt=\"1º Agende suas prevenções\"><h5>1º Agende a prevenção</h5><p>Faça o checklist dos possíveis focos de dengue em sua residência para que as prevenções sejam agendadas.</p></div><div class=\"col s12 m4\"><img src=\"images/notificacao.png\" width=\"180\" alt=\"2º É hora da prevenção\"><h5>2º É hora da prevenção</h5><p>Receba uma notificação no momento de efetuar a prevenção. .</p></div><div class=\"col s12 m4\"><img src=\"images/reagendar.png\" width=\"180\" alt=\"3º Agora é só reangedar\"><h5>3º Agora é só reagendar</h5><p>Após efetuada, reagende e continue a manter sua residência livre desta ameaça.</p></div></div></div>");
$templateCache.put("app/features/charts/atrasadas/chart.html","<div class=\"card-panel white\"><table id=\"table-top-atrasadas\" class=\"responsive-table bordered\"><thead><tr><th data-field=\"id\">Top 5 prevenções atrasadas</th></tr></thead><tbody ng-if=\"!loader\"><tr ng-repeat=\"(key, prevencao) in prevencoes | orderBy:\'-atrasada\'\"><td><span class=\"index\" ng-bind=\"key + 1\"></span> {{prevencao.descricao}}</td><td><div class=\"center-align\">% {{prevencao.atrasada}}</div><div class=\"progress center-align\"><div class=\"determinate\" style=\"width: {{prevencao.atrasada}}%\"></div></div></td></tr></tbody></table><div ng-if=\"loader\" class=\"row\" id=\"indiceAtrasadasLoader\"><div class=\"col s6 offset-s5\"><div class=\"preloader-wrapper big active\"><div class=\"spinner-layer spinner-blue-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div></div></div></div>");
$templateCache.put("app/features/charts/emDia/chart.html","<div class=\"card-panel white\"><table id=\"table-top-em-dia\" class=\"responsive-table bordered\"><thead><tr><th data-field=\"id\">Top 5 prevenções em dia</th></tr></thead><tbody ng-if=\"!loader\"><tr ng-repeat=\"(key, prevencao) in prevencoes | orderBy:\'-emDia\'\"><td><span class=\"index\" ng-bind=\"key + 1\"></span> {{prevencao.descricao}}</td><td><div class=\"center-align\">% {{prevencao.emDia}}</div><div class=\"progress center-align\"><div class=\"determinate\" style=\"width: {{prevencao.emDia}}%\"></div></div></td></tr></tbody></table><div ng-if=\"loader\" class=\"row\" id=\"indiceEmDiaLoader\"><div class=\"col s6 offset-s5\"><div class=\"preloader-wrapper big active\"><div class=\"spinner-layer spinner-blue-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div></div></div></div>");
$templateCache.put("app/features/charts/mensal/chart.html","<h5>Índice mensal</h5><div class=\"row\"><div class=\"col s12 m12\"><div class=\"card-panel white\"><div class=\"row\"><div class=\"input-field col s6 right-align\"><select id=\"menuFocosMensal\" ng-options=\"foco.codigo as foco.nome for foco in attrs.focos track by foco.codigo\" ng-model=\"attrs.fields.focoId\" ng-change=\"methods.showMensalChart()\"></select><label for=\"menuFocosMensal\">Focos</label></div><div class=\"input-field col s6 left-align\"><input id=\"localidadeFilter\" type=\"text\" ng-autocomplete=\"\" options=\"options\" class=\"validate\" ng-model=\"localidade\"></div></div><div class=\"row\"><div ng-if=\"!loader\" class=\"col s12 m12\"><div google-chart=\"Bar\" google-package=\"charts\" ng-model=\"dataModel\"></div></div></div><div ng-if=\"loader\" class=\"row\" id=\"indiceMensalLoader\"><div class=\"col s6 offset-s5\"><div class=\"preloader-wrapper big active\"><div class=\"spinner-layer spinner-blue-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div></div></div></div></div></div>");
$templateCache.put("app/features/charts/navbar/navbar.html","<div class=\"navbar\"><div class=\"blue darken-4\"><div class=\"row\"><div class=\"input-field col s1 left-align\"><div class=\"color-white filtro-style\">Filtros</div></div><div class=\"input-field col offset-s2 s6 left-align\"><input id=\"localidadeFilter\" type=\"text\" ng-autocomplete=\"\" options=\"options\" class=\"validate color-white\" ng-model=\"localidade\"></div></div></div></div>");
$templateCache.put("app/features/charts/regional/chart.html","<h5>Índice regional</h5><div class=\"row\"><div class=\"col s12 m12\"><div class=\"card-panel white\"><div class=\"row\"><div class=\"col s12\"><div class=\"horizontal_link_menu right-align\"><p ng-bind=\"attrs.teste\"></p><span class=\"horizontal_link_menu_first\"><a href=\"\" ng-click=\"methods.showRegiaoChart()\" class=\"disabledAnchor\">Região</a></span> <span class=\"horizontal_link_menu_item\"><a href=\"\" ng-click=\"methods.showCityChart()\">Cidade</a></span></div></div></div><div class=\"row\"><div ng-if=\"loader\" class=\"col s8 offset-s5\"><div id=\"loader\"><div class=\"preloader-wrapper big active\"><div class=\"spinner-layer spinner-blue-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div></div></div><div ng-if=\"!loader\" class=\"col s12 m8\"><div google-chart=\"GeoChart\" google-package=\"visualization\" ng-model=\"dataModel\"></div></div><div ng-if=\"!regionalCtrl.attrs.showLoader\" class=\"col s12 m4 right\"><table id=\"cidadesAfetadasContainer\" class=\"responsive-table bordered\"><thead><tr><th data-field=\"id\" ng-bind=\"percentChartHeader\"></th></tr></thead><tbody><tr ng-repeat=\"(key, data) in localidades | orderBy:\'-emDia\'\"><td><span class=\"index\" ng-bind=\"key + 1\"></span> {{data.chave}}</td><td><div class=\"center-align\">% {{data.emDia}}</div><div class=\"progress center-align\"><div class=\"determinate\" style=\"width: {{data.emDia}}%\"></div></div></td></tr></tbody></table></div></div></div></div></div>");}]);