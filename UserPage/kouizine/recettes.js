// Liste des recettes
const recettes = [
    [
        {
            "nom": "Pâtes à la Carbonara",
            "personnes": 4,
            "temps_preparation": "10 minutes",
            "temps_cuisson": "15 minutes",
            "ingredients": [
                "400g de pâtes (spaghetti de préférence)",
                "150g de guanciale ou de pancetta, coupé en dés",
                "3 œufs",
                "100g de fromage Pecorino Romano râpé",
                "Poivre noir fraîchement moulu"
            ],
            "ustensiles": [
                "Une grande casserole pour cuire les pâtes",
                "Une poêle pour faire revenir la pancetta",
                "Un bol pour mélanger les œufs et le fromage"
            ],
            "instructions": [
                "Faites cuire les pâtes dans de l'eau salée selon les instructions de l'emballage.",
                "Pendant ce temps, faites revenir la pancetta dans une poêle jusqu'à ce qu'elle soit croustillante.",
                "Dans un bol, battez les œufs et mélangez-les avec le fromage Pecorino Romano.",
                "Égouttez les pâtes et ajoutez-les à la poêle avec la pancetta. Mélangez bien.",
                "Retirez la poêle du feu et ajoutez le mélange d'œufs et de fromage. Remuez rapidement pour enrober les pâtes.",
                "Assaisonnez avec du poivre noir fraîchement moulu.",
                "Servez immédiatement et ajoutez du fromage supplémentaire si désiré."
            ]
        },
    
        {
            "nom": "Salade César",
            "personnes": 2,
            "temps_preparation": "15 minutes",
            "temps_cuisson": "0 minutes",
            "ingredients": [
                "1 laitue romaine, lavée et déchirée",
                "1 tasse de croûtons à l'ail",
                "1/2 tasse de parmesan râpé",
                "2 filets de poulet grillés, coupés en tranches",
                "1/4 tasse de sauce César",
                "Poivre noir fraîchement moulu"
            ],
            "ustensiles": [
                "Bol de salade",
                "Poêle ou gril pour le poulet"
            ],
            "instructions": [
                "Disposez la laitue romaine déchirée dans un grand bol de salade.",
                "Ajoutez les croûtons à l'ail, le parmesan râpé et les tranches de poulet grillées.",
                "Versez la sauce César sur la salade et mélangez délicatement pour enrober les ingrédients.",
                "Assaisonnez avec du poivre noir fraîchement moulu selon votre goût.",
                "Servez immédiatement pour une salade fraîche et délicieuse."
            ]
        },
        
            {
                "nom": "Risotto aux Champignons",
                "personnes": 4,
                "temps_preparation": "10 minutes",
                "temps_cuisson": "25 minutes",
                "ingredients": [
                    "1 tasse de riz Arborio",
                    "1/2 tasse de vin blanc sec",
                    "4 tasses de bouillon de poulet chaud",
                    "1 tasse de champignons tranchés",
                    "1/2 tasse de parmesan râpé",
                    "2 cuillères à soupe de beurre",
                    "1 échalote, hachée",
                    "2 gousses d'ail, hachées",
                    "Sel et poivre noir fraîchement moulu"
                ],
                "ustensiles": [
                    "Casserole pour le bouillon",
                    "Poêle pour les champignons",
                    "Casserole pour le risotto"
                ],
                "instructions": [
                    "Dans une casserole, faites chauffer le bouillon de poulet à feu doux.",
                    "Dans une autre casserole, faites fondre 1 cuillère à soupe de beurre à feu moyen. Ajoutez l'échalote et l'ail, et faites cuire jusqu'à ce qu'ils soient tendres.",
                    "Ajoutez le riz Arborio à la casserole et remuez pour le faire dorer légèrement.",
                    "Versez le vin blanc dans la casserole et remuez jusqu'à ce qu'il soit absorbé par le riz.",
                    "Ajoutez une louche de bouillon chaud dans la casserole et remuez jusqu'à ce qu'il soit absorbé. Répétez cette étape jusqu'à ce que le riz soit crémeux et tendre.",
                    "Pendant ce temps, faites fondre 1 cuillère à soupe de beurre dans une poêle et faites sauter les champignons jusqu'à ce qu'ils soient dorés.",
                    "Ajoutez les champignons sautés et le parmesan râpé dans la casserole de risotto. Remuez pour mélanger"
                ]
            },
    
        {
            "nom": "Pizza Margherita",
            "personnes": 3,
            "temps_preparation": "20 minutes",
            "temps_cuisson": "15 minutes",
            "ingredients": [
                "1 pâte à pizza prête à l'emploi",
                "1/2 tasse de sauce tomate",
                "200g de mozzarella fraîche, tranchée",
                "Tomates cerises, coupées en deux",
                "Feuilles de basilic frais",
                "Huile d'olive extra vierge"
            ],
            "ustensiles": [
                "Rouleau à pâtisserie",
                "Plaque à pizza",
                "Four"
            ],
            "instructions": [
                "Préchauffez le four à la température recommandée sur la pâte à pizza.",
                "Abaissez la pâte à pizza sur une plaque à pizza légèrement farinée à l'aide d'un rouleau à pâtisserie.",
                "Étalez une fine couche de sauce tomate sur la pâte.",
                "Répartissez les tranches de mozzarella sur la sauce tomate.",
                "Ajoutez les moitiés de tomates cerises sur la pizza.",
                "Cuisez au four selon les instructions de la pâte à pizza, jusqu'à ce que la croûte soit dorée et le fromage fondu.",
                "Retirez du four, ajoutez des feuilles de basilic frais et arrosez d'huile d'olive.",
                "Découpez et savourez cette délicieuse Pizza Margherita."
            ]
        },
    
        {
            "nom": "Poulet au Citron",
            "personnes": 4,
            "temps_preparation": "10 minutes",
            "temps_cuisson": "25 minutes",
            "ingredients": [
                "4 poitrines de poulet désossées et sans peau",
                "1/4 tasse de farine",
                "2 cuillères à soupe d'huile d'olive",
                "2 gousses d'ail, hachées",
                "1 tasse de bouillon de poulet",
                "1/4 tasse de jus de citron frais",
                "Zeste de citron râpé",
                "2 cuillères à soupe de persil frais, haché",
                "Sel et poivre noir fraîchement moulu"
            ],
            "ustensiles": [
                "Poêle pour le poulet",
                "Casserole pour la sauce",
                "Râpe pour le zeste de citron"
            ],
            "instructions": [
                "Assaisonnez les poitrines de poulet avec du sel et du poivre, puis enrobez-les de farine.",
                "Faites chauffer l'huile d'olive dans une poêle à feu moyen-élevé. Ajoutez les poitrines de poulet et faites-les cuire jusqu'à ce qu'elles soient dorées de chaque côté.",
                "Retirez le poulet de la poêle et réservez-le.",
                "Dans la même poêle, ajoutez l'ail et faites-le revenir jusqu'à ce qu'il soit parfumé.",
                "Ajoutez le bouillon de poulet, le jus de citron et le zeste de citron râpé dans la poêle. Portez à ébullition, puis réduisez le feu et laissez mijoter pendant quelques minutes.",
                "Remettez les poitrines de poulet dans la poêle et laissez mijoter jusqu'à ce qu'elles soient cuites à point.",
                "Saupoudrez de persil frais haché avant de servir."
            ]
        }
    
    ]
];

const recipesContainer = document.getElementById('recipesContainer');

recettes.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';

    recipeDiv.innerHTML = `
        <h2>${recipe.nom}</h2>
        <p><strong>Personnes:</strong> ${recipe.personnes}</p>
        <p><strong>Temps de préparation:</strong> ${recipe.temps_preparation}</p>
        <p><strong>Temps de cuisson:</strong> ${recipe.temps_cuisson}</p>

        <h3>Ingrédients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>

        <h3>Ustensiles:</h3>
        <ul>
            ${recipe.ustensiles.map(ustensile => `<li>${ustensile}</li>`).join('')}
        </ul>

        <h3>Instructions:</h3>
        <ol>
            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ol>
    `;

    recipesContainer.appendChild(recipeDiv);
});