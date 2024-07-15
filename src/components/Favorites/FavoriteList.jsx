import FavoriteItem from "./FavoriteItem";

export default function FavoriteList() {
  const favs = [{ title: "item1" }, { title: "item2" }];
  return (
    <>
      <div className="">
        {favs.map((item, index) => (
          <FavoriteItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
