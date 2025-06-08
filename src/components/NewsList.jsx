import "./NewsList.css";
import NewsItem from "./NewsItem";
import {supabase} from '../utils/supabaseClient'
import { useEffect,useState } from "react";


const NewsList = ()=>{
    const [news, setNews] = useState([])

    useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from('news')  // 테이블 이름
        .select('*')

      if (error) console.error('에러:', error)
      else setNews(data)
    }

    fetchData()
  }, [])



    return (
    <div className="NewsList">
        <div className="menu_bar">
            <select>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
        </div>
        <div className="list_wrapper">
             {news.map((item)=><NewsItem key={item.seq} {...item}/>)}
        </div>
    </div>

    )
};

export default NewsList;