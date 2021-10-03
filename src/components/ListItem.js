import PropTypes from 'prop-types';

function ListItem({ item }) {
	const {url, MainImage, title, currency_code, price, quantity} = item;

	let priceEdited;
	let quantityLevel;

	switch (currency_code) {
		case 'USD':
			priceEdited = `$${price}`;
			break;
		case 'EUR':
			priceEdited = `€${price}`;
			break;
		default:
			priceEdited = `${price} ${currency_code}`
	}

	if (quantity > 20) {
		quantityLevel = 'high'
	} else if (quantity <= 10) {
		quantityLevel = 'low'
	} else {
		quantityLevel = 'medium'
	}

	return (
		<div className="item">
			<div className="item-image">
				<a href={url}>
					<img src={MainImage.url_570xN} alt={title}/>
				</a>
			</div>
			<div className="item-details">
				<p className="item-title">{title.length < 50 ? title : title.slice(0, 50) + "..."}</p>
				<p className="item-price">{priceEdited}</p>
				<p className={`item-quantity level-${quantityLevel}`}>{quantity} left</p>
			</div>
		</div>
	)
}

ListItem.propTypes = {
	item: PropTypes.object.isRequired
}

export default ListItem;