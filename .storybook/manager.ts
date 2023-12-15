import { addons } from '@storybook/manager-api';

import { create } from '@storybook/theming/create';

import logoSrc from './public/logo.svg';

const storybookTheme = create({
    base: 'light',
    brandTitle: 'Фото-агрегатор',
    brandImage: logoSrc,
});

addons.setConfig({
    theme: storybookTheme,
});
