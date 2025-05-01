import { useToast } from "../components/Toast/useToast";

import Button from "../ui/Button";

function Toasts() {
  const { toast } = useToast();
  return (
    <div className="stack">
      <Button
        variant="warning"
        onClick={() =>
          toast({
            message: "Be careful there is a hole there!",
            type: "warning",
          })
        }
      >
        Warning toast
      </Button>

      <Button
        variant="error"
        onClick={() =>
          toast({
            message: "Faild to Log in!",
            type: "error",
            manualDismiss: true,
          })
        }
      >
        Error toast
      </Button>

      <Button
        variant="success"
        onClick={() =>
          toast({
            message: "Your profile was updated successfully!",
            type: "success",
            manualDismiss: true,
          })
        }
      >
        Success toast
      </Button>

      <Button
        variant="primary"
        onClick={() =>
          toast({
            message: "Your profile is pretty awesome!",
            type: "info",
            manualDismiss: true,
          })
        }
      >
        Info toast
      </Button>
    </div>
  );
}

export default Toasts;
