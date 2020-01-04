import PropTypes from 'prop-types'
import React,{Component} from 'react'
class Question extends Component{
render(){
    return(
        <div className='justify-content-center'>
            <div className='bg-info' style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '2em', height: '1.4cm', marginBottom: '1%' }}>{this.props.ques}
</div>

<img style={{width:'50%',height:'40%' ,marginLeft:'25%'}} alt='flag' src={this.props.flag}></img>
        </div>

    )
}
}
Question.propTypes={
    ques:PropTypes.string
}

export default Question;