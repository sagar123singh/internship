
    // usedId: { type: mongoose.Schema.Types.ObjectId, 
    // },
    // doYouownOrLeaseProperty:{type:String,default:"",trim:true},
    // unitNumber:{type:Number,default:""},
    // floorLevel:{type:Number,default:""},
    // streetaddress:{type:String,default:""},
    // city:{type:String,default:"",trim:true,},
    // postcode:{type:Number,default:""},
    // PropertyType:{type:String,default:""},
    // bedrooms:{type:Number,default:"1"},
    // bathrooms:{type:Number,default:"1"},
    // parkingSpace:{type:Number,default:"0"},
    // areaSquareMTRs:{type:Number,default:"0"},
    // propertyDataDescription:{type:String,default:""},
    // parkingAvailability:{type:String,default:""},
    // dogAccept:{type:Boolean,default:false},
    // catAccept:{type:Boolean,default:true},
    // onsitePropertyManagement:{type:Boolean,default:true},
    // floorPlan:{type:Array,default:["",""]},
    // unitAlreadyFurnished:{type:Boolean,default:true},
    // bed1Size:{type:String,default:""},
    // bed2Size:{type:String,default:""},
    // accomodationOffer:{type:String,default:""},
    //     kingRoomA:[{photoUpload:{type:String,required:true,default:""},
    //     weeklyRentIn$:{type:Number,default:0},
    //     AvailableFrom:{type:String,default:new Date()}
    //     }],
    //     queenRoomB:[{photoUpload:{type:String,required:true,default:""},
    //     weeklyRentIn$:{type:Number, default:0},
    //     AvailableFrom:{type:String,default:new Date()}
    //     }]
    const mongoose= require("mongoose")
    const propertySchema= new mongoose.Schema({
        
    propertyId: { type: mongoose.Schema.Types.ObjectId },
    thisProperty: {type:String,default:""},
    unitNumber: {type:String,default:""},
    floorLevel: {type:String,default:""},
    bedrooms: {type:String,default:""},
    bathrooms: {type:String,default:""},
    parkingSpace: {type:String,default:""},
    baseMonthlyRent: {type:String,default:""},
    earliestMoveIn: {type:String,default:""},
    utilityRates: {type:String,default:""}, //confirm from sir
    floorPlan: { type: Array, default: ["",""] },
    ADAComplaint: {type:Boolean,default:true},
    area:  {type:String,default:""},
    bedOneSize:  {type:String,default:""},
    bedTwoSize:  {type:String,default:""},
    accommodationOffers: {type:String,default:""},  ///check
    rooms:{type:Array,default:["",""]},
    unitFeature:{type:Array,default:["",""]},
    acessInstructionUnit:{type:Object,default:{}},
    interiorPackage: {type:String,default:""},
    daybedFurnishingRequirement:{type:Boolean,default:false}


},{versionKey: false}, {timestamps:true})
module.exports=mongoose.model("Property",propertySchema)