import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGameAction } from "../redux/gameActions";
import { clearFlipBackCardsThunk } from "../redux/gameThunk";
import { ROUTE_PATH_GAME } from "../strings";


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
