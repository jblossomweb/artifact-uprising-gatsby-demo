CREATE TABLE public.products (
    id SERIAL PRIMARY KEY,
    title text,
    description text,
    price money DEFAULT '$0.00'::money,
    vendor_id integer NOT NULL REFERENCES vendors(id) ON DELETE CASCADE ON UPDATE CASCADE,
    image_url text
);

CREATE UNIQUE INDEX products_id_pkey ON public.products(id int4_ops);
