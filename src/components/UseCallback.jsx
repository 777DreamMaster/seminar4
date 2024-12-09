import React from 'react';

const Button = React.memo(({ onClick }) => {
        console.log('Кнопка 1 рендерится');
        return <button onClick={onClick}>Нажми меня 1</button>;
    },
    (prevProps, nextProps) => {
        console.log('Сравнение пропсов:', prevProps, nextProps);
        console.log(prevProps.onClick === nextProps.onClick);
        return prevProps.onClick === nextProps.onClick;
    }
);

const UseCallback = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        console.log('Кнопка 1 нажата');
        setCount((prev) => prev + 1);
    }, []); // Функция сохраняется в памяти, пока зависимости не изменяются

    return (
        <div style={{ marginBottom: '50px' }}>
            <div>UseCallback</div>
            <div>Счётчик: {count}</div>
            <Button onClick={handleClick}/>
        </div>
    );
};

export default UseCallback;
