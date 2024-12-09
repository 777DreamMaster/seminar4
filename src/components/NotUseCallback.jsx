import React from 'react';

const Button = React.memo(({ onClick }) => {
        console.log('Кнопка 2 рендерится');
        return <button onClick={onClick}>Нажми меня 2</button>;
    },
    (prevProps, nextProps) => {
        console.log('Сравнение пропсов:', prevProps, nextProps);
        console.log(prevProps.onClick === nextProps.onClick);
        return prevProps.onClick === nextProps.onClick;
    }
);

// const prevProps = { a: 1, b: { c: 2 } };
// const nextProps = { a: 1, b: { c: 2 } };

// Поверхностное сравнение:
// prevProps.a === nextProps.a; // true (значения совпадают)
// prevProps.b === nextProps.b; // false (сравнение ссылок объектов)

const NotUseCallback = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        console.log('Кнопка 2 нажата');
        setCount((prev) => prev + 1);
    };

    return (
        <div style={{ marginBottom: '50px' }}>
            <div>NotUseCallback</div>
            <div>Счётчик: {count}</div>
            <Button onClick={handleClick}/>
        </div>
    );
};

export default NotUseCallback;
