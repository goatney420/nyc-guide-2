export interface DrinkItem {
    name: string;
    fav: boolean; 
    alc: boolean;
  }
  
  export const drink: DrinkItem[] = [
    { name: "Mud Spot", fav: true , alc: false}, 
    { name: "Gasolina Alley", fav: true, alc: false }, 
    { name: "Stone Street", fav: false , alc: false}, 
    { name: "Paquita", fav: false, alc: false }, 
    {name: "Do Not Disturb", fav:true, alc: true},
    {name: "Cowgirl", fav:false, alc: true},
    {name: "Employees Only", fav:false, alc: true},
    {name: "Cowgirl", fav:false, alc: true},
    {name: "Dream Baby", fav:false, alc: true},
    {name: "Hudson Hound", fav:false, alc: true},
  ];