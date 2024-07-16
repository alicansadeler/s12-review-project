/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function CommentItem({ item }) {
  const itemDate = formatDistanceToNow(item.createdAt, {
    addSuffix: true,
    locale: tr,
  });
  return (
    <div className="border-2 rounded-md border-slate-200 p-4 my-4 w-3/4 mx-auto">
      <p>{item.title}</p>
      <p className="mt-4 text-right">{itemDate}</p>
    </div>
  );
}
