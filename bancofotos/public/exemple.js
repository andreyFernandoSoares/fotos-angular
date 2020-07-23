/*
    Exemplo com HTTP
    incorporar $http
    $http.put('v1/fotos/'+ $scope.foto._id, $scope.foto).success(function(){
        $scope.mensagem = 'Foto foi alterada com sucesso!';
    }).error(function(erro){
        console.log(erro);
        $scope.mensagem = 'Não foi possivel alterar a foto!';
    })
              
    $http.post('v1/fotos', $scope.foto).success(function(){
        $scope.foto = {};
        $scope.mensagem = 'Foto cadastrada com sucesso!';
    }).error(function(erro){
        console.log(erro);
        $scope.mensagem = 'Não foi possivel cadastrar a foto!';
    });
*/

/* 
    Outros Exemplos
	incorporar $http
	$http.get('/v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});
	

	$scope.remover = function(foto){
		$http.delete('v1/fotos/'+foto._id).success(function(){
			var idx = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(idx, 1);
			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso!';
		}).error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possivel remover a foto '+ foto.titulo+'!';
		});
    };
*/

/*
    Exemplo com watch

    ddo.scope = {
        focado: '='
    };

    scope.$watch('focado', function(){
        if (scope.focado){
            element[0].focus();
            scope.focado;
        }
    });

    No controller
    $scope.focado = true;

    Propriedade no HTML
    focar-item focado="focado"
*/