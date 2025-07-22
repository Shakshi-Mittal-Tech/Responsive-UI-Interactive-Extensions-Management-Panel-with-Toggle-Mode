import React, { useState } from 'react';
import dataJson from '../data/data.json';

function Extensions() {
    const [extensions, setExtensions] = useState(dataJson);
    const [filter, setFilter] = useState('all');

    const handleToggle = (name) => {
        const updatedExtensions = extensions.map((ext) =>
            ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
        );
        setExtensions(updatedExtensions);
    };

    const filteredExtensions = extensions.filter((ext) => {
        if (filter === 'all') return true;
        if (filter === 'active') return ext.isActive;
        if (filter === 'inactive') return !ext.isActive;
        return true;
    });

    const handleRemove = (name) => {
        const updatedExtensions = extensions.filter((ext) => ext.name !== name);
        setExtensions(updatedExtensions);
    };
    return (
        <div className="py-4 md:pt-12 md:pb-0">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <h1 className="pb-4 text-2xl font-bold dark:text-white text-neutral-900 md:pb-0">Extensions List</h1>
                <div className="flex space-x-3">
                    <button
                        onClick={() => setFilter('all')}
                        className={`btn-custom ${filter === 'all' ? 'active' : ''}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('active')}
                        className={`btn-custom ${filter === 'active' ? 'active' : ''}`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setFilter('inactive')}
                        className={`btn-custom ${filter === 'inactive' ? 'active' : ''}`}
                    >
                        Inactive
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredExtensions.map((extension) => (
                    <div
                        key={extension.id}
                        className="flex flex-col justify-between p-4 text-white border rounded-xl bg-neutral-800 border-neutral-400"
                    >
                        <div className="flex space-x-4">
                            <img src={extension.logo} alt="extension-logo" className="w-12 h-12" />
                            <div className="flex flex-col">
                                <h2 className="font-bold">{extension.name}</h2>
                                <p className="text-neutral-400">{extension.description}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-10">
                            <button 
                            onClick = {() => handleRemove(extension.name)}
                            className="px-3 py-2 border rounded-3xl dark:text-neutral-100 dark:focus:text-neutral-100 focus:text-neutral-900 border-neutral-600 focus:outline dark:focus:outline-red-400 focus:outline-red-700 dark:focus:bg-neutral-600 focus:bg-neutral-400 focus:outline-2 dark:hover:bg-red-400 hover:bg-red-700 dark:hover:text-neutral-900 hover:text-neutral-900">
                                Remove
                            </button>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={extension.isActive}
                                    onChange={() => handleToggle(extension.name)}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-neutral-600 rounded-full dark:peer-checked:bg-red-400 peer-checked:bg-red-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Extensions;
