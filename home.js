angular.module('uniSons')
 .controller('HomeController', function ($scope) {
       $scope.objUniSons =
		[
			{
				'ds_audio' : 'Admirados',
				'audio_dir' : 'audios/admirado.m4a'
			},
			{
				'ds_audio' : 'Cafézinho',
				'audio_dir' : 'audios/cafezinho.m4a'
			},

			{
				'ds_audio' : 'Ele me Ajuda',
				'audio_dir' : 'audios/ele-me-ajuda.m4a'
			},
			{
				'ds_audio' : 'Não bloqueou',
				'audio_dir' : 'audios/nao-bloqueou.m4a'
			}
		];


 });