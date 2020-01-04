import React ,{Component} from 'react'
import Question from './Question'
import Option from './Option'
import Nav from './Nav'
class App extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            fulldata:[],
             ques:'Which state flag is it',
             correct:'Kazakhstan',
             option:[{name:'Nepal'},{name:'Burkina Faso'},{name:'Egypt'},{name:'Kazakhstan'}],
             con:0,
             result:'',
            flag:'https://restcountries.eu/data/kaz.svg'
        }
    }


   componentDidMount(){
       fetch('https://restcountries.eu/rest/v2/all?fields=name;flag')
       .then(data=>data.json())
       .then(d=>{
           
           this.setState({fulldata:d})
           

       })
       
     
   }
   

    compare=(ans)=>{
        if(ans===this.state.correct)
        {
            console.log('correct')
            this.setState({result:'correct'})
            
        }
        else{
            console.log('wrong')
            this.setState({result:'wrong'})
        }

        this.setState({ con: 1 });

    }
    
    restart=()=>{
           this.setState({con:0})
          
           var arr=[0,1,2,3];
          var brr=arr.map(m=>(
              this.state.fulldata[Math.floor(Math.random()*250)]

          )

          )
           this.setState({option:brr},()=>{
               var a = Math.floor(Math.random() * 4)
               this.setState({ flag: this.state.option[a].flag },()=>{
                   this.setState({ correct: this.state.option[a].name }, () => {
                       console.log(this.state.option)
                   })
               })
           })
           
        

           
          


    }

    render(){
        return (
          <div >
            <Nav />
        { (this.state.con===0)?<Question ques={this.state.ques} flag={this.state.flag} />:<div style={{textAlign:'center', marginTop:'3%'}}>{this.state.result==='correct'?<div className="alert alert-success">Correct</div>:<div className="alert alert-danger">Wrong : correct ans is :{this.state.correct}</div>}</div>}
           {this.state.con===1?<div><button style={{marginLeft:'45%' ,marginTop:'2%'}}className='btn btn-primary btn-large' onClick={this.restart}>Next Question</button></div>:<Option option={this.state.option} check={this.compare} />} 
          </div>
        );
    }
}

export default App;
