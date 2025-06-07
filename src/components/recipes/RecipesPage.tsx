import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RecipesPage.css'
import SideBar from '../SideBar'

interface Recipe {
	id: number;
	title: string;
	description: string;
}

const RecipesPage: React.FC = () => {
	const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
	const [recipeToDelete, setRecipeToDelete] = useState<number | null>(null);
	const navigate = useNavigate();

	// State для рецептов
	const [recipes, setRecipes] = useState<Recipe[]>([
		{
			id: 1,
			title: "Pasta Carbonara",
			description: "A classic Italian pasta dish with eggs, cheese, and pancetta."
		},
		{
			id: 2,
			title: "Chicken Tikka Masala",
			description: "Creamy and flavorful Indian curry dish with tender chicken."
		},
		{
			id: 3,
			title: "Chocolate Chip Cookies",
			description: "Soft and chewy homemade cookies with chocolate chips."
		}
	]);

	const toggleDarkmode = () => {
		setIsDarkMode(!isDarkmode);
	};

	const handleAddRecipe = () => {
		navigate('/add-recipe');
	};

	const handleEditRecipe = (recipeId: number) => {
		console.log('Edit recipe:', recipeId);
		navigate('/add-recipe');
	};

	const handleDeleteRecipe = (recipeId: number) => {
		setRecipeToDelete(recipeId);
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
		if (recipeToDelete) {
			setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeToDelete));
			console.log('Recipe deleted:', recipeToDelete);
		}
		setShowDeleteModal(false);
		setRecipeToDelete(null);
	};

	const cancelDelete = () => {
		setShowDeleteModal(false);
		setRecipeToDelete(null);
	};

	const getRecipeTitle = () => {
		const recipe = recipes.find(r => r.id === recipeToDelete);
		return recipe ? recipe.title : '';
	};

	return (
		<div className={`recipes-page-container ${isDarkmode ? 'dark' : 'light'}`}>
			<SideBar />

			{/* Delete Confirmation Modal */}
			{showDeleteModal && (
				<div className="modal-overlay">
					<div className="delete-modal">
						<div className="modal-header">
							<h3>Delete Recipe</h3>
							<button className="modal-close" onClick={cancelDelete}>
								<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666">
									<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
								</svg>
							</button>
						</div>
						<div className="modal-content">
							<p>Are you sure you want to delete <strong>"{getRecipeTitle()}"</strong>?</p>
							<p className="warning-text">This action cannot be undone.</p>
						</div>
						<div className="modal-actions">
							<button className="cancel-btn" onClick={cancelDelete}>
								Cancel
							</button>
							<button className="delete-confirm-btn" onClick={confirmDelete}>
								Delete Recipe
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Content with margin for sidebar */}
			<div style={{ marginLeft: '240px', padding: '20px' }}>
				{/* Dark/Light mode button */}
				<button
					onClick={toggleDarkmode}
					style={{
						position: 'absolute',
						top: '20px',
						right: '20px',
						background: 'none',
						border: 'none',
						cursor: 'pointer',
						padding: '8px',
						borderRadius: '4px'
					}}
				>
					{isDarkmode ? '☀️' : '🌙'}
				</button>

				<h1 className="recipes-page-header">Your Recipes</h1>

				<div className="recipes-grid">
					{/* Динамически рендерим рецепты */}
					{recipes.map((recipe) => (
						<div key={recipe.id} className="recipe-card">
							<div className="recipe-actions">
								<button
									className="action-btn edit-btn"
									onClick={() => handleEditRecipe(recipe.id)}
									title="Edit Recipe"
								>
									<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#3c6841">
										<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
									</svg>
								</button>
								<button
									className="action-btn delete-btn"
									onClick={() => handleDeleteRecipe(recipe.id)}
									title="Delete Recipe"
								>
									<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#d32f2f">
										<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
									</svg>
								</button>
							</div>
							<h3>{recipe.title}</h3>
							<p>{recipe.description}</p>
						</div>
					))}

					{/* Empty recipe cards with plus icon */}
					{Array.from({ length: Math.max(0, 6 - recipes.length) }, (_, index) => (
						<div key={`empty-${index}`} className="recipe-card empty-card" onClick={handleAddRecipe}>
							<div className="add-recipe-content">
								<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
									<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
								</svg>
								<p>Add New Recipe</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default RecipesPage