import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props =>
	<GoogleMap
		defaultZoom={14}
		defaultCenter={{ lat: 34.803924, lng: -86.972294 }}
	>
		<Marker
			position={{ lat: 34.803924, lng: -86.972294 }}
		/>
	</GoogleMap>
));

export default Map;
