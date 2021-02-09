import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledActivity = styled.div`
   display: ${props => props.show ? 'block' : 'none'};
`

function Activity({ show }) {
   return (
      <StyledActivity show={show} >
         coming soon
      </StyledActivity>
   )
}

Activity.propTypes = {
   show: PropTypes.bool.isRequired
}

export default Activity
