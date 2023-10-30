import Button from "./Button";
import { useState } from "react";

function FormAddFriend({ friendsChange }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleNameChange(e) {
    setName((n) => e.target.value);
  }
  function handleImageChange(e) {
    setImage((i) => e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    setName("");
    setImage("https://i.pravatar.cc/48");
    friendsChange(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Friend Name</label>
      <input type="text" value={name} onChange={handleNameChange} name="name" />
      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={handleImageChange}
        name="image"
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
