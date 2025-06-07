import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RecipesPage.css'  // Импортируем правильный CSS
import SideBar from '../SideBar'

const RecipesPage: React.FC = () => {
	const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
	const navigate = useNavigate();

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
		console.log('Delete recipe:', recipeId);
		// Add delete logic here
	};

	return (
		<div className={`recipes-page-container ${isDarkmode ? 'dark' : 'light'}`}>
			<SideBar />

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
					{/* Existing recipe cards */}
					<div className="recipe-card">
						<div className="recipe-actions">
							<button
								className="action-btn edit-btn"
								onClick={() => handleEditRecipe(1)}
								title="Edit Recipe"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#3c6841">
									<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
								</svg>
							</button>
							<button
								className="action-btn delete-btn"
								onClick={() => handleDeleteRecipe(1)}
								title="Delete Recipe"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#d32f2f">
									<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
								</svg>
							</button>
						</div>
						<h3>Pasta Carbonara</h3>
						<p>A classic Italian pasta dish with eggs, cheese, and pancetta.</p>
					</div>

					<div className="recipe-card">
						<div className="recipe-actions">
							<button
								className="action-btn edit-btn"
								onClick={() => handleEditRecipe(2)}
								title="Edit Recipe"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#3c6841">
									<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
								</svg>
							</button>
							<button
								className="action-btn delete-btn"
								onClick={() => handleDeleteRecipe(2)}
								title="Delete Recipe"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#d32f2f">
									<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
								</svg>
							</button>
						</div>
						<h3>Chicken Tikka Masala</h3>
						<p>Creamy and flavorful Indian curry dish with tender chicken.</p>
					</div>

					<div className="recipe-card">
						<div className="recipe-actions">
							<button
								className="action-btn edit-btn"
								onClick={() => handleEditRecipe(3)}
								title="Edit Recipe"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#3c6841">
									<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
								</svg>
							</button>
							<button
								className="action-btn delete-btn"
								onClick={() => handleDeleteRecipe(3)}
								title="Delete Recipe"
							>
								<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#d32f2f">
									<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
								</svg>
							</button>
						</div>
						<h3>Chocolate Chip Cookies</h3>
						<p>Soft and chewy homemade cookies with chocolate chips.</p>
					</div>

					{/* Empty recipe cards with plus icon */}
					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>

					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>

					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>
					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>
					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>
					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>
					<div className="recipe-card empty-card" onClick={handleAddRecipe}>
						<div className="add-recipe-content">
							<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3c6841">
								<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
							</svg>
							<p>Add New Recipe</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecipesPage