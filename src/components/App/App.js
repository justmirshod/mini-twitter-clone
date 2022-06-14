import React from "react";
import AppHeader from "../AppHeader";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import PostList from "../PostList";
import PostAddForm from "../PostaddForm";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to learn ReactJS",
          important: false,
          like: false,
          id: 1,
        },
        { label: "That is so good", important: false, like: false, id: 2 },
        { label: "I need a book...", important: false, like: false, id: 3 },
      ],
      likesNumber: 0,
      term: "",
      filter: "all",
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSeacrh = this.onUpdateSeacrh.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const newArr = data.filter((item) => item.id !== id);

      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    console.log(`important ${id}`);
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0 || term === " ") {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  onUpdateSeacrh(term) {
    this.setState({ term });
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const { term, data, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePost = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSeacrh={this.onUpdateSeacrh} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePost}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
