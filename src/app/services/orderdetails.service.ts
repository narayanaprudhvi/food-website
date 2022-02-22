import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {
 

  constructor() { }

  foodDetails=[
    {
      id:1,
      foodname:"Panner Grilled Sandwich",
      foodDetails:"pan fried masala panner",
      foodprice:"200",
      foodImg:"https://media.istockphoto.com/photos/reuben-sandwich-picture-id155016053?b=1&k=20&m=155016053&s=170667a&w=0&h=Zug4V2-EBig1a8z57EKz8WCXaWVp65wtsNTtyCTRPKA="
      
    },
    {
      
      id:2,
      foodname:"veggie supreme",
      foodDetails:"green capsicum, mushroom, black olives, topped with cheese, panner",
      foodprice:"150",
      foodImg:"https://media.istockphoto.com/photos/pizza-picture-id94324039?b=1&k=20&m=94324039&s=170667a&w=0&h=NsQpFiR-mory1FEBrtotKkVQb-XFHZo1x5mEaqoMe5k="

    },

    {
    id:3,
    foodname:"Panner burger",
    foodDetails:"pan fried masala panner",
    foodprice:"180",
    foodImg:"https://media.istockphoto.com/photos/sauted-and-simmered-bitter-melon-or-bitter-gourd-with-onion-picture-id1178084414?b=1&k=20&m=1178084414&s=170667a&w=0&h=Fns6ozIEDonBwydKnNSKYlt-b4FTCXfwBDCZRVsf_Io="
    },

    {
      id:4,
      foodname:"veg masala roll",
      foodDetails:"A homely mix of veggies and mashed potatoes",
      foodprice:"150",
      foodImg:"https://media.istockphoto.com/photos/image-of-indian-meal-of-homemade-nan-naan-bread-sliced-with-butter-picture-id1154928317?b=1&k=20&m=1154928317&s=170667a&w=0&h=uBNWkT1Uw6o_EQyU-SmiC9RjniM4e6M8lDnpeP86Mpg="
      },

      {
        id:5,
        foodname:"indulgence brownie",
        foodDetails:"indulge in richly chocolate brownie crafted with love",
        foodprice:"120",
        foodImg:"https://media.istockphoto.com/photos/brownies-picture-id187105441?b=1&k=20&m=187105441&s=170667a&w=0&h=SziVgxGBKCrrwu93PMjrDNwrHfA5Zkm50pZdBZdbtL8="
        },

        {
          id:6,
          foodname:"Oreo cheese cake ice-cream",
          foodDetails:"Oreo ice-cream",
          foodprice:"219",
          foodImg:"https://media.istockphoto.com/photos/piece-of-delicious-vanilla-chocolate-cheesecake-slate-plate-white-picture-id1008939328?b=1&k=20&m=1008939328&s=170667a&w=0&h=RstY4yTXe4Lc5vb1kZl6VYZDfbiMxadTSR5Kk5R_MBQ="
          }
  ]


}
