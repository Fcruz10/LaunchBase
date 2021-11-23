module.exports = {
    ingredients: function (validationInputs) {
        
        function filterIngredients(ingredients) {
            return ingredients != ""
        }

        let ingredients = validationInputs.filter(filterIngredients)    

        return ingredients
    },
    preparation: function (validationInputs) {

        function filterPreparation(preparation) {
            return preparation != ""
        }

        let preparation = validationInputs.filter(filterPreparation)    

        return preparation
    }
}