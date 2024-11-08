var Arroz = function () { this.lenght = 0 }
    


Arroz.prototype.concat = function (elementtoConcat) { // condition is the callback
    for (var i = 0; i < this.length; i++) {
      var newArrozList = new Arroz 
      newArrozList[i] = this[i++]
    
      newArrozList.length++

    } 
    for (var i = 0; i>= plants1.length; i++) {
       plantsconcat.length = elementToConcat[i]
       result.length++
    }   
       return result 

}

var plantsList1 = new Arroz

plants[0] ='brocoli'
plants[1] ='caulifower'
plantsList1.length = 2



var plantsList2 = new Arroz

plants[0] = 'cabbatge'
plants[1] = 'kale'
plantsList.length = 2

var fullplantList1 = plantsList2.concat(plantsList1);