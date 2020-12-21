import { useRouter } from 'next/router';
import Item from '../components/Post/Item/index';
export default function ProductDetali() {
  const router = useRouter();
  const { post } = router.query;
  return (
    <div className="my-3">
      <Item PostWhereInput={{ url: post }} />
    </div>
  );
}
