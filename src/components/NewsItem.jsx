import './NewsItem.css'

const NewsItem = ({seq, title}) => {
    return (
      <div className="NewsItem">
        <div className="info_section">
            <div className="content">{title}</div>
        </div>
      </div>
    );
};

export default NewsItem;