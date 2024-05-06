export interface ActivityItem {
    name: string;
    price: boolean; 
  }
  
// below 49 degrees
export const coldActivity: ActivityItem[] = [
  { name: "See a brodway show", price: false }, 
  { name: "Enjoy the subway creatures", price: true }, 
  { name: "Workout at CFUS with me", price: false }, 
  { name: "Shop till you drop", price: false },  
];

// 50 - 69 degrees
export const moderateActivity: ActivityItem[] = [
  { name: "See a brodway show", price: false },
  { name: "Walk around Dumbo at night", price: true }, 
  { name: "Shop till you drop", price: false },  
  { name: "Workout at CFUS with me", price: false },
  { name: "Walk around the Little Island while on shrooms", price: true }, 
  { name: "Thrift in BK", price: false },  
];

// above 70 degrees
export const warmActivity: ActivityItem[] = [
  { name: "Run along WSH", price: true }, 
  { name: "Explore Central Park", price: true }, 
  { name: "CitiBike along WSH", price: false }, 
  { name: "Sit in Washington Square Park and observe NYU dorks", price: true },
];

  
