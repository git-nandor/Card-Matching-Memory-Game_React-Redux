import { useDispatch } from "react-redux";
import { startGameAction } from "../redux/gameActions";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH_GAME } from "../strings";
import { clearFlipBackCardsThunk } from "../redux/gameThunk";

// Collection of actions for multi-component usage
const useGameActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStartGame = (startActionTypeFlag) => {
    dispatch(clearFlipBackCardsThunk());
    dispatch(startGameAction(startActionTypeFlag));
    navigate(ROUTE_PATH_GAME);
  };

  return {
    handleStartGame,
  };
};

export default useGameActions;
