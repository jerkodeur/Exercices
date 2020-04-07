import React from 'react'
import PropTypes from 'prop-types'
import './QuoteCard.css'

class QuoteCard extends React.Component {

    constructor(props) {
        super()
        this.state = {
            favorite: false
        }
    }

    render() {
        return (
            <figure className="QuoteCard">
                <img
                    src={this.props.image}
                    alt={this.props.character} />
                <figcaption>
                    <blockquote>
                        {this.props.quote}
                    </blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        <span
                            className={this.state.favorite ? "is-favorite" : ""} onClick={event => {
                                this.setState(this.state.favorite ? { favorite: false } : { favorite: true })
                            }}
                        >&#9733;
                        </span>
                    </p>
                </figcaption>
            </figure>
        )
    }


}

QuoteCard.propTypes = {
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
};

export default QuoteCard