import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
// import ProfileTop from './ProfileTop';
// import ProfileAbout from './ProfileAbout';
// import ProfileExperience from './ProfileExperience';
// import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';

const CompanyProfile = ({ getProfileById, Companyprofile: { Companyprofile }, company_auth }) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <section className="container">
      {Companyprofile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/companyprofiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {company_auth.isAuthenticated &&
            company_auth.loading === false &&
            company_auth.user._id === Companyprofile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={Companyprofile} />
            <ProfileAbout profile={Companyprofile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {Companyprofile.experience.length > 0 ? (
                <Fragment>
                  {Companyprofile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {/* Companyprofile.education.length > 0 ? (
                <Fragment>
                  {Companyprofile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )} */}
            </div>

            {Companyprofile.githubusername && (
              <ProfileGithub username={Companyprofile.githubusername} />
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  Companyprofile: PropTypes.object.isRequired,
  company_auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  Companyprofile: state.Companyprofile,
  company_auth: state.company_auth
});

export default connect(mapStateToProps, { getProfileById })(CompanyProfile);
