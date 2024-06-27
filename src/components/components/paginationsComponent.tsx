"use client"
import {useState} from "react";

export default function PaginationComponent(props: {
    item:number,
    pageSize:number,
    currentPage:number,
    onPageChange:any,
}){
    const [currentPage, setCurrentPage] = useState(1);
    const pagesCount = Math.ceil(props.item / props.pageSize); // 100/10
    function handlePageChange(page:number,status:"next"|"prev"|"none") {
        if(status === "next" && (page+1 <= pagesCount)){
            setCurrentPage(page+1);
            props.onPageChange(page+1);
        } else if(status === "prev" && (page-1 > 0)){
            setCurrentPage(page-1);
            props.onPageChange(page-1);
        } else if(status === "none"){
            setCurrentPage(page);
            props.onPageChange(page);
        }
    }
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    return (
        <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
                <li>
                    <button
                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-primary"
                        aria-label="Previous"
                        onClick={()=>handlePageChange(currentPage,"prev")}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
                {pages.map((page,i) => (
                    <li key={i}>
                        <button
                            className={page === props.currentPage ? "px-3 py-1 text-white transition-colors duration-150 bg-primary border border-r-0 border-primary rounded-md focus:outline-none focus:shadow-outline-primary" :"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary"}
                            onClick={()=>handlePageChange(page,"none")}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-primary"
                        aria-label="Next"
                        onClick={()=>handlePageChange(currentPage,"next")}
                    >
                        <svg
                            className="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    )
}