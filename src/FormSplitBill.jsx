import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, changeOwe }) {
  const [bill, setBill] = useState("");
  const [my, setMy] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");
  let fr = bill ? Number(bill) - Number(my) : "";

  function handleSubmit(event) {
    event.preventDefault();
    if (!bill || !my) return;
    console.log(whoIsPaying);
    if (whoIsPaying === "friend") {
      changeOwe(-Number(my));
    } else {
      changeOwe(fr);
    }
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>💰Your expense</label>
      <input
        type="text"
        value={my}
        onChange={(e) =>
          setMy(Number(e.target.value) > bill ? my : e.target.value)
        }
      />
      <label>💰{friend.name}'s expense</label>
      <input type="text" value={fr} disabled />
      <label>💰Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
