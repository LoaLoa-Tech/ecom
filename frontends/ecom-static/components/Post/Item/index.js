import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import { SellerContext } from '../../../apollo';
import { Loading } from '../../Loading';
import One from './One';
const Item = ({ option = 1, PostWhereInput }) => {
  const theme = useContext(SellerContext);
  const { data, loading, error } = useQuery(
    gql`
      query($condition: PostWhereInput) {
        allPosts(first: 1, where: $condition) {
          id
          title
          file {
            publicUrl
          }
          description
          body
          hashtags {
            id
            name
            url
          }
          url
          time
          views
        }
      }
    `,
    { variables: { condition: PostWhereInput } }
  );
  // modify
  const posts = data?.allPosts.map((post) => {
    return {
      ...post,
      img: post?.file ? theme.server + post.file.publicUrl : null
    };
  });

  if (!(error || loading)) {
    if (data?.allPosts.length)
      switch (option) {
        case 1:
          return <One post={posts[0]} />;
      }
    else return <pre>No result.</pre>;
  } else return <Loading />;
};
export default Item;
