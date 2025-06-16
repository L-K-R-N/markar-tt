import { CarsResponse } from "./types";

export async function getCarsData(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<CarsResponse> {
  const page = Array.isArray(searchParams.page)
    ? searchParams.page[0] || "1"
    : searchParams.page || "1";

  const sort = Array.isArray(searchParams.sort)
    ? searchParams.sort[0]
    : searchParams.sort;

  const order = Array.isArray(searchParams.order)
    ? searchParams.order[0]
    : searchParams.order;

  const apiUrl = new URL("/api/cars", process.env.API_URL);
  apiUrl.searchParams.append("_page", page);
  apiUrl.searchParams.append("_limit", "12");
  if (sort) apiUrl.searchParams.append("_sort", sort);
  if (order) apiUrl.searchParams.append("_order", order);

  const res = await fetch(apiUrl.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cars data");
  }

  const data = await res.json();
  console.log(data);
  return data;
}
