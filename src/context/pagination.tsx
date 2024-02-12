import Link from "next/link";

const Pagination = ({ setCurrentPage, totalPage, currentPage }: any) => {

  let arr = Array.apply(null, Array(totalPage))
    .map((y, i) => { return i; });
  return (
    <div className="pagination__wrap">
      <ul className="list-wrap d-flex flex-wrap justify-content-center">
        {arr.map(item => (
          <li><span onClick={(e) =>(currentPage !== item+1)?setCurrentPage(item + 1):console.log(item+1)} style={{cursor:`${currentPage !== item + 1 ? "pointer" : ''}`}} className={`page-numbers ${currentPage === item + 1 ? "current" : ''}`}>{item + 1}</span></li>
        ))}
        <li>
          <span onClick={() => setCurrentPage(totalPage)} style={{cursor:`${currentPage !== totalPage? "pointer" : ''}`}} className="next page-numbers">
            <i className="fas fa-angle-double-right"></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
