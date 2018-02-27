import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  redirectToAddCoursePage() {
    browserHistory.push('course');
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    createCourse: PropTypes.func
  })
};

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
