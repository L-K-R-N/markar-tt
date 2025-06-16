import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const usePageChange = (onPageChange?: (page: number) => void) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === Number(params.get("page"))) return;
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`);
    if (!onPageChange) return;

    onPageChange(page);
  };
};
