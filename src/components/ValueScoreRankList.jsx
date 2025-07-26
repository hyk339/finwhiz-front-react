import "./ValueScoreRankList.css";
import ValueScoreRankItem from "./ValueScoreRankItem";
import {supabase} from '../utils/supabaseClient'
import { useEffect,useState } from "react";


const ValueScoreRankList = ()=>{
    const [valueScoreRankList, setValueScoreRankList] = useState([])
    

    useEffect(() => {
      
      const fetchData = async () => {
        let { data, error } = await supabase
          .from('value_score_rank')  // 테이블 이름
          .select('*')

        if (error) console.error('에러:', error)
        else setValueScoreRankList(data)
      }
      

      fetchData()
      
    }, [])


    return (
    <div className="ValueScoreRankList">
        <div className="list_wrapper">
            <table className="valueScoreRank-table">
              <tr>
                <th>종목코드</th>
                <th>종목명</th>
                <th>per</th>
                <th>pcr</th>
                <th>pbr</th>
                <th>배당율</th>
              </tr>
              <tbody>
                {valueScoreRankList.map((valueScoreRank)=><ValueScoreRankItem key={valueScoreRank.seq} {...valueScoreRank}/>)}
              </tbody>
            </table>
        </div>
    </div>

    )
};

export default ValueScoreRankList;