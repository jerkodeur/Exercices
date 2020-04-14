import React from 'react'
import './Quote.css'
import PropTypes from 'prop-types'

const Quote = ({ quote }) => (
  <figure className="QuoteCard">
    <img
      src={quote.image}
      alt={quote.character} />
    <figcaption>
      <blockquote>
        {quote.quote}
      </blockquote>
      <p>
        <cite>{quote.character}</cite>
      </p>
    </figcaption>
  </figure>
)


Quote.propTypes = {
  quote: PropTypes.shape({
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  })
};

export default Quote