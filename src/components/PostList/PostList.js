import PostListItem from "../PostListItem";
import "./Postlist.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    // const {id, ...itemProps} = item;
    return (
      <li key={item.id} className="list-group-item">
        <PostListItem
          {...item}
          onDelete={onDelete}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleLiked={() => onToggleLiked(item.id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
