import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSort = (onSort?: (value: string) => void) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "default") {
      params.delete("sort");
      params.delete("order");
    } else {
      const [sort, order] = value.split("-");
      params.set("sort", sort);
      params.set("order", order);
    }

    params.delete("page");

    router.replace(`${pathname}?${params.toString()}`);

    if (!onSort) return;
    onSort(value);
  };
};
