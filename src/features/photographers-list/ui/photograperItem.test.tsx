import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PhotographerItem } from './photographerItem';
import { expect, vitest } from 'vitest';

describe('course item', () => {
    it('should call delete callback', async () => {
        const onDelete = vitest.fn();
        render(
            <PhotographerItem
                photographer={{ firstName: 'rglerg', lastName: 'gerg', id: 'dfhtj' }}
                onDelete={onDelete}
            />,
        );

        await userEvent.click(screen.getByText('Удалить'));
        expect(onDelete).toHaveBeenCalled();
    });
});
