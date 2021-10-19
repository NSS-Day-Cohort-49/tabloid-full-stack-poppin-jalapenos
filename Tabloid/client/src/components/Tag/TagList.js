import React, { useState, useEffect } from "react";
import { getAllTags } from "../../modules/tagManager";
import { Tag } from "./Tag.js";
import { Link } from "react-router-dom";

export const TagList = () => {
    const [tags, setTags] = useState([]);

    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    };

    useEffect(() => {
        getTags();
    }, []);

    return (
        <>
            <section className="tags">
                {tags.map((tag) => {
                    return <Tag tag={tag} id={tag.id} />;
                })}
            </section>
        </>
    );
};