CREATE TABLE public.vendors (
    id SERIAL PRIMARY KEY,
    name text
);

CREATE UNIQUE INDEX vendors_id_pkey ON public.vendors(id int4_ops);
