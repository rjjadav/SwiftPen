/**
 * Created by rahul j jadav on 3/25/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.test')
    .controller('TestController', TestController);

  TestController.$inject = ['$scope'];


  function TestController($scope){
    $scope.availablePlans = [
      'plan1/product1',
      'plan1/product2',
      'plan1/product3',
      'plan2/p2p1',
      'plan2/p2p2',
      'plan2/p2p3',
      'plan3/p3pr1',
      'plan3/p3pr2',
      'plan3/p3pr3',
    ];
    $scope.showPlans = false;


    $scope.nonSelectedPlans = angular.copy($scope.availablePlans);
    $scope.selectedPlans = [];

    $scope.selectPlanProduct = function (planProductAssociation) {
      $scope.showPlans = true;
      if(!planProductAssociation) return;

      planProductAssociation = planProductAssociation.replace(/ /g, '');
      console.log(planProductAssociation);
      $scope.productPlanArr = planProductAssociation.split(',')
      $scope.planArr = [];
      $scope.productArr = [];
      $scope.nonSelectedPlans = angular.copy($scope.availablePlans);
      $scope.selectedPlans = [];
      var uniqueArray = $scope.productPlanArr.filter(function(item, pos) {
        return $scope.productPlanArr.indexOf(item) == pos;
      });
      $scope.planProductAssociation = uniqueArray;
      $scope.productPlanArr = uniqueArray;
      for(var i= 0; i< $scope.productPlanArr.length; i++){
        if($scope.availablePlans.indexOf($scope.productPlanArr[i]) > -1){
          $scope.selectedPlans.push($scope.productPlanArr[i]);
          $scope.nonSelectedPlans.splice($scope.nonSelectedPlans.indexOf($scope.productPlanArr[i]), 1);
        }else{
          $scope.error = "One or more of the Product IDs you entered is invalid.";
          $scope.nonSelectedPlans = angular.copy($scope.availablePlans);
          $scope.selectedPlans = [];
          $scope.showPlans = false;
          break;
        }
        $scope.error = undefined;
      }
    }

    $scope.removeDuplicate = function(){
      $scope.productPlanArr = $scope.planProductAssociation.split(',')
      var uniqueArray = $scope.productPlanArr.filter(function(item, pos) {
        return $scope.productPlanArr.indexOf(item) == pos;
      });
      $scope.planProductAssociation = uniqueArray.join().toString();
    }

    $scope.moveToSelected = function(nonSelected,index){
      $scope.selectedPlans.push(nonSelected);
      $scope.nonSelectedPlans.splice(index,1);
      // $scope.planProductAssociation = $scope.selectedPlans.join().toString();
    }

    $scope.moveToNonSelected = function(selected, index){
      $scope.nonSelectedPlans.push(selected);
      $scope.selectedPlans.splice(index,1);
      // $scope.planProductAssociation = $scope.selectedPlans.join().toString();
    }

    $scope.hidePlans = function(){
      $scope.showPlans = false;
      $scope.planProductAssociation = $scope.selectedPlans.join().toString();
      document.getElementById('planProduct').focus();
    }

  }
})();
