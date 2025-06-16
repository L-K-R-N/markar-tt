export interface ICar {
  unique_id: number;
  mark_id: string;
  modification_id: string;
  folder_id: string;
  price: number;
  images: {
    image: string[];
  };
  gearbox: string;
  engine_type: string;
  color: string;
  year: number;
  run: number;
}

export interface Meta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface CarsResponse {
  data: { data: ICar[] };
  meta: Meta;
}

export interface CarsPageProps {
  searchParams: {
    page?: string | string[];
    sort?: string | string[];
    order?: string | string[];
  };
}
