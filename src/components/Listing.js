import PropTypes from 'prop-types';
import ListItem from './ListItem';

function Listing({ items }) {
	const activeItems = items.filter((item) => item.state === "active");

	const itemList = activeItems.map((item) => 
		<ListItem key={item.listing_id} item={item} />
	);

	return (
		<div className="item-list">
			{itemList}
		</div>
	)
}

Listing.defaultProps = {
	items: []
}

Listing.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
}

export default Listing;