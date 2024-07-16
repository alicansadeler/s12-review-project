import { useComments } from "../../services/queries";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const { isPending, error, data } = useComments();

  if (isPending) return <div>loading....</div>;
  if (error)
    return <div className="form-error">{`Hata: ${error.message}`}</div>;
  return (
    <div>
      {data.data.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
    </div>
  );
}
