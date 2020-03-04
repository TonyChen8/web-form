import React from "react";
import { Text } from "react-native";

import Base from "../Base";

export default class SFPro extends Base {
	render() {
		return (
			<Text
				{...this.props}
				style={[
					{ fontFamily: "karla", color: colors.ftDark },
					styles().ftSize(20),
					this.props.style
				]}
			/>
		);
	}
}
