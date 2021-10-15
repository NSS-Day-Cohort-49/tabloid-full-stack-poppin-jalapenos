import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../modules/categoryManager";
import { Category } from "./Category.js"

export const CategoryList = () => {
    const [categories, setCategories ] = useState([]);

    const getCategories = () => {
        getAllCategories()
        .then(cats => setCategories(cats));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <section className="categories">
                {categories.map(cat => {
                    return <Category category={cat} id={cat.id} />
                })}
            </section>
        </>
    )
}