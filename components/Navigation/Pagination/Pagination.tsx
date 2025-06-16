"use client";

import { Forms } from "@/components/Forms";
import { Icon } from "@/components/Icon";
import { PaginationProps } from "./Pagination.types";
import { usePageChange } from "@/hooks/usePageChange";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = usePageChange(onPageChange);

  const getItems = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  if (totalPages <= 1) return;

  return (
    <div className="flex justify-center items-center sm:gap-2 gap-4 ">
      <Forms.Button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 p-0"
      >
        <Icon.Arrow direction="left" color={"white"} width={16} height={16} />
      </Forms.Button>

      {getItems().map((item, index) => (
        <Forms.Button
          key={index}
          onClick={() =>
            typeof item === "number" ? handlePageChange(item) : null
          }
          color={item === currentPage ? "primary" : "secondary"}
          variant="outlined"
          disabled={typeof item !== "number"}
          className={`w-10 h-10 p-0`}
        >
          {item}
        </Forms.Button>
      ))}

      <Forms.Button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-7 h-7 p-0"
      >
        <Icon.Arrow direction="right" color={"white"} width={16} height={16} />
      </Forms.Button>
    </div>
  );
};
