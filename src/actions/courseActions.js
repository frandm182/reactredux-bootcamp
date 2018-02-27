import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export const loadCoursesSuccess = courses => (
  { type: types.LOAD_COURSES_SUCCESS, courses }
);

export const updateCoursesSuccess = course => (
  { type: types.UPDATE_COURSES_SUCCESS, course }
);

export const createCoursesSuccess = course => (
  { type: types.CREATE_COURSES_SUCCESS, course }
);

export const loadCourses = () => (dispatch) => {
  dispatch(beginAjaxCall());
  return courseApi.getAllCourses()
  .then(courses => {
    dispatch(loadCoursesSuccess(courses));
  })
  .catch(error => {
    dispatch(ajaxCallError());
    throw(error);
  });

};


export const saveCourse = (course) => (dispatch) => {
  dispatch(beginAjaxCall());
  return courseApi.saveCourse(course)
  .then(savedCourse => {
    course.id ?
      dispatch(updateCoursesSuccess(savedCourse)) :
      dispatch(createCoursesSuccess(savedCourse));
  })
  .catch(error => {
    dispatch(ajaxCallError());
    throw(error);
  });
};
