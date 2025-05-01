import Input from "../ui/Input";

const Inputs = () => {
  return (
    <div className="container">
      <div className="stack">
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      </div>

      <div className="stack">
        <Input type="number" placeholder="Enter your age" />
        <Input type="tel" placeholder="Enter your phone number" />
        <Input type="url" placeholder="Enter your website" />
      </div>

      <div className="stack">
        <Input type="search" placeholder="Search" />
        <Input type="date" placeholder="Select a date" />
        <Input type="time" placeholder="Select a time" />
      </div>

      <div className="stack">
        <Input type="datetime-local" placeholder="Select a date and time" />
        <Input type="week" placeholder="Select a week" />
        <Input type="month" placeholder="Select a month" />
      </div>

      <div className="stack">
        <Input type="color" placeholder="Select a color"  />
      </div>
    </div>
  );
}

export default Inputs;