import {
  DELETE_SKILL_DATA,
  SAVE_EDU_DATA,
  SAVE_EXP_DATA,
  SAVE_SKILL_DATA,
  DELETE_EXP_DATA,
  SAVE_PERSONAL_DATA,
  DELETE_PERSONAL_DATA,
} from './types';

export const savePersonalData = (data) => ({
  type: SAVE_PERSONAL_DATA,
  payload: data,
});

export const deletePersonalData = (data) => ({
  type: DELETE_PERSONAL_DATA,
  payload: data,
});

export const saveEduData = (data) => ({
  type: SAVE_EDU_DATA,
  payload: data,
});

export const saveExpData = (data) => ({
  type: SAVE_EXP_DATA,
  payload: data,
});

export const deleteExpData = (id) => ({
  type: DELETE_EXP_DATA,
  payload: id,
});

export const saveSkillData = (data) => ({
  type: SAVE_SKILL_DATA,
  payload: data,
});

export const deletSkillData = (id) => ({
  type: DELETE_SKILL_DATA,
  payload: id,
});
