import styled from 'styled-components';

import { FC } from 'react';

interface IProps {
	imgPath: string;
	slideWidth: number;
}

export const SliderItem: FC<IProps> = ({ imgPath, slideWidth }) => {
	return (
		<>
			<ItemImg
				width={slideWidth}
				src={imgPath}
				alt={imgPath}
				draggable="false"
			/>
		</>
	);
};

const ItemImg = styled.img<{ width: number }>`
	width: ${(props) => props.width}px;
	height: 394px;
`;
