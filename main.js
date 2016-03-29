var harvester = require("harvester");
var builder   = require("builder");
var guard     = require("guard");

module.exports.loop = function () {
  
  var types = {
      "harvest": harvester,
      "build":   builder,
      "guard":   guard
  };
  
  for(var name in Game.creeps){
      var creep = Game.creeps[name];
      var role  = creep.memory.role;
      
      if(types[role]){
          types[role].logic(creep);
      }else{
          creep.say(role);
      }
  }
  
};

