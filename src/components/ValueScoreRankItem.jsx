import './ValueScoreRankItem.css'

const ValueScoreRankItem = ({seq, stock_name, stock_code, per, pcr, psr, dy}) => {
    return (
      <tr key={seq}>
        <td>{stock_name}</td>
        <td>{stock_code}</td>
        <td>{per}</td>
        <td>{pcr}</td>
        <td>{psr}</td>
        <td>{(dy*100).toFixed(2)}</td>
      </tr>
    );
};

export default ValueScoreRankItem;