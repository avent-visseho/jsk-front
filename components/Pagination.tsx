import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface PaginationProps {
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  total,
  onPageChange,
}) => {
  // Générer les numéros de page
  const totalPages = Math.ceil(total / 10);

  // Générer les numéros de page pour la pagination
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  return (
    <div className="row mt-50">
      <div className="col-12">
        <div className="pagination-area mb-30 wow fadeInUp animated">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-start">
              {/* Bouton Précédent */}
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <AiOutlineArrowLeft />
                </button>
              </li>

              {/* Numéros de page */}
              {pages.slice(currentPage - 1, currentPage + 4).map((page) => (
                <li
                  key={page}
                  className={`page-item ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => onPageChange(page)}
                  >
                    {page < 10 ? `0${page}` : page}
                  </button>
                </li>
              ))}

              {/* Bouton Suivant */}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <AiOutlineArrowRight />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
