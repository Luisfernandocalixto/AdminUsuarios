import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import clsx from 'clsx';
import { generatePagination } from '../../lib/utils.ts';
import { useSearchParams, useNavigate } from 'react-router-dom';


export default function Pagination({ totalPages }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    navigate(`?${params.toString()}`, { replace: true });
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        onClick={() => createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position = undefined;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={page}
              page={page}
              position={position}
              isActive={currentPage === page}
              onClick={() => createPageURL(page)}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        onClick={() => createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({ page, isActive, position, onClick }) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-amber-600 border-amber-600 text-white": isActive,
      "hover:bg-gray-100 cursor-pointer": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  if (position === "middle") return <div className={className}>{page}</div>;

  return (
    <button type="button" name="indicator" id="indicator" aria-label="indicator" className={className} onClick={onClick} disabled={isActive}>
      {page}
    </button>
  );
}

function PaginationArrow({ direction, isDisabled, onClick }) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border cursor-pointer",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <FaArrowLeft className="w-4" />
    ) : (
      <FaArrowRight className="w-4" />
    );

  return (
    <button type="button" name="indicator" id="indicator" aria-label="indicator" className={className} onClick={onClick} disabled={isDisabled}>
      {icon}
    </button>
  );
}
