import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledComments = styled.div`
   display: ${props => props.show ? 'block' : 'none'};
`

function Comments({ show }) {
   return (
      <StyledComments show={show} >
         coming soon
      </StyledComments>
   )
}

Comments.propTypes = {
   show: PropTypes.bool.isRequired
}

export default Comments
