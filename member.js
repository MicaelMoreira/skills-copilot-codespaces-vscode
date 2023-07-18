function skillMember() {
  return {
    restrict: 'E',
    scope: {
      member: '=',
      skill: '='
    },
    templateUrl: 'skill-member.html',
    controller: function($scope) {
      $scope.getSkillLevel = function() {
        return $scope.member.skills[$scope.skill];
      };
    }
  };
}