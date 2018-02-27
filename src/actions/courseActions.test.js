import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {
        id: "ultimate-pivot-table-mastery-for-excel-2016-on-mac",
        title: "Ultimate Pivot Table Mastery For Excel 2016",
        watchHref: "https://www.udemy.com/ultimate-pivot-table-mastery-for-excel-2016-on-mac",
        authorId: "shafiq-marediya",
        length: "1:30",
        category: "Excel"
      };
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };
      const action = courseActions.createCoursesSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should clean BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', done => {
    //example of call with nock
    //nock('http://example.com/')
    //  .get('/courses')
    //  .reply(200, {body: {course: { course data here }}})

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: {
          courses: [
            {
              id: "ultimate-pivot-table-mastery-for-excel-2016-on-mac",
              title: "Ultimate Pivot Table Mastery For Excel 2016"
            }
          ]
        }
      }
    ];
    const store = mockStore({courses: []}, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(()=> {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });
});
