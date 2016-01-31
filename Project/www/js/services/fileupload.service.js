'use strict';
var app = angular.module('app');
app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, callback){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
          if(data.success) {
            callback(data.matches);
          } else {
            alert("Matching failed on server.\n");
          }
        })
        .error(function(){
          alert("Unable to post to server.\n");
        });
    }
}]);
