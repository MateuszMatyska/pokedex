import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params: object | undefined): void => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = (): void => {
  navigationRef.current?.goBack();
};
