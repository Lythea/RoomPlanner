interface FurnitureItem {
  name: string;
  picture: string;
  width: number;
  height: number;
  category: string;
}export const furnitureData: Record<string, FurnitureItem[]> = {
  dmci: [
    { name: "Sofas", picture: "/RoomPlanner/Living Room/1132423705.png", width: 228.6, height: 99.06, category: "Living Room"},
    { name: "Loveseats", picture: "/RoomPlanner/Living Room/1243345615.png", width: 167.64, height: 96.52, category: "Living Room" },
    { name: "Reclining Sofas", picture: "/RoomPlanner/Living Room/1174906435.png", width: 241.3, height: 101.6, category: "Living Room" },
    { name: "Rocker Recliner", picture: "/RoomPlanner/Living Room/1745177693.png", width: 99.06, height: 99.06, category: "Living Room"},
    { name: "Wing Chairs", picture: "/RoomPlanner/Living Room/2124960037.png", width: 81.28, height: 88.9, category: "Living Room"},
    
    { name: "Bunk Beds", picture: "/RoomPlanner/Bedroom/9486650.png", width: 193.04, height: 142.24, category: "Bedroom"},
    { name: "Nightstands", picture: "/RoomPlanner/Bedroom/215817956.png", width: 66.04, height: 45.72, category: "Bedroom" },
    { name: "Panel Beds", picture: "/RoomPlanner/Bedroom/771289725.png", width: 160.02, height: 210.82, category: "Bedroom" },
    { name: "Poster Beds", picture: "/RoomPlanner/Bedroom/1980902233.png", width: 182.88, height: 218.44, category: "Bedroom", },
    { name: "Sleigh Beds", picture: "/RoomPlanner/Bedroom/1337412148.png", width: 170.18, height: 228.6, category: "Bedroom"},
  
    { name: "Dining Arm Chairs", picture: "/RoomPlanner/Dining Room/1595380367.png", width: 63.5, height: 60.96, category: "Dining Room" },
    { name: "Dining Side Chairs", picture: "/RoomPlanner/Dining Room/396017649.png", width: 50.8, height: 55.8, category: "Dining Room" },
    { name: "Dining Tables", picture: "/RoomPlanner/Dining Room/1781466465.png", width: 134.62, height: 147.32, category: "Dining Room" },
    { name: "Pub Tables", picture: "/RoomPlanner/Dining Room/2126708219.png", width: 114.3, height: 119.38, category: "Dining Room" },
    { name: "Servers", picture: "/RoomPlanner/Dining Room/202785245.png", width: 307.34, height: 50.8, category: "Dining Room"},

    { name: "Closed Bookcases", picture: "/RoomPlanner/Home Office/1202722276.png", width: 101.6, height: 40.64, category: "Home Office"},
    { name: "Desk Hutch Sets", picture: "/RoomPlanner/Home Office/116396946.png", width: 139.7, height: 63.5, category: "Home Office" },
    { name: "Open Bookcases", picture: "/RoomPlanner/Home Office/362099337.png", width: 86.36, height: 35.56, category: "Home Office" },
    { name: "Single Pedestal Desks", picture: "/RoomPlanner/Home Office/530986763.png", width: 124.46, height: 55.88, category: "Home Office" },
    { name: "Table Desks", picture: "/RoomPlanner/Home Office/847214268.png", width: 127, height: 66.04, category: "Home Office" },

    { name: "Rugs", picture: "/RoomPlanner/Miscellaneous/263639812.png", width: 228.6, height: 154.94, category: "Miscellaneous" },
    { name: "Door Opens Left", picture: "/RoomPlanner/Structural/2062599889.png", width: 91.44, height: 70, category: "Structural" },
    { name: "Door Opens Right", picture: "/RoomPlanner/Structural/366401021.png", width: 91.44, height: 70, category: "Structural" },
    { name: "French Doors", picture: "/RoomPlanner/Structural/1861061313.png", width: 203.2, height: 91.44, category: "Structural" },
    { name: "Fireplace", picture: "/RoomPlanner/Structural/23175773.png", width: 132.08, height: 22.86, category: "Structural" },

    { name: "Sliding Doors", picture: "/RoomPlanner/Structural/652179417.png", width: 203.2, height: 12.7, category: "Structural"},
    { name: "Window", picture: "/RoomPlanner/Structural/1210572537.png", width: 139.7, height: 7.62, category: "Structural" },
    { name: "Toilets", picture: "/RoomPlanner/Bathroom/596380351.png", width: 30.5, height: 73.5, category: "Bathroom" },
    { name: "Pedestal Sinks", picture: "/RoomPlanner/Bathroom/178413739.png", width: 55.8, height: 87, category: "Bathroom" },
    { name: "Bathtubs", picture: "/RoomPlanner/Bathroom/1375049375.png", width: 170, height: 75, category: "Bathroom" },

    { name: "Ovens", picture: "/RoomPlanner/Kitchen/768782455.png", width: 91.4, height: 95.3, category: "Kitchen" },
    { name: "Sinks", picture: "/RoomPlanner/Kitchen/674100858.png", width: 106.3, height: 50.8, category: "Kitchen"},
    { name: "Refrigerators", picture: "/RoomPlanner/Kitchen/540764304.png", width: 60.96, height: 152.4, category: "Kitchen" },
    { name: "Partitions", picture: "/RoomPlanner/Structural/141703244.png", width: 100, height: 7.62, category: "Structural" },
    { name: "Queen Beds", picture: "/RoomPlanner/Bedroom/254019203.jpg", width: 152, height: 190, category: "Bedroom"  },
    { name: "King Beds", picture: "/RoomPlanner/Bedroom/633048086.jpg", width: 182, height: 198, category: "Bedroom" },
    { name: "Double Beds", picture: "/RoomPlanner/Bedroom/122449278.jpg", width: 120, height: 190, category: "Bedroom" },
    { name: "Single Beds", picture: "/RoomPlanner/Bedroom/840872244.jpg", width: 91, height: 190, category: "Bedroom" },
    { name: "Twin Beds", picture: "/RoomPlanner/Bedroom/428510373.jpg", width: 96.52, height: 190, category: "Bedroom" }

],
  alveo: [
    { name: "Modern Chair", picture: "modern-chair.png", width: 100, height: 100, category: "Office"}
  ],

};
