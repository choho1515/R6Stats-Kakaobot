"use strict";

module.exports = {
playerStats: function(username, platform) {
  return {
  method: "get", 
  url: "/stats/" + encodeURIComponent(username) + "/" + platform + "/generic"
  }
},
operatorStats: function(username, platform) {
  return {
  method: "get", 
  url: "/stats/" + encodeURIComponent(username) + "/" + platform + "/operators"
  }
},
seasonalStats: function(username, platform) {
  return {
  method: "get", 
  url: "/stats/" + encodeURIComponent(username) + "/" + platform + "/seasonal"
  }
},
weaponStats: function(username, platform) {
  return {
  method: "get",
  url: "/stats/" + encodeURIComponent(username) + "/" + platform + "/weapons"
  }
},
weaponCategoryStats: function(username, platform) {
  return {
  method: 'get', 
  url: "/stats/" + encodeURIComponent(username) + "/" + platform + "/weapon-categories"
  }
}
}
