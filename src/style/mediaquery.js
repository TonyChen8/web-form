import React from "react";
import { useMediaQuery } from "react-responsive";
import matchMedia from "matchmediaquery";
import { reStyle } from "./index";

const desktop = { minWidth: 992 };
const tablet = { minWidth: 768, maxWidth: 991 };
const mobile = { maxWidth: 767 };
const normal = { minWidth: 768 };

export const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery(desktop);
	return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
	const isTablet = useMediaQuery(tablet);
	return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
	const isMobile = useMediaQuery(mobile);
	return isMobile ? children : null;
};
export const Default = ({ children }) => {
	const isNotMobile = useMediaQuery(normal);
	return isNotMobile ? children : null;
};

// export const isBigScreen = useMediaQuery({ query: "(min-device-width: 1224px)" });
// export const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
// export const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 991px)" });
// export const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

// export const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
// export const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

export const MediaQuery = () => {
	let breakPoints = [
		"( min-width: 992px )", //desktop
		"( min-width: 768px ) and ( max-width: 991px )", // tablet
		"( max-width: 767px )" //mobile
	];
	let medisQueries = breakPoints.map(breakPoint => matchMedia(breakPoint));

	React.useEffect(() => {
		medisQueries.forEach(mediaquery => mediaquery.addListener(reStyle));
		return () => {
			medisQueries.forEach(mediaquery => mediaquery.removeListener());
		};
	});

	return null;
};
