import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import { useState } from "react";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleFriendsChange(friend) {
    setFriends((oldFriends) => [...oldFriends, friend]);
    setIsOpen(false);
  }

  function handleSelect(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsOpen(false);
  }

  function changeResult(owe) {
    console.log(owe);
    let friends1 = [...friends];
    for (let i = 0; i < friends1.length; i++) {
      if (friends1[i] === selectedFriend) {
        friends1[i].balance += owe;
      }
    }
    setFriends(friends1);
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectedFriend={selectedFriend}
          onSelection={handleSelect}
          friends={friends}
        />
        {isOpen && <FormAddFriend friendsChange={handleFriendsChange} />}
        <Button onPress={handleClick}>{isOpen ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill friend={selectedFriend} changeOwe={changeResult} />
      )}
    </div>
  );
}

export default App;
