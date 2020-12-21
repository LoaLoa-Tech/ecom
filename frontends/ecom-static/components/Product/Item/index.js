import { gql, useQuery } from '@apollo/client';
import {useContext} from 'react';
import {SellerContext} from '../../../apollo';
import { Loading } from '../../Loading';
import One from './One';
const Item = ({ option = 1, ProductWhereInput }) => {
  let theme = useContext(SellerContext);
  const { data, loading, error } = useQuery(
    gql`
      query($condition: ProductWhereInput) {
        allProducts(first: 1, where: $condition) {
          id
          url
          image {
            publicUrl
          }
          name
          price
          sale
          images {
            file {
              publicUrl
            }
          }
          brand {
            name
            url
          }
          category {
            id
            name
            url
          }
          description
          file {
            publicUrl
          }
          guide
          altImages
        }
      }
    `,
    { variables: { condition: ProductWhereInput } }
  );
  // modify
  const products = data?.allProducts.map((product) => {
    let imgs = product?.image ? [theme.server + product.image.publicUrl] : [];
    imgs = imgs.concat(product?.altImages?.split(',') || []);
    imgs = imgs.concat(
      product?.images?.map((img) => theme.server + img.file.publicUrl)
    );
    console.log(imgs);
    return {
      ...product,
      guide: theme.server + product?.file?.publicUrl,
      imgs
    };
  });

  if (!(error || loading)) {
    if (data?.allProducts.length)
      switch (option) {
        case 1:
          return <One product={products[0]} />;
      }
    else return <pre>No result.</pre>;
  } else return <Loading />;
};
export default Item;
