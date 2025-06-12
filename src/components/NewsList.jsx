import "./NewsList.css";
import NewsItem from "./NewsItem";
import {supabase} from '../utils/supabaseClient'
import { useEffect,useState } from "react";


const NewsList = ()=>{
    const [newsList, setNewsList] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
      
      const fetchData = async () => {
        let { data, error } = await supabase
          .from('news')  // 테이블 이름
          .select('*')

        if (error) console.error('에러:', error)
        else setNewsList(data)
      }
      

      fetchData()
      
    }, [])

    
    
    const onSearchChange = (e)=>{
      setSearch(e.target.value);
    }

    const getFilteredData = ()=>{
      if(search === ""){
        return newsList;
      }
      return newsList.filter((news)=>news.title.includes(search))
    }

    return (
    <div className="NewsList">
        <div className="menu_bar">
            <select>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
        </div>
        <input placeholder="검색어를 입력하세요." value={search} onChange={onSearchChange}/>
        <div className="list_wrapper">
             {getFilteredData().map((news)=><NewsItem key={news.seq} {...news}/>)}
        </div>
    </div>

    )
};

export default NewsList;