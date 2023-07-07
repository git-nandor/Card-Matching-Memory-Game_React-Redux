import { useDispatch } from "react-redux";
import { startGameAction } from "../redux/gameActions";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH_GAME } from "../strings";

// Collection of actions for multi-component usage
const useGameActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStartGame = () => {
    dispatch(startGameAction());
    navigate(ROUTE_PATH_GAME);
  };

  return {
    handleStartGame,
  };
};

export default useGameActions;
