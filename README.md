# Ecommerce
## Về Ecommerce

Mục đích

![loaloa.tech](https://loaloa.tech/assets/img/ecommerce.png)

## Ecommerce Admin

This is admin for seller. provide Graphql API.

### Setting

#### Clone Responsitory

```
git clone git@github.com:LoaLoa-Tech/ecom-admin.git
cd ecom-admin
git checkout 4.0.1
npm i
```

#### Run with development

```
npm run dev
```

#### Deployment 

```
npm run build
git add .
git commit -m "build"
git push origin 4.0.1
```
### Using

#### Banner

query

```
query($seller: UserWhereInput) {
  allBanners(where: { seller: $seller }) {
    id
    file {
      publicUrl
    }
  }
}
```

variables

```
{ seller: { id: <seller-id> } }
```

#### Attributes

query

```
 query($seller: UserWhereInput) {
    allAttributes(where: { seller: $seller }) {
      id
      name
      url
    }
  }
```

variables

```
{ seller: { id: <seller-id> } }
```
#### Brands

query

```
  query($seller: UserWhereInput) {
    allBrands(where: { seller: $seller }) {
      id
      name
      url
    }
  }
```

variables

```
{ seller: { id: <seller-id> } }
```
#### Cart

query 

```
export const CREATE_ORDER_ITEMS = gql`
  mutation($data: [OrderItemsCreateInput]) {
    createOrderItems(data: $data) {
      id
    }
  }
`;
```

variables 

```
[
  {
    data: {
      product: { connect: { id: <product-id> } },
      price: <price>,
      quantity: <quantity>,
    },
  },
  ...
]
```

query 

```
export const CREATE_ORDER = gql`
  mutation(
    $items: [OrderItemWhereUniqueInput]
    $customer: CustomerWhereUniqueInput
    $ofSeller: UserWhereUniqueInput
    $total: Int
  ) {
    createOrder(
      data: {
        customer: { connect: $customer }
        items: { connect: $items }
        ofSeller: { connect: $ofSeller }
        total: $total
      }
    ) {
      id
      seller {
        id
      }
      items {
        id
        product {
          image {
            publicUrl
          }
          images {
            file {
              publicUrl
            }
          }
          name
        }
        price
        quantity
        attributes {
          id
          name
        }
      }
    }
  }
`;
```

## Ecommerce Static

This is client website. Using Ecommerce Admin Graphql API. It was build by Ecommerce Client.

#### Clone Responsitory

```
git clone git@github.com:LoaLoa-Tech/ecom-static.git
cd ecom-admin
git checkout master
npm i
```

Move static file to ./<user_email> [example](https://github.com/LoaLoa-Tech/ecom-static/tree/master/yensaodatquang)

```
git add .
git commit -m "upload"
git push origin master
```




## Ecommerce Client

Using Ecommerce Admin Graphql API to build client static website from json file.

#### Clone Responsitory

```
git clone git@github.com:LoaLoa-Tech/ecom-client.git
cd ecom-admin
git checkout master
npm i
```

#### Run with development

Create JSON in ./config/<user_email>__-dev.json__ ([example](https://github.com/LoaLoa-Tech/ecom-client/blob/master/config/yensaodatquang.json))

Required JSON file above in ./config/index.js

```
npm run dev
```

#### Build Static File

Create JSON in ./config/<user_email>.json ([example](https://github.com/LoaLoa-Tech/ecom-client/blob/master/config/yensaodatquang.json))

Required JSON file above in ./config/index.js

```
npm run export
```

Then, the file export in ./out

#### Deployment 

You only deploy by move static file and push to __[Ecommerce Static](#ecommerce-static)__

