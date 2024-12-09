import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const expensiveCalculation = useMemo(() => {
        console.log('Выполнение дорогостоящего вычисления');
        return count * 2;
    }, [count]); // Пересчитывается только при изменении count

    return (
        <div style={{ marginBottom: '50px' }}>
            <div>UseMemo</div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
            <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
            <p>Результат вычисления: {expensiveCalculation}</p>
        </div>
    );
};

export default UseMemo;
