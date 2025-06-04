import './NewsItem.css'

const NewsItem = ({id, createdData, newsTitle}) => {
    return (
      <div className="NewsItem">
        <div className="info_section">
            <div className="content">{newsTitle}</div>
        </div>
      </div>
    );
};

export default NewsItem;