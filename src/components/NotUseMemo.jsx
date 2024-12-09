import React, { useState } from 'react';

const NotUseMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const expensiveCalculation = () => {
        console.log('Выполнение дорогостоящего вычисления');
        return count * 2;
    };

    return (
        <div>
            <div>NotUseMemo</div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
            <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
            <p>Результат вычисления: {expensiveCalculation()}</p>
        </div>
    );
};

export default NotUseMemo;
