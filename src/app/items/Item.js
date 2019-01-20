import React from "react";

export const Item = ({item: {title, description}}) => (
    <div>
        <p><b>{title}</b> {description}</p>
    </div>
);
