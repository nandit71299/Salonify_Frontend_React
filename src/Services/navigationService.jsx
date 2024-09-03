// navigationService.js
import { useNavigate } from "react-router-dom";

export function navigationService() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goForward = (path) => navigate(path);

  return { goBack, goForward };
}
