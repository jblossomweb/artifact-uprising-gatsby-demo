SELECT
  id,
  vendor_id,
  title,
  description,
  price::numeric,
  image_url
FROM
  public.products
WHERE
  id = $1
