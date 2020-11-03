import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'



class App extends Component{
  
  state={
      shape:'',
      width:0,
      height:0,
      rectangleX:0,
      rectangleY:0,
      rectangleRX:0,
      rectangleRY:0,
      rectangleColor:'',
      radius:0,
      circleCX:0,
      circleCY:0,
      circleColor:'',
      polygonPoints:0,
      polygonColor:'',
      ellipseCX:0,
      ellipseCY:0,
      ellipseRX:0,
      ellipseRY:0,
      ellipseColor:''
  }


  changeShape=(e)=>{

     
    let dimensions = JSON.parse(localStorage.getItem(e.target.value))

    // console.log(dimensions[0])

    if (dimensions) {
      this.setState({
        ...dimensions[0],
        shape:e.target.value,
      })
    }else{
      this.setState({
        shape:e.target.value,
      })
    }

   
  }

  

  addToLocalStorage=(key,value)=>{
        
    let item;
    if (localStorage.getItem(key)===null) {
        item = []
    }else{
      // item = JSON.parse(localStorage.getItem(key))
      localStorage.removeItem(key)
      item = []
    }

    item.push(value)

     localStorage.setItem(key,JSON.stringify(item))

  }

 

  render(){
     let dimensions
     let shapeToDisplay

    if (this.state.shape === 'rectangle') {
      
       dimensions =(
         <div>
           <h4>Dimensions</h4>
            <h6>Height</h6>
            <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,height:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.height}/>

            <h6>Width</h6>
            <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,width:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.width}/>

            <h6>X</h6>
            <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,rectangleX:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.rectangleX}/>

            <h6>Y</h6>
            <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,rectangleY:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.rectangleY} />

            <h6>rX</h6>
            <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,rectangleRX:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.rectangleRX}/>

            <h6>rY</h6>
            <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,rectangleRY:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.rectangleRY}/>
            
            <h6>Select color</h6>
            <input type="color" value="#ff0000"  onChange={e=>{this.setState({...this.state,rectangleColor:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} />
         </div>
       )

       shapeToDisplay=(
        <rect width={this.state.width} 
              height={this.state.height} 
              x={this.state.rectangleX} 
              y={this.state.rectangleY} 
              rx={this.state.rectangleRX}
              ry={this.state.rectangleRY}  
              fill={this.state.rectangleColor}
            />
       )
    }else if(this.state.shape === 'circle'){


      dimensions =(
        <div>
          <h4>Dimensions</h4>
           <h6>Radius</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({radius:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.radius}/>

           <h6>cX</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({circleCX:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.circleCX}/>

           <h6>cY</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({circleCY:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.circleCY}/>

           <h6>Select color</h6>
            <input type="color" value="#ff0000"  onChange={e=>{this.setState({...this.state,circleColor:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} />
        </div>
      )
        
      shapeToDisplay=(
        <circle cx={this.state.circleCX} cy={this.state.circleCY} r={this.state.radius} fill={this.state.circleColor}  />
      )
    }else if(this.state.shape ==='polygon'){
      
      dimensions =(
        <div>
          <h4>Dimensions</h4>
           <h6>Points</h6>
           <input type='text' className='Inp' onChange={e=>{this.setState({...this.state,polygonPoints:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.polygonPoints}/>

           <h6>Select color</h6>
            <input type="color" value="#ff0000"  onChange={e=>{this.setState({...this.state,polygonColor:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} />
        </div>
      )
        
      shapeToDisplay=(
        <polygon points={`${this.state.polygonPoints}`} fill={this.state.polygonColor} />
      )
    }else if(this.state.shape ==='ellipse'){

      dimensions =(
        <div>
          <h4>Dimensions</h4>
           <h6>cX</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,ellipseCX:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.ellipseCX}/>

           <h6>cY</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,ellipseCY:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.ellipseCY}/>

           <h6>rX</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,ellipseRX:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.ellipseRX}/>

           <h6>rY</h6>
           <input type='number' className='Inp' onChange={e=>{this.setState({...this.state,ellipseRY:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} value={this.state.ellipseRY}/>

           <h6>Select color</h6>
            <input type="color" value="#ff0000"  onChange={e=>{this.setState({...this.state,ellipseColor:e.target.value});this.addToLocalStorage(this.state.shape,this.state)}} />
        </div>
      )
        
      shapeToDisplay=(
        <ellipse cx={this.state.ellipseCX} cy={this.state.ellipseCY} rx={this.state.ellipseRX} ry={this.state.ellipseRY} fill={this.state.ellipseColor} />
      )

    }

    //display default animating logo when no shape is selected
    let display
    

    if (!this.state.shape) {
      display = (
        <img src={logo} className="App-logo" alt="logo" />
      )
    }else{
      display = (
        <svg width="400" height="100">
            {shapeToDisplay}
         </svg>
      )
    }
    
    return (
      <div className="App">
           <h2>Shape Creator</h2>
           <div style={{width:'100%',display:'flex'}}>
               <div style={{width:'50%'}}>
                  
                   <div>
                     <h4>Select Shape</h4>
                      <select onChange={e=>this.changeShape(e)} className='Inp'>
                        <option value=''>------</option>
                        <option aria-label='rectangle' value="rectangle">Rectangle</option>
                        <option aria-label='circle' value="circle">Circle</option>
                        <option aria-label='polygon' value="polygon">Polygon</option>
                        <option aria-label='ellipse' value="ellipse">Ellipse</option>
                      </select>
                   </div>

                   <div>
                      {dimensions}
                   </div>
                  
                  
                </div>
  
               <div style={{width:'50%',marginTop:'200px'}}>
                    {display}
               </div>
           </div>
      </div>
    );

  }
}


export default App;
