import React, { useState } from 'react';

const CopyInputValue = () => {
    const [inputValue1, setInputValue1] = useState('1');
    const [inputValue2, setInputValue2] = useState('2');

    const handleCopyClick = (value) => {
        navigator.clipboard.writeText(value).then(() => {
            alert('Value copied successfully!');
        }).catch(() => {
            alert('Failed to copy the value.');
        });
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={() => handleCopyClick(inputValue1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Copy
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={() => handleCopyClick(inputValue2)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Copy
                </button>
            </div>
        </div>
    );
};

export default CopyInputValue;
