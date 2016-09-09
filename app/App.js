import React,{Component} from "react";

import * as d3 from "d3";
import PieChart from "./PieChart";

export default class App extends Component{

	constructor(props){
		super(props);
		this.state = {data:[]};
	}

	componentDidMount(){
		d3.tsv("./data/data.dat")
		   .row(({imports,year})=>(
		   		{imports:Number(imports),
		   			year:Number(year)}
		   	))
		   .get((data)=>{
		   		this.setState({data:data,currentIndex:0});
		   		this.timer = d3.interval(this.advanceIndex.bind(this),500);
		   })
	}

	advanceIndex(){
		let currentIndex = this.state.currentIndex;
		if(currentIndex < this.state.data.length-1){
			this.setState({currentIndex:currentIndex+1});
		}
		else{
			this.timer.stop();
		}
	}

	render(){
		let pie = null;
		let year = null;


		if(this.state.data.length){
			const yearData = this.state.data[this.state.currentIndex];
			const pieData = [{value:yearData.imports,i:0},{value:100-yearData.imports,i:1}];
			year = yearData.year;
			pie = <PieChart data={pieData} x="400" y="100" r="100" />;
		}
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React+D3</h2>								
				</div>
				<div>
					<h1>{year}</h1>				
					<svg width="800" height="600">
						{pie}
					</svg>
				</div>
			</div>
		);
	}

}