import React from "react";

//types:
type NewsPropsType = {}

//function component:
const News: React.FC<NewsPropsType> = (props) => {
    return (
        <div>
            News Page's Content
        </div>
    )
}

export {
    News
}