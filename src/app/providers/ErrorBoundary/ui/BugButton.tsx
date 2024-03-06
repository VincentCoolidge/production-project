/* eslint-disable i18next/no-literal-string */
import Button from 'shared/ui/Button/Button';
import { useState, useEffect } from 'react';

// Component Test
const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError((prevState) => !prevState);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};

export default BugButton;
