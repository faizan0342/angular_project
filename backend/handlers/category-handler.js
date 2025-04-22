const Categorys = require("../db/category")

async function AddtoCategory(category){

    const categorys = new Categorys({
        name : category.name
    })

    await categorys.save();

    return categorys.toObject()

    
}

async function getCategory(category){

    let categories = await Categorys.find();
    
    return categories.map((c) => c.toObject())

    // const categorys = new Categorys({
    //     name : category.name
    // })

    // await categorys.save();

    // return categorys.toObject()

    
}


async function getCategoryById(id){

    let categories = await Categorys.findById(id);
    
    return categories.toObject()

    // const categorys = new Categorys({
    //     name : category.name
    // })

    // await categorys.save();

    // return categorys.toObject()

}


async function updateCategory(category , id){

    await Categorys.findByIdAndUpdate({_id : id} , category)
   
    return;
}

async function deleteCategory(id){

    await Categorys.deleteOne({ _id: id })
   
    return;
}

module.exports ={AddtoCategory , updateCategory , deleteCategory , getCategory , getCategoryById}