const express= require("express")
const exceljs= require("exceljs")
var fs= require("fs");
const { type } = require("os");
const { json } = require("express");

const app= express();

app.get("/",async(req,res)=>{
    try{
        let workbook= new exceljs.Workbook()
       
        const sheet = workbook.addWorksheet("books")
       // sheet.properties.defaultRowHeight=100
       const rows = sheet.getRows({});
       rows.height = 100.5;   
        sheet.columns=[
            {header:"ID",key:"ID",width:25},
            {header:"Type",key:"Type",width:25},
            {header:"Images",key:"Images",width:40},
            {header:"SKU",key:"SKU",width:35},
            {header:"Name",key:"Name",width:40},
            {header:"Published",key:"Published",width:25},
            {header:"Isfeatured",key:"Isfeatured",width:25},
            {header:"Visibilityincatalogue",key:"Visibilityincatalogue",width:25},
            {header:"Shortdescription",key:"Shortdescription",width:25},
            {header:"Description",key:"Description",width:50,defaultRowHeight:100},
            {header:"Datesalepricestarts",key:"Datesalepricestarts",width:25},
            {header:"Datesalepriceends",key:"Datesalepriceends",width:25},
            {header:"Taxstatus",key:"Taxstatus",width:25},
            {header:"Taxclass",key:"Taxclass",width:25},
            {header:"Instock",key:"Instock",width:25},
            {header:"Stock",key:"Stock",width:25},
            {header:"Lowstockamount",key:"Lowstockamount",width:25},
            {header:"Backordersallowed",key:"Backordersallowed",width:25},
            {header:"Soldindividually",key:"Soldindividually",width:25},
            {header:"Weightinkg",key:"Weightinkg",width:25},
            {header:"Lengthincm",key:"Lengthincm",width:25},
            {header:"Widthincm",key:"Widthincm",width:25},
            {header:"Heightincm",key:"Heightincm",width:25},
            {header:"Allowcustomerreviews",key:"Allowcustomerreviews",width:25},
            {header:"Purchasenote",key:"Purchase note",width:25},
            {header:"Saleprice",key:"Saleprice",width:25},
            {header:"Regularprice",key:"Regularprice",width:25},
            ]
            
            
        let object= JSON.parse(fs.readFileSync('data.json','utf8'))
            
       await object.aquaPeralSheet.map((value,index)=>{
            sheet.addRow({
                ID:value.ID,
                Type:value.Type,
                Images:([...new Set(value.Images)]),
                SKU:value.SKU,
                Name:value.Name,
                Published:value.Published,
                Isfeatured:value.Isfeatured,
                Visibilityincatalogue:value.Visibilityincatalogue,
                Shortdescription:value.Shortdescription.height=100,
                Description:JSON.stringify(value.Description),
                Datesalepricestarts:value.Shortdescription,
                Datesalepriceends:value.Shortdescription,
                Taxstatus:value.Taxstatus,
                Taxclass:value.Taxclass,
                Instock:value.Instock,
                Stock:value.Stock,
                Lowstockamount:value.Lowstockamount,
                Backordersallowed:value.Backordersallowed,
                Soldindividually:value.Soldindividually,
                Weightinkg:value.Weightinkg,
                Lengthincm:value.Lengthincm,
                Widthincm:value.Widthincm,
                Heightincm:value.Heightincm,
                Allowcustomerreviews:value.Allowcustomerreviews,
                Purchasenote:value.Purchasenote,
                Saleprice:value.Saleprice,
                Regularprice:value.Regularprice
            })
        })


        await object.aquaPeralSheet.map((value,index)=>{
            sheet.getRow({Description:JSON.stringify(value.Description)}).height = 100;

        })

        res.setHeader(
            "Content-type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )
        res.setHeader(
            "Content-Disposition", 
            "Attachment;Filename=\"aquaPeralSheet.xls\"");

        workbook.xlsx.write(res)
        
    }catch(err){
        res.json({status:false,msg:err.msg})
        console.log("errrrrr",err);
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})   
