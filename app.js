(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService); //services are guarnteed to be a singleton

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var listBuy = this;

  listBuy.items = ShoppingListCheckOffService.getBuyItems();

  listBuy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex)
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var listBought = this;

  listBought.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService(){
  var service = this;

  var buyItems = [
    {name: "cookies", quantity: 5},
    {name: "apples", quantity: 1},
    {name: "pears", quantity: 2}, 
    {name: "berries", quantity: 3},
    {name: "juice", quantity: 4}
  ]; //items to buy, pre-populated list of 5 objects
  var boughtItems = []; //items bought



  service.buyItem = function(itemIndex){
    boughtItems.push(buyItems[itemIndex]); //put bought item on bought list
    buyItems.splice(itemIndex,1); //remove item from buy list, removes 1 item starting at index provided
  };

  service.getBuyItems = function(){
    return buyItems;
  };

  service.getBoughtItems = function(){
    console.log("in service get bought items");
    return boughtItems;
  };

}

})();