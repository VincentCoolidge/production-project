/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

describe('classNames', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
