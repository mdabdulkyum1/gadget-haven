import PropTypes from 'prop-types'

function ReusableBanner({ children }) {
  return (
    <>
      {children}
    </>
  )
}

ReusableBanner.propTypes = {
  children: PropTypes.object.isRequired,
}

export default ReusableBanner
