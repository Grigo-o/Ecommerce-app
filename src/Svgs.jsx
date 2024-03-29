export const StarSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="23"
		height="23"
		viewBox="0 0 23 23"
		fill="none">
		<path
			d="M11.5 1.91663L14.4612 7.91579L21.0833 8.88371L16.2916 13.5508L17.4225 20.1441L11.5 17.0295L5.57746 20.1441L6.70829 13.5508L1.91663 8.88371L8.53871 7.91579L11.5 1.91663Z"
			stroke="#616161"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const YellowStarSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="#FAD409"
		stroke="#FAD409"
		strokeWidth="1"
		strokeLinecap="round"
		strokeLinejoin="round">
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
	</svg>
);

export const BlackStarSvg = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none">
		<g clipPath="url(#clip0_6_509)">
			<path
				d="M10.2683 2.22748L12.7256 7.20569L18.2207 8.00888L14.2445 11.8817L15.1829 17.353L10.2683 14.7684L5.35374 17.353L6.29212 11.8817L2.31592 8.00888L7.81103 7.20569L10.2683 2.22748Z"
				stroke="#2A2A2A"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_6_509">
				<rect
					width="19.0858"
					height="19.0858"
					fill="white"
					transform="translate(0.725342 0.637024)"
				/>
			</clipPath>
		</defs>
	</svg>
);

export const ReviewStarSvg = ({ filled, onClick }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40"
		height="40"
		viewBox="0 0 40 40"
		fill="none"
		className={`review-star ${filled ? "yellow-star" : ""}`}
		onClick={onClick}>
		<path
			d="M20 3.33325L25.15 13.7666L36.6667 15.4499L28.3334 23.5666L30.3 35.0333L20 29.6166L9.70004 35.0333L11.6667 23.5666L3.33337 15.4499L14.85 13.7666L20 3.33325Z"
			stroke="#616161"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const Logo = (
	<svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
			fill="#1D2026"
			fillRule="nonzero"
		/>
	</svg>
);
export const GrayCart = ({ onGrayCartClick }) => (
	<svg
		width="22"
		height="20"
		className="cart"
		xmlns="http://www.w3.org/2000/svg"
		onClick={onGrayCartClick}>
		<path
			d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
			fill="#69707D"
			fillRule="nonzero"
		/>
	</svg>
);

export const WhiteCart = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="16"
		viewBox="0 0 18 16"
		fill="none"
		className="white-cart">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z"
			fill="white"
		/>
	</svg>
);

export const MinusIcon = (
	<svg
		width="12"
		height="4"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink">
		<defs>
			<path
				d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
				id="a"
			/>
		</defs>
		<use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
	</svg>
);

export const PlusIcon = (
	<svg
		width="12"
		height="12"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink">
		<defs>
			<path
				d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
				id="b"
			/>
		</defs>
		<use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
	</svg>
);

export const TrashIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="16"
		viewBox="0 0 14 16"
		fill="none"
		className="trash-icon">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z"
			fill="#C3CAD9"
		/>
		<mask
			id="mask0_0_632"
			masktype="luminance"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="14"
			height="16">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z"
				fill="white"
			/>
		</mask>
		<g mask="url(#mask0_0_632)"></g>
	</svg>
);

export const MenuIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="15"
		viewBox="0 0 16 15"
		fill="none"
		className="menu-icon">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 0H16V3H0V0ZM0 6H16V9H0V6ZM16 12H0V15H16V12Z"
			fill="#69707D"
		/>
	</svg>
);

export const CloseIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="15"
		viewBox="0 0 14 15"
		fill="none"
		className="close-icon">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.00023 5.37868L2.40404 0.782486L0.282715 2.90381L4.87891 7.5L0.282715 12.0962L2.40404 14.2175L7.00023 9.62132L11.5964 14.2175L13.7177 12.0962L9.12155 7.5L13.7177 2.90381L11.5964 0.782486L7.00023 5.37868Z"
			fill="#69707D"
		/>
	</svg>
);

export const NextIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40"
		height="40"
		viewBox="0 0 40 40"
		fill="none"
		className="next-icon">
		<circle cx="20" cy="20" r="20" fill="white" />
		<path
			d="M17.1428 14.2857L22.8571 20L17.1428 25.7143"
			stroke="#1D2026"
			strokeWidth="3"
		/>
	</svg>
);

export const PreviousIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="40"
		height="40"
		viewBox="0 0 40 40"
		fill="none"
		className="previous-icon">
		<circle cx="20" cy="20" r="20" fill="white" />
		<path
			d="M22.8572 14.2857L17.1429 20L22.8572 25.7143"
			stroke="#1D2026"
			strokeWidth="3"
		/>
	</svg>
);

export default YellowStarSvg;
