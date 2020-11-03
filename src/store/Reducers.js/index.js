// import {combineReducers} from 'redux';
import {
  SAVE_EXP_DATA,
  SAVE_EDU_DATA,
  SAVE_SKILL_DATA,
  DELETE_SKILL_DATA,
  DELETE_EXP_DATA,
  DELETE_EDU_DATA,
  SAVE_PERSONAL_DATA,
  DELETE_PERSONAL_DATA,
} from '../Actions/types';

const initialState = {
  personalData: [],
  expData: [],
  eduData: [],
  skillData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERSONAL_DATA: {
      return {
        ...state,
        personalData: action.payload,
      };
    }
    case DELETE_PERSONAL_DATA: {
      const filteredArray = state.personalData.filter(
        (exp) => exp.id !== action.payload,
      );
      return {
        ...state,
        personalData: filteredArray,
      };
    }
    case SAVE_EDU_DATA: {
      return {
        ...state,
        eduData: [...state.eduData, action.payload],
      };
    }
    case DELETE_EDU_DATA: {
      const filteredArray = state.eduData.filter(
        (exp) => exp.id !== action.payload,
      );
      return {
        ...state,
        expData: filteredArray,
      };
    }
    case SAVE_EXP_DATA: {
      return {
        ...state,
        expData: [...state.expData, action.payload],
      };
    }
    case DELETE_EXP_DATA: {
      const filteredArray = state.expData.filter(
        (exp) => exp.id !== action.payload,
      );
      return {
        ...state,
        expData: filteredArray,
      };
    }

    case SAVE_SKILL_DATA: {
      return {
        ...state,
        skillData: [...state.skillData, action.payload],
      };
    }
    case DELETE_SKILL_DATA: {
      const filteredArray = state.skillData.filter(
        (skill) => skill.id !== action.payload,
      );
      return {
        ...state,
        skillData: filteredArray,
      };
    }
    default:
      return state;
  }
};

// const EduReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// const allReducers = combineReducers({ExpReducer, EduReducer});

export default rootReducer;
