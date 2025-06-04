import NewsList from "../components/NewsList";

import { useContext, useState } from "react";
import { NewsStateContext } from "../App";

const Home = () => {

    const data = useContext(NewsStateContext);

    return (<div>
        <NewsList data={data}/>
    </div>)
}

export default Home;