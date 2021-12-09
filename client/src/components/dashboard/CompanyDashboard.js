import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CompanyDashboardActions from './CompanyDashboardActions';
import Experience from './Experience';
import Education from './Education';
// import { getCurrentProfile, deleteAccount } from '../../actions/companyprofile';

const CompanyDashboard = ({
  // getCurrentProfile,
  deleteAccount,
  // company_auth: { company_auth },
  // profile: { companyprofile }
}) => {
  // useEffect(() => {
  //   getCurrentProfile();
  // }, [getCurrentProfile]);

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome 
        {/* {company_auth && company_auth.name} */}
      </p>
      {/* {companyprofile !== null ? ( */}
        <>
          <CompanyDashboardActions />
          {/* <Experience experience={companyprofile.experience} />
          <Education education={companyprofile.education} />  */}

          <div className="my-2">
            {/* <button className="btn btn-danger" onClick={() => deleteAccount()}> */}
              <i className="fas fa-user-minus" /> Delete My Account
            {/* </button> */}
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          {/* <Link to="/create-profile" className="btn btn-primary my-1"> */}
            {/* Create Profile */}
          {/* </Link> */}
        </>
      {/* )} */}
    </section>
  );
};

CompanyDashboard.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  // deleteAccount: PropTypes.func.isRequired,
  // company_auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  // company_auth: state.company_auth,
  // profile: state.companyprofile
});

// export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
export default connect(mapStateToProps)(
    CompanyDashboard
);
