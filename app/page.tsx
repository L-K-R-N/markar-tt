import { Suspense } from "react";
import { CarsPageProps } from "@/lib/types";
import { getCarsData } from "@/lib/api";
import { Navigation } from "@/components/Navigation";
import { Forms } from "@/components/Forms";
import { Typography } from "@/components/Typography";
import { CarList } from "@/components/CarList";

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const { page, sort, order } = await searchParams;
  const { data, meta } = await getCarsData({ page, sort, order });

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="mb-8">
        <Forms.SortSelect
          currentSort={sort as string}
          currentOrder={order as string}
        />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center">
            <Typography.Text
              variant="subtitle"
              className="text-center"
              text="Загрузка автомобилей..."
            />
          </div>
        }
      >
        <CarList cars={data.data} />
      </Suspense>

      <div className="mt-12">
        <Navigation.Pagination
          currentPage={meta.currentPage}
          totalPages={meta.totalPages}
        />
      </div>
    </div>
  );
}
