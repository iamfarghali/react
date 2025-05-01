import Button from "../ui/Button";

function Buttons() {
  return (
    <div className="container">
      {/* Defualt */}
      <div className="stack">
        <Button>Save my new component</Button>
      </div>

      {/* Primary */}
      <div className="stack">
        <Button
          variant="primary"
          size="sm"
          onClick={() => alert("Login")}
          disabled
        >
          Login
        </Button>
        <Button variant="primary" size="md" onClick={() => alert("Update")}>
          Update
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={() => alert("Create new account")}
          loading
        >
          Create new account
        </Button>
      </div>
      
      {/* Secondary */}
      <div className="stack">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => alert("Ask a demo")}
          loading
        >
          Ask a demo
        </Button>
        <Button
          variant="secondary"
          size="md"
          onClick={() => alert("Settings")}
          disabled
        >
          Settings
        </Button>
        <Button variant="secondary" size="lg" onClick={() => alert("Create")}>
          Create
        </Button>
      </div>

      {/* Tertiary */}
      <div className="stack">
        <Button
          variant="tertiary"
          size="sm"
          onClick={() => alert("Ask a demo")}
          loading
        >
          Ask a demo
        </Button>
        <Button
          variant="tertiary"
          size="md"
          onClick={() => alert("Settings")}
          disabled
        >
          Settings
        </Button>
        <Button variant="tertiary" size="lg" onClick={() => alert("Create")}>
          Create
        </Button>
      </div>

      {/* Accent */}
      <div className="stack">
        <Button
          variant="accent"
          size="sm"
          onClick={() => alert("Ask a demo")}
          loading
        >
          Ask a demo
        </Button>
        <Button
          variant="accent"
          size="md"
          onClick={() => alert("Settings")}
          disabled
        >
          Settings
        </Button>
        <Button variant="accent" size="lg" onClick={() => alert("Create")}>
          Create
        </Button>
      </div>

      {/* Neutral */}
      <div className="stack">
        <Button
          variant="neutral"
          size="sm"
          onClick={() => alert("Ask a demo")}
          loadingText="Asking a demo..."
          loading
        >
          Ask a demo
        </Button>
        <Button
          variant="neutral"
          size="md"
          onClick={() => alert("Settings")}
          disabled
        >
          Settings
        </Button>
        <Button variant="neutral" size="lg" onClick={() => alert("Create")}>
          Create
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
