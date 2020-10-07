import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const maxWidth: number = width;

export const maxHeight: number = height;

export const contentWidth: number = width * 0.9;

export const contentHorizontalMargin: number = width * 0.05;

export const itemWidth: number = width * 0.5;

export const itemHeight: number = height * 0.065;
