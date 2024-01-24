import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { assetsBaseUrl } from "../data";
import {
	StarSvg,
	YellowStarSvg,
	BlackStarSvg,
	ReviewStarSvg,
	Logo,
	MinusIcon,
	PlusIcon,
	WhiteCart,
	GrayCart,
	TrashIcon,
} from "./Svgs.jsx";

function App() {
	const [quantity, setQuantity] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [isCartVisible, setIsCartVisible] = useState(false);
	const [activeThumbnail, setActiveThumbnail] = useState(0);
	const [isWriteReviewMode, setIsWriteReviewMode] = useState(false);
	const [rating, setRating] = useState(0);

	const thumbnailImages = [
		`${assetsBaseUrl}image-product-1-thumbnail.jpg`,
		`${assetsBaseUrl}image-product-2-thumbnail.jpg`,
		`${assetsBaseUrl}image-product-3-thumbnail.jpg`,
		`${assetsBaseUrl}image-product-4-thumbnail.jpg`,
	];

	const mainImage = `${assetsBaseUrl}image-product-${activeThumbnail + 1}.jpg`;

	const reviewSchema = Yup.object().shape({
		rating: Yup.number()
			.required("Please select a star rating")
			.test("Invalid star rating", (value) => value >= 1 && value <= 5),
		headline: Yup.string()
			.required("Please enter your headline")
			.min(4, "Headline must be at least 4 characters"),
		description: Yup.string()
			.required("Please enter your written review")
			.min(15, "Written review must be at least 15 characters"),
	});

	const formik = useFormik({
		initialValues: {
			rating: 0,
			headline: "",
			description: "",
		},
		validationSchema: reviewSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (values) => {
			console.log("Form submitted with values:", values);
		},
	});

	const handleStarClick = (rating) => {
		formik.setFieldValue("rating", rating);
		setRating(rating);
	};

	const handleThumbnailClick = (index) => {
		setActiveThumbnail(index);
	};

	const ProductOne = {
		productName: "Fall Limited Edition Sneakers",
		price: 125.0,
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const addToCart = () => {
		if (quantity > 0) {
			const existingProductIndex = cartItems.findIndex(
				(item) => item.productName === ProductOne.productName
			);

			if (existingProductIndex !== -1) {
				const updatedCartItems = [...cartItems];
				updatedCartItems[existingProductIndex].quantity += quantity;
				setCartItems(updatedCartItems);
			} else {
				const updatedProduct = {
					...ProductOne,
					quantity: quantity,
				};

				setCartItems([...cartItems, updatedProduct]);
			}

			setQuantity(0);
		}
	};

	const toggleCartVisibility = () => {
		setIsCartVisible(!isCartVisible);
	};

	const handleDeleteCartItem = (index) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems.splice(index, 1);
		setCartItems(updatedCartItems);
	};

	const Cart = () => (
		<div className="products-cart">
			<div className="products-cart-title">
				<h3>Cart</h3>
			</div>
			<div className="products-list">
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					cartItems.map((item, index) => (
						<CartItem
							key={index}
							productName={item.productName}
							price={item.price}
							quantity={item.quantity}
							onDelete={() => handleDeleteCartItem(index)}
						/>
					))
				)}
				{cartItems.length > 0 && CheckoutButton}
			</div>
		</div>
	);

	const CartItem = ({ productName, price, quantity, onDelete }) => (
		<div className="full-product">
			<img
				src={`${assetsBaseUrl}image-product-1-thumbnail.jpg`}
				alt={productName}
			/>
			<div className="full-product-desc">
				<p className="full-product-name">{productName}</p>
				<p className="total-price">
					${price.toFixed(2)} x {quantity}{" "}
					<b>${(price * quantity).toFixed(2)}</b>
				</p>
			</div>
			<button className="trash-button" onClick={onDelete}>
				{TrashIcon}
			</button>
		</div>
	);

	const CheckoutButton = <button className="checkout">Checkout</button>;

	const toggleWriteReviewMode = () => {
		setIsWriteReviewMode(!isWriteReviewMode);
	};

	const handleCancelReview = () => {
		setIsWriteReviewMode(false);
	};

	return (
		<>
			<div className="container">
				<header>
					<div className="navbar">
						{Logo}
						<div className="pages">
							<a href="#">Collections</a>
							<a href="#">Men</a>
							<a href="#">Women</a>
							<a href="#">About</a>
							<a href="#">Contact</a>
						</div>
					</div>
					<div className="info">
						<button>
							<GrayCart onGrayCartClick={toggleCartVisibility} />
							<span className="product-quantity-span">
								{cartItems
									.map((item) => item.quantity)
									.reduce((total, quantity) => total + quantity, 0)}
							</span>
						</button>
						<img src="src/assets/nakoshi.jpg" className="profile-pic" />
					</div>
				</header>
				{isCartVisible && <Cart />}
				<hr></hr>
				<div className="product-area">
					<div className="images">
						<div className="main-image">
							<img src={mainImage} alt={`Product ${activeThumbnail + 1}`} />
						</div>
						<div className="small-images">
							{thumbnailImages.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`Thumbnail ${index + 1}`}
									className={
										index === activeThumbnail ? "active-thumbnail" : ""
									}
									onClick={() => handleThumbnailClick(index)}
								/>
							))}
						</div>
					</div>
					<div className="description">
						<h3 className="company-name">Sneaker Company</h3>
						<h2 className="product-name">Fall Limited Sneakers</h2>
						<div className="review-box">
							{YellowStarSvg}
							{YellowStarSvg}
							{YellowStarSvg}
							{YellowStarSvg}
							{BlackStarSvg}
							<p>4.2 out of 5</p>
						</div>
						<p className="paragraph">
							These low-profile sneakers are your perfect casual wear companion.
							Featuring a durable rubber outer sole, they’ll withstand
							everything the weather can offer.
						</p>
						<div className="price-box">
							<h3 className="price">$125.00</h3>
							<span>50%</span>
						</div>
						<s>$250.00</s>
						<div className="atc-box">
							<div className="quantity">
								<button onClick={decreaseQuantity}>{MinusIcon}</button>
								<span>{quantity}</span>
								<button onClick={increaseQuantity}>{PlusIcon}</button>
							</div>
							<button className="atc-button" onClick={addToCart}>
								{WhiteCart}
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="review-area">
					{!isWriteReviewMode && (
						<div className="review-header">
							<h2 className="review-title">Customer reviews</h2>
							<button className="write-review" onClick={toggleWriteReviewMode}>
								Write a review
							</button>
						</div>
					)}
					{!isWriteReviewMode && (
						<div className="review-list">
							<div className="person-review-box">
								<img
									src="src/assets/user-placeholder.png"
									className="user-placeholder"></img>
								<div className="review-content">
									<div className="top-line">
										<p className="author">Ryan Welles</p>
										<div className="edit-buttons">
											<button className="delete-review">Delete</button>
											<button className="edit-button">Edit</button>
										</div>
									</div>
									<div className="star-rating">
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
										{StarSvg}
									</div>
									<p className="author-title">Good for its price</p>
									<p className="author-paragraph">
										The quality is good considering the affordable price point.
										They look good with jeans and are quite comfortable for
										daily wear.
									</p>
								</div>
							</div>
							<div className="person-review-box">
								<img
									src="src/assets/user-placeholder.png"
									className="user-placeholder"></img>
								<div className="review-content">
									<div className="top-line">
										<p className="author">Emily Moore</p>
									</div>
									<div className="star-rating">
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
									</div>
									<p className="author-title">Great quality</p>
									<p className="author-paragraph">
										Comfortable for long walks, and they've held up great so
										far. They've quickly become my go-to pair!
									</p>
								</div>
							</div>
							<div className="person-review-box">
								<img
									src="src/assets/user-placeholder.png"
									className="user-placeholder"></img>
								<div className="review-content">
									<div className="top-line">
										<p className="author">Patricia Lebsack</p>
									</div>
									<div className="star-rating">
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
										{YellowStarSvg}
									</div>
									<p className="author-title">Recommended</p>
									<p className="author-paragraph">
										Absolutely love these sneakers! They have a sleek, modern
										design with a comfortable fit right out of the box.
									</p>
								</div>
							</div>
						</div>
					)}
					{isWriteReviewMode && (
						<div className="own-review-area">
							<form onSubmit={formik.handleSubmit} className="review-form">
								<h2 className="own-review-title">Add a review</h2>
								<p>Overall Rating</p>
								<div className="own-rating">
									<ReviewStarSvg
										filled={rating >= 1}
										onClick={() => handleStarClick(1)}
									/>
									<ReviewStarSvg
										filled={rating >= 2}
										onClick={() => handleStarClick(2)}
									/>
									<ReviewStarSvg
										filled={rating >= 3}
										onClick={() => handleStarClick(3)}
									/>
									<ReviewStarSvg
										filled={rating >= 4}
										onClick={() => handleStarClick(4)}
									/>
									<ReviewStarSvg
										filled={rating >= 5}
										onClick={() => handleStarClick(5)}
									/>
								</div>
								{formik.touched.rating && formik.errors.rating ? (
									<span className="error-message">
										Please select a star rating
									</span>
								) : null}
								<p>Headline</p>
								<input
									id="headline"
									type="text"
									name="headline"
									placeholder="What's most important to know?"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.headline}
								/>
								{formik.touched.headline && formik.errors.headline ? (
									<span className="error-message">
										{formik.errors.headline}
									</span>
								) : null}
								<p>Written Review</p>
								<input
									id="description"
									type="text"
									name="description"
									placeholder="What did you like or dislike? What did you use this product for?"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.description}
								/>
								{formik.touched.description && formik.errors.description ? (
									<span className="error-message">
										{formik.errors.description}
									</span>
								) : null}
								<div className="form-buttons">
									<button
										type="button"
										className="cancel-review"
										onClick={handleCancelReview}>
										Cancel
									</button>
									<button type="submit" className="add-review">
										Add
									</button>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
