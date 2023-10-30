import Friend from "./Friend";
export default function FriendsList({ selectedFriend, friends, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          onSelection={onSelection}
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
