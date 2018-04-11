angular.module('uniSons')
 .controller('HomeController', function ($scope) {
       $scope.objUniSons = 	
		[	{
				'ds_audio' : 'Chimotec, Mochitec, tecMochi',
				'audio_dir' : 'audios/unisons1.mp3'	
			},
			{
				'ds_audio' : 'Unimestre, Unimestre!!',
				'audio_dir' : 'audios/unisons2.mp3'	
			}
		];
 });