const getTotal = require("./Services/services/getTotal");

const getAllRecipe = (req, res) => { 
    const title = req.params.title;//preunta si hay un query por title
    const recipesTotal = await getTotal();
    if (title) { 
        const recipeTitle = recipeTitle.filter((el) => {
            el.title.toLowerCase().includes(title.toLowerCase());
        });
        recipeTitle.lenght ?//si hay una receta con ese titulo
            res.status(200).send(recipeTitle) :
            res.sattus(404).send("No hay recetas con ese titulo");
}else{
    res.status(200).send(recipesTotal);
}
}