import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const _page = (await searchParams.get("_page")) || "1";
  const _limit = (await searchParams.get("_limit")) || "12";
  const _sort = await searchParams.get("_sort");
  const _order = await searchParams.get("_order");

  const apiUrl = new URL("https://testing-api.ru-rating.ru/cars");
  console.log(apiUrl);
  apiUrl.searchParams.append("_page", _page);
  apiUrl.searchParams.append("_limit", _limit);
  if (_sort) apiUrl.searchParams.append("_sort", _sort);
  if (_order) apiUrl.searchParams.append("_order", _order);

  try {
    const res = await fetch(apiUrl.toString());

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    const data = await res.json();
    const totalCount = res.headers.get("X-Total-Count") || "0";

    return NextResponse.json({
      data,
      meta: {
        currentPage: parseInt(_page),
        totalPages: Math.ceil(parseInt(totalCount) / parseInt(_limit)),
        totalItems: parseInt(totalCount),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch cars data" },
      { status: 500 }
    );
  }
}
